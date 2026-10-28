# Shashank N — AI & Backend Portfolio

A responsive, dark-mode personal portfolio built with React, Vite, and plain CSS. It highlights AI application development, backend engineering, selected projects, skills, education, and contact links.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally
1. Extract this folder and open a terminal inside `shashank-portfolio`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production files are created in `dist/`.

## Personalize before publishing
- Update `PROFILE` in `src/main.jsx` if your contact links change.
- Review each project description and repository URL. Some cards currently link to your GitHub profile where a specific public repository URL has not been confirmed.
- To add a resume, put your PDF at `public/resume.pdf` and add a link to `/resume.pdf` in the hero or navigation. The current design intentionally does not include a non-working resume button.
- The education, CGPA, and skills text are easy to edit in `src/main.jsx`.

## Deploy to Vercel
1. Push this folder to a new GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Vercel will provide a public URL.

## Deploy to Netlify
1. Push the project to GitHub and import it at https://app.netlify.com/.
2. Build command: `npm run build`; publish directory: `dist`.
3. Deploy.

## Custom domain
After deployment, add a domain through your hosting provider's domain settings and follow its DNS instructions. DNS changes can take time to propagate.

## Notes
- Responsive layout includes a mobile navigation menu and reduced-motion support.
- The email-copy button uses the browser clipboard API and falls back to opening an email draft if clipboard access is unavailable.
- External profile/project links open in a new tab.
