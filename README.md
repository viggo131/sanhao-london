# Sanhao London

A modern, animation-rich restaurant website for **Sanhao London** — authentic Chinese ramen in London's Chinatown.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion) + GSAP with ScrollTrigger
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (display) + DM Sans (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & global styles
├── components/
│   ├── layout/           # Navbar, Footer, Preloader, SmoothScroll
│   ├── sections/         # Hero, OurStory, Atmosphere, OurMenu, SanhaoStandard, Contact
│   └── ui/               # SectionHeading, GoldDivider, Button
├── lib/
│   ├── animations.ts     # Shared Motion variants & GSAP helpers
│   ├── constants.ts      # All site copy & data
│   └── fonts.ts          # Font configuration
└── public/images/        # Optimized images
```

## Deployment

Deployed on Vercel. Push to `main` to trigger auto-deploy.

```bash
vercel --prod
```
