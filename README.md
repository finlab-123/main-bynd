## BYND Finserve – React + Vite

Full-stack-ready marketing site for BYND Finserve, built with React and Vite. The project includes landing flows for investments, loans, insurance products, and support pages, plus a detailed investment plans experience with FAQs, stats, and quote capture.

---

### 📦 Tech Stack
- React 18 + Vite (fast dev server, optimized production builds)
- JavaScript (JSX), CSS
- ESLint (linting)

---

### 🗂️ Project Structure
```
src/
	assets/                 # Images and icons
	investmentPlans/        # Investment plan pages (mutual funds, private credit, equity, consolidated plan)
	landingPage/            # Main landing page
	loans/                  # Education, vehicle, medical, LAP, loan-against-share pages
	products/               # Credit card, life insurance, general insurance
	services/               # Services overview
	support/                # About us, contact us
	App.jsx                 # Root component wiring pages
	main.jsx                # React entry
	App.css, index.css      # Global styling

public/                   # Static assets served as-is
index.html                # Vite HTML template
vite.config.js            # Vite configuration
eslint.config.js          # ESLint setup
```

Key page components:
- `src/investmentPlans/investmentPlan.jsx` – multi-section investment plans page (cards, dual FAQ, why-us, stats, quote form, brand row)
- `src/investmentPlans/investInMutualFunds.jsx`, `investInPrivateCredit.jsx`, `investmentInEquity.jsx` – dedicated investment plan variants
- `components/header.jsx`, `components/footer.jsx`, `components/bookConsultancy.jsx` – shared layout/CTA

---

### 🚀 Getting Started
1) Install Node.js (LTS recommended): https://nodejs.org/

2) Install dependencies
```bash
npm install
```

3) Run the dev server
```bash
npm run dev
```
Vite will print a local URL (default http://localhost:5173). Press `o` in the dev console to open it in your browser.

4) Build for production
```bash
npm run build
```
Output is written to `dist/`.

5) Preview the production build
```bash
npm run preview
```

---

### 🔧 Available Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – create optimized production build
- `npm run preview` – serve the production build locally

---

### ✅ Linting
Run ESLint to check code quality:
```bash
npm run lint
```
(If no script exists, run `npx eslint src`.)

---

### 🌐 Major Sections
- Investment Plans: consolidated page plus individual plan pages (company, mutual fund, private credit, equity)
- Loans: education, vehicle, medical, loan against property, loan against share
- Products: credit card, general insurance, life insurance
- Services: services overview
- Support: about us, contact us

Assets live under `src/assets/investments/main` for the investment pages; adjust imports if you relocate images.

---

### 🧭 Routing / Entry
`src/App.jsx` currently imports and renders `InvestmentPlanPage`. Toggle or add routes as needed (React Router not yet configured).

---

### 📝 Content / Customization
- To update hero/cards/FAQ content on the investment plan page, edit `src/investmentPlans/investmentPlan.jsx`.
- To swap imagery, place new assets in `src/assets/...` and update imports at the top of the file.
- For layout theming, adjust shared styles in `src/App.css` or component-level styles.

---

### 🧪 Testing Suggestions
- Smoke test: `npm run dev`, open the site, click through investment cards and FAQs (both static and accordion), submit quote form (ensure no console errors).
- Responsive: shrink to 768px and 520px breakpoints; verify grids stack and text remains legible.

---

### 🛠 Troubleshooting
- Dev server not starting: delete `node_modules` and run `npm install` again.
- Broken images: confirm asset paths under `src/assets/investments/main` and matching import names.
- Port conflict: run `npm run dev -- --host --port 5174` to pick a new port.

---

### 🤝 Contributing
1) Fork/branch
2) `npm install`
3) Make changes with `npm run dev`
4) Lint before opening a PR

---

### 📄 License
For learning and development purposes.
