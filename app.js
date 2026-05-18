/* Varahe NCC — App */
(function(){
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
  // Short display name — strip secondary clauses so labels don't overflow into neighbours
  const TEAM_SHORT = {
    "arc":"ARC","smcc":"SMCC","party":"Party","growth":"Growth","media":"Media","legal":"Legal",
    "narrative":"Narrative","reporter":"Reporter Net","tvc":"TVC & Docs","partnership":"Partnership",
    "influencer":"Influencer","non-meta":"Non-Meta Ads","party-coord":"Party Coord",
    "surrogate":"Surrogate","third-party":"Third Party","campaign-branding":"Branding & Ads"
  };
  const shortTeamName = (n)=> {
    if(typeof TEAMS !== "undefined"){
      const t = TEAMS.find(x=>x.name===n);
      if(t && TEAM_SHORT[t.id]) return TEAM_SHORT[t.id];
    }
    return n.split(" — ")[0].split(" / ")[0].split(" (")[0];
  };

  /* --------------- Theme + Density + Accent --------------- */
  const root = document.documentElement;
  const setTheme = t => { root.setAttribute("data-theme", t); localStorage.setItem("vct-theme", t); };
  const setDensity = d => { root.setAttribute("data-density", d); localStorage.setItem("vct-density", d); };
  const setAccent = a => {
    const map={teal:"#06b6d4",sky:"#0ea5e9",emerald:"#14b8a6",violet:"#8b5cf6",amber:"#f59e0b"};
    const c = map[a]||map.teal; root.style.setProperty("--teal-500",c);
    root.style.setProperty("--gradient",`linear-gradient(135deg,${c} 0%, #0ea5e9 50%, #14b8a6 100%)`);
    localStorage.setItem("vct-accent",a);
  };
  setTheme(localStorage.getItem("vct-theme")||"light");
  setDensity(localStorage.getItem("vct-density")||"normal");
  setAccent(localStorage.getItem("vct-accent")||"teal");

  /* --------------- Dock --------------- */
  function mountDock(){
    if($("#dock")) return;
    const dock = document.createElement("div");
    dock.id="dock"; dock.className="dock";
    dock.innerHTML = `
      <button title="Light"  data-theme="light">☀️</button>
      <button title="Dark"   data-theme="dark">🌙</button>
      <span style="width:1px;background:var(--line);height:24px;margin:0 4px"></span>
      <button title="Compact" data-density="compact">▤</button>
      <button title="Normal"  data-density="normal">▦</button>
      <button title="Comfy"   data-density="comfy">▧</button>
      <span style="width:1px;background:var(--line);height:24px;margin:0 4px"></span>
      <button title="Teal"    data-accent="teal"    style="background:#06b6d4;color:#fff">●</button>
      <button title="Sky"     data-accent="sky"     style="background:#0ea5e9;color:#fff">●</button>
      <button title="Emerald" data-accent="emerald" style="background:#14b8a6;color:#fff">●</button>
      <button title="Violet"  data-accent="violet"  style="background:#8b5cf6;color:#fff">●</button>
      <button title="Amber"   data-accent="amber"   style="background:#f59e0b;color:#fff">●</button>
    `;
    document.body.appendChild(dock);
    dock.addEventListener("click",e=>{
      const b = e.target.closest("button"); if(!b) return;
      if(b.dataset.theme){setTheme(b.dataset.theme); markActive();}
      if(b.dataset.density){setDensity(b.dataset.density); markActive();}
      if(b.dataset.accent){setAccent(b.dataset.accent); markActive();}
    });
    markActive();
    function markActive(){
      $$("#dock button").forEach(b=>{
        b.classList.toggle("active",
          (b.dataset.theme && b.dataset.theme===root.getAttribute("data-theme"))||
          (b.dataset.density && b.dataset.density===(root.getAttribute("data-density")||"normal"))||
          (b.dataset.accent && b.dataset.accent===(localStorage.getItem("vct-accent")||"teal")));
      });
    }
  }

  /* --------------- Search --------------- */
  function mountSearch(){
    const input = $("#globalSearch"); if(!input) return;
    const pop = document.createElement("div"); pop.className="search-pop"; pop.id="searchPop";
    input.parentElement.appendChild(pop);
    function build(q){
      q = q.trim().toLowerCase(); if(!q){pop.classList.remove("show"); pop.innerHTML=""; return;}
      const hay = TEAMS.map(t=>{
        let blob = [t.name,t.tagline,t.purpose||"",t.function||""].join(" ");
        (t.coreFunctions||[]).forEach(s=>{ blob += " "+s.title+" "+(s.items||[]).join(" "); });
        return {t, blob:blob.toLowerCase()};
      });
      const matches = hay.filter(x=>x.blob.includes(q)).slice(0,8);
      const glossMatches = Object.entries(GLOSSARY).filter(([k,v])=>(k+" "+v).toLowerCase().includes(q)).slice(0,5);
      pop.innerHTML = matches.map(m=>`<div class="res" onclick="location.href='team.html?id=${m.t.id}'"><b>${m.t.icon} ${m.t.name}</b><small>${m.t.tagline}</small></div>`).join("")
        + (glossMatches.length?`<div style="padding:8px 14px;color:var(--muted);font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;border-top:1px solid var(--line);margin-top:6px">Glossary</div>`:"")
        + glossMatches.map(([k,v])=>`<div class="res"><b>${k}</b><small>${v}</small></div>`).join("");
      if(!matches.length && !glossMatches.length) pop.innerHTML = `<div class="res"><small>No results for "${q}"</small></div>`;
      pop.classList.add("show");
    }
    input.addEventListener("input",e=>build(e.target.value));
    input.addEventListener("focus",e=>build(e.target.value));
    document.addEventListener("click",e=>{ if(!e.target.closest("#globalSearch") && !e.target.closest("#searchPop")) pop.classList.remove("show"); });
  }

  /* --------------- Glossary auto-tooltips --------------- */
  function decorateGlossary(scope){
    const targets = (scope||document).querySelectorAll("p,li,td");
    const terms = Object.keys(GLOSSARY).sort((a,b)=>b.length-a.length);
    targets.forEach(el=>{
      if(el.dataset.gd) return; el.dataset.gd="1";
      let html = el.innerHTML;
      terms.forEach(t=>{
        const re = new RegExp(`(?<![A-Za-z0-9_>])(${t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})(?![A-Za-z0-9_<])`,"g");
        if(re.test(html) && !html.includes(`data-tip="${GLOSSARY[t]}`)){
          html = html.replace(re,`<span class="tip" data-tip="${GLOSSARY[t].replace(/"/g,'&quot;')}">$1</span>`);
        }
      });
      el.innerHTML = html;
    });
  }

  /* --------------- Scroll reveal --------------- */
  function mountReveal(){
    const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("visible"); }),{threshold:.1});
    $$(".scroll-reveal").forEach(el=>io.observe(el));
  }

  /* --------------- LANDING PAGE renderers --------------- */
  function renderTeamGrid(){
    const grid = $("#teamGrid"); if(!grid) return;
    grid.innerHTML = TEAMS.map(t=>`
      <a href="team.html?id=${t.id}" class="card scroll-reveal" data-cat="${t.category}">
        <span class="icon">${t.icon}</span>
        <span class="tag">${t.function}</span>
        <h3>${t.name}</h3>
        <p class="desc">${t.tagline}</p>
        <span class="link">Explore team</span>
      </a>`).join("");
    mountReveal();
  }

  function mountFilters(){
    const chips = $$("#teamFilters .chip");
    chips.forEach(c=>c.addEventListener("click",()=>{
      chips.forEach(x=>x.classList.remove("active")); c.classList.add("active");
      const f = c.dataset.filter;
      $$("#teamGrid .card").forEach(card=>{
        card.style.display = (f==="all"||card.dataset.cat===f)?"flex":"none";
      });
    }));
  }

  function renderHubTags(){
    const wrap = $("#hubTagFilter"); if(!wrap) return;
    wrap.innerHTML = TAG_ORDER.map(tag => `<span class="hub-tag" data-tag="${tag}">${tag}</span>`).join("");
    wrap.addEventListener("mouseover", e=>{
      const el = e.target.closest(".hub-tag"); if(!el) return;
      highlightHubByTag(el.dataset.tag);
      $$("#hubTagFilter .hub-tag").forEach(x=>x.classList.toggle("hover", x===el));
    });
    wrap.addEventListener("mouseleave", ()=>{ highlightHubByTag(null); $$("#hubTagFilter .hub-tag").forEach(x=>x.classList.remove("hover")); });
    wrap.addEventListener("click", e=>{
      const el = e.target.closest(".hub-tag"); if(!el) return;
      const wasActive = el.classList.contains("locked");
      $$("#hubTagFilter .hub-tag").forEach(x=>x.classList.remove("locked"));
      if(!wasActive){ el.classList.add("locked"); highlightHubByTag(el.dataset.tag, true); }
      else { highlightHubByTag(null, true); }
    });
  }
  function highlightHubByTag(tag, lock){
    const svg = $("#hubDiagram svg"); if(!svg) return;
    const nodes = $$(".hub-node", svg);
    if(!tag){
      nodes.forEach(n=>{ n.classList.remove("dim"); n.classList.remove("on"); });
      svg.classList.remove("filtered");
      return;
    }
    svg.classList.add("filtered");
    nodes.forEach(n=>{
      const id = n.dataset.tid;
      const tags = TEAM_TAGS[id] || [];
      if(tags.includes(tag)){ n.classList.add("on"); n.classList.remove("dim"); }
      else { n.classList.add("dim"); n.classList.remove("on"); }
    });
  }

  function renderHubDiagram(){
    const wrap = $("#hubDiagram"); if(!wrap) return;
    const W=900, H=540, cx=W/2, cy=H/2, R=210;
    const teams = TEAMS;
    let parts = `<svg class="hub-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" aria-label="National Communications Hub">
      <defs><radialGradient id="hubg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#06b6d4"/><stop offset="1" stop-color="#0e7490"/></radialGradient></defs>`;
    teams.forEach((t,i)=>{
      const a = (i/teams.length)*Math.PI*2 - Math.PI/2;
      const x = cx + Math.cos(a)*R, y = cy + Math.sin(a)*R;
      parts += `<line class="hub-line" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`;
    });
    parts += `<g class="hub-center"><circle cx="${cx}" cy="${cy}" r="56" fill="url(#hubg)"/>
      <text x="${cx}" y="${cy-4}" text-anchor="middle" fill="#fff" font-family="Poppins" font-weight="700" font-size="14">NATIONAL</text>
      <text x="${cx}" y="${cy+14}" text-anchor="middle" fill="#fff" font-family="Poppins" font-weight="700" font-size="14">COMMS</text></g>`;
    teams.forEach((t,i)=>{
      const a = (i/teams.length)*Math.PI*2 - Math.PI/2;
      const x = cx + Math.cos(a)*R, y = cy + Math.sin(a)*R;
      const labelX = cx + Math.cos(a)*(R+40), labelY = cy + Math.sin(a)*(R+40);
      const anchor = Math.cos(a)>0.2?"start":Math.cos(a)<-0.2?"end":"middle";
      parts += `<g class="hub-node" data-tid="${t.id}" onclick="location.href='team.html?id=${t.id}'">
        <circle class="node-circle" cx="${x}" cy="${y}" r="22" fill="var(--paper-2)" stroke="#06b6d4" stroke-width="2"/>
        <text x="${x}" y="${y+5}" text-anchor="middle" font-family="Poppins" font-size="14" fill="var(--teal-700)">${t.icon}</text>
        <text x="${labelX}" y="${labelY+4}" text-anchor="${anchor}" font-family="Poppins" font-size="11" fill="var(--ink)" font-weight="600">${shortTeamName(t.name)}</text>
      </g>`;
    });
    parts += `</svg>`;
    wrap.innerHTML = parts;
  }

  function renderCampaignTimeline(){
    const wrap = $("#campaignTimeline"); if(!wrap) return;
    const intMap = {low:18, medium:48, high:78, "very-high":100};
    wrap.innerHTML = `
      <div class="ctl-rail">
        <div class="ctl-line"></div>
        <div class="ctl-line-fill"></div>
        ${PHASES.map((p,i)=>`
          <div class="ctl-node scroll-reveal" data-intensity="${p.intensity}" style="--p:${(i/(PHASES.length-1))*100}%">
            <div class="ctl-dot">
              <span class="ctl-pulse"></span>
              <b>${p.n}</b>
            </div>
            <div class="ctl-card">
              <div class="ctl-card-head">
                <span class="kicker">Phase ${p.n}</span>
                <span class="ctl-int int-${p.intensity}">${p.intensity.replace("-"," ")}</span>
              </div>
              <h4>${p.name}</h4>
              <p class="muted">${p.sub}</p>
              <p>${p.blurb}</p>
              <div class="ctl-bar"><span style="width:${intMap[p.intensity]}%"></span></div>
            </div>
          </div>
        `).join("")}
      </div>`;
  }

  function renderCoordMap(){
    const wrap = $("#coordMap"); if(!wrap) return;
    const teams = TEAMS;
    const W=1000, H=900;
    const cx=W/2, cy=H/2 + 20;
    const R = 340; // ring radius
    const N = teams.length;

    // Position each team on a single ring, starting from the top.
    const pos = {};
    teams.forEach((t,i)=>{
      const a = (i/N)*Math.PI*2 - Math.PI/2;
      pos[t.id] = { x: cx + Math.cos(a)*R, y: cy + Math.sin(a)*R, a };
    });

    // Adjacency map for fast hover lookup
    const adj = {};
    teams.forEach(t=>adj[t.id] = new Set());
    COORD_EDGES.forEach(([a,b])=>{ adj[a]?.add(b); adj[b]?.add(a); });

    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="coord-svg" preserveAspectRatio="xMidYMid meet">`;

    // background guide circle (subtle)
    svg += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--line)" stroke-width="1" stroke-dasharray="2 6" opacity=".4"/>`;

    // edges layer (under nodes)
    svg += `<g class="coord-edges">`;
    COORD_EDGES.forEach(([a,b])=>{
      const A=pos[a],B=pos[b]; if(!A||!B) return;
      svg += `<line class="coord-line" data-a="${a}" data-b="${b}" x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}"/>`;
    });
    svg += `</g>`;

    // nodes + labels
    svg += `<g class="coord-nodes">`;
    teams.forEach(t=>{
      const P = pos[t.id]; if(!P) return;
      const cosA = Math.cos(P.a), sinA = Math.sin(P.a);
      const labelX = cx + cosA * (R + 44);
      const labelY = cy + sinA * (R + 44);
      const anchor = cosA > 0.25 ? "start" : cosA < -0.25 ? "end" : "middle";
      const dy = sinA > 0.7 ? 18 : sinA < -0.7 ? -8 : 4;
      svg += `<g class="coord-node" data-id="${t.id}" tabindex="0">
        <circle class="cn-bg" cx="${P.x}" cy="${P.y}" r="26"/>
        <text class="cn-icon" x="${P.x}" y="${P.y+8}" text-anchor="middle" font-size="20">${t.icon}</text>
        <text class="cn-label" x="${labelX}" y="${labelY+dy}" text-anchor="${anchor}">${shortTeamName(t.name)}</text>
      </g>`;
    });
    svg += `</g></svg>`;

    wrap.innerHTML = svg;

    // Info panel — colours used for the small dot per category tag
    const TAG_COLOR = {
      "Intelligence":"#06b6d4","Creative":"#a855f7","Communications":"#0ea5e9",
      "Operations":"#14b8a6","Structure":"#0e7490","Strategy":"#f59e0b"
    };
    function dotColor(t){
      const tags = (typeof TEAM_TAGS!=="undefined" && TEAM_TAGS[t.id]) || [];
      const k = tags[0];
      return TAG_COLOR[k] || "#06b6d4";
    }
    function renderInfo(id){
      const info = $("#coordInfo"); if(!info) return;
      if(!id){
        info.innerHTML = `
          <div class="ci-empty">
            <span class="kicker">Inter-team coordination</span>
            <h3>Hover any team</h3>
            <p class="muted">Move your cursor over a node to see which teams it works with. Click to drill into that team's page.</p>
          </div>`;
        return;
      }
      const t = TEAMS.find(x=>x.id===id); if(!t) return;
      const linked = Array.from(adj[id] || []).map(x=>TEAMS.find(y=>y.id===x)).filter(Boolean);
      info.innerHTML = `
        <div class="ci-head">
          <span class="ci-icon">${t.icon}</span>
          <div>
            <h3>${t.name.split(" — ")[0].split(" (")[0]}</h3>
            <p class="muted">${t.tagline||""}</p>
          </div>
        </div>
        <div class="ci-meta"><span class="kicker">Coordinates with (${linked.length})</span></div>
        <div class="ci-list">
          ${linked.map(o=>`
            <a class="ci-row" href="team.html?id=${o.id}">
              <span class="ci-dot" style="background:${dotColor(o)}"></span>
              <span>${o.name.split(" — ")[0].split(" (")[0]}</span>
              <span class="ci-arrow">→</span>
            </a>`).join("")}
        </div>`;
    }
    renderInfo(null);

    // Hover + click-to-lock handling.
    // - Hover updates the diagram + info panel
    // - Click on a node LOCKS that selection (mouse-leave no longer resets)
    // - Click outside any node / on the map background clears the lock
    let lockedId = null;
    function applyState(id){
      const allNodes = $$("#coordMap .coord-node");
      const allLines = $$("#coordMap .coord-line");
      if(!id){
        allNodes.forEach(n=>{n.classList.remove("focus","linked","dim","locked");});
        allLines.forEach(l=>{l.classList.remove("focus","dim");});
        wrap.classList.remove("filtered");
        renderInfo(null);
        return;
      }
      wrap.classList.add("filtered");
      const linked = adj[id] || new Set();
      allNodes.forEach(n=>{
        const nid = n.dataset.id;
        n.classList.toggle("focus", nid===id);
        n.classList.toggle("linked", linked.has(nid));
        n.classList.toggle("dim", nid!==id && !linked.has(nid));
        n.classList.toggle("locked", lockedId===nid);
      });
      allLines.forEach(l=>{
        const m = (l.dataset.a===id || l.dataset.b===id);
        l.classList.toggle("focus", m);
        l.classList.toggle("dim", !m);
      });
      renderInfo(id);
    }
    $$("#coordMap .coord-node").forEach(n=>{
      n.addEventListener("mouseenter", ()=>{ applyState(n.dataset.id); });
      n.addEventListener("focus",      ()=>{ applyState(n.dataset.id); });
      n.addEventListener("click", (e)=>{
        e.stopPropagation();
        const id = n.dataset.id;
        // Toggle: clicking the same node again unlocks
        lockedId = (lockedId === id) ? null : id;
        applyState(lockedId || id);
      });
      // Keyboard activation for accessibility
      n.addEventListener("keydown", (e)=>{
        if(e.key === "Enter" || e.key === " "){ e.preventDefault(); n.click(); }
      });
    });
    wrap.addEventListener("mouseleave", ()=>{
      // If something is locked, keep it; otherwise clear.
      applyState(lockedId);
    });
    // Click on map background (not on a node) unlocks
    wrap.addEventListener("click", (e)=>{
      if(!e.target.closest(".coord-node")){ lockedId = null; applyState(null); }
    });
  }

  function renderImagePrompts(){ /* deprecated: prompts removed; SVG assets now used directly */ }
  const TEAM_ART = {
    "smcc":"assets/hex.svg"
  };

  // Reporter Network India map — coords in the Varnam canonical canvas (1510×820, SOI / LGD authoritative)
  const RN_CANVAS = {w:1510, h:820};
  // Marker x,y = state capital location in the Varnam canonical canvas (1510×820).
  // Most coords sourced verbatim from india.json metros list (Srinagar, Shimla, Chandigarh,
  // Lucknow, Patna, Ranchi, Kolkata, Raipur, Bhubaneswar, Mumbai, Bangalore, Chennai,
  // Jaipur, Bhopal, Hyderabad, Thiruvananthapuram). Goa/Panaji, Gujarat/Gandhinagar,
  // AP/Amaravati and Assam/Dispur are projected to the same canvas via lat/lng interpolation
  // off neighboring metros.
  // Marker position is the geometric centre (bbox centroid) of each state path —
  // computed at runtime from the SOI shapes. Capital metadata preserved for tooltips.
  const RN_ACTIVE = [
    {n:"Jammu & Kashmir", key:"JAMMU & KASHMIR",  cap:"Srinagar"},
    {n:"Himachal Pradesh", key:"HIMACHAL PRADESH",cap:"Shimla"},
    {n:"Punjab", key:"PUNJAB",                    cap:"Chandigarh"},
    {n:"Haryana", key:"HARYANA",                  cap:"Chandigarh"},
    {n:"Uttar Pradesh", key:"UTTAR PRADESH",      cap:"Lucknow"},
    {n:"Bihar", key:"BIHAR",                      cap:"Patna"},
    {n:"Jharkhand", key:"JHARKHAND",              cap:"Ranchi"},
    {n:"West Bengal", key:"WEST BENGAL",          cap:"Kolkata"},
    {n:"Chhattisgarh", key:"CHHATTISGARH",        cap:"Raipur"},
    {n:"Odisha", key:"ODISHA",                    cap:"Bhubaneswar"},
    {n:"Maharashtra", key:"MAHARASHTRA",          cap:"Mumbai"},
    {n:"Goa", key:"GOA",                          cap:"Panaji"},
    {n:"Karnataka", key:"KARNATAKA",              cap:"Bengaluru"},
    {n:"Tamil Nadu", key:"TAMIL NADU",            cap:"Chennai"}
  ];
  const RN_CONTACT = [
    {n:"Rajasthan", key:"RAJASTHAN",              cap:"Jaipur"},
    {n:"Madhya Pradesh", key:"MADHYA PRADESH",    cap:"Bhopal"},
    {n:"Gujarat", key:"GUJARAT",                  cap:"Gandhinagar"},
    {n:"Telangana", key:"TELANGANA",              cap:"Hyderabad"},
    {n:"Andhra Pradesh", key:"ANDHRA PRADESH",    cap:"Amaravati"},
    {n:"Kerala", key:"KERALA",                    cap:"Thiruvananthapuram"},
    {n:"Assam", key:"ASSAM",                      cap:"Dispur"}
  ];
  function renderReporterMap(){
    const a = RN_ACTIVE.map((s,i)=>`
      <g class="rn-marker" data-key="${s.key}" data-kind="active" data-idx="${i}">
        <circle class="rn-mk-pulse" cx="0" cy="0" r=".55"/>
        <circle class="rn-mk active" cx="0" cy="0" r=".55" tabindex="0">
          <title>${s.n} (capital: ${s.cap})</title></circle>
        <text class="rn-mk-lbl" x="1.1" y=".4">${s.n}</text>
      </g>`).join("");
    const c = RN_CONTACT.map((s,i)=>`
      <g class="rn-marker" data-key="${s.key}" data-kind="contact" data-idx="${i}">
        <circle class="rn-mk contact" cx="0" cy="0" r=".45" tabindex="0">
          <title>${s.n} (capital: ${s.cap})</title></circle>
        <text class="rn-mk-lbl muted" x="1" y=".4">${s.n}</text>
      </g>`).join("");
    return `
      <div class="rn-map-wrap">
        <div class="rn-map-head">
          <div>
            <span class="kicker">Reporter Network · Coverage</span>
            <h3>India · 14 active states + 7 contact-access</h3>
            <p class="muted">Boundaries per Survey of India.</p>
          </div>
          <div class="rn-legend">
            <div><span class="rn-dot-sample active"></span> Active state (14)</div>
            <div><span class="rn-dot-sample contact"></span> Contact-access (7)</div>
          </div>
        </div>
        <div class="rn-map">
          <svg viewBox="365 20 780 480" preserveAspectRatio="xMidYMid meet" class="rn-map-svg-india">
            <g id="india-shape"></g>
            <g class="rn-markers">${a}${c}</g>
          </svg>
        </div>
        <div class="rn-stats">
          <div class="rn-stat"><b>14</b><span>Active states</span></div>
          <div class="rn-stat"><b>7</b><span>Contact-access states</span></div>
          <div class="rn-stat"><b>150–200</b><span>Baseline reporters</span></div>
          <div class="rn-stat"><b>600+</b><span>Election surge</span></div>
          <div class="rn-stat"><b>1–2 hr</b><span>Archival retrieval</span></div>
          <div class="rn-stat"><b>24–48 hr</b><span>Fresh shoot</span></div>
        </div>
      </div>`;
  }
  // Inline India shape paths (from india-shapes.js) and calibrate viewBox to India's actual bbox.
  function mountIndiaMap(){
    const svg = $(".rn-map-svg-india"); if(!svg) return;
    const g = $("#india-shape", svg); if(!g || typeof INDIA_SHAPES === "undefined") return;
    // Build category lookup for highlighting
    const activeKeys = new Set(RN_ACTIVE.map(s=>s.key));
    const contactKeys = new Set(RN_CONTACT.map(s=>s.key));
    g.innerHTML = INDIA_SHAPES.map(s=>{
      const cls = activeKeys.has(s.name) ? "s rn-state-active"
                : contactKeys.has(s.name) ? "s rn-state-contact"
                : "s";
      return `<path class="${cls}" data-name="${s.name.replace(/"/g,'&quot;')}" d="${s.path}"><title>${s.name}</title></path>`;
    }).join("");
    // Each state path bbox center → place its marker there for symmetric placement
    const pathByKey = {};
    $$("path.s", svg).forEach(p=>{ pathByKey[p.getAttribute("data-name")] = p; });
    // Manual overrides where the bbox center looks visually off (states with long thin shapes / outliers)
    const OFFSETS = { /* keyed by state name; offsets in viewbox units */ };
    $$(".rn-marker", svg).forEach(grp=>{
      const key = grp.getAttribute("data-key");
      const path = pathByKey[key];
      if(!path) return;
      const b = path.getBBox();
      const cx = b.x + b.width/2;
      const cy = b.y + b.height/2;
      const off = OFFSETS[key] || {dx:0, dy:0};
      grp.setAttribute("transform", `translate(${cx+off.dx}, ${cy+off.dy})`);
    });
    // Calibrate viewBox to India bbox
    const bbox = g.getBBox();
    const padX = 20, padY = 8;
    svg.setAttribute("viewBox", `${bbox.x-padX} ${bbox.y-padY} ${bbox.width+padX*2} ${bbox.height+padY*2}`);
    const wrap = svg.closest(".rn-map");
    if(wrap){
      const ar = (bbox.width + padX*2) / (bbox.height + padY*2);
      wrap.style.aspectRatio = ar.toFixed(4);
    }
  }

  function renderGlossaryList(){
    const wrap = $("#glossaryList"); if(!wrap) return;
    wrap.classList.remove("row");
    wrap.classList.add("glossary-grid");
    wrap.innerHTML = Object.entries(GLOSSARY).map(([k,v])=>`
      <div class="gloss-item">
        <dt>${k}</dt>
        <dd>${v}</dd>
      </div>`).join("");
  }

  /* --------------- TEAM PAGE renderer --------------- */
  function renderTeamPage(){
    const wrap = $("#teamPage"); if(!wrap) return;
    const id = new URLSearchParams(location.search).get("id") || TEAMS[0].id;
    const t = TEAMS.find(x=>x.id===id) || TEAMS[0];
    document.title = `${t.name} — Varahe NCC`;

    let html = `
      <section class="team-hero">
        <div class="container">
          <div class="crumbs scroll-reveal"><a href="index.html">Varahe NCC</a> · <a href="index.html#teams">Teams</a> · ${t.name}</div>
          <span class="kicker scroll-reveal">${t.function}</span>
          <h1 class="scroll-reveal">${t.icon} ${t.name}</h1>
          <p class="hero-lead scroll-reveal">${t.tagline}</p>
          ${t.id==="reporter"?`<div class="scroll-reveal">${renderReporterMap()}</div>`:""}
          ${TEAM_ART[t.id]?`<div class="team-art scroll-reveal"><img src="${TEAM_ART[t.id]}" alt="${t.name} visual"/></div>`:""}
          <div class="team-meta scroll-reveal">
            <span class="meta-pill"><b>${(t.structure||[]).length}</b> defined roles</span>
            ${t.sizing?`<span class="meta-pill">Sizing · <b>${t.sizing.min}</b> → <b>${t.sizing.ideal}</b></span>`:""}
            ${t.stats?t.stats.slice(0,3).map(s=>`<span class="meta-pill">${s.label} · <b>${s.value}</b></span>`).join(""):""}
          </div>

          <nav class="tabs" id="teamTabs">
            <button class="tab active" data-tab="overview">Overview</button>
            <button class="tab" data-tab="structure">Structure</button>
            <button class="tab" data-tab="responsibilities">Responsibilities</button>
            ${(t.hideTabs||[]).includes("skills")?"":`<button class="tab" data-tab="skills">Skills</button>`}
            <button class="tab" data-tab="phases">Campaign Flow</button>
            <button class="tab" data-tab="hiring">Hiring</button>
            <button class="tab" data-tab="budget">Budget</button>
            <button class="tab" data-tab="ops">Operations</button>
            <button class="tab" data-tab="example">Example</button>
            ${(t.hideTabs||[]).includes("downloads")?"":`<button class="tab" data-tab="downloads">Resources</button>`}
            <button class="tab" data-tab="contact">Contact</button>
          </nav>
        </div>
      </section>

      <section class="container">
        <div id="tab-overview" class="tab-content active">
          ${renderOverview(t)}
        </div>
        <div id="tab-structure" class="tab-content">${renderStructure(t)}</div>
        <div id="tab-responsibilities" class="tab-content">${renderResp(t)}</div>
        ${(t.hideTabs||[]).includes("skills")?"":`<div id="tab-skills" class="tab-content">${renderSkills(t)}</div>`}
        <div id="tab-phases" class="tab-content">${renderPhases(t)}</div>
        <div id="tab-hiring" class="tab-content">${renderHiring(t)}</div>
        <div id="tab-budget" class="tab-content">${renderBudget(t)}</div>
        <div id="tab-ops" class="tab-content">${renderOps(t)}</div>
        <div id="tab-example" class="tab-content">${renderExample(t)}</div>
        ${(t.hideTabs||[]).includes("downloads")?"":`<div id="tab-downloads" class="tab-content">${renderDownloads(t)}</div>`}
        <div id="tab-contact" class="tab-content">${renderContact(t)}</div>
      </section>

      <section class="container team-nav scroll-reveal" style="padding-top:50px">
        ${(()=>{const i=TEAMS.findIndex(x=>x.id===t.id);const prev=TEAMS[(i-1+TEAMS.length)%TEAMS.length];const next=TEAMS[(i+1)%TEAMS.length];
          return `
            <a class="team-nav-btn prev" href="team.html?id=${prev.id}">
              <span class="tnb-dir">← Previous</span>
              <span class="tnb-icon">${prev.icon}</span>
              <span class="tnb-name">${prev.name}</span>
            </a>
            <a class="team-nav-btn next" href="team.html?id=${next.id}">
              <span class="tnb-dir">Next →</span>
              <span class="tnb-icon">${next.icon}</span>
              <span class="tnb-name">${next.name}</span>
            </a>`;})()}
      </section>

      <section class="container" style="padding:30px 0 80px">
        ${(()=>{const coordIds = new Set();
          COORD_EDGES.forEach(([a,b])=>{ if(a===t.id) coordIds.add(b); else if(b===t.id) coordIds.add(a); });
          const coords = TEAMS.filter(o=>coordIds.has(o.id));
          if(!coords.length) return `
            <span class="kicker scroll-reveal">Browse</span>
            <h2 class="scroll-reveal">All teams</h2>
            <div class="mini-grid scroll-reveal">${TEAMS.filter(o=>o.id!==t.id).map(o=>`
              <a class="mini-card" href="team.html?id=${o.id}"><span class="icon">${o.icon}</span><span>${o.name.split(" — ")[0]}</span></a>`).join("")}</div>`;
          return `
            <span class="kicker scroll-reveal">Works with</span>
            <h2 class="scroll-reveal">Coordinated teams · ${coords.length}</h2>
            <p class="muted scroll-reveal" style="max-width:640px;margin-top:-8px;margin-bottom:24px">Teams this group syncs with regularly — sourced from the inter-team coordination map.</p>
            <div class="mini-grid scroll-reveal">${coords.map(o=>`
              <a class="mini-card" href="team.html?id=${o.id}" title="${o.tagline}">
                <span class="icon">${o.icon}</span><span>${o.name.split(" — ")[0].split(" / ")[0].split(" (")[0]}</span>
              </a>`).join("")}</div>`;})()}
      </section>`;
    wrap.innerHTML = html;

    $$("#teamTabs .tab").forEach(b=>b.addEventListener("click",()=>{
      $$("#teamTabs .tab").forEach(x=>x.classList.remove("active"));
      $$(".tab-content").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      $("#tab-"+b.dataset.tab).classList.add("active");
      window.scrollTo({top: $("#teamTabs").offsetTop - 70, behavior:"smooth"});
    }));

    decorateGlossary(wrap);
    mountReveal();
    mountIndiaMap();
  }

  function renderOverview(t){
    let parts = [];
    parts.push(`<div class="row-2 scroll-reveal">
      <div>
        <h2>Purpose</h2>
        <p>${t.purpose||""}</p>
        ${t.objectives?`<div class="callout"><b>Core objectives</b><ul>${t.objectives.map(o=>`<li>${o}</li>`).join("")}</ul></div>`:""}
        ${t.philosophy?`<h3 style="margin-top:24px">Philosophy</h3><ul>${t.philosophy.map(p=>`<li>${p}</li>`).join("")}</ul>`:""}
        ${t.finalGoal?`<h3 style="margin-top:24px">Final goal</h3><ul>${t.finalGoal.map(p=>`<li>${p}</li>`).join("")}</ul>`:""}
      </div>
      <div>
        ${t.stats?`<div class="chart-wrap"><h3>Key numbers</h3><div class="row" style="grid-template-columns:1fr 1fr">
          ${t.stats.map(s=>`<div class="stat" style="min-width:0;text-align:center;padding:18px 12px"><b>${s.value}</b><span>${s.label}</span></div>`).join("")}
        </div></div>`:""}
        ${t.scope?`<table class="std">${t.scope.map(s=>`<tr><th style="width:42%">${s.k}</th><td>${s.v}</td></tr>`).join("")}</table>`:""}
        ${t.sizing?`<div class="chart-wrap"><h3>Sizing</h3><p><b>Minimum:</b> ${t.sizing.min}</p><p><b>Ideal:</b> ${t.sizing.ideal}</p><p><b>Scale up when:</b> ${t.sizing.scale}</p></div>`:""}
        ${t.igHighlights?`<div class="chart-wrap"><h4>Instagram Story Highlights</h4><div class="badges">${t.igHighlights.map(x=>`<span class="badge">${x}</span>`).join("")}</div></div>`:""}
      </div>
    </div>`);
    parts.push(renderExtrasFor("overview", t));
    return parts.join("");
  }
  // Placeholder rendered when the source SOP doc has no data for a given tab.
  function noData(label){
    return `<div class="no-data scroll-reveal">
      <div class="no-data-icon">📄</div>
      <h3>${label||"Data not provided"}</h3>
      <p>This section was not documented in the team's source SOP. Once the team shares the relevant information it will appear here.</p>
    </div>`;
  }

  function renderStructure(t){
    if(!t.structure || !t.structure.length){
      return `<h2 class="scroll-reveal">Team Structure</h2>${noData()}`;
    }
    const tree = `<div class="org-tree scroll-reveal">
      ${t.structure.map((r,i)=>i===0
        ? `<div class="org-node">${r.role}<small>${r.detail}</small></div>`
        : `<div class="org-row"><div class="org-node" style="border-color:var(--teal-300)">${r.role}<small>${r.detail}</small></div></div>`
      ).join("")}
    </div>`;
    const list = `<h3>Roles & accountability</h3>
      ${t.structure.map(r=>`<details class="disc"><summary>${r.role}</summary><div class="disc-body"><p>${r.detail}</p></div></details>`).join("")}`;
    return `<div class="row-2">
      <div><h2>Team Structure</h2>${tree}</div>
      <div>${list}</div>
    </div>${renderExtrasFor("structure", t)}`;
  }
  function renderResp(t){
    const hasCore = t.coreFunctions && t.coreFunctions.length;
    const extras = renderExtrasFor("responsibilities", t);
    if(!hasCore && !extras){
      return `<h2 class="scroll-reveal">Responsibilities & Operations</h2>${noData()}`;
    }
    return `<h2 class="scroll-reveal">Responsibilities & Operations</h2>
      ${hasCore?`<div class="scroll-reveal">${t.coreFunctions.map(s=>`
        <details class="disc" ${s.title.toLowerCase().includes("respons")||s.title.toLowerCase().includes("key")?"open":""}>
          <summary>${s.title}</summary>
          <div class="disc-body"><ul>${(s.items||[]).map(i=>`<li>${i}</li>`).join("")}</ul></div>
        </details>`).join("")}
      </div>`:""}${extras}`;
  }
  function renderSkills(t){
    if(!t.skills || (!t.skills.must?.length && !t.skills.nice?.length)){
      return `<h2 class="scroll-reveal">Skills Required</h2>${noData()}`;
    }
    return `<h2 class="scroll-reveal">Skills Required</h2>
      <div class="row scroll-reveal">
        ${t.skills.must?`<div class="chart-wrap"><h3>Must-have</h3><ul>${t.skills.must.map(s=>`<li>${s}</li>`).join("")}</ul></div>`:""}
        ${t.skills.nice?`<div class="chart-wrap"><h3>Good-to-have</h3><ul>${t.skills.nice.map(s=>`<li>${s}</li>`).join("")}</ul></div>`:""}
      </div>`;
  }
  // Team-involvement defaults per phase — used when a phase doesn't list teams explicitly.
  const DEFAULT_PHASE_TEAMS = {
    1: ["Legal", "ARC", "Research", "Comms", "Party Coordination"],
    2: ["Comms", "Growth", "SMCC", "Narrative/QRT", "Media"],
    3: ["All Teams"],
    4: ["All Teams"],
    5: ["ARC", "Legal", "Comms", "Leadership"]
  };

  function renderPhases(t){
    let parts = [`<h2 class="scroll-reveal">Campaign Phase Involvement</h2>`];
    if(!t.phases || !t.phases.length){
      return parts.join("") + noData();
    }
    const phases = t.phases;
    parts.push(`<div class="phase-timeline scroll-reveal">`);
    phases.forEach((p,i)=>{
      const ph = PHASES.find(x=>x.n===p.ph)||{};
      const w = {low:25,medium:55,high:80,"very-high":100}[p.intensity||ph.intensity]||40;
      const teamsList = p.teams && p.teams.length ? p.teams : DEFAULT_PHASE_TEAMS[p.ph] || [];
      const teamsDefault = !(p.teams && p.teams.length);
      const phaseName = p.name || ph.name || "";
      const phaseSub = p.sub || ph.sub || "";
      const intLabel = (p.intensity||ph.intensity||'') + (p.intensityNote?` · ${p.intensityNote}`:'');
      parts.push(`<div class="phase-step ${p.inferred?'inferred':''}">
        <div class="phase-dot" data-ph="${p.ph}"><span>${p.ph}</span></div>
        <div class="phase-card">
          <div class="phase-card-head">
            <h4>Phase ${p.ph} · ${phaseName}</h4>
            <span class="phase-int phase-int-${(p.intensity||ph.intensity||'low').replace(' ','-')}">${intLabel}</span>
          </div>
          <p class="phase-sub muted">${phaseSub}${p.inferred?' · <i>inferred</i>':''}</p>
          <p><b>Focus:</b> ${p.focus||""}</p>
          ${p.act&&p.act.length?`<div class="phase-block"><span class="phase-label">Key activities</span><div class="badges">${p.act.map(a=>`<span class="badge">${a}</span>`).join("")}</div></div>`:""}
          ${p.output?`<div class="phase-block"><span class="phase-label">Output expectation</span><p style="margin:0;font-size:.92rem">${p.output}</p></div>`:""}
          ${teamsList.length?`<div class="phase-block"><span class="phase-label">Teams involved${teamsDefault?' <i style="font-weight:400;color:var(--muted)">· default</i>':''}</span><div class="badges">${teamsList.map(x=>`<span class="badge dark">${x}</span>`).join("")}</div></div>`:""}
          <div class="intensity-bar" style="--w:${w}%"></div>
        </div>
      </div>`);
    });
    parts.push(`</div>`);
    return parts.join("");
  }

  function renderExample(t){
    const e = t.example;
    const extras = renderExtrasFor("example", t);
    if(!e && !extras){
      return `<h2 class="scroll-reveal">Example Use Case</h2>${noData()}`;
    }
    let parts = [];
    if(e){
      const isString = typeof e === "string";
      parts.push(`
        <h2 class="scroll-reveal">Example Use Case</h2>
        <p class="muted scroll-reveal" style="max-width:720px">A real-world scenario showing how the ${t.name.split(" — ")[0]} team works end-to-end.</p>
        <div class="example-wrap scroll-reveal">
          <span class="example-tag">Scenario</span>
          ${isString ? `<p>${e}</p>` : `<h3>${e.title}</h3><p>${e.content}</p>`}
        </div>`);
    } else {
      parts.push(`<h2 class="scroll-reveal">Examples</h2>`);
    }
    parts.push(extras);
    return parts.join("");
  }

  function renderContact(t){
    // Placeholder contacts — replace once real directory is wired in.
    const slug = t.id;
    const contacts = [
      {role:"Team POC",     name:`POC, ${t.name.split(" — ")[0]}`,    phone:"+91 98XXX 10001", email:`poc.${slug}@varahe.in`,    slack:`@${slug}-poc`},
      {role:"Team Lead",    name:`Lead, ${t.name.split(" — ")[0]}`,   phone:"+91 98XXX 10002", email:`lead.${slug}@varahe.in`,   slack:`@${slug}-lead`},
      {role:"Team Manager", name:`Manager, ${t.name.split(" — ")[0]}`,phone:"+91 98XXX 10003", email:`manager.${slug}@varahe.in`,slack:`@${slug}-manager`}
    ];
    return `
      <h2 class="scroll-reveal">Contact</h2>
      <p class="muted scroll-reveal" style="max-width:720px">Reach the ${t.name.split(" — ")[0]} team — point of contact, lead and manager. Phone is for urgent escalations; email for documented hand-offs; Slack for routine coordination.</p>
      <p class="callout scroll-reveal" style="font-size:.86rem;background:#fef3c7;border-left-color:#f59e0b;color:#92400e">⚠️ <b>Placeholder data.</b> These are gimmick contacts for layout preview. Replace with the actual team directory before sharing externally.</p>
      <div class="contact-grid scroll-reveal">
        ${contacts.map(c=>`
          <div class="contact-card">
            <div class="contact-head">
              <span class="contact-role">${c.role}</span>
              <b>${c.name}</b>
            </div>
            <ul class="contact-list">
              <li><span class="cl-ic">📞</span><a href="tel:${c.phone.replace(/\s/g,'')}">${c.phone}</a></li>
              <li><span class="cl-ic">✉️</span><a href="mailto:${c.email}">${c.email}</a></li>
              <li><span class="cl-ic">💬</span><a href="#">${c.slack}</a></li>
            </ul>
          </div>`).join("")}
      </div>`;
  }

  function renderDownloads(t){
    const hasDownloads = t.downloads && t.downloads.length;
    const hasVideos = t.videoExamples && t.videoExamples.length;
    if(!hasDownloads && !hasVideos){
      return `<h2 class="scroll-reveal">Resources</h2>${noData()}`;
    }
    let parts = [`<h2 class="scroll-reveal">Resources</h2>
      <p class="muted scroll-reveal" style="max-width:720px">External resources, templates, dashboards and official portals referenced in this team's handbook. Click to open.</p>`];
    if(hasDownloads){
      parts.push(`<div class="row scroll-reveal">
        ${t.downloads.map(d=>`
          <a class="download-card" href="${d.url}" target="_blank" rel="noopener">
            <span class="dl-icon">📄</span>
            <div>
              <b>${d.label}</b>
              ${d.note?`<small>${d.note}</small>`:""}
              <span class="dl-host">${new URL(d.url).hostname.replace('www.','')} ↗</span>
            </div>
          </a>`).join("")}
      </div>`);
    }
    if(hasVideos){
      parts.push(`<h3 class="scroll-reveal" style="margin-top:36px">Weapon Arsenal — Sample Films</h3>
        <p class="muted scroll-reveal" style="max-width:720px;margin-top:-6px">Categories of films produced by the team. Click any thumbnail to open the reference video on Google Drive.</p>`);
      t.videoExamples.forEach(cat=>{
        parts.push(`<div class="scroll-reveal" style="margin-top:22px">
          <h4 style="margin:0 0 10px;font-size:15px;color:#0f172a">${cat.title}</h4>
          ${cat.note?`<p class="muted" style="margin:0 0 10px;max-width:720px;font-size:13px">${cat.note}</p>`:""}
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
            ${cat.items.map(v=>`<a href="${v.url}" target="_blank" rel="noopener" style="display:block;position:relative;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;background:#0f172a;text-decoration:none;box-shadow:0 1px 6px rgba(15,23,42,.08);transition:transform .15s ease,box-shadow .15s ease" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 18px rgba(15,23,42,.18)'" onmouseout="this.style.transform='';this.style.boxShadow='0 1px 6px rgba(15,23,42,.08)'"><img src="${v.thumb}" alt="${v.label||cat.title}" style="display:block;width:100%;aspect-ratio:16/9;object-fit:cover"><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(0,0,0,.55) 100%)"><div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.25)"><div style="width:0;height:0;border-left:14px solid #0f172a;border-top:9px solid transparent;border-bottom:9px solid transparent;margin-left:4px"></div></div></div>${v.label?`<div style="position:absolute;left:8px;bottom:8px;right:8px;color:#fff;font-size:11.5px;font-weight:600;text-shadow:0 1px 4px rgba(0,0,0,.7);line-height:1.3">${v.label}</div>`:""}</a>`).join("")}
          </div>
        </div>`);
      });
    }
    return parts.join("");
  }
  function renderHiring(t){
    const hasAny = (t.sizing || t.teamCalc || (t.budget && t.budget.length) || (t.skills && (t.skills.must?.length || t.skills.nice?.length)) || t.recruitment);
    if(!hasAny){
      return `<h2 class="scroll-reveal">Hiring</h2>${noData()}`;
    }
    let parts = [`<h2 class="scroll-reveal">Hiring</h2>
      <p class="muted scroll-reveal" style="max-width:720px">Team sizing, recruitment criteria, onboarding flow and salary brackets used when staffing this team.</p>`];
    // Key numerical callouts
    const tiles = [];
    if(t.sizing){
      if(t.sizing.min)   tiles.push({b:t.sizing.min,   l:"Minimum size"});
      if(t.sizing.ideal) tiles.push({b:t.sizing.ideal, l:"Ideal size"});
    }
    const richTeamCalc = t.teamCalc && typeof t.teamCalc.formula === 'string' && t.teamCalc.formula.trim().startsWith('<');
    if(t.teamCalc && !richTeamCalc) tiles.push({b:t.teamCalc.formula, l:"Sizing formula"});
    if(t.scaleNote && !richTeamCalc) tiles.push({b:t.scaleNote, l:"Scaling rule"});
    if(tiles.length){
      parts.push(`<div class="hire-tiles scroll-reveal">${tiles.map(x=>`<div class="hire-tile"><b>${x.b}</b><span>${x.l}</span></div>`).join("")}</div>`);
    }
    if(t.sizing && t.sizing.scale){
      parts.push(`<div class="callout scroll-reveal"><b>Scales up when:</b> ${t.sizing.scale}</div>`);
    }
    if(richTeamCalc){
      parts.push(`<h3 class="scroll-reveal" style="margin-top:24px">Team Structure Models</h3>
        <div class="scroll-reveal" style="margin-top:6px">${t.teamCalc.formula}</div>`);
      if(t.scaleNote){
        parts.push(`<div class="callout scroll-reveal" style="margin-top:14px"><b>Scaling rule</b><div style="margin-top:4px">${t.scaleNote}</div></div>`);
      }
    }
    if(t.teamCalc && t.teamCalc.example){
      parts.push(`<h3 class="scroll-reveal" style="margin-top:24px">Worked Example</h3>
        <div class="scroll-reveal" style="margin-top:6px">${t.teamCalc.example}</div>`);
    }
    if(t.recruitment){
      const r = t.recruitment;
      if(r.feeders?.length) parts.push(`<h3 class="scroll-reveal" style="margin-top:30px">Recruitment channels</h3><ul class="scroll-reveal">${r.feeders.map(x=>`<li>${x}</li>`).join("")}</ul>`);
      if(r.criteria?.length) parts.push(`<h3 class="scroll-reveal" style="margin-top:30px">Selection criteria</h3><ul class="scroll-reveal">${r.criteria.map(x=>`<li>${x}</li>`).join("")}</ul>`);
      if(r.steps?.length) parts.push(`<h3 class="scroll-reveal" style="margin-top:30px">Onboarding steps</h3><ol class="check-list scroll-reveal">${r.steps.map(s=>`<li><span>${s}</span></li>`).join("")}</ol>`);
      if(r.content?.length) parts.push(`<h3 class="scroll-reveal" style="margin-top:30px">Onboarding content</h3><ul class="scroll-reveal">${r.content.map(x=>`<li>${x}</li>`).join("")}</ul>`);
    }
    if(t.budget && Array.isArray(t.budget)){
      parts.push(`<h3 class="scroll-reveal" style="margin-top:30px">Salary brackets</h3>
        <table class="std scroll-reveal"><thead><tr><th>Role</th><th>Salary Range</th></tr></thead><tbody>${
          t.budget.map(r=>Array.isArray(r)?`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`:`<tr><td>${r.role}</td><td>${r.range}</td></tr>`).join("")
        }</tbody></table>`);
    }
    if(t.skills){
      parts.push(`<h3 class="scroll-reveal" style="margin-top:30px">Hiring filters · Skills required</h3>
        <div class="row scroll-reveal">
          ${t.skills.must?`<div class="chart-wrap"><h4>Must-have</h4><ul>${t.skills.must.map(s=>`<li>${s}</li>`).join("")}</ul></div>`:""}
          ${t.skills.nice?`<div class="chart-wrap"><h4>Good-to-have</h4><ul>${t.skills.nice.map(s=>`<li>${s}</li>`).join("")}</ul></div>`:""}
        </div>`);
    }
    return parts.join("");
  }

  function renderBudget(t){
    const hasAny = (t.pricing || t.budgetStrategy || t.dashboards || t.budgetEsc);
    if(!hasAny){
      return `<h2 class="scroll-reveal">Budget</h2>${noData()}`;
    }
    let parts = [`<h2 class="scroll-reveal">Budget</h2>
      <p class="muted scroll-reveal" style="max-width:720px">Operational spend, ad investment, allocation strategy and dashboard infrastructure for this team.</p>`];
    if(t.pricing){
      parts.push(`<h3 class="scroll-reveal">Page Acquisition Pricing</h3>
        <div class="row scroll-reveal">
          <div class="chart-wrap"><h4>Ownership (One-time, per follower)</h4>
            <table class="std">${t.pricing.ownership.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join("")}</table>
          </div>
          <div class="chart-wrap"><h4>Monthly Operational Cost</h4>
            <table class="std"><thead><tr><th>Followers</th><th>India 1</th><th>India 2</th><th>India 3</th></tr></thead>
            <tbody>${t.pricing.monthly.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join("")}</tbody></table>
          </div>
        </div>`);
    }
    if(t.budgetStrategy){
      const b = t.budgetStrategy;
      const hasDonut = Array.isArray(b.allocation) && b.allocation.length;
      const leftCol = `<div>
        ${b.purpose?`<p><b>Purpose:</b> ${b.purpose}</p>`:""}
        ${b.inputs?.length?`<h4>Inputs</h4><ul>${b.inputs.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
        ${b.steps?.length?`<h4>Steps</h4><ol>${b.steps.map(s=>`<li>${s}</li>`).join("")}</ol>`:""}
        ${b.example?`<div class="callout"><b>Example</b><p>${b.example}</p></div>`:""}
        ${b.additional?.length?`<h4>Additional considerations</h4><ul>${b.additional.map(s=>`<li>${s}</li>`).join("")}</ul>`:""}
      </div>`;
      const rightCol = hasDonut
        ? `<div><div class="chart-wrap"><h4>Objective-wise Allocation</h4>${renderDonut(b.allocation)}</div></div>`
        : "";
      parts.push(`<h3 class="scroll-reveal">Budget-Making Strategy</h3>
        <div class="${hasDonut?'row-2':''} scroll-reveal">${leftCol}${rightCol}</div>`);
    }
    if(t.dashboards){
      parts.push(`<h3 class="scroll-reveal">Dashboards Maintained</h3>
        <div class="row scroll-reveal">
          ${["daily","weekly","monthly"].map(k=>t.dashboards[k]?`<div class="chart-wrap"><h4>${k[0].toUpperCase()+k.slice(1)}</h4><ul>${t.dashboards[k].map(x=>`<li>${x}</li>`).join("")}</ul></div>`:"").join("")}
        </div>`);
    }
    if(t.budgetEsc){
      parts.push(`<h3 class="scroll-reveal">Phased Budget Escalation</h3>
        <table class="std scroll-reveal"><thead><tr><th>Phase</th><th>Weeks before poll</th><th>Allocation</th></tr></thead>
        <tbody>${t.budgetEsc.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table>`);
    }
    return parts.join("");
  }
  // Each rich block knows which tab it belongs in.
  // slot ∈ {overview, structure, responsibilities, ops, example}
  const EXTRA_BLOCKS = {
    heroCallout: {slot:"overview", render:t=>`<div class="hero-callout scroll-reveal">“${t.heroCallout}”</div>`},
    speedTimeline: {slot:"overview", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Operational speed at peak</h3>
      <div class="speed-clock scroll-reveal">
        ${t.speedTimeline.map((s,i)=>`<div class="sc-step"><span class="sc-t">${s.t}</span><span class="sc-e">${s.e}</span>${i<t.speedTimeline.length-1?'<span class="sc-arrow">→</span>':''}</div>`).join("")}
      </div>`},
    contentOutputs: {slot:"responsibilities", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Content output buckets</h3>
      <div class="bucket-grid scroll-reveal">${t.contentOutputs.map(b=>`<div class="bucket">${b}</div>`).join("")}</div>`},
    functionScope: {slot:"responsibilities", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Functions & scope</h3>
      <table class="std scroll-reveal"><thead><tr><th>Function</th><th>Scope of Work</th></tr></thead>
      <tbody>${t.functionScope.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join("")}</tbody></table>`},
    statutoryForms: {slot:"responsibilities", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Statutory forms handled</h3>
      <div class="form-grid scroll-reveal">${t.statutoryForms.map(f=>`<div class="form-card"><b>${f.form}</b><span>${f.desc}</span></div>`).join("")}</div>`},
    contentFormats: {slot:"responsibilities", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Hyperlocal content formats</h3>
      <div class="bucket-grid scroll-reveal">${t.contentFormats.map(f=>`<div class="bucket"><b>${f.n}</b><span>${f.d}</span></div>`).join("")}</div>`},
    deliverables: {slot:"responsibilities", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Deliverables per film</h3>
      <div class="bucket-grid scroll-reveal">${t.deliverables.map(d=>`<div class="bucket"><b>${d.n}</b><span>${d.d}</span></div>`).join("")}</div>`},
    workflow11: {slot:"responsibilities", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Campaign workflow (per project)</h3>
      <ol class="flow-11 scroll-reveal">${t.workflow11.map(w=>`<li class="${w.includes('✓')?'gate':''}">${w.replace(' ✓','')}${w.includes('✓')?'<span class="gate-tag">approval gate</span>':''}</li>`).join("")}</ol>`},
    activationChecklist: {slot:"structure", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">State activation checklist (12 steps)</h3>
      <ol class="check-list scroll-reveal">${t.activationChecklist.map(c=>`<li><span>${c[0]}</span><i>${c[1]}</i></li>`).join("")}</ol>`},
    securityPolicy: {slot:"structure", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Page security & access</h3>
      <ul class="scroll-reveal">${t.securityPolicy.map(s=>`<li>${s}</li>`).join("")}</ul>`},
    ipo: {slot:"ops", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Input → Process → Output</h3>
      <div class="ipo scroll-reveal">${t.ipo.map((s,i)=>`<div class="ipo-col"><span class="ipo-stage">${s.stage}</span><ul>${s.items.map(x=>`<li>${x}</li>`).join("")}</ul></div>${i<t.ipo.length-1?'<div class="ipo-arrow">→</div>':''}`).join("")}</div>`},
    pipelines: {slot:"ops", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Content pipelines</h3>
      ${t.pipelines.map(p=>`
        <div class="chart-wrap scroll-reveal" style="margin:14px 0">
          <h4>${p.title}</h4>
          <table class="std"><thead><tr><th>Phase</th><th>Action</th><th>Stakeholders</th></tr></thead>
          <tbody>${p.rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table>
        </div>`).join("")}`},
    verticalOwnership: {slot:"ops", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Vertical ownership</h3>
      <div class="vert-grid scroll-reveal">${t.verticalOwnership.map(r=>`<div class="vert-card"><b>${r[0]}</b><span>${r[1]}</span></div>`).join("")}</div>`},
    reportCatalogue: {slot:"ops", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Report catalogue</h3>
      <div class="report-grid scroll-reveal">${t.reportCatalogue.map(r=>`
        <div class="report-card"><span class="report-freq">${r.freq}</span><b>${r.name}</b><span class="report-who">${r.who}</span></div>`).join("")}</div>`},
    weeklyCalendar: {slot:"ops", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Weekly content calendar</h3>
      <div class="cal-grid scroll-reveal">${t.weeklyCalendar.map(d=>`
        <div class="cal-cell"><span class="cal-day">${d.day}</span><span class="cal-focus">${d.focus}</span><p>${d.mix}</p></div>`).join("")}</div>`},
    adTierMix: {slot:"ops", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Advertising mix (3 tiers)</h3>
      <div class="row-2 scroll-reveal">
        <div class="chart-wrap">${renderDonut(t.adTierMix)}</div>
        <div class="chart-wrap"><ul>${t.adTierMix.map(a=>`<li><b>${a.label}</b> — ${a.note}</li>`).join("")}</ul></div>
      </div>`},
    adRules: {slot:"ops", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">Ad performance rules</h3>
      <ul class="scroll-reveal">${t.adRules.map(r=>`<li>${r}</li>`).join("")}</ul>`},
    goaExample: {slot:"example", render:t=>`
      <h3 class="scroll-reveal" style="margin-top:30px">State example · ${t.goaExample.state || 'Goa'}</h3>
      <div class="chart-wrap scroll-reveal">
        <table class="std">${t.goaExample.stats.map(s=>`<tr><th style="width:42%">${s.k}</th><td>${s.v}</td></tr>`).join("")}</table>
        <p style="margin-top:14px"><b>Key attack narrative:</b> ${t.goaExample.attack}</p>
        <p><b>Key positive narrative:</b> ${t.goaExample.positive}</p>
        <p><b>Special focus:</b> ${t.goaExample.focus}</p>
      </div>`}
  };
  function renderExtrasFor(slot, t){
    return Object.entries(EXTRA_BLOCKS)
      .filter(([k,cfg])=>cfg.slot===slot && t[k])
      .map(([k,cfg])=>cfg.render(t))
      .join("");
  }
  function hasExtrasFor(slot, t){
    return Object.entries(EXTRA_BLOCKS).some(([k,cfg])=>cfg.slot===slot && t[k]);
  }

  function renderOps(t){
    const hasAny = (t.kpis || t.escalation || t.priorities || t.beforeAfter || t.references || t.workflow || t.failurePoints || t.crisis || t.closure || t.philosophy || t.finalGoal || t.tools || t.platforms || hasExtrasFor("ops", t));
    if(!hasAny){
      return `<h2 class="scroll-reveal">Operations</h2>${noData()}`;
    }
    let parts = [`<h2 class="scroll-reveal">Operations</h2>`];
    if(t.priorities) parts.push(`<h3>Priority Logic</h3><table class="std scroll-reveal"><thead><tr><th>Priority</th><th>Definition</th><th>Turnaround</th><th>Typical Use</th></tr></thead><tbody>${t.priorities.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join("")}</tbody></table>`);
    if(t.kpis) parts.push(`<h3>KPIs / Benchmarks</h3><table class="std scroll-reveal"><tbody>${t.kpis.map(r=>Array.isArray(r)?`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`:`<tr><td>${r}</td></tr>`).join("")}</tbody></table>`);
    if(t.escalation) parts.push(`<h3>Escalation Matrix</h3><table class="std scroll-reveal"><thead><tr><th>Issue</th><th>Escalate To</th><th>Timeframe</th></tr></thead><tbody>${t.escalation.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table>`);
    if(t.workflow) parts.push(`<h3>Workflow</h3>${t.workflow.map(w=>`<details class="disc"><summary>${w.step}</summary><div class="disc-body"><p>${w.desc}</p></div></details>`).join("")}`);
    if(t.beforeAfter) parts.push(`<h3>Before vs After</h3><table class="std scroll-reveal"><thead><tr><th>Dimension</th><th>Without RN</th><th>With RN</th></tr></thead><tbody>${t.beforeAfter.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table>`);
    if(t.failurePoints) parts.push(`<h3>Common Failure Points</h3><ul class="scroll-reveal">${t.failurePoints.map(f=>`<li>${f}</li>`).join("")}</ul>`);
    if(t.crisis) parts.push(`<h3>Crisis Communication Protocol</h3><ol class="scroll-reveal">${t.crisis.map(c=>`<li>${c}</li>`).join("")}</ol>`);
    if(t.closure) parts.push(`<h3>Closure / Wind-down</h3><ul class="scroll-reveal">${t.closure.map(c=>`<li>${c}</li>`).join("")}</ul>`);
    if(t.pageDisposition) parts.push(`<h3>Page Disposition Options</h3><ul class="scroll-reveal">${t.pageDisposition.map(c=>`<li>${c}</li>`).join("")}</ul>`);
    if(t.objectivesAds) parts.push(`<h3>Ad Campaign Objectives</h3><table class="std scroll-reveal"><thead><tr><th>Objective</th><th>When to use</th><th>Outcome</th></tr></thead><tbody>${t.objectivesAds.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table>`);
    if(t.tools) parts.push(`<h3>Tools</h3><div class="badges scroll-reveal">${t.tools.map(x=>`<span class="badge">${x}</span>`).join("")}</div>`);
    if(t.platforms) parts.push(`<h3>Platforms</h3><div class="badges scroll-reveal">${t.platforms.map(x=>`<span class="badge dark">${x}</span>`).join("")}</div>`);
    if(t.references) parts.push(`<h3>Reference Templates</h3><ul class="scroll-reveal">${t.references.map(r=>`<li><a href="${r.url}" target="_blank" rel="noopener">${r.label}</a></li>`).join("")}</ul>`);
    if(t.finalGoal) parts.push(`<h3>Final Goal</h3><ul class="scroll-reveal">${t.finalGoal.map(x=>`<li>${x}</li>`).join("")}</ul>`);
    if(t.reportsTo) parts.push(`<h3>Reports to</h3><div class="badges">${t.reportsTo.map(x=>`<span class="badge">${x}</span>`).join("")}</div>`);
    parts.push(renderExtrasFor("ops", t));
    return parts.join("");
  }

  /* --------------- Donut chart --------------- */
  function renderDonut(items){
    const total = items.reduce((s,i)=>s+i.pct,0);
    const r=70,c=80,cx=80,cy=80; let off=0;
    const segs = items.map(i=>{
      const len = (i.pct/total)*(2*Math.PI*r);
      const dasharray = `${len} ${2*Math.PI*r}`;
      const seg = `<circle r="${r}" cx="${cx}" cy="${cy}" fill="transparent" stroke="${i.color}" stroke-width="${22}" stroke-dasharray="${dasharray}" stroke-dashoffset="${-off}"/>`;
      off += len; return seg;
    }).join("");
    return `<div class="donut">
      <svg viewBox="0 0 160 160" style="transform:rotate(-90deg)"><circle r="${r}" cx="${cx}" cy="${cy}" fill="transparent" stroke="var(--line)" stroke-width="22"/>${segs}</svg>
      <div class="donut-legend">${items.map(i=>`<div><i style="background:${i.color}"></i>${i.label} · <b>${i.pct}%</b></div>`).join("")}</div>
    </div>`;
  }

  /* --------------- Init --------------- */
  document.addEventListener("DOMContentLoaded",()=>{
    mountDock(); mountSearch();
    renderTeamGrid(); mountFilters();
    renderHubDiagram(); renderHubTags(); renderCampaignTimeline(); renderCoordMap();
    renderImagePrompts(); renderGlossaryList();
    renderTeamPage();
    decorateGlossary(document);
    mountReveal();
  });
})();
