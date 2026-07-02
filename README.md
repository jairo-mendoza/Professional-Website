# jairom.com

A single-page portfolio.

Simple HTML, one stylesheet, and a bit of vanilla JS for the theme toggle n current year. Deployed straight to GitHub Pages.

## The stack

- Plain HTML5 / CSS / JS. The whole site is one screen of sections.
- CSS custom properties drive the **light + dark themes** (choice persists in `localStorage`, respects your OS on first visit).
- Icons are SVGs recolored with CSS masks; type is Bitter / Hanken Grotesk / Caveat.
- Fully responsive.

## Running it locally

```bash
python3 -m http.server 8753
# open http://localhost:8753
```

## Where things live

```
index.html       the whole page
css/styles.css   design tokens up top, then one block per section
js/theme.js      light/dark toggle (applied pre-paint, no flash)
js/year.js       keeps the footer © year current
```

## Say hi

jairomendoza.cs@gmail.com

Built with care in Los Angeles, usually under a dark sky. ☾
