# Muhammad Hassam Mujahid — Developer Portfolio

A production-grade personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a warm editorial dark aesthetic featuring amber-gold accents, smooth scroll-triggered animations, and full dark/light theme support.

---

## ✨ Features

- **Dark mode first** — persisted via `next-themes`, toggleable from the navbar
- **Framer Motion animations** — staggered hero reveal, scroll-triggered section fades, hover lift cards
- **Sticky glass navbar** — blur backdrop on scroll, mobile hamburger menu
- **Fully responsive** — mobile-first layout, tested across all breakpoints
- **SEO optimized** — metadata, OpenGraph, Twitter cards in `layout.tsx`
- **Type-safe** — strict TypeScript throughout, all data typed via interfaces
- **Clean architecture** — data lives in `constants/data.ts`, never hardcoded in components

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + CSS custom properties |
| Animation | Framer Motion |
| Theming | next-themes |
| Icons | lucide-react |
| Fonts | DM Serif Display · Outfit · DM Mono |
| Deployment | Vercel |

---

## 📁 Project Structure

```
hassam-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav with theme toggle + mobile menu
│   │   ├── Section.tsx         # Reusable scroll-triggered fade wrapper
│   │   ├── SectionHeading.tsx  # Consistent label + title + description block
│   │   ├── Hero.tsx            # Hero with grid bg, glow, staggered CTAs
│   │   ├── About.tsx           # Bio + education + stats grid
│   │   ├── Skills.tsx          # 5 skill category cards with badge chips
│   │   ├── Experience.tsx      # Achievement list + awards sidebar
│   │   ├── Projects.tsx        # Project cards with highlights + tech stack
│   │   ├── Contact.tsx         # Contact cards + gradient CTA banner
│   │   └── Footer.tsx          # Minimal footer
│   ├── constants/
│   │   └── data.ts             # All static content (single source of truth)
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── styles/
│   │   └── globals.css         # CSS variables, fonts, base styles
│   ├── layout.tsx              # Root layout + SEO metadata
│   └── page.tsx                # Page composition
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Clone the repo
git clone https://github.com/mhasammujahid/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

### Option 2 — GitHub Integration

1. Push your repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables required. The project deploys zero-config.

---

## 🎨 Customization

All content lives in one file: **`app/constants/data.ts`**

To update your portfolio:
- Edit `HERO` for name, tagline, and social links
- Edit `ABOUT.paragraphs` for bio text and `ABOUT.stats` for key numbers
- Edit `SKILLS` to add/remove skill categories
- Edit `EXPERIENCE` to add new roles
- Edit `PROJECTS` to add new projects
- Edit `EDUCATION` and `AWARDS` for credentials

To change the color accent, update the `--accent` CSS variable in `app/styles/globals.css`.

---

## 📄 License

MIT — free to use and adapt for your own portfolio.
