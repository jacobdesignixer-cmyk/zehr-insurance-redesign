# Zehr Insurance Brokers Ltd. - Modern Homepage Redesign Mockup

A modern, high-end homepage redesign for **Zehr Insurance Brokers Ltd.** (https://www.zehrinsurance.com/).

This design replaces the legacy agent-only landing page with a comprehensive, architectural, and high-converting portal representing all of Zehr's flagship programs across South Western Ontario.

---

## 🎨 Design System & Reference Alignments

This redesign directly synthesizes the design language provided in the reference mockups:

1. **Reference 1 (Architectural Modernism & Bento Grids)**:
   - **Hero Structure**: Large hero showcase with rounded borders (`border-radius: 34px`) and a floating frosted-glass overlay banner (`backdrop-filter: blur(20px)`).
   - **Bento Metric Cards**: 3-card metric grid featuring big bold numbers (`70+`, `9`, `40+`) with custom status pills (`LOCAL HUBS`, `UNBIASED ADVOCACY`) and an inverted obsidian dark card.
   - **Typography**: Powerful grotesque display headlines paired with high-contrast pill action buttons.

2. **Reference 2 ("Mindframe" Editorial & Floating Layered UI)**:
   - **Typography Pairing**: High-contrast pairing of modern geometric sans (`Plus Jakarta Sans`) with luxury editorial serif italic accents (`Playfair Display`).
   - **Architectural Cards Gallery**: Stacked multi-card showcase with glass badges (`01/04`, `02/04`), tag pills (`Silver Wheel Plan`, `Cottage Plus`, `Zehr F.A.R.M.S`, `Zehr Brew`), and feature checklists.
   - **Floating "Zehr Concierge" Assistant**: Bottom-corner floating glass pill widget that triggers an instant-action triage drawer for quotes, vintage eligibility, branch lookup, and emergency claims.

---

## 🏛️ Key Sections Included (From Zehr's Main Business)

- **Header / Sticky Glass Navbar**:
  - Official Zehr Insurance logo
  - Primary navigation (`Solutions`, `Vintage & Collector`, `The Zehr Advantage`, `Advisors & Branches`, `Community`, `Claims 24/7`)
  - Live pulse 24/7 Emergency Claims Hotline pill (`1 (800) 667-1802`)
  - "Get a Quote" primary CTA

- **Hero & Bento Metrics**:
  - Editorial headline: *"PROTECTING WHAT TRULY MATTERS, across generations."*
  - Floating frosted glass showcase banner highlighting the flagship collector car program
  - Bento metric cards highlighting 70+ years of heritage, 9 South Western Ontario hubs, and 40+ top Canadian insurer relationships

- **Interactive Instant Quote Estimator Bar**:
  - Multi-tab selector (Auto, Home & Property, Vintage & Collector, Farm, Commercial)
  - Postal code lookup, asset appraisal selector, and deductible preferences
  - Live rate estimation calculation modal with email lock-in

- **Signature Coverage Showcase (Architectural Cards)**:
  - Interactive category filter pills (*All Solutions, Personal, Vintage Cars, Agriculture, Commercial*)
  - 4 showcase cards with rich imagery, status badges, and feature checklists

- **Spotlight: Ontario's Original Collector & Vintage Car Insurance**:
  - Dedicated showcase for Zehr's crown-jewel Silver Wheel program
  - Highlights: 19A agreed value, flexible mileage, spare parts coverage, club liability
  - "Featured Car of the Month" card with frosted-glass vehicle tag

- **The Zehr Advantage (Independent Broker vs. Direct Call-Centres)**:
  - Explains the difference between buying direct vs. having an independent RIBO broker
  - Claims advocacy in your corner, 40+ carrier rate shopping, and true local community presence

- **Advisors & Branches Directory (Reinvented from Old Homepage)**:
  - Filter by branch: New Hamburg HQ, Waterloo, Tavistock, Milverton, and Vintage Specialists
  - Certified broker profile cards with direct 1-click dial and email

- **Community Impact & Causes**:
  - Dedicated spotlight on "Helmets For Life" and Zehr's provincial partnership with Brain Injury Canada
  - Over 12,500+ helmets distributed and 70+ youth sports teams sponsored annually

- **24/7 Emergency Claims Triage**:
  - Fast-action emergency cards for Auto Collision, Property/Water Damage, and Commercial Interruption

- **Insurer Partners Marquee**:
  - Intact Insurance, Aviva Canada, Gore Mutual, Travelers Canada, Economical Insurance, Wawanesa Mutual

- **High-End Architectural Footer**:
  - Full site navigation, branch office list, regulatory RIBO & CISRO disclosures, and contact details

---

## 🚀 Deployment Instructions (Git & Vercel)

### Option A: Deploy via Vercel CLI (Fastest, 30 seconds)

1. Open PowerShell or Terminal in the project directory:
   ```bash
   cd "C:\Users\Osama\.gemini\antigravity\scratch\zehr-insurance-redesign"
   ```

2. Run `npx vercel` (or `vercel` if installed):
   ```bash
   npx vercel
   ```

3. Follow the prompts (Select Yes for default settings). Vercel will output a live URL immediately (e.g. `https://zehr-insurance-redesign.vercel.app`).

4. For production deployment:
   ```bash
   npx vercel --prod
   ```

---

### Option B: Deploy via GitHub & Vercel Dashboard

1. **Initialize Git repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Zehr Insurance modern homepage redesign mockup"
   ```

2. **Push to your GitHub repository**:
   ```bash
   git remote add origin https://github.com/<your-username>/zehr-insurance-redesign.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New Project"** -> **"Import Git Repository"**.
   - Select your `zehr-insurance-redesign` repo.
   - Framework preset: **Other** (Pure static HTML/CSS/JS).
   - Click **Deploy**. Your site will be live worldwide on Vercel's Edge Network with automatic HTTPS.

---

## 📂 Project Structure

```
zehr-insurance-redesign/
├── index.html           # Semantic, accessible modern HTML5 structure
├── styles.css           # Glassmorphism, bento grids, fluid typography & animations
├── app.js               # Interactive calculator, filters, concierge drawer & modals
├── vercel.json          # Vercel deployment routing and security headers
├── .gitignore           # Git ignore rules
├── assets/
│   └── zehr-logo.png    # Official Zehr Insurance Brokers Ltd. logo
└── README.md            # Documentation and deployment guide
```
