# Pravah — In Motion

A responsive, static website built from the original Pravah demo. Includes interactive 3D scenes, service accordions, keyboard-accessible tabs, a growth calculator, a workflow demo, and project details. All contact links open Instagram directly; there are no enquiry forms, email links, or phone links.

## Run locally

Install Node.js, open a terminal in this folder, and run:

```sh
npm run dev
```

Open http://127.0.0.1:4173. No dependencies need to be installed.

## Add to GitHub

Upload all the files **inside this folder**, including the entire `assets` folder, to your repository. Keep their relative paths unchanged. The `index.html`, `package.json`, `build.mjs`, and `vercel.json` files must be at the repository root, next to one another. You do not need to upload the generated `dist` folder.

## Fix the Vercel “vite: command not found” error

The old Vercel project was running `vite build`, but this website uses plain HTML, CSS, and JavaScript. The included `vercel.json` overrides those settings:

- Framework: Other (`null` in the configuration)
- Build command: `node build.mjs`
- Install command: empty (no dependencies)
- Output directory: `dist`

Replace the repository files with this updated version and commit them. Vercel can then deploy the new commit using the included configuration. Do not redeploy the old failed commit: it does not contain the fix. Keep Vercel's Root Directory at the repository root (blank/default), unless you intentionally placed the entire website in a subdirectory.

To verify the build locally, run `npm run build`. It copies only the website and its assets into `dist`. No Vite installation is needed.

For GitHub Pages, go to **Settings → Pages → Deploy from a branch**, select your branch and **/(root)**, and save.

## Edit the website

- `index.html`: content and page structure
- `styles.css`: layout, typography, responsive styles, and CSS animations
- `app.js`: interactions and the calculator
- `scenes.js`: 3D objects and interactions
- `assets/founder.jpg`: founder photograph from the supplied original website
- `assets/three.module.js`: bundled Three.js v0.170.0

Google Fonts are loaded from the Google Fonts service. 3D models are created locally in the browser. The 3D viewer falls back to a CSS object study if WebGL is unavailable.

The café, jewellery, and retail projects are explicitly labelled illustrative concepts. Calculator results are estimates based on visitor-provided assumptions. Contact opens https://www.instagram.com/pravah_growth/ directly.

Mobile layouts include stacked service and results sections, larger text, full-width interactive tabs, comfortably sized touch controls, and a scaled 3D hero. Motion can be paused in the footer and respects the system's reduced-motion preference.

Three.js is distributed under the MIT license; see `assets/THREE-LICENSE.txt`.
