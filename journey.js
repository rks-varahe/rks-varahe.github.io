/* Campaign Journey page — renders gamified phase tracker from JOURNEY data */
(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  let activeStateCode = "MH";
  let activePhaseN = 1;

  function getState(){
    if (typeof JOURNEY === "undefined") return null;
    return JOURNEY[activeStateCode] || JOURNEY[Object.keys(JOURNEY)[0]] || null;
  }

  /* ---------- state selector ---------- */
  function buildStateSelector(){
    const sel = $("#jrnStateSel");
    sel.innerHTML = Object.values(JOURNEY).map(s =>
      `<option value="${s.code}" ${s.code===activeStateCode?"selected":""}>${s.name} (${s.code})</option>`
    ).join("");
    sel.addEventListener("change", e => {
      activeStateCode = e.target.value;
      const st = getState();
      activePhaseN = st.currentPhase || 1;
      renderAll();
    });
  }

  /* ---------- header (lead card + stats) ---------- */
  function renderHeader(){
    const st = getState();
    if (!st) {
      $("#jrnLeadCard").innerHTML = "<p class='muted'>No state data available.</p>";
      $("#jrnStatsCard").innerHTML = "";
      return;
    }
    // polling date
    const poll = st.pollingDate ? new Date(st.pollingDate) : null;
    let pollingStr = "—";
    if (poll && !isNaN(poll)){
      const today = new Date();
      const days = Math.round((poll - today) / 86400000);
      const dt = poll.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
      pollingStr = `<b>${dt}</b>` + (days >= 0 ? ` · T-${days} days` : ` · post-poll`);
    }
    $("#jrnPolling").innerHTML = `Polling: ${pollingStr}`;

    const lead = st.stateLead || {};
    const photo = lead.photo ? `<img src="${lead.photo}" alt="${lead.name||""}" onerror="this.style.display='none'"/>` : "";
    $("#jrnLeadCard").innerHTML = `
      <div class="jrn-lead-photo">${photo}</div>
      <div class="jrn-lead-info">
        <div class="role">${lead.role || "State Lead"}</div>
        <b>${lead.name || "—"}</b>
        <div class="jrn-lead-contacts">
          ${lead.phone ? `<a class="jrn-contact-btn" href="tel:${(lead.phone||"").replace(/\\s/g,"")}">📞 ${lead.phone}</a>` : ""}
          ${lead.email ? `<a class="jrn-contact-btn" href="mailto:${lead.email}">✉️ Email</a>` : ""}
          ${lead.slack ? `<a class="jrn-contact-btn" href="#">💬 ${lead.slack}</a>` : ""}
        </div>
      </div>`;

    // progress stats
    const total = st.phases.length;
    const done  = st.phases.filter(p => p.status === "done").length;
    const cur   = st.currentPhase || 1;
    const pct   = Math.round((done + (st.phases.find(p=>p.n===cur && p.status==="active") ? 0.5 : 0)) / total * 100);
    $("#jrnStatsCard").innerHTML = `
      <div class="jrn-progress-label">
        <b>Phase ${cur} of ${total}</b><span>${done} of ${total} complete</span>
      </div>
      <div class="jrn-progress-bar"><div class="jrn-progress-fill" style="width:${pct}%"></div></div>
      <div class="jrn-progress-pct">${pct}%</div>`;
  }

  /* ---------- 5-phase stepper ---------- */
  function renderStepper(){
    const st = getState();
    const wrap = $("#jrnStepper");
    if (!st || !st.phases?.length) { wrap.innerHTML = ""; return; }
    const total = st.phases.length;
    const doneCount = st.phases.filter(p => p.status === "done").length;
    const activeIdx = st.phases.findIndex(p => p.status === "active");
    // fill percent: 0 → 100 spread across (total-1) segments
    const segments = total - 1;
    const fillIdx = doneCount + (activeIdx >= 0 ? 0.5 : 0);
    const fillPct = Math.min(100, (fillIdx / segments) * 80);

    wrap.innerHTML = `
      <div class="jrn-stepper-fill" style="width:${fillPct}%"></div>
      ${st.phases.map(p => `
        <div class="jrn-step ${p.status} ${p.n===activePhaseN?"selected":""}" data-n="${p.n}">
          <div class="jrn-step-dot">${p.status==="done"?"✓":p.n}</div>
          <div class="jrn-step-card">
            <div class="ph-label">Phase ${p.n}</div>
            <h4>${p.name}</h4>
            <p class="sub">${p.sub||""}</p>
            <span class="jrn-step-status">${p.status==="done"?"Complete":p.status==="active"?"In progress":"Locked"}</span>
          </div>
        </div>`).join("")}`;

    $$(".jrn-step", wrap).forEach(s => s.addEventListener("click", () => {
      const n = parseInt(s.dataset.n, 10);
      activePhaseN = n;
      renderStepper();
      renderPhaseDetail();
      const detail = $("#jrnPhaseDetail");
      if(detail) detail.scrollIntoView({behavior:"smooth", block:"start"});
    }));
  }

  /* ---------- active phase detail ---------- */
  function renderPhaseDetail(){
    const st = getState();
    if (!st || !st.phases?.length) { $("#jrnPhaseDetail").innerHTML = "<p class='muted'>No phases for this state yet.</p>"; return; }
    const p  = st.phases.find(x => x.n === activePhaseN) || st.phases[0];
    const teamLookup = id => (typeof TEAMS !== "undefined" ? TEAMS.find(t => t.id === id) : null);

    $("#jrnPhaseDetail").innerHTML = `
      <div class="ph-head">
        <div>
          <div class="ph-sub">Phase ${p.n} · ${p.sub || ""}</div>
          <h2>${p.name}</h2>
        </div>
        <span class="jrn-task-status ${p.status}">${p.status==="done"?"Complete":p.status==="active"?"In progress":"Locked"}</span>
      </div>
      <p class="lead">${p.lead || ""}</p>

      <div class="jrn-prereqs">
        <div class="jrn-prereq-col">
          <div class="col-label">Prerequisites</div>
          <ul>${(p.prerequisites||[]).map(x=>`<li>${x}</li>`).join("") || "<li><i>None listed</i></li>"}</ul>
        </div>
        <div class="jrn-prereq-col">
          <div class="col-label">Start trigger</div>
          <p>${p.startTrigger || "—"}</p>
        </div>
        <div class="jrn-prereq-col">
          <div class="col-label">Completion signal</div>
          <p>${p.completionSignal || "—"}</p>
        </div>
      </div>

      <div class="jrn-teams-section">
        <h3>Teams in play this phase · ${p.tasks?.length||0}</h3>
        <div class="jrn-team-grid">
          ${(p.tasks||[]).map((task, i) => {
            const t = teamLookup(task.team) || {icon:"⚙️", name:task.team, function:""};
            return `<button class="jrn-team-card" data-phase="${p.n}" data-task="${i}">
              <div class="row">
                <span class="icon">${t.icon||"⚙️"}</span>
                <div class="nm"><b>${t.name?.split(" — ")[0] || task.team}</b><small>${t.function||""}</small></div>
              </div>
              <p class="desc">${task.description||""}</p>
              <div class="badges">
                <span class="jrn-task-status ${task.status||"pending"}">${(task.status||"pending").replace("_"," ")}</span>
                ${task.eta?`<span class="jrn-eta-pill">${task.eta}</span>`:""}
              </div>
            </button>`;
          }).join("") || "<p class='muted'>No teams listed for this phase yet.</p>"}
        </div>
      </div>`;

    $$(".jrn-team-card", $("#jrnPhaseDetail")).forEach(c => {
      c.addEventListener("click", () => {
        const phN = parseInt(c.dataset.phase, 10);
        const tIdx = parseInt(c.dataset.task, 10);
        openDrawer(phN, tIdx);
      });
    });
  }

  /* ---------- task drawer ---------- */
  function openDrawer(phN, taskIdx){
    const st = getState();
    const p = st.phases.find(x=>x.n===phN);
    const task = p?.tasks?.[taskIdx]; if(!task) return;
    const teamLookup = id => (typeof TEAMS !== "undefined" ? TEAMS.find(t => t.id === id) : null);
    const t = teamLookup(task.team) || {icon:"⚙️", name:task.team, function:""};
    const poc = task.poc || {};
    const pocPhoto = poc.photo ? `<img src="${poc.photo}" alt="" onerror="this.style.display='none'"/>` : "";

    $("#jrnDrawerPanel").innerHTML = `
      <div class="jrn-drawer-head">
        <button class="close" id="jrnDrawerClose">✕</button>
        <span class="icon">${t.icon||"⚙️"}</span>
        <div class="team-name">${t.name?.split(" — ")[0] || task.team} · Phase ${phN}</div>
        <h3>${task.title || ""}</h3>
      </div>
      <div class="jrn-drawer-body">
        <div class="jrn-drawer-block">
          <div class="label">What this team provides</div>
          <p>${task.description || ""}</p>
        </div>
        <div class="jrn-drawer-block">
          <div class="label">ETA</div>
          <p><b>${task.eta || "—"}</b></p>
        </div>
        <div class="jrn-drawer-block">
          <div class="label">Input required</div>
          <p>${task.input || "—"}</p>
        </div>
        <div class="jrn-drawer-block">
          <div class="label">Completion criteria</div>
          <p>${task.output || "—"}</p>
        </div>
        <div class="jrn-drawer-block">
          <div class="label">Status</div>
          <p><span class="jrn-task-status ${task.status||"pending"}">${(task.status||"pending").replace("_"," ")}</span></p>
        </div>

        <div class="jrn-drawer-block">
          <div class="label">Point of contact</div>
          <div class="jrn-drawer-poc">
            <div class="jrn-drawer-poc-photo">${pocPhoto}</div>
            <div class="jrn-drawer-poc-info">
              <b>${poc.name || "—"}</b>
              <small>${poc.role || ""}</small>
              <div class="jrn-drawer-poc-contacts">
                ${poc.phone?`<a class="jrn-contact-btn" href="tel:${(poc.phone||"").replace(/\\s/g,"")}">📞 ${poc.phone}</a>`:""}
                ${poc.email?`<a class="jrn-contact-btn" href="mailto:${poc.email}">✉️ Email</a>`:""}
                ${poc.slack?`<a class="jrn-contact-btn" href="#">💬 ${poc.slack}</a>`:""}
                <a class="jrn-contact-btn" href="team.html?id=${task.team}">↗ Team page</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    $("#jrnDrawer").setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    $("#jrnDrawerClose").addEventListener("click", closeDrawer);
  }
  function closeDrawer(){
    $("#jrnDrawer").setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }

  /* ---------- schema reference ---------- */
  function buildSchemaPanel(){
    const btn = $("#jrnSchemaBtn"); const box = $("#jrnSchema");
    btn.addEventListener("click", e => {
      e.preventDefault();
      box.hidden = !box.hidden;
      btn.textContent = box.hidden ? "Show schema reference" : "Hide schema reference";
    });
    box.textContent = `One tab per state. Tab name = state code (MH, KL, GA, OD, …).

Columns (header row 1):
  Section | Phase | Team | Title | Description | ETA | Input | Output | Status | PocName | PocRole | PocPhone | PocEmail | PocSlack | PocPhoto

Row types via Section column:
  meta        — Title=State name, Description=Polling YYYY-MM-DD
  state_lead  — PocName/Role/Phone/Email/Slack/Photo for the State PD
  phase       — Phase (1-5), Title=Phase short name, Description=lead paragraph,
                 Input=prereqs separated by ' · ', Output=completion signal, Status (done/active/pending)
  task        — Phase (1-5), Team=team id from teams list, plus task fields
                 and POC for that team in this phase.

POC photo formats:
  • Any public image URL (https://…)
  • Drive share link in form: https://drive.google.com/uc?id=FILE_ID

Status values: done · in_progress · pending · blocked

Team IDs available:
  arc, campaign-branding, party, growth, influencer, legal, media,
  narrative, non-meta, party-coord, reporter, smcc, surrogate,
  third-party, tvc, partnership`;
  }

  /* ---------- glue ---------- */
  function renderAll(){
    renderHeader();
    renderStepper();
    renderPhaseDetail();
  }

  function showLoading(msg){
    const el = $("#jrnPolling");
    if (el) el.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px"><span class="loading-dot" style="width:8px;height:8px;border-radius:50%;background:var(--teal-500);animation:jrnPulse 1.4s ease-in-out infinite"></span>${msg}</span>`;
  }

  document.addEventListener("DOMContentLoaded", async () => {
    // 1) Initial render with placeholder data so the page is never empty.
    buildStateSelector();
    let st = getState();
    activePhaseN = st.currentPhase || 1;
    renderAll();
    buildSchemaPanel();
    $("#jrnDrawerScrim").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", e => { if(e.key === "Escape") closeDrawer(); });

    // 2) Then try to load live data from the Google Sheet and replace.
    if (typeof loadJourneyFromSheet === "function") {
      showLoading("Loading latest from Sheet…");
      try {
        const live = await loadJourneyFromSheet();
        const keys = Object.keys(live || {});
        if (keys.length) {
          // Replace any state we got fresh data for; keep placeholders otherwise.
          for (const k of keys) JOURNEY[k] = live[k];
          // Re-render with fresh data, preserving the currently active state if possible.
          if (!JOURNEY[activeStateCode]) activeStateCode = keys[0];
          st = getState();
          activePhaseN = st.currentPhase || 1;
          buildStateSelector();
          renderAll();
        }
      } catch (e) {
        console.warn("Live sheet load failed; showing placeholder data.", e);
      }
    }
  });
})();
