/* Placeholder journey data. Replace with live Sheet load via loadJourneyFromSheet().
   Schema notes:
   - One state per top-level key (use state codes: MH, KL, GA, OD, JH, …)
   - Each state has: name, code, pollingDate, currentPhase, stateLead, phases[]
   - Each phase has: n, name, status, lead, prerequisites[], startTrigger, completionSignal, tasks[]
   - Each task has: team (id from TEAMS), title, description, eta, input, output, status, poc{}
*/
const JOURNEY = {
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
    phases: [
      {
        n: 1,
        name: "Foundation",
        sub: "Pre-MCC · Slow Build",
        status: "done",
        lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt — establish team, infrastructure, baseline measurements and stakeholder mapping before the MCC kicks in.",
        prerequisites: [
          "Engagement letter signed and PD onboarded in state",
          "State party POC list shared with VA",
          "Baseline access to official handles confirmed"
        ],
        startTrigger: "PD lands in the state and meets State Communications Convenor.",
        completionSignal: "Baseline Analysis Report approved + all team SOPs trained.",
        tasks: [
          { team:"arc", title:"Baseline Analysis Report", description:"Evaluate state social-media landscape, audit official party pages, key stakeholders, MPs/MLAs.", eta:"7 days from kickoff", input:"State handles list + candidate roster", output:"Signed-off baseline report shared with leadership", status:"done",
            poc:{ name:"Chandra Shekher", role:"ARC Lead", phone:"+91 9XXXX 20001", email:"chandra.shekher@varaheanalytics.com", slack:"@chandra-arc", photo:"https://i.pravatar.cc/200?u=chandra" } },
          { team:"legal", title:"Compliance framework setup", description:"Draft SOPs, trackers, compliance checklists; coordinate with State Legal Cell.", eta:"10 days", input:"Candidate affidavits + ECI notification calendar", output:"Trackers live, CMS PoCs trained", status:"done",
            poc:{ name:"Divakar Kalra", role:"Legal Manager", phone:"+91 9XXXX 20002", email:"divakar.kalra@varaheanalytics.com", slack:"@divakar", photo:"https://i.pravatar.cc/200?u=divakar" } },
          { team:"media", title:"State media landscape mapping", description:"Map regional outlets, liaison with local units, set up monitoring systems.", eta:"7 days", input:"State media directory", output:"Monitoring framework operational", status:"done",
            poc:{ name:"Sahil Vats", role:"Media Team Lead", phone:"+91 9XXXX 20003", email:"sahil.vats@varaheanalytics.com", slack:"@sahil", photo:"https://i.pravatar.cc/200?u=sahil" } },
          { team:"reporter", title:"Reporter Network warm-up", description:"Identify, verify and onboard state-level reporters; pre-position equipment.", eta:"14 days", input:"IPRD reports + state references", output:"Active reporter pool ≥30 confirmed", status:"done",
            poc:{ name:"Avishka Goel", role:"RN Central Manager", phone:"+91 9XXXX 20004", email:"avishka.goel@varaheanalytics.com", slack:"@avishka", photo:"https://i.pravatar.cc/200?u=avishka" } }
        ]
      },
      {
        n: 2,
        name: "Acceleration",
        sub: "Build-Up · Narrative Push",
        status: "active",
        lead: "Lorem ipsum — narrative pipeline live, audiences warming up, paid spend pacing in. Multiple workstreams concurrently — coordination tightens.",
        prerequisites: [
          "Phase 1 baseline report approved",
          "Page audits complete",
          "Ad accounts verified and disclaimer-cleared"
        ],
        startTrigger: "First narrative cycle launched centrally.",
        completionSignal: "Engagement and reach KPIs met for 2 consecutive weeks; influencer roster active in all 4 cohorts.",
        tasks: [
          { team:"narrative", title:"Daily narrative pipeline", description:"Convert state issues into daily infopacks, media pointers, speech pointers.", eta:"Ongoing daily", input:"Bharat Darpan + state PI feeds", output:"≥3 narratives per day disseminated", status:"in_progress",
            poc:{ name:"Shreyas Bharadwaj", role:"QRT Manager", phone:"+91 9XXXX 30001", email:"shreyas.bharadwaj@varaheanalytics.com", slack:"@shreyas", photo:"https://i.pravatar.cc/200?u=shreyas" } },
          { team:"growth", title:"Awareness campaign deployment", description:"Launch Meta + Google awareness ads geo-targeted to AC pin codes.", eta:"Continuous", input:"Approved creatives + caption banks", output:"≥2 cr impressions/week at agreed CPM", status:"in_progress",
            poc:{ name:"Apoorva Sahasrabudhay", role:"Growth Lead", phone:"+91 9XXXX 30002", email:"apoorva.sahasrabudhay@varaheanalytics.com", slack:"@apoorva", photo:"https://i.pravatar.cc/200?u=apoorva" } },
          { team:"smcc", title:"SMCC pages live", description:"FB + IG pages per AC, brand kit applied, content calendar live.", eta:"21 days from Phase 2 start", input:"AC list + zone mapping", output:"All AC pages live with ≥7 days of content", status:"in_progress",
            poc:{ name:"Vijaya", role:"State SMCC Head", phone:"+91 9XXXX 30003", email:"vijaya@varaheanalytics.com", slack:"@vijaya", photo:"https://i.pravatar.cc/200?u=vijaya" } },
          { team:"campaign-branding", title:"Hero campaign visual identity", description:"Master template, design system, animated explainers, hoarding mocks.", eta:"14 days", input:"Campaign brief + narrative beat sheet", output:"Brand kit + first wave of assets approved", status:"pending",
            poc:{ name:"Neeraj JP", role:"Branding Lead", phone:"+91 9XXXX 30004", email:"neeraj.jp@varaheanalytics.com", slack:"@neeraj", photo:"https://i.pravatar.cc/200?u=neeraj" } },
          { team:"influencer", title:"Creator cohort activation", description:"Brief 25–40 creators per executive across language and category cohorts.", eta:"7 days from cohort plan", input:"Cohort plan + budget go-ahead", output:"First wave of synchronized drops live", status:"pending",
            poc:{ name:"Nachiketh Reddy", role:"Influencer Network Lead", phone:"+91 9XXXX 30005", email:"nachiketh.reddy@varaheanalytics.com", slack:"@nachiketh", photo:"https://i.pravatar.cc/200?u=nachiketh" } }
        ]
      },
      {
        n: 3,
        name: "Peak Campaign",
        sub: "MCC · Election Period",
        status: "locked",
        lead: "Lorem ipsum — maximum volume, real-time response, multi-account scaling, full-team activation. Every team is at very-high intensity.",
        prerequisites: [
          "All Phase 2 KPIs hit",
          "MCMC approval workflows tested end-to-end",
          "Multi-account backup live"
        ],
        startTrigger: "MCC enforced (announcement of polling schedule).",
        completionSignal: "End of campaign period; silence-period communications complete.",
        tasks: [
          { team:"smcc", title:"Hyperlocal saturation", description:"AC-level attack + positive content at 3+ posts/day per page.", eta:"Continuous", input:"Daily narrative + opposition monitoring", output:"≥500 new followers/page/week, CPM under ₹15", status:"pending",
            poc:{ name:"Vijaya", role:"State SMCC Head", phone:"+91 9XXXX 30003", email:"vijaya@varaheanalytics.com", slack:"@vijaya", photo:"https://i.pravatar.cc/200?u=vijaya" } },
          { team:"legal", title:"Real-time MCMC + complaints", description:"Vet every creative + handle opposition violations + nominations.", eta:"Same-day", input:"Creative queue + complaint feed", output:"Zero MCC violations from BJP side", status:"pending",
            poc:{ name:"Divakar Kalra", role:"Legal Manager", phone:"+91 9XXXX 20002", email:"divakar.kalra@varaheanalytics.com", slack:"@divakar", photo:"https://i.pravatar.cc/200?u=divakar" } },
          { team:"tvc", title:"AC-specific TVCs", description:"20-second unskippable spots per AC + magnum opus + manifesto film.", eta:"21 days lead", input:"Narrative beat sheet + actor retainers", output:"All AC TVCs delivered + dubbed", status:"pending",
            poc:{ name:"Abhiraj", role:"Senior Producer", phone:"+91 9XXXX 40001", email:"abhiraj@goodtakestudio.com", slack:"@abhiraj", photo:"https://i.pravatar.cc/200?u=abhiraj" } },
          { team:"reporter", title:"AC-level field surge", description:"Surge to 600+ reporters via AC-level deployment.", eta:"Continuous", input:"State surge plan + payment float", output:"≥400 field assets/month delivered", status:"pending",
            poc:{ name:"Avishka Goel", role:"RN Central Manager", phone:"+91 9XXXX 20004", email:"avishka.goel@varaheanalytics.com", slack:"@avishka", photo:"https://i.pravatar.cc/200?u=avishka" } }
        ]
      },
      {
        n: 4,
        name: "Conversion",
        sub: "Voting Phase",
        status: "locked",
        lead: "Lorem ipsum — last-mile, hyper-targeted, GOTV and silence-period compliance. Volume tapers but precision rises.",
        prerequisites: [
          "All AC TVCs in market",
          "Telecom Ads vendor lock-in confirmed (15 days before polling)",
          "Polling-day legal escalation matrix live"
        ],
        startTrigger: "T-15 days before polling.",
        completionSignal: "Polling day ends + silence-period communications archived.",
        tasks: [
          { team:"non-meta", title:"Telecom Ads deployment", description:"AC-specific telecom ads in last 15 days; pin codes + LatLong locked.", eta:"15 days", input:"Vendor lock + creative final approvals", output:"All AC telecom assets live in target booths", status:"pending",
            poc:{ name:"Nishant Sharma", role:"Non-Meta Ads Lead", phone:"+91 9XXXX 50001", email:"nishant.sharma@varaheanalytics.com", slack:"@nishant", photo:"https://i.pravatar.cc/200?u=nishant" } },
          { team:"partnership", title:"Last-mile creator drops", description:"Synchronised cohort-targeted GOTV creator activations.", eta:"7-day push", input:"Cohort-by-cohort narrative briefs", output:"Reach + sentiment shift in target cohorts", status:"pending",
            poc:{ name:"Anjali Goswami", role:"Partnership Lead · Nexgrow", phone:"+91 9XXXX 50002", email:"anjali.goswami@nexgrowdigital.com", slack:"@anjali", photo:"https://i.pravatar.cc/200?u=anjali" } },
          { team:"legal", title:"Polling-day legal support", description:"Booth-level escalations, Police + General Observers coordination.", eta:"Polling day", input:"Booth list + observer map", output:"Zero unresolved escalations >2 hours", status:"pending",
            poc:{ name:"Divakar Kalra", role:"Legal Manager", phone:"+91 9XXXX 20002", email:"divakar.kalra@varaheanalytics.com", slack:"@divakar", photo:"https://i.pravatar.cc/200?u=divakar" } }
        ]
      },
      {
        n: 5,
        name: "Cool Down",
        sub: "Post-Campaign · Closure",
        status: "locked",
        lead: "Lorem ipsum — closure reports, archival, retention decisions, learnings doc.",
        prerequisites: [
          "Result-day complete",
          "Final spend reconciliation closed",
          "Reporter Network payment cycle resolved"
        ],
        startTrigger: "Result declared.",
        completionSignal: "Comprehensive Campaign Closure Report submitted to leadership.",
        tasks: [
          { team:"arc", title:"Closure & learnings report", description:"Key takeaways doc + Comprehensive Campaign Closure Report.", eta:"21 days", input:"All campaign reports + spend data", output:"Closure report signed off", status:"pending",
            poc:{ name:"Chandra Shekher", role:"ARC Lead", phone:"+91 9XXXX 20001", email:"chandra.shekher@varaheanalytics.com", slack:"@chandra-arc", photo:"https://i.pravatar.cc/200?u=chandra" } },
          { team:"growth", title:"Spend & asset reconciliation", description:"Final reporting, spend reconciliation, asset recovery, dashboard closure.", eta:"14 days", input:"Vendor invoices + final platform exports", output:"Reconciled spend report", status:"pending",
            poc:{ name:"Apoorva Sahasrabudhay", role:"Growth Lead", phone:"+91 9XXXX 30002", email:"apoorva.sahasrabudhay@varaheanalytics.com", slack:"@apoorva", photo:"https://i.pravatar.cc/200?u=apoorva" } }
        ]
      }
    ]
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
    phases: [
      { n:1, name:"Foundation", sub:"Pre-MCC · Slow Build", status:"active",
        lead:"Kerala is at early foundation — team forming, baseline access being established.",
        prerequisites:["Engagement letter signed","State POC list confirmed"],
        startTrigger:"PD onboarded in state.",
        completionSignal:"Baseline Analysis Report approved.",
        tasks:[
          { team:"arc", title:"Baseline Analysis Report", description:"Kerala SM landscape baseline.", eta:"14 days", input:"State handles list", output:"Signed-off report", status:"in_progress",
            poc:{ name:"Shalini Kumari", role:"ARC Associate", phone:"+91 9XXXX 21001", email:"shalini.kumari@varaheanalytics.com", slack:"@shalini", photo:"https://i.pravatar.cc/200?u=shalini" } }
        ] },
      { n:2, name:"Acceleration", sub:"Build-Up", status:"locked", lead:"Locked.", prerequisites:[], startTrigger:"", completionSignal:"", tasks:[] },
      { n:3, name:"Peak Campaign", sub:"MCC · Election", status:"locked", lead:"Locked.", prerequisites:[], startTrigger:"", completionSignal:"", tasks:[] },
      { n:4, name:"Conversion", sub:"Voting Phase", status:"locked", lead:"Locked.", prerequisites:[], startTrigger:"", completionSignal:"", tasks:[] },
      { n:5, name:"Cool Down", sub:"Closure", status:"locked", lead:"Locked.", prerequisites:[], startTrigger:"", completionSignal:"", tasks:[] }
    ]
  }
};

/* Sheet loader stub.
   When the Google Sheet at SHEET_ID is filled with the documented schema and
   published (File → Share → Publish to web), this loader will pull all tabs
   and merge into JOURNEY. Call after page mounts.
   The free gviz JSON endpoint works without API keys for any sheet shared
   with "Anyone with the link → Viewer".
*/
const SHEET_ID = "1tOojU6WyY-Ss-iZ0ejxTEJhHusJ6Dw1jSCOty9xEtzM";
async function loadJourneyFromSheet(){
  // Placeholder — wire up once Sheet has the schema rows populated.
  // const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=MH`;
  // const r = await fetch(url); const txt = await r.text();
  // const json = JSON.parse(txt.slice(txt.indexOf("{"), txt.lastIndexOf("}")+1));
  // … parse json.table.rows and merge into JOURNEY.MH
  return JOURNEY;
}
