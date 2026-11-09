# AGENTS.md — interactive-day-night-toggle

## First
This project belongs to Hamzeh's AI OS.
Read `~/Desktop/AI/ai-os/AGENTS.md` and follow its session routine.
If you cannot reach that path, ask Hamzeh to also connect the `ai-os` folder.
Project summary lives in: `~/Desktop/AI/ai-os/10_context/projects/interactive-day-night-toggle.md`

## This project
- What it is: Research experiment — one animated day/night toggle switch centered on the page.
- Tech stack: `index.html` (structure + SVG) · `style.css` (look + all motion) · `script.js` (~40 lines). No build step, no dependencies.
- How to run it: Open `index.html` in a browser.
- How to deploy it: push to `main` on GitHub (Hamzeh75/interactive-day-night-toggle) — Vercel auto-deploys to https://interactive-day-night-toggle.vercel.app
- Rules specific to this project:
  - No libraries, no build step. Keep CSS in style.css and JS in script.js (split on 2026-11-09 so GitHub shows real languages).
  - Motion uses CSS `linear()` spring curves (tokens `--spring-soft`, `--spring-bouncy` in `:root`).
  - Respect `prefers-reduced-motion`.

## Session end (in addition to the AI OS routine)
- Commit and push this project's changes to its own repo.
- Update the project page in ai-os/10_context/projects/interactive-day-night-toggle.md directly: state, decisions, next actions.
