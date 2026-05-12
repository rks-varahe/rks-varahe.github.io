/* JOURNEY BLUEPRINT — fixed across all states.
   Defines the 5 phases, the team-tasks within each phase, prereqs, inputs/outputs,
   ETAs, POCs, and target metrics. State sheets only override STATUS + PROGRESS.

   Task IDs use format p{phase}.{team}.{slug} — stable, never renamed without migration.
   `target` is optional and signals a quantitative goal:
     • target = { value: 100, unit: "editors" }  → progress bar 50/100
     • target = { value: 1, unit: "task" }       → single completion gate
*/
const JOURNEY_BLUEPRINT = {
  phases: [
    {
      n: 1,
      name: "Foundation",
      sub: "Pre-MCC · Slow Build",
      lead: "Establish team structure, infrastructure, baseline measurements and stakeholder mapping before the MCC kicks in. Mostly preparatory — low intensity, high planning.",
      prerequisites: [
        "Engagement letter signed and PD onboarded in state",
        "State party POC list shared with VA",
        "Baseline access to official handles confirmed"
      ],
      startTrigger: "PD lands in the state and meets State Communications Convenor.",
      completionSignal: "Baseline Analysis Report approved + all team SOPs trained.",
      tasks: [
        { id: "p1.arc.baseline", team: "arc", title: "Baseline Analysis Report",
          description: "Evaluate the state social-media landscape, audit official party pages, key stakeholders, MPs/MLAs.",
          eta: "7 days from kickoff",
          input: "State handles list + candidate roster",
          output: "Signed-off baseline report shared with leadership",
          target: { value: 1, unit: "report" },
          poc: { name:"Chandra Shekher", role:"ARC Lead", phone:"+91 9XXXX 20001", email:"chandra.shekher@varaheanalytics.com", slack:"@chandra-arc", photo:"https://i.pravatar.cc/200?u=chandra" } },

        { id: "p1.legal.framework", team: "legal", title: "Compliance framework setup",
          description: "Draft SOPs, trackers, compliance checklists; coordinate with State Legal Cell.",
          eta: "10 days",
          input: "Candidate affidavits + ECI notification calendar",
          output: "Trackers live, CMS PoCs trained",
          target: { value: 1, unit: "framework" },
          poc: { name:"Divakar Kalra", role:"Legal Manager", phone:"+91 9XXXX 20002", email:"divakar.kalra@varaheanalytics.com", slack:"@divakar", photo:"https://i.pravatar.cc/200?u=divakar" } },

        { id: "p1.media.mapping", team: "media", title: "State media landscape mapping",
          description: "Map regional outlets, liaison with local units, set up monitoring systems.",
          eta: "7 days",
          input: "State media directory",
          output: "Monitoring framework operational",
          target: { value: 1, unit: "framework" },
          poc: { name:"Sahil Vats", role:"Media Team Lead", phone:"+91 9XXXX 20003", email:"sahil.vats@varaheanalytics.com", slack:"@sahil", photo:"https://i.pravatar.cc/200?u=sahil" } },

        { id: "p1.reporter.onboard", team: "reporter", title: "Reporter Network warm-up",
          description: "Identify, verify and onboard state-level reporters; pre-position equipment.",
          eta: "14 days",
          input: "IPRD reports + state references",
          output: "Active reporter pool confirmed",
          target: { value: 30, unit: "reporters" },
          poc: { name:"Avishka Goel", role:"RN Central Manager", phone:"+91 9XXXX 20004", email:"avishka.goel@varaheanalytics.com", slack:"@avishka", photo:"https://i.pravatar.cc/200?u=avishka" } },

        { id: "p1.partycoord.setup", team: "party-coord", title: "Stakeholder mapping & protocols",
          description: "Map party hierarchy, identify decision-makers; lock Day-1 communication protocols.",
          eta: "10 days",
          input: "Party org chart + introductions",
          output: "Approval chain documented and live",
          target: { value: 1, unit: "playbook" },
          poc: { name:"Anjali Goswami", role:"Party Coordination Lead", phone:"+91 9XXXX 50002", email:"anjali.goswami@nexgrowdigital.com", slack:"@anjali", photo:"https://i.pravatar.cc/200?u=anjali" } }
      ]
    },
    {
      n: 2,
      name: "Acceleration",
      sub: "Build-Up · Narrative Push",
      lead: "Narrative pipeline live, audiences warming up, paid spend pacing in. Multiple workstreams concurrently — coordination tightens. Medium intensity ramping toward MCC.",
      prerequisites: [
        "Phase 1 baseline report approved",
        "Page audits complete",
        "Ad accounts verified and disclaimer-cleared"
      ],
      startTrigger: "First narrative cycle launched centrally.",
      completionSignal: "Engagement and reach KPIs met for 2 consecutive weeks; influencer roster active in all 4 cohorts.",
      tasks: [
        { id: "p2.narrative.pipeline", team: "narrative", title: "Daily narrative pipeline",
          description: "Convert state issues into daily infopacks, media pointers, speech pointers.",
          eta: "Ongoing daily",
          input: "Bharat Darpan + state PI feeds",
          output: "≥3 narratives per day disseminated",
          target: { value: 3, unit: "narratives/day" },
          poc: { name:"Shreyas Bharadwaj", role:"QRT Manager", phone:"+91 9XXXX 30001", email:"shreyas.bharadwaj@varaheanalytics.com", slack:"@shreyas", photo:"https://i.pravatar.cc/200?u=shreyas" } },

        { id: "p2.growth.awareness", team: "growth", title: "Awareness campaign deployment",
          description: "Launch Meta + Google awareness ads geo-targeted to AC pin codes.",
          eta: "Continuous",
          input: "Approved creatives + caption banks",
          output: "Weekly impressions at agreed CPM",
          target: { value: 20000000, unit: "impressions/week" },
          poc: { name:"Apoorva Sahasrabudhay", role:"Growth Lead", phone:"+91 9XXXX 30002", email:"apoorva.sahasrabudhay@varaheanalytics.com", slack:"@apoorva", photo:"https://i.pravatar.cc/200?u=apoorva" } },

        { id: "p2.smcc.pages", team: "smcc", title: "SMCC pages live across ACs",
          description: "FB + IG pages per AC, brand kit applied, content calendar live.",
          eta: "21 days from Phase 2 start",
          input: "AC list + zone mapping",
          output: "All AC pages live with ≥7 days of content",
          target: { value: 288, unit: "AC pages" },
          poc: { name:"Vijaya", role:"State SMCC Head", phone:"+91 9XXXX 30003", email:"vijaya@varaheanalytics.com", slack:"@vijaya", photo:"https://i.pravatar.cc/200?u=vijaya" } },

        { id: "p2.branding.identity", team: "campaign-branding", title: "Hero campaign visual identity",
          description: "Master template, design system, animated explainers, hoarding mocks.",
          eta: "14 days",
          input: "Campaign brief + narrative beat sheet",
          output: "Brand kit + first wave of assets approved",
          target: { value: 1, unit: "brand kit" },
          poc: { name:"Neeraj JP", role:"Branding Lead", phone:"+91 9XXXX 30004", email:"neeraj.jp@varaheanalytics.com", slack:"@neeraj", photo:"https://i.pravatar.cc/200?u=neeraj" } },

        { id: "p2.influencer.cohorts", team: "influencer", title: "Creator cohort activation",
          description: "Brief 25–40 creators per executive across language and category cohorts.",
          eta: "7 days from cohort plan",
          input: "Cohort plan + budget go-ahead",
          output: "Synchronized creator drops live",
          target: { value: 200, unit: "creators" },
          poc: { name:"Nachiketh Reddy", role:"Influencer Network Lead", phone:"+91 9XXXX 30005", email:"nachiketh.reddy@varaheanalytics.com", slack:"@nachiketh", photo:"https://i.pravatar.cc/200?u=nachiketh" } },

        { id: "p2.smcc.hiring", team: "smcc", title: "SMCC team hiring (creative)",
          description: "Onboard 1 Video Editor + 1 Graphic Designer + 1 Content Writer per 3 ACs.",
          eta: "21 days",
          input: "Hiring plan based on contested AC count",
          output: "All AC-zones staffed",
          target: { value: 81, unit: "people" },
          poc: { name:"Vijaya", role:"State SMCC Head", phone:"+91 9XXXX 30003", email:"vijaya@varaheanalytics.com", slack:"@vijaya", photo:"https://i.pravatar.cc/200?u=vijaya" } }
      ]
    },
    {
      n: 3,
      name: "Peak Campaign",
      sub: "MCC · Election Period",
      lead: "Maximum volume, real-time response, multi-account scaling, full-team activation. Every team operates at very-high intensity. The boss level.",
      prerequisites: [
        "All Phase 2 KPIs hit",
        "MCMC approval workflows tested end-to-end",
        "Multi-account backup live"
      ],
      startTrigger: "MCC enforced (announcement of polling schedule).",
      completionSignal: "End of campaign period; silence-period communications complete.",
      tasks: [
        { id: "p3.smcc.saturation", team: "smcc", title: "Hyperlocal saturation",
          description: "AC-level attack + positive content at 3+ posts/day per page.",
          eta: "Continuous",
          input: "Daily narrative + opposition monitoring",
          output: "Follower growth + CPM targets hit",
          target: { value: 500, unit: "new followers/page/week" },
          poc: { name:"Vijaya", role:"State SMCC Head", phone:"+91 9XXXX 30003", email:"vijaya@varaheanalytics.com", slack:"@vijaya", photo:"https://i.pravatar.cc/200?u=vijaya" } },

        { id: "p3.legal.mcmc", team: "legal", title: "Real-time MCMC + complaints",
          description: "Vet every creative + handle opposition violations + nominations.",
          eta: "Same-day",
          input: "Creative queue + complaint feed",
          output: "Zero MCC violations from our side",
          target: { value: 0, unit: "violations" },
          poc: { name:"Divakar Kalra", role:"Legal Manager", phone:"+91 9XXXX 20002", email:"divakar.kalra@varaheanalytics.com", slack:"@divakar", photo:"https://i.pravatar.cc/200?u=divakar" } },

        { id: "p3.tvc.films", team: "tvc", title: "AC-specific TVCs",
          description: "20-second unskippable spots per AC + magnum opus + manifesto film.",
          eta: "21 days lead",
          input: "Narrative beat sheet + actor retainers",
          output: "All AC TVCs delivered + dubbed",
          target: { value: 288, unit: "AC TVCs" },
          poc: { name:"Abhiraj", role:"Senior Producer", phone:"+91 9XXXX 40001", email:"abhiraj@goodtakestudio.com", slack:"@abhiraj", photo:"https://i.pravatar.cc/200?u=abhiraj" } },

        { id: "p3.reporter.surge", team: "reporter", title: "AC-level field surge",
          description: "Surge to 600+ reporters via AC-level deployment.",
          eta: "Continuous",
          input: "State surge plan + payment float",
          output: "Field assets delivered monthly",
          target: { value: 600, unit: "active reporters" },
          poc: { name:"Avishka Goel", role:"RN Central Manager", phone:"+91 9XXXX 20004", email:"avishka.goel@varaheanalytics.com", slack:"@avishka", photo:"https://i.pravatar.cc/200?u=avishka" } },

        { id: "p3.media.warroom", team: "media", title: "Live media war-room",
          description: "Dedicated media room with party; align state ↔ national narratives.",
          eta: "Continuous",
          input: "National Comms feed + opposition tracker",
          output: "Real-time narrative coordination",
          target: { value: 1, unit: "war-room" },
          poc: { name:"Sahil Vats", role:"Media Team Lead", phone:"+91 9XXXX 20003", email:"sahil.vats@varaheanalytics.com", slack:"@sahil", photo:"https://i.pravatar.cc/200?u=sahil" } }
      ]
    },
    {
      n: 4,
      name: "Conversion",
      sub: "Voting Phase",
      lead: "Last-mile, hyper-targeted, GOTV and silence-period compliance. Volume tapers but precision rises.",
      prerequisites: [
        "All AC TVCs in market",
        "Telecom Ads vendor lock-in confirmed (15 days before polling)",
        "Polling-day legal escalation matrix live"
      ],
      startTrigger: "T-15 days before polling.",
      completionSignal: "Polling day ends + silence-period communications archived.",
      tasks: [
        { id: "p4.nonmeta.telecom", team: "non-meta", title: "Telecom Ads deployment",
          description: "AC-specific telecom ads in last 15 days; pin codes + LatLong locked.",
          eta: "15 days",
          input: "Vendor lock + creative final approvals",
          output: "Telecom assets live in target booths",
          target: { value: 288, unit: "AC telecom sets" },
          poc: { name:"Nishant Sharma", role:"Non-Meta Ads Lead", phone:"+91 9XXXX 50001", email:"nishant.sharma@varaheanalytics.com", slack:"@nishant", photo:"https://i.pravatar.cc/200?u=nishant" } },

        { id: "p4.partnership.gotv", team: "partnership", title: "Last-mile creator drops",
          description: "Synchronised cohort-targeted GOTV creator activations.",
          eta: "7-day push",
          input: "Cohort-by-cohort narrative briefs",
          output: "Sentiment shift in target cohorts",
          target: { value: 1, unit: "GOTV wave" },
          poc: { name:"Anjali Goswami", role:"Partnership Lead · Nexgrow", phone:"+91 9XXXX 50002", email:"anjali.goswami@nexgrowdigital.com", slack:"@anjali", photo:"https://i.pravatar.cc/200?u=anjali" } },

        { id: "p4.legal.pollday", team: "legal", title: "Polling-day legal support",
          description: "Booth-level escalations, Police + General Observers coordination.",
          eta: "Polling day",
          input: "Booth list + observer map",
          output: "Zero unresolved escalations >2 hours",
          target: { value: 0, unit: "unresolved escalations" },
          poc: { name:"Divakar Kalra", role:"Legal Manager", phone:"+91 9XXXX 20002", email:"divakar.kalra@varaheanalytics.com", slack:"@divakar", photo:"https://i.pravatar.cc/200?u=divakar" } },

        { id: "p4.party.gotv", team: "party", title: "Official handles GOTV push",
          description: "Vote-appeal content + polling-day motivation on official handles.",
          eta: "Final 48 hours",
          input: "Approved GOTV creatives",
          output: "All party handles publish on schedule",
          target: { value: 1, unit: "GOTV calendar" },
          poc: { name:"Suraj Bhan", role:"Project Director", phone:"+91 9XXXX 10001", email:"suraj.bhan@varaheanalytics.com", slack:"@suraj", photo:"https://i.pravatar.cc/200?u=suraj" } }
      ]
    },
    {
      n: 5,
      name: "Cool Down",
      sub: "Post-Campaign · Closure",
      lead: "Closure reports, archival, retention decisions, learnings doc. Low intensity, focused on documentation.",
      prerequisites: [
        "Result-day complete",
        "Final spend reconciliation closed",
        "Reporter Network payment cycle resolved"
      ],
      startTrigger: "Result declared.",
      completionSignal: "Comprehensive Campaign Closure Report submitted to leadership.",
      tasks: [
        { id: "p5.arc.closure", team: "arc", title: "Closure & learnings report",
          description: "Key takeaways doc + Comprehensive Campaign Closure Report.",
          eta: "21 days",
          input: "All campaign reports + spend data",
          output: "Closure report signed off",
          target: { value: 1, unit: "closure report" },
          poc: { name:"Chandra Shekher", role:"ARC Lead", phone:"+91 9XXXX 20001", email:"chandra.shekher@varaheanalytics.com", slack:"@chandra-arc", photo:"https://i.pravatar.cc/200?u=chandra" } },

        { id: "p5.growth.reconcile", team: "growth", title: "Spend & asset reconciliation",
          description: "Final reporting, spend reconciliation, asset recovery, dashboard closure.",
          eta: "14 days",
          input: "Vendor invoices + final platform exports",
          output: "Reconciled spend report",
          target: { value: 1, unit: "reconciliation" },
          poc: { name:"Apoorva Sahasrabudhay", role:"Growth Lead", phone:"+91 9XXXX 30002", email:"apoorva.sahasrabudhay@varaheanalytics.com", slack:"@apoorva", photo:"https://i.pravatar.cc/200?u=apoorva" } },

        { id: "p5.reporter.retention", team: "reporter", title: "Reporter network retention",
          description: "Classify reporters into retain / selective-use / inactive; close payments.",
          eta: "14 days",
          input: "Per-reporter performance log",
          output: "Retention pool finalised",
          target: { value: 150, unit: "retained reporters" },
          poc: { name:"Avishka Goel", role:"RN Central Manager", phone:"+91 9XXXX 20004", email:"avishka.goel@varaheanalytics.com", slack:"@avishka", photo:"https://i.pravatar.cc/200?u=avishka" } }
      ]
    }
  ]
};

// Convenience: index tasks by id and by team
const TASKS_BY_ID = (() => {
  const m = {};
  JOURNEY_BLUEPRINT.phases.forEach(ph => ph.tasks.forEach(t => { m[t.id] = { ...t, phase: ph.n }; }));
  return m;
})();
const TASKS_BY_TEAM = (() => {
  const m = {};
  JOURNEY_BLUEPRINT.phases.forEach(ph => ph.tasks.forEach(t => {
    if (!m[t.team]) m[t.team] = [];
    m[t.team].push({ ...t, phase: ph.n });
  }));
  return m;
})();
