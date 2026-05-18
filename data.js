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
    {
      "id": "arc",
      "name": "ARC | Feedback and Reporting",
      "tagline": "Converts raw platform numbers, narratives and performance trends into actionable strategic inputs.",
      "purpose": "To function as the central communication reporting, monitoring and strategic support during and outside campaigns. The team converts raw platform numbers, narratives and performance trends into actionable strategic inputs for National, State and Campaign teams on a weekly, monthly and ad-hoc basis. It is especially critical during elections because it helps in real-time decision-making, narrative correction and content optimisation across Official, VA-Administered, In-House and Partnership programmes, influencer and amplification networks. Without ARC, the communication efforts become fragmented and reactive to measurement. During election or polling phases, ARC resources act as the dedicated monitoring and strategic coordination unit, aiding in competition analysis, narrative alignment, issue escalation and state-level communication optimisation.",
      "structure": [
        {
          "role": "ARC GM (L2)",
          "detail": "Internal hierarchy unchanged; team members report to ARC's GM who quality-checks all insights and suggestions for strategic accuracy before sharing with leadership or client."
        },
        {
          "role": "State-deployed Members",
          "detail": "1-2 members typically assigned per campaign state to work with the PD directly; support state specific requirements comprising tracking, data extraction and report preparation."
        }
      ],
      "skills": {
        "must": [
          "A deep understanding of political messaging and the ability to translate numbers into usable, tactical insights for the end consumer of the report.",
          "Proficiency in a high-stakes, real-time reporting environment, maintaining 100% accuracy.",
          "Technical proficiency in Google Docs, Sheets, Slides and all other relevant tools."
        ],
        "nice": [
          "The ability to interpret political nuances and local sentiment trends and report them.",
          "Ensuring smooth communication with the Project Director and senior State Communications Team members, acting as a liaison between State Comms and ARC."
        ]
      },
      "coreFunctions": [
        {
          "title": "Role in Campaign Flow",
          "items": [
            "Baseline Analysis Report at the start of the campaign — evaluates the state's social media landscape.",
            "Analysis of official party pages and key stakeholders, such as office bearers, MPs, MLAs, and other significant figures as per the client's requirements.",
            "Periodic Impact Assessment Report (SMAAR) — documents measurable effect of the Communications Team's interventions on the digital profile and social media presence of the assigned leader(s).",
            "Periodic assessment documents evaluating Ad Spend on Ghost Advertisements and Engagement Posting, with strategic interventions to optimise performance and returns.",
            "Periodic Trend Analysis of client's and opposition's digital ecosystems, with key takeaways, best practices and effective narrative strategies presented as concise case studies.",
            "Daily Narrative Performance report for real-time monitoring and a Monthly Narrative Performance report for leadership.",
            "During active narrative cycles — daily Posting Compliance and Dissemination Reports tracking rollout and spread of the narrative.",
            "Coordinates with Vendor Pages on narrative dissemination, posting frequency, and content compliance; prepares a consolidated Vendor Pages Report weekly.",
            "End-to-end content tracking and data support for all campaign activities, catering to the data requirements of the Communications Team.",
            "Handles confidential social media analysis reports and fulfils ad-hoc research and reporting requirements, for direct consumption by the client.",
            "Maintains a repository of all reports and datasets; keeps a productivity log of Comms team members as directed by the Project Director.",
            "Prepares the performance tracking reports of the Social Media Command Centre.",
            "Upon conclusion of the campaign — aids in preparation of a Key Takeaways and Learnings Document along with a Comprehensive Campaign Closure Report."
          ]
        },
        {
          "title": "Routine — Performance Intelligence",
          "items": [
            "Benchmarks and tracks BJP's performance across Official, VA, Partner, In-House, Influencer and Partner ecosystems to identify gaps and refine competitive positioning.",
            "Prepares 24-hour impact reports, weekly and monthly reports, and routinely undertakes ad-hoc social media analysis requests for state leaders/pages, including but not limited to MP, MLAs, UM, CMs.",
            "Qualitative analysis of tone, language, design alignment alongside quantitative measurements of posting rates, views, narrative choice and audience sentiment.",
            "Helps identify untapped opportunities, top performers and replicate best practices throughout the BJP ecosystem."
          ]
        },
        {
          "title": "Working Logic",
          "items": [
            "Converts raw social media metrics (received from Analytics or fetched using data extraction tools) into structured assessment and performance insights across the political landscape.",
            "Impacts narrative and campaign success by identifying strategic ways to launch coordinated attacks and by auditing BJP pages and leader profiles to gauge effectiveness of narrative deployment and social media utilisation.",
            "Weekly and monthly reports offer leadership and the client insights to pivot strategies based on our and the Oppositions' strengths and vulnerabilities in real-time.",
            "Key dependency — uninterrupted flow of data, competitive intelligence and seamless integration of state-level ground updates into reporting."
          ]
        },
        {
          "title": "Coordination with Other Teams",
          "items": [
            "Works closely with VA-administered state teams to ensure narrative execution is aligned and delivers data-driven reports on page health, performance and narrative success.",
            "Assists the state team with data extraction and extends support in combined tasks and reports on a regular basis.",
            "Coordinates and assists state teams at the request of State leads; team members report internally to ARC GM (L2) who quality-checks insights and suggestions for strategic accuracy before sharing with leadership or client."
          ]
        }
      ],
      "icon": "📊",
      "category": "intel",
      "function": "Intelligence & Reporting"
    },
    {
      "id": "campaign-branding",
      "name": "Campaign Branding & Ads",
      "icon": "🎨",
      "category": "creative",
      "function": "Creative & Campaigns",
      "tagline": "Centralised branding, creative and coordination unit across print, digital, ground, video, animation and tech.",
      "purpose": "The Campaign Branding & Ads Team functions as a centralised branding, creative and coordination unit that supports national and state-level campaigns across multiple formats and platforms. It ensures smooth implementation of campaign-related requirements involving branding, events, print communication, digital creatives, media support, video communication, presentations, animation and campaign infrastructure support.",
      "structure": [
        {
          "role": "Team Lead",
          "detail": "Planning, priority management, resource allocation, approval coordination, inter-department coordination, final supervision."
        },
        {
          "role": "Operations & Coordination POCs",
          "detail": "Stakeholder communication, brief collection, task assignment, timeline tracking, feedback, approvals, vendor coordination, follow-ups."
        },
        {
          "role": "Creative Team",
          "detail": "Graphic Designers, Video Editors, Motion Graphic Artists, Animators, Caricature Artists, PPT Designers, Content Strategists."
        },
        {
          "role": "External Vendors",
          "detail": "Print Vendors, Event Agencies, Production Teams, External Designers (scaled by campaign intensity)."
        }
      ],
      "coreFunctions": [
        {
          "title": "Key Responsibilities",
          "items": [
            "Campaign Ideation & Creative Planning — communication planning, narrative visualisation, state-wise audience-specific planning",
            "Content Production & Creative Support — social media creatives, digital assets, print collateral, outdoor branding, WhatsApp creatives & GIFs",
            "Ground Branding & Event Support — meetings, yatras, conferences, backdrops, stage branding, gates, pole banners, LED, venue branding",
            "Video, Animation & Motion Graphics — campaign videos, speech edits, teasers, reels, motion graphic explainers, 2D animation, caricatures",
            "Print & Production Support — pamphlets, brochures, newspaper ads, manifestos, booklets, print-ready adaptations, vendor specifications",
            "PPTs — review decks, leadership presentations, research/strategy/ARC presentations",
            "AI & Automation — websites, landing pages, dashboards, automation support",
            "Coordination & Campaign Support — client coordination, brief management, approval management, inter-team tracking"
          ]
        },
        {
          "title": "How a Typical Requirement Flows",
          "items": [
            "Begins with: a campaign brief, event requirement, communication objective, research-based narrative, media requirement, or stakeholder request",
            "PoC coordinates objective, timeline/urgency, deliverables, platform/usage, approval flow, language/state adaptations",
            "Inputs from Research, Campaign, Communication, Media, Ground/Event, Leadership Offices"
          ]
        },
        {
          "title": "Internal Working Process",
          "items": [
            "Designers — branding and creatives",
            "Video editors — reels and campaign videos",
            "Animators — motion graphics and explainers",
            "PPT teams — presentations",
            "Technical teams — websites or automation",
            "PoCs — coordination, feedback, approvals, timelines"
          ]
        },
        {
          "title": "Coordination & Feedback Loop",
          "items": [
            "Continuous coordination with Stakeholders, Campaign Teams, Communication Teams, Vendors, Event Agencies, Media Teams",
            "Multiple rounds of feedback and revisions before final closure"
          ]
        },
        {
          "title": "Dissemination",
          "items": [
            "Outputs go to: social media dissemination, print production, event deployment, media usage, on-ground branding, WhatsApp circulation, presentations, digital publishing",
            "Deliverables include: backdrops & event branding, pamphlets & print, social creatives, videos/reels, animated content, presentations, websites/landing pages"
          ]
        },
        {
          "title": "Pre-Campaign Preparation",
          "items": [
            "Hiring & resource allocation — designers, editors, animators based on campaign needs",
            "Coordination systems — briefing, approval workflows, escalation hierarchies",
            "Narrative familiarisation — state-specific political narratives, positioning, local issues, regional sensitivities",
            "Asset & template preparation — master templates, design systems, asset libraries, typography systems"
          ]
        }
      ],
      "workflow": [
        {
          "step": "Request Initiation",
          "desc": "Stakeholders initiate tasks with detailed brief; appropriate PoC tagged."
        },
        {
          "step": "Content & Ideation",
          "desc": "Content provided by campaigns PoC or developed internally."
        },
        {
          "step": "Task Assignment",
          "desc": "Tasks assigned to appropriate team members."
        },
        {
          "step": "Execution",
          "desc": "Team works to defined timeline upholding creative and quality standards."
        },
        {
          "step": "Quality Assurance",
          "desc": "Internal review for quality, brand alignment, creative expectations."
        },
        {
          "step": "Completion",
          "desc": "Final creatives shared with stakeholders for review/approval/dissemination."
        }
      ],
      "example": {
        "title": "GST Awareness & Achievement Campaign",
        "content": "A GST awareness/achievements campaign communicates impact and benefits of GST implementation across print, digital, media, on-ground. Starts with objectives, target audience, messaging direction, deliverables, rollout timelines. Inputs from Campaign, Research, Communication, Media. Direction finalised → communication angles, messaging structure, creative references, visual direction, look & feel, platform-wise approach. Designers do print/branding/digital, video editors do reels/videos, animators do motion graphics, PPT designers do decks. PoC manages timelines, internal coordination, vendor communication, feedback, deliverable tracking. Workflow may include pamphlets, newspaper ads, hoardings, event branding, social creatives, reels, videos, animated explainers, leadership decks, media briefing presentations. Review for branding/narrative/platform/quality alignment → stakeholder feedback → revisions → final outputs."
      },
      "budget": [
        {
          "role": "Campaign Branding Lead",
          "range": "₹1L – ₹1.3L"
        },
        {
          "role": "Sr. Content Writer",
          "range": "₹50K – ₹75K"
        },
        {
          "role": "Jr. Content Writer",
          "range": "₹35K – ₹50K"
        },
        {
          "role": "Sr. Graphic Designer",
          "range": "₹55K – ₹80K"
        },
        {
          "role": "Jr. Graphic Designer",
          "range": "₹35K – ₹50K"
        },
        {
          "role": "Sr. Video Editor",
          "range": "₹60K – ₹85K"
        },
        {
          "role": "Jr. Video Editor",
          "range": "₹35K – ₹55K"
        }
      ]
    },
    {
      "id": "party",
      "name": "Party Team",
      "icon": "🏛️",
      "category": "comms",
      "function": "Official Communications",
      "tagline": "Mouthpiece of the party and first line of narrative dissemination to the public.",
      "purpose": "This team exists to manage and drive the official digital communication of the party during the campaign. The official party handles act as the mouthpiece of the party and serves as the first line of narrative dissemination to the public. If this team does not exist, the party's communication becomes scattered, opposition narratives can dominate, development work remains under-amplified, and ground-level messaging does not reach voters in a structured way.",
      "structure": [
        {
          "role": "Project Manager",
          "detail": "Oversees the overall campaign workflow, coordination, approvals, and alignment with party leadership."
        },
        {
          "role": "Party Page Manager",
          "detail": "Manages official party handles, daily publishing, content planning, and platform coordination."
        },
        {
          "role": "Creative Team",
          "detail": "Includes 2 Graphic Designers (GD), 3 Video Editors (VE), and 1 Animator responsible for creatives, reels, videos, motion graphics, and visual campaign content."
        },
        {
          "role": "Content Writing Team",
          "detail": "A team of 3 writers responsible for captions, scripts, political messaging, reactive content, and platform-specific copy."
        },
        {
          "role": "Reporting Lead",
          "detail": "One person is required to handle reporting, tracker management and coordination."
        }
      ],
      "coreFunctions": [
        {
          "title": "Key Responsibilities",
          "items": [
            "Planning and managing the overall digital narrative of the campaign in alignment with the party's political strategy",
            "Daily, weekly, and monthly content planning, and checking content quality before posting",
            "Covers rallies and protests, promotes party spokesperson statements",
            "Plans growth strategies, proposes ads for growth",
            "Coordinates with the State Social Media Convenor"
          ]
        },
        {
          "title": "Role in Campaign Flow",
          "items": [
            "Plays a key role in the 360-degree dissemination of campaign communication",
            "Ensures content created for official party handles is further amplified through leaders' accounts, district-level channels, candidate pages, influencer networks, and WhatsApp dissemination systems",
            "Acts as a bridge between central campaign communication and ground-level distribution so that campaign narratives reach voters across all digital touchpoints in a coordinated manner"
          ]
        },
        {
          "title": "Daily Narrative Call at 8 AM",
          "items": [
            "Based on the previous day's media monitoring report and important morning news updates",
            "Discussions with party leadership and communication teams to understand the party's position and finalise action points",
            "Ensure all messaging remains aligned with the party's narrative; district-level events and developments are also reviewed",
            "After the call, an actionable report is prepared with clear task allocation and division of responsibilities for the day"
          ]
        },
        {
          "title": "Daily Workflow / SOP",
          "items": [
            "After the daily narrative call and actionable report, content and creative teams begin production between 9:00 AM and 10:30 AM",
            "Prepare at least 4-5 key content pieces before lunch so they can be sent to the party team for timely posting during the day",
            "Remaining planned content completed before 6:00 PM and shared by 6:30 PM to ensure smooth publishing by around 8:00 PM",
            "Helps maintain timely communication and avoids content pile-up; late evening delivery means party handles may not be able to publish all posts effectively"
          ]
        },
        {
          "title": "Coordination with Other Teams",
          "items": [
            "Works closely with political strategy team, research team, media monitoring team, design team, video team, field content team, district social media teams, candidate teams, influencer team, paid ads team, WhatsApp dissemination team, event team, and party leadership",
            "Depends on verified data, timely ground inputs, leadership direction, event schedules, photos/videos from the field, approval authority, and active dissemination by party units",
            "Reports to the State Campaign Head, State Social Media Incharge, Communications Head, War Room Lead, and senior leadership wherever required"
          ]
        },
        {
          "title": "Common Failure Points / Loopholes",
          "items": [
            "Delayed approvals, unverified data, weak coordination with district units",
            "Poor visuals, unclear content planning, slow opposition response, and over-dependence on a few individuals",
            "Inactive amplification networks, weak reporting systems, a lack of proper archives, and inconsistent coordination between official, district, and candidate handles",
            "Human error during content creation and quality checks; mistakes can lead to content backfiring or creating negative public reactions",
            "Frequent errors can reduce the party's trust in the team and damage credibility"
          ]
        },
        {
          "title": "Escalation Matrix",
          "items": [
            "Any major error, misinformation, or issue in published content is first escalated by the Project Manager (PM) to the Project Director (PD)",
            "The matter is then communicated to the State Lead, who further coordinates with the Party Point of Contact (POC) for review, corrective action, and damage control"
          ]
        },
        {
          "title": "Campaign Flow",
          "items": [
            "Campaign narrative strategy is planned and finalised with the party approximately 6-7 months before the election",
            "Based on the approved strategy, a planning calendar is created and the social media and communication process is executed in a structured manner",
            "Final 45 days: highly active — star campaigner visits to the election state, rally coverage, speeches of key leaders, manifesto dissemination, opposition counters, and voter outreach",
            "Last phase before voting: vote appeals, motivating voters to turn out, and politically framing the importance of participation by explaining how their vote can directly impact them, their community, and the future of their state"
          ]
        }
      ],
      "failurePoints": [
        "Delayed approvals",
        "Unverified data",
        "Weak coordination with district units",
        "Poor visuals",
        "Unclear content planning",
        "Slow opposition response",
        "Over-dependence on a few individuals",
        "Inactive amplification networks",
        "Weak reporting systems",
        "Lack of proper archives",
        "Inconsistent coordination across official/district/candidate handles",
        "Human error during content creation; mistakes can lead to backfiring"
      ]
    },
    {
      "id": "growth",
      "name": "Growth Team",
      "icon": "📈",
      "tagline": "Manages, executes, optimises and safeguards political digital advertising operations across platforms.",
      "purpose": "Manages, executes, optimises and safeguards political digital advertising operations across platforms while ensuring campaigns remain compliant, scalable, and strategically aligned with campaign narratives. The entire paid media ecosystem depends on this team's ability to coordinate multiple stakeholders and maintain uninterrupted campaign delivery.",
      "structure": [
        {
          "role": "Team Lead",
          "detail": "Operational control, budget approvals, escalation handling, internal/external coordination, budget forecasting, Direct Impact Purchase ads coordination, resource mapping & deployment."
        },
        {
          "role": "Managers",
          "detail": "Platform management, campaign monitoring, vendor coordination, reporting supervision, compliance, ad account management."
        },
        {
          "role": "Executives / Consultants",
          "detail": "Ad campaigns & reporting, execution, dashboard maintenance, creative tagging, approval tracking, daily monitoring."
        }
      ],
      "sizing": {
        "min": "3–5 (small state campaigns like PY)",
        "ideal": "12–15 (parallel campaigns, multi-platform, continuous monitoring, dedicated reporting, compliance, asset recovery, shift-based peak monitoring)",
        "scale": "When multiple states active; MCC/elections intensify; platform restrictions rise; narrative volume rises; multiple vendors/accounts run simultaneously."
      },
      "coreFunctions": [
        {
          "title": "Responsible For",
          "items": [
            "Creating and maintaining social media assets and advertising infrastructure",
            "Meta and Google political advertising compliance",
            "Platform health, account safety, recovery operations",
            "Planning and optimising campaign budgets across platforms and objectives",
            "Daily spend monitoring; reporting dashboards",
            "Campaign execution across awareness, engagement, traffic, page likes and ghost ads",
            "Coordinating with party leadership for Direct Impact Purchase ads (creatives, budget, approvals, sizing, performance)"
          ]
        },
        {
          "title": "Executes",
          "items": [
            "Campaign launches and media deployment",
            "Political disclaimer setup and identity verification",
            "Audience segmentation and targeting strategy implementation",
            "Spend allocation optimisation based on narrative priorities",
            "Ghost ad deployment for sensitive narratives",
            "Google Election Commission approval workflows"
          ]
        },
        {
          "title": "Manages",
          "items": [
            "Ad accounts and credit lines",
            "Vendor and prepaid advertising accounts",
            "Internal & external social media properties and portfolio access",
            "Campaign dashboards and reporting structures",
            "Cross-platform spend pacing",
            "Asset recovery and escalation processes"
          ]
        },
        {
          "title": "Coordinates With",
          "items": [
            "Varahe Leadership",
            "National Comms",
            "State Comms",
            "State SMCC",
            "Third-party communication teams",
            "Official party teams",
            "Vendors and platform representatives"
          ]
        },
        {
          "title": "Delivers",
          "items": [
            "Scaled campaign execution",
            "Operational continuity during high-intensity campaigns",
            "Real-time spend visibility & reporting",
            "Narrative amplification through paid media",
            "Safe and compliant advertising infrastructure"
          ]
        },
        {
          "title": "Daily Workflow",
          "items": [
            "Morning (9–11 AM) — review previous day, check page/account health, platform restrictions/warnings, align with comms, dashboards, competition spend reports",
            "Afternoon (12–5 PM) — execution & optimisation, creative approvals & tagging, Google EC workflow, ghost ad deployment, vendor coordination, audience/spend adjustments",
            "Evening (6–10 PM) — peak monitoring, reporting updates, spend reconciliation, escalation, campaign shifts between accounts, final dashboard updates"
          ]
        },
        {
          "title": "KPIs",
          "items": [
            "Daily — live execution, spend dashboards, optimisation updates, asset monitoring, approval processing",
            "Weekly — budget pacing, platform-wise summaries, performance analysis, asset health, opposition spend analysis",
            "Success — campaign uptime, spend efficiency, page/account survival, timely launches, compliance approval rate, reporting accuracy, narrative reach & engagement"
          ]
        },
        {
          "title": "Tools & Platforms",
          "items": [
            "Meta Ads Manager",
            "Google Ads",
            "Meta Business Manager",
            "Google Sheets",
            "AI deployment platforms",
            "Web marketing tools",
            "Dashboard systems",
            "Supermetrics",
            "Claude / GPT / Gemini",
            "Budget trackers",
            "Approval sheets",
            "Asset management sheets",
            "Audience targeting tools",
            "Vendor account management systems"
          ]
        },
        {
          "title": "Common Failure Points",
          "items": [
            "Payment delays to prepaid ad accounts",
            "Delayed creative approvals; improper creative tagging",
            "Platform policy violations → account suspension",
            "Delayed EC approvals; credit line exhaustion; asset access loss",
            "Poor inter-team coordination; incorrect audience mapping",
            "Budget overspend/underutilisation; incomplete dashboard reporting"
          ]
        }
      ],
      "escalation": [
        [
          "Page restriction",
          "Team Lead + Leadership",
          "Immediate"
        ],
        [
          "Ad account suspension",
          "Platform operations lead",
          "Immediate"
        ],
        [
          "Budget overspend",
          "Campaign Lead",
          "Same day"
        ],
        [
          "Credit line exhaustion",
          "Finance/Vendor coordination",
          "Immediate"
        ],
        [
          "EC approval delay",
          "Party PoC + Approval team",
          "Same day"
        ],
        [
          "Missing creatives/captions",
          "Concerned comms team",
          "Immediate"
        ]
      ],
      "category": "ops",
      "function": "Paid Media & Operations",
      "skills": {
        "must": [
          "Meta Ads Manager operations",
          "Google Ads operations",
          "Political advertising compliance understanding",
          "Budget planning and pacing",
          "Ownership of tasks",
          "Dashboard management",
          "Campaign optimization",
          "Cross-team coordination",
          "Crisis and escalation handling",
          "Attention to detail — technical expertise in Meta and Google ads management",
          "Reporting discipline",
          "Creative/Content understanding",
          "Basic and advanced data analysis",
          "Excellent grip on analytical tools"
        ],
        "nice": [
          "Election campaign understanding",
          "Narrative intelligence",
          "Vendor management",
          "SQL & Python + PowerBI for data analysis",
          "Platform policy knowledge",
          "Competitive analysis capabilities",
          "Regional/multiple language coordination"
        ]
      },
      "budgetStrategy": {
        "purpose": "Budget allocation is determined based on multiple campaign and audience variables; budget is then divided across platforms, objectives and geographies, and continuously optimised against narrative traction and opposition activity.",
        "inputs": [
          "Campaign duration",
          "Geography",
          "Audience size",
          "Gender split",
          "Age segmentation",
          "Platform suitability",
          "Campaign objective",
          "Opposition activity",
          "Available operational infrastructure (No. of pages)"
        ],
        "steps": [
          "Meta vs Google (split between the two or only one)",
          "Awareness vs Engagement (split between the two or only one)",
          "Ghost ads vs posted ads (split between the two or only one)",
          "State-wise allocation",
          "Narrative-wise allocation",
          "Vendor/account-wise distribution"
        ],
        "additional": [
          "Narrative traction",
          "Spend pacing",
          "Platform performance",
          "Campaign urgency",
          "Election timelines",
          "Opposition campaign activity"
        ]
      },
      "phases": [
        {
          "ph": 1,
          "name": "Foundation / Slow Build",
          "sub": "Pre-MCC Early",
          "focus": "Infrastructure readiness and asset preparation",
          "act": ["Page creation","Verification","Disclaimer setup","Account preparation","Audience planning","Vendor alignment"],
          "output": "Campaign-ready advertising infrastructure",
          "intensity": "low",
          "teams": ["Growth","Comms","Vendors","Leadership"]
        },
        {
          "ph": 2,
          "name": "Acceleration / Build-Up",
          "focus": "Narrative amplification and audience building",
          "act": ["Awareness campaigns","Engagement campaigns","Audience testing","Budget scaling","Dashboard setup"],
          "output": "Narrative penetration and audience traction",
          "intensity": "medium",
          "teams": ["Growth","Comms","SMCC","Vendor","Leadership"]
        },
        {
          "ph": 3,
          "name": "Peak Campaign",
          "sub": "MCC / Election Period",
          "focus": "Maximum campaign scale and operational continuity",
          "act": ["High-volume campaign deployment","EC approvals","Ghost ads","Spend optimization","Crisis handling","Multi-account operations"],
          "output": "High narrative reach and sustained campaign visibility",
          "intensity": "very-high",
          "teams": ["All teams"]
        },
        {
          "ph": 4,
          "name": "Conversion / Voting Phase",
          "focus": "Targeted amplification and voter conversion",
          "act": ["Hyper-targeted campaigns","Last-mile communication","Rapid optimization","Controlled spend pacing"],
          "output": "Maximum narrative retention and voter action",
          "intensity": "very-high",
          "intensityNote": "but targeted",
          "teams": ["All teams"]
        },
        {
          "ph": 5,
          "name": "Post-Campaign / Cool Down",
          "sub": "Post MCC",
          "focus": "Reporting, asset stabilization, and closure",
          "act": ["Final reporting","Spend reconciliation","Asset recovery","Dashboard closure","Campaign analysis"],
          "output": "Operational closure and reporting visibility",
          "intensity": "low",
          "teams": ["Growth","Reporting","Leadership"]
        }
      ]
    },
    {
      "id": "influencer",
      "name": "Influencer Management",
      "icon": "🎙️",
      "function": "Creator Network",
      "tagline": "Converts paid messaging into earned credibility via a curated army of trusted regional voices.",
      "purpose": "Converts paid messaging into earned credibility by routing campaign narratives through a curated, regionally distributed army of trusted voices instead of broadcast channels alone. Without it, the campaign is forced to depend on top-down media buys, official spokespersons and party handles — all perceived as paid propaganda. Conversion rates fall, narrative penetration (especially India 1 geographies) collapses, opposition messaging dominates social media, and cultural moments are lost.",
      "philosophy": [
        "Build, brief and operate a network of trusted voices: macro influencers, micro-influencers, page admins, vernacular creators, citizen journalists and cultural figures, who carry the campaign's narrative into communities that institutional media cannot reach.",
        "The modern voter with an ever decreasing attention span trusts a relatable face that can dissect and distribute the narrative tailored down to each cohort in the audience."
      ],
      "structure": [
        {
          "role": "Head of Influencer Narrative Network (1)",
          "detail": "Owns strategy, creator cohort selection, leadership reporting, and direct line to the Campaign Manager."
        },
        {
          "role": "Creator Relationship Executives",
          "detail": "Front-line; one executive typically handles 25–40 active creators; brief delivery, content review, follow-ups, and crisis communication with the creator."
        }
      ],
      "scaleNote": "25–40 creators per executive",
      "coreFunctions": [
        {
          "title": "Key Responsibilities",
          "items": [
            "Onboarding & Execution — Sourcing, vetting, onboarding and retaining a tiered roster of influencers across languages, geographies and content categories (political, lifestyle, devotional, sports, comedy, news, youth, women-led, agri, student)",
            "Creative Guidance — Executing narrative rollouts by translating talking points into infopacks, creator briefs, sample reels, captions and hashtags that creators can post natively without sounding scripted",
            "Daily Operations — Managing the day-to-day pipeline of content commissioning, approvals, scheduling, posting windows, cross-amplification, and deletion/correction protocols when something goes off-script",
            "KPI-based Measurement — Reach, sentiment shift, hashtag dominance, comment-section sentiment, and voter-intent/brand-intent movement in target segments",
            "Relationship Building — Establishing relationships, contracts, payments and creator confidentiality including NDAs, exclusivity windows and incentivising creators to organically produce pro-party content"
          ]
        },
        {
          "title": "Role in Campaign Flow",
          "items": [
            "Input from QRT (daily narrative line, attack/defence priorities), Research & Data (target segments, geo heat-maps, sentiment dashboards), Field Intelligence (on-ground sentiment, viral local moments)",
            "Internal — Translate the strategic narrative into creator-native formats; match the right narrative to the right creator tier and language; brief the creator with an infopack; review drafts; approve final cuts; schedule synchronized rollouts across micro-clusters; monitor performance and trolling response"
          ]
        },
        {
          "title": "Working Logic",
          "items": [
            "Influence as a distributed network, not a single broadcast",
            "Instead of one big ad, 200 small voices say the same idea in 200 culturally-native ways within the same window — making the message look like an organic public mood rather than a campaign",
            "Key dependency: tight daily feedback loop with narrative/research — if narrative changes at 11 AM, creator briefs must update by 1 PM and first reels live by 6 PM",
            "Embedded cultural knowledge — regional executives live inside their language's meme economy, devotional calendar, sports moods, exam cycles and festival cycles, so content is timed to the audience's mental state, not the campaign's calendar"
          ]
        },
        {
          "title": "NexGrow ↔ Varahe Coordination Framework",
          "items": [
            "Campaign Initiation — NexGrow prepares a comprehensive plan (suggestive narrative points aligned to communication objective, proposed creator count, execution timeline, budget outline); submitted to VA for review",
            "Approval & Go-Ahead — Varahe team evaluates the plan and, upon approval, communicates a formal go-ahead along with the sanctioned budget; this triggers execution",
            "Creator Deployment & Alignment — Based on budget, NexGrow deploys creators per the approved narrative framework; as the campaign progresses, additional creators are identified, approached and aligned to evolving narrative requirements or shifting market conditions",
            "Daily Reporting — NexGrow shares a daily overview with VA covering total budget deployed to date and the number and details of creators engaged"
          ]
        }
      ],
      "skills": {
        "must": [
          "Native fluency in at least one regional language and deep cultural literacy of that geography",
          "Creator-relationship management: emotional intelligence, negotiation, and the ability to make a creator feel like a partner, not a vendor",
          "Narrative writing: converting a 2-line party positioning directive into a 90-second reel script, a tweet thread, and a vernacular caption",
          "Speed — ability to move from brief to live content in under 6 hours during peak phase",
          "Crisis instinct — pattern recognition for when a piece of creator content is about to go wrong, and the discipline to pull it before it does"
        ]
      },
      "functionScope": [
        [
          "Onboarding & Execution",
          "Sourcing, vetting, onboarding and retaining a tiered roster of influencers across languages, geographies and content categories (political, lifestyle, devotional, sports, comedy, news, youth, women-led, agri, student)"
        ],
        [
          "Creative Guidance",
          "Executing narrative rollouts by translating talking points into infopacks, creator briefs, sample reels, captions and hashtags that creators can post natively without sounding scripted"
        ],
        [
          "Daily Operations",
          "Managing the day-to-day pipeline of content commissioning, approvals, scheduling, posting windows, cross-amplification, and deletion/correction protocols when something goes off-script"
        ],
        [
          "KPI-based Measurement",
          "Delivering measurable narrative penetration — reach, sentiment shift, hashtag dominance, comment-section sentiment, and voter-intent/brand-intent movement in target segments"
        ],
        [
          "Relationship Building",
          "Establishing relationships, contracts, payments and creator confidentiality including NDAs, exclusivity windows and incentivising creators to organically produce pro-party content"
        ]
      ],
      "speedTimeline": [
        {
          "t": "11 AM",
          "e": "Narrative changes"
        },
        {
          "t": "1 PM",
          "e": "Creator briefs updated"
        },
        {
          "t": "6 PM",
          "e": "First reels live"
        }
      ],
      "category": "creative"
    },
    {
      "id": "legal",
      "name": "Legal Team",
      "icon": "⚖️",
      "category": "ops",
      "function": "Compliance & Legal",
      "tagline": "Ensures all campaign activity remains compliant with ECI, MCC and election law.",
      "purpose": "Ensures that all campaign activities, political advertisements, candidate operations, and ground-level election activities remain fully compliant with Election Commission of India (ECI) guidelines, election laws, and Model Code of Conduct (MCC) regulations. Without it: rejection of advertisements and TVCs, MCC violations, delayed permissions, legal notices, compliance gaps, and operational disruptions. Also safeguards the campaign from operational disruption and reputational damage by handling complaints, monitoring compliance, and addressing legal issues in real time.",
      "structure": [
        {
          "role": "Manager (1)",
          "detail": "Supervises strategy, escalations, coordination with party legal cell and senior leadership; ensures smooth functioning of overall legal process."
        },
        {
          "role": "Consultants (3–4)",
          "detail": "MCMC approvals, permissions, compliance, nomination support, complaint drafting, tracker management, coordination with other teams, Party legal cell, and authorities."
        }
      ],
      "sizing": {
        "min": "3 members (preferably one local resource from the state)",
        "ideal": "4 members for active campaign operations",
        "scale": "Large or high-intensity campaign states — constituency volume, permissions, nominations, MCC compliance, and polling-day escalations increase operational workload."
      },
      "skills": {
        "must": [
          "Strong understanding of ECI guidelines, MCC, RPA 1951, and nomination procedures",
          "Drafting skills for complaints, representations, SOPs, and compliance formats",
          "Coordination skills for working with candidates, authorities, and internal teams",
          "Fast issue-spotting and escalation judgment during campaign and polling period",
          "Knowledge of election commission compliance and relevant procedure",
          "Ability to work under tight timelines and high-pressure election environments"
        ],
        "nice": [
          "Political campaign experience",
          "Social media law and digital compliance understanding",
          "Public policy knowledge",
          "Litigation exposure",
          "Data management and reporting skills"
        ]
      },
      "coreFunctions": [
        {
          "title": "Key Responsibilities",
          "items": [
            "MCMC approvals & legal vetting of political advertisements, creatives, scripts, social media content, and campaign material across GDNs, TVCs, Radio Jingles, Print Ads, SMS, OBDs, and digital campaigns",
            "Executes appeals, representations, complaints, and submissions before the ECI, CEO Office, MCMC, District Authorities, and other election officials",
            "Manages permissions and compliance for LED/Video Vans, rallies, public meetings, star campaigner vehicles, silent period communication, and other regulated campaign activities",
            "Handles criminal antecedent compliance and statutory filings including C-1, C-2, C-7, and C-8 forms",
            "Coordinates with Communications, Campaigns, CMS, PI, and Media Teams, State Legal Cell, and election authorities",
            "Monitors social media, opposition violations, MCC breaches, electoral offences, and election-day incidents, and escalates complaints before relevant authorities",
            "Supports GOTV and polling-day operations through legal escalation, sensitive booth monitoring, incident resolution, and liaison with police, observers, and election officials",
            "Conducts legal training sessions and prepares SOPs, primers, compliance decks, checklists, operational advisories, and guidance documents"
          ]
        },
        {
          "title": "Working Logic",
          "items": [
            "Integrates legal compliance into every operational and communication layer of the campaign",
            "Proactively reviews campaign material, secures permissions, resolves election-related disputes, and coordinates with Election Commission authorities to minimise legal risks",
            "Impact: uninterrupted campaign operations, reduced advertisement rejections, mitigating MCC violations, protecting candidate interests, and enabling rapid legal escalation handling",
            "Key dependency: Continuous coordination with Communications Team, Campaign Team, PI Team, Party State Legal Cell, Political Leadership, and Election Commission officials"
          ]
        },
        {
          "title": "Daily Workflow",
          "items": [
            "Morning — reviewing overnight approvals and rejections, coordinating follow-ups with MCMC, internal teams and CEO offices, updating internal trackers, addressing urgent field escalations, and conducting coordination calls",
            "Entire Day — submission of creatives and permissions, drafts complaints and representations, coordinates with internal teams, Party Legal Cell and ECI officials, resolves CMS team queries, scrutinizes candidate documentation, disseminates approval certificates, tracker consolidation and reporting"
          ]
        },
        {
          "title": "Tools & Platforms",
          "items": [
            "Google Sheets / Google Doc",
            "PowerPoint Presentations",
            "Complaint & Approval Trackers",
            "Eci.net",
            "cVIGIL",
            "E-SUVIDHA (CEO/ECI Submission Portal)",
            "Social Media Monitoring Platforms"
          ]
        },
        {
          "title": "Common Failure Points",
          "items": [
            "Delayed document submission by candidates and incomplete details",
            "MCMC rejection due to non-compliant content",
            "Incorrect vehicle documentation",
            "Delayed escalation to authorities",
            "Improper tracking of approvals",
            "Communication gaps between teams"
          ]
        }
      ],
      "example": "A video creative is received from the communications team for immediate release. The legal team first vets the script and visuals for MCC compliance, AI disclosure, religious references, and other rejection risks; after corrections, it files the application before MCMC, follows up for approval, obtains the certificate, and shares the cleared approval with the communications team for dissemination.",
      "phases": [
        {
          "ph": 1,
          "focus": "Establishing legal team structure, understanding ECI procedures, establishing coordination with election authorities & Party Legal Cell, and building coordination mechanisms with internal teams",
          "act": [
            "Preparing SOPs and legal frameworks",
            "Coordinating with the State Legal Cell",
            "Understanding local ECI processes",
            "Creating trackers and documentation systems",
            "Drafting compliance checklists",
            "Conducting preliminary training sessions for campaign teams"
          ],
          "intensity": "low",
          "teams": [
            "Legal Team",
            "State Legal Cell",
            "Communications Team",
            "Campaigns Team",
            "PI Team",
            "Research Team",
            "Party Coordination Team"
          ]
        },
        {
          "ph": 2,
          "focus": "Strengthening legal operations, streamlining approval mechanisms, and ensuring campaign preparedness before the MCC period intensifies",
          "act": [
            "Coordinating with MCMC officials",
            "Legally vetting campaign creatives and speeches",
            "Initiating permission processes",
            "Monitoring opposition violations",
            "Drafting representations",
            "Conducting legal training for CMS POCs"
          ],
          "intensity": "medium",
          "teams": [
            "Legal Team",
            "Communications Team",
            "Campaigns Team",
            "CMS Team",
            "State Legal Cell"
          ]
        },
        {
          "ph": 3,
          "focus": "Managing high-volume legal operations, ensuring uninterrupted campaign execution, and maintaining full compliance during the active election period",
          "act": [
            "Obtaining MCMC approvals",
            "Processing vehicle and campaign permissions",
            "Verifying nominations and affidavits",
            "Drafting complaints and representations",
            "Handling escalations",
            "Real-time legal support to campaign teams"
          ],
          "intensity": "very-high",
          "teams": [
            "Legal Team",
            "Communications Team",
            "Campaigns Team",
            "Media Team",
            "CMS Team",
            "State Legal Cell"
          ]
        },
        {
          "ph": 4,
          "focus": "Providing polling-day legal support, resolving election-day violations, and ensuring smooth and lawful voting operations",
          "act": [
            "Managing GOTV legal operations",
            "Handling booth-level escalations",
            "Coordinating with Police and General Observers",
            "Reporting electoral offences",
            "Resolving voter-related issues",
            "Ensuring compliance during the silence period and polling process"
          ],
          "intensity": "high",
          "teams": [
            "Legal Team",
            "Communications Team",
            "Campaigns Team",
            "Media Team",
            "CMS Team",
            "State Legal Cell"
          ]
        },
        {
          "ph": 5,
          "focus": "Compiling campaign learnings, documenting legal operations, and preparing post-election reports and compliance records",
          "act": [
            "Preparing closure reports",
            "Compiling approval and complaint data",
            "Documenting legal learnings",
            "Archiving trackers and representations",
            "Conducting internal review meetings"
          ],
          "intensity": "low",
          "teams": [
            "Legal Team"
          ]
        }
      ],
      "statutoryForms": [
        {
          "form": "C-1",
          "desc": "Criminal antecedents / statutory filing under election compliance"
        },
        {
          "form": "C-2",
          "desc": "Criminal antecedents / statutory filing under election compliance"
        },
        {
          "form": "C-7",
          "desc": "Criminal antecedents / statutory filing under election compliance"
        },
        {
          "form": "C-8",
          "desc": "Criminal antecedents / statutory filing under election compliance"
        }
      ],
      "ipo": [
        {
          "stage": "Input",
          "items": [
            "Scripts and creatives from Communications/Campaigns Team",
            "Documents from State Legal Cell",
            "Candidate affidavit",
            "Vehicle details from Campaigns Team",
            "Complaints and field issues from CMS/ground teams",
            "Election notifications and ECI circulars"
          ]
        },
        {
          "stage": "Process",
          "items": [
            "Legal vetting",
            "Compliance review",
            "MCC scrutiny",
            "Documentation",
            "Drafting representations",
            "Filing applications",
            "Escalation handling",
            "Coordination with ECI officials"
          ]
        },
        {
          "stage": "Output",
          "items": [
            "Approved creatives and certificates",
            "Cleared nominations and affidavits",
            "Vehicle and campaign permissions",
            "Legal advisories and SOPs",
            "Complaint filings and escalations",
            "Poll-day issue resolution support"
          ]
        }
      ]
    },
    {
      "id": "media",
      "name": "Media Team",
      "icon": "📰",
      "category": "intel",
      "function": "Media Intelligence",
      "tagline": "Monitor, analyze, and shape media narratives across print, electronic, and digital platforms.",
      "purpose": "Addresses the critical need for real-time tracking and analysis of narratives across print, electronic, and digital platforms. Supports the client by providing research inputs, drafting communication materials, and ensuring consistent dissemination of press notes and pro-client narratives. In the absence of this team, systematic media tracking would be severely compromised, leading to gaps in narrative awareness, delayed responses, and weakened coordination between the client and media stakeholders.",
      "structure": [
        {
          "role": "Team Lead",
          "detail": "Oversees the two primary verticals — Media Monitoring and Party Coordination — and is responsible for managing overall operations, strategic direction, and inter-team coordination. Reports directly to the Communications Lead."
        },
        {
          "role": "Managers (2)",
          "detail": "Two managers oversee one vertical each, ensuring smooth execution of daily operations and team coordination."
        },
        {
          "role": "Media Associates",
          "detail": "Responsible for monitoring, reporting, and coordination tasks across assigned states, with approximately 4–5 associates handling smaller states and 7–8 associates managing larger states."
        }
      ],
      "sizing": {
        "min": "2 Media Associates — sufficient to manage essential media monitoring, reporting, and client deliverables during non-campaign periods",
        "ideal": "6 Media Associates and 2 Vertical Managers — split into Media Monitoring and Party Coordination verticals",
        "scale": "Scales further based on campaign intensity, media volume, and coordination requirements during election periods"
      },
      "skills": {
        "must": [
          "Strong political acumen and understanding of the media and political landscape",
          "Proficiency in local languages for effective media tracking and regional coordination",
          "Strong writing and communication skills, with the ability to draft clear, concise, and media-friendly content"
        ],
        "nice": [
          "Prior experience or background in media, journalism, or political communication",
          "Media liaisoning and stakeholder coordination skills"
        ]
      },
      "coreFunctions": [
        {
          "title": "Key Responsibilities",
          "items": [
            "Responsible for media monitoring, narrative analysis, and assessment of client and opposition coverage across print, electronic, and digital platforms",
            "Prepares and delivers media coverage reports, speech pointers, article inputs, and press notes to support informed communication and strategic outreach",
            "Manages coordination with the party's media team and oversees press release-related activities to ensure timely dissemination of information",
            "Coordinates with Client's media unit",
            "Delivers media monitoring and media coverage reports, speech pointers, article pointers and press notes"
          ]
        },
        {
          "title": "Role in Campaign Flow",
          "items": [
            "Input Received — media monitoring feeds, client mandates, leadership directives, political developments, and research inputs (coordinates with Research, Campaign, Analytics, Digital, Party Coordination)",
            "Core Work — identifies and prioritises actionable narratives, conducts media research and analysis, develops explainers, drafts media-friendly communication, prepares strategic content (assists Quick Response, Digital, Research, Campaign)",
            "Outputs delivered — media monitoring reports, narrative assessments, speech pointers, press notes, articles, and communication briefs (supports Communications, Digital, Research, Campaign)"
          ]
        },
        {
          "title": "Working Logic",
          "items": [
            "Continuously monitors mainstream media, identifies actionable narratives, assesses narrative penetration, recommends strategic counter-narratives aligned with the client's objectives",
            "Supports communication efforts through media research, speech inputs, press notes, and narrative-driven content",
            "Contributes to campaign success by shaping and responding to narratives in mainstream media, enabling timely communication, informed decision-making, and coordinated media outreach",
            "Key dependencies: active client involvement, effective media management, and close coordination with research, campaign, and communication teams"
          ]
        },
        {
          "title": "Daily Workflow",
          "items": [
            "Morning (9–11 AM) — Tracking top national and regional headlines, analysing newspaper coverage, identifying actionable narratives, monitoring narrative penetration, conducting narrative calls, sharing morning media updates, and reviewing client mandates and priority tasks",
            "Afternoon (12–5 PM) — Executing client mandates such as preparing speech pointers, press inputs, and media briefs; providing timely media updates to the client and internal teams; compiling media round-up reports, narrative assessments, and research-based deliverables",
            "Evening (6–10 PM) — Monitoring prime-time debates, special programmes, and breaking developments across media platforms, while tracking emerging and actionable narratives for further escalation and strategic response"
          ]
        },
        {
          "title": "KPIs",
          "items": [
            "Daily Deliverables — print media coverage reports, electronic media coverage reports, bi-hourly media updates, narratives-of-the-day reports, editorial reports, press pointers, speech pointers, article inputs, press notes",
            "Weekly Deliverables — consolidated compilations of daily reports, key media developments, major narratives, important political updates of the week",
            "Quality — accuracy, relevance, and strategic value of narratives flagged; clarity, effectiveness, and media suitability of speech pointers/press inputs; consistency and comprehensiveness of monitoring",
            "Speed — real-time or near real-time dissemination of media updates and narrative alerts; quick turnaround for client mandates, speech inputs, press notes, urgent media deliverables"
          ]
        },
        {
          "title": "Tools & Platforms",
          "items": [
            "Direct monitoring of newspapers, news channels, digital media platforms, and social media",
            "Varahe Newscore Platform",
            "Clipchamp",
            "Google Studio",
            "NordGPT",
            "Perplexity",
            "ChatGPT",
            "National and regional digital media platforms, local news channels, newspapers, and social media platforms"
          ]
        },
        {
          "title": "Coordination with Other Teams",
          "items": [
            "Works closely with the client's media team, communications team, research teams, and campaign units",
            "Depends on client mandates, leadership priorities, campaign requirements, and the evolving media and news cycle",
            "Reports to the client's media team, communications leadership, and senior organisational leadership through regular media updates, narrative reports, and strategic communication deliverables"
          ]
        },
        {
          "title": "Common Failure Points",
          "items": [
            "Critical news developments or important narratives may occasionally be missed or not escalated in a timely manner due to the fast-paced and high-volume nature of media monitoring",
            "Since Media Associates are often freshers or newly onboarded, there can be gaps in political understanding or contextual interpretation of issues with long-term strategic relevance",
            "Media monitoring primarily relies on publicly available reporting which can provide only surface-level information; deeper political, policy, or strategic insights may require additional research and cross-team coordination"
          ]
        }
      ],
      "escalation": [
        [
          "Important news developments, media narratives, or sensitive political issues identified through monitoring",
          "Internal teams, client communication channels, and relevant stakeholders through official escalation channels (primarily WhatsApp groups and reporting systems)",
          "Real-time / Immediate"
        ],
        [
          "Actionable narratives requiring strategic response",
          "Communications, research, and media coordination teams",
          "Within minutes of identification"
        ],
        [
          "Speech pointers, press inputs, and narrative explainers",
          "Client leadership, spokespersons, and media teams",
          "Within 1–2 hours"
        ],
        [
          "Media coverage reports and detailed documentation",
          "Client and internal leadership teams",
          "As per reporting cycle"
        ]
      ],
      "phases": [
        {
          "ph": 1,
          "focus": "Building the media team structure, understanding the state's media landscape, and establishing coordination and escalation mechanisms",
          "act": [
            "Mapping regional media",
            "Liaisoning with local units",
            "Setting up monitoring systems",
            "Onboarding/training team members"
          ],
          "intensity": "low",
          "teams": [
            "Media Monitoring",
            "Party Coordination",
            "Local Units",
            "Communications",
            "Research"
          ]
        },
        {
          "ph": 2,
          "focus": "Strengthening media management, increasing team visibility, and enhancing narrative positioning for the client",
          "act": [
            "Providing media monitoring reports",
            "Pushing favorable narratives",
            "Drafting and circulating press pointers",
            "Facilitating ghost articles and strategic media outreach"
          ],
          "intensity": "medium",
          "teams": [
            "Media Monitoring",
            "Party Coordination",
            "Communications",
            "Research",
            "Client Media Unit"
          ]
        },
        {
          "ph": 3,
          "focus": "Establishing real-time media coordination with the client and ensuring strong alignment with national campaign narratives during the election period",
          "act": [
            "Setting up and operating a dedicated media room with the party",
            "Coordinating continuously with the national team",
            "Aligning state-level communication with national narratives",
            "Intensively pushing press conferences, articles, and strategic media content"
          ],
          "intensity": "very-high",
          "teams": [
            "Media Monitoring",
            "Party Coordination",
            "National Communications",
            "Client Media Unit",
            "Research",
            "Campaign"
          ]
        },
        {
          "ph": 5,
          "focus": "Ensuring continuity in media monitoring and narrative coordination during the post-election transition and government formation period",
          "act": [
            "Tracking post-election media narratives",
            "Coordinating with national teams on sensitive or high-impact developments",
            "Monitoring government formation coverage",
            "Managing important media escalations and communication requirements"
          ],
          "intensity": "low",
          "teams": [
            "Media Monitoring",
            "National Communications",
            "Client Media Unit",
            "Party Coordination"
          ]
        }
      ]
    },
    {
      "id": "narrative",
      "name": "Narrative Team (QRT)",
      "icon": "💡",
      "category": "intel",
      "function": "Narrative & Research",
      "tagline": "Identifies issues and converts them into narratives, infopacks, speech pointers and ideation.",
      "purpose": "The Quick Response Team identifies state/national issues and crafts narrative aligned with the client's messaging to the relevant target groups. Without QRT, teams cannot pick narratives crucial to the client.",
      "structure": [
        {
          "role": "PD",
          "detail": "Overall direction."
        },
        {
          "role": "Manager",
          "detail": "Direction on identifying patterns and narratives."
        },
        {
          "role": "Team Lead",
          "detail": "Takes the narrative and directs executives to convert into the desired output."
        },
        {
          "role": "Executives",
          "detail": "Convert TL/Manager directions into deliverables."
        }
      ],
      "coreFunctions": [
        {
          "title": "Responsible for",
          "items": [
            "Narratives",
            "Ideation",
            "Identifying the patterns"
          ]
        },
        {
          "title": "Coordinates With",
          "items": [
            "Leadership team",
            "Media team",
            "Communications team",
            "Campaigns team",
            "NexGrow team",
            "Partnership team"
          ]
        },
        {
          "title": "Delivers",
          "items": [
            "Narrativized Infopacks",
            "Media Pointers",
            "PPTs",
            "Book Reviews",
            "Narrativized Research Documents",
            "Campaign ideas",
            "Communication ideas",
            "Themes for the major milestones of the client",
            "Counters for the ecosystem's fake claims",
            "Narrative and issue tracking reports",
            "Articles — Ghost writing and Byline writing",
            "Speech Pointers",
            "Long-term research",
            "Influencers messaging",
            "Bharat Darpan",
            "Project Nandaka",
            "The Indian Matrix on all social media platforms"
          ]
        },
        {
          "title": "Working Logic",
          "items": [
            "Identifies issues, patterns and narrativisation",
            "Outputs flow to communications, campaigns, influencers, leadership",
            "Central piece of campaign messaging — no key dependency"
          ]
        },
        {
          "title": "Tools & Platforms",
          "items": [
            "Tools: Gemini, Claude, Chat GPT",
            "Platforms: Instagram, X, all media platforms"
          ]
        },
        {
          "title": "Coordination & Reporting",
          "items": [
            "Works closely with Communications, Media, Nexgrow and Partnership Program",
            "Depends on Research, Media and PI",
            "Reports to Shreyas Bharadwaj and Karthik Kamanna"
          ]
        }
      ],
      "kpis": [
        ["Narrativized Infopacks", ""],
        ["Media Pointers", ""],
        ["PPTs", ""],
        ["Book Reviews", ""],
        ["Narrativized Research Documents", ""],
        ["Campaign ideas", ""],
        ["Communication ideas", ""],
        ["Themes for the major milestones of the client", ""],
        ["Counters for the ecosystem's fake claims", ""],
        ["Narrative and issue tracking reports", ""],
        ["Articles — Ghost writing and Byline writing", ""],
        ["Speech Pointers", ""],
        ["Long-term research", ""],
        ["Influencers messaging", ""],
        ["Bharat Darpan", ""],
        ["Project Nandaka", ""],
        ["The Indian Matrix on all social media platforms", ""]
      ],
      "example": {
        "title": "Connecting the Crucial Dots — Red Fort Blast",
        "content": "Post the Red Fort blast, QRT launched a high-intensity campaign against what it termed white-collar terrorism. As a result, the incident, which might otherwise have been treated as just another terror attack, gave rise to the now widely used term 'white-collar terrorism' — a phrase that has since been repeatedly invoked by media and social media platforms while discussing similar incidents. QRT connected the dots between the education of the terrorists and their terror activities and established the fact that it is the mentality of the quom that follows a book to create chaos, no matter what their level of education is. Narrativized infopacks, media pointers, influencer messaging, and other forms of messaging pieces were disseminated to the concerned teams to pick up the narrative."
      },
      "skills": {
        "must": [
          "Understanding of political nuances",
          "Narrativization",
          "Creativity to convert the issue and narrative into the desired output",
          "Issue tracking"
        ],
        "nice": [
          "Understanding of multiple states' political nuances"
        ]
      }
    },
    {
      "id": "non-meta",
      "name": "Non-Meta Digital Ads",
      "icon": "📡",
      "category": "ops",
      "function": "Paid Media & Operations",
      "tagline": "GDN, YouTube, PG Deals, DV360, OTT, Apps and Telecom Ads.",
      "purpose": "Non_Meta Digital Ads consist of GDN(Google Display Network), YouTube, PG Deals(Direct Deal with the Websites), DV360 (Miscellaneous), OTT, Apps, and Telecom Ads. GDNs, YT, PG Deals, DV360, Apps, and OTT ads help us target voters everywhere. Telecom Ads should be planned separately from everything else as we use them in the last phase and the purpose of those ads is a bit different from the rest.",
      "structure": [
        {
          "role": "2 Managers",
          "detail": "One to coordinate with the content creation team, and the other to coordinate with GTS, legal team, Nexgrow, and Vendors."
        },
        {
          "role": "Content Writers",
          "detail": "Four content writers are required for a few days as and when the work is required. But one dedicated content writer is required throughout the ad campaign for legal team docs and primary content QC."
        },
        {
          "role": "5 Graphic Designers + 3 Video Editors",
          "detail": "For designing and resizing of the deliverables."
        }
      ],
      "coreFunctions": [
        {
          "title": "Documentation — Two Master Sheets",
          "items": [
            "Telecom Ads Master Sheet — AC number, AC Name, Narrative, Campaign Unique ID, TG geographical description, and Cohort to be targeted",
            "Comms internal sheet — content writers, graphic designers, and video editors; all your content will be in this sheet",
            "Vendor sheet — AC number, AC name, Pin Codes, LatLong, and Content link",
            "Drive folders to upload all the content according to the unique ID names for each",
            "Other Non-Meta — One tracker with tabs: budget allocation and daily spend; content sizes and content formats; each section dedicated tab"
          ]
        },
        {
          "title": "Vertical Operations",
          "items": [
            "GDNs and YouTube — coordination with the Nexgrow team; share Master sheet, location, amount to be spent, and duration",
            "PG Deals, DV360, OTT, Apps — managed by the vendor; clear and daily communication with the vendor; take written feedback (ideally in a group); enquire daily about the implementation",
            "Telecom Ads — managed by the vendor; clear and precise timeframe at least 15 days before the day of polling; finalize number of creatives, number of sets, and number of constituencies with the vendor"
          ]
        },
        {
          "title": "Key Notes",
          "items": [
            "Coordination with several teams is crucial. Nexgrow, GTS, legal team, and most importantly vendor coordination is critical to the success of this project.",
            "ARC PoC has to be involved right from the beginning. From documentation, to drive folders creation, and Unique ID has to be in coordination with the ARC PoC.",
            "Dashboard/reports from each team is important for the campaign closure report."
          ]
        }
      ],
      "references": [
        {
          "label": "Non-Meta Digital Ads Master Sheet Template",
          "url": "https://docs.google.com/spreadsheets/d/1CXedE18ArJCOzqgF5Hr8i2KhEq63Bl39Jz_LbWwYZ6s/edit?usp=sharing"
        },
        {
          "label": "Telecom Ads Master Sheet Template",
          "url": "https://docs.google.com/spreadsheets/d/1PrXp1KwdAJNpVFDhg4qF6Mtb5VHGFfSCn_zecYitouY/edit?usp=sharing"
        },
        {
          "label": "Telecom Ads Comms internal Template",
          "url": "https://docs.google.com/spreadsheets/d/1wsXCaLfOpN7vJd9YRgEA-SO8Kb5ZIxjyTA68ksow7R0/edit?usp=sharing"
        },
        {
          "label": "Telecom Ads Vendor Sheet",
          "url": "https://docs.google.com/spreadsheets/d/1hOkgEBoMpkEGmXc9rT2X7stgGHn-Tte5fKIqmqIq1Ec/edit?usp=sharing"
        }
      ],
      "pipelines": [
        {
          "title": "Telecom Ads Pipeline",
          "rows": [
            [
              "Strategy",
              "Define narratives and actionable goals for specific constituencies and booths.",
              "PI and Campaigns Teams"
            ],
            [
              "Production",
              "Develop copy, static graphics (GfX), and motion graphics.",
              "Comms Team"
            ],
            [
              "Quality Control",
              "Multi-stage review: Manager QC, Final QC.",
              "Telecom PoC"
            ],
            [
              "Documentation",
              "Upload to Drive with Unique IDs per narrative/constituency.",
              "ARC Team"
            ],
            [
              "Finalization",
              "Acquire Pincodes and LatLongs; populate the Vendor Copy Sheet.",
              "Analytics Team"
            ]
          ]
        },
        {
          "title": "Non-Meta Digital Ads Pipeline",
          "rows": [
            [
              "Scoping",
              "Define target locations and finalize asset counts (creatives/videos) based on budget.",
              "State Leadership"
            ],
            [
              "Development",
              "Write content, finalize designs, and resize assets for all platform verticals.",
              "Comms & Branding Teams"
            ],
            [
              "Broadcast Sync",
              "Integrate and coordinate TVC (Television Commercial) assets.",
              "GTS Team"
            ],
            [
              "Compliance",
              "Daily Coordination: Secure mandatory EC (Election Commission) approval for all creatives.",
              "Legal Team"
            ],
            [
              "Deployment",
              "Release assets in iterative sets to reflect changing narratives and Manifesto promises.",
              "Nexgrow Team and Vendors"
            ]
          ]
        }
      ],
      "downloads": [
        {
          "label": "Non-Meta Digital Ads Master Sheet Template",
          "url": "https://docs.google.com/spreadsheets/d/1CXedE18ArJCOzqgF5Hr8i2KhEq63Bl39Jz_LbWwYZ6s/edit?usp=sharing"
        },
        {
          "label": "Telecom Ads Master Sheet Template",
          "url": "https://docs.google.com/spreadsheets/d/1PrXp1KwdAJNpVFDhg4qF6Mtb5VHGFfSCn_zecYitouY/edit?usp=sharing"
        },
        {
          "label": "Telecom Ads Comms Internal Template",
          "url": "https://docs.google.com/spreadsheets/d/1wsXCaLfOpN7vJd9YRgEA-SO8Kb5ZIxjyTA68ksow7R0/edit?usp=sharing"
        },
        {
          "label": "Telecom Ads Vendor Sheet",
          "url": "https://docs.google.com/spreadsheets/d/1hOkgEBoMpkEGmXc9rT2X7stgGHn-Tte5fKIqmqIq1Ec/edit?usp=sharing"
        }
      ]
    },
    {
      "id": "party-coord",
      "name": "Party Coordination & Narrative Management",
      "icon": "🤝",
      "category": "ops",
      "function": "Stakeholder Management",
      "tagline": "The objective is not just coordination — it is controlled coordination.",
      "purpose": "A successful political communication strategist ensures that leadership feels heard, the party feels supported, operations remain structured, and strategy stays protected from chaos.",
      "coreFunctions": [
        {
          "title": "Establishing Authority Without Friction",
          "items": [
            "Enter as a solution partner, not as an agency/vendor",
            "Build credibility early through quick wins, responsiveness, and preparedness",
            "Always communicate with clarity, confidence, and data-backed reasoning",
            "Understand internal party hierarchy before operations begin",
            "Identify actual decision-makers vs influencers vs information carriers",
            "Respect political sensitivities, egos, and chain of command",
            "Never publicly contradict party leadership or senior functionaries",
            "Ensure party POCs are informed before major narrative pushes"
          ]
        },
        {
          "title": "Building Rapport — Relationship Management",
          "items": [
            "Maintain regular personal communication beyond task-based interactions",
            "Understand each POC's working style, political ambitions, and pressure points",
            "Give credit to party teams publicly wherever necessary",
            "Ensure party POCs feel included in strategy, not bypassed",
            "Be accessible during high-pressure news cycles and crisis",
            "Maintain composure even during emotional or aggressive conversations"
          ]
        },
        {
          "title": "Building Rapport — Trust Building",
          "items": [
            "Deliver on timelines consistently",
            "Never overpromise to impress leadership",
            "Share updates proactively before they ask",
            "Protect confidential discussions and internal disagreements",
            "Build confidence through preparedness in meetings and war-room discussions"
          ]
        },
        {
          "title": "Communication Discipline",
          "items": [
            "Define clear communication protocols from Day 1 — WhatsApp for urgent coordination, Daily narrative calls for narrative alignment, one clear approval chain for creatives/narratives",
            "Avoid parallel instructions from multiple leaders without clarification",
            "Always summarize verbal instructions in writing after meetings/calls",
            "Use concise updates: what was done, current status, pending approvals, risks/issues"
          ]
        },
        {
          "title": "Managing Expectations & Unrealistic Demands — Handling Pressure",
          "items": [
            "Political environments are emotionally driven; avoid reactive responses",
            "Separate urgency from importance",
            "Not every leader request needs instant execution",
            "Saying No diplomatically — never say 'This cannot be done'",
            "Instead: explain operational limitations, provide alternative solutions, suggest realistic timelines, use data/platform limitations to justify pushback, convert emotional demands into measurable objectives"
          ]
        },
        {
          "title": "Managing Leadership Requests",
          "items": [
            "Prioritize tasks based on electoral impact, narrative relevance, resource availability, platform performance",
            "Escalate conflicting instructions carefully and privately",
            "Avoid creating dependence on unsustainable execution models"
          ]
        },
        {
          "title": "Taking Operational Control",
          "items": [
            "Establish systems early",
            "Create centralized approval and escalation structures",
            "Define who approves: creatives, captions, ad spends, crisis responses",
            "Maintain structured reporting formats and dashboards",
            "Control through process — documentation creates operational authority",
            "Use daily trackers, content calendars and End of Day summaries",
            "Reduce chaos by converting verbal politics into documented workflows"
          ]
        },
        {
          "title": "Conflict Management",
          "items": [
            "Never take political disagreements personally",
            "Resolve disputes privately, never in group forums",
            "During internal conflicts — stay neutral, factual and process-oriented",
            "Maintain relationships across factions within the party structure",
            "Avoid becoming associated with one internal camp/group"
          ]
        },
        {
          "title": "Election-Time Coordination Best Practices",
          "items": [
            "Conduct daily morning narrative sync calls",
            "Maintain a real-time escalation group for urgent approvals",
            "Share feedback with party leadership regularly",
            "Ensure district-level and vidhan sabha level content alignment with central messaging",
            "Maintain backup plans for account restrictions, media attacks, legal notices and opposition misinformation"
          ]
        },
        {
          "title": "Professional Conduct",
          "items": [
            "Never become emotionally invested in internal politics",
            "Maintain discretion at all times",
            "Avoid informal political gossip within campaign structures",
            "Maintain written records of major approvals and strategic directions",
            "Be calm under pressure — campaign environments reward stability"
          ]
        }
      ]
    },
    {
      "id": "reporter",
      "name": "Reporter Network (RN)",
      "icon": "📹",
      "category": "intel",
      "function": "Field Intelligence",
      "tagline": "Decentralized field intelligence and content execution system — local presence converted to usable assets.",
      "purpose": "A decentralized field intelligence and content execution system built to provide rapid on-ground access, structured media inputs, and reliable operational support across geographically distributed environments. It exists to close the gap between central planning and field reality by converting local presence into usable assets, validated inputs, and auditable delivery.",
      "stats": [
        {
          "label": "Active States",
          "value": "14"
        },
        {
          "label": "Contact-Access States",
          "value": "7"
        },
        {
          "label": "Baseline Reporters",
          "value": "150–200"
        },
        {
          "label": "Election Surge",
          "value": "600+"
        },
        {
          "label": "Archival Retrieval",
          "value": "1–2 hrs"
        },
        {
          "label": "Fresh Shoot",
          "value": "24–48 hrs"
        },
        {
          "label": "Monthly Output",
          "value": "300–400 assets"
        },
        {
          "label": "Per-task rate",
          "value": "₹100–₹500"
        },
        {
          "label": "Payment cycle",
          "value": "15-day national"
        }
      ],
      "scaleNote": "AC-level expansion in election states",
      "recruitment": {
        "feeders": [
          "IPRD reports",
          "Personal/professional contacts",
          "Referrals from trusted sources"
        ],
        "criteria": [
          "Current employment and conflict sensitivity review",
          "Field reporting experience and ability to work with remote coordination",
          "Equipment readiness: camera or smartphone, microphone where available, and reliable data connectivity",
          "Location utility and responsiveness for district or AC-level access",
          "Acceptance of RN operating standards on authenticity, lawful filming, and non-fabricated submissions"
        ],
        "steps": [
          "Source identification and initial fit check",
          "Verification of experience, geography, and equipment readiness",
          "Orientation on assignment types, submission expectations, turnaround discipline, and payment logic",
          "Assignment to a state-specific or campaign-specific execution pool",
          "First-task activation with enhanced supervision until reliability is established"
        ],
        "content": [
          "Assignment types: vox pops, field visuals, issue-ground inputs, archival retrieval support, and special shoots",
          "Submission requirements: file naming, metadata, shot completeness, and delivery channels",
          "Quality standards: video clarity, audio usability, framing, duration, and adherence to brief",
          "Payment logic: task-specific payouts after QC validation and entry into state-wise payment sheets",
          "Conduct requirements: no coercion, no impersonation, no staged public reactions presented as genuine, and respect for legal and safety constraints"
        ]
      },
      "structure": [
        {
          "role": "Central Manager",
          "detail": "All states. National oversight, task ownership, delivery quality, escalation handling, payout governance, and leadership reporting. Final call on delivery acceptance, escalations, payout approval readiness, surge activation."
        },
        {
          "role": "RN Team Members ×3",
          "detail": "Assigned state clusters. Task intake tracking, field coordination, reporter management, deadline adherence, and quality follow-through. Reporter allocation, first-line escalation, reshoot recommendation."
        },
        {
          "role": "State / District / AC Reporters",
          "detail": "Defined territories or assignments. Ground collection, raw visuals, vox pops, local access, and time-bound submission. Field execution within approved brief."
        },
        {
          "role": "Internal Requestors / Page Managers",
          "detail": "Raise requests, provide brief clarity, receive approved data, and feed back on utilization. Approve brief intent and downstream use."
        }
      ],
      "coreFunctions": [
        {
          "title": "Operating Models",
          "items": [
            "Reactive execution — Page manager / internal team raises a task with location, narrative/content need, deadline, and deliverable requirement. RN assigns field reporters, conducts QC, and delivers approved assets to the internal team.",
            "Proactive ideation — RN identifies timely political or social topics with field value and proposes them internally. RN develops a basic outline, executes collection, and returns final assets for editing and publishing."
          ]
        },
        {
          "title": "Strategic Importance",
          "items": [
            "Speed — supports archival retrieval in 1–2 hours and fresh shoots within 24–48 hours depending on urgency and field complexity",
            "Coverage — maintains an always-available footprint across 14 active states, with 7 additional contact-access states for extension",
            "Scalability — scales from 150–200 active reporters in steady state to 600+ during election operations through AC-level deployment",
            "Cost efficiency — provides field outputs at a fraction of the cost of conventional production models that may require lakhs for single projects",
            "Continuity — preserves institutional memory through recurring reporter relationships, payment documentation, and archival discipline"
          ]
        },
        {
          "title": "Task Intake — Mandatory Inputs",
          "items": [
            "Topic or issue statement",
            "Location / geography",
            "Deadline and urgency level",
            "Content requirement (vox pop, visual package, issue scan, archival retrieval, interview support, etc.)",
            "Questionnaire / outline / reference prompts",
            "Any non-negotiable output conditions such as duration or shot list"
          ]
        },
        {
          "title": "Assignment Workflow",
          "items": [
            "Task received from page manager or internal stakeholder",
            "RN team reviews brief for clarity, feasibility, and timing",
            "Task is tagged as reactive execution or proactive ideation follow-through",
            "The appropriate reporter or reporter cluster is identified based on geography, reliability, and urgency",
            "Field briefs are communicated with deadlines, content requirements, and submission expectations",
            "RN team tracks execution until submission, QC, and final delivery are complete"
          ]
        },
        {
          "title": "Field Execution & Deliverables",
          "items": [
            "Primary deliverables — vox pops/public bytes, raw visuals from field locations, issue-ground inputs and context clips, archival retrieval, special interview or event-based field packages",
            "Video quality should be above 1080p wherever the device permits",
            "Background noise should be minimized to preserve usability",
            "Bytes should generally exceed 50 seconds when a byte is specifically requested",
            "Visual packages should generally exceed 60 seconds of usable footage where visuals are required",
            "Submission must match the approved brief in topic, location, and shot completeness",
            "Basic metadata should accompany every submission: location, date, reporter, and assignment reference"
          ]
        },
        {
          "title": "3-Layer QC",
          "items": [
            "Technical QC — resolution, audio, stability, file integrity, duration, visibility (material is editable and platform-usable)",
            "Brief QC — topic relevance, location match, requested responses/shots, completeness (submission materially addresses the request)",
            "Administrative QC — naming, metadata, submission mapping, payment-sheet eligibility (submission can be tracked, archived, and paid without ambiguity)"
          ]
        },
        {
          "title": "Reshoot Triggers",
          "items": [
            "Low audio intelligibility or disruptive background noise",
            "Wrong location or unverified context",
            "Missing visual support where a package was requested",
            "Insufficient duration for byte or visual requirement",
            "Off-brief responses or incomplete coverage",
            "File corruption or upload failure"
          ]
        },
        {
          "title": "Payment Operations",
          "items": [
            "Task-specific payouts — fixed rates generally range from ₹100 to ₹500 depending on state and assignment complexity",
            "Workflow — reporter submits → RN validates quality → daily state-wise payment sheet → every 15 days consolidated into national payment sheet for approval → approved funds transferred centrally and distributed → payment screenshots and records stored for audit",
            "Maintain a clear history of response time, acceptance rate, and quality reliability for repeat allocation",
            "Separate high-trust reporters from opportunistic or inconsistent vendors",
            "Close disputes with evidence: submission record, QC note, and payment proof",
            "Protect retention by keeping payment cycles predictable and communication unambiguous"
          ]
        },
        {
          "title": "Crisis Response & Escalation",
          "items": [
            "Reporter unresponsive → switch to alternate reporter or adjacent geography → Assigned RN team member",
            "Low-quality submission → trigger reshoot or partial salvage decision → Assigned RN team member + central manager if repeated",
            "Field access disruption → use archived material, alternate district, or revised scope → Central manager",
            "Payment dispute → check sheet entry, QC note, and transfer proof → Central manager / finance control owner",
            "Compliance concern → hold delivery and review facts before release → Central manager + leadership"
          ]
        },
        {
          "title": "Campaign Support History",
          "items": [
            "Odisha legislative assembly election",
            "Jharkhand legislative assembly election",
            "Jammu by-elections (Budgam & Nagrota)",
            "Punjab by-elections (Tarn Taran)",
            "Odisha by-elections (Nuapada)",
            "ULB campaigns (CG, HP, HR)",
            "BMC Maharashtra",
            "Goa by-elections (Ponda)",
            "National issue-based campaigns"
          ]
        }
      ],
      "priorities": [
        [
          "L1",
          "Immediate / highest priority",
          "3–4 hours",
          "Time-sensitive issue already in circulation or requiring urgent field confirmation"
        ],
        [
          "L2",
          "Planned / standard priority",
          "24–48 hours",
          "Pre-planned stories, scheduled shoots, or requested issue packages"
        ],
        [
          "L3",
          "Extended / low urgency",
          "1–4 days",
          "Longer-form assignments, person-specific or location-specific pieces, documentary-style requests"
        ]
      ],
      "beforeAfter": [
        [
          "Field access",
          "Ad hoc sourcing and uncertain local availability",
          "Structured multi-state network with repeat-use field access"
        ],
        [
          "Turnaround",
          "Dependent on vendor mobilization and fragmented coordination",
          "1–2 hour archival retrieval and 24–48 hour fresh shoot capability"
        ],
        [
          "Cost profile",
          "Traditional production teams may cost lakhs for single projects",
          "Comparable field outputs delivered at a fraction of those costs"
        ],
        [
          "Scale during campaigns",
          "Rapid expansion is difficult and uneven",
          "AC-level surge to 600+ reporters during election periods"
        ],
        [
          "Documentation and auditability",
          "Often scattered across vendors and threads",
          "State-wise sheets, national consolidation, and payment proof records"
        ]
      ]
    },
    {
      "id": "smcc",
      "name": "SMCC — Social Media Command Centre",
      "icon": "🎯",
      "category": "comms",
      "function": "Hyperlocal Operations",
      "hideTabs": ["skills", "downloads"],
      "tagline": "Precision Political Communication Engine — hyperlocal narrative-driven content backed by political intelligence.",
      "purpose": "The Social Media Command Centre (SMCC) is a key wing of the Communications team focused on creating high-impact hyperlocal content that can influence election outcomes. It is a centralised team built around two components — (1) producing Assembly Constituency (AC) level hyperlocal, narrative-driven content, and (2) building a hyperlocal dissemination network to amplify it. Unlike traditional communications (which primarily produces high-quality content for party pages and manages third-party pages), SMCC enables strategic hyperlocal content backed by political intelligence and has the flexibility to experiment with new formats and genres. This handbook is a guiding framework — not a fixed rulebook; processes must ultimately be shaped after analysing the political and organisational structure of the campaign State. The SMCC Manager must have a thorough understanding of the state's political scenario and overall narrative, referring to the PI Team's Primer Document and the National Research Team's State Achievement and Chargesheet documents.",
      "objectives": [
        "Establish BJP's digital footprint in every contested assembly segment",
        "Run hyperlocal narratives that connect with voters at village, ward, and booth level",
        "Attack opposition messaging through strategic counter-narrative content",
        "Amplify BJP's governance achievements, candidate profiles & party ideology",
        "Drive voter engagement & sentiment shift through targeted advertising"
      ],
      "contentFormats": [
        {"n": "Achievement Videos", "d": "VO + Vox Pop highlighting government achievements (don't name the incumbent unless ticket is confirmed)"},
        {"n": "Chargesheet Videos", "d": "Failures, corruption, unfulfilled promises of opposition; VO + Public Vox Pops of dissatisfaction"},
        {"n": "Cover Stories", "d": "VO video with original footage, documents and Vox Pops"},
        {"n": "Know Your Candidate (KYC)", "d": "Candidate's life/political journey · supporter Vox Pops · 30–45s vote appeal"},
        {"n": "Know Your Opposition (KYoC)", "d": "Voice-over + Vox Pops against the opposition candidate"},
        {"n": "Comparison Videos", "d": "BJP candidate vs opposition — reuses KYC and KYoC Vox Pops"},
        {"n": "CMS Requests", "d": "Content as requested by CMS PoCs (via 3P Campaigns)"},
        {"n": "Campaign Songs", "d": "Production-to-dissemination owned by SMCC (e.g. TN BJP Campaign Song)"}
      ],
      "activationChecklist": [
        ["SMCC Manager defines advertisement budget approval limits for ZCs", "SMCC Manager"],
        ["Conduct WhatsApp call with all SMAs to discuss and finalise zone narratives", "Zonal Coordinator"],
        ["Assign tasks on the designated Slack channel", "Zonal Coordinator"],
        ["Assign the task to the respective Content Writer", "CW Lead"],
        ["Draft the copy/content and post on Slack for ZC review", "Content Writer"],
        ["Review content, suggest changes, and on approval tag the Production Head", "Zonal Coordinator"],
        ["Assign creative task to Graphic Designer and Video Editor", "Production Head"],
        ["Create and upload final creative/video output on Slack", "GD / VE"],
        ["Review final output and approve by tagging the SME Lead", "Zonal Coordinator"],
        ["Publish approved content on Facebook, Instagram, and WhatsApp", "SME Lead"],
        ["Update the Ads Sheet with respective content links", "SME Lead"],
        ["Allocate ads budget for the post (seek Manager approval if above limit, e.g. ₹2000)", "Zonal Coordinator"]
      ],
      "adRules": [
        "Meta Ads are the backbone of SMCC — production has little value without strategic amplification through targeted Meta Ads",
        "SMCC Manager and ZCs MUST sit with the Growth Team to learn ad targeting parameters (gender, interests, age, location, language, behavioural)",
        "Every social media page must have the necessary Disclaimer attached BEFORE running political ads on Meta",
        "Obtain pin codes from PI Team and coordinate with Growth Team so ad sets cover the entire AC by AC-level pin demographics",
        "Growth Team runs ads only AFTER SMEs add post links to the Ads Sheet AND budget is approved by ZC/Manager",
        "Most (not all) SMCC ads should run in accelerated mode to maximise spend efficiency and impact",
        "ZC owns per-post budget allocation; anything above the Manager-defined limit (example: ₹2000) needs Manager approval"
      ],
      "securityPolicy": [
        "Slack is the only official professional communication channel — WhatsApp is rapid-response/narrative-identification only and is NOT considered official proof (exception: ZC ↔ SMA, which is WA-only)",
        "Shared Drive Manager access is limited to National Comms Head, State Lead, SMCC PD and SMCC Manager — do NOT give broad drive access to all team members",
        "Vendors get access ONLY to the content production folder — never to narratives or other confidential folders",
        "SMAs are NOT given access to or shared any documents",
        "Meta Assets must be linked to personal accounts (Growth Team creates these personal accounts and provides manager access)",
        "All Meta assets created under a SINGLE Meta Business Manager — enables Meta API integration with Sprout Social and automated reporting dashboards",
        "WhatsApp groups must be created using a WA Business account (not a personal account) — enables tracking and lets us run WA Joining Ads",
        "Page names must sound neutral and AC-level community-oriented — AVOID names like 'BJP4Solapur' or 'Rightwing_Solapur'; both name and branding should be AC-specific and non-political",
        "Disclaimer is mandatory authorisation for political ads on Meta — coordinate with Growth Team early; secure State Lead + PD approval before formal Disclaimer request",
        "Vendor 10% TDS must be communicated up-front — TDS is advance tax (vendor reclaims via ITR), NOT additional tax over GST"
      ],
      "goaExample": {
        "state": "Tamil Nadu (33 seats · SMCC Production Team)",
        "stats": [
          {"k": "Total Team Members", "v": "55"},
          {"k": "Social Media Associates (SMA)", "v": "23"},
          {"k": "Video Editors", "v": "10"},
          {"k": "Graphics Designers", "v": "5"},
          {"k": "Content Writers", "v": "9"},
          {"k": "Zonal Co-ordinators", "v": "3 (one per zone — never vendorised)"},
          {"k": "SM Executives & Others", "v": "5"},
          {"k": "Comparative Setup — Pondicherry", "v": "First fully-vendorised production team; set up 2 months before election. SMCC-OCC deployed in Pondicherry town; SMAs in Karaikal."}
        ],
        "attack": "Opposition government's chargesheet, corruption and unfulfilled promises — sharpened through KYoC and Chargesheet videos (script + final output reviewed by PI Team)",
        "positive": "BJP candidate's KYC, leader-specific achievement and chargesheet content, scheme-driven hyperlocal narratives",
        "focus": "TN Phase-Wise Plan · Kerala KYC/KYoC bilingual experimentation · Documentary on Pandav Vada Case · Blank Constitution Issue · Impact of Chargesheet Video · TN BJP Campaign Song (full production-to-dissemination)"
      },
      "scope": [
        {"k": "Two Core Components", "v": "Hyperlocal Content Creation + Building Dissemination Network"},
        {"k": "Primary Platforms", "v": "Facebook & Instagram (Targeted Meta Ads) · WhatsApp (AC-level WA Groups)"},
        {"k": "Geographic Unit", "v": "Assembly Constituency (AC) — content always contextualised to local electorate"},
        {"k": "Seat Categories", "v": "Focus Seats · High Priority Seats (Cat A/B/C — enhanced focus) · Opposition Seats (narrative attack only)"},
        {"k": "Content Adaptation", "v": "Design, language and aesthetics adapted to AC context (e.g. Malayalam statewide; Kannada in Kasaragod AC)"},
        {"k": "Budget Backbone", "v": "Meta Ads typically >50% of overall SMCC budget"},
        {"k": "Setup Timeline", "v": "Ideal: ~6 months before campaign · Compressed (vendorised) model: <2 months before voting"}
      ],
      "structure": [
        {"role": "SMCC Project Director (PD)", "detail": "Leads the SMCC budgeting in consultation with National Comms Head, State Lead and State Comms Head. Final approvals on vendor onboarding, Disclaimers and asset creation."},
        {"role": "SMCC Manager", "detail": "Owns the state's SMCC operations end-to-end. Defines ZC ad-budget approval limits. Sits with PI/3P/Growth/Admin teams to set up cross-team processes. Must have thorough grasp of state political scenario (PI Primer + State Achievement/Chargesheet docs)."},
        {"role": "Zonal Coordinator (ZC)", "detail": "Single point of contact for all zone-level activities — narratives, approvals, deliverables. Conducts WA calls with SMAs to finalise zone narratives. Owns final content approval. Never vendorised — takes key political and strategic decisions."},
        {"role": "CW Lead (Content Writers Lead)", "detail": "Single point of contact for the content writing vertical. Routes ZC-assigned tasks to the right Content Writer."},
        {"role": "Production Head", "detail": "Single point of contact for the production vertical. Routes ZC-approved tasks to Graphic Designers and Video Editors."},
        {"role": "SME Lead (Social Media Executives Lead)", "detail": "Single point of contact for publishing and updates. Publishes approved content across FB, IG and WhatsApp. Updates the Ads Sheet with respective post links."},
        {"role": "Content Writer (CW)", "detail": "Drafts copy/content and posts on Slack for ZC review. One per cluster of seats as per team-sizing."},
        {"role": "Graphic Designer (GD)", "detail": "Creates static creatives and graphics; uploads final output on Slack."},
        {"role": "Video Editor (VE)", "detail": "Creates and edits videos; uploads final output on Slack."},
        {"role": "Social Media Associate (SMA)", "detail": "On-ground narrative gatherer at AC level. Communicates with ZC over WhatsApp only. In vendorised model, SMAs are replaced by an on-ground SMCC-OCC team (1 reporter + 1 cameraman)."}
      ],
      "teamCalc": {
        "formula": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin:6px 0 4px\"><div style=\"background:#ecfdf5;border:1px solid #6ee7b7;border-radius:12px;padding:16px\"><div style=\"display:inline-block;background:#16a34a;color:#fff;font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;letter-spacing:.6px;margin-bottom:8px\">RECOMMENDED</div><div style=\"font-size:16px;font-weight:700;color:#0f172a\">Hiring Team from Scratch</div><div style=\"display:inline-block;background:#fff;border:1px solid #86efac;color:#15803d;font-size:11.5px;font-weight:600;padding:3px 9px;border-radius:20px;margin-top:8px\">Ideal Period: More than 2 Months time for election date</div><p style=\"margin:10px 0 0;font-size:13px;color:#334155;line-height:1.55\">This is the <b>most suitable and recommended model</b>, as it ensures better ideological alignment and thorough skill evaluation during hiring.</p><p style=\"margin:8px 0 0;font-size:13px;color:#334155;line-height:1.55\">Under this model, SMAs are directly hired and integrated into the team structure.</p></div><div style=\"background:#fff7ed;border:1px solid #fb923c;border-radius:12px;padding:16px\"><div style=\"display:inline-block;background:#ea580c;color:#fff;font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;letter-spacing:.6px;margin-bottom:8px\">COMPRESSED TIMELINE</div><div style=\"font-size:16px;font-weight:700;color:#0f172a\">Vendorising</div><div style=\"display:inline-block;background:#fff;border:1px solid #fdba74;color:#c2410c;font-size:11.5px;font-weight:600;padding:3px 9px;border-radius:20px;margin-top:8px\">Ideal Period: Less than 2 Months time for election date</div><p style=\"margin:10px 0 0;font-size:13px;color:#334155;line-height:1.55\">This model should be implemented only when there is limited time available to set up the SMCC and the first model cannot be implemented.</p><p style=\"margin:8px 0 0;font-size:13px;color:#334155;line-height:1.55\">Under this model, the entire production team which includes CW, VE and GD is vendorised. SMAs are replaced with an on-ground SMCC OCC team comprising one reporter and one cameraman.</p><p style=\"margin:8px 0 0;font-size:12.5px;color:#475569;font-style:italic;line-height:1.55\">Note: Zonal Coordinators (ZCs) should not be vendorised, as they are responsible for taking key political and strategic decisions.</p></div></div><div style=\"font-size:12.5px;color:#475569;background:#f1f5f9;border-radius:8px;padding:10px 12px;margin-top:10px;line-height:1.55\"><b style=\"color:#0f172a\">Note:</b> There is no fixed rule that only one of these models must be adopted. A hybrid approach can also be implemented. For example, an SMCC-OCC team can be deployed in urban areas, while rural areas can operate with SMAs. News and narratives from urban regions are generally easier to capture and audiences often consume higher quality content production.</div><div style=\"font-size:11.5px;color:#64748b;margin-top:8px;font-style:italic;line-height:1.5\">Footnote (PDF): In Pondicherry, the SMCC was set up just two months before the election. This was the first instance where the entire production team was fully vendorised. After analysing the small geography of the UT, a strategic decision was made to deploy the SMCC-OCC model in the Pondicherry town region, while SMAs were deployed in the Karaikal region.</div><div style=\"font-size:12.5px;color:#0369a1;background:#e0f2fe;border-left:4px solid #0284c7;border-radius:6px;padding:8px 12px;margin-top:10px;line-height:1.5\">A worked example of the Tamil Nadu SMCC team structure (33 seats · 55 members) is available on the <b>Example</b> tab.</div>"
      },
      "scaleNote": "One Zonal Coordinator per zone. ZCs must NEVER be vendorised — they take key political and strategic decisions.",
      "coreFunctions": [
        {
          "title": "What SMCC Does — 5 Strategic Objectives",
          "items": [
            "<div style=\"margin:8px 0 6px;text-align:center\"><img src=\"assets/smcc-objectives.png\" alt=\"SMCC — Precision Political Communication Engine: 5 strategic objectives\" style=\"max-width:100%;width:880px;height:auto;border-radius:10px;border:1px solid #e2e8f0;box-shadow:0 2px 12px rgba(15,23,42,.06)\"></div><figcaption style=\"text-align:center;font-size:11.5px;color:#64748b;margin:4px 0 8px\">Source: SMCC SOP, Image 1 — Precision Political Communication Engine</figcaption>"
          ]
        },
        {
          "title": "Two Major Components",
          "items": [
            "A. Hyperlocal Content Creation — produce AC-level narrative-driven curated content; narratives can be AC/district/zone/state/national but MUST be contextualised for the local electorate",
            "Content curation adapts design aesthetics, language and elements (e.g. Malayalam statewide in Kerala; Kannada also produced for Kasaragod AC's Kannada-speaking electorate)",
            "B. Building Dissemination Network — content creation has no value without hyperlocal dissemination; aim is to reach EVERY voter in the AC",
            "Dissemination platforms: Facebook + Instagram via Targeted Meta Ads; WhatsApp via AC-level WA Groups"
          ]
        },
        {
          "title": "Budgeting",
          "items": [
            "First major setup step — led by the SMCC Project Director in consultation with National Comms Head, State Lead and State Comms Head",
            "Before starting: analyse political and organisational structure of the State — admin zones, expected number of focus seats, SMCC scope and expected deliverables (do this with State Lead, PI PD and PI Manager)",
            "Clearly define the SMCC scope FIRST — if State Comms is producing achievement/chargesheet videos, those deliverables should NOT be inside SMCC budget; this affects team structure and hiring",
            "Meta Ads typically account for MORE THAN 50% of overall SMCC budget — they are the backbone",
            "State context drives both team structure and ad budget — Maharashtra >> Puducherry; hiring strong candidates costs higher in TN vs Chhattisgarh",
            "Timeline matters — ~6 months before campaign (full setup) vs ~2 months before voting (compressed/vendorised setup)"
          ]
        },
        {
          "title": "Team Structure — Two Models",
          "items": [
            "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:8px 0\"><div style=\"background:#ecfdf5;border:1px solid #86efac;border-radius:10px;padding:14px\"><div style=\"font-size:11px;color:#15803d;font-weight:700;letter-spacing:.5px\">RECOMMENDED · >2 MONTHS RUNWAY</div><b style=\"font-size:15px\">Hiring Team from Scratch</b><div style=\"font-size:13px;margin-top:6px\">Better ideological alignment, thorough skill evaluation. SMAs directly hired and integrated into team structure.</div></div><div style=\"background:#fff7ed;border:1px solid #fdba74;border-radius:10px;padding:14px\"><div style=\"font-size:11px;color:#c2410c;font-weight:700;letter-spacing:.5px\">FALLBACK · <2 MONTHS RUNWAY</div><b style=\"font-size:15px\">Vendorising</b><div style=\"font-size:13px;margin-top:6px\">Entire production team (CW, VE, GD) vendorised. SMAs replaced by on-ground SMCC-OCC team (1 reporter + 1 cameraman). ZCs are NEVER vendorised — they take key political/strategic decisions.</div></div></div>",
            "Hybrid is permitted — e.g. SMCC-OCC for urban areas (easier news capture, higher quality expectations), SMAs for rural areas",
            "Tamil Nadu (33 seats) team example: 23 SMAs · 10 VEs · 5 GDs · 9 CWs · 3 ZCs · 5 SM Execs & Others = 55 members",
            "Pondicherry was the first fully-vendorised production team (2-month runway); SMCC-OCC in Pondicherry town, SMAs in Karaikal — strategic call based on UT's small geography"
          ]
        },
        {
          "title": "Seat Categories",
          "items": [
            "Focus Seat — ACs where SMCC actively runs AC-level pages and digital campaigns",
            "High Priority Seat — subset of Focus Seats strategically important by winnability, political significance or key leader/candidate presence (Cat A, B, C); enhanced focus and resources",
            "Opposition Seat — constituencies where the party may not be contesting directly, but SMCC runs narrative-building and attack content against opposition candidates",
            "PI Team provides the seat classification list; classification may change during the campaign — structure with flexibility and factor changes into budget and resource planning"
          ]
        },
        {
          "title": "Hiring Process",
          "items": [
            "Refer to the Roles & Responsibilities document for required skill sets per role",
            "Coordinate with HR Team for onboarding format and a single email-thread standard (avoids influx of emails)",
            "For vendor onboarding: consult SMCC PD and State Lead first; onboarding mail must include the quotation (members, roles, financials), duration and end-date of engagement",
            "After approval, work with the legal team to draft the vendor contract",
            "TDS clarity is critical: 10% TDS will be deducted on payments even when the agreement states 'excluding GST and other taxes' — TDS is advance tax, NOT additional; vendor reclaims it via ITR",
            "Worked example: ₹1,50,000/month excl. GST → ₹1,35,000 credited to vendor after 10% TDS"
          ]
        },
        {
          "title": "Operational Workflow",
          "items": [
            "<div style=\"margin:8px 0 6px;text-align:center\"><img src=\"assets/smcc-workflow.png\" alt=\"SMCC Operational Workflow — 14 steps with key roles legend\" style=\"max-width:100%;width:560px;height:auto;border-radius:10px;border:1px solid #e2e8f0;box-shadow:0 2px 12px rgba(15,23,42,.06)\"></div><figcaption style=\"text-align:center;font-size:11.5px;color:#64748b;margin:4px 0 8px\">Source: SMCC SOP, Image 2 — SMCC Operational Workflow</figcaption>",
            "ZC must coordinate closely with the production team during production to minimise revisions at the final review stage"
          ]
        },
        {
          "title": "Infrastructure — Shared Drive (Google Drive)",
          "items": [
            "A Shared Google Drive is the central SMCC repository — set up BEFORE any team member is onboarded",
            "Request via the va-data-manager Slack channel, tagging the VA Data Manager and all relevant stakeholders",
            "Shared Drive Manager access ONLY to: National Comms Head, State Lead, SMCC PD, SMCC Manager",
            "Create deliverable-specific folders and share with the specific team members working on them",
            "Vendors get access ONLY to the content production folder — never narratives or confidential files. SMAs get NO document access."
          ]
        },
        {
          "title": "Infrastructure — Slack Channels",
          "items": [
            "Slack is used for ALL professional communication — ensures transparency and accountability",
            "Raise channel-creation requests on va-data-manager; add National Comms Head, State Lead, SMCC PD, SMCC Manager and ZCs to ALL channels",
            "<b>mh-smcc-zc</b> — ZCs only · all confidential deliverables and important communication",
            "<b>mh-smcc-content</b> — ZCs, CWs, VEs, GDs, SMEs · all content production operations",
            "<b>mh-smcc-pi-coordination</b> — PI PD, PI Managers, PI ZCs · PI raises content/ads requests; ZCs seek PI approval on narratives",
            "<b>mh-smcc-3p</b> — 3P PD, 3P Managers, 3P ZCs · 3P content requests and coordination",
            "<b>mh-smcc-growth</b> — Growth Team PoCs, SMEs · ALL ads-related conversations happen here",
            "<b>mh-smcc-cms</b> — 3P PD, 3P Managers, 3P ZCs, CMS PoCs · all CMS requests"
          ]
        },
        {
          "title": "Infrastructure — WhatsApp Groups",
          "items": [
            "WhatsApp is rapid-response and narrative-identification only — NOT official accountability proof (Slack is)",
            "Exception: ZC ↔ SMA communication runs ONLY on WhatsApp",
            "<b>Narrative Group</b> — all team members; share news, narratives and content-ready issues",
            "<b>Zone-wise Groups</b> — each zone's ZC plus its SMAs; SMAs share narratives and content needing ZC approval",
            "<b>Leads Group</b> — ZCs + CW Lead + SME Lead + Production Head; team-wide announcements and content discussions",
            "SMCC PD and SMCC Manager must be added to all the above WA groups"
          ]
        },
        {
          "title": "Infrastructure — Asset Creation (Meta Pages + WA Groups)",
          "items": [
            "Obtain Focus Seats list from PI Team (post State Lead approval) — Meta Assets and WA Groups are created for these seats",
            "A Disclaimer is mandatory authorisation to run political ads on Meta — pages cannot publish political ads without one",
            "SMCC Manager coordinates with Growth Team on Disclaimer requirements; formal mail goes out AFTER State Lead and PD approval",
            "Maintain ALL asset details (names, logos, cover pics, bios) in a single sheet — used for rapid re-creation if assets get struck down",
            "Asset naming must be neutral and AC-level community-style — AVOID 'BJP4Solapur' or 'Rightwing_Solapur'; both name and branding should be AC-specific and non-political",
            "Meta Assets linked to personal accounts (Growth Team also creates these); all under a SINGLE Meta Business Manager (enables Meta API integration with Sprout Social etc.)",
            "WA Groups created using a WA Business account (NOT personal) — enables tracking and WA Joining Ads"
          ]
        },
        {
          "title": "Cross-Team Co-ordination — PI Team",
          "items": [
            "Obtain 5 major AC/district/zone/state-level narratives (positive + negative) for each Focus Seat",
            "Get leader-specific Chargesheet and Achievement documents → drives KYC/KYoC and achievement/chargesheet content",
            "Ask for the DPU on a daily basis",
            "Establish PI review/approval for Chargesheet, Achievement, KYC and KYoC content — script AND final output reviewed",
            "Reach out to PI for hiring resources and SMAs via their FA contacts",
            "Obtain AC pin codes for targeted ads"
          ]
        },
        {
          "title": "Cross-Team Co-ordination — 3P Campaigns",
          "items": [
            "Hire resources/SMAs through 3P FA contacts",
            "Obtain 3P narrative documents and DPUs regularly; secure PI approval on those narratives before producing content",
            "3P may raise content creation requests — check bandwidth and fulfil accordingly",
            "Set up the CMS process EARLY — this is the most important coordination with the 3P Campaigns team"
          ]
        },
        {
          "title": "Cross-Team Co-ordination — Growth Team",
          "items": [
            "Share a (preferably inflated) rough estimate of Meta Pages, WA Groups and Disclaimers needed — ensures Growth procures SIMs from Admin in advance",
            "Ask for SIM cards for creating WA Groups and ensure all SIMs are recharged at regular intervals",
            "SMCC Manager + ZCs MUST sit with Growth to learn ad targeting (gender, interests, age, location, language, behaviour)",
            "Obtain the Ads Sheet to be filled daily with post links",
            "Obtain the weekly Ads report to analyse performance and strategise"
          ]
        },
        {
          "title": "Cross-Team Co-ordination — Admin & IT Team",
          "items": [
            "Obtain required number of SIM cards; ensure activation and timely recharges",
            "Arrange laptops/machines for SMCC operations and dissemination",
            "Arrange mobile phones for page posting, WA dissemination and coordination",
            "Internet via dongles, Wi-Fi and data packs — must be uninterrupted",
            "Create and manage official email IDs, passwords and access credentials",
            "Tech support for setup, login, software installation and device troubleshooting",
            "Inventory tracking of all issued devices, SIMs and operational assets; timely replacement/repair of faulty devices"
          ]
        },
        {
          "title": "WhatsApp Growth Strategy — 4 Dissemination Types",
          "items": [
            "<div style=\"margin:8px 0 6px;text-align:center\"><img src=\"assets/smcc-wa-dissemination.png\" alt=\"WhatsApp Dissemination — 4 group types (In-House, Infiltrated, Cohort-based, Party's WA Groups)\" style=\"max-width:100%;width:760px;height:auto;border-radius:10px;border:1px solid #e2e8f0;box-shadow:0 2px 12px rgba(15,23,42,.06)\"></div><figcaption style=\"text-align:center;font-size:11.5px;color:#64748b;margin:4px 0 8px\">Source: SMCC SOP, Image 5 — WhatsApp Dissemination</figcaption>",
            "Push mass, highly emotional, filmy, CapCut-style edited videos — easily forwarded and uploaded to stories; prioritise shareability",
            "DO NOT spam — Manager must give clear mandates; curate strategy around peak active hours (dinner / post-working hours)",
            "Push at regular pre-decided intervals; address opposition counter-arguments inside the groups; maintain activity to build ideological perception"
          ]
        },
        {
          "title": "WA Joining Ads — Case Studies",
          "items": [
            "Always A/B test creatives BEFORE large budget allocations",
            "<b>Case Study 1 (Maharashtra LBY):</b> women-focused groups using Ladki Bahin Yojana benefit-led creatives (benefit amount prominently highlighted). WhatsApp Joining Ads targeting women 18+ → CPA per WA member dropped from ₹8 → ₹1.4",
            "<b>Case Study 2 (TN):</b> hooks like 'To bring revolution in this AC, join…', 'To get news updates in this AC, join…', 'To see Modiji as our PM again, join…' — mix of creatives onboards believers, persuadables AND resisters",
            "Do NOT build believer-only groups — healthy mix of believers, persuadables and resisters is the objective; we're targeting the entire electorate"
          ]
        },
        {
          "title": "Special Content & Experimentation — Case Studies",
          "items": [
            "Documentary on Pandav Vada Case",
            "Blank Constitution Issue",
            "Kerala KYC and KYoC Videos",
            "Impact of Chargesheet Video",
            "TN BJP Campaign Song (full Production → Dissemination owned by SMCC)",
            "TN SMCC Phase-Wise Plan"
          ]
        }
      ],
      "objectivesAds": [
        ["Page Like Ads", "Run ads to obtain page likes on FB. Avoid running ads for gaining followers on IG, as the conversion ratio is very low. Tip: Page Like ad creatives generally have lower CPMs when they feature Modiji or any popular personality. Create three different creatives with varying themes, run Page Like ads, conduct A/B testing, and then finalise the best-performing creative.", "Speak with the State Lead on whether the SMCC pages will be shown to the clients. If yes, ensure that each page has at least 5K followers. Ideally, you can acquire 1 follower for every ₹1 spent."],
        ["Post Ads", "To get more views on the content. This is actual Amplification of the Content. Tip: Highly engaging content with a strong hook is key. Ads should primarily be either Awareness or Engagement ads. Prefer Awareness ads for positive/pro content and Engagement ads for negative content. The keyword here is 'prefer' — have regular discussions with the Growth Team to understand what is working and what is not.", "Allocate the budget for post ads based on the importance of the narrative and the electoral impact of the content in that region. Rural areas generally require higher budgets due to higher CPMs, whereas urban and city areas typically require lower budgets."],
        ["Ghost Ads", "In this type of Ad, the content will not be visible on the main page timeline, but the Ads will still be served to the target audience. Tips: Use these Ads for content with a short lifespan and for narratives that are aggressive or slightly spiritually true.", "Allocate budget based on importance of the narrative"]
      ],
      "budgetEsc": [
        ["Meta Ads (Backbone)", "Targeted Meta Ads — the strategic amplification layer that makes hyperlocal content matter", "More than 50% of overall SMCC budget"],
        ["Production Team", "Content Writers, Video Editors, Graphic Designers (or vendor team if vendorised)", "Sized per state political/admin structure"],
        ["SMA / SMCC-OCC Layer", "Social Media Associates OR reporter+cameraman team if vendorised", "Per AC / per zone"],
        ["Infrastructure", "Devices, SIMs, WA Business accounts, dongles, software (via Admin & IT)", "Sized to team count"],
        ["State Cost Sensitivity", "Maharashtra >> Puducherry; strong candidate hiring costs higher in TN vs Chhattisgarh", "Planned with State Lead, PI PD/Manager"],
        ["Setup Timeline", "6 months before campaign (full setup) vs 2 months before voting (compressed/vendorised)", "Directly impacts team model and total spend"]
      ],
      "kpis": [
        ["Page Like Ads — Cost per Follower", "Target ~₹1 per follower; each page should reach minimum 5K followers (if shown to clients)"],
        ["Page Like Creatives", "Test 3 creatives with varying themes; finalise after A/B testing — featuring Modiji/popular leaders typically yields lower CPMs"],
        ["Post Ads — Type Preference", "Prefer Awareness ads for positive/pro content; Engagement ads for negative content (always re-validate with Growth Team)"],
        ["Post Ads — Geography Sensitivity", "Rural → higher CPMs → higher budgets; Urban → lower CPMs → lower budgets"],
        ["Ads Mode", "Most (not all) ads should run in accelerated mode to maximise spend efficiency and impact"],
        ["WA Joining Ads — CPA", "Maharashtra LBY (women-focused) case: CPA per WA member dropped from ₹8 → ₹1.4 with benefit-led creatives"],
        ["WA Group Composition", "Mix of believers, persuadables AND resisters — do NOT target believers only"],
        ["Budget Gate (per post)", "ZC can allocate up to the Manager-defined limit (e.g. ₹2000); above that, SMCC Manager approval required"]
      ]
    },
    {
      "id": "surrogate",
      "name": "Surrogate Pages Acquisition and Management",
      "tagline": "Acquires Instagram pages aligned with our ideology and narratives and places them under vendor management.",
      "purpose": "This program focuses on acquiring Instagram pages aligned with our ideology and narratives and placing them under vendor management. While VA retains full ownership, the original admins continue to operate the pages and publish content aligned with our narratives.",
      "structure": [
        {
          "role": "1 Manager",
          "detail": "Responsible for the acquisition strategy, vendor management, narrative briefing, expansion targets, budgeting."
        },
        {
          "role": "2 Lead",
          "detail": "Responsible for the daily coordination, performance tracking, escalation handling and etc. work related to the page admin. Ideally one lead typically handles 20-25 surrogate pages."
        }
      ],
      "coreFunctions": [
        {
          "title": "Operational Approach",
          "items": [
            "Identify and approach Instagram pages for acquisition based on their ideological alignment, content quality, and performance.",
            "Ownership cost – a fixed one-time payment to acquire the page (IP).",
            "Monthly operational cost – a recurring payment to vendors/page admins to run and manage the page.",
            "After onboarding, we share daily research documents on selected narratives, based on which they create content and post on their pages. We also provide strategic inputs to improve page performance.",
            "While we regularly reach out to onboard more ideologically aligned pages, the conversion rate remains low, as many page admins run their pages out of passion alongside other jobs and cannot commit full-time to managing them.",
            "Most creators are accustomed to posting 1-2 pieces of content daily and are finding it difficult to manage the higher narrative and production volume."
          ]
        },
        {
          "title": "Working Objective",
          "items": [
            "Operates a distributed network of semi-independent ideological pages to push campaign narratives in native internet language.",
            "Creates the perception that narratives are emerging organically through meme culture, youth conversations, and regional discourse.",
            "Reduces dependence on official party handles by amplifying messaging through multiple independent-looking voices.",
            "Makes campaign communication appear more authentic, relatable, and culturally embedded among audiences."
          ]
        },
        {
          "title": "Key dependency",
          "items": [
            "Strong coordination with QRT and Research Team for daily narrative alignment.",
            "Fast turnaround from research to execution.",
            "Reliable page admins for pushing the narrative timely.",
            "Political sound team lead, so the pages cover the narrative in a cooling period also."
          ]
        },
        {
          "title": "Logic behind team sizing",
          "items": [
            "Surrogate operations are relationship-heavy rather than purely operational.",
            "Daily coordination is manual.",
            "Posting follow-ups require constant monitoring.",
            "Many admins are part-time creators.",
            "Narrative compliance needs regular supervision.",
            "Crisis handling requires fast response."
          ]
        },
        {
          "title": "Daily Workflow / SOP",
          "items": [
            "Morning — Receive daily narrative line from Manager or QRT team.",
            "Morning — Share research documents and key talking points.",
            "Morning — Identify priority narratives and posting windows.",
            "Morning — Coordinate with page admins regarding deliverables.",
            "Evening — Peak posting window execution.",
            "Evening — Monitoring engagement and traction.",
            "Evening — Amplification coordination.",
            "Evening — Crisis handling if any content goes off-script.",
            "Evening — Performance tracking and reporting."
          ]
        },
        {
          "title": "Skills Required",
          "items": [
            "Deep understanding of the Instagram ecosystem and meme culture.",
            "Strong political narrative understanding.",
            "Negotiation and vendor-management capability.",
            "Relationship management with page admins.",
            "Fast communication and coordination skills.",
            "Internet trend awareness and content instinct.",
            "Crisis management and escalation judgment.",
            "Ability to identify high-potential pages early."
          ]
        },
        {
          "title": "Tools & Platforms Used",
          "items": [
            "Canva / Photoshop for creatives.",
            "Adobe Premiere Pro for video editing."
          ]
        }
      ],
      "pricing": {
        "ownership": [
          [
            "India 1",
            "₹5 per follower"
          ],
          [
            "India 2",
            "₹3 per follower"
          ],
          [
            "India 3",
            "₹2 per follower"
          ]
        ],
        "monthly": [
          [
            "1K to 10K followers",
            "₹35,000",
            "₹25,000",
            "₹15,000"
          ],
          [
            "10K – 50K followers",
            "₹75,000",
            "₹50,000",
            "₹30,000"
          ]
        ]
      },
      "icon": "🌐",
      "category": "creative",
      "function": "Surrogate Network"
    },
    {
      "id": "third-party",
      "name": "Third Party Team",
      "icon": "🎭",
      "category": "creative",
      "tagline": "Internally managed surrogate Instagram pages amplifying state-political narratives.",
      "purpose": "Internally manages surrogate Instagram pages that majorly align with state politics. Unlike surrogate pages, these pages are not acquired externally but are created, developed, and operated completely within the organization through dedicated internal teams. The objective is to create multiple independent-looking digital voices that can communicate narratives in a native internet style rather than through direct political communication formats.",
      "structure": [
        {
          "role": "Manager",
          "detail": "Responsible for the overall third-party ecosystem strategy, narrative alignment. Salary ₹90K–₹1.3L (varies by state)."
        },
        {
          "role": "Creator/Consultant",
          "detail": "Daily content creation, trend research, and work related to page admin. One-resource-one-page model. Salary ₹40K–₹70K."
        },
        {
          "role": "Intern/Associate",
          "detail": "Daily backend work — searching old bytes and researching data/statements; manages pages when creators are on leave/exit. Stipend ₹20K–₹35K."
        },
        {
          "role": "Video Editor — Positive Properties",
          "detail": "Positive amplification, emotional storytelling, soft political influence."
        },
        {
          "role": "Video Editor — Negative Surrogate Properties",
          "detail": "Opposition attack videos, comparative edits, counter narratives, rapid response content."
        }
      ],
      "sizing": {
        "min": "2 Members",
        "ideal": "2–4 Members",
        "scale": "Depends on number of surrogate pages, election intensity, opposition aggression, viral content demand"
      },
      "coreFunctions": [
        {
          "title": "Operational Approach — Categories",
          "items": [
            "Meme and youth culture pages",
            "Regional and local narrative pages",
            "Political infotainment pages",
            "Hyper-trend and Issue-based thematic pages"
          ]
        },
        {
          "title": "Why Internal Control Wins",
          "items": [
            "Execution speed, narrative discipline, and posting consistency remain significantly higher compared to externally managed ecosystems",
            "Faster experimentation with formats",
            "Better narrative synchronization",
            "Higher posting frequency",
            "Rapid amplification during political moments",
            "Better crisis control and content moderation"
          ]
        },
        {
          "title": "Working Objective",
          "items": [
            "Operates a centralized network of internally managed third-party pages to amplify campaign narratives in internet-native language",
            "Creates the perception of widespread organic conversations across meme pages, youth culture, and regional digital spaces",
            "Reduces overdependence on official political handles by distributing messaging through multiple independent-looking pages",
            "Makes campaign communication feel more relatable, trend-driven, culturally relevant, and socially embedded among audiences",
            "Enables rapid response narrative warfare during political events, opposition attacks, and high-engagement news cycles"
          ]
        },
        {
          "title": "Daily Workflow",
          "items": [
            "Receive daily narrative direction from Manager/QRT Team",
            "Review research documents and key talking points",
            "Identify priority narratives and create content around them",
            "Assign content buckets to respective editor or graphic designer",
            "Internally review the final output and post it on the page timely"
          ]
        },
        {
          "title": "Skills Required",
          "items": [
            "Deep understanding of Instagram ecosystem and meme culture",
            "Strong political narrative understanding",
            "Trend spotting and rapid adaptation capability",
            "High-speed content execution skills",
            "Reel editing and meme creation capability",
            "Audience psychology understanding",
            "Internet culture awareness",
            "Crisis management judgment",
            "Strong coordination and communication ability",
            "Ability to maintain narrative consistency while keeping content organic-looking"
          ]
        },
        {
          "title": "Video Editing — Inputs/Outputs",
          "items": [
            "Inputs from Page Manager — opposition monitoring, viral trends, research insights",
            "Core work — fast editing, meme adaptation, motion graphics, formatting/branding, subtitle integration, platform optimization, quality checks, narrative framing, attack videos, emotional edits, viral political content",
            "Outputs delivered to — surrogate pages, meme networks, WhatsApp groups, influencer distribution channels"
          ]
        }
      ],
      "kpis": [
        "Daily output: 10–20 video per day",
        "Weekly output: 80–100 videos",
        "Success metric: Virality, Shares, Narrative pickup, Organic engagement"
      ],
      "tools": [
        "Adobe Premiere Pro",
        "After Effects",
        "Photoshop",
        "Ai Tools",
        "FCP X",
        "Davinci Resolve",
        "Capcut"
      ],
      "platforms": [
        "Instagram",
        "Facebook",
        "YouTube",
        "X"
      ],
      "failurePoints": [
        "Slow approvals",
        "Heavy revision cycles",
        "Overloaded editors",
        "Narrative inconsistency",
        "Fact-check risks",
        "Slow trend adaptation"
      ],
      "escalation": [
        [
          "Editing delay",
          "Team Lead",
          "Immediate"
        ],
        [
          "Sensitive content risk",
          "Comms Lead",
          "Immediate"
        ],
        [
          "Missing footage",
          "Content Poc",
          "Immediate"
        ],
        [
          "Narrative confusion",
          "Content Poc",
          "Immediate"
        ]
      ],
      "budget": [
        [
          "Manager",
          "₹90K – ₹1.3L (varies by state)"
        ],
        [
          "Creator / Consultant",
          "₹40K – ₹70K"
        ],
        [
          "Intern / Associate",
          "₹20K – ₹35K"
        ],
        [
          "Junior Video Editor",
          "₹30K – ₹45K"
        ],
        [
          "Senior Video Editor",
          "₹50K – ₹80K"
        ]
      ],
      "phases": [
        {
          "ph": 1,
          "focus": "Audience building",
          "act": []
        },
        {
          "ph": 2,
          "focus": "Narrative expansion",
          "act": []
        },
        {
          "ph": 3,
          "focus": "Aggressive counter campaigns",
          "act": []
        },
        {
          "ph": 4,
          "focus": "Voter influence",
          "act": []
        },
        {
          "ph": 5,
          "focus": "Narrative retention",
          "act": []
        }
      ],
      "function": "Surrogate Network"
    },
    {
      "id": "tvc",
      "name": "TVC & Documentaries",
      "icon": "🎬",
      "category": "creative",
      "function": "Films & Documentaries",
      "tagline": "Conceptualisation, production & post-production of ads and documentaries.",
      "purpose": "Working closely with the comms/PI team to understand the key narratives of the state; conceptualisation, production & post-production of the ads & Documentaries.",
      "structure": [
        {
          "role": "Team Lead / Senior Producer",
          "detail": "Abhiraj — coordinates with state leads and senior management."
        },
        {
          "role": "Associate Producer / Creative Producer (TVC)",
          "detail": "Ritesh — coordinates with state teams on a daily basis."
        },
        {
          "role": "Associate Producer / Creative Producer (Documentaries)",
          "detail": "Aditya — coordinates with state teams on a daily basis."
        },
        {
          "role": "Executives",
          "detail": "Director, DOP, Assistant Directors, Editor, DI Artist, Music Composer, Sound Designer, Post Production Supervisor."
        },
        {
          "role": "Total Strength",
          "detail": "10–12 in house people per state."
        }
      ],
      "coreFunctions": [
        {
          "title": "Coordination with Other Teams",
          "items": [
            "State Communications — primary coordinator; briefings/requirements from comms team; approvals at each checkpoint; needs dedicated POC",
            "State PI — primary source for the list of state-level, ac-level, cohort-level narratives",
            "Research — (infrequent) helps in fetching additional data for fulfilling narrative requirements",
            "Legal — vets scripts for EC compliance & suggests changes from concept level; WIP films submitted for EC approval; additional protocols"
          ]
        },
        {
          "title": "Weapon Arsenal",
          "items": [
            "20 second unskippable video ads",
            "Longer skippable ads, magnum opus",
            "Music Videos",
            "Telecom Ads — AC Specific Videos",
            "Telecom Ads — Narrative Videos",
            "Telecom Ads — Cohort Based",
            "Manifesto Films",
            "Achievement documentaries (scheme, infra, etc.)",
            "Issue based documentaries (yet to crack format)"
          ]
        },
        {
          "title": "Key Deliverables per Film",
          "items": [
            "FB Out (16:9, HD)",
            "WA Out (16:9, LQ)",
            "YT Out (16:9, 4K)",
            "Insta Out (4:5)",
            "Audio Mix (Radio jingle)",
            "Clean MOV",
            "Subtitle File (English)",
            "Dubbing — if required",
            "Theatre Outs — if required",
            "TV Outs — if required"
          ]
        },
        {
          "title": "Pre-Campaign Preparation",
          "items": [
            "Hiring",
            "Early touch base with the state teams",
            "Setting up the briefing & approval process",
            "Understanding local politics & narratives",
            "Pre campaign ground work (recce, local crew etc)"
          ]
        },
        {
          "title": "Campaign Workflow",
          "items": [
            "Project Briefing from Comms team",
            "Ideation & Scripting",
            "Script Approval from Comms team",
            "Script Approval from the client",
            "Project Budget Approval",
            "Pre Production",
            "Production",
            "Edit Approval from the Comms team",
            "Post Production (and all its steps)",
            "Final delivery",
            "Dubbing"
          ]
        },
        {
          "title": "Logic of Process",
          "items": [
            "Scalability",
            "20 seconds",
            "Longer films",
            "Actor retainers",
            "Dedicated POCs"
          ]
        },
        {
          "title": "Campaign Timeline",
          "items": [
            "Phased workload executable",
            "The final phase always goes to AC level films"
          ]
        },
        {
          "title": "Key Learnings from Earlier Campaigns",
          "items": [
            "Start early, escalate if timelines are slipping",
            "Setting up an internal approval process",
            "Expected client approval obstacles and workarounds",
            "Narrative beat sheet",
            "Limited narratives over films",
            "Fixing CTAs soon",
            "The mind-numbing time waste of endcard protocols, and possible early interventions",
            "Additional unsolicited gyan"
          ]
        }
      ],
      "deliverables": [
        {
          "n": "FB Out",
          "d": "16:9, HD"
        },
        {
          "n": "WA Out",
          "d": "16:9, LQ"
        },
        {
          "n": "YT Out",
          "d": "16:9, 4K"
        },
        {
          "n": "Insta Out",
          "d": "4:5"
        },
        {
          "n": "Audio Mix",
          "d": "Radio jingle"
        },
        {
          "n": "Clean MOV",
          "d": ""
        },
        {
          "n": "Subtitle File",
          "d": "English"
        },
        {
          "n": "Dubbing",
          "d": "If required"
        },
        {
          "n": "Theatre Outs",
          "d": "If required"
        },
        {
          "n": "TV Outs",
          "d": "If required"
        }
      ],
      "workflow11": [
        "Project Briefing from Comms team",
        "Ideation & Scripting",
        "Script Approval from Comms team",
        "Script Approval from the client",
        "Project Budget Approval",
        "Pre Production",
        "Production",
        "Edit Approval from the Comms team",
        "Post Production (and all its steps)",
        "Final delivery",
        "Dubbing"
      ],
      "stats": [
        {
          "label": "In-house team / state",
          "value": "10–12"
        }
      ]
    },
    {
      "id": "partnership",
      "name": "Partnership Program",
      "icon": "🌟",
      "category": "creative",
      "function": "Creator Network",
      "tagline": "Turns campaign messaging into public conversation through trusted creators.",
      "purpose": "Helps turn campaign messaging into public conversation by using trusted creators instead of relying only on official party pages, spokespersons, or advertisements. People today trust creators, meme pages, regional influencers, satire accounts and community voices more than direct political communication.",
      "philosophy": [
        "One message shared by hundreds of trusted creators feels more real than one message coming from one official account.",
        "Instead of depending only on party handles, ads, TV debates — push narratives through reels, memes, shorts, regional content, satire videos, community pages.",
        "This creates stronger emotional connection and better audience trust."
      ],
      "structure": [
        {
          "role": "Head of Influencer Narrative Network",
          "detail": "Overall creator strategy, narrative rollout planning, leadership coordination, crisis management, performance reporting."
        },
        {
          "role": "Creator Relationship Executives",
          "detail": "Managing creators daily, sharing briefs, following up on content, reviewing drafts, coordinating posting schedules, handling creator communication. Usually 1 executive manages around 25–40 creators."
        }
      ],
      "scaleNote": "25–40 creators per executive",
      "coreFunctions": [
        {
          "title": "Without a Creator Network",
          "items": [
            "Campaign messaging feels forced",
            "Opposition narratives dominate social media",
            "Youth audiences disconnect",
            "Organic reach becomes weak",
            "Cultural moments are missed",
            "Response speed becomes slow"
          ]
        },
        {
          "title": "Creator Management",
          "items": [
            "Finds creators; evaluates creators; onboards creators",
            "Builds long-term relationships",
            "Handles payments and negotiations",
            "Creators can include: political creators, meme pages, satire creators, lifestyle influencers, regional pages, youth creators, devotional pages, student creators"
          ]
        },
        {
          "title": "Narrative Execution",
          "items": [
            "Converts campaign messaging into creator-friendly content",
            "Includes: creator briefs, talking points, reel ideas, captions, meme references, hashtags, infopacks",
            "The content should feel natural and not scripted",
            "Each creator presents the same narrative in their own style"
          ]
        },
        {
          "title": "Daily Operations",
          "items": [
            "Daily creator communication",
            "Content approvals",
            "Rollout planning",
            "Posting schedules",
            "Cross-promotion",
            "Draft reviews",
            "Crisis handling",
            "Content correction if needed",
            "The team works at internet speed and reacts quickly to breaking events"
          ]
        },
        {
          "title": "Performance Tracking",
          "items": [
            "Reach",
            "Engagement",
            "Watch time",
            "Shares",
            "Comment sentiment",
            "Hashtag performance",
            "Narrative spread",
            "Focus is whether the narrative is actually influencing audience opinion — not only views"
          ]
        },
        {
          "title": "Inputs Received From",
          "items": [
            "Narrative Teams — daily political messaging, attack/defense priorities, rapid response narratives",
            "Research Teams — audience insights, regional sentiment, geo-targeting data",
            "Ground Teams — local issues, public mood, regional trends"
          ]
        },
        {
          "title": "Internal Workflow",
          "items": [
            "Receives campaign narrative",
            "Converts it into creator content",
            "Matches the narrative with suitable creators",
            "Shares briefs and references",
            "Reviews drafts",
            "Approves final content",
            "Coordinates posting",
            "Tracks audience response"
          ]
        },
        {
          "title": "Operational Speed Example",
          "items": [
            "11 AM → Narrative changes",
            "1 PM → Creator briefs updated",
            "3 PM → Draft approvals complete",
            "6 PM → Content live across creator network",
            "Fast execution helps control online conversations before opposition narratives spread"
          ]
        },
        {
          "title": "Regional Understanding",
          "items": [
            "Local culture",
            "Meme trends",
            "Festivals",
            "Religious sensitivity",
            "Sports moments",
            "Youth internet behavior",
            "Regional language tone",
            "Content timing should match audience mood and cultural context"
          ]
        }
      ],
      "skills": {
        "must": [
          "Cultural Understanding — regional culture, internet trends, political sentiment, meme culture",
          "Creator Management — build creator relationships, negotiate effectively, retain creators long term",
          "Narrative Writing — convert political messaging into reel concepts, captions, scripts, meme ideas, tweet threads",
          "Fast Execution — react quickly, handle breaking news, coordinate fast rollouts",
          "Crisis Handling — identify risky content, backlash risks, narrative mistakes before they become major issues"
        ]
      },
      "finalGoal": [
        "Shape online conversations",
        "Influence public opinion",
        "Build emotional connection with audiences",
        "Spread narratives across social media naturally",
        "Make campaign messaging feel like public sentiment instead of political advertising"
      ],
      "speedTimeline": [
        {
          "t": "11 AM",
          "e": "Narrative changes"
        },
        {
          "t": "1 PM",
          "e": "Creator briefs updated"
        },
        {
          "t": "3 PM",
          "e": "Draft approvals complete"
        },
        {
          "t": "6 PM",
          "e": "Content live across creator network"
        }
      ],
      "heroCallout": "One message shared by hundreds of trusted creators feels more real than one message coming from one official account."
    }
  ];;

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
  // narrative (QRT) — only teams explicitly named in QRT Updated Doc §3 (lines 22-28)
  // and §12 (lines 111-114) that map to website teams. Others (Leadership, Communications,
  // Campaigns, Nexgrow, Research, PI) are external/parent and not site teams.
  ["narrative","media"],["narrative","partnership"],

  ["arc","party"],["arc","smcc"],["arc","growth"],["arc","media"],["arc","non-meta"],
  ["media","party"],["media","party-coord"],["media","smcc"],
  ["legal","growth"],["legal","smcc"],["legal","non-meta"],["legal","tvc"],["legal","campaign-branding"],
  ["growth","smcc"],["growth","campaign-branding"],["growth","non-meta"],
  ["smcc","campaign-branding"],["smcc","third-party"],["smcc","party"],
  ["partnership","arc"],["partnership","growth"],["partnership","legal"],["partnership","third-party"],
  ["reporter","media"],["reporter","tvc"],["reporter","party"],
  ["tvc","campaign-branding"],["tvc","non-meta"],
  ["party-coord","party"],["party-coord","media"],["party-coord","smcc"],
  ["surrogate","third-party"],
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
