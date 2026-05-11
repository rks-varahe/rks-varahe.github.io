# Varahe Analytics — National Communications Handbook

An interactive multi-page site documenting the 16 specialised teams that make up Varahe Analytics' National Communications operating system.

## Pages
- `index.html` — landing: hub diagram, campaign-flow timeline, coordination map, team grid, glossary
- `team.html?id=<team-id>` — generic team page driven by `data.js`
- `resources.html` — sample-decks library linking to Google Drive

## Tech
Pure static — HTML, CSS, JS. No build step. Open `index.html` in any browser.

- `data.js` — all team SOP content, glossary, coordination edges, category tags
- `india-shapes.js` — Survey-of-India boundary paths (CC0, via Varnam)
- `app.js` — renderers, search, theme dock, tab routing
- `styles.css` — full theme + responsive layout

## Auth (production)
- `netlify.toml` + `netlify/functions/identity-signup.js` restrict signups to `@varaheanalytics.com`
- `auth.js` injects the Netlify Identity widget; the gate is bypassed on `file://` and `localhost` for local dev

## Deploy
Push to `main` and connect the repo to Netlify, or drag-drop `site/` onto https://app.netlify.com/drop.

## Updating team data
Edit `data.js` — every team page is rendered from this file at runtime. Adding a new team:
1. Append an entry to the `TEAMS` array
2. Add tags in `TEAM_TAGS`
3. Add coordination edges in `COORD_EDGES` if relevant

For internal use only.
