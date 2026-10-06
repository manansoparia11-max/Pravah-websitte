# Pravah — In Motion

A responsive, static website built from the original Pravah demo. Includes interactive 3D scenes, service accordions, keyboard-accessible tabs, a growth calculator, a workflow demo, project details, and an Instagram brief builder.

## Run locally

Install Node.js, open a terminal in this folder, and run:

```sh
npm run dev
```

Open http://127.0.0.1:4173. No dependencies or build step are required.

## Add to GitHub

Upload all the files **inside this folder**, including the entire `assets` folder, to a new repository. Keep their relative paths unchanged.

To publish with GitHub Pages, go to **Settings → Pages → Deploy from a branch**, select your branch and **/(root)**, and save. For Vercel, import the repository, choose **Other** as the framework, leave the build command empty, and use the repository root as the output directory.

## Edit the website

- `index.html`: content and page structure
- `styles.css`: layout, typography, responsive styles, and CSS animations
- `app.js`: interactions and the calculator
- `scenes.js`: 3D objects and interactions
- `assets/founder.jpg`: founder photograph from the supplied original website
- `assets/three.module.js`: bundled Three.js v0.170.0

Google Fonts are loaded from the Google Fonts service. 3D models are created locally in the browser. The 3D viewer falls back to a CSS object study if WebGL is unavailable.

The café, jewellery, and retail projects are explicitly labelled illustrative concepts. Calculator results are estimates based on visitor-provided assumptions. The brief builder prepares text for copying to Instagram; it does not send enquiries, collect payments, or save form data to a server.

Three.js is distributed under the MIT license; see `assets/THREE-LICENSE.txt`.
