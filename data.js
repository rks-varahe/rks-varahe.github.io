/* Varahe National Communications — Master Data */
/* All data points sourced verbatim from team SOP documents. */

const GLOSSARY = {
  "SMCC":"Social Media Command Centre — BJP's hyperlocal digital operations unit running constituency-level pages.",
  "ARC":"Analytics, Reporting & Coordination — converts platform metrics into strategic insights and reports.",
  "MCC":"Model Code of Conduct — Election Commission guidelines restricting campaign activities once enforced.",
  "ECI":"Election Commission of India — statutory authority for elections; sets advertising and conduct rules.",
  "MCMC":"Media Certification and Monitoring Committee — vets political ads, TVCs and election creatives.",
  "AC":"Assembly Constituency — electoral unit for state legislature elections.",
  "QRT":"Quick Response Team — identifies issues and converts them into narratives, infopacks and speech pointers.",
  "GDN":"Google Display Network — Google's display ad inventory across third-party sites.",
  "DV360":"Display & Video 360 — Google's programmatic media buying platform.",
  "PG Deals":"Programmatic Guaranteed Deals — direct deals with publisher websites.",
  "OTT":"Over-The-Top — streaming TV platforms (apps, smart TVs).",
  "TVC":"Television Commercial — long/short-form video ads for broadcast and digital.",
  "RN":"Reporter Network — decentralised field intelligence and content execution system.",
  "PI":"Political Intelligence — team that maps state/AC/cohort level political narratives.",
  "PD":"Project Director — campaign-level senior accountable for a state engagement.",
  "PM":"Project Manager — owns workflow, coordination and approvals within a team.",
  "POC":"Point of Contact — designated coordinator for a stakeholder or team.",
  "SMAAR":"Social Media Activities Assessment Report — measures Comms Team's impact on a leader's digital presence.",
  "BM":"Meta Business Manager — Facebook's central platform for managing pages and ad accounts.",
  "CPM":"Cost Per Mille — cost per 1,000 ad impressions.",
  "CTR":"Click-Through Rate — % of viewers who click an ad.",
  "CMS":"Constituency Management System — operational stack supporting field/legal/comms in each AC.",
  "GOTV":"Get Out The Vote — voter-turnout drive in the final days.",
  "OBD":"Outbound Dialer — automated voice-broadcast calls.",
  "GTS":"Ground-to-Screen / Production team — coordinates TVC and broadcast assets.",
  "Ghost Ads":"Ads run without a public organic post, used for sensitive narrative targeting.",
  "Bharat Darpan":"QRT's macro-political issue-tracking workstream.",
  "Project Nandaka":"QRT's micro-political issue-tracking workstream.",
  "India 1/2/3":"Tier framework used for influencer/surrogate pricing — India 1 (premium urban), India 2 (Tier-II/III), India 3 (Bharat / vernacular)."
};

const PHASES = [
  {n:1,name:"Foundation",sub:"Pre-MCC / Slow Build",intensity:"low",blurb:"Structure setup, research, coordination systems, asset preparation."},
  {n:2,name:"Acceleration",sub:"Build-Up",intensity:"medium",blurb:"Narrative push, content pipeline live, audience and approval systems warmed up."},
  {n:3,name:"Peak Campaign",sub:"MCC / Election Period",intensity:"very-high",blurb:"Maximum volume, real-time response, multi-account scaling, full-team activation."},
  {n:4,name:"Conversion",sub:"Voting Phase",intensity:"high",blurb:"Last-mile, hyper-targeted, GOTV and silence-period compliance."},
  {n:5,name:"Cool Down",sub:"Post-Campaign",intensity:"low",blurb:"Closure reports, archival, retention decisions, learnings doc."}
];

const TEAMS = [
  /* ----------------------------- ARC ----------------------------- */
  {
    id:"arc",name:"ARC — Feedback & Reporting",icon:"📊",
    category:"intel",function:"Intelligence & Reporting",
    tagline:"The strategic monitoring and reporting unit converting raw platform numbers into actionable inputs.",
    purpose:"To function as the central communication reporting, monitoring and strategic support during and outside campaigns. ARC converts raw platform numbers, narratives and performance trends into actionable strategic inputs for National, State and Campaign teams on weekly, monthly and ad-hoc basis. It is especially critical during elections — without ARC, communication efforts become fragmented and reactive to measurement.",
    structure:[
      {role:"GM (L2) — ARC Lead",detail:"Internal hierarchy unchanged; final quality-check on insights before sharing with leadership/client."},
      {role:"State-deployed Members",detail:"1–2 members assigned per campaign state; report to PD on state needs and to GM internally."}
    ],
    reportsTo:["State PD","Comms Lead","ARC GM"],
    skills:{must:["Deep understanding of political messaging","Translate numbers into tactical insights","High-stakes real-time reporting with 100% accuracy","Google Docs, Sheets, Slides proficiency"],
            nice:["Interpret political nuance and local sentiment","Liaison between State Comms and ARC"]},
    coreFunctions:[
      {title:"Role in Campaign Flow",items:[
        "Baseline Analysis Report at campaign start — evaluates state's social media landscape",
        "Analysis of official party pages and key stakeholders (office bearers, MPs, MLAs)",
        "Periodic Impact Assessment Report (SMAAR) — Comms team's measurable impact on leader's digital presence",
        "Periodic assessment of Ad Spend on Ghost Ads & Engagement Posting",
        "Periodic Trend Analysis of client and opposition digital ecosystems; case studies",
        "Daily Narrative Performance report + Monthly Narrative Performance report for leadership",
        "During narrative cycles — daily Posting Compliance & Dissemination Reports",
        "Vendor Pages coordination on dissemination, frequency, compliance; weekly Vendor Pages Report",
        "End-to-end content tracking and data support for Comms Team",
        "Confidential SM analysis reports and ad-hoc research for direct client consumption",
        "Repository of all reports/datasets; productivity log of Comms team members",
        "Performance tracking reports of the Social Media Command Centre",
        "On campaign conclusion — Key Takeaways doc + Comprehensive Campaign Closure Report"
      ]},
      {title:"Routine — Performance Intelligence",items:[
        "Benchmarks BJP performance across Official, VA, Partner, In-House, Influencer and Partner ecosystems",
        "24-hour impact reports, weekly and monthly reports",
        "Ad-hoc social media analysis for MPs, MLAs, UMs, CMs",
        "Qualitative analysis of tone, language, design alignment alongside quantitative measures",
        "Identifies untapped opportunities, top performers, replicates best practices"
      ]},
      {title:"Working Logic",items:[
        "Converts raw SM metrics (from Analytics or own extraction tools) into structured assessments",
        "Identifies strategic ways to launch coordinated attacks; audits BJP pages and leader profiles",
        "Weekly/monthly reports help leadership pivot strategies in real-time",
        "Key dependency — uninterrupted flow of data, competitive intelligence and seamless integration of state-level ground updates"
      ]},
      {title:"Coordination with Other Teams",items:[
        "Works closely with VA-administered state teams to ensure narrative execution alignment",
        "Delivers data-driven reports on page health, performance, narrative success",
        "Assists state team with data extraction and combined tasks/reports regularly",
        "Reports internally to ARC GM (L2) for quality-check before leadership/client sharing"
      ]}
    ],
    reportCatalogue:[
      {name:"Baseline Analysis Report",freq:"Campaign start",who:"State social media landscape, official party pages, key stakeholders, MPs/MLAs"},
      {name:"SMAAR — Impact Assessment Report",freq:"Periodic",who:"Comms Team's measurable impact on leader's digital presence"},
      {name:"Ghost Ads & Engagement Posting Assessment",freq:"Periodic",who:"Ad spend evaluation + strategic interventions"},
      {name:"Trend Analysis",freq:"Periodic",who:"Client and opposition ecosystems; best-practice case studies"},
      {name:"Daily Narrative Performance Report",freq:"Daily",who:"Real-time monitoring"},
      {name:"Monthly Narrative Performance Report",freq:"Monthly",who:"Leadership view"},
      {name:"Posting Compliance & Dissemination Report",freq:"Daily (active cycles)",who:"Tracks rollout & spread of narrative"},
      {name:"Vendor Pages Report",freq:"Weekly",who:"Narrative dissemination, posting frequency, compliance"},
      {name:"24-hour Impact Report",freq:"24-hr",who:"Real-time impact assessment"},
      {name:"Weekly / Monthly Reports",freq:"Weekly + Monthly",who:"Leadership & client pivot inputs"},
      {name:"Ad-hoc SM Analysis",freq:"On-demand",who:"State leaders, MPs, MLAs, UMs, CMs"},
      {name:"SMCC Performance Tracking",freq:"Periodic",who:"Performance of the Social Media Command Centre"},
      {name:"Productivity Log",freq:"Ongoing",who:"Comms team members — directed by Project Director"},
      {name:"Key Takeaways & Learnings Doc",freq:"Campaign close",who:"Hand-off learning"},
      {name:"Comprehensive Campaign Closure Report",freq:"Campaign close",who:"Final summary report"}
    ]
  },
  /* --------------------- Campaign Branding & Ads ----------------- */
  {
    id:"campaign-branding",name:"Campaign Branding & Ads",icon:"🎨",
    category:"creative",function:"Creative & Campaigns",
    tagline:"Centralised branding, creative and coordination unit across print, digital, ground, video, animation and tech.",
    purpose:"The Campaign Branding & Ads Team functions as a centralised branding, creative and coordination unit that supports national and state-level campaigns across multiple formats and platforms. It ensures smooth implementation of campaign-related requirements involving branding, events, print communication, digital creatives, media support, video communication, presentations, animation and campaign infrastructure support.",
    structure:[
      {role:"Team Lead",detail:"Planning, priority management, resource allocation, approval coordination, inter-department coordination, final supervision."},
      {role:"Operations & Coordination POCs",detail:"Stakeholder communication, brief collection, task assignment, timeline tracking, feedback, approvals, vendor coordination, follow-ups."},
      {role:"Creative Team",detail:"Graphic Designers, Video Editors, Motion Graphic Artists, Animators, Caricature Artists, PPT Designers, Content Strategists."},
      {role:"External Vendors",detail:"Print Vendors, Event Agencies, Production Teams, External Designers (scaled by campaign intensity)."}
    ],
    coreFunctions:[
      {title:"Key Responsibilities",items:[
        "Campaign Ideation & Creative Planning — communication planning, narrative visualisation, state-wise audience-specific planning",
        "Content Production & Creative Support — social media creatives, digital assets, print collateral, outdoor branding, WhatsApp creatives & GIFs",
        "Ground Branding & Event Support — meetings, yatras, conferences, backdrops, stage branding, gates, pole banners, LED, venue branding",
        "Video, Animation & Motion Graphics — campaign videos, speech edits, teasers, reels, motion graphic explainers, 2D animation, caricatures",
        "Print & Production Support — pamphlets, brochures, newspaper ads, manifestos, booklets, print-ready adaptations, vendor specifications",
        "PPTs — review decks, leadership presentations, research/strategy/ARC presentations",
        "AI & Automation — websites, landing pages, dashboards, automation support",
        "Coordination & Campaign Support — client coordination, brief management, approval management, inter-team tracking"
      ]},
      {title:"How a Typical Requirement Flows",items:[
        "Begins with: a campaign brief, event requirement, communication objective, research-based narrative, media requirement, or stakeholder request",
        "PoC coordinates objective, timeline/urgency, deliverables, platform/usage, approval flow, language/state adaptations",
        "Inputs from Research, Campaign, Communication, Media, Ground/Event, Leadership Offices"
      ]},
      {title:"Internal Working Process",items:[
        "Designers — branding and creatives",
        "Video editors — reels and campaign videos",
        "Animators — motion graphics and explainers",
        "PPT teams — presentations",
        "Technical teams — websites or automation",
        "PoCs — coordination, feedback, approvals, timelines"
      ]},
      {title:"Coordination & Feedback Loop",items:[
        "Continuous coordination with Stakeholders, Campaign Teams, Communication Teams, Vendors, Event Agencies, Media Teams",
        "Multiple rounds of feedback and revisions before final closure"
      ]},
      {title:"Dissemination",items:[
        "Outputs go to: social media dissemination, print production, event deployment, media usage, on-ground branding, WhatsApp circulation, presentations, digital publishing",
        "Deliverables include: backdrops & event branding, pamphlets & print, social creatives, videos/reels, animated content, presentations, websites/landing pages"
      ]},
      {title:"Pre-Campaign Preparation",items:[
        "Hiring & resource allocation — designers, editors, animators based on campaign needs",
        "Coordination systems — briefing, approval workflows, escalation hierarchies",
        "Narrative familiarisation — state-specific political narratives, positioning, local issues, regional sensitivities",
        "Asset & template preparation — master templates, design systems, asset libraries, typography systems"
      ]}
    ],
    workflow:[
      {step:"Request Initiation",desc:"Stakeholders initiate tasks with detailed brief; appropriate PoC tagged."},
      {step:"Content & Ideation",desc:"Content provided by campaigns PoC or developed internally."},
      {step:"Task Assignment",desc:"Tasks assigned to appropriate team members."},
      {step:"Execution",desc:"Team works to defined timeline upholding creative and quality standards."},
      {step:"Quality Assurance",desc:"Internal review for quality, brand alignment, creative expectations."},
      {step:"Completion",desc:"Final creatives shared with stakeholders for review/approval/dissemination."}
    ],
    example:{title:"GST Awareness & Achievement Campaign",content:"A GST awareness/achievements campaign communicates impact and benefits of GST implementation across print, digital, media, on-ground. Starts with objectives, target audience, messaging direction, deliverables, rollout timelines. Inputs from Campaign, Research, Communication, Media. Direction finalised → communication angles, messaging structure, creative references, visual direction, look & feel, platform-wise approach. Designers do print/branding/digital, video editors do reels/videos, animators do motion graphics, PPT designers do decks. PoC manages timelines, internal coordination, vendor communication, feedback, deliverable tracking. Workflow may include pamphlets, newspaper ads, hoardings, event branding, social creatives, reels, videos, animated explainers, leadership decks, media briefing presentations. Review for branding/narrative/platform/quality alignment → stakeholder feedback → revisions → final outputs."},
    budget:[
      {role:"Campaign Branding Lead",range:"₹1L – ₹1.3L"},
      {role:"Sr. Content Writer",range:"₹50K – ₹75K"},
      {role:"Jr. Content Writer",range:"₹35K – ₹50K"},
      {role:"Sr. Graphic Designer",range:"₹55K – ₹80K"},
      {role:"Jr. Graphic Designer",range:"₹35K – ₹50K"},
      {role:"Sr. Video Editor",range:"₹60K – ₹85K"},
      {role:"Jr. Video Editor",range:"₹35K – ₹55K"}
    ]
  },
  /* --------------------------- Party Team ------------------------ */
  {
    id:"party",name:"Party Team",icon:"🏛️",
    category:"comms",function:"Official Communications",
    tagline:"Drives the party's official digital communication — the mouthpiece and first line of narrative dissemination.",
    purpose:"This team manages official digital communication of the party during the campaign. Official party handles act as the mouthpiece and the first line of narrative dissemination to the public. Without it, communication becomes scattered, opposition narratives can dominate, development work remains under-amplified, and ground-level messaging fails to reach voters in a structured way.",
    structure:[
      {role:"Project Manager",detail:"Oversees overall campaign workflow, coordination, approvals, and alignment with party leadership."},
      {role:"Party Page Manager",detail:"Manages official party handles, daily publishing, content planning, and platform coordination."},
      {role:"Creative Team",detail:"2 Graphic Designers + 3 Video Editors + 1 Animator — creatives, reels, videos, motion graphics."},
      {role:"Content Writing Team",detail:"3 writers — captions, scripts, political messaging, reactive content, platform-specific copy."},
      {role:"Reporting Lead",detail:"1 person for reporting, tracker management, coordination."}
    ],
    sizing:{min:"4 members (1 Lead, 2 Sr. Video Editors, 1 Animator)",ideal:"~10 (PM + Page Manager + 2 GDs + 3 VEs + 1 Animator + 3 Writers + 1 Reporter)",scale:"By number of party properties and rally frequency"},
    coreFunctions:[
      {title:"Key Responsibilities",items:[
        "Planning and managing the overall digital narrative aligned with party's political strategy",
        "Daily/weekly/monthly content planning and content quality checks before posting",
        "Coverage of rallies and protests; promotion of party spokesperson statements",
        "Growth strategy planning; proposing ads for growth",
        "Coordination with the State Social Media Convenor"
      ]},
      {title:"Role in Campaign Flow",items:[
        "Plays key role in 360-degree dissemination of campaign communication",
        "Ensures official-handle content is amplified through leaders' accounts, district channels, candidate pages, influencer networks, and WhatsApp dissemination",
        "Acts as bridge between central campaign communication and ground-level distribution"
      ]},
      {title:"Daily Narrative Call at 8 AM",items:[
        "Based on previous day's media monitoring report and morning news updates",
        "Discussion with party leadership and Comms teams on party position and action points",
        "All messaging aligned with party narrative; district-level events/developments reviewed",
        "Post-call: actionable report with clear task allocation and responsibilities"
      ]},
      {title:"Daily Workflow / SOP",items:[
        "9:00–10:30 AM — content & creative teams begin production",
        "Prepare 4–5 key content pieces before lunch for timely posting through the day",
        "Remaining content completed before 6:00 PM; shared by 6:30 PM",
        "Publishing by ~8:00 PM avoids late-evening pile-up"
      ]},
      {title:"Coordination with Other Teams",items:[
        "Political strategy, research, media monitoring, design, video, field content teams",
        "District social media teams, candidate teams, influencer team, paid ads team",
        "WhatsApp dissemination team, event team, party leadership",
        "Depends on verified data, timely ground inputs, leadership direction, event schedules, approval authority, active dissemination by party units",
        "Reports to State Campaign Head, State Social Media Incharge, Communications Head, War Room Lead, senior leadership"
      ]},
      {title:"Failure Points / Loopholes",items:[
        "Delayed approvals, unverified data, weak coordination with district units",
        "Poor visuals, unclear content planning, slow opposition response, over-dependence on few individuals",
        "Inactive amplification networks, weak reporting systems, lack of archives",
        "Inconsistent coordination across official/district/candidate handles",
        "Human error during content creation; mistakes can lead to backfiring or negative reactions"
      ]},
      {title:"Escalation Matrix",items:[
        "PM escalates major errors / misinformation to PD",
        "Matter communicated to State Lead → coordinates with Party PoC for review, corrective action, damage control"
      ]},
      {title:"Campaign Flow",items:[
        "Narrative strategy planned ~6-7 months before election",
        "Planning calendar created; structured SM/comms execution",
        "Final 45 days: highly active — star campaigner visits, rally coverage, key leader speeches, manifesto, opposition counters, voter outreach",
        "Last phase: vote appeals, GOTV motivation, framing importance of participation"
      ]}
    ],
    failurePoints:["Delayed approvals","Unverified data","Weak coordination with district units","Poor visuals","Unclear content planning","Slow opposition response","Over-dependence on a few individuals","Inactive amplification networks","Weak reporting systems","Lack of proper archives","Inconsistent coordination across official/district/candidate handles","Human error during content creation; mistakes can lead to backfiring"]
  },
  /* --------------------------- Growth Team ----------------------- */
  {
    id:"growth",name:"Growth Team",icon:"📈",
    category:"ops",function:"Paid Media & Operations",
    tagline:"Manages, executes, optimises and safeguards political digital advertising across platforms.",
    purpose:"Manages, executes, optimises and safeguards political digital advertising operations across platforms while ensuring campaigns remain compliant, scalable, and strategically aligned with campaign narratives. The entire paid media ecosystem depends on this team's ability to coordinate stakeholders and maintain uninterrupted campaign delivery.",
    structure:[
      {role:"Team Lead",detail:"Operational control, budget approvals, escalation handling, internal/external coordination, budget forecasting, Direct Impact Purchase ads coordination, resource mapping & deployment."},
      {role:"Managers",detail:"Platform management, campaign monitoring, vendor coordination, reporting supervision, compliance, ad account management."},
      {role:"Executives / Consultants",detail:"Ad campaigns & reporting, execution, dashboard maintenance, creative tagging, approval tracking, daily monitoring."}
    ],
    sizing:{min:"3–5 (small state campaigns like PY)",ideal:"12–15 (parallel campaigns, multi-platform, continuous monitoring, dedicated reporting, compliance, asset recovery, shift-based peak monitoring)",scale:"When multiple states active; MCC/elections intensify; platform restrictions rise; narrative volume rises; multiple vendors/accounts run simultaneously."},
    coreFunctions:[
      {title:"Responsible For",items:[
        "Creating and maintaining social media assets and advertising infrastructure",
        "Meta and Google political advertising compliance",
        "Platform health, account safety, recovery operations",
        "Planning and optimising campaign budgets across platforms and objectives",
        "Daily spend monitoring; reporting dashboards",
        "Campaign execution across awareness, engagement, traffic, page likes and ghost ads",
        "Coordinating with party leadership for Direct Impact Purchase ads (creatives, budget, approvals, sizing, performance)"
      ]},
      {title:"Executes",items:[
        "Campaign launches and media deployment",
        "Political disclaimer setup and identity verification",
        "Audience segmentation and targeting strategy implementation",
        "Spend allocation optimisation based on narrative priorities",
        "Ghost ad deployment for sensitive narratives",
        "Google Election Commission approval workflows"
      ]},
      {title:"Manages",items:[
        "Ad accounts and credit lines",
        "Vendor and prepaid advertising accounts",
        "Internal & external social media properties and portfolio access",
        "Campaign dashboards and reporting structures",
        "Cross-platform spend pacing",
        "Asset recovery and escalation processes"
      ]},
      {title:"Coordinates With",items:["Varahe Leadership","National Comms","State Comms","State SMCC","Third-party communication teams","Official party teams","Vendors and platform representatives"]},
      {title:"Delivers",items:["Scaled campaign execution","Operational continuity during high-intensity campaigns","Real-time spend visibility & reporting","Narrative amplification through paid media","Safe and compliant advertising infrastructure"]},
      {title:"Daily Workflow",items:[
        "Morning (9–11 AM) — review previous day, check page/account health, platform restrictions/warnings, align with comms, dashboards, competition spend reports",
        "Afternoon (12–5 PM) — execution & optimisation, creative approvals & tagging, Google EC workflow, ghost ad deployment, vendor coordination, audience/spend adjustments",
        "Evening (6–10 PM) — peak monitoring, reporting updates, spend reconciliation, escalation, campaign shifts between accounts, final dashboard updates"
      ]},
      {title:"KPIs",items:[
        "Daily — live execution, spend dashboards, optimisation updates, asset monitoring, approval processing",
        "Weekly — budget pacing, platform-wise summaries, performance analysis, asset health, opposition spend analysis",
        "Success — campaign uptime, spend efficiency, page/account survival, timely launches, compliance approval rate, reporting accuracy, narrative reach & engagement"
      ]},
      {title:"Tools & Platforms",items:["Meta Ads Manager","Google Ads","Meta Business Manager","Google Sheets","AI deployment platforms","Web marketing tools","Dashboard systems","Supermetrics","Claude / GPT / Gemini","Budget trackers","Approval sheets","Asset management sheets","Audience targeting tools","Vendor account management systems"]},
      {title:"Common Failure Points",items:[
        "Payment delays to prepaid ad accounts",
        "Delayed creative approvals; improper creative tagging",
        "Platform policy violations → account suspension",
        "Delayed EC approvals; credit line exhaustion; asset access loss",
        "Poor inter-team coordination; incorrect audience mapping",
        "Budget overspend/underutilisation; incomplete dashboard reporting"
      ]}
    ],
    escalation:[
      ["Page restriction","Team Lead + Leadership","Immediate"],
      ["Ad account suspension","Platform operations lead","Immediate"],
      ["Budget overspend","Campaign Lead","Same day"],
      ["Credit line exhaustion","Finance/Vendor coordination","Immediate"],
      ["EC approval delay","Party PoC + Approval team","Same day"],
      ["Missing creatives/captions","Concerned comms team","Immediate"]
    ]
  },
  /* ----------------------- Influencer Team ----------------------- */
  {
    id:"influencer",name:"Influencer Management",icon:"🎙️",
    category:"creative",function:"Creator Network",
    tagline:"Converts paid messaging into earned credibility via a curated army of trusted regional voices.",
    purpose:"Converts paid messaging into earned credibility by routing campaign narratives through a curated, regionally distributed army of trusted voices instead of broadcast channels alone. Without it, campaigns depend solely on top-down media buys and party handles — perceived as paid propaganda. Conversion rates fall, narrative penetration (especially India 1) collapses, opposition messaging dominates, and cultural moments are lost.",
    philosophy:[
      "Build, brief and operate a network of trusted voices: macro, micro, page admins, vernacular creators, citizen journalists, cultural figures — who carry narrative into communities institutional media cannot reach.",
      "Modern voters with shrinking attention spans trust a relatable face that can dissect and distribute narrative tailored to each cohort."
    ],
    structure:[
      {role:"Head of Influencer Narrative Network (1)",detail:"Owns strategy, creator cohort selection, leadership reporting, direct line to Campaign Manager."},
      {role:"Creator Relationship Executives",detail:"Front-line; each handles 25–40 active creators; brief delivery, content review, follow-ups, creator-side crisis comms."}
    ],
    scaleNote:"25–40 creators per executive",
    coreFunctions:[
      {title:"Key Responsibilities",items:[
        "Onboarding & Execution — Sourcing, vetting, onboarding, retaining a tiered roster across languages, geographies, content categories (political, lifestyle, devotional, sports, comedy, news, youth, women-led, agri, student)",
        "Creative Guidance — Translating talking points into infopacks, creator briefs, sample reels, captions, hashtags creators can post natively",
        "Daily Operations — Day-to-day pipeline: commissioning, approvals, scheduling, posting windows, cross-amplification, deletion/correction when content goes off-script",
        "KPI-based Measurement — Reach, sentiment shift, hashtag dominance, comment-section sentiment, voter/brand-intent movement",
        "Relationship Building — Contracts, payments, confidentiality (NDAs), exclusivity windows, incentivising organic pro-party content"
      ]},
      {title:"Role in Campaign Flow",items:[
        "Input from QRT (daily narrative line, attack/defence priorities), Research & Data (segments, geo heat-maps, sentiment), Field Intelligence (sentiment, viral local moments)",
        "Internal — Translate strategic narrative into creator-native formats; match narrative to creator tier and language; brief; review drafts; approve; schedule synchronised rollouts; monitor performance and trolling response"
      ]},
      {title:"Working Logic",items:[
        "Influence as distributed network — not single broadcast",
        "200 small voices say the same idea in 200 culturally-native ways within the same window — making it look like organic mood, not a campaign",
        "Key dependency: tight daily feedback loop with narrative/research — if narrative changes 11 AM, briefs update by 1 PM, reels live by 6 PM",
        "Embedded cultural knowledge — regional execs live inside their language's meme economy, devotional calendar, sports moods, exam cycles, festivals",
        "Speed at peak: brief to live content in under 6 hours"
      ]},
      {title:"NexGrow ↔ Varahe Coordination Framework",items:[
        "Campaign Initiation — NexGrow prepares plan (narrative points, creator count, timeline, budget); submits to VA",
        "Approval & Go-Ahead — VA reviews; communicates formal go-ahead + sanctioned budget",
        "Creator Deployment & Alignment — NexGrow deploys per budget & narrative framework; brings in more creators as needs evolve",
        "Daily Reporting — NexGrow shares daily overview with VA (budget deployed to date, creators engaged)"
      ]}
    ],
    skills:{must:["Native fluency in ≥1 regional language; deep cultural literacy","Creator-relationship management (EQ, negotiation, partner-mindset)","Narrative writing (2-line directive → 90s reel script, tweet thread, vernacular caption)","Speed — brief to live content under 6 hours at peak","Crisis instinct — pattern recognition for content about to go wrong; discipline to pull it"]},
    functionScope:[
      ["Onboarding & Execution","Sourcing, vetting, onboarding & retaining a tiered roster across languages, geographies, content categories (political, lifestyle, devotional, sports, comedy, news, youth, women-led, agri, student)"],
      ["Creative Guidance","Translating talking points into infopacks, creator briefs, sample reels, captions & hashtags that creators post natively"],
      ["Daily Operations","Day-to-day pipeline — commissioning, approvals, scheduling, posting windows, cross-amplification, deletion/correction when off-script"],
      ["KPI-based Measurement","Reach, sentiment shift, hashtag dominance, comment-section sentiment, voter/brand-intent movement"],
      ["Relationship Building","Contracts, payments, NDAs, exclusivity windows, incentivising organic pro-party content"]
    ],
    speedTimeline:[
      {t:"11 AM",e:"Narrative changes"},
      {t:"1 PM",e:"Creator briefs updated"},
      {t:"3 PM",e:"Draft approvals complete"},
      {t:"6 PM",e:"Content live across creator network"}
    ]
  },
  /* ------------------------- Legal Team --------------------------- */
  {
    id:"legal",name:"Legal Team",icon:"⚖️",
    category:"ops",function:"Compliance & Legal",
    tagline:"Ensures all campaign activity remains compliant with ECI, MCC and election law.",
    purpose:"Ensures all campaign activities, political ads, candidate operations and ground-level election activities remain fully compliant with ECI guidelines, election laws and Model Code of Conduct. Without it: ad rejections, MCC violations, delayed permissions, legal notices, compliance gaps, operational disruptions. Also safeguards from reputational damage by handling complaints, monitoring compliance, and addressing legal issues in real time.",
    structure:[
      {role:"Manager (1)",detail:"State-level legal operations strategy, escalations, coordination with party legal cell and senior leadership."},
      {role:"Consultants (3–4)",detail:"MCMC approvals, permissions, compliance, nomination support, complaint drafting, tracker management, coordination with teams/legal cell/authorities."}
    ],
    sizing:{min:"3 (preferably 1 local from state)",ideal:"4 members for active campaign operations",scale:"Large/high-intensity states — constituency volume, permissions, nominations, MCC compliance, polling-day escalations increase."},
    skills:{
      must:["Strong understanding of ECI guidelines, MCC, RPA 1951, nomination procedures","Drafting — complaints, representations, SOPs, compliance formats","Coordination — candidates, authorities, internal teams","Fast issue-spotting & escalation judgement","Election commission compliance & procedure knowledge","Ability to work under tight election timelines"],
      nice:["Political campaign experience","Social media law & digital compliance","Public policy knowledge","Litigation exposure","Data management & reporting"]
    },
    coreFunctions:[
      {title:"Key Responsibilities",items:[
        "MCMC approvals & legal vetting — political ads, creatives, scripts, social content across GDNs, TVCs, Radio Jingles, Print Ads, SMS, OBDs, digital campaigns",
        "Appeals, representations, complaints, submissions before ECI, CEO Office, MCMC, District Authorities",
        "Permissions & compliance — LED/Video Vans, rallies, public meetings, star campaigner vehicles, silent-period comms",
        "Criminal antecedent compliance & statutory filings — C-1, C-2, C-7, C-8 forms",
        "Coordinates with Comms, Campaigns, CMS, PI, Media, State Legal Cell, election authorities",
        "Monitors social media, opposition violations, MCC breaches, electoral offences, election-day incidents; escalates complaints",
        "GOTV & polling-day legal support — sensitive booth monitoring, incident resolution, liaison with police, observers, officials",
        "Conducts legal training; prepares SOPs, primers, compliance decks, checklists, operational advisories"
      ]},
      {title:"Role in Campaign Flow",items:[
        "Input — scripts/creatives from Comms/Campaigns, State Legal Cell docs, candidate affidavit, vehicle details, complaints/field issues from CMS, ECI notifications/circulars",
        "Process — vetting, compliance review, MCC scrutiny, documentation, drafting representations, filing applications, escalation handling, coordination",
        "Output — approved creatives & certificates, cleared nominations & affidavits, vehicle & campaign permissions, advisories & SOPs, complaint filings, poll-day resolution support"
      ]},
      {title:"Working Logic",items:[
        "Integrates legal compliance into every operational and comms layer",
        "Proactively reviews material, secures permissions, resolves disputes, coordinates with ECI to minimise legal risks",
        "Impact: uninterrupted campaign ops, reduced ad rejections, fewer MCC violations, candidate protection, rapid escalation handling"
      ]},
      {title:"Daily Workflow",items:[
        "Morning — review overnight approvals/rejections, follow-ups with MCMC/internal/CEO, update trackers, urgent field escalations, coordination calls",
        "Day — submission of creatives/permissions, drafting complaints & representations, coordination with party legal cell + ECI, CMS query resolution, candidate doc scrutiny, dissemination of approval certificates, tracker consolidation"
      ]},
      {title:"Tools & Platforms",items:["Google Sheets / Docs","PowerPoint","Complaint & Approval Trackers","Eci.net","cVIGIL","E-SUVIDHA (CEO/ECI Submission Portal)","Social Media Monitoring Platforms"]},
      {title:"Common Failure Points",items:[
        "Delayed document submission by candidates; incomplete details",
        "MCMC rejection due to non-compliant content",
        "Incorrect vehicle documentation",
        "Delayed escalation to authorities",
        "Improper approval tracking",
        "Communication gaps between teams"
      ]}
    ],
    example:"A video creative comes from Comms for immediate release. Legal vets script/visuals for MCC compliance, AI disclosure, religious references, rejection risks; after corrections files application with MCMC, follows up for approval, gets certificate, shares cleared approval back to Comms for dissemination.",
    phases:[
      {ph:1,focus:"Establish structure, processes, coordination",act:["SOPs & legal frameworks","Coordination with State Legal Cell","ECI process understanding","Trackers & doc systems","Compliance checklists","Preliminary training"],intensity:"low",teams:["Legal","State Legal Cell","Comms","Campaigns","PI","Research","Party Coordination"]},
      {ph:2,focus:"Strengthen ops; streamline approvals",act:["MCMC coordination","Vet creatives & speeches","Initiate permissions","Monitor opposition","Draft representations","Train CMS POCs"],intensity:"medium",teams:["Legal","Comms","Campaigns","CMS","State Legal Cell"]},
      {ph:3,focus:"High-volume legal ops; uninterrupted execution",act:["MCMC approvals","Vehicle & campaign permissions","Nomination/affidavit verification","Complaints/representations","Escalations","Real-time legal support"],intensity:"very-high",teams:["Legal","Comms","Campaigns","Media","CMS","State Legal Cell"]},
      {ph:4,focus:"Polling-day support; smooth lawful voting",act:["GOTV legal ops","Booth-level escalations","Police & Observer coordination","Electoral offence reporting","Silence-period compliance"],intensity:"high",teams:["Legal","Comms","Campaigns","Media","CMS","State Legal Cell"]},
      {ph:5,focus:"Closure & documentation",act:["Closure reports","Compile approval/complaint data","Archive trackers","Internal review"],intensity:"low",teams:["Legal Team"]}
    ],
    downloads:[
      {label:"cVIGIL — ECI Citizen Vigil Portal",note:"Real-time MCC complaints",url:"https://eci.gov.in"},
      {label:"E-SUVIDHA — CEO / ECI Submission Portal",note:"Permissions, approvals, candidate filings",url:"https://eci.gov.in"},
      {label:"ECI Main Portal",note:"Election Commission of India",url:"https://eci.gov.in"}
    ],
    statutoryForms:[
      {form:"C-1",desc:"Criminal antecedents declaration filed with the Election Commission"},
      {form:"C-2",desc:"Candidate's declaration of criminal cases — published in newspapers"},
      {form:"C-7",desc:"Political party's compliance declaration on candidate antecedents"},
      {form:"C-8",desc:"ECI report on compliance with C-1 / C-2 / C-7 requirements"}
    ],
    ipo:[
      {stage:"Input",items:["Scripts and creatives from Communications/Campaigns","Documents from State Legal Cell","Candidate affidavits","Vehicle details from Campaigns","Complaints/field issues from CMS/ground teams","ECI notifications & circulars"]},
      {stage:"Process",items:["Legal vetting","Compliance review","MCC scrutiny","Documentation","Drafting representations","Filing applications","Escalation handling","Coordination with ECI officials"]},
      {stage:"Output",items:["Approved creatives & certificates","Cleared nominations & affidavits","Vehicle & campaign permissions","Legal advisories & SOPs","Complaint filings & escalations","Poll-day issue resolution support"]}
    ]
  },
  /* ------------------------- Media Team --------------------------- */
  {
    id:"media",name:"Media Team",icon:"📰",
    category:"intel",function:"Media Intelligence",
    tagline:"Real-time tracking and shaping of narratives across print, electronic and digital media.",
    purpose:"Addresses the critical need for real-time tracking and analysis of narratives across print, electronic, and digital platforms. Supports the client with research inputs, communication drafting, and consistent dissemination of press notes and pro-client narratives. Without it, media tracking is compromised — gaps in narrative awareness, delayed responses, weakened coordination.",
    structure:[
      {role:"Team Lead",detail:"Oversees Media Monitoring and Party Coordination verticals; reports to Communications Lead."},
      {role:"Managers (2)",detail:"One per vertical — day-to-day execution and team coordination."},
      {role:"Media Associates",detail:"Monitoring, reporting, coordination per assigned state. ~4–5 (smaller states), 7–8 (larger states)."}
    ],
    sizing:{min:"2 Media Associates — essential monitoring during non-campaign periods",ideal:"6 Media Associates + 2 Vertical Managers — split into Media Monitoring and Party Coordination",scale:"By campaign intensity, media volume, coordination needs"},
    skills:{
      must:["Strong political acumen and understanding of the media/political landscape","Local-language proficiency for tracking & regional coordination","Strong writing & communication — concise media-friendly content"],
      nice:["Background in media/journalism/political comms","Media liaisoning & stakeholder coordination"]
    },
    coreFunctions:[
      {title:"Key Responsibilities",items:[
        "Media monitoring, narrative analysis, client/opposition coverage assessment across print, electronic, digital",
        "Deliver media coverage reports, speech pointers, article inputs, press notes",
        "Coordinate with the party's media team; oversee press-release activities",
        "Coordinate with Client's media unit",
        "Deliver media monitoring & coverage reports, pointers, press notes"
      ]},
      {title:"Role in Campaign Flow",items:[
        "Input — media feeds, client mandates, leadership directives, political developments, research inputs (Research, Campaign, Analytics, Digital, Party Coordination)",
        "Core — identify & prioritise actionable narratives, conduct media research, develop explainers, draft media-friendly comms, prepare strategic content",
        "Output — coverage reports, narrative assessments, speech pointers, press notes, articles, comms briefs (supports Comms, Digital, Research, Campaign)"
      ]},
      {title:"Daily Workflow",items:[
        "Morning (9–11 AM) — top national/regional headlines, newspaper coverage analysis, actionable narratives, narrative penetration, narrative calls, morning updates, client mandate review",
        "Afternoon (12–5 PM) — execute mandates: speech pointers, press inputs, media briefs; updates to client/internal; round-up reports, narrative assessments, research deliverables",
        "Evening (6–10 PM) — prime-time debates, special programmes, breaking developments; emerging/actionable narratives for escalation"
      ]},
      {title:"KPIs",items:[
        "Daily — print/electronic coverage reports, bi-hourly updates, narratives-of-the-day, editorial reports, press/speech pointers, article inputs, press notes",
        "Weekly — consolidated compilations, key media developments, major narratives, political updates",
        "Quality — accuracy, relevance, strategic value; clarity of pointers/inputs; consistency of monitoring",
        "Speed — near real-time dissemination; quick turnaround for client mandates"
      ]},
      {title:"Tools & Platforms",items:["Direct monitoring of newspapers, channels, digital media, social media","Varahe Newscore Platform","Clipchamp","Google Studio","NordGPT","Perplexity","ChatGPT","National/regional digital media","Local channels, newspapers, SM platforms"]},
      {title:"Common Failure Points",items:[
        "Missed/delayed escalation of critical narratives due to high-volume monitoring",
        "Gaps in political context — associates often freshers/newly onboarded",
        "Surface-level info from publicly available reporting; deeper insights need cross-team research"
      ]}
    ],
    escalation:[
      ["Important news / sensitive political issues","Internal + client channels (WhatsApp/reporting systems)","Real-time / Immediate"],
      ["Actionable narratives needing strategic response","Comms / Research / Media coordination","Within minutes"],
      ["Speech pointers / press inputs / explainers","Client leadership, spokespersons, media teams","Within 1–2 hours"],
      ["Coverage reports & documentation","Client & internal leadership","As per reporting cycle"]
    ],
    phases:[
      {ph:1,focus:"Set up media structure & state landscape",act:["Map regional media","Liaison with local units","Set up monitoring","Onboard/train"],intensity:"low",teams:["Media Monitoring","Party Coordination","Local Units","Comms","Research"]},
      {ph:2,focus:"Strengthen management & narrative positioning",act:["Monitoring reports","Push favourable narratives","Press pointers","Ghost articles","Strategic outreach"],intensity:"medium",teams:["Media Monitoring","Party Coordination","Comms","Research","Client Media Unit"]},
      {ph:3,focus:"Real-time coordination with client",act:["Dedicated media room","Continuous national coordination","Align state with national","Press conferences/articles"],intensity:"very-high",teams:["Media Monitoring","Party Coordination","National Comms","Client Media Unit","Research","Campaign"]},
      {ph:5,focus:"Continuity through transition",act:["Post-election narrative tracking","National coordination","Govt formation coverage","Important escalations"],intensity:"low",teams:["Media Monitoring","National Comms","Client Media Unit","Party Coordination"]}
    ]
  },
  /* ------------------------ Narrative / QRT ----------------------- */
  {
    id:"narrative",name:"Narrative Team (QRT)",icon:"💡",
    category:"intel",function:"Narrative & Research",
    tagline:"Identifies issues and converts them into narratives, infopacks, speech pointers and ideation.",
    purpose:"The Quick Response Team identifies state/national issues and crafts narrative aligned with the client's messaging to the relevant target groups. Without QRT, teams cannot pick narratives crucial to the client.",
    structure:[
      {role:"PD",detail:"Overall direction."},
      {role:"Manager",detail:"Direction on identifying patterns and narratives."},
      {role:"Team Lead",detail:"Takes the narrative and directs executives to convert into the desired output."},
      {role:"Executives",detail:"Convert TL/Manager directions into deliverables."}
    ],
    coreFunctions:[
      {title:"Responsibilities & Deliverables",items:[
        "Narratives & Media Pointers",
        "Communications and Campaigns ideas",
        "Articles — ghostwriting + bylines",
        "Speech Pointers",
        "Long-term research from leadership/client",
        "Influencers messaging",
        "Bharat Darpan — macro political issue tracking & leadership alerts with narratives",
        "Project Nandaka — micro political issue tracking & leadership alerts with narratives"
      ]},
      {title:"Coordinates With",items:["Leadership team","Media team","Communications team","Campaigns team","NexGrow team","Partnership team"]},
      {title:"Delivers",items:["Infopacks","Media Pointers","PPTs","Book Reviews","Narrativised Research Documents","Campaign ideas","Communication ideas","Themes for major client milestones","Counters for ecosystem's fake claims","Narrative and issue tracking reports"]},
      {title:"Working Logic",items:[
        "Identifies issues, patterns and narrativisation",
        "Outputs flow to communications, campaigns, influencers, leadership",
        "Central piece of campaign messaging — no key dependency"
      ]},
      {title:"Tools & Platforms",items:["Gemini","Claude","ChatGPT","Instagram, X and all media platforms"]},
      {title:"Coordination & Reporting",items:["Works closely with Comms, Media, NexGrow, Partnership Program","Depends on Media and PI","Reports to Shreyas Bharadwaj and Karthik Kamanna"]}
    ],
    skills:{
      must:["Political nuance understanding","Narrativisation","Creativity to convert issue/narrative into desired output","Issue tracking"],
      nice:["Understanding of multiple states' political nuances"]
    }
  },
  /* ----------------------- Non-Meta Digital Ads ------------------- */
  {
    id:"non-meta",name:"Non-Meta Digital Ads",icon:"📡",
    category:"ops",function:"Paid Media & Operations",
    tagline:"Plans and runs ads across GDN, YouTube, PG Deals, DV360, OTT, Apps and Telecom.",
    purpose:"Non-Meta Digital Ads comprise GDN, YouTube, PG Deals (direct deals with websites), DV360, OTT, Apps and Telecom Ads. They let us target voters across non-Meta surfaces. Telecom Ads are planned separately as they're used in the last phase and serve a distinct purpose.",
    structure:[
      {role:"2 Managers",detail:"One coordinates with content creation team; the other with GTS, legal, NexGrow and Vendors."},
      {role:"Content Writers",detail:"4 ad-hoc + 1 dedicated throughout the campaign for legal team docs and primary QC."},
      {role:"5 Graphic Designers + 3 Video Editors",detail:"For designing and resizing deliverables."}
    ],
    coreFunctions:[
      {title:"Documentation — Two Master Sheets",items:[
        "Telecom Ads Master Sheet — AC number, AC name, narrative, Campaign Unique ID, TG geographical description, cohort to be targeted",
        "Comms internal sheet — content writers, graphic designers, video editors; all content here",
        "Vendor sheet — AC number/name, pin codes, LatLong, content link",
        "Drive folders by Unique ID per narrative/constituency",
        "Other Non-Meta — single tracker with tabs: Budget allocation & daily spend; Content sizes & formats; Section-wise content tabs"
      ]},
      {title:"Vertical Operations",items:[
        "GDNs & YouTube — coordination with NexGrow; share master sheet, location, spend, duration",
        "PG Deals, DV360, OTT, Apps — vendor-managed; daily clear communication with vendors; written feedback in groups; daily implementation enquiries",
        "Telecom Ads — vendor-managed; timeframe locked 15 days before polling; lock creatives, sets, constituencies with vendor"
      ]},
      {title:"Telecom Ads — Content Pipeline",items:[
        "Strategy (PI + Campaigns) — define narratives and actionable goals per constituency/booth",
        "Production (Comms) — copy, GfX, motion graphics",
        "QC (Telecom PoC) — manager QC + final QC",
        "Documentation (ARC) — upload to Drive with Unique IDs",
        "Finalisation (Analytics) — pin codes & LatLongs into vendor copy"
      ]},
      {title:"Non-Meta Digital Ads — Pipeline",items:[
        "Scoping (State Leadership) — target locations + asset counts per budget",
        "Development (Comms + Branding) — content, design, resizing per vertical",
        "Broadcast Sync (GTS) — TVC asset coordination",
        "Compliance (Legal) — daily coordination, mandatory EC approval per creative",
        "Deployment (NexGrow + Vendors) — iterative sets reflecting changing narratives & Manifesto"
      ]},
      {title:"Key Notes",items:[
        "Coordination is crucial — NexGrow, GTS, legal, vendors",
        "ARC PoC involved from the beginning — documentation, drive folders, Unique IDs",
        "Daily dashboards/reports from each team feed the campaign closure report"
      ]}
    ],
    references:[
      {label:"Non-Meta Digital Ads Master Sheet Template",url:"https://docs.google.com/spreadsheets/d/1CXedE18ArJCOzqgF5Hr8i2KhEq63Bl39Jz_LbWwYZ6s/edit?usp=sharing"},
      {label:"Telecom Ads Master Sheet Template",url:"https://docs.google.com/spreadsheets/d/1PrXp1KwdAJNpVFDhg4qF6Mtb5VHGFfSCn_zecYitouY/edit?usp=sharing"},
      {label:"Telecom Ads Comms Internal Template",url:"https://docs.google.com/spreadsheets/d/1wsXCaLfOpN7vJd9YRgEA-SO8Kb5ZIxjyTA68ksow7R0/edit?usp=sharing"},
      {label:"Telecom Ads Vendor Sheet",url:"https://docs.google.com/spreadsheets/d/1hOkgEBoMpkEGmXc9rT2X7stgGHn-Tte5fKIqmqIq1Ec/edit?usp=sharing"}
    ],
    pipelines:[
      {title:"Telecom Ads Pipeline",rows:[
        ["Strategy","Define narratives & actionable goals for specific constituencies and booths","PI + Campaigns Teams"],
        ["Production","Develop copy, static graphics (GfX) and motion graphics","Comms Team"],
        ["Quality Control","Multi-stage review: Manager QC, Final QC","Telecom PoC"],
        ["Documentation","Upload to Drive with Unique IDs per narrative/constituency","ARC Team"],
        ["Finalisation","Acquire Pincodes and LatLongs; populate the Vendor Copy Sheet","Analytics Team"]
      ]},
      {title:"Non-Meta Digital Ads Pipeline",rows:[
        ["Scoping","Define target locations and finalise asset counts (creatives/videos) based on budget","State Leadership"],
        ["Development","Write content, finalise designs and resize assets for all platform verticals","Comms & Branding Teams"],
        ["Broadcast Sync","Integrate and coordinate TVC (Television Commercial) assets","GTS Team"],
        ["Compliance","Daily Coordination — secure mandatory EC approval for all creatives","Legal Team"],
        ["Deployment","Release assets in iterative sets to reflect changing narratives and Manifesto","NexGrow + Vendors"]
      ]}
    ],
    verticalOwnership:[
      ["GDN","NexGrow"],["YouTube","NexGrow"],
      ["PG Deals","Vendor-managed"],["DV360","Vendor-managed"],
      ["OTT","Vendor-managed"],["Apps","Vendor-managed"],
      ["Telecom Ads","Vendor-managed (last phase, 15-day lock-in)"]
    ],
    downloads:[
      {label:"Non-Meta Digital Ads Master Sheet Template",note:"AC number, name, narrative, Unique ID, TG geography, cohort",url:"https://docs.google.com/spreadsheets/d/1CXedE18ArJCOzqgF5Hr8i2KhEq63Bl39Jz_LbWwYZ6s/edit?usp=sharing"},
      {label:"Telecom Ads Master Sheet Template",note:"Master tracker for telecom campaigns",url:"https://docs.google.com/spreadsheets/d/1PrXp1KwdAJNpVFDhg4qF6Mtb5VHGFfSCn_zecYitouY/edit?usp=sharing"},
      {label:"Telecom Ads Comms Internal Template",note:"Comms collaboration sheet — writers, designers, editors",url:"https://docs.google.com/spreadsheets/d/1wsXCaLfOpN7vJd9YRgEA-SO8Kb5ZIxjyTA68ksow7R0/edit?usp=sharing"},
      {label:"Telecom Ads Vendor Sheet",note:"AC, pin codes, LatLong, content link",url:"https://docs.google.com/spreadsheets/d/1hOkgEBoMpkEGmXc9rT2X7stgGHn-Tte5fKIqmqIq1Ec/edit?usp=sharing"}
    ],
    phases:[
      {ph:1,focus:"Vendor onboarding, master-sheet & tracker setup",act:["Master sheets","Drive folders & Unique IDs","Vendor onboarding","ARC PoC alignment"],intensity:"low"},
      {ph:2,focus:"Pipeline warm-up across GDN/YT/PG/DV360/OTT/Apps",act:["Initial creative drops","Pilot location targeting","Vendor coordination cadence"],intensity:"medium"},
      {ph:3,focus:"Peak deployment across non-Meta surfaces",act:["High-volume GDN/YT","PG Deals & DV360","Daily vendor enquiries","Legal EC coordination"],intensity:"very-high"},
      {ph:4,focus:"Telecom Ads in the last phase",act:["AC-specific telecom","Narrative/cohort telecom","Final 15-day lock-in","Pincodes & LatLongs"],intensity:"high"},
      {ph:5,focus:"Reporting & closure",act:["Vendor dashboards","Closure report inputs","Drive archival"],intensity:"low"}
    ]
  },
  /* ----------------------- Party Coordination --------------------- */
  {
    id:"party-coord",name:"Party Coordination & Narrative Management",icon:"🤝",
    category:"ops",function:"Stakeholder Management",
    tagline:"The disciplined art of controlled coordination — solution partner, not vendor.",
    purpose:"Establishes authority without friction, builds rapport with party POCs and ensures strategy stays protected from chaos. The objective is not just coordination — it is controlled coordination. A successful political communication strategist ensures leadership feels heard, the party feels supported, operations remain structured, and strategy stays protected from chaos.",
    coreFunctions:[
      {title:"Establishing Authority Without Friction",items:[
        "Enter as a solution partner, not as an agency/vendor",
        "Build credibility early through quick wins, responsiveness, and preparedness",
        "Communicate with clarity, confidence and data-backed reasoning",
        "Understand internal party hierarchy before operations begin",
        "Identify actual decision-makers vs influencers vs information carriers",
        "Respect political sensitivities, egos, and chain of command",
        "Never publicly contradict party leadership or senior functionaries",
        "Ensure party POCs are informed before major narrative pushes"
      ]},
      {title:"Building Rapport — Relationship Management",items:[
        "Maintain regular personal communication beyond task-based interactions",
        "Understand each POC's working style, political ambitions, pressure points",
        "Give credit to party teams publicly wherever necessary",
        "Ensure party POCs feel included in strategy, not bypassed",
        "Be accessible during high-pressure news cycles and crisis",
        "Maintain composure even during emotional or aggressive conversations"
      ]},
      {title:"Building Rapport — Trust Building",items:[
        "Deliver on timelines consistently",
        "Never overpromise to impress leadership",
        "Share updates proactively before they are asked",
        "Protect confidential discussions and internal disagreements",
        "Build confidence through preparedness in meetings and war-room discussions"
      ]},
      {title:"Communication Discipline",items:[
        "Define clear protocols from Day 1 — WhatsApp for urgent, Daily narrative calls for alignment, one clear approval chain for creatives/narratives",
        "Avoid parallel instructions from multiple leaders without clarification",
        "Always summarise verbal instructions in writing after meetings/calls",
        "Use concise updates: what was done, current status, pending approvals, risks/issues"
      ]},
      {title:"Managing Expectations & Unrealistic Demands",items:[
        "Political environments are emotionally driven — avoid reactive responses",
        "Separate urgency from importance — not every request needs instant execution",
        "Saying No diplomatically — never say 'this cannot be done'",
        "Instead — explain limitations, provide alternatives, suggest realistic timelines, use data/platform limits to justify pushback, convert emotional demands into measurable objectives"
      ]},
      {title:"Managing Leadership Requests",items:[
        "Prioritise by electoral impact, narrative relevance, resource availability, platform performance",
        "Escalate conflicting instructions carefully and privately",
        "Avoid creating dependence on unsustainable execution models"
      ]},
      {title:"Taking Operational Control",items:[
        "Establish systems early — centralised approval and escalation structures",
        "Define approvers: creatives, captions, ad spends, crisis responses",
        "Structured reporting formats and dashboards",
        "Control through process — daily trackers, content calendars, EOD summaries",
        "Convert verbal politics into documented workflows"
      ]},
      {title:"Conflict Management",items:[
        "Never take political disagreements personally",
        "Resolve disputes privately, never in group forums",
        "During internal conflicts — stay neutral, factual, process-oriented",
        "Maintain relationships across factions; avoid becoming associated with one camp"
      ]},
      {title:"Election-Time Coordination Best Practices",items:[
        "Daily morning narrative sync calls",
        "Real-time escalation group for urgent approvals",
        "Regular feedback to party leadership",
        "District + Vidhan Sabha-level content alignment with central messaging",
        "Backup plans for account restrictions, media attacks, legal notices, opposition misinformation"
      ]},
      {title:"Professional Conduct",items:[
        "Never become emotionally invested in internal politics",
        "Maintain discretion at all times",
        "Avoid informal political gossip within campaign structures",
        "Maintain written records of major approvals and strategic directions",
        "Be calm under pressure — campaign environments reward stability"
      ]}
    ]
  },
  /* ----------------------- Reporter Network ----------------------- */
  {
    id:"reporter",name:"Reporter Network (RN)",icon:"📹",
    category:"intel",function:"Field Intelligence",
    tagline:"Decentralised field intelligence and content execution system — local presence converted to usable assets.",
    purpose:"A decentralised field intelligence and content execution system built to provide rapid on-ground access, structured media inputs, and reliable operational support across geographically distributed environments. Closes the gap between central planning and field reality.",
    stats:[
      {label:"Active States",value:"14"},{label:"Contact-Access States",value:"7"},
      {label:"Baseline Reporters",value:"150–200"},{label:"Election Surge",value:"600+"},
      {label:"Archival Retrieval",value:"1–2 hrs"},{label:"Fresh Shoot",value:"24–48 hrs"},
      {label:"Monthly Output",value:"300–400 assets"},
      {label:"Per-task rate",value:"₹100–₹500"},{label:"Payment cycle",value:"15-day national"}
    ],
    sizing:{min:"1 Central Manager + 2 Team Members + 150 reporters",ideal:"1 Central + 3 Team Members + 200+ reporters",scale:"Surge to 600+ reporters during elections via AC-level deployment"},
    scaleNote:"AC-level expansion in election states",
    structure:[
      {role:"Central Manager",detail:"All states. National oversight, task ownership, delivery quality, escalation, payout governance, leadership reporting. Final call on delivery acceptance, escalations, payout approval, surge activation."},
      {role:"RN Team Members ×3",detail:"Assigned state clusters. Task intake tracking, field coordination, reporter management, deadlines, quality follow-through. Reporter allocation, first-line escalation, reshoot recommendation."},
      {role:"State / District / AC Reporters",detail:"Ground collection, raw visuals, vox pops, local access, time-bound submission. Field execution within approved brief."},
      {role:"Internal Requestors / Page Managers",detail:"Raise requests, provide brief clarity, receive approved data, feed back on utilisation."}
    ],
    coreFunctions:[
      {title:"Operating Models",items:[
        "Reactive Execution — Page manager raises task (location, narrative, deadline, deliverable). RN assigns reporters, QCs, delivers approved assets.",
        "Proactive Ideation — RN identifies timely political/social topics, proposes them internally, develops outline, executes, returns final assets."
      ]},
      {title:"Strategic Importance",items:[
        "Speed — archival retrieval 1–2 hrs; fresh shoots 24–48 hrs",
        "Coverage — always-available footprint across 14 active states + 7 contact-access",
        "Scalability — 150–200 baseline → 600+ during elections via AC-level deployment",
        "Cost efficiency — outputs at a fraction of conventional production costs",
        "Continuity — institutional memory through recurring relationships, payment docs, archival discipline"
      ]},
      {title:"Recruitment & Onboarding",items:[
        "Sources: IPRD reports, personal/professional contacts, referrals from trusted sources",
        "Selection — current employment & conflict review, field experience, equipment readiness (camera/phone, mic, data), location utility, RN standards acceptance",
        "Onboarding — source ID, verification, orientation (assignment types, submission, turnaround, payment), pool assignment, first-task with enhanced supervision",
        "Content — assignment types (vox pops, visuals, issue inputs, archival, special shoots), submission specs (file naming, metadata, completeness, channels), quality (clarity, audio, framing, duration, brief adherence), payment (after QC, state-wise sheets), conduct (no coercion/impersonation/fabrication)"
      ]},
      {title:"Task Intake — Mandatory Inputs",items:["Topic / issue statement","Location / geography","Deadline & urgency","Content requirement (vox pop / visual package / issue scan / archival / interview)","Questionnaire / outline / reference prompts","Non-negotiable output conditions (duration, shot list)"]},
      {title:"Assignment Workflow",items:["Task received from page manager / stakeholder","RN reviews brief — clarity, feasibility, timing","Tagged: reactive execution or proactive ideation","Reporter/cluster identified by geography, reliability, urgency","Field briefs communicated — deadlines, requirements, submission","RN tracks execution to submission, QC and final delivery"]},
      {title:"Field Execution & Deliverables",items:[
        "Primary deliverables — vox pops/public bytes, raw field visuals, issue inputs, archival retrieval, special interview/event packages",
        "Execution standards — video ≥1080p where possible, minimised noise, bytes >50s, visual packages >60s usable footage, brief match (topic/location/shots), metadata (location/date/reporter/task ref)"
      ]},
      {title:"3-Layer QC",items:[
        "Technical — resolution, audio, stability, file integrity, duration, visibility",
        "Brief — topic relevance, location match, requested responses/shots, completeness",
        "Administrative — naming, metadata, submission mapping, payment-sheet eligibility"
      ]},
      {title:"Reshoot Triggers",items:["Low audio intelligibility / disruptive noise","Wrong/unverified location","Missing visual support","Insufficient duration","Off-brief responses / incomplete coverage","File corruption / upload failure"]},
      {title:"Payment Operations",items:[
        "Task-specific payouts — fixed rates ₹100–₹500 (varies by state and complexity)",
        "Workflow — submission → RN validates → daily state-wise sheet → 15-day national consolidation → approval & funding → distribution → proof archive",
        "Discipline — track response time/acceptance/quality reliability; separate high-trust from inconsistent vendors; close disputes with evidence",
        "Retain reporters via predictable payment cycles and unambiguous communication"
      ]},
      {title:"Crisis Response & Escalation",items:[
        "Reporter unresponsive → switch to alternate reporter/geography → RN Member escalates",
        "Low-quality submission → reshoot or partial salvage → RN + Central Manager if repeated",
        "Field access disruption → archived material / alternate district / revised scope → Central Manager",
        "Payment dispute → check sheet entry/QC note/proof → Central Manager / finance",
        "Compliance concern → hold delivery, review facts → Central Manager + leadership"
      ]},
      {title:"Campaign Support History",items:["Odisha legislative assembly election","Jharkhand legislative assembly election","Jammu by-elections (Budgam & Nagrota)","Punjab by-elections (Tarn Taran)","Odisha by-elections (Nuapada)","ULB campaigns (CG, HP, HR)","BMC Maharashtra","Goa by-elections (Ponda)","National issue-based campaigns"]}
    ],
    priorities:[
      ["L1","Immediate / highest priority","3–4 hours","Time-sensitive issue already in circulation or urgent field confirmation"],
      ["L2","Planned / standard priority","24–48 hours","Pre-planned stories, scheduled shoots, requested packages"],
      ["L3","Extended / low urgency","1–4 days","Longer-form assignments, person/location-specific, documentary-style"]
    ],
    beforeAfter:[
      ["Field access","Ad hoc sourcing; uncertain local availability","Structured multi-state network with repeat-use field access"],
      ["Turnaround","Vendor mobilisation; fragmented coordination","1–2 hr archival; 24–48 hr fresh shoot"],
      ["Cost profile","Production teams may cost lakhs per project","Comparable outputs at a fraction of cost"],
      ["Scale during campaigns","Difficult, uneven","AC-level surge to 600+"],
      ["Documentation","Scattered across vendors/threads","State sheets, national consolidation, payment proof records"]
    ],
    phases:[
      {ph:1,focus:"Source, verify & onboard reporters; pre-position kit",act:["IPRD scans","Reference checks","Onboarding orientation","First-task supervision"],intensity:"low"},
      {ph:2,focus:"Warm-up tasking, build trust with archival/proactive ideation",act:["Issue scans","Repeat tasking","Archival retrieval cycles"],intensity:"medium"},
      {ph:3,focus:"AC-level surge to 600+ reporters",act:["L1 turnaround tasks","Vox-pop bursts","Field package coverage","QC pipeline scaling"],intensity:"very-high"},
      {ph:4,focus:"Polling-day coverage & rapid retrievals",act:["Booth-level bytes","Polling-day visuals","Last-mile field packages"],intensity:"high"},
      {ph:5,focus:"Closure: payments, retention, archive",act:["Final state-wise payment sheet","National consolidation","Retain/Selective/Inactive classification","Asset & learnings archive"],intensity:"low"}
    ]
  },
  /* ----------------------------- SMCC ---------------------------- */
  {
    id:"smcc",name:"SMCC — Social Media Command Centre",icon:"🎯",
    category:"comms",function:"Hyperlocal Operations",
    tagline:"A precision political communication engine for constituency-level digital dominance.",
    purpose:"SMCC is a centralised, strategically managed digital operations unit driving hyperlocal social media campaigns for BJP across targeted assembly constituencies. It is the backbone of BJP's grassroots digital presence — going beyond national/state messaging to deliver constituency-specific content. Not a generic digital agency — a precision political communication engine.",
    objectives:[
      "Establish BJP's digital footprint in every contested assembly segment",
      "Run hyperlocal narratives at village/ward/booth level",
      "Attack opposition messaging through counter-narrative content",
      "Amplify BJP's governance achievements, candidate profiles, ideology",
      "Drive voter engagement and sentiment shift through targeted advertising"
    ],
    contentFormats:[
      {n:"Campaign Songs",d:"Earworm anthems"},
      {n:"Campaign Videos",d:"Hero films"},
      {n:"AI-generated content",d:"Scaled visuals + voice"},
      {n:"Vote for Me",d:"Direct candidate appeals"},
      {n:"KYC — Know Your Candidate",d:"Candidate intro / record"},
      {n:"KYOC — Know Your Opposition Candidate",d:"Opposition profile / record"},
      {n:"Hyperlocal Documentaries",d:"Issue + place storytelling"},
      {n:"Cover Stories",d:"Spotlight ground voices"},
      {n:"Success Stories",d:"Welfare-scheme beneficiary stories"},
      {n:"Chargesheets",d:"Opposition report-cards with evidence"},
      {n:"Vox Pops",d:"Man-on-street sentiment"}
    ],
    activationChecklist:[
      ["Receive state activation brief from National SMCC Head","State SMCC Head"],
      ["Confirm total number of ACs BJP is contesting","State SMCC Head"],
      ["Complete political & socioeconomic research for all ACs","State SMCC Head + Team"],
      ["Define zones and appoint Zone Coordinators","State SMCC Head"],
      ["Complete all hiring (content team per zone)","Zone Coordinators"],
      ["Set up Meta Business Manager and Ad Account","Ads Manager"],
      ["Create all Facebook and Instagram pages","Zone Coordinators"],
      ["Build brand kit and content templates","Graphic Design Lead"],
      ["Set up content calendar on Google Sheets","Content Strategist"],
      ["Conduct team briefing and onboarding","State SMCC Head"],
      ["Complete trial run and quality check","State SMCC Head"],
      ["Go live — Day 1 of operations","All"]
    ],
    weeklyCalendar:[
      {day:"Mon",mix:"2 positive + 1 attack (FB) · 1 reel + 1 story (IG)",focus:"Week opener — achievement focus"},
      {day:"Tue",mix:"1 meme + 1 news + 1 positive (FB) · 1 story + 1 static (IG)",focus:"Attack day — opposition pressure"},
      {day:"Wed",mix:"2 attack + 1 candidate (FB) · 1 reel + 2 stories (IG)",focus:"Mid-week push — negative on opposition"},
      {day:"Thu",mix:"1 local issue + 1 BJP scheme + 1 meme (FB) · 1 carousel (IG)",focus:"Hyperlocal narrative day"},
      {day:"Fri",mix:"2 positive + 1 news (FB) · 1 reel + 1 story + 1 static (IG)",focus:"Weekend build-up — positive energy"},
      {day:"Sat",mix:"Event coverage / Rally / Candidate activity (FB + IG)",focus:"Ground activity amplification"},
      {day:"Sun",mix:"Inspirational / Community connect / Week summary (FB + IG)",focus:"Sentiment building"}
    ],
    adTierMix:[
      {label:"Regular Meta Ads",pct:65,color:"#06b6d4",note:"Image/video/carousel via Ads Manager"},
      {label:"Boosted Posts",pct:22,color:"#0ea5e9",note:"Amplify high-performing organic posts"},
      {label:"Paste / Awareness",pct:13,color:"#14b8a6",note:"Reach maximisation at low CPM"}
    ],
    adRules:[
      "Pause underperforming ads (high CPM, low engagement) within 24–48 hours of launch",
      "Scale up well-performing ads by increasing daily budget 20–30%",
      "Never change a winning ad — if it works, let it run; duplicate to scale",
      "Daily ad account health check",
      "Weekly ad performance report submitted by Ads Manager to State Head"
    ],
    securityPolicy:[
      "Never use personal Facebook accounts as primary admin",
      "Pages must have at least 2 admins: Zone Coordinator + State SMCC Head",
      "Strong, unique passwords stored in secure shared password manager",
      "Two-factor authentication on all accounts immediately upon creation",
      "Remove access for any team member who leaves the campaign within 24 hours",
      "Monthly access audit — verify all admins are current active team members",
      "All hires must sign NDA and Confidentiality Agreement before access"
    ],
    goaExample:{
      stats:[
        {k:"Total ACs Contested",v:"40 assembly constituencies"},
        {k:"Facebook Pages Created",v:"40"},
        {k:"Instagram Accounts",v:"40"},
        {k:"Primary Language",v:"Konkani + English (bilingual)"},
        {k:"Team Size (Content)",v:"14 Writers · 14 Designers · 14 Video Editors"},
        {k:"Zones",v:"3 (North Goa · South Goa · Panaji Metro)"},
        {k:"Zone Coordinators",v:"3"},
        {k:"Ads Manager",v:"1 Manager + 1 Assistant"}
      ],
      attack:"Congress/AAP governance failures, development gaps, local MLA inaction",
      positive:"BJP double-engine government, Goa development story, PM Modi's Goa connect",
      focus:"Tourism economy · Mining issues · Youth employment (Goa-specific)"
    },
    igHighlights:["Achievements","Candidate","Local Issues","Events"],
    scope:[
      {k:"Campaign Duration",v:"1 month minimum to 6 months maximum"},
      {k:"Geographic Scope",v:"State-specific; contested ACs"},
      {k:"Platforms",v:"Facebook, Instagram (Meta), Google Ads where applicable"},
      {k:"Pages",v:"One Facebook + One Instagram per AC"},
      {k:"Content Types",v:"Attack, positive, memes, satire, news narratives, national & hyperlocal stories"},
      {k:"Advertising",v:"Meta Ads, Boosted posts, Paste-like awareness ads"},
      {k:"Team Model",v:"1 Video Editor + 1 Graphic Designer + 1 Content Writer + 1 SME per 3 ACs"}
    ],
    structure:[
      {role:"National SMCC Head",detail:"Overall strategy, SOP governance, state head appointments, cross-state learning. Reports to Party High Command / Senior Leadership."},
      {role:"State SMCC Head",detail:"State-level operations, team management, content approval, budget oversight. Reports to National SMCC Head."},
      {role:"Zone Coordinator",detail:"Manages 15–20 assembly pages within a geographic zone. Reports to State SMCC Head."},
      {role:"Content Strategist",detail:"Narrative planning, attack strategy, content calendar, brief creation."},
      {role:"Content Writer",detail:"1 per 3 ACs — scripts, captions, narrative drafting in local language."},
      {role:"Graphic Designer",detail:"1 per 3 ACs — static posts, memes, infographics."},
      {role:"Video Editor",detail:"1 per 3 ACs — reels, short video, attack & positive videos."},
      {role:"Ads Manager",detail:"Meta Ads account management, campaign setup, budget allocation, reporting."},
      {role:"Analytics Lead",detail:"Data tracking, performance reporting, weekly insights."}
    ],
    teamCalc:{formula:"For every 3 ACs → 1 Video Editor + 1 Graphic Designer + 1 Content Writer",example:"70 ACs → 24 Writers, 24 Designers, 24 Editors, 5 Zone Coordinators, 2 Ads Managers, 1 Analytics Lead, 1 State SMCC Head ≈ 81 people"},
    sizing:{min:"~40 (for 30-AC states)",ideal:"~80 (for 70-AC states, see worked example)",scale:"Linear with contested AC count + zone density"},
    scaleNote:"15–20 ACs per Zone Coordinator",
    coreFunctions:[
      {title:"Coordination with BJP Ecosystem",items:[
        "IT Cell (PIT Cell) — party's official IT/technology wing",
        "Media Team — official BJP media and press relations",
        "Communication Team — state/national narrative direction",
        "Third-Party Page Network — independent pages amplifying BJP content"
      ]},
      {title:"Pre-Campaign Research",items:[
        "Political landscape — map ACs, voting patterns, swing/strong/weak seats, primary opposition, candidate profile",
        "Socioeconomic — castes/communities & leanings, issues (unemployment, infra, water, power), economic profile, language/dialect, religious demographics",
        "Zone Mapping — 15–20 ACs per zone by geography, language, political challenge, logistics"
      ]},
      {title:"Infrastructure Setup",items:[
        "Meta Business Manager — Day 1",
        "Facebook Pages 'BJP [AC Name]' — Days 2–5",
        "Instagram @bjp_[acname] linked to FB — Days 2–5",
        "WhatsApp Broadcast Groups per AC — Days 3–5",
        "Google Drive shared folder Day 1; Content Calendar Day 2",
        "Brand Kit / Design Templates Days 3–7",
        "Ads Account linked to BM Day 2"
      ]},
      {title:"Page Naming & Setup",items:[
        "FB Page Name: BJP [AC Name]",
        "IG Handle: @bjp_[acname] (lowercase, no spaces)",
        "Profile Picture: candidate photo or BJP logo with state colours",
        "Cover Photo: state-specific branded template",
        "Bio: 'Official BJP page for [AC Name] Assembly Constituency'",
        "Always 2FA, dedicated campaign email (not personal), 2 admins minimum (Zone Coord + State SMCC Head)"
      ]},
      {title:"Content Strategy & Calendar",items:[
        "Hyperlocal Over Everything — national, state, hyperlocal narrative layered simultaneously",
        "Content categories — Positive, Attack, Memes & Satire, News & Journal, Reels & Short Videos",
        "Weekly calendar — Mon: 2 positive + 1 attack; Tue: meme + news + positive; Wed: 2 attack + 1 candidate; Thu: local issue + scheme + meme; Fri: 2 positive + 1 news; Sat: event/rally coverage; Sun: inspirational/community",
        "Language — primary AC language; Hindi/English only for national-narrative or bilingual",
        "Tone — Positive: aspirational, proud; Attack: sharp, fact-based, indignant (never abusive); Memes: witty, relatable, impactful",
        "Avoid hate speech, communal targeting, defamation, unverified claims"
      ]},
      {title:"Approval Workflow",items:[
        "Creator drafts (copy + visual brief)",
        "Zone Coordinator reviews accuracy, tone, local relevance",
        "State SMCC Head spot-checks 20% daily; sensitive/attack content cleared by State Head",
        "Communication Team consulted for state-narrative/official-position content",
        "Approved content scheduled via Creator Studio / Meta Business Suite"
      ]},
      {title:"Advertising — 3 Tiers",items:[
        "Regular Meta Ads — 60–70% of budget — Image/video/carousel via Ads Manager",
        "Boosted Posts — 20–25% — amplify high-performing or strategically critical organic",
        "Paste/Awareness Ads — 10–15% — reach maximisation at low CPM"
      ]},
      {title:"Audience Targeting",items:[
        "Geographic — AC pin codes / 3–5km radius; exclude neighbouring ACs",
        "Demographic — age 18–65+, gender splits, language",
        "Interest — political content, news, regional language, local communities",
        "Lookalikes from page followers; Custom audiences from local-worker phone lists with consent"
      ]},
      {title:"Page Maintenance",items:[
        "FB — ≥3 posts/day. IG — ≥2 posts + 2 stories/day",
        "Comment moderation every 4 hours (8am–10pm)",
        "Reply messages within 2 hours during campaign hours",
        "Weekly page health check; daily ad account health check"
      ]},
      {title:"Reporting",items:[
        "Daily — Ads Manager ad-spend snapshot to State Head; Zone Coords flag issues",
        "Weekly — Analytics Lead full report (followers, reach, top posts, ad perf, budget); State Head exec summary to National Head; strategy meeting",
        "Monthly — Full monthly performance report from State to National Head"
      ]}
    ],
    objectivesAds:[
      ["Reach","Brand awareness, max voter touchpoints","High reach, low CPM"],
      ["Engagement","Boost socially-proved posts","Comments, likes, shares"],
      ["Video Views","Attack videos, candidate intros, achievement reels","High view count, ThruPlay"],
      ["Page Likes/Follows","Early campaign — base building","Growing follower count"],
      ["Traffic","Drive to website / event / landing pages","Link clicks, website visits"],
      ["Lead Generation","Volunteer/supporter contacts via instant forms","Lead capture for database"]
    ],
    budgetEsc:[
      ["Awareness Phase","8–12 weeks out","Base — 15–20%"],
      ["Engagement Phase","5–7 weeks out","+30% — 25–30%"],
      ["Intensification Phase","3–4 weeks out","Max — 35–40%"],
      ["Final Push","1–2 weeks out","All remaining — full saturation"]
    ],
    kpis:[
      ["Page Growth — Weekly follower growth","≥500 new followers per AC page per week (active)"],
      ["Page Growth — Organic reach","≥2,000 unique accounts/week per page"],
      ["Content — Engagement rate","≥3–5% boosted; 1–2% organic"],
      ["Content — Reel views","≥500 organic; ≥5,000 boosted"],
      ["Content — Shares (attack)","≥50 shares per post"],
      ["Ads — CPM","≤₹15 reach; ≤₹40 engagement"],
      ["Ads — CTR","≥1.5% (traffic)"],
      ["Ads — Frequency","≤3.0 (avoid fatigue)"]
    ],
    escalation:[
      ["Factual error in live post","Zone Coord: delete; State Head: review","≤30 min"],
      ["Page restriction / account disabled","Zone Coord → State Head → Ads Manager Meta ticket","≤2 hr"],
      ["Defamatory / illegal content","Zone Coord remove; State Head + Comms + Legal","≤15 min"],
      ["Ad account disabled","Ads Manager → State Head → National Head; backup accounts","≤1 hr"],
      ["Opposition/media attacks SMCC","State Head strategy; Comms crafts response","≤3 hr"],
      ["Team leak / breach","State Head → National Head; access removal; legal","≤24 hr"]
    ],
    crisis:["STOP — pause all scheduled posts","ASSESS — State Head + Comms determine severity","CONTAIN — remove/correct offending content","COMMUNICATE — brief National Head ≤1 hr; silence protocol externally","RESPOND — Comms crafts response; SMCC amplifies","REVIEW — post-crisis debrief"],
    closure:["T-3 days — 1–2 posts/day, voter motivation only; pause attack content & ads","Polling Day — 'Go Vote' content only","Post-result — win: celebrate/thank; loss: gracious, no blame; hand-off within 1 week"],
    pageDisposition:["Hand off to local party unit (mandal president)","Merge with state party page for smaller ACs","Archive (unpublish) as campaign record","Rebrand & keep dormant for next election"],
    phases:[
      {ph:1,focus:"Foundation — research, infrastructure, page creation",act:["AC research","Zone mapping","FB+IG pages per AC","BM & Ads Account","Brand kit & templates","Trial run"],intensity:"low"},
      {ph:2,focus:"Acceleration — content cadence & audience build",act:["Awareness ads (15–20% spend)","Page-likes campaigns","Content cadence (FB ≥3/day, IG ≥2 + 2 stories)","Engagement ads at 25–30% spend"],intensity:"medium"},
      {ph:3,focus:"Intensification — full saturation 3–4 weeks out",act:["35–40% spend","Hyperlocal attack content","Reels at scale","Boosted post amplification"],intensity:"very-high"},
      {ph:4,focus:"Final Push 1–2 weeks out — full saturation",act:["All remaining ad budget","Last-mile candidate content","T-3 days throttling","Polling-day 'Go Vote' only"],intensity:"high"},
      {ph:5,focus:"Closure & page disposition",act:["Win/loss messaging","Page hand-off / archive","Monthly performance report","Post-campaign analysis report"],intensity:"low"}
    ]
  },
  /* ---------------------- Surrogate Pages ------------------------ */
  {
    id:"surrogate",name:"Surrogate Pages Acquisition & Management",icon:"🌐",
    category:"creative",function:"Surrogate Network",
    tagline:"Acquires ideologically aligned Instagram pages and operates them under vendor management.",
    purpose:"Acquires Instagram pages aligned with our ideology and narratives and places them under vendor management. VA retains full ownership; original admins continue to operate and publish content aligned with our narratives.",
    structure:[
      {role:"1 Manager",detail:"Acquisition strategy, vendor management, narrative briefing, expansion targets, budgeting."},
      {role:"2 Leads",detail:"Daily coordination, performance tracking, escalation, page-admin work. Ideally one lead handles 20–25 surrogate pages."}
    ],
    sizing:{min:"1 Manager + 1 Lead",ideal:"1 Manager + 2 Leads (40–50 active pages)",scale:"By number of acquired pages — one lead can manage 20–25"},
    scaleNote:"20–25 pages per lead",
    coreFunctions:[
      {title:"Operational Approach",items:[
        "Identify and approach IG pages based on ideological alignment, content quality, performance",
        "If a page meets standards — finalise Ownership cost (one-time payment) + Monthly operational cost (recurring)",
        "Post onboarding — share daily research docs on selected narratives; strategic inputs for performance",
        "Low conversion rate — many admins run pages from passion alongside other jobs",
        "Most creators are used to 1–2 pieces/day and find higher volume difficult"
      ]},
      {title:"Working Objective",items:[
        "Distributed network of semi-independent ideological pages pushing narratives in native internet language",
        "Creates perception of organic emergence — meme culture, youth conversations, regional discourse",
        "Reduces dependence on official handles; amplifies through multiple independent-looking voices",
        "Makes communication appear authentic, relatable, culturally embedded"
      ]},
      {title:"Key Dependencies",items:[
        "Strong coordination with QRT and Research Team for daily narrative alignment",
        "Fast turnaround from research to execution",
        "Reliable page admins for timely narrative push",
        "Political sound team lead — pages cover narrative even in cooling period"
      ]},
      {title:"Logic Behind Team Sizing",items:[
        "Surrogate ops are relationship-heavy, not purely operational",
        "Daily coordination is manual",
        "Posting follow-ups need constant monitoring",
        "Many admins are part-time creators",
        "Narrative compliance needs regular supervision",
        "Crisis handling requires fast response"
      ]},
      {title:"Daily Workflow",items:[
        "Morning — receive narrative line from Manager/QRT, share research docs & talking points, identify priority narratives & posting windows, coordinate with page admins",
        "Evening — peak posting window execution, monitor engagement, amplification coordination, crisis handling if content goes off-script, performance tracking & reporting"
      ]},
      {title:"Skills Required",items:[
        "Deep understanding of Instagram ecosystem and meme culture",
        "Strong political narrative understanding",
        "Negotiation and vendor management",
        "Relationship management with page admins",
        "Fast communication & coordination",
        "Internet trend awareness and content instinct",
        "Crisis management & escalation judgement",
        "Ability to identify high-potential pages early"
      ]},
      {title:"Tools & Platforms",items:["Canva / Photoshop for creatives","Adobe Premiere Pro for video editing"]}
    ],
    pricing:{
      ownership:[
        ["India 1","₹5 per follower"],["India 2","₹3 per follower"],["India 3","₹2 per follower"]
      ],
      monthly:[
        ["1K – 10K followers","₹35,000","₹25,000","₹15,000"],
        ["10K – 50K followers","₹75,000","₹50,000","₹30,000"]
      ]
    }
  },
  /* ----------------------- Third Party Team ---------------------- */
  {
    id:"third-party",name:"Third Party Team",icon:"🎭",
    category:"creative",function:"Surrogate Network",
    tagline:"Internally managed surrogate Instagram pages amplifying state-political narratives.",
    purpose:"Internally manages surrogate Instagram pages that majorly align with state politics. Unlike acquired surrogate pages, these are created, developed and operated entirely within the organisation through dedicated internal teams. The objective is to create multiple independent-looking digital voices to communicate narratives in native internet style.",
    structure:[
      {role:"Manager",detail:"Overall third-party ecosystem strategy, narrative alignment. Salary varies by state (~₹90K–₹1.3L)."},
      {role:"Creator/Consultant",detail:"Daily content creation, trend research, work related to page admin. One-resource-one-page model. Salary ₹40K–₹70K."},
      {role:"Intern/Associate",detail:"Backend — searching old bytes, researching data/statements. Manages pages on leave/exit cover. Stipend ₹20K–₹35K."},
      {role:"Video Editor — Positive Properties",detail:"Positive amplification, emotional storytelling, soft political influence."},
      {role:"Video Editor — Negative Surrogate Properties",detail:"Opposition attack, comparative edits, counter narratives, rapid response."}
    ],
    sizing:{min:"2 video editors",ideal:"2–4 video editors + dedicated per major surrogate property",scale:"By surrogate page count, election intensity, opposition aggression, viral content demand"},
    coreFunctions:[
      {title:"Operational Approach — Categories",items:[
        "Meme and youth culture pages",
        "Regional and local narrative pages",
        "Political infotainment pages",
        "Hyper-trend and Issue-based thematic pages"
      ]},
      {title:"Why Internal Control Wins",items:[
        "Higher execution speed, narrative discipline, posting consistency vs externally-managed",
        "Faster experimentation with formats",
        "Better narrative synchronisation",
        "Higher posting frequency",
        "Rapid amplification during political moments",
        "Better crisis control and content moderation"
      ]},
      {title:"Working Objective",items:[
        "Centralised network amplifying narratives in internet-native language",
        "Creates perception of widespread organic conversations across meme/youth/regional pages",
        "Reduces overdependence on official handles",
        "Makes communication relatable, trend-driven, culturally relevant",
        "Enables rapid response narrative warfare during political events / opposition attacks / high-engagement news cycles"
      ]},
      {title:"Daily Workflow",items:[
        "Receive daily narrative direction from Manager / QRT",
        "Review research docs and talking points",
        "Identify priority narratives; create content around them",
        "Assign content buckets to editor or graphic designer",
        "Internal review of final output; post on the page timely"
      ]},
      {title:"Skills Required",items:[
        "Deep Instagram ecosystem and meme culture understanding",
        "Strong political narrative understanding",
        "Trend spotting and rapid adaptation",
        "High-speed content execution",
        "Reel editing and meme creation",
        "Audience psychology understanding",
        "Internet culture awareness",
        "Crisis management judgement",
        "Strong coordination and communication",
        "Maintain narrative consistency while keeping content organic-looking"
      ]},
      {title:"Video Editing — Inputs/Outputs",items:[
        "Inputs from Page Manager — opposition monitoring, viral trends, research insights",
        "Internal — fast editing, meme adaptation, motion graphics, formatting/branding, subtitles, platform optimisation, QC, narrative framing, attack videos, emotional edits, viral political content",
        "Outputs to — surrogate pages, meme networks, WhatsApp groups, influencer channels"
      ]},
      {title:"Sizing",items:[
        "Minimum size: 2 members",
        "Ideal: 2–4 members",
        "Scaling logic depends on number of surrogate pages, election intensity, opposition aggression, viral content demand"
      ]}
    ],
    kpis:["Daily output: 10–20 videos","Weekly: 80–100 videos","Success: virality, shares, narrative pickup, organic engagement"],
    tools:["Adobe Premiere Pro","After Effects","Photoshop","AI Tools","FCP X","DaVinci Resolve","CapCut"],
    platforms:["Instagram","Facebook","YouTube","X"],
    failurePoints:["Slow approvals","Heavy revision cycles","Overloaded editors","Narrative inconsistency","Fact-check risks","Slow trend adaptation"],
    escalation:[
      ["Editing delay","Team Lead","Immediate"],
      ["Sensitive content risk","Comms Lead","Immediate"],
      ["Missing footage","Content PoC","Immediate"],
      ["Narrative confusion","Content PoC","Immediate"]
    ],
    budget:[
      ["Manager","₹90K – ₹1.3L (state-dependent)"],
      ["Creator / Consultant","₹40K – ₹70K (one-resource-one-page model)"],
      ["Intern / Associate","₹20K – ₹35K"],
      ["Junior Video Editor","₹30K – ₹45K"],
      ["Senior Video Editor","₹50K – ₹80K"]
    ],
    phases:[
      {ph:1,focus:"Audience building",act:[],intensity:"low"},
      {ph:2,focus:"Narrative expansion",act:[],intensity:"medium"},
      {ph:3,focus:"Aggressive counter campaigns",act:[],intensity:"very-high"},
      {ph:4,focus:"Voter influence",act:[],intensity:"high"},
      {ph:5,focus:"Narrative retention",act:[],intensity:"low"}
    ]
  },
  /* ----------------------- TVC & Documentaries ------------------- */
  {
    id:"tvc",name:"TVC & Documentaries",icon:"🎬",
    category:"creative",function:"Films & Documentaries",
    tagline:"Conceptualises, produces and post-produces ads and documentaries for state campaigns.",
    purpose:"Works closely with comms/PI to understand state narratives; conceptualisation, production and post-production of ads and documentaries.",
    structure:[
      {role:"Team Lead / Senior Producer",detail:"Abhiraj — coordinates with state leads and senior management."},
      {role:"Associate Producer / Creative Producer (TVC)",detail:"Ritesh — coordinates with state teams daily."},
      {role:"Associate Producer / Creative Producer (Documentaries)",detail:"Aditya — coordinates with state teams daily."},
      {role:"Executives",detail:"Director, DOP, Assistant Directors, Editor, DI Artist, Music Composer, Sound Designer, Post Production Supervisor."},
      {role:"Total Strength",detail:"10–12 in-house per state."}
    ],
    sizing:{ideal:"10–12 in-house per state",scale:"By number of films and AC-level telecom ad volume"},
    coreFunctions:[
      {title:"Coordination with Other Teams",items:[
        "State Communications — primary coordinator; briefings/requirements; approvals at checkpoints; needs dedicated PoC",
        "State PI — primary source for state/AC/cohort-level narratives",
        "Research — infrequent; helps fetch additional narrative data",
        "Legal — vets scripts for EC compliance; suggests changes from concept level; WIP films submitted for EC approval"
      ]},
      {title:"Weapon Arsenal",items:[
        "20-second unskippable video ads","Longer skippable ads / magnum opus","Music Videos",
        "Telecom Ads — AC Specific","Telecom Ads — Narrative","Telecom Ads — Cohort Based",
        "Manifesto Films","Achievement documentaries (scheme, infra, etc.)","Issue-based documentaries (yet to crack format)"
      ]},
      {title:"Key Deliverables per Film",items:["FB Out (16:9, HD)","WA Out (16:9, LQ)","YT Out (16:9, 4K)","Insta Out (4:5)","Audio Mix (Radio jingle)","Clean MOV","Subtitle file (English)","Dubbing — if required","Theatre outs — if required","TV outs — if required"]},
      {title:"Pre-Campaign Preparation",items:["Hiring","Early touch base with state teams","Setting up briefing & approval process","Understanding local politics & narratives","Pre-campaign ground work — recce, local crew"]},
      {title:"Campaign Workflow",items:["Project briefing from Comms","Ideation & scripting","Script approval from Comms","Script approval from client","Project budget approval","Pre-production","Production","Edit approval from Comms","Post-production","Final delivery","Dubbing"]},
      {title:"Logic of Process",items:["Scalability","20-second formats","Longer films","Actor retainers","Dedicated PoCs"]},
      {title:"Campaign Timeline",items:["Phased workload executable","Final phase always goes to AC-level films"]},
      {title:"Key Learnings from Earlier Campaigns",items:[
        "Start early; escalate if timelines slipping",
        "Set up internal approval process",
        "Expected client approval obstacles and workarounds",
        "Narrative beat sheet",
        "Limited narratives over films",
        "Fix CTAs early",
        "Mind-numbing time waste of endcard protocols; early interventions",
        "Additional unsolicited gyan"
      ]}
    ],
    stats:[
      {label:"In-house team / state",value:"10–12"},
      {label:"Senior Producer",value:"1"},
      {label:"Creative Producers",value:"2 (TVC + Docs)"}
    ],
    deliverables:[
      {n:"FB Out",d:"16:9, HD"},
      {n:"WhatsApp Out",d:"16:9, LQ"},
      {n:"YouTube Out",d:"16:9, 4K"},
      {n:"Instagram Out",d:"4:5"},
      {n:"Audio Mix",d:"Radio jingle"},
      {n:"Clean MOV",d:"Master file"},
      {n:"Subtitle File",d:"English"},
      {n:"Dubbing",d:"If required"},
      {n:"Theatre Outs",d:"If required"},
      {n:"TV Outs",d:"If required"}
    ],
    workflow11:[
      "Project briefing from Comms team",
      "Ideation & scripting",
      "Script approval from Comms team ✓",
      "Script approval from the client ✓",
      "Project budget approval",
      "Pre-production",
      "Production",
      "Edit approval from the Comms team ✓",
      "Post-production (and all its steps)",
      "Final delivery",
      "Dubbing"
    ]
  },
  /* ---------------------- Partnership Program -------------------- */
  {
    id:"partnership",name:"Partnership Program",icon:"🌟",
    category:"creative",function:"Creator Network",
    tagline:"Turns campaign messaging into public conversation through trusted creators.",
    purpose:"Turns campaign messaging into public conversation by using trusted creators instead of relying only on official party pages, spokespersons or ads. People today trust creators, meme pages, regional influencers, satire accounts and community voices more than direct political communication.",
    philosophy:[
      "One message shared by hundreds of trusted creators feels more real than one message from one official account.",
      "Instead of depending only on party handles, ads, TV debates — push narratives through reels, memes, shorts, regional content, satire, community pages.",
      "Create stronger emotional connection and better audience trust."
    ],
    structure:[
      {role:"Head of Influencer Narrative Network",detail:"Overall creator strategy, narrative rollout planning, leadership coordination, crisis management, performance reporting."},
      {role:"Creator Relationship Executives",detail:"Manage creators daily, share briefs, follow up, review drafts, coordinate posting, handle creator comms. Each handles ~25–40 creators."}
    ],
    scaleNote:"25–40 creators per executive",
    coreFunctions:[
      {title:"Without a Creator Network",items:[
        "Campaign messaging feels forced",
        "Opposition narratives dominate social media",
        "Youth audiences disconnect",
        "Organic reach becomes weak",
        "Cultural moments are missed",
        "Response speed becomes slow"
      ]},
      {title:"Creator Management",items:["Finds, evaluates, onboards creators","Builds long-term relationships","Handles payments and negotiations","Creator types — political, meme pages, satire, lifestyle, regional, youth, devotional, student"]},
      {title:"Narrative Execution",items:["Creator briefs, talking points, reel ideas, captions, meme references, hashtags, infopacks","Content should feel natural, not scripted","Each creator presents the same narrative in their own style"]},
      {title:"Daily Operations",items:["Daily creator communication","Content approvals; rollout planning; posting schedules","Cross-promotion; draft reviews","Crisis handling; content correction if needed","Works at internet speed; reacts to breaking events"]},
      {title:"Performance Tracking",items:["Reach, engagement, watch time, shares","Comment sentiment, hashtag performance, narrative spread","Focus is whether narrative is influencing audience opinion — not just views"]},
      {title:"Inputs Received From",items:["Narrative Teams — daily messaging, attack/defence, rapid response","Research Teams — audience insights, regional sentiment, geo-targeting","Ground Teams — local issues, public mood, regional trends"]},
      {title:"Internal Workflow",items:["Receives campaign narrative","Converts it into creator content","Matches narrative with suitable creators","Shares briefs and references","Reviews drafts","Approves final content","Coordinates posting","Tracks audience response"]},
      {title:"Operational Speed Example",items:["11 AM → Narrative changes","1 PM → Creator briefs updated","3 PM → Draft approvals complete","6 PM → Content live across creator network","Fast execution controls online conversations before opposition narratives spread"]},
      {title:"Regional Understanding",items:["Local culture","Meme trends","Festivals","Religious sensitivity","Sports moments","Youth internet behaviour","Regional language tone","Content timing matches audience mood & cultural context"]}
    ],
    skills:{
      must:["Cultural Understanding — regional culture, internet trends, political sentiment, meme culture","Creator Management — relationships, negotiation, retention","Narrative Writing — political messaging → reel concepts, captions, scripts, meme ideas, tweet threads","Fast Execution — react quickly, handle breaking news, coordinate fast rollouts","Crisis Handling — identify risky content, backlash risks, narrative mistakes before they become major"]
    },
    finalGoal:["Shape online conversations","Influence public opinion","Build emotional connection with audiences","Spread narratives across social media naturally","Make campaign messaging feel like public sentiment instead of political advertising"],
    speedTimeline:[
      {t:"11 AM",e:"Narrative changes"},
      {t:"1 PM",e:"Creator briefs updated"},
      {t:"3 PM",e:"Draft approvals complete"},
      {t:"6 PM",e:"Content live across creator network"}
    ],
    heroCallout:"One message shared by hundreds of trusted creators feels more real than one message coming from one official account."
  }
];

/* Multi-category tags used by the interactive hub-diagram badges on the landing page.
   Each team can belong to multiple categories. You can update these mappings any time
   without touching the renderer. */
const TEAM_TAGS = {
  "arc":              ["Intelligence","Operations","Structure"],
  "campaign-branding":["Creative","Operations","Structure"],
  "party":            ["Communications","Creative","Structure"],
  "growth":           ["Operations","Strategy"],
  "influencer":       ["Creative","Strategy"],
  "legal":            ["Operations","Structure"],
  "media":            ["Intelligence","Communications","Structure"],
  "narrative":        ["Intelligence","Strategy","Structure"],
  "non-meta":         ["Operations","Strategy"],
  "party-coord":      ["Operations","Structure"],
  "reporter":         ["Intelligence","Operations"],
  "smcc":             ["Communications","Operations","Strategy","Structure"],
  "surrogate":        ["Creative","Strategy"],
  "third-party":      ["Creative","Strategy"],
  "tvc":              ["Creative","Strategy"],
  "partnership":      ["Creative","Strategy"]
};
const TAG_ORDER = ["Intelligence","Creative","Communications","Operations","Structure","Strategy"];

/* Inter-team coordination edges (from→to) for the coordination map */
const COORD_EDGES = [
  ["narrative","party"],["narrative","media"],["narrative","influencer"],["narrative","partnership"],["narrative","surrogate"],["narrative","third-party"],["narrative","smcc"],
  ["arc","party"],["arc","smcc"],["arc","growth"],["arc","media"],["arc","non-meta"],
  ["media","party"],["media","narrative"],["media","party-coord"],["media","smcc"],
  ["legal","growth"],["legal","smcc"],["legal","non-meta"],["legal","tvc"],["legal","campaign-branding"],
  ["growth","smcc"],["growth","campaign-branding"],["growth","non-meta"],
  ["smcc","campaign-branding"],["smcc","third-party"],["smcc","party"],
  ["influencer","narrative"],
  ["partnership","arc"],["partnership","growth"],["partnership","legal"],["partnership","third-party"],
  ["reporter","narrative"],["reporter","media"],["reporter","tvc"],["reporter","party"],
  ["tvc","campaign-branding"],["tvc","non-meta"],
  ["party-coord","party"],["party-coord","media"],["party-coord","smcc"],
  ["surrogate","narrative"],["surrogate","third-party"],
  ["campaign-branding","party"]
];

/* Image generation prompts to be handed to the user */
const IMAGE_PROMPTS = [
  {slot:"Hero / Brand Mark",prompt:"Abstract isometric illustration of a glowing teal-to-cyan hub with 15 thin curved lines radiating outward to small geometric nodes (circles, triangles, hexagons). Dark navy backdrop with subtle grid. Soft glassmorphism, neon teal highlights matching #06b6d4 and #14b8a6. Editorial, minimal, no people, no text. 3000x1800."},
  {slot:"Landing Section — Campaign Flow",prompt:"Horizontal infographic-style illustration: 5 abstract shapes (seed, sprout, tree, storm, rainbow) arranged left-to-right on a soft teal-to-cyan gradient backdrop, connected by a thin dashed line. Each shape is monoline, abstract, no text labels. Light, airy, editorial. 2400x900."},
  {slot:"Team Card Icons (16 teams)",prompt:"Set of 16 monoline duotone icons, each 512x512, using #0e7490 and #14b8a6 on transparent. Subjects: analytics chart, palette/brush, pillar building, ascending arrow, microphone, balanced scales, newspaper folded, lightbulb with circuit, satellite dish, two-handshake, video camera, target/bullseye, globe-with-nodes, theatre mask duo, film clapperboard, star with sparkle. Geometric, minimal, consistent stroke."},
  {slot:"Phase Timeline Background",prompt:"Subtle abstract topographic-style line pattern in pale teal #ccfbf1 on near-white background. Lines curve like contour map, very faint. Tileable. 1920x600."},
  {slot:"Org Chart — Connector Texture",prompt:"Hand-drawn-style dotted connector lines and tiny circular nodes in mint-teal, no people, no text, on transparent — used as decorative org-chart connectors. 1200x800."},
  {slot:"Glossary / Knowledge Panel",prompt:"Stylised illustration of a stack of overlapping translucent index cards in teal-cyan with abstract icons (book, magnifier, chat bubble), no text, soft drop shadows. 1600x900."},
  {slot:"Reporter Network Coverage Map",prompt:"Stylised map of India outlined in thin teal lines (#06b6d4) on dark navy background. 14 glowing teal circles scattered across active states + 7 lighter outline circles for contact-access states. No state names, no text. Subtle satellite-grid feel. 2400x2400."},
  {slot:"SMCC Hyperlocal Network",prompt:"Top-down isometric illustration of dense honeycomb pattern of hexagons in graded teal shades, each hexagon glowing differently, representing constituency pages. Centre hexagon brightest. Background subtle radial gradient. 2400x1600."},
  {slot:"Budget / Spend Explorer Hero",prompt:"Abstract stacked-bar architectural illustration: tall thin bars in graded teal/cyan/aqua, rising like a city skyline, with thin connecting wireframe lines suggesting data flow. Light cream backdrop. Editorial poster style. 2200x1400."},
  {slot:"Section Dividers (3 variants)",prompt:"Three thin abstract horizontal dividers using flowing curves in teal-cyan gradient, organic wave-like, varying density. SVG-style flat. 1800x120 each."}
];
