# Miamo

An imaginary fast-food restaurant presented like a real ordering site: a fixed top header, a hero banner, category
cards and product grids — red, orange and mustard, soft shadows, no console chrome.

## Features

- **Header &amp; home page**: a top nav with every category, a hero banner and a "best-sellers" strip, like a real
  chain's homepage. No modal, no zoom — every category links straight to its page.
- **Menu pages**: 48 products across burgers, sides, drinks, desserts and combo meals, with hand-drawn SVG
  illustrations, a search box, and diet/spice filters with allergen tags on every product.
- **Burger workshop**: stack up to 8 ingredients between the buns, watch them drop onto the plate, and follow the
  price as it changes.
- **Cart &amp; checkout**: quantities, eat in or take away, a promo code, a mock payment step (card or cash), and a
  confirmation with an order number. Nothing is charged for real.
- **Loyalty program**: points earned on every order, a rewards page with unlockable tiers, and a points badge in
  the header. A separate offers page lists current deals and the working promo code.
- **Legal pages &amp; cookie banner**: mentions légales, CGV and a privacy policy that explains the site keeps
  everything in the browser's local storage, with no real tracking.
- **Sounds and music**: the clicks, chimes and the soft background loop are synthesized with the Web Audio API,
  so the project ships no audio files.

All of the above lives only in the browser (`localStorage`): there is no backend, no real payment, and no order
ever actually ships.

## Stack

Nuxt 4 (Vue 3, TypeScript) generated as a static site, Lucide icons, Vitest and oxlint.

```
app/
├── data/          # Channels, products, burger ingredients and product tags
├── utils/         # Cart and burger logic (tested), sound effects and music
├── composables/   # Cart, loyalty points, preferences and toast state
├── plugins/       # Saving the cart/preferences/points, starting the music
├── components/    # Header, footer, cookie banner, category cards, food icons, burger layers
└── pages/         # Home, /chaine/[slug], /atelier, /panier, /fidelite, /offres, /infos, legal pages
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm test
npm run lint
npm run typecheck
npm run generate   # static site in .output/public
```

TypeScript stays on 6.x because `vue-tsc` does not support TypeScript 7 yet.

## Deployment

`.github/workflows/deploy.yml` generates the site with `NUXT_APP_BASE_URL=/<repo name>/` and publishes it to
GitHub Pages. In the repository settings, set Pages → Source to “GitHub Actions”.
