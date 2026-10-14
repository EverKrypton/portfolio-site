# OG-Rainhard — Portfolio

Pure static site (HTML + CSS + vanilla JS). No build step, no framework.
Hosted on GitHub Pages.

## Structure
```
index.html      page markup
styles.css      design system + layout
script.js       projects data + render + reveal
assets/         favicon.svg, og.svg
404.html        not-found page
robots.txt      crawler rules
sitemap.xml     sitemap
```

## Edit the projects
Open `script.js` and edit the `PROJECTS` array:

```js
{
  id: "volt",
  name: "VOLT",
  tag: "crypto exchange",
  badge: "Live product",
  desc: "...",
  chips: ["Next.js 15", "TypeScript", "MongoDB"],
  url: "",                 // paste the live URL to enable "Visit site"
  repo: "https://github.com/EverKrypton/exchange"
}
```

- `url: ""` shows a disabled **Live soon** button.
- `url: "https://..."` turns it into a live link.
- `repo: ""` hides the **Source** button.

## Deploy
GitHub Pages serves the `main` branch root. Push to `main` and it's live at
<https://everkrypton.github.io/portfolio/>.
