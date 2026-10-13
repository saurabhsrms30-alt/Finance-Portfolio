# Saurabh Gautam — MBA (Applied Finance) Portfolio Website

A personal portfolio website engineered for **Equity Research**, **Investment Banking**, **Wealth Management**, and **Financial Analytics** roles.

Designed with a high-end fintech aesthetic (deep navy `#0B1F3A`, warm gold `#C9A24B`, and data emerald `#10B981`), featuring responsive financial modeling calculators, interactive Recharts time series, and verified academic and corporate timelines.

---

## 🌟 Key Features

- **Institutional Design Language**: Premium dark/light themes (default dark) with subtle background candlestick motifs, geometric borders, and glassmorphic navigation.
- **Dynamic Market Ticker Strip**: Slim live-style decorative market marquee displaying NIFTY 50, SENSEX, BANK NIFTY, INDIA VIX, and sovereign yields (clearly marked as sample data).
- **Interactive Financial Showcase**:
  - **SIP Calculator**: Compound monthly investment modeling with interactive sliders, principal vs. wealth gain breakdown, and Recharts pie visualization.
  - **CAGR Calculator**: Annualized compound return calculator with absolute return and capital multiplier metrics.
  - **Benchmark Time Series**: Recharts line chart illustrating sample NIFTY 50 valuation trends, P/E multiples, and yield metrics.
- **Interactive Project Modals**: Deep-dive modals for **TradeX** (Stock Trading Simulation), **Market's Mind** (Capital Markets Platform), and **Nirmal Bang SIP** (Equity Research Study).
- **Fast Recruiter Engagement**: 1-click direct resume download (`.pdf`), quick-copy email, direct dial, LinkedIn connectivity, and a contact form with mailto fallback and Formspree support.
- **100% Data-Driven Content**: All facts, timelines, scores, and text are centralized in `/content/data.ts`.

---

## 📁 Project Structure

```
portfolio/
├── content/
│   └── data.ts                    # Root alias to edit all portfolio content
├── public/
│   ├── assets/
│   │   ├── profile-avatar.svg     # Default vector avatar (replace with profile.jpg)
│   │   └── resume-saurabh-gautam.pdf # Downloadable resume PDF
│   └── favicon.svg                # Custom institutional SG crest favicon
├── src/
│   ├── components/
│   │   ├── CandlestickBackground.tsx # Subtle decorative chart pattern
│   │   ├── Certifications.tsx     # Badge cards (IIM-B, Zerodha, CISCO)
│   │   ├── Contact.tsx            # Recruiter contact form & channels
│   │   ├── Education.tsx          # Animated vertical academic timeline
│   │   ├── Experience.tsx         # Nirmal Bang & Reliance Retail internship cards
│   │   ├── Footer.tsx             # Institutional footer & back-to-top
│   │   ├── Hero.tsx               # Header, elevator pitch & photo frame
│   │   ├── Icons.tsx              # Brand icons (LinkedIn, etc.)
│   │   ├── Leadership.tsx         # Class Representative tenure card
│   │   ├── MarketInsights.tsx     # Recharts benchmark, SIP & CAGR calculators
│   │   ├── MarketTicker.tsx       # Live-style decorative market ticker
│   │   ├── Navbar.tsx             # Sticky glassmorphism navbar + scrollspy
│   │   ├── ProjectModal.tsx       # Detailed modal dialog for projects
│   │   ├── Projects.tsx           # Feature project grid with hover lift
│   │   ├── Skills.tsx             # Technical & Interpersonal skill matrix
│   │   └── ThemeToggle.tsx        # Dark / Light mode toggle
│   ├── content/
│   │   └── data.ts                # Master data & content file
│   ├── App.tsx                    # Main layout composition
│   ├── index.css                  # Tailwind styles & scrollbars
│   └── main.tsx                   # React root entry
├── index.html                     # SEO metadata, Google Fonts & JSON-LD schema
├── tailwind.config.js             # Fintech color palette & fonts
├── tsconfig.json                  # TypeScript compiler settings
└── package.json                   # Project dependencies & scripts
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your web browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## ✏️ How to Edit Text & Content Without Touching Code

All website content is located in **`content/data.ts`** (or **`src/content/data.ts`**):

1. **Personal Information & Contact**:
   Edit `PERSONAL_INFO` to update email, phone, location, LinkedIn link, or career objective.
2. **Profile Photo**:
   Drop your photo into `public/assets/profile.jpg` and set:
   ```ts
   profilePhoto: "/assets/profile.jpg"
   ```
3. **Resume PDF**:
   Replace `public/assets/resume-saurabh-gautam.pdf` with your updated resume file.
4. **Projects & Links**:
   Update `PROJECTS_DATA` with your deployed live demo URLs and report links.
5. **Formspree Integration (Optional)**:
   Create a free form on [formspree.io](https://formspree.io) and create a `.env` file in the `portfolio` root:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```

---

## ☁️ How to Deploy to Vercel (1-Click)

### Method A: Via Vercel Web Dashboard (Recommended)
1. Push this `portfolio` folder to a new repository on your GitHub account.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New"** > **"Project"** and import your repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your website will be live worldwide in under 60 seconds with automatic SSL/HTTPS!

### Method B: Via Vercel CLI
```bash
cd portfolio
npx vercel
```
Follow the terminal prompts to link and deploy.

---

## 📊 Technical Standards & Compliance

- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<time>`, and `<footer>` tags.
- **Accessibility**: ARIA labels, keyboard navigability (Esc key to close modals), high-contrast text meeting WCAG AA requirements.
- **SEO & Social Metadata**: Pre-configured Open Graph, Twitter cards, and Schema.org `Person` JSON-LD structured data for Google Rich Results.
- **Zero Hallucinations**: Strictly mirrors the provided resume facts without invented employer metrics or arbitrary percentage bars.

---

&copy; 2026 Saurabh Gautam. All rights reserved.
