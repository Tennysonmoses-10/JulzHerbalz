# Julz Herbals - Modern E-Commerce Application

An enterprise-grade, secure, modern e-commerce web application for **Julz Herbals** built with Next.js 14+ (App Router), PostgreSQL, Prisma ORM, NextAuth with Google OAuth, Framer Motion scroll reveal animations, Embla Carousel, and Tailwind CSS (White & Light Green theme).

---

## Features & Highlights

1. **Google Sheets Catalog Integration**: Pre-populated with 7 herbal product categories (Harmoni Hair Oil, Natural Aura Bath Powder, Nature Fresh Moringa Bath Powder, Luminance Tan Care Pack, Tiny Glow Baby Bath Powder, Little Bloom Baby Hair Oil, Nature Shine Herbal Shampoo).
2. **Google Drive Asset Mapping**: Support for real product photos from Google Drive mapped into `/public/images/products/`.
3. **Google OAuth Authentication**:
   - Guests can freely browse products, view details, and add items to cart.
   - Prompted for Google OAuth login when proceeding to checkout/place order.
4. **Admin Panel & Order Management**:
   - Live dashboard at `/admin/dashboard`.
   - Real-time order tracking and status updates (`PENDING` -> `PROCESSING` -> `SHIPPED` -> `DELIVERED`).
5. **Zero SQL Injection & Hardened Security**:
   - 100% type-safe parameterized PostgreSQL database queries using Prisma ORM.
   - Zod schema validation on client & server endpoints.
   - Input XSS sanitization & API rate-limiting (`lib/security.ts`).
6. **GitHub Integration & CI/CD Pipeline**:
   - Automated workflow in `.github/workflows/ci-cd.yml` verifying TypeScript compilation, ESLint, production build, and security audits on every push/PR.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/julz_herbals?schema=public"
NEXTAUTH_SECRET="your-super-secret-key-julz-herbals-2026"
NEXTAUTH_URL="http://localhost:3000"

GOOGLE_CLIENT_ID="your-google-oauth-client-id"
GOOGLE_CLIENT_SECRET="your-google-oauth-client-secret"
```

### 3. Generate Prisma Client & Run DB Migrations
```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Directory Structure

```
julz-herbals/
├── .github/workflows/     # CI/CD GitHub Actions Pipeline
├── app/
│   ├── admin/dashboard/   # Admin Panel Order Management
│   ├── api/
│   │   ├── auth/          # NextAuth & Google OAuth API
│   │   ├── orders/        # Order placement API
│   │   └── products/      # Products catalog API
│   ├── globals.css        # White & Light-Green herbal styling
│   ├── layout.tsx         # Global Root Layout
│   └── page.tsx           # Main Landing Page
├── components/            # React UI Components (Hero, Navbar, Carousel, Cards, Cart)
├── lib/                   # Security, DB Singleton, Auth config & Products Data
├── prisma/                # PostgreSQL Prisma Schema & Seed Scripts
└── public/images/         # Product assets & images
```
