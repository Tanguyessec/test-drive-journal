# Test Drive Journal

Learning log for **Digital Platforms Test Drive** (ESSEC, MSc Marketing Management & Digital, October 2026).
One tab per session / guest speaker, each with key takeaways, a short reflection and interactive games.

Static site: `index.html` (structure), `styles.css` (look), `script.js` (content + games). No build step.

## Add a new session
Open `script.js`, find the session in `SESSIONS`, set `status: "done"` and fill in `date`, `speakers`, `takeaways`, `reflection` and `games` (copy the format of an existing session). Commit and push — Vercel redeploys automatically.

## Deploy
1. Create a public repo on github.com and push these files.
2. On vercel.com: sign in with GitHub → New Project → Import the repo → Deploy (Framework preset: Other).
