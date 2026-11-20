# Forrozeiros.cz

Website of the Forrozeiros forró dance community in Prague: https://forrozeiros.cz

## Getting started

Requires Node.js 18 or newer.

```sh
npm install
npm run dev       # development server on http://localhost:8080
npm run build     # type-check and build into dist/
npm run preview   # serve the built site locally
npm run lint      # run ESLint
npm run deploy    # build and publish dist/ to GitHub Pages
```

## Tech stack

- [React](https://react.dev) with TypeScript, built with [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com) for all styling
- [lucide-react](https://lucide.dev) for icons
- [EmailJS](https://www.emailjs.com) (`emailjs-com`) to send the contact form

There are no other runtime dependencies. UI pieces such as the carousel, accordion, menus and toast are small components in `src/components/`.

## Project structure

```
index.html              HTML entry point (title, meta tags, favicon)
CNAME                   Custom domain for GitHub Pages
public/
  images/               All images, with descriptive names
  404.html              GitHub Pages fallback page
src/
  main.tsx              Mounts <App /> into the page
  App.tsx               Layout: header, page content, footer
  index.css             Tailwind setup and a few global base styles
  components/           Reusable building blocks (Header, Footer, Section, Carousel, ...)
  sections/             One file per section of the home page (AboutForro, Events, ...)
  pages/                HomePage (all sections in order) and NotFound
  data/site.ts          Shared data: menu items, social links, e-mail, calendar URL, carousel images
  hooks/                Custom React hooks
  i18n/                 Translations and the language context
```

The site is a single page. Each section in `src/sections/` renders a `<section>` with an `id`, and the menu links (`/#events`, `/#contact`, ...) scroll to it.

## Code conventions

- One component per file, written as `export default function Name() {}`.
- Props are described with a `type NameProps = { ... }` next to the component.
- Imports use the `@/` alias for `src/` (for example `@/components/Section`).
- Styling uses Tailwind classes only. Brand colors live in `tailwind.config.ts` under `forro` (for example `text-forro-brown`, `bg-forro-beige`).
- Lists of similar items (menu items, cards, links) are kept as data arrays and rendered with `.map()`.
- All visible text comes from the translation files through `t("key")`.

## Translations

Translations live in `src/i18n/translations/`, one JSON file per site section. Each file is keyed by language:

```json
{
  "en": { "events.title": "Events" },
  "pt": { "events.title": "Eventos" }
}
```

Use them in a component with:

```tsx
const { t } = useLanguage();
return <h2>{t("events.title")}</h2>;
```

Supported languages are listed in `src/i18n/languages.ts`. If a key is missing in the selected language, the English text is shown, so a new text only needs to be added to `en` to appear on the site. The chosen language is saved in `localStorage`; on the first visit it is detected from the browser.

## Adding content

- **New image:** put it in `public/images/` and reference it as `/images/name.png`.
- **New text:** add a key to the matching JSON file in `src/i18n/translations/` and use `t("key")`.
- **New section:** create a component in `src/sections/` using `<Section id="..." title={...} background="white">`, add it to `src/pages/HomePage.tsx`, and add a menu item to `navItems` in `src/data/site.ts`.

## Deployment

The site is hosted on GitHub Pages with the custom domain `forrozeiros.cz` (see `CNAME`). Run `npm run deploy` to build and push `dist/` to the `gh-pages` branch.
