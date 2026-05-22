/* Campaign Journey — scroll-driven narrative through 5 phases × team handoff lanes.
   Role text per team-per-phase is composed from each team's own phase data in data.js
   (XLSX focus text for the 12 sheet teams; docx purpose/window for party/party-coord;
   workflow steps for partnership). The journey itself is a designed product.
*/
(function(){
  "use strict";

  // ---- 5 phases the user asked for ----
  const JOURNEY_PHASES = [
    { n:1, name:"Foundation & Setup", duration:"3 months", window:"T-6 mo → T-3 mo",
      tint:"#ecfeff", accent:"#0e7490",
      headline:"Set the political direction. Build the infrastructure.",
      blurb:"Teams form. Maps and baselines are drawn. The handles, the legal scaffolding, the reporter network — everything that the later phases will lean on — is built now, quietly." },
    { n:2, name:"Narrative Build-Up", duration:"1 month", window:"T-3 mo → T-2 mo",
      tint:"#f0fdfa", accent:"#0891b2",
      headline:"Narratives go live. Networks warm up.",
      blurb:"The first narrative buckets break out of the war room and into the wild. Pages amplify. Influencers pilot. Ads start testing. The campaign is no longer a draft." },
    { n:3, name:"Acceleration", duration:"1 month", window:"T-2 mo → T-1 mo",
      tint:"#fffbeb", accent:"#b45309",
      headline:"High-frequency execution. MCC kicks in.",
      blurb:"Daily narrative meetings begin. The ad volume jumps. Legal vetting goes from steady to constant. Reporter Network deploys at AC level." },
    { n:4, name:"Peak Campaign & Polling", duration:"1 month", window:"T-1 mo → Polling Day",
      tint:"#fef2f2", accent:"#b91c1c",
      headline:"War room. Star campaigners. GOTV.",
      blurb:"Everything is hyperlocal. Everything is timed to the booth. The narrative has moved from screen to street to ballot." },
    { n:5, name:"Wind-Down & Learnings", duration:"1 month", window:"Post-Polling → T+1 mo",
      tint:"#f1f5f9", accent:"#334155",
      headline:"Closure, archival, retention.",
      blurb:"Result-day comms. Final reports. The networks built over six months are stabilised for the next state." }
  ];

  // ---- Lane definitions — which teams sit in which lane ----
  const LANES = [
    { id:"strategy",     label:"Strategy",      teams:["party","party-coord"] },
    { id:"intel",        label:"Intelligence",  teams:["arc","reporter","media"] },
    { id:"direction",    label:"Direction",     teams:["narrative","legal"] },
    { id:"creation",     label:"Creation",      teams:["campaign-branding","tvc"] },
    { id:"distribution", label:"Distribution",  teams:["growth","non-meta","smcc"] },
    { id:"amplify",      label:"Amplification", teams:["third-party","surrogate","influencer","partnership"] }
  ];

  // ---- Per-team-per-phase short role one-liner ----
  // For teams with no XLSX phase entries (party, party-coord, narrative, partnership),
  // we use the composed map below. Everything else reads from t.phases[ph-1].focus.
  const ROLES = {
    "party": {
      1: "Sets political direction with leadership; defines narrative buckets, constituency map and content bank.",
      2: "Narratives go live softly — governance, welfare and leadership messaging start receiving visibility.",
      3: "Daily narrative meetings begin. Quick Response System activates. Paid campaigns roll out.",
      4: "Star campaigners covered live. Mass dissemination across WhatsApp, AC pages and influencers.",
      5: "Result-day narrative prepared in advance; learnings archived for the next election."
    },
    "party-coord": {
      1: "Builds relationships with party leadership; sets up communication protocols and approval logs.",
      2: "Protocols and trackers become daily-use; pre-narrative-call prep tightens.",
      3: "Regular narrative calls with leadership; written task allocation and channel alignment.",
      4: "Real-time coordination, faster approvals, polling-day comms and crisis response.",
      5: "Result-day comms and relationship continuity beyond the result."
    },
    "narrative": {
      1: "Maps the campaign's strategic spine — narrative priorities, opposition vulnerabilities and angles to seed.",
      2: "Translates buckets into reactive frames; briefs content teams as narratives go live.",
      3: "Daily narrative cycles. Triggers from media, opposition and ground are converted into infopacks and speech pointers.",
      4: "Real-time counter-narratives. Rapid frames for star-campaigner moments and ground incidents.",
      5: "Archives narrative-performance learnings; key takeaways doc for the next cycle."
    },
    "partnership": {
      1: "Identifies creator partners; vets editorially, ideologically and commercially.",
      2: "Contracts and onboards partners; aligns them on narrative and briefs.",
      3: "Partner properties carry campaign narratives at full delivery cadence.",
      4: "Last-mile partner pushes synchronised with the polling window.",
      5: "Performance read-out; retain top performers for future campaigns."
    }
  };

  function teamById(id){ return TEAMS.find(t => t.id === id); }
  function teamShortName(t){
    return t.name.split(" — ")[0].split(" / ")[0].split(" (")[0];
  }

  function roleFor(teamId, ph){
    if (ROLES[teamId] && ROLES[teamId][ph]) return ROLES[teamId][ph];
    const t = teamById(teamId);
    if (!t || !t.phases) return "";
    const p = t.phases.find(x => x.ph === ph);
    return p ? (p.focus || "") : "";
  }

  // Split a paragraph into sentence-level bullets. Robust to numbered lists / ellipses.
  function toBullets(text, cls){
    if (!text) return "";
    cls = cls || "drw-bullets";
    // 1) split on explicit bullets if the source already uses ";", "•", or numbered lists
    let parts;
    if (/[•·]\s/.test(text))            parts = text.split(/[•·]\s+/);
    else if (/;\s/.test(text))          parts = text.split(/;\s+/);
    else                                parts = text.match(/[^.!?]+[.!?]+(?:["')\]]+)?|[^.!?]+$/g) || [text];
    const items = parts
      .map(s => s.trim().replace(/^[-–—•·]\s*/, ""))
      .filter(s => s.length > 2);
    if (items.length <= 1) return `<ul class="${cls}"><li>${items[0]||text}</li></ul>`;
    return `<ul class="${cls}">${items.map(b=>`<li>${b}</li>`).join("")}</ul>`;
  }

  function fullRoleFor(teamId, ph){
    const t = teamById(teamId);
    if (!t) return "";
    if (teamId === "party" && t.partyPhases){
      const ix = ph <= 4 ? ph - 1 : 4;
      const block = t.partyPhases[ix];
      if (!block) return "";
      return `<span class="drw-window">${block.window||""}</span>
              <h4>${block.name||""}</h4>
              ${toBullets(block.purpose, "drw-bullets drw-bullets-purpose")}
              ${block.opsGroups ? `
                <div class="drw-ops">${block.opsGroups.map(g=>`
                  <div class="drw-op">
                    <b>${g.head||""}</b>
                    <ul>${(g.bullets||[]).map(b=>`<li>${b}</li>`).join("")}</ul>
                  </div>`).join("")}</div>` : ""}`;
    }
    if (teamId === "party-coord" && t.partyPhases){
      const mapping = {1:0, 2:0, 3:1, 4:2, 5:2};
      const block = t.partyPhases[mapping[ph]];
      if (!block) return "";
      return `<span class="drw-window">${block.window||""}</span>
              <h4>${block.name||""}</h4>
              ${toBullets(block.purpose, "drw-bullets drw-bullets-purpose")}
              ${block.bullets ? `<ul class="drw-bullets">${block.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>`:""}`;
    }
    if (teamId === "partnership" && t.workflowFlow){
      const activeRanges = {1:[0,1], 2:[2,3,4], 3:[5,6], 4:[6,7], 5:[8]};
      const active = new Set(activeRanges[ph]||[]);
      return `<h4>Workflow steps active in this phase</h4>
              <ol class="drw-workflow">${t.workflowFlow.map((s,i)=>`<li class="${active.has(i)?'on':''}">${s}</li>`).join("")}</ol>`;
    }
    if (teamId === "narrative"){
      const r = ROLES["narrative"][ph]||"";
      return `<h4>Narrative — Phase ${ph}</h4>${toBullets(r)}`;
    }
    // Prefer curated bullets when available
    const curated = (typeof TEAM_PHASE_BULLETS !== "undefined") ? TEAM_PHASE_BULLETS[teamId] : null;
    if (curated){
      const phaseBullets = curated.phases && curated.phases[String(ph)];
      if (phaseBullets && phaseBullets.length){
        let body = `<h4>Phase ${ph} focus</h4><ul class="drw-bullets">${phaseBullets.map(b=>`<li>${b}</li>`).join("")}</ul>`;
        if (t.phases){
          const p = t.phases.find(x=>x.ph===ph);
          if (p && p.intensity) body += `<p class="muted" style="font-size:.85rem">Intensity: ${p.intensity}</p>`;
        }
        if (t.criticalPhase && isCriticalPhase(t, ph)){
          const whyBullets = curated.whyCritical;
          if (whyBullets && whyBullets.length){
            body += `<div class="drw-crit"><span class="kicker">Most Critical Phase</span>
                     <ul class="drw-bullets">${whyBullets.map(b=>`<li>${b}</li>`).join("")}</ul></div>`;
          } else {
            body += `<div class="drw-crit"><span class="kicker">Most Critical Phase</span>
                     ${toBullets(t.whyCritical||"")}</div>`;
          }
        }
        return body;
      }
    }
    if (t.phases){
      const p = t.phases.find(x=>x.ph===ph);
      if (p){
        let body = `<h4>Phase ${ph} focus</h4>${toBullets(p.focus||"")}`;
        if (p.intensity) body += `<p class="muted" style="font-size:.85rem">Intensity: ${p.intensity}</p>`;
        if (t.criticalPhase && isCriticalPhase(t, ph)){
          body += `<div class="drw-crit"><span class="kicker">Most Critical Phase</span>
                   ${toBullets(t.whyCritical||"")}</div>`;
        }
        return body;
      }
    }
    return "<p class='muted'>No source data for this team in this phase.</p>";
  }

  function isCriticalPhase(t, ph){
    if (!t.criticalPhase) return false;
    const map = { "foundation":1, "acceleration":2, "peak":3, "conversion":4, "cool":5 };
    const c = t.criticalPhase.toLowerCase();
    for (const k in map){
      if (c.includes(k) && map[k] === ph) return true;
    }
    return false;
  }

  // ---- Render: phase ribbon ----
  function renderRibbon(){
    const r = document.getElementById("jrnRibbon");
    r.innerHTML = JOURNEY_PHASES.map(p => `
      <a class="jrn-rib-chip" href="#jrn-phase-${p.n}" data-ph="${p.n}" style="--accent:${p.accent}">
        <span class="rib-num">${p.n}</span>
        <span class="rib-meta">
          <b>${p.name}</b>
          <small>${p.window} · ${p.duration}</small>
        </span>
      </a>`).join("");
  }

  // ---- Render: phase scenes ----
  function renderScenes(){
    const host = document.getElementById("jrnScenes");
    host.innerHTML = JOURNEY_PHASES.map(p => renderScene(p)).join("");
    host.querySelectorAll(".jrn-team-chip").forEach(el => {
      el.addEventListener("click", () => openDrawer(el.dataset.team, parseInt(el.dataset.ph,10)));
    });
  }

  function renderScene(p){
    const lanesHtml = LANES.map((lane,laneIdx) => {
      const chips = lane.teams.map(tid => {
        const t = teamById(tid);
        if (!t) return "";
        const role = roleFor(tid, p.n);
        const critical = isCriticalPhase(t, p.n);
        const icon = t.icon || "•";
        return `
          <button class="jrn-team-chip ${critical?'critical':''} ${role?'':'dim'}"
                  data-team="${tid}" data-ph="${p.n}" type="button" style="--accent:${p.accent}">
            <span class="chip-icon">${icon}</span>
            <span class="chip-body">
              <b>${teamShortName(t)}</b>
              <span>${role || "—"}</span>
            </span>
            ${critical?`<span class="chip-flag" title="Most critical phase">★</span>`:""}
          </button>`;
      }).join("");
      return `
        <div class="jrn-lane" data-lane="${lane.id}">
          <div class="jrn-lane-side">
            <span class="jrn-lane-num">${laneIdx+1}</span>
            <span class="jrn-lane-label">${lane.label}</span>
          </div>
          <div class="jrn-lane-chips">${chips}</div>
          ${laneIdx < LANES.length-1 ? `<div class="jrn-lane-arrow" aria-hidden="true">→</div>` : ""}
        </div>`;
    }).join("");

    return `
      <section class="jrn-scene scroll-reveal" id="jrn-phase-${p.n}" data-ph="${p.n}" style="--tint:${p.tint};--accent:${p.accent}">
        <div class="jrn-scene-head">
          <span class="jrn-scene-stamp">PHASE ${p.n}</span>
          <span class="jrn-scene-window">${p.window} · ${p.duration}</span>
          <h2>${p.name}</h2>
          <p class="jrn-scene-headline">${p.headline}</p>
          <p class="jrn-scene-blurb">${p.blurb}</p>
        </div>
        <div class="jrn-scene-flow">${lanesHtml}</div>
        ${p.n < 5 ? `<div class="jrn-scene-arrow" aria-hidden="true">▾</div>` : `<div class="jrn-scene-finish" aria-hidden="true">🏁 Result Day</div>`}
      </section>`;
  }

  // ---- Drawer ----
  function openDrawer(teamId, ph){
    const t = teamById(teamId);
    if (!t) return;
    const phase = JOURNEY_PHASES.find(x=>x.n===ph);
    const drawer = document.getElementById("jrnDrawer");
    const panel = document.getElementById("jrnDrawerPanel");
    panel.innerHTML = `
      <div class="drw-head" style="--accent:${phase.accent}">
        <button class="drw-close" id="drwClose" type="button" aria-label="Close">×</button>
        <span class="drw-phase-chip" style="background:${phase.accent}">Phase ${ph} · ${phase.name}</span>
        <div class="drw-team">
          <span class="drw-team-icon">${t.icon||"•"}</span>
          <div>
            <h3>${teamShortName(t)}</h3>
            <p class="muted">${t.tagline||""}</p>
          </div>
        </div>
      </div>
      <div class="drw-body">
        ${fullRoleFor(teamId, ph)}
        <div class="drw-cta">
          <a class="btn-primary" href="team.html?id=${teamId}">Open full team page →</a>
        </div>
      </div>`;
    document.getElementById("drwClose").addEventListener("click", closeDrawer);
    document.getElementById("jrnDrawerScrim").addEventListener("click", closeDrawer, { once: true });
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden","false");
  }
  function closeDrawer(){
    const drawer = document.getElementById("jrnDrawer");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden","true");
  }

  // ---- Car animation ----
  function updateCarPosition(){
    const stage = document.getElementById("jrnStage");
    if (!stage) return;
    const stageRect = stage.getBoundingClientRect();
    const stageTop = window.scrollY + stageRect.top;
    const stageHeight = stage.offsetHeight;
    const vp = window.innerHeight;
    let progress = (window.scrollY + vp*0.45 - stageTop) / stageHeight;
    progress = Math.max(0, Math.min(1, progress));

    const car = document.getElementById("jrnCar");
    if (!car) return;
    const rail = car.parentElement;
    const railHeight = rail.offsetHeight;
    const carHeight = car.offsetHeight;
    const usable = railHeight - carHeight;
    const y = progress * usable;
    const tilt = Math.sin(progress * Math.PI * 4) * 4;
    car.style.transform = `translateY(${y}px) rotate(${tilt}deg)`;
    const wiggle = Math.sin(progress * Math.PI * 5) * 14;
    car.style.marginLeft = `${wiggle}px`;

    const currentPh = Math.min(5, Math.max(1, Math.ceil(progress * 5 + 0.001)));
    document.querySelectorAll(".jrn-rib-chip").forEach(el => {
      el.classList.toggle("on", parseInt(el.dataset.ph,10) === currentPh);
    });
  }

  function attachScrollDriver(){
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateCarPosition();
        ticking = false;
      });
    }, { passive: true });
    window.addEventListener("resize", () => requestAnimationFrame(updateCarPosition), { passive:true });
    requestAnimationFrame(updateCarPosition);
  }

  function attachReveal(){
    const els = document.querySelectorAll(".scroll-reveal");
    if (!("IntersectionObserver" in window)){
      els.forEach(el => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    els.forEach(el => io.observe(el));
  }

  function attachSearch(){
    const el = document.getElementById("globalSearch");
    if (!el) return;
    el.addEventListener("keydown", e => {
      if (e.key === "Enter"){
        const q = (el.value||"").trim();
        if (q) location.href = "index.html?q=" + encodeURIComponent(q);
      }
    });
  }

  function init(){
    renderRibbon();
    renderScenes();
    attachReveal();
    attachScrollDriver();
    attachSearch();
    document.querySelectorAll(".jrn-rib-chip").forEach(a => {
      a.addEventListener("click", e => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target){
          e.preventDefault();
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
        }
      });
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
