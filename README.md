# ohmpatumwan.com — Personal Portfolio

My personal portfolio website, live at **[www.ohmpatumwan.com](https://www.ohmpatumwan.com)**.

It opens as an **interactive terminal**. Type `help` to see the commands (`whoami`, `projects`, `clear`, `start`), then `start` to launch the full portfolio with an animated transition.

## Tech stack

- **React 19** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for the terminal-to-portfolio transition
- **Decap CMS** at `/admin` to edit content without touching code
- **GitHub Actions** to deploy to GitHub Pages on every push to `main`

## Project structure

```
src/
├── components/
│   ├── Terminal.jsx      # interactive terminal intro
│   └── Portfolio.jsx     # main portfolio page
├── content/data.json     # all site content (about text, projects)
└── constants/index.js    # loads data.json for the components
public/admin/             # Decap CMS dashboard + config.yml
```

## Editing content

All content lives in [`src/content/data.json`](src/content/data.json). There are two ways to update it:

- **Through the CMS.** Go to `/admin`, log in with GitHub, and edit. Uploaded images are saved to `public/projects/`.
- **By hand.** Edit `data.json` directly. Don't hardcode content inside the React components.

See [`INSTRUCTIONS.md`](INSTRUCTIONS.md) for architecture notes.

## Run locally

```bash
npm install
npm run dev       # dev server
npm run build     # production build to dist/
npm run preview   # preview the build
```
