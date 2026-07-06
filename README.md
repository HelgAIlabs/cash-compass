# Cash Compass

**Financial clarity for small businesses.** Price your products, map out your costs, project a 5-year revenue outlook, benchmark against the market, and see it all come together in one clean dashboard — no spreadsheets, no accounts, no cloud.

Cash Compass is a self-contained web app that helps a small business owner answer the questions that actually matter before and after launch: *Am I charging enough? When do I break even? How long until I earn back what I invested? Where is my money actually going?*

---

## What it does

Cash Compass walks you through your numbers step by step and turns them into clear visuals and key metrics.

- **Products & pricing** — Add your products, set prices and unit costs, and instantly see per-product margins and a pricing summary.
- **Cost planning** — Capture every layer of cost separately so nothing hides:
  - **Capex** — one-time upfront investment (equipment, setup, deposits)
  - **Production** — recurring monthly cost of making/delivering the product
  - **Operations** — recurring monthly running costs (rent, utilities, salaries)
  - **Marketing** — recurring monthly spend to acquire customers
- **Growth assumptions** — Set your expected growth rate to project revenue and profit over a 5-year horizon.
- **Comparison worksheet** — Benchmark your pricing and margins against competitors or market rates so you know where you stand.
- **Dashboard** — A visual summary that brings everything together:
  - Revenue, profit & costs over time
  - Where your money goes (cost breakdown)
  - Cumulative cash flow
  - Revenue per product
- **Key metrics** — Automatic **break-even**, **profit margin**, **payback period**, and **ROI** calculations based on your inputs.

## Why you'd use it

It's built for the moment you're planning or reviewing a small business and want honest numbers fast — pricing a new product line, sanity-checking a business plan, deciding whether an investment pays back in a reasonable time, or comparing your rates to the market. Everything updates live as you type, so you can play with assumptions and watch the outcome change.

## Privacy by design

There is **no backend and no account**. All your data is stored locally in your own browser (via `localStorage`) and never leaves your device. You can **back up** your data to a JSON file at any time and **restore** it later or on another machine — you stay in full control of your information.

---

## What's in this repo

The entire application lives in **`public/kompas.html`** — a self-contained single-file app (HTML + CSS + vanilla JavaScript, using [Chart.js](https://www.chartjs.org/) via CDN for the visualizations). Open it and it just works.

The files under `src/` are a minimal [TanStack Start](https://tanstack.com/start) shell that serves the app and provides server-side-rendered error handling. The home route (`src/routes/index.tsx`) renders `kompas.html` in a full-page iframe.

## Running it

### Just the app (no build required)

Open `public/kompas.html` directly in any modern browser. That's the whole product — no install, no server.

### Full dev server

Requires **Node 18+** and [Bun](https://bun.sh) (npm also works):

```bash
bun install
bun dev
```

Then open the local URL that gets printed.

### Production build

```bash
bun run build
bun run preview
```

## Tech stack

- **App:** HTML + CSS + vanilla JS, Chart.js (CDN), `localStorage` for persistence
- **Shell:** TanStack Start, React 19, Vite, Tailwind CSS
- **Tooling:** TypeScript, ESLint, Prettier

## Project structure

```
public/
  kompas.html        # The entire application (self-contained)
  favicon.ico
src/
  routes/
    index.tsx        # Renders kompas.html in a full-page iframe
    __root.tsx       # Root layout + error handling
  router.tsx         # TanStack Start router setup
  server.ts          # Server entry
  styles.css
package.json
vite.config.ts
```

## License

See the `LICENSE` file. (MIT recommended for a project like this.)
