# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start                       # ng serve -> http://localhost:4200
npm run build                   # production build into dist/app-leo
npm run watch                   # development build, rebuild on change
npm test                        # Karma + Jasmine in Chrome (watch mode)
npx ng test --watch=false --browsers=ChromeHeadless   # single CI-style run
npx ng test --include='**/home.component.spec.ts'     # run one spec file
npx ng generate component components/<name>           # SCSS is the configured style default
```

Deploy targets the `gh-pages` branch (served at `leo3852.github.io/appLeo/`), so the build must be
made with the subpath base href:

```bash
npx angular-cli-ghpages --dir=dist/app-leo   # after: npx ng build --base-href /appLeo/
```

`dist/` is gitignored on `main`; the built output lives only on the `gh-pages` branch.

## Architecture

Angular 16 **NgModule** app (not standalone components), Tailwind CSS 3 layered on top of SCSS.

- `src/app/app.module.ts` declares every component; there are no feature modules, services, or
  shared state. Adding a component means declaring it here.
- `app-routing.module.ts` exists but `routes` is **empty**. The app is a single scrolling page:
  `app.component.html` statically composes `<app-home>` and `<app-background-section>`.
  `<app-menu>` and `<app-footer>` are declared and implemented but currently commented out in that
  template — uncomment rather than rewrite if they are needed again.
- **All content is hardcoded markup**, not data. The portfolio project cards live inline in
  `background-section.component.html` (~225 lines of repeated card blocks); the bio text lives in
  `home.component.html`. Editing site copy or adding a project means editing those templates.
- `AppComponent` owns a full-page particle animation: a `<canvas>` fixed behind the content
  (`z-index: 0`, content sits at `z-index: 1`), 80 particles drawn on `requestAnimationFrame` with
  lines between pairs closer than 120px. The canvas is sized to `document.documentElement.scrollHeight`,
  so it depends on page content height and is re-sized on window `resize`.

## Styling conventions

- Layout and color come from Tailwind utility classes written directly in templates.
  `tailwind.config.js` has an empty `theme.extend` — there is no design token layer.
- `src/styles.scss` is the only global stylesheet: it imports the Tailwind layers, registers the
  bundled Montserrat `@font-face` weights from `src/fonts/`, sets the dark body theme
  (`#1d1d20` / `#d1d1d1`), and defines `.badge` via `@apply` (used for the tech-stack pills).
- Component `.scss` files are reserved for what Tailwind can't express: the animated gradient
  `.loader` bars in `home.component.scss` and the menu open/close transforms in `menu.component.scss`.
- Production budgets cap any single component stylesheet at 4kb.

## Tests

Every `*.spec.ts` is still the Angular CLI "should create" stub. There is no meaningful test suite,
so `npm test` passing says nothing about behavior — verify UI changes in the browser.
