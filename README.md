# That Redliner — website starter

A zero-cost-first, static-export Next.js website for thatredliner.com.

## Included
- Mobile-responsive editorial homepage and navigation
- Bikes, Cars, EVs, Maintenance, Comparisons and Tools sections
- Working mileage, fuel-cost and vehicle EMI calculators
- Three original starter guides, plus About, Contact, Privacy and Disclaimer pages (legal pages are starter drafts)
- Metadata, canonical base, sitemap and robots route
- Static export configured for Cloudflare Pages

## Requirements
- Node.js 20.9+ (recommended current LTS)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build static output
```bash
npm run build
```
The static website is generated in `out/`.

## GitHub repository
Create a private repository named `thatredliner` at https://github.com/new. Do not initialize it with a README, license or gitignore because this project already includes a README.

From this folder:
```bash
git init
git add .
git commit -m "Initial That Redliner website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/thatredliner.git
git push -u origin main
```

## Cloudflare Pages
1. Open Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git.
2. Select the `thatredliner` GitHub repository.
3. Framework preset: **Next.js (Static HTML Export)**.
4. Production branch: `main`.
5. Build command: `npx next build`.
6. Build output directory: `out`.
7. Deploy and test the `*.pages.dev` preview first.

Only connect `thatredliner.com` after confirming where its DNS is managed. For an apex domain, Cloudflare Pages requires the domain to be a Cloudflare zone with Cloudflare nameservers. Do not change existing nameservers or DNS records until the current provider and all email/verification records have been checked.

## Before public launch
- Replace the editorial roadmap placeholders with researched, original articles.
- Verify every vehicle fact, price, specification and regulatory statement with dated reliable sources.
- Replace the starter privacy policy with one matching the actual analytics, advertising, affiliate links and forms used.
- Add a genuine business contact email only when available.
- Add original photography or properly licensed assets; do not hotlink random images.
- Set up Google Search Console and Analytics only after confirming the correct Google account and consent/privacy requirements.

## Notes
This is a static site; it does not require a paid database or CMS. Content can initially be authored in source files. No paid APIs, themes, plugins or services are required by this starter.
