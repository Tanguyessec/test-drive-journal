/* =========================================================
   Test Drive Journal — Digital Platforms Test Drive (ESSEC)
   ---------------------------------------------------------
   To add a new session after a class:
   1. Copy one object in SESSIONS below (or fill an "upcoming" one)
   2. Set status: "done", add takeaways + games
   3. git commit + push → Vercel redeploys automatically
   ========================================================= */

const CONFIG = {
  studentName: "Tanguy",               // ← change if needed
  course: "Digital Platforms Test Drive",
  school: "ESSEC Business School · MSc Marketing Management & Digital",
  lecturer: "Madina Kalyayeva",
  term: "October 2026",
};

/* ---------------- Game definitions ----------------
   Types:
   - quiz:  { type:"quiz", title, intro, questions:[{q, options:[], answer:index, why}] }
   - sort:  { type:"sort", title, intro, buckets:[{id,name,desc}], items:[{label,bucket}] }
   - order: { type:"order", title, intro, steps:[ "...", "..." ] }  (steps listed in the correct order)
--------------------------------------------------- */

const SESSIONS = [
  {
    id: "session-1",
    status: "done",
    guest: false,
    short: "S1 · Platform types",
    number: "Session 1",
    date: "3 Oct 2026",
    title: "Digital Marketing Platform Types in the AI Era",
    speakers: [{ name: "Madina Kalyayeva", role: "Lecturer · MD, Tilt Creative Agency" }],
    lead:
      "Kick-off session: why platforms change so fast, how Singaporeans actually use social media, how AI is reshaping every part of the marketing stack, and the 10 types of digital marketing platforms brands combine.",
    stats: [
      { value: "5.33M", label: "social media users in Singapore (90.6% of population)" },
      { value: "17 h", label: "per week on social, across 7.4 platforms" },
      { value: "1 in 3", label: "Singaporeans use ChatGPT every month" },
      { value: "71.1%", label: "of SG online adults worry about real vs fake" },
    ],
    takeaways: [
      {
        title: "The AI shift",
        points: [
          "Search → answers: AI Overviews, ChatGPT and Perplexity answer before anyone clicks, so brands compete to be cited.",
          "Targeting → AI buying: Advantage+, Performance Max and Smart+ pick audience, placement and budget. Your creative is the targeting.",
          "Production → GenAI: Veo, Runway, Kling, Firefly and Symphony turn one idea into hundreds of versions.",
          "Trust is the new currency: label AI content and protect authenticity.",
        ],
      },
      {
        title: "10 platform types",
        points: [
          "Social media · Influencer & creator · Content & GenAI production · Email, CRM & messaging · Search (SEO, SEM & GEO).",
          "Programmatic & retail media · Affiliate & social commerce · Mobile & super-apps · Automation & AI agents · Analytics & measurement.",
          "Each one mixes paid, organic and hybrid tactics, and the best campaigns combine several.",
        ],
      },
      {
        title: "SEA examples worth remembering",
        points: [
          "Agoda made its 2025 Singapore flight ads in-house with GenAI and ran them on YouTube, Meta and TikTok.",
          "Video & live commerce = 32% of SEA platform e-commerce GMV in 2025; TikTok Shop SEA GMV doubled to US$45.6B.",
          "Watch-out: McDonald's Netherlands pulled its AI Christmas ad after an “AI slop” backlash — efficiency is not the brief.",
        ],
      },
      {
        title: "Strategy vocabulary",
        points: [
          "Campaign: a planned series of content over a set period, designed for a measurable outcome.",
          "Strategy, channel management, ad campaigns, data collection and benchmarking each answer a different question.",
          "Without 3rd-party tracking: build 1st-party data, use contextual targeting and data clean rooms.",
          "New metric family: AI visibility — share of AI answers that mention your brand.",
        ],
      },
    ],
    reflection:
      "What stuck with me: targeting has quietly moved from the media plan to the creative. If the algorithm finds the audience, the marketer's job is to feed it many strong, honest creative variations and to measure what really worked independently of the platform's own dashboard.",
    games: [
      {
        type: "quiz",
        title: "Name that platform type",
        intro: "Each case comes from the Session 1 slides. Which of the 10 platform types does it illustrate?",
        questions: [
          {
            q: "Lazada runs Google Ads in Indonesia on terms like “best Ramadan discounts”.",
            options: ["Search: SEO, SEM & GEO", "Programmatic & retail media", "Email, CRM & messaging", "Mobile & super-apps"],
            answer: 0,
            why: "Paying for high-intent search terms is SEM — part of the Search platform type.",
          },
          {
            q: "Guardian pays SG beauty influencers who embed referral links in YouTube vlogs and IG posts.",
            options: ["Content marketing", "Affiliate & social commerce", "Programmatic & retail media", "Analytics & measurement"],
            answer: 1,
            why: "Referral links paid on performance = affiliate & social commerce.",
          },
          {
            q: "Zalora's “Wishlist Reminders” bring customers back to buy saved items.",
            options: ["Social media marketing", "Mobile & super-apps", "Email, CRM & messaging", "Influencer marketing"],
            answer: 2,
            why: "Retention built on 1st-party data is the core of email, CRM & messaging.",
          },
          {
            q: "DBS's digibot resolves 9 in 10 customer queries without follow-up.",
            options: ["Marketing automation & AI agents", "Search: SEO, SEM & GEO", "Content & GenAI production", "Analytics & measurement"],
            answer: 0,
            why: "Automation has moved from triggers to agents that handle service around the clock.",
          },
          {
            q: "WPP Media x GrabAds used anonymised transaction + location signals to plan media across 6 SEA markets.",
            options: ["Influencer & creator", "Programmatic & retail media", "Affiliate & social commerce", "Email, CRM & messaging"],
            answer: 1,
            why: "Retail media puts ads next to real purchase data.",
          },
          {
            q: "Google opened its open-source Meridian marketing-mix model to all advertisers.",
            options: ["Programmatic & retail media", "Marketing automation", "Analytics & measurement", "Search"],
            answer: 2,
            why: "Marketing-mix modelling is about independent proof of what worked.",
          },
          {
            q: "Which of these is a GEO (Generative Engine Optimisation) tactic?",
            options: [
              "Buying more pre-roll ads",
              "Clear answers, FAQs, structured data and third-party mentions",
              "Sending more push notifications",
              "Increasing the email frequency",
            ],
            answer: 1,
            why: "GEO = making your content the kind AI tools quote and link to.",
          },
          {
            q: "With an AI summary on the page, how often do users click a search result (Pew, 2025)?",
            options: ["About 30%", "About 15%", "About 8%", "About 1%"],
            answer: 2,
            why: "8% with an AI summary vs 15% without — answers come before clicks.",
          },
        ],
      },
      {
        type: "sort",
        title: "Sort the metrics",
        intro: "Benchmarking uses different metric families. Tap a metric, then tap the family it belongs to.",
        buckets: [
          { id: "trans", name: "Transactional", desc: "Sales & conversions" },
          { id: "comp", name: "Competitive", desc: "Versus the market" },
          { id: "eng", name: "Engagement", desc: "Interactions" },
          { id: "perc", name: "Perceptual", desc: "How customers feel" },
          { id: "ai", name: "AI visibility", desc: "Presence in AI answers" },
        ],
        items: [
          { label: "Conversion rate", bucket: "trans" },
          { label: "Revenue", bucket: "trans" },
          { label: "Share of voice", bucket: "comp" },
          { label: "Market share", bucket: "comp" },
          { label: "Email open rate", bucket: "eng" },
          { label: "Click-throughs", bucket: "eng" },
          { label: "Net Promoter Score", bucket: "perc" },
          { label: "Customer satisfaction score", bucket: "perc" },
          { label: "Share of AI answers mentioning the brand", bucket: "ai" },
          { label: "AI-assistant referral traffic", bucket: "ai" },
        ],
      },
    ],
  },

  {
    id: "session-2",
    status: "done",
    guest: false,
    short: "S2 · Tools & media buying",
    number: "Session 2",
    date: "9 Oct 2026",
    title: "Digital Marketing Tools & Media Buying",
    speakers: [{ name: "Madina Kalyayeva", role: "Lecturer" }],
    lead:
      "The tools marketers use to plan, buy, automate and measure — from single-purpose point tools to suites and AI agents — plus each social platform's own ad tools and the difference between organic and paid media.",
    stats: [
      { value: "15,505", label: "martech products in 2026 (+0.79%, “peak martech”)" },
      { value: "3–5%", label: "of Instagram followers reached by an organic post" },
      { value: "~1%", label: "organic reach on Facebook" },
      { value: "460M+", label: "TikTok users in Southeast Asia" },
    ],
    takeaways: [
      {
        title: "Four types of tools + an AI layer",
        points: [
          "Point tools do one job very well (Mailchimp, Meltwater, Brand24).",
          "Platforms cover one or two areas and open an API (Salesforce Data 360).",
          "Suites bundle several products from one provider (Adobe Marketo Engage, Oracle Eloqua, HubSpot).",
          "Hubs centralise operations, collaboration, data integration and analytics.",
          "On top: copilots (ChatGPT, Claude, Gemini) and agents (Agentforce, Meta Business Agent, Google Ask Advisor).",
        ],
      },
      {
        title: "Platform-native ad tools",
        points: [
          "TikTok: Symphony (AI creative), Spark Ads (boost creators' posts), Smart+ & GMV Max.",
          "Meta: Advantage+ audience, creative and campaign budget; Business Agent selling on WhatsApp, IG & Messenger.",
          "LinkedIn: job-title targeting, Thought Leader Ads, Lead Gen Forms, Message Ads.",
          "YouTube: skippable in-stream (skip after 5 s), Demand Gen, Peak Points (Gemini). X: Grok in Ads Manager.",
        ],
      },
      {
        title: "Organic vs paid",
        points: [
          "Organic builds relationships, brand voice and community — but reach is tiny.",
          "Paid “rents premium space”: boosted posts, targeted campaigns, creator partnership ads, AI-automated campaigns.",
          "Paid only delivers while you keep funding it — so you need both.",
        ],
      },
      {
        title: "New channels on the radar",
        points: [
          "Threads ads (Jan 2026), Pinterest Performance+, Reddit (often cited by AI answers).",
          "ChatGPT Ads live in Singapore since 23 Sep 2026.",
          "Retail media: Shopee Ads, Lazada Sponsored Solutions, TikTok Shop, GrabAds.",
          "Rule: test small, measure incrementality, then scale.",
        ],
      },
    ],
    reflection:
      "Key idea for me: pick tools that share clean data with each other — AI is only as good as what it can connect to. And on TikTok today, reach is easy to prove; incremental sales are much harder, which is why independent measurement matters.",
    games: [
      {
        type: "sort",
        title: "Point tool, platform, suite or agent?",
        intro: "Tap a tool, then tap the category it belongs to.",
        buckets: [
          { id: "point", name: "Point tool", desc: "One specific function" },
          { id: "platform", name: "Platform", desc: "Broad, 1–2 areas, API" },
          { id: "suite", name: "Suite", desc: "Several products, one provider" },
          { id: "agent", name: "AI agent", desc: "Takes a goal and acts" },
        ],
        items: [
          { label: "Mailchimp", bucket: "point" },
          { label: "Meltwater", bucket: "point" },
          { label: "Brand24", bucket: "point" },
          { label: "Salesforce Data 360", bucket: "platform" },
          { label: "Adobe Marketo Engage", bucket: "suite" },
          { label: "Oracle Eloqua", bucket: "suite" },
          { label: "HubSpot", bucket: "suite" },
          { label: "Salesforce Agentforce", bucket: "agent" },
          { label: "Meta Business Agent", bucket: "agent" },
          { label: "Google Ask Advisor", bucket: "agent" },
        ],
      },
      {
        type: "sort",
        title: "Whose feature is it?",
        intro: "Match each ad feature to the platform that offers it.",
        buckets: [
          { id: "tiktok", name: "TikTok", desc: "For Business" },
          { id: "meta", name: "Meta", desc: "Ads Manager" },
          { id: "linkedin", name: "LinkedIn", desc: "Campaign Manager" },
          { id: "youtube", name: "YouTube", desc: "Google Ads" },
          { id: "x", name: "X", desc: "X Ads" },
        ],
        items: [
          { label: "Symphony", bucket: "tiktok" },
          { label: "Spark Ads", bucket: "tiktok" },
          { label: "GMV Max", bucket: "tiktok" },
          { label: "Advantage+ Creative", bucket: "meta" },
          { label: "Business Agent", bucket: "meta" },
          { label: "Lead Gen Forms", bucket: "linkedin" },
          { label: "Thought Leader Ads", bucket: "linkedin" },
          { label: "Peak Points", bucket: "youtube" },
          { label: "Demand Gen", bucket: "youtube" },
          { label: "Grok in Ads Manager", bucket: "x" },
        ],
      },
      {
        type: "quiz",
        title: "Organic or paid?",
        intro: "Quick check on organic vs paid social.",
        questions: [
          {
            q: "Employees sharing company updates in their own networks is…",
            options: ["Paid", "Organic (employee advocacy)"],
            answer: 1,
            why: "No budget involved — it's organic reach through people.",
          },
          {
            q: "Boosting a creator's TikTok video with Spark Ads is…",
            options: ["Paid", "Organic"],
            answer: 0,
            why: "Spark Ads put budget behind an organic post — it becomes paid media.",
          },
          {
            q: "What happens to a paid campaign's results when you stop funding it?",
            options: ["They keep growing", "They stop", "They double"],
            answer: 1,
            why: "Paid ad campaigns typically only deliver while you keep funding them.",
          },
          {
            q: "On YouTube skippable in-stream ads, when do you pay?",
            options: ["On every impression", "On a 30-second view or a click", "Only on a purchase"],
            answer: 1,
            why: "Users can skip after 5 s; the advertiser pays on a 30-s view (or full ad if shorter) or a click.",
          },
        ],
      },
    ],
  },

  {
    id: "launchlab",
    status: "done",
    guest: true,
    short: "Guest · LaunchLab",
    number: "Guest session",
    date: "9 Oct 2026",
    title: "LaunchLab: Vibe Coding with Claude, GitHub & Vercel",
    speakers: [
      { name: "Yibo", role: "LaunchLab" },
      { name: "Nirvan", role: "LaunchLab" },
      { name: "Rishabh", role: "LaunchLab" },
    ],
    lead:
      "How to go from an idea to a live website without writing code by hand: design the front end with Claude Design, build it with Claude Code, store it on GitHub and deploy it with Vercel. This site is the result of that session.",
    stats: [
      { value: "3", label: "steps: Design → Build → Deploy" },
      { value: "3", label: "core files: HTML, CSS, JS" },
      { value: "1", label: "push to GitHub = 1 Vercel redeploy" },
    ],
    takeaways: [
      {
        title: "The whole workflow",
        points: [
          "Design: Claude Design builds the visual shell — just describe it.",
          "Build: “Handoff to Claude Code…” (Share menu) turns the design into a real site.",
          "Deploy: localhost, tiiny.host, or GitHub + Vercel for a live public link.",
        ],
      },
      {
        title: "Prompting is the skill",
        points: [
          "Bad: “Create a website for my course.”",
          "Good: give a role, a goal, the target audience, the pages, the design style, key features and the output you expect.",
          "Ask for something easy to expand later (like adding one tab per session).",
        ],
      },
      {
        title: "GitHub vocabulary",
        points: [
          "Repository: where files and their history live. Fork: your copy of someone else's repo. Clone: copy a repo to your computer.",
          "Commit: a saved snapshot (local only). Push: send commits to GitHub.",
          "Pull request: propose changes for review. Merge: combine them into main.",
        ],
      },
      {
        title: "Vercel & beyond",
        points: [
          "GitHub stores the code; Vercel turns it into a website and redeploys on every push.",
          "Every pull request gets its own preview link.",
          "A static site forgets everyone and only knows its own files. Logins and saved data need a backend like Supabase.",
          "Logging in is just an API call: sign up adds a row, log in hands back a token, log out throws it away.",
        ],
      },
    ],
    reflection:
      "Biggest surprise: the technical part is now the easy part. The real work is the brief — being precise about audience, structure and style — which is exactly what marketers already do when they brief an agency.",
    games: [
      {
        type: "order",
        title: "Ship it! Put the workflow in order",
        intro: "Use the arrows to put the steps from idea to live website in the right order.",
        steps: [
          "Describe the look of the site in Claude Design",
          "Use “Handoff to Claude Code…” from the Share menu",
          "Create a new public repository on github.com",
          "Ask Claude Code to commit everything and push to the repo",
          "Sign in to Vercel with GitHub and import the repo",
          "Click Deploy and get a live public link",
          "Push a change — Vercel redeploys automatically",
        ],
      },
      {
        type: "quiz",
        title: "Which file do I open?",
        intro: "The quiz the LaunchLab team asked the class — plus a few Git questions.",
        questions: [
          {
            q: "You want to change the text on your main button. Which file?",
            options: ["index.html", "styles.css", "script.js"],
            answer: 0,
            why: "index.html holds the words and structure people read.",
          },
          {
            q: "You want to make that button orange. Which file?",
            options: ["index.html", "styles.css", "script.js"],
            answer: 1,
            why: "styles.css controls colours, fonts, spacing and mobile layout.",
          },
          {
            q: "You want the button to do something when clicked. Which file?",
            options: ["index.html", "styles.css", "script.js"],
            answer: 2,
            why: "script.js is the behaviour: clicks, typing, submits.",
          },
          {
            q: "You saved a commit. Is it on GitHub yet?",
            options: ["Yes, automatically", "No — you still need to push"],
            answer: 1,
            why: "A commit is a local snapshot; push sends it up to GitHub.",
          },
          {
            q: "You're in a team and want teammates to review your changes first. You open a…",
            options: ["Fork", "Clone", "Pull request", "Push"],
            answer: 2,
            why: "A pull request proposes changes for review before they're merged.",
          },
          {
            q: "Your Wordle clone forgets every player when the tab closes. What do you need?",
            options: ["More CSS", "A backend / database such as Supabase", "A second index.html", "A faster laptop"],
            answer: 1,
            why: "Static sites only know their own files; user data needs a backend.",
          },
          {
            q: "What is a login token?",
            options: [
              "Your password, stored in the browser",
              "A temporary “this is James” sticker sent with each request",
              "A GitHub branch",
            ],
            answer: 1,
            why: "The token proves who you are without re-sending your password, and it expires on its own.",
          },
        ],
      },
    ],
  },

  {
    id: "session-3",
    status: "done",
    guest: false,
    short: "S3 · Media buying & objectives",
    number: "Session 3",
    date: "23 Oct 2026",
    title: "Media Buying, Media Agencies & Campaign Objectives",
    speakers: [{ name: "Madina Kalyayeva", role: "Lecturer" }],
    lead:
      "Why organic reach alone is not enough, what media agencies still do when platforms automate the buy, how to pick the right Meta campaign objective, and the brief for our final omni-channel group project.",
    stats: [
      { value: "US$338.75B", label: "social media ad spend worldwide in 2026 (Statista)" },
      { value: "3–5%", label: "of Instagram followers see an organic post (~1% on Facebook)" },
      { value: "US$588M", label: "social ad spend in Singapore in 2025 (+15.2%)" },
      { value: "6", label: "Meta campaign objectives, from Awareness to Sales" },
    ],
    takeaways: [
      {
        title: "Organic vs paid: you need both",
        points: [
          "Organic = unpaid posts, stories, UGC and employee advocacy. It builds the relationship and the brand voice, but reaches only a small share of followers.",
          "Paid = “renting premium ad space”: boosted posts, targeted campaigns, creator partnership ads (Spark Ads, Meta partnership ads) and AI-automated campaigns (Advantage+, Smart+, Performance Max).",
          "Paid only works while you keep paying, can feel less authentic, and AI automation can be a black box: the platform decides where the money goes, so you need your own measurement.",
          "The winning agency strategy combines paid reach with organic engagement.",
        ],
      },
      {
        title: "AI + human media buyers",
        points: [
          "AI can now build, buy and optimise whole campaigns, but it lacks context, strategy and cultural nuance.",
          "Bad data = bad recommendations. Platform AI optimises for the platform's own metrics; humans check what really drove incremental sales.",
          "Creativity and consumer psychology (stories, emotional triggers, reacting to real-world events) stay human.",
          "Best formula: AI for efficiency + human expertise for judgement and constant optimisation.",
        ],
      },
      {
        title: "Media agencies in 2026",
        points: [
          "Core jobs: strategy & planning, ad buying & bidding, optimisation & tracking, creative execution.",
          "Why brands still use them: expertise, better pricing and premium inventory, their own data and AI tools, and time saved.",
          "Big changes: Omnicom completed its IPG acquisition (Nov 2025, ~US$26B revenue); GroupM became WPP Media (May 2025); agencies run their own AI platforms (WPP Open, Publicis Marcel, Omnicom Omni).",
          "As Meta, Google and TikTok automate the buy, agencies move to strategy, data, creative and measurement. Even ChatGPT Ads in SEA are sold through the big agency groups.",
        ],
      },
      {
        title: "Choosing the right Meta objective",
        points: [
          "The objective decides how Meta's algorithm optimises delivery, who sees the ad and how performance is measured.",
          "Top of funnel: Awareness (brand awareness, reach). Middle: Traffic, Engagement, Leads. Bottom: App promotion, Sales.",
          "Choose by funnel stage, business goal, and ad format & budget, then test: multiple creatives and audiences, CTR, CPA, ROAS, A/B tests on the CTA.",
          "Common mistakes: wrong objective, no continuous optimisation, no custom or lookalike audiences, no clear CTA.",
        ],
      },
      {
        title: "Final project: the omni-channel campaign",
        points: [
          "Create a digital campaign for a hypothetical new product of a real brand (e.g. Dyson launches speakers).",
          "At least 2 platforms + at least 1 AI component, with the human decisions around it explained (research, creative, buying, GEO check, measurement or disclosure).",
          "Include: SMART objective, personas, content types, messaging, KPIs per funnel stage, a US$100,000 budget split (keep 10–15% for test-and-learn) and a 3-month timeline.",
          "20-minute group pitch + 5 minutes Q&A in December; 50% of the grade.",
        ],
      },
    ],
    reflection:
      "The idea I keep coming back to is that the objective is not a box to tick in Ads Manager: it tells the algorithm what to look for. Pick the wrong one and the AI will optimise very efficiently for the wrong result. That is also why agencies are not disappearing: when the platform does the buying, the value moves to choosing the goal, checking the data and proving what actually worked.",
    games: [
      {
        type: "sort",
        title: "Pick the Meta objective",
        intro: "Examples from the Session 3 slides. Tap a situation, then tap the campaign objective that fits it best.",
        buckets: [
          { id: "aw", name: "Awareness", desc: "Top of funnel" },
          { id: "tr", name: "Traffic", desc: "Send people somewhere" },
          { id: "en", name: "Engagement", desc: "Interactions" },
          { id: "le", name: "Leads", desc: "Collect contact info" },
          { id: "ap", name: "App promotion", desc: "Installs & app actions" },
          { id: "sa", name: "Sales", desc: "Purchases" },
        ],
        items: [
          { label: "Graff keeps a new jewellery collection top-of-mind with high-value audiences", bucket: "aw" },
          { label: "Oppo wants maximum visibility before its launch event", bucket: "aw" },
          { label: "Club21 drives shoppers to its website during a sale", bucket: "tr" },
          { label: "Only count people who actually load the landing page", bucket: "tr" },
          { label: "A wellness influencer wants more shares on a workout video", bucket: "en" },
          { label: "Boost RSVPs for an event", bucket: "en" },
          { label: "Elemis collects enquiries with an instant form", bucket: "le" },
          { label: "An app like Strip attracts new users and downloads", bucket: "ap" },
          { label: "A multi-brand store shows a private catalogue sale to past customers", bucket: "sa" },
          { label: "Drive foot traffic to a physical store", bucket: "sa" },
        ],
      },
      {
        type: "quiz",
        title: "Paid, organic & agencies",
        intro: "Six questions on Session 3.",
        questions: [
          {
            q: "In 2026, roughly what share of Instagram followers see a brand's organic post?",
            options: ["About 25%", "About 10–15%", "About 3–5%", "Less than 0.1%"],
            answer: 2,
            why: "Organic reach is around 3–5% on Instagram and about 1% on Facebook, which is why paid media is needed to scale.",
          },
          {
            q: "What is the main risk of AI-automated campaigns like Advantage+ or Performance Max?",
            options: [
              "They cannot run video ads",
              "They are a black box, so you need your own measurement",
              "They only work for B2B brands",
              "They are always more expensive than manual campaigns",
            ],
            answer: 1,
            why: "The platform decides where the money goes and optimises for its own metrics, so you need independent proof of what worked.",
          },
          {
            q: "Which deal created the world's largest marketing holding company in November 2025?",
            options: ["WPP + Publicis", "Omnicom + IPG", "Dentsu + Havas", "Meta + Google"],
            answer: 1,
            why: "Omnicom completed its acquisition of IPG, reaching about US$26B in revenue.",
          },
          {
            q: "What is GroupM called since May 2025?",
            options: ["WPP Media", "Publicis Marcel", "Omnicom Omni", "Havas Converged"],
            answer: 0,
            why: "GroupM became WPP Media; its agencies now run on the WPP Open AI platform.",
          },
          {
            q: "A B2B software company wants qualified prospects to contact. Which objective fits best?",
            options: ["Awareness", "Engagement", "Leads", "App promotion"],
            answer: 2,
            why: "The slides use exactly this example: B2B software prioritises Leads, e-commerce prioritises Sales.",
          },
          {
            q: "In the final project, how much of the US$100,000 budget should be kept as a test-and-learn reserve?",
            options: ["0%", "10–15%", "30–40%", "50%"],
            answer: 1,
            why: "The brief asks for a 10–15% reserve to test and then move money to what performs.",
          },
        ],
      },
    ],
  },

  {
    id: "session-4",
    status: "done",
    guest: false,
    short: "S4 · Media teams & the brief",
    number: "Session 4",
    date: "30 Oct 2026",
    title: "Managing Media Campaigns: the Media Team, the Brief & AI Agents",
    speakers: [{ name: "Madina Kalyayeva", role: "Lecturer" }],
    lead:
      "Who does what in a media team and how AI changes each role, why the brief is the most important document of a campaign, and a real agency proposal: M&C Saatchi's B2B campaign for WWF Singapore, down to the media plan.",
    stats: [
      { value: "5", label: "core roles: strategist, buyer, trader, analyst, manager" },
      { value: "+1,587%", label: "job posts asking for “AI agent” skills in 2025 (Randstad)" },
      { value: "94%", label: "of B2B buyers use AI chatbots in their buying journey (Forrester)" },
      { value: "15%", label: "media handling fee on top of media spend in the WWF plan" },
    ],
    takeaways: [
      {
        title: "The media team and how AI changes it",
        points: [
          "Strategist: chooses channels, budgets and tactics. Uses AI for research and scenarios but still owns the objective and the big idea.",
          "Buyer & trader: less manual bidding, more setting goals, budgets, data and guardrails for Advantage+, Performance Max, Smart+ and LinkedIn Accelerate.",
          "Analyst: moves from platform reports to incrementality tests and marketing-mix models (Google Meridian, Meta Robyn).",
          "Manager: runs timelines, budgets and stakeholders, and now adds AI governance (where AI may be used, disclosure, brand safety, data privacy).",
          "New roles: creative-automation specialists, data engineers and measurement leads.",
        ],
      },
      {
        title: "The brief is the most important document",
        points: [
          "It sets the objectives, budget, dates, target audience and business KPIs, so the brand, media buyers, planners and creatives all work towards the same goal.",
          "If the brief is unclear, or the agency spots an opportunity outside it, answer with a reverse brief to confirm objectives with the client.",
          "In the AI era, add: available first-party data and conversion signals (Pixel, Conversions API, CRM), how much creative the AI needs to test, the measurement plan, and AI rules (approval, disclosure, Singapore's PDPA).",
          "New touchpoints to brief for: ChatGPT Ads (Singapore since Sep 2026) and ads in Google AI Overviews (Singapore since Dec 2025).",
          "Use AI to stress-test the brief for gaps and risks, but AI drafts, humans decide.",
        ],
      },
      {
        title: "Case: WWF Singapore × M&C Saatchi",
        points: [
          "Brief: promote “Together Possible @ Work”, WWF's employee-engagement and workplace-giving programmes, to companies in Singapore.",
          "Audience: 30–50-year-old decision makers (C-level, HR directors) looking for ways to raise productivity and wellbeing.",
          "Insights: employees choose purpose and wellbeing over money, while companies still treat CSR and team building as extras.",
          "Direction “Together we lead with purpose”, creative line “Purpose is ours to create”, with brand-led, product-led and consumer-led messaging pillars.",
          "Organic posts document real workshops and impact (e.g. 250 solar lights built in 2 hours); sponsored posts use a provocative contrast, lead-gen forms and LinkedIn conversation ads.",
        ],
      },
      {
        title: "Reading a media plan",
        points: [
          "12 weeks on Meta, LinkedIn and Google Search: US$22,217 of media, US$25,550 with the 15% handling fee.",
          "Planned costs: US$0.90 per Meta click, US$10 per Meta lead, US$60 per LinkedIn lead, US$50 per LinkedIn conversation, US$8 per Google search lead.",
          "Meta leads are cheaper but often less qualified than LinkedIn leads, so the plan tests US$3k on each, then shifts the rest to the better performer.",
          "B2B in 2026: about 13 internal stakeholders and 9 external influencers per purchase, procurement decides in 53% of cases, and buyers still double-check AI answers with people.",
        ],
      },
    ],
    reflection:
      "The WWF media plan was the most useful part for me, because it shows that a plan is a set of assumptions to test, not a final answer. The cheapest lead is not always the best lead, so the agency builds the A/B test into the budget. For our group project, I want to write the brief first, ask an AI to find its gaps, and decide ourselves what to change.",
    games: [
      {
        type: "sort",
        title: "Who does it?",
        intro: "Tap a task, then tap the media-team role it belongs to.",
        buckets: [
          { id: "st", name: "Strategist", desc: "Plan & big idea" },
          { id: "bu", name: "Buyer", desc: "Negotiates & buys" },
          { id: "tr", name: "Trader", desc: "Programmatic, real time" },
          { id: "an", name: "Analyst", desc: "Performance & proof" },
          { id: "ma", name: "Manager", desc: "Execution & governance" },
        ],
        items: [
          { label: "Decides the best channels and budget split", bucket: "st" },
          { label: "Owns the big idea, using AI only for research", bucket: "st" },
          { label: "Negotiates and purchases ad placements", bucket: "bu" },
          { label: "Optimises programmatic bids and placements in real time", bucket: "tr" },
          { label: "Tracks performance and recommends optimisations", bucket: "an" },
          { label: "Runs incrementality tests and marketing-mix models", bucket: "an" },
          { label: "Keeps timelines, budgets and deliverables on track", bucket: "ma" },
          { label: "Sets the AI rules: disclosure, brand safety, data privacy", bucket: "ma" },
        ],
      },
      {
        type: "quiz",
        title: "The brief & the WWF case",
        intro: "Six questions on Session 4.",
        questions: [
          {
            q: "The client's brief is unclear. What should the agency do?",
            options: ["Start buying media anyway", "Send a reverse brief", "Let the platform AI decide", "Double the budget"],
            answer: 1,
            why: "A reverse brief confirms objectives, requirements and alignment with the client before work starts.",
          },
          {
            q: "In the WWF media plan, which channel had the lowest planned cost per lead?",
            options: ["Meta lead form (US$10)", "LinkedIn lead form (US$60)", "Google Search (US$8)", "LinkedIn conversation ad (US$50)"],
            answer: 2,
            why: "Google Search was planned at US$8 per lead, against US$10 on Meta and US$60 on LinkedIn.",
          },
          {
            q: "Why didn't the agency put the whole lead budget on Meta, which is cheaper than LinkedIn?",
            options: [
              "Meta does not allow lead forms",
              "Meta leads can be less qualified, so it A/B tests both first",
              "LinkedIn gives free impressions",
              "The client banned Meta",
            ],
            answer: 1,
            why: "US$3k goes to each platform first; the remaining budget moves to whichever gives better leads.",
          },
          {
            q: "What was the creative line of the WWF campaign?",
            options: ["Together Possible", "Purpose is ours to create", "Change the world at work", "Give more, live more"],
            answer: 1,
            why: "“Purpose is ours to create”, under the direction “Together we lead with purpose”.",
          },
          {
            q: "Which of these belongs in a brief written for the AI era?",
            options: [
              "Only the creative mood board",
              "First-party data and conversion signals, plus a measurement plan",
              "The agency's office address",
              "A list of banned colours",
            ],
            answer: 1,
            why: "AI buying tools need good data signals, and the team needs a plan to prove real impact.",
          },
          {
            q: "What share of B2B buyers use AI chatbots during their buying journey (Forrester, 2026)?",
            options: ["14%", "43%", "71%", "94%"],
            answer: 3,
            why: "94%: generative AI search is now where B2B research starts, so brands must be findable in AI answers.",
          },
        ],
      },
    ],
  },

  {
    id: "guest-yp",
    status: "done",
    guest: true,
    short: "Guest · Yellow Pages",
    number: "Guest session",
    date: "30 Oct 2026",
    title: "Building an AI Marketing Team: a Lite Agentic Workflow with Claude",
    speakers: [
      { name: "Nick Goh", role: "CEO, INSPIRO Consulting · CMO, Yellow Pages Singapore · Marketing Lead, YP Academy" },
    ],
    lead:
      "Nick Goh showed how he built a small “AI marketing team” of Claude agents that takes a fictional Louis Vuitton bag launch, “Terra”, from an email brief all the way to scored Instagram creatives, and why building an AI team is a people problem, not a tool problem.",
    stats: [
      { value: "~8%", label: "of CMOs run campaigns with connected AI agents, while 96% say they transform with AI (BCG)" },
      { value: "15.3%", label: "of marketing budgets go to AI, but only 30% have the skills to scale it (Gartner)" },
      { value: "86% vs 37%", label: "Singapore workers using AI at work vs trained in the past year" },
      { value: "67%", label: "of AI impact comes from culture, managers and talent practices" },
    ],
    takeaways: [
      {
        title: "A people problem, not a tool problem",
        points: [
          "He opened with industry headlines: companies cutting jobs as investment shifts to AI, and WPP folding Ogilvy, VML and AKQA into a single creative brand.",
          "Most marketers still use GenAI as a task helper; the gap is training and processes, not access to tools.",
          "Culture, managers and talent practices explain 67% of the impact people get from AI; individual skills only 32%.",
        ],
      },
      {
        title: "Six agents in two teams",
        points: [
          "Planning team: Brief Writer (drafts the brief from the project context: goal, audience, budget, timing), Brief Validator (critiques it in a fresh chat and gives a verdict + top fixes), Strategist (turns the validated brief into a Big Idea one-pager).",
          "Production team: Designer / Art Director (key visuals through connectors such as Higgsfield), Copywriter (messaging hierarchy, adapted per channel), Reviewer (checks brand voice and sign-off).",
          "Each agent is a Claude skill inside one project (“LVMH AI Marketing Team”) that shares a knowledge base.",
          "An email trigger: a scheduled task checks Gmail every day for a “Marketing Brief” email and drafts the brief automatically.",
        ],
      },
      {
        title: "The handoff chain, with a human in the middle",
        points: [
          "1 Brief Writer → 2 Brief Validator (new chat, fresh eyes) → 3 Strategist → 4 You approve and save to the knowledge base → 5 Designer + Copywriter → 6 Reviewer.",
          "Demo: brief → revised brief → research & strategy foundation → messaging hierarchy (Big Idea: “Nothing to explain.”) → key-visual concepts → images in Higgsfield → Instagram story and post.",
          "The human step is the approval: nothing moves to production until a person signs off the strategy.",
        ],
      },
      {
        title: "The Creative Score: polished ≠ good",
        points: [
          "A “Creative Review Scorer” skill grades the work the way BBH, Ogilvy and McCann would, against the brief and the research.",
          "The Instagram story scored 5.7/10 and the feed post 4.3/10: a generic luxury desert scene, a bag that didn't match the Terra product, and placeholders left in the caption.",
          "A new close-up of a hand on the bag's clasp scored higher (6.7/10): craft is visible, no claim or caption needed.",
          "Lesson: AI makes work look finished fast, but the judgement on what is distinctive stays human, and an honest reviewer agent helps.",
        ],
      },
      {
        title: "How to build the team (Session 4 slides)",
        points: [
          "Hub + spokes: governance, data and risk in a central hub; AI skills embedded in every marketing team. 75% of CMOs are moving to small pods built around goals or customer segments, not channels.",
          "New roles: AI product owner, AI governance owner, GEO/AEO specialist, marketing science; everyone becomes an “agent boss” who builds, delegates to and reviews agents.",
          "Most-needed skills: checking AI output (50%) and critical thinking (46%).",
          "6-step roadmap: map the work → group it into agent jobs → redesign the workflow (don't bolt AI on) → start small and roll out in waves → upskill and govern → measure from day one.",
        ],
      },
    ],
    reflection:
      "This session felt very close to how I built this site. The idea I will reuse is the Brief Validator working in a fresh chat: an agent that checks its own work misses things, while a separate reviewer with fresh eyes catches the gaps. The low creative scores were the most honest part of the demo: the visuals looked expensive but were generic, which shows that AI speeds up production while the human still decides what is good enough. For our group project, we could copy the chain brief → validator → strategist, with the team approving each handoff.",
    games: [
      {
        type: "order",
        title: "Rebuild the handoff chain",
        intro: "Put the six steps of Nick Goh's AI marketing team in the right order.",
        steps: [
          "Brief Writer drafts the brief from the project context",
          "Brief Validator critiques it in a new chat, with fresh eyes",
          "Strategist turns the validated brief into the Big Idea",
          "You approve it and save it to the knowledge base",
          "Designer + Copywriter create the key visuals and channel messaging",
          "Reviewer checks the work against the brand voice and the brief",
        ],
      },
      {
        type: "quiz",
        title: "Building an AI marketing team",
        intro: "Six questions on the guest session.",
        questions: [
          {
            q: "Why does the Brief Validator work in a new chat?",
            options: [
              "To save money on tokens",
              "So it is not biased by the writer's context and sees the brief with fresh eyes",
              "Because skills cannot share a chat",
              "To hide the brief from the client",
            ],
            answer: 1,
            why: "A separate reviewer catches gaps that the agent that wrote the brief would miss.",
          },
          {
            q: "What explains most of the impact people get from AI?",
            options: ["The choice of AI model", "Individual prompting skills", "Culture, managers and talent practices", "The size of the AI budget"],
            answer: 2,
            why: "67% comes from culture, managers and talent practices, against 32% from individual skills.",
          },
          {
            q: "Roughly what share of CMOs run campaigns with connected AI agents?",
            options: ["About 8%", "About 30%", "About 60%", "About 96%"],
            answer: 0,
            why: "96% say they are transforming with AI, but only about 8% run campaigns with connected agents.",
          },
          {
            q: "Why did the Instagram feed post score only 4.3/10?",
            options: [
              "The image was low resolution",
              "It was generic, the bag didn't match the product and placeholders were left",
              "It was too long",
              "It had no hashtags",
            ],
            answer: 1,
            why: "Polished but generic: a luxury-in-the-desert image that could sell any bag, with unfinished caption details.",
          },
          {
            q: "Where does the human sit in the handoff chain?",
            options: [
              "Nowhere, it is fully automated",
              "Only at the very end",
              "In the middle: approving the strategy before production starts",
              "Only writing the first email",
            ],
            answer: 2,
            why: "Step 4: you approve and save to the knowledge base before the production team starts.",
          },
          {
            q: "Which skill tops the list for marketers working with AI?",
            options: ["Coding", "Checking AI output", "Video editing", "Public speaking"],
            answer: 1,
            why: "Checking AI output (50%) comes first, followed by critical thinking (46%).",
          },
        ],
      },
    ],
  },

  {
    id: "session-5",
    status: "done",
    guest: true,
    short: "S5 · Audiences & LinkedIn",
    number: "Session 5",
    date: "13 Nov 2026",
    title: "Audience Insights, Investment Principles & LinkedIn in the Era of LLMs",
    speakers: [
      { name: "Madina Kalyayeva", role: "Lecturer" },
      { name: "Cindy Leong", role: "Head of Scaled Agency Development, APAC · LinkedIn" },
    ],
    lead:
      "How a media planner goes from the brief to the plan: understanding the audience (insights vs size), the free and paid tools to do it, what AI changes in research and audience sizing, and the principles behind investment decisions. Then a guest session with LinkedIn on moving from SEO to GEO.",
    stats: [
      { value: "1B+", label: "LinkedIn members worldwide, incl. executives from every Fortune 500 company" },
      { value: "300 / 50k+", label: "LinkedIn audience: minimum to serve / recommended size" },
      { value: "30 → 3 days", label: "Aveeno's strategy brief with synthetic audiences" },
      { value: "10–20%", label: "max share of synthetic respondents in a sample" },
    ],
    takeaways: [
      {
        title: "From brief to media plan",
        points: [
          "Campaign lifecycle: brief clarified with marketing → content and media teams research in parallel → align on an upfront strategy → content strategy and media strategy → content produced and media plan built → campaign goes live.",
          "Media strategy = the high-level HOW, WHERE and WHEN to reach the right audience. Media plan = the tactical execution: specific channels, budget split and timing.",
          "Stages of media planning: business context → audience insights → channel decisioning → investment decisioning → measurement plan → media plan.",
          "Planners face a changing landscape, budget limits, stakeholder priorities, finding the audience, platform fragmentation and attribution. Planning is also about giving stakeholders confidence through educated decisions.",
        ],
      },
      {
        title: "Audience insights vs audience size",
        points: [
          "Insights are qualitative (who they are, what they do): research tools like GWI, Nielsen, Semrush, Meltwater, plus site analytics (GA4, Adobe Analytics).",
          "Size is quantitative (how many you can reach): taken from the platforms where you buy (Meta, DV360, TikTok, LinkedIn, Google Keyword Planner).",
          "Good audience understanding minimises media wastage: ads shown to people outside the target, which lowers results and ROI.",
          "No budget for paid tools? Google Trends, Think with Google, TikTok Creative Center, Meta Foresight (ex-Facebook IQ), Reddit and LLMs. Ask: online behaviours, channels, how they research, what drives purchase, content, interests, attitudes to brands, similar case studies.",
        ],
      },
      {
        title: "AI in audience research and sizing",
        points: [
          "Deep research agents (ChatGPT, Gemini, Perplexity) draft an audience brief in minutes, but always check their sources. GWI Spark, Meltwater Mira and Nielsen Ad Intel AI add AI inside the tools.",
          "Synthetic audiences (Simile, Aaru, Evidenza) answer surveys in hours, but Pew found AI twins flattened opinions (98% vs 42% on one question) and Strat7 found willingness-to-pay 16% too high.",
          "Rule: use AI to explore and form hypotheses, then validate with real data; cap synthetic respondents at 10–20% of a sample.",
          "With Meta Advantage+, age and interests are only suggestions, so the estimate is the broad reachable pool. TikTok counts accounts that saw ads in 30 days, not people. So what: size the market with research tools, the reachable audience with platforms, and let the AI find people inside it.",
        ],
      },
      {
        title: "Audience mining, step by step",
        points: [
          "1 Identify the target audience (from the client or a reverse brief) → 2 define it in market insight tools → 3 identify key behaviours and insights → 4 define it on the media buying platforms → 5 identify audience sizes and the budget needed.",
          "Example with free tools: use an LLM to synthesise third-party research, check the platform's ad tool for addressable size, then look at real conversations (e.g. makeup tutorials, “natural looks”) to find messaging points.",
        ],
      },
      {
        title: "Media investment principles",
        points: [
          "Four principles for any objective: annual ROI & sustained profitability, customer quality, design to learn, long-term incrementality.",
          "ROI = (profit − ad spend) / ad spend, tracked across 12 months, not only per campaign.",
          "Customer quality: acquiring a customer is an investment. A low CAC means little if the customer only buys on discount or switches brands.",
          "Four customer types by satisfaction × profitability: Star customers, Free riders, Vulnerable customers, Lost causes. Class case: which Sephora shopper to prioritise?",
        ],
      },
      {
        title: "Guest: LinkedIn, from SEO to GEO",
        points: [
          "Cindy Leong leads LinkedIn's Scaled Agency team in APAC, helping independent agencies build skills and drive results for their clients.",
          "LinkedIn: 1B+ members, the world's largest professional network; revenue from Talent, Marketing and Sales Solutions and Premium subscriptions.",
          "Theme: how B2B brands stay visible when buyers search through LLMs, moving from SEO to GEO, plus LinkedIn's programmes and resources for agencies.",
        ],
      },
    ],
    reflection:
      "The idea I take away is the difference between the market and the reachable audience. Research tools tell me who the customer is; the platform tells me how many I can reach; and with Advantage+ or Smart+ the algorithm decides who inside that pool actually sees the ad. The Sephora discussion also changed how I see a “good” customer: the cheapest one to acquire is not the best one if she only buys on promotion. For our group project, I want to use AI to build audience hypotheses quickly, but check them against real platform data before putting budget behind them.",
    games: [
      {
        type: "order",
        title: "The stages of media planning",
        intro: "Put the six stages of media planning in the right order, from the brief to the plan.",
        steps: [
          "Business context",
          "Audience insights",
          "Channel decisioning",
          "Investment decisioning",
          "Measurement plan",
          "Media plan",
        ],
      },
      {
        type: "sort",
        title: "What kind of customer?",
        intro: "Customer quality = satisfaction × profitability. Tap a description, then tap the customer type.",
        buckets: [
          { id: "star", name: "Star customers", desc: "High value both ways" },
          { id: "free", name: "Free riders", desc: "Happy, not profitable" },
          { id: "vuln", name: "Vulnerable", desc: "Profitable, not happy" },
          { id: "lost", name: "Lost causes", desc: "Low value both ways" },
        ],
        items: [
          { label: "Receives high value from the brand and delivers high value to it", bucket: "star" },
          { label: "Shops several times a year at full price and is a loyalty member", bucket: "star" },
          { label: "Takes every offer, discount and promotion, but brings little profit", bucket: "free" },
          { label: "Loves free samples and birthday gifts, waits for a deal before buying", bucket: "free" },
          { label: "Highly valuable to the company but receives little value in return", bucket: "vuln" },
          { label: "Spends a lot but is unhappy and could switch to a competitor", bucket: "vuln" },
          { label: "Gets little value from the product and gives little profit back", bucket: "lost" },
          { label: "Bought once on a deep discount, never engaged again", bucket: "lost" },
        ],
      },
      {
        type: "sort",
        title: "Insight or size?",
        intro: "Does this tool mainly give you qualitative audience insights, or the size of the audience you can buy?",
        buckets: [
          { id: "ins", name: "Audience insights", desc: "Qualitative: who they are" },
          { id: "size", name: "Audience size", desc: "Quantitative: how many you can reach" },
        ],
        items: [
          { label: "GWI", bucket: "ins" },
          { label: "Nielsen", bucket: "ins" },
          { label: "Google Analytics 4", bucket: "ins" },
          { label: "Google Trends", bucket: "ins" },
          { label: "Reddit threads (r/SkincareAddiction)", bucket: "ins" },
          { label: "Meta Business Suite reach estimate", bucket: "size" },
          { label: "LinkedIn Campaign Manager forecasting", bucket: "size" },
          { label: "TikTok Ads Manager Audience Insights", bucket: "size" },
          { label: "Google Ads keyword forecast", bucket: "size" },
        ],
      },
      {
        type: "quiz",
        title: "Audiences, AI & investment",
        intro: "Seven questions on Session 5.",
        questions: [
          {
            q: "What is the difference between a media strategy and a media plan?",
            options: [
              "There is none",
              "Strategy = how, where and when to reach the audience; plan = specific channels, budget and timing",
              "Strategy = the budget; plan = the creative",
              "Strategy is for organic, plan is for paid",
            ],
            answer: 1,
            why: "The strategy is the high-level approach; the plan is its tactical execution.",
          },
          {
            q: "What is “media wastage”?",
            options: [
              "Ads that are never approved",
              "Unspent budget at the end of the year",
              "Media exposure beyond the desired audience",
              "Creative that is never used",
            ],
            answer: 2,
            why: "Reaching people outside the target lowers results and ROI, which is why audience understanding matters.",
          },
          {
            q: "Where is the best place to get the size of an addressable audience?",
            options: [
              "GWI or Nielsen",
              "The DSP or platform where the media will be bought",
              "A synthetic audience panel",
              "The client's annual report",
            ],
            answer: 1,
            why: "Research tools give insights; the buying platforms (Meta, DV360, TikTok, LinkedIn) give addressable sizes.",
          },
          {
            q: "On LinkedIn Campaign Manager, what audience size is recommended?",
            options: ["At least 300", "At least 5,000", "50,000 or more", "1 million or more"],
            answer: 2,
            why: "300 is the minimum to serve, but 50,000+ is recommended. Location must be set first.",
          },
          {
            q: "How should synthetic (AI) respondents be used in research?",
            options: [
              "Replace all real surveys",
              "Explore hypotheses fast, validate with real data, max 10–20% of a sample",
              "Only for B2B brands",
              "Never, they are banned",
            ],
            answer: 1,
            why: "Studies found AI twins flatten opinions and overestimate willingness-to-pay, so they complement real data.",
          },
          {
            q: "Which formula did the slides use for ROI?",
            options: [
              "Revenue / impressions",
              "(Profit − ad spend) / ad spend",
              "Clicks / ad spend",
              "Ad spend / profit",
            ],
            answer: 1,
            why: "Measured over the year, to balance short-term performance with sustained profitability.",
          },
          {
            q: "A Sephora shopper buys bestsellers at full price several times a year and is a loyalty member. Which type is she?",
            options: ["Free rider", "Lost cause", "Star customer", "Vulnerable customer"],
            answer: 2,
            why: "She gets high value from Sephora and delivers high value back: a star customer worth prioritising.",
          },
        ],
      },
    ],
  },

  /* ---------------- Upcoming sessions (from the syllabus) ---------------- */
  {
    id: "session-6",
    status: "upcoming",
    guest: false,
    short: "S6 · China platforms",
    number: "Session 6",
    title: "China-Based vs Global Platforms",
    lead: "WeChat, Weibo, Douyin and Xiaohongshu compared to global platforms.",
  },
  {
    id: "session-7",
    status: "upcoming",
    guest: true,
    short: "S7 · Measurement",
    number: "Session 7",
    title: "Measurement & Reporting Strategies",
    lead: "Agency session on key metrics, tools and techniques to evaluate and optimise campaigns.",
  },
  {
    id: "session-8",
    status: "upcoming",
    guest: true,
    short: "S8 · Google / YouTube",
    number: "Session 8",
    title: "Google's Value for Brand Building: YouTube & Gemini",
    lead: "Content, reach and engagement on YouTube and Gemini.",
  },
  {
    id: "session-9",
    status: "upcoming",
    guest: true,
    short: "S9 · Cases & Pinterest",
    number: "Session 9",
    title: "Multi-Platform Case Studies & Pinterest",
    lead: "Case studies and demos on successful campaigns, plus Pinterest ads, performance and content.",
  },
];

/* =========================================================
   Progress (saved in the browser only)
   ========================================================= */
const STORE_KEY = "tdj-progress-v1";
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
}
let progress = loadProgress();

function gameKey(sessionId, i) { return sessionId + ":" + i; }
function allGames() {
  const list = [];
  SESSIONS.filter(s => s.status === "done").forEach(s => (s.games || []).forEach((g, i) => list.push(gameKey(s.id, i))));
  return list;
}
function sessionDone(s) {
  return s.games && s.games.length && s.games.every((g, i) => progress[gameKey(s.id, i)]);
}
function markDone(sessionId, i, score, total) {
  progress[gameKey(sessionId, i)] = { score, total };
  saveProgress(progress);
  renderTabs();
  updatePill();
}
function updatePill() {
  const games = allGames();
  const done = games.filter(k => progress[k]).length;
  document.getElementById("progress-pill").textContent = `${done} / ${games.length} games`;
}

/* =========================================================
   Helpers
   ========================================================= */
const app = document.getElementById("app");
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) node.setAttribute(k, v);
  }
  children.flat().forEach(c => { if (c != null) node.append(c.nodeType ? c : document.createTextNode(c)); });
  return node;
}
function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}
function initials(name) { return name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase(); }

/* =========================================================
   Tabs
   ========================================================= */
function currentId() { return (location.hash || "#home").slice(1); }

function renderTabs() {
  const nav = document.getElementById("tabs");
  nav.innerHTML = "";
  const id = currentId();
  nav.append(el("a", { class: "tab", href: "#home", "aria-current": id === "home" ? "page" : false }, "Home"));
  SESSIONS.forEach(s => {
    const dot = el("span", { class: "dot" + (sessionDone(s) ? " done" : "") });
    nav.append(
      el("a", {
        class: "tab" + (s.status === "upcoming" ? " soon" : ""),
        href: "#" + s.id,
        "aria-current": id === s.id ? "page" : false,
      }, s.status === "done" ? dot : null, s.short)
    );
  });
}

/* =========================================================
   Pages
   ========================================================= */
function renderHome() {
  const done = SESSIONS.filter(s => s.status === "done");
  const upcoming = SESSIONS.filter(s => s.status === "upcoming");
  const guests = SESSIONS.filter(s => s.guest);

  app.append(
    el("section", { class: "hero" },
      el("h1", {}, "Test Drive Journal"),
      el("p", {},
        `My learning log for ${CONFIG.course} with ${CONFIG.lecturer}. One tab per session and guest speaker, each with what I learned and a short game to lock it in.`),
      el("div", { class: "meta" },
        el("span", { class: "chip" }, `${done.length} sessions logged`),
        el("span", { class: "chip" }, `${guests.length} guest & agency sessions`),
        el("span", { class: "chip" }, CONFIG.term),
      )
    ),
    el("div", { class: "section-head" }, el("h2", {}, "Sessions so far")),
    el("div", { class: "grid" }, done.map(sessionCard)),
    el("section", { class: "section" },
      el("div", { class: "section-head" },
        el("h2", {}, "Coming up"),
        el("span", { class: "chip dark" }, "From the syllabus")),
      el("div", { class: "grid" }, upcoming.map(sessionCard))
    ),
    el("section", { class: "section" },
      el("div", { class: "card" },
        el("h3", {}, "Guest speakers & partners this term"),
        el("p", { style: "color:var(--muted);margin:0" },
          "LaunchLab (Yibo, Nirvan, Rishabh) · Nick Goh (Yellow Pages Singapore & YP Academy) · Cindy Leong (LinkedIn) · CPXi Asia · Mujo AI · Cape.io · Media Publishares · M&C Saatchi Performance · platform partners Google, YouTube, TikTok, Pinterest, Meta and LinkedIn.")
      )
    )
  );
}

function sessionCard(s) {
  const gamesCount = (s.games || []).length;
  const doneCount = (s.games || []).filter((g, i) => progress[gameKey(s.id, i)]).length;
  return el("a", { class: "card session-card" + (s.status === "upcoming" ? " soon" : ""), href: "#" + s.id },
    el("div", { class: "when" }, s.number + (s.date ? " · " + s.date : "")),
    el("h3", {}, s.title),
    el("p", {}, s.lead),
    el("div", { class: "foot" },
      s.guest ? el("span", { class: "chip guest" }, "Guest / agency") : el("span", { class: "chip dark" }, "Lecture"),
      s.status === "done"
        ? el("span", { style: "font-weight:600;color:" + (doneCount === gamesCount ? "var(--good)" : "var(--blue)") },
            `${doneCount}/${gamesCount} games`)
        : el("span", { style: "color:var(--muted)" }, "Coming soon")
    )
  );
}

function renderSession(s) {
  app.append(
    el("section", { class: "session-hero" },
      el("div", { class: "kicker" }, s.number + (s.date ? " · " + s.date : "") + (s.guest ? " · Guest session" : "")),
      el("h1", {}, s.title),
      el("p", { class: "lead" }, s.lead),
      s.speakers ? el("div", { class: "speakers" }, s.speakers.map(sp =>
        el("div", { class: "speaker" },
          el("span", { class: "avatar" }, initials(sp.name)),
          el("div", {}, el("strong", {}, sp.name), el("small", {}, sp.role))
        ))) : null
    )
  );

  if (s.status === "upcoming") {
    app.append(el("div", { class: "card soon-box" },
      el("div", { class: "big" }, "🚧"),
      el("h2", {}, "Coming soon"),
      el("p", { style: "color:var(--muted)" }, "This tab will be filled in after the session, with takeaways and a new game.")
    ));
    return;
  }

  if (s.stats) app.append(el("div", { class: "stats" }, s.stats.map(st => el("div", { class: "stat" }, el("b", {}, st.value), el("span", {}, st.label)))));

  app.append(
    el("section", { class: "section" },
      el("h2", {}, "What I learned"),
      el("div", { class: "takeaways" }, s.takeaways.map((t, i) =>
        el("div", { class: "card takeaway" },
          el("h3", {}, el("span", { class: "num" }, String(i + 1)), t.title),
          el("ul", {}, t.points.map(p => el("li", {}, p)))
        )))
    )
  );

  if (s.reflection) {
    app.append(el("section", { class: "section" },
      el("div", { class: "card reflection" }, el("h3", {}, "My reflection"), el("p", {}, s.reflection))));
  }

  if (s.games && s.games.length) {
    const holder = el("div");
    const tabs = el("div", { class: "tabs-inner" });
    const show = idx => {
      [...tabs.children].forEach((b, j) => b.setAttribute("aria-current", j === idx ? "page" : "false"));
      holder.innerHTML = "";
      holder.append(renderGame(s, idx));
    };
    s.games.forEach((g, i) => {
      const doneMark = progress[gameKey(s.id, i)] ? " ✓" : "";
      tabs.append(el("button", { class: "tab", type: "button", onclick: () => show(i) }, `Game ${i + 1}: ${g.title}${doneMark}`));
    });
    app.append(el("section", { class: "section" }, el("h2", {}, "Play to remember"), s.games.length > 1 ? tabs : null, holder));
    show(0);
  }
}

/* =========================================================
   Games
   ========================================================= */
function gameShell(g, scoreText) {
  const score = el("span", { class: "score" }, scoreText || "");
  const body = el("div", { class: "game-body" });
  const box = el("div", { class: "game" }, el("div", { class: "game-head" }, el("h3", {}, g.title), score), body);
  return { box, body, score };
}

function finishBox(body, score, total, restart) {
  const pct = Math.round((score / total) * 100);
  const msg = pct === 100 ? "Perfect — you nailed it!" : pct >= 70 ? "Great job! Nearly there." : "Good try — have another go.";
  body.innerHTML = "";
  body.append(el("div", { class: "done-box" },
    el("div", { class: "big" }, `${score}/${total}`),
    el("p", { style: "font-weight:600;margin-top:8px" }, msg),
    el("div", { class: "btn-row", style: "justify-content:center" }, el("button", { class: "btn", type: "button", onclick: restart }, "Play again"))
  ));
}

function renderGame(s, idx) {
  const g = s.games[idx];
  if (g.type === "quiz") return quizGame(s, idx, g);
  if (g.type === "sort") return sortGame(s, idx, g);
  if (g.type === "order") return orderGame(s, idx, g);
  return el("p", {}, "Unknown game type");
}

function quizGame(s, idx, g) {
  const { box, body, score } = gameShell(g);
  let i = 0, points = 0;
  const qs = g.questions;

  const start = () => { i = 0; points = 0; renderQ(); };
  const renderQ = () => {
    score.textContent = `Score ${points}/${qs.length}`;
    body.innerHTML = "";
    if (i === 0 && g.intro) body.append(el("p", { class: "game-intro" }, g.intro));
    const q = qs[i];
    const fb = el("div");
    const next = el("div", { class: "btn-row" });
    const opts = el("div", { class: "options" });
    q.options.forEach((o, k) => {
      opts.append(el("button", {
        class: "opt", type: "button",
        onclick: e => {
          [...opts.children].forEach((b, j) => { b.disabled = true; if (j === q.answer) b.classList.add("correct"); });
          const right = k === q.answer;
          if (right) points++; else e.currentTarget.classList.add("wrong");
          score.textContent = `Score ${points}/${qs.length}`;
          fb.replaceWith(el("div", { class: "feedback " + (right ? "good" : "bad") },
            el("strong", {}, right ? "Correct! " : "Not quite. "), q.why || ""));
          next.append(el("button", {
            class: "btn", type: "button",
            onclick: () => {
              i++;
              if (i < qs.length) renderQ();
              else { markDone(s.id, idx, points, qs.length); finishBox(body, points, qs.length, start); }
            },
          }, i < qs.length - 1 ? "Next question →" : "See my score"));
        },
      }, o));
    });
    body.append(el("div", { class: "q-count" }, `Question ${i + 1} of ${qs.length}`), el("div", { class: "q-text" }, q.q), opts, fb, next);
  };
  start();
  return box;
}

function sortGame(s, idx, g) {
  const { box, body, score } = gameShell(g);
  let state, selected, mistakes;

  const start = () => {
    state = shuffle(g.items).map(it => ({ ...it, placed: null }));
    selected = null; mistakes = 0;
    render();
  };

  const render = () => {
    const placedCount = state.filter(x => x.placed).length;
    score.textContent = `${placedCount}/${state.length} sorted · ${mistakes} miss${mistakes === 1 ? "" : "es"}`;
    body.innerHTML = "";
    if (g.intro) body.append(el("p", { class: "game-intro" }, g.intro));
    const pool = el("div", { class: "pool" });
    state.filter(x => !x.placed).forEach(item => {
      pool.append(el("button", {
        class: "token" + (selected === item ? " selected" : ""), type: "button",
        onclick: () => { selected = selected === item ? null : item; render(); },
      }, item.label));
    });
    if (!pool.children.length) pool.append(el("span", { class: "hint", style: "margin:0" }, "All sorted!"));
    body.append(el("div", { class: "hint" }, selected ? `Now tap the right category for “${selected.label}”.` : "Tap an item to pick it up."), pool);

    const buckets = el("div", { class: "buckets" });
    g.buckets.forEach(b => {
      const placed = el("div", { class: "placed" }, state.filter(x => x.placed === b.id).map(x => el("span", { class: "token correct" }, x.label)));
      const node = el("button", {
        class: "bucket" + (selected ? " armed" : ""), type: "button",
        onclick: () => {
          if (!selected) return;
          if (selected.bucket === b.id) {
            selected.placed = b.id; selected = null; render();
            if (state.every(x => x.placed)) {
              const pts = Math.max(0, state.length - mistakes);
              markDone(s.id, idx, pts, state.length);
              setTimeout(() => finishBox(body, pts, state.length, start), 450);
            }
          } else {
            mistakes++;
            node.animate([{ transform: "translateX(0)" }, { transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }], { duration: 250 });
            node.style.borderColor = "var(--bad)";
            setTimeout(() => { node.style.borderColor = ""; }, 400);
            score.textContent = `${state.filter(x => x.placed).length}/${state.length} sorted · ${mistakes} miss${mistakes === 1 ? "" : "es"}`;
          }
        },
      }, el("h4", {}, b.name), el("p", {}, b.desc), placed);
      buckets.append(node);
    });
    body.append(buckets);
  };
  start();
  return box;
}

function orderGame(s, idx, g) {
  const { box, body, score } = gameShell(g);
  let order, checked;

  const start = () => {
    do { order = shuffle(g.steps); } while (order.every((x, i) => x === g.steps[i]));
    checked = false;
    render();
  };

  const move = (i, d) => {
    const j = i + d;
    [order[i], order[j]] = [order[j], order[i]];
    checked = false;
    render();
  };

  const render = () => {
    score.textContent = checked ? `${order.filter((x, i) => x === g.steps[i]).length}/${g.steps.length} in place` : `${g.steps.length} steps`;
    body.innerHTML = "";
    if (g.intro) body.append(el("p", { class: "game-intro" }, g.intro));
    const list = el("ol", { class: "order-list" });
    order.forEach((step, i) => {
      const cls = checked ? (step === g.steps[i] ? " correct" : " wrong") : "";
      list.append(el("li", { class: "order-item" + cls },
        el("span", { class: "pos" }, String(i + 1)),
        el("span", { class: "label" }, step),
        el("span", { class: "moves" },
          el("button", { type: "button", "aria-label": "Move up", disabled: i === 0, onclick: () => move(i, -1) }, "↑"),
          el("button", { type: "button", "aria-label": "Move down", disabled: i === order.length - 1, onclick: () => move(i, 1) }, "↓"))
      ));
    });
    body.append(list, el("div", { class: "btn-row" },
      el("button", {
        class: "btn", type: "button",
        onclick: () => {
          checked = true;
          const right = order.filter((x, i) => x === g.steps[i]).length;
          if (right === g.steps.length) { markDone(s.id, idx, right, g.steps.length); finishBox(body, right, g.steps.length, start); }
          else render();
        },
      }, "Check my order"),
      el("button", { class: "btn ghost", type: "button", onclick: start }, "Shuffle again")
    ));
  };
  start();
  return box;
}

/* =========================================================
   Router
   ========================================================= */
function route() {
  const id = currentId();
  app.innerHTML = "";
  renderTabs();
  const s = SESSIONS.find(x => x.id === id);
  if (s) { renderSession(s); document.title = s.short + " · Test Drive Journal"; }
  else { renderHome(); document.title = "Test Drive Journal"; }
  const active = document.querySelector('.tab[aria-current="page"]');
  if (active) active.scrollIntoView({ block: "nearest", inline: "center" });
  window.scrollTo(0, 0);
}

document.getElementById("brand-sub").textContent = `${CONFIG.course} · ESSEC`;
document.getElementById("footer-text").textContent =
  `Built by ${CONFIG.studentName} for ${CONFIG.course} · ${CONFIG.school} · ${CONFIG.term}. Designed with Claude, stored on GitHub, deployed on Vercel.`;

window.addEventListener("hashchange", route);
updatePill();
route();
