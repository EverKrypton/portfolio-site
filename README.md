# OG-Rainhard — Portfolio

React + TypeScript + Vite. Deployed to GitHub Pages via GitHub Actions.

## Dev
```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build -> dist/
npm run preview    # preview the build
```

## Edit the projects
Open `src/data/projects.ts` and edit the `PROJECTS` array:

```ts
{
  id: "volt",
  name: "VOLT",
  tag: "crypto exchange",
  badge: "Live product",
  desc: "...",
  chips: ["Next.js 15", "TypeScript", "MongoDB"],
  url: "",                 // paste the live URL to enable "Visit site"
  repo: "https://github.com/EverKrypton/exchange",
}
```

- `url: ""` shows a disabled **Live soon** button.
- `repo: ""` hides the **Source** button.

## Deploy
Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
publishes to GitHub Pages at <https://everkrypton.github.io/portfolio-site/>.

> The Vite `base` in `vite.config.ts` is `/portfolio-site/`. If you rename the
> repo, update that value to match.
