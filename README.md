🛍️ E-commerce Storefront

Next.js 16 + TypeScript storefront for a Laravel E-commerce API.
Server-rendered, SEO-friendly, Stripe-ready frontend with MeiliSearch support.

⸻

🚀 Features
•	SSR / ISR pages (product, category, search)
•	Cart + Checkout flow integrated with Stripe test mode
•	MeiliSearch product search & filters
•	Tailwind UI + responsive layout
•	REST API integration with Laravel backend

⸻

⚙️ Tech Stack

Next.js 16 · React 18 · TypeScript · Tailwind · Stripe Elements · MeiliSearch
Backend → Laravel + PostgreSQL (API only)

⸻

🧩 Setup
```
git clone https://github.com/firatkocoglu/storefront.git
cd storefront
pnpm i     # or npm i / yarn
cp .env.example .env.local
pnpm dev   # http://localhost:3000
```

💳 Checkout Flow
1.	User → places order (POST /orders)
2.	Backend → creates Stripe Payment Intent (client_secret)
3.	Storefront → confirms payment via Stripe Elements
4.	Webhook updates order → completed

Use Stripe test cards (e.g. 4242 4242 4242 4242).

🧱 Next Steps
•	Filters & sorting
•	Account / Order history
•	SEO metadata + OG tags
•	Playwright E2E tests

⸻

License: MIT
Backend Repo: Laravel E-commerce API￼
