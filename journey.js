/* Campaign Journey — activity-matrix renderer.
   Reads the fixed JOURNEY_BLUEPRINT and overlays the per-state status from STATES. */
(function(){
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  let activeStateCode = "MH";
  let activePhaseN = 1;

  const PHASE_BG = {
    1: "linear-gradient(180deg,#f0fdfa 0%,#ecfeff 100%)",
    2: "linear-gradient(180deg,#ecfeff 0%,#e0f2fe 100%)",
    3: "linear-gradient(180deg,#e0f2fe 0%,#bae6fd 100%)",
    4: "linear-gradient(180deg,#fde68a 0%,#fef3c7 100%)",
    5: "linear-gradient(180deg,#f1f5f9 0%,#e2e8f0 100%)"
  };
  const PHASE_TONE = { 1:"#0e7490", 2:"#0891b2", 3:"#1e40af", 4:"#a16207", 5:"#475569" };

  function getState(){
    if (typeof STATES === "undefined") return null;
    return STATES[activeStateCode] || STATES[Object.keys(STATES)[0]] || null;
  }
  function getTeam(id){ return (typeof TEAMS !== "undefined" ? TEAMS.find(t => t.id === id) : null) || { icon:"⚙️", name:id, function:"" }; }
  function statusFor(taskId){
    const st = getState(); if (!st || !st.status) return { status: "pending", progress: 0, notes: "" };
    return st.status[taskId] || { status: "pending", progress: 0, notes: "" };
  }
  function targetFor(task, s){
    if (s.target && s.target > 0) return s.target;
    if (task.target && task.target.value) return task.target.value;
    return 1;
  }
  function pctOf(task, s){
    const t = targetFor(task, s); if (!t) return 0;
    return Math.max(0, Math.min(100, Math.round((s.progress / t) * 100)));
  }
  function fmt(n){
    if (n >= 1000000) return (n/1000000).toFixed(1).replace(/\.0$/,"") + "M";
    if (n >= 1000)    return (n/1000).toFixed(1).replace(/\.0$/,"") + "K";
    return String(n);
  }

  /* ---------- state selector ---------- */
  function buildStateSelector(){
    const sel = $("#jrnStateSel");
    sel.innerHTML = Object.values(STATES).map(s =>
      `<option value="${s.code}" ${s.code===activeStateCode?"selected":""}>${s.name} (${s.code})</option>`
    ).join("");
    sel.addEventListener("change", e => {
      activeStateCode = e.target.value;
      const st = getState();
      activePhaseN = st.currentPhase || 1;
      renderAll();
    });
  }

  /* ---------- header ---------- */
  function renderHeader(){
    const st = getState();
    if (!st) { $("#jrnLeadCard").innerHTML = "<p class='muted'>No state data.</p>"; $("#jrnStatsCard").innerHTML = ""; return; }

    const poll = st.pollingDate ? new Date(st.pollingDate) : null;
    let pollingStr = "—";
    if (poll && !isNaN(poll)){
      const days = Math.round((poll - new Date()) / 86400000);
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
          ${lead.phone ? `<a class="jrn-contact-btn" href="tel:${(lead.phone||"").replace(/\s/g,"")}">📞 ${lead.phone}</a>` : ""}
          ${lead.email ? `<a class="jrn-contact-btn" href="mailto:${lead.email}">✉️ Email</a>` : ""}
          ${lead.slack ? `<a class="jrn-contact-btn" href="#">💬 ${lead.slack}</a>` : ""}
        </div>
      </div>`;

    const phases = JOURNEY_BLUEPRINT.phases;
    const total = phases.length;
    // compute completion across all tasks for honest progress
    const allTasks = phases.flatMap(p => p.tasks);
    let done = 0, total_t = allTasks.length;
    allTasks.forEach(t => { if (statusFor(t.id).status === "done") done++; });
    const pct = total_t ? Math.round(done / total_t * 100) : 0;
    const cur = st.currentPhase || 1;
    $("#jrnStatsCard").innerHTML = `
      <div class="jrn-progress-label">
        <b>Phase ${cur} of ${total}</b><span>${done} of ${total_t} tasks complete</span>
      </div>
      <div class="jrn-progress-bar"><div class="jrn-progress-fill" style="width:${pct}%"></div></div>
      <div class="jrn-progress-pct">${pct}%</div>`;
  }

  /* ---------- phase stepper ---------- */
  function renderStepper(){
    const st = getState(); if (!st) return;
    const wrap = $("#jrnStepper");
    const phases = JOURNEY_BLUEPRINT.phases;
    const total = phases.length;
    const cur = st.currentPhase || 1;

    // Stepper status derives from current phase + per-task completion of that phase
    function phaseStatus(ph){
      const tasks = ph.tasks;
      if (!tasks.length) return "locked";
      const allDone = tasks.every(t => statusFor(t.id).status === "done");
      if (allDone) return "done";
      if (ph.n === cur) return "active";
      if (ph.n < cur) return "active"; // earlier phase still has work
      return "locked";
    }
    const phasesWithStatus = phases.map(p => ({ ...p, _status: phaseStatus(p) }));
    const segments = total - 1;
    const doneCount = phasesWithStatus.filter(p => p._status === "done").length;
    const activeIdx = phasesWithStatus.findIndex(p => p._status === "active");
    const fillIdx = doneCount + (activeIdx >= 0 ? 0.5 : 0);
    const fillPct = Math.min(100, (fillIdx / segments) * 80);

    wrap.innerHTML = `
      <div class="jrn-stepper-fill" style="width:${fillPct}%"></div>
      ${phasesWithStatus.map(p => `
        <div class="jrn-step ${p._status} ${p.n===activePhaseN?"selected":""}" data-n="${p.n}">
          <div class="jrn-step-dot">${p._status==="done"?"✓":p.n}</div>
          <div class="jrn-step-card">
            <div class="ph-label">Phase ${p.n}</div>
            <h4>${p.name}</h4>
            <p class="sub">${p.sub||""}</p>
            <span class="jrn-step-status">${p._status==="done"?"Complete":p._status==="active"?"In progress":"Locked"}</span>
          </div>
        </div>`).join("")}`;

    $$(".jrn-step", wrap).forEach(s => s.addEventListener("click", () => {
      activePhaseN = parseInt(s.dataset.n, 10);
      renderStepper(); renderPhaseDetail();
      $("#jrnPhaseDetail").scrollIntoView({behavior:"smooth", block:"start"});
    }));
  }

  /* ---------- active phase detail ---------- */
  function renderPhaseDetail(){
    const st = getState(); if (!st) return;
    const phases = JOURNEY_BLUEPRINT.phases;
    const p = phases.find(x => x.n === activePhaseN) || phases[0];
    if (!p) return;

    const tasksWithStatus = p.tasks.map(t => ({ ...t, _s: statusFor(t.id) }));
    const allDone = tasksWithStatus.every(t => t._s.status === "done");
    const anyActive = tasksWithStatus.some(t => t._s.status === "in_progress");
    const phStatus = allDone ? "done" : anyActive ? "active" : "pending";

    $("#jrnPhaseDetail").innerHTML = `
      <div class="ph-head">
        <div>
          <div class="ph-sub">Phase ${p.n} · ${p.sub || ""}</div>
          <h2>${p.name}</h2>
        </div>
        <span class="jrn-task-status ${phStatus}">${phStatus==="done"?"Complete":phStatus==="active"?"In progress":"Pending"}</span>
      </div>
      <p class="lead">${p.lead || ""}</p>

      <div class="jrn-prereqs">
        <div class="jrn-prereq-col">
          <div class="col-label">Prerequisites</div>
          <ul>${(p.prerequisites||[]).map(x=>`<li>${x}</li>`).join("")}</ul>
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
        <h3>Teams in play this phase · ${tasksWithStatus.length}</h3>
        <div class="jrn-team-grid">
          ${tasksWithStatus.map(task => {
            const t = getTeam(task.team);
            const pct = pctOf(task, task._s);
            const targetVal = targetFor(task, task._s);
            return `<button class="jrn-team-card ${task._s.status}" data-task="${task.id}">
              <div class="row">
                <span class="icon">${t.icon||"⚙️"}</span>
                <div class="nm"><b>${t.name?.split(" — ")[0] || task.team}</b><small>${task.title}</small></div>
              </div>
              <p class="desc">${task.description||""}</p>
              <div class="jrn-mini-progress" title="${task._s.progress} of ${targetVal} ${task.target?.unit||""}">
                <div class="jrn-mini-progress-bar"><div style="width:${pct}%"></div></div>
                <span>${fmt(task._s.progress)} / ${fmt(targetVal)} ${task.target?.unit||""}</span>
              </div>
              <div class="badges">
                <span class="jrn-task-status ${task._s.status}">${task._s.status.replace("_"," ")}</span>
                ${task.eta?`<span class="jrn-eta-pill">${task.eta}</span>`:""}
                ${task._s.notes?`<span class="jrn-blocker-pill" title="${task._s.notes.replace(/"/g,'&quot;')}">⚠ note</span>`:""}
              </div>
            </button>`;
          }).join("")}
        </div>
      </div>`;

    $$(".jrn-team-card", $("#jrnPhaseDetail")).forEach(c => {
      c.addEventListener("click", () => openDrawer(c.dataset.task));
    });
  }

  /* ---------- activity matrix ---------- */
  function renderMatrix(){
    const wrap = $("#jrnMatrix"); if (!wrap) return;
    const phases = JOURNEY_BLUEPRINT.phases;
    const teams = Object.keys(TASKS_BY_TEAM).sort((a,b)=>{
      const A = getTeam(a).name || a, B = getTeam(b).name || b;
      return A.localeCompare(B);
    });
    const st = getState();

    // Build phase header
    let html = `<div class="jrn-mx-grid" style="grid-template-columns:200px repeat(${phases.length},1fr)">`;
    html += `<div class="jrn-mx-corner"></div>`;
    phases.forEach(p => {
      const isCur = st && p.n === st.currentPhase;
      html += `<div class="jrn-mx-phase ${isCur?'current':''}" style="background:${PHASE_BG[p.n]}">
        <span class="ph-no">Phase ${p.n}</span>
        <b>${p.name}</b>
        <small>${p.sub||""}</small>
      </div>`;
    });

    // Rows
    teams.forEach(teamId => {
      const t = getTeam(teamId);
      html += `<div class="jrn-mx-team"><span class="icon">${t.icon||"⚙️"}</span><b>${(t.name||teamId).split(" — ")[0].split(" / ")[0]}</b></div>`;
      phases.forEach(p => {
        const tasks = p.tasks.filter(x => x.team === teamId);
        const isCur = st && p.n === st.currentPhase;
        if (!tasks.length){
          html += `<div class="jrn-mx-cell empty ${isCur?'current':''}" style="background:${PHASE_BG[p.n]}"></div>`;
          return;
        }
        const taskCells = tasks.map(task => {
          const s = statusFor(task.id);
          const pct = pctOf(task, s);
          const isFocus = st && st.focusTaskId === task.id;
          const targetVal = targetFor(task, s);
          return `<button class="jrn-mx-task ${s.status}${isFocus?' focus':''}" data-task="${task.id}" title="${task.title}">
            <span class="ttl">${task.title}</span>
            <div class="jrn-mx-bar"><div style="width:${pct}%"></div></div>
            <span class="sub">${fmt(s.progress)} / ${fmt(targetVal)} ${task.target?.unit||""}</span>
            ${isFocus && st?.stateLead?.photo ? `<img class="poc-avatar lead" src="${st.stateLead.photo}" alt="${st.stateLead.name||''}" title="${(st.stateLead.name||'')+' is here'}" onerror="this.style.display='none'"/>` : ""}
          </button>`;
        }).join("");
        html += `<div class="jrn-mx-cell ${isCur?'current':''}" style="background:${PHASE_BG[p.n]}">${taskCells}</div>`;
      });
    });
    html += `</div>`;
    wrap.innerHTML = html;

    $$(".jrn-mx-task", wrap).forEach(c => c.addEventListener("click", () => openDrawer(c.dataset.task)));
  }

  /* ---------- detail drawer ---------- */
  function openDrawer(taskId){
    const task = TASKS_BY_ID[taskId]; if (!task) return;
    const team = getTeam(task.team);
    const s = statusFor(taskId);
    const targetVal = targetFor(task, s);
    const pct = pctOf(task, s);
    const poc = task.poc || {};
    const pocPhoto = poc.photo ? `<img src="${poc.photo}" alt="" onerror="this.style.display='none'"/>` : "";

    $("#jrnDrawerPanel").innerHTML = `
      <div class="jrn-drawer-head">
        <button class="close" id="jrnDrawerClose">✕</button>
        <span class="icon">${team.icon||"⚙️"}</span>
        <div class="team-name">${(team.name||task.team).split(" — ")[0]} · Phase ${task.phase}</div>
        <h3>${task.title || ""}</h3>
      </div>
      <div class="jrn-drawer-body">

        <div class="jrn-drawer-block"><div class="label">Status</div>
          <p><span class="jrn-task-status ${s.status}">${s.status.replace("_"," ")}</span></p>
          ${s.notes ? `<div class="jrn-blocker-note">⚠ ${s.notes}</div>` : ""}
        </div>

        <div class="jrn-drawer-block"><div class="label">Progress</div>
          <div class="jrn-mini-progress">
            <div class="jrn-mini-progress-bar"><div style="width:${pct}%"></div></div>
            <span><b>${fmt(s.progress)}</b> / ${fmt(targetVal)} ${task.target?.unit||""} <i style="color:var(--muted)">(${pct}%)</i></span>
          </div>
        </div>

        <div class="jrn-drawer-block"><div class="label">What this team provides</div><p>${task.description || ""}</p></div>
        <div class="jrn-drawer-block"><div class="label">ETA</div><p><b>${task.eta || "—"}</b></p></div>
        <div class="jrn-drawer-block"><div class="label">Input required</div><p>${task.input || "—"}</p></div>
        <div class="jrn-drawer-block"><div class="label">Completion criteria</div><p>${task.output || "—"}</p></div>

        <div class="jrn-drawer-block">
          <div class="label">Point of contact</div>
          <div class="jrn-drawer-poc">
            <div class="jrn-drawer-poc-photo">${pocPhoto}</div>
            <div class="jrn-drawer-poc-info">
              <b>${poc.name || "—"}</b>
              <small>${poc.role || ""}</small>
              <div class="jrn-drawer-poc-contacts">
                ${poc.phone?`<a class="jrn-contact-btn" href="tel:${(poc.phone||"").replace(/\s/g,"")}">📞 ${poc.phone}</a>`:""}
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

  /* ---------- schema reference panel ---------- */
  function buildSchemaPanel(){
    const btn = $("#jrnSchemaBtn"); const box = $("#jrnSchema");
    btn.addEventListener("click", e => {
      e.preventDefault();
      box.hidden = !box.hidden;
      btn.textContent = box.hidden ? "Show schema reference" : "Hide schema reference";
    });
    box.textContent = `Sheet schema — one tab per state (tab name = state code, e.g. MH, KL).

Columns (header row 1):
  Section | TaskId | Name | Status | Progress | Target | Notes |
  Phone | Email | Slack | Photo | Role | PollingDate | CurrentPhase

Row types via Section column:
  meta     → Name = state full name, PollingDate = YYYY-MM-DD, CurrentPhase = 1..5,
              TaskId = (optional) the task the State PD is currently focused on
              (e.g. p2.smcc.pages) — drives where the PD avatar stands
  lead     → Name/Role/Phone/Email/Slack/Photo for the State PD
  status   → TaskId = id from blueprint (e.g. p2.smcc.pages),
             Status = done | in_progress | blocked | pending,
             Progress = current value (number),
             Target = goal value (optional; falls back to blueprint default),
             Notes = blocker / context note

The journey (phases, tasks, POCs, ETAs, inputs, outputs) is FIXED in
journey-blueprint.js — the sheet only carries live status & progress
overlays per state.`;
  }

  function showLoading(msg){
    const el = $("#jrnPolling");
    if (el) el.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px"><span class="loading-dot"></span>${msg}</span>`;
  }

  function mountReveal(){
    const els = $$(".scroll-reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("visible")); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
    els.forEach(el => io.observe(el));
    setTimeout(() => els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("visible");
    }), 30);
  }

  function renderAll(){ renderHeader(); renderStepper(); renderPhaseDetail(); renderMatrix(); }

  document.addEventListener("DOMContentLoaded", async () => {
    buildStateSelector();
    let st = getState();
    activePhaseN = st?.currentPhase || 1;
    renderAll();
    buildSchemaPanel();
    mountReveal();
    $("#jrnDrawerScrim").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

    if (typeof loadJourneyFromSheet === "function") {
      showLoading("Loading latest from Sheet…");
      try {
        const live = await loadJourneyFromSheet();
        const keys = Object.keys(live || {});
        if (keys.length) {
          for (const k of keys) STATES[k] = live[k];
          if (!STATES[activeStateCode]) activeStateCode = keys[0];
          st = getState();
          activePhaseN = st?.currentPhase || 1;
          buildStateSelector();
          renderAll();
          mountReveal();
        }
      } catch (e) { console.warn("Live sheet load failed; using placeholder.", e); }
    }
  });
})();
