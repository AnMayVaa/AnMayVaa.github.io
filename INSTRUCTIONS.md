# Project Architecture & AI Context

This repository is a portfolio website built with **React**, **Vite**, and **Tailwind CSS**. 
It is hosted on Vercel (or GitHub Pages), using a custom domain (`www.ohmpatumwan.com`).

## Content Management (Decap CMS)

To make this project easy to update without code, we integrated **Decap CMS**.
Here is how it works:
1. **CMS Dashboard:** Located at `/admin`. This is powered by `public/admin/index.html` and configured via `public/admin/config.yml`.
2. **Authentication:** The CMS uses **GitHub Implicit Grant** (`auth_type: implicit`). To authenticate, a GitHub OAuth App Client ID needs to be placed in `public/admin/config.yml`.
3. **Data Storage:** Content is stored as a single JSON file at `src/content/data.json`.
4. **Data Consumption:** The React app imports the JSON file in `src/constants/index.js` and exports the constants (`projects`, `aboutText`) to maintain compatibility with the original React components.

## AI Assistant Instructions
When making future changes to this repository:
- **Do not hardcode content into React components.** Instead, update `src/content/data.json` or configure Decap CMS to manage it.
- **Vite:** The project uses Vite. If adding new routes for CMS or other assets, remember that static assets go in the `public` directory.
- **Images:** Uploaded images from Decap CMS are saved to `public/projects`.
- Ensure any new Decap CMS collections or fields correctly map to JSON objects to prevent breaking the Vite import.
