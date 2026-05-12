/* PER-STATE STATUS OVERLAY
   The journey content (phases, tasks, POCs, ETAs, inputs, outputs) lives in
   journey-blueprint.js — it's fixed and identical across states.

   This file holds the LIVE STATUS per state. Only three things vary by state:
     1. State metadata (name, polling date, current phase, state lead)
     2. Per-task status: done / in_progress / blocked / pending
     3. Per-task progress vs target (e.g. 50 of 100 editors hired)
     4. Per-task blocker notes (if status === 'blocked' or stuck)

   The Google Sheet provides exactly the same three things — this file is the
   in-memory placeholder that the sheet overwrites on load.
*/
const STATES = {
  MH: {
    name: "Maharashtra",
    code: "MH",
    pollingDate: "2026-11-20",
    currentPhase: 2,
    stateLead: {
      name: "Suraj Bhan",
      role: "Project Director · Maharashtra",
      phone: "+91 9XXXX 10001",
      email: "suraj.bhan@varaheanalytics.com",
      slack: "@suraj",
      photo: "https://i.pravatar.cc/200?u=suraj"
    },
    status: {
      "p1.arc.baseline":      { status: "done",        progress: 1,   notes: "" },
      "p1.legal.framework":   { status: "done",        progress: 1,   notes: "" },
      "p1.media.mapping":     { status: "done",        progress: 1,   notes: "" },
      "p1.reporter.onboard":  { status: "done",        progress: 34,  notes: "" },
      "p1.partycoord.setup":  { status: "done",        progress: 1,   notes: "" },

      "p2.narrative.pipeline":{ status: "in_progress", progress: 3,   notes: "" },
      "p2.growth.awareness":  { status: "in_progress", progress: 14000000, notes: "On track for 20M weekly impressions" },
      "p2.smcc.pages":        { status: "in_progress", progress: 175, notes: "Awaiting candidate photos for 7 ACs" },
      "p2.branding.identity": { status: "pending",     progress: 0,   notes: "" },
      "p2.influencer.cohorts":{ status: "blocked",     progress: 50,  notes: "Budget approval pending from leadership" },
      "p2.smcc.hiring":       { status: "in_progress", progress: 50,  notes: "Target hiring of 100 editors — 50 closed so far" }

      // Phase 3-5 tasks have no status yet → default to "pending"
    }
  },

  KL: {
    name: "Kerala",
    code: "KL",
    pollingDate: "2026-04-15",
    currentPhase: 1,
    stateLead: {
      name: "Abantika Mishra",
      role: "Project Director · Kerala",
      phone: "+91 9XXXX 11001",
      email: "abantika.mishra@varaheanalytics.com",
      slack: "@abantika",
      photo: "https://i.pravatar.cc/200?u=abantika"
    },
    status: {
      "p1.arc.baseline":      { status: "in_progress", progress: 0,  notes: "Just kicked off" },
      "p1.legal.framework":   { status: "pending",     progress: 0,  notes: "" },
      "p1.media.mapping":     { status: "pending",     progress: 0,  notes: "" },
      "p1.reporter.onboard":  { status: "pending",     progress: 0,  notes: "" },
      "p1.partycoord.setup":  { status: "pending",     progress: 0,  notes: "" }
    }
  }
};

/* SHEET LOADER — new schema
   Each state tab in the sheet now needs only THREE row types:

     Section   Key                          Field1            Field2       Field3       Field4
     meta      (state name)                 PollingDate       CurrentPhase
     lead      Name                         Role              Phone        Email        Slack        Photo
     status    p2.smcc.pages                in_progress       175          288          Awaiting…

   Columns (header row 1):
     Section | TaskId | Name | Status | Progress | Target | Notes | Phone | Email | Slack | Photo | Role | PollingDate | CurrentPhase

   Status values: done · in_progress · blocked · pending
*/
const SHEET_ID = "1tOojU6WyY-Ss-iZ0ejxTEJhHusJ6Dw1jSCOty9xEtzM";
const SHEET_STATES = ["MH", "KL"];

async function loadJourneyFromSheet(){
  if (typeof location !== "undefined" && location.protocol === "file:") {
    console.info("Skipping live Sheet load on file:// — using placeholder data.");
    return {};
  }
  const out = {};
  await Promise.all(SHEET_STATES.map(async code => {
    try {
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(code)}`;
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) return;
      const txt = await r.text();
      const a = txt.indexOf("{"); const b = txt.lastIndexOf("}");
      if (a < 0 || b < 0) return;
      const json = JSON.parse(txt.slice(a, b + 1));
      const parsed = parseSheetTabToState(code, json);
      if (parsed) out[code] = parsed;
    } catch (e) { console.warn("Could not load state", code, e); }
  }));
  return out;
}

function parseSheetTabToState(code, json){
  const cols = (json.table?.cols || []).map(c => (c.label || c.id || "").trim());
  if (!cols.length) return null;
  const colIdx = {};
  cols.forEach((label, i) => { if (label) colIdx[label] = i; });
  const cell = (row, name) => {
    const i = colIdx[name];
    if (i == null || !row.c || !row.c[i]) return "";
    const v = row.c[i].v;
    return v == null ? "" : String(v);
  };

  // Default state shell — preserves anything from placeholders we don't overwrite.
  const fallback = STATES[code] || { name: code, code, pollingDate: "", currentPhase: 1, stateLead: {}, status: {} };
  const state = {
    name: fallback.name, code, pollingDate: fallback.pollingDate,
    currentPhase: fallback.currentPhase, stateLead: { ...fallback.stateLead }, status: {}
  };

  for (const row of (json.table?.rows || [])) {
    if (!row || !row.c) continue;
    const section = (cell(row, "Section") || "").toLowerCase().trim();
    if (section === "meta") {
      state.name = cell(row, "Name") || state.name;
      state.pollingDate = cell(row, "PollingDate") || state.pollingDate;
      const cp = parseInt(cell(row, "CurrentPhase"), 10);
      if (cp) state.currentPhase = cp;
    } else if (section === "lead") {
      state.stateLead = {
        name:  cell(row, "Name")  || state.stateLead.name,
        role:  cell(row, "Role")  || state.stateLead.role,
        phone: cell(row, "Phone") || state.stateLead.phone,
        email: cell(row, "Email") || state.stateLead.email,
        slack: cell(row, "Slack") || state.stateLead.slack,
        photo: cell(row, "Photo") || state.stateLead.photo
      };
    } else if (section === "status") {
      const id = cell(row, "TaskId"); if (!id) continue;
      state.status[id] = {
        status:   (cell(row, "Status") || "pending").toLowerCase().trim(),
        progress: parseFloat(cell(row, "Progress")) || 0,
        target:   parseFloat(cell(row, "Target")) || null,
        notes:    cell(row, "Notes") || ""
      };
    }
  }
  return state;
}
