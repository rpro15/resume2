# Anime DevOps Portfolio — Feature Docs

This repository contains the implementation and specification for a single-page portfolio website for a Junior DevOps engineer with an anime aesthetic.

Key project documentation (feature folder: `specs/001-anime-devops-portfolio`):

- **Specification**: [spec.md](specs/001-anime-devops-portfolio/spec.md) — feature requirements, user stories, acceptance criteria.
- **Implementation Plan**: [plan.md](specs/001-anime-devops-portfolio/plan.md) — architecture, stack choices, and project structure.
- **Tasks**: [tasks.md](specs/001-anime-devops-portfolio/tasks.md) — task breakdown and execution checklist.
- **Data Model**: [data-model.md](specs/001-anime-devops-portfolio/data-model.md) — schema for the portfolio content.
- **Quickstart**: [quickstart.md](specs/001-anime-devops-portfolio/quickstart.md) — setup and run instructions for development and deployment.
- **Research**: [research.md](specs/001-anime-devops-portfolio/research.md) — references and design notes.
- **Contracts**: [specs/001-anime-devops-portfolio/contracts](specs/001-anime-devops-portfolio/contracts/) — JSON schemas and data contracts.

If you want the project to include full spec contents directly in this README, tell me and I will embed the selected Markdown files' content here.

How to run the site locally (quick):

```powershell
npm install
npm run build-css
npx live-server src --port=8080
# open http://127.0.0.1:8080
```

Files to edit for content:

- `src/js/data.js` — update personal information, skills, projects, and contact links.
- `src/css/styles.css` — theme tweaks and custom styles.
- `src/index.html` — layout and static content.

If you want I can also create a `docs/` version with the full spec text copied into a single document. Reply with which option you prefer.

---
Generated: February 16, 2026
