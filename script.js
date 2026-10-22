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

  /* ---------------- Upcoming sessions (from the syllabus) ---------------- */
  {
    id: "session-3",
    status: "upcoming",
    guest: false,
    short: "S3 · Trends & creators",
    number: "Session 3",
    title: "Campaign Objectives, Trends, Live Selling & Influencer Strategies",
    lead: "Short-form video ad formats, viral content, live selling and influencer engagement models.",
  },
  {
    id: "session-4",
    status: "upcoming",
    guest: true,
    short: "S4 · Meta / Agency",
    number: "Session 4",
    title: "The Role of Media Agencies: Meta's Visual Ad Formats & AI",
    lead: "Lecture + platform demo by an agency representative: storytelling and engagement on Meta.",
  },
  {
    id: "session-5",
    status: "upcoming",
    guest: true,
    short: "S5 · LinkedIn",
    number: "Session 5",
    title: "Maximising LinkedIn for B2B Marketing",
    lead: "Ad formats, targeting, lead generation, thought leadership and community building.",
  },
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
          "LaunchLab (Yibo, Nirvan, Rishabh) · CPXi Asia · Mujo AI · Cape.io · Media Publishares · M&C Saatchi Performance · platform partners Google, YouTube, TikTok, Pinterest, Meta and LinkedIn.")
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
