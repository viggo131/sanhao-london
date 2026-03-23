# Sanhao London — Premium Restaurant Website

## Project Overview

A modern, animation-rich single-page restaurant website for **Sanhao London** — authentic Chinese ramen in London's Chinatown. This is a portfolio piece and client pitch demonstrating premium web design. Deployed on Vercel Hobby (free tier).

**Live reference**: The current site is https://sanhaolondon.com — our rebuild replaces it entirely with a luxury, animation-driven experience.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript, `src/` directory)
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (formerly Framer Motion) for UI transitions + GSAP with ScrollTrigger for scroll-driven effects
- **Smooth Scroll**: Lenis (`lenis` package, NOT `@studio-freight/lenis`)
- **Icons**: Lucide React (tree-shakeable)
- **Fonts**: `next/font/google` — Cormorant Garamond (display) + DM Sans (body)
- **Deployment**: Vercel Hobby via `vercel` CLI
- **Package Manager**: npm

### Install Commands

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --use-npm
npm install motion gsap @gsap/react lenis lucide-react clsx
```

---

## Design System

### Color Palette (CSS Custom Properties)

Define these in `globals.css` as `:root` variables AND in `tailwind.config.ts` as extended colors:

| Token | Variable | Hex | Usage |
|-------|----------|-----|-------|
| Primary Dark | `--color-dark` | `#0A0A0A` | Page background, hero, dark sections |
| Vermillion Red | `--color-vermillion` | `#D4380D` | CTA buttons, active states, key accents |
| Warm Gold | `--color-gold` | `#C9A96E` | Section headings, decorative borders, dividers, icon strokes |
| Warm White | `--color-cream` | `#F5F0EB` | Light section backgrounds, body text on dark |
| Stone Gray | `--color-stone` | `#8C8579` | Secondary/muted text, subtle borders |
| Off-White | `--color-offwhite` | `#E8E2DA` | Body text on dark backgrounds |
| Deep Brown | `--color-brown` | `#1A1714` | Card backgrounds, slightly lighter than primary dark |

### Typography

| Role | Font Family | Weight | Sizes |
|------|-------------|--------|-------|
| Display headings | `Cormorant Garamond` (serif) | 400, 500, 600 | Hero: 64-80px, Section: 36-48px |
| Body text | `DM Sans` (sans-serif) | 400, 500 | Body: 16-18px, Small: 14px |
| Nav links | `DM Sans` | 400 | 14px, uppercase, letter-spacing: 0.1em |
| Chinese accents | `Noto Serif SC` or system CJK serif | 400 | For 三好 characters in preloader |

### Spacing & Layout

- Max content width: `1200px` centered
- Section vertical padding: `120px` top/bottom (desktop), `80px` (mobile)
- Component gap: `60-80px` between major elements
- All images use `next/image` with `placeholder="blur"` where possible

---

## Page Preloader (三好 Animation)

**This loads FIRST before any page content is visible.**

### Behavior
1. Page loads → full-screen `#0A0A0A` background covers viewport
2. The characters 三好 appear centered, rendered large (120-160px) in Cormorant Garamond or Noto Serif SC
3. Each character animates in sequentially with a gold `#C9A96E` clip-path wipe reveal (left to right), with ~300ms stagger
4. Brief hold (~600ms) at full visibility
5. The entire preloader fades out + scales up slightly (1.05) over 500ms, revealing the page content beneath
6. After exit animation completes, set `display: none` on preloader and enable scrolling

### Implementation Notes
- Use a client component `Preloader.tsx` with `useState` tracking animation phase
- The preloader div is `position: fixed; inset: 0; z-index: 9999`
- Body should have `overflow: hidden` while preloader is active
- Use Motion's `animate` + `AnimatePresence` for the exit
- Optionally add a subtle "Sanhao London" text fade-in below the characters (14px, DM Sans, `#8C8579`)
- Total preloader duration: ~2.2 seconds max — don't make it slow

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, Lenis provider
│   ├── page.tsx                # Composes all sections in order
│   └── globals.css             # Tailwind directives + CSS custom properties
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, scroll-aware
│   │   ├── Footer.tsx          # Bottom nav + copyright
│   │   ├── SmoothScroll.tsx    # Lenis wrapper (client component)
│   │   └── Preloader.tsx       # 三好 page load animation
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero with interior photo
│   │   ├── OurStory.tsx        # Split layout — image + text
│   │   ├── Atmosphere.tsx      # Photo grid gallery
│   │   ├── OurMenu.tsx         # Menu highlights with food image
│   │   ├── SanhaoStandard.tsx  # 3 feature cards with icons
│   │   └── Contact.tsx         # Map + inquiry form
│   └── ui/
│       ├── AnimatedText.tsx    # Reusable text reveal (word-by-word or char)
│       ├── SectionHeading.tsx  # Gold serif heading with optional subtitle
│       ├── GoldDivider.tsx     # Thin gold horizontal line
│       └── Button.tsx          # CTA button variants
├── lib/
│   ├── animations.ts           # Shared Motion variants + GSAP helpers
│   ├── constants.ts            # All site copy, menu data, nav links
│   └── fonts.ts                # Font configuration exports
└── public/
    └── images/                 # All optimized images
        ├── hero-interior.jpg   # Restaurant interior for hero bg
        ├── story.jpg           # Ambiance photo for Our Story
        ├── ramen-bowl.jpg      # Hero ramen bowl for Menu section
        ├── atmosphere/         # Gallery photos (6-8 images)
        │   ├── interior-1.jpg
        │   ├── interior-2.jpg
        │   ├── detail-1.jpg
        │   └── ...
        └── icons/              # Custom SVG icons for Sanhao Standard
            ├── noodles.svg
            ├── broth.svg
            └── ingredients.svg
```

---

## Section-by-Section Specification

Build these in the exact order listed. Each section is its own component file.

---

### Section 0: Preloader (`Preloader.tsx`)

See "Page Preloader" section above. This wraps around all page content in `layout.tsx` or `page.tsx`.

---

### Section 1: Navigation (`Navbar.tsx`)

**Desktop layout**: Horizontal nav centered at top of page.

| Element | Detail |
|---------|--------|
| Links | `About Us` · `Menu` · `Our Noodles` · `Choose Us` · `Visit Us` · `Contact Us` |
| Font | DM Sans, 14px, uppercase, letter-spacing 0.1em |
| Color | `#E8E2DA` (off-white) on dark, transitions to contrast on scroll |
| Separators | Small dot `·` or generous spacing between links |
| Position | `sticky top-0 z-50` |
| Scroll behavior | Starts transparent → gains `backdrop-blur-md` + `bg-[#0A0A0A]/90` after 100px scroll |
| Mobile | Hamburger icon → full-screen overlay menu with staggered link entrance |
| Click behavior | Smooth scroll to section via Lenis `scrollTo` |

**Animation**: Nav links fade in with stagger on page load (after preloader exits). Use Motion's `staggerChildren: 0.05`.

---

### Section 2: Hero (`Hero.tsx`)

**Full viewport height** (`min-h-screen`), dark restaurant interior as background.

| Element | Detail |
|---------|--------|
| Background | `hero-interior.jpg` — dark, moody restaurant interior. Use `next/image` with `fill`, `object-cover`, `priority`. Add a dark overlay `bg-gradient-to-b from-black/40 via-black/20 to-black/60` on top. |
| Title | `"Sanhao London"` — Cormorant Garamond, ~64-80px on desktop, ~40px mobile, color `#F5F0EB`. Centered. |
| CTA Button | `"Explore the Journey"` — bordered button (1px `#C9A96E` border), Cormorant Garamond italic or DM Sans, ~16px, color `#C9A96E`. Padding `12px 32px`. Hover: background fills with `#C9A96E`, text goes `#0A0A0A`. |
| Layout | Everything centered vertically and horizontally |
| Scroll indicator | Optional subtle animated chevron at bottom center |

**Animations**:
- Title: fade-up + opacity entrance after preloader exits (delay ~200ms)
- CTA: fade-up with slight delay after title (~400ms)
- Background: subtle parallax drift (GSAP ScrollTrigger, `y: -50` over full section scroll)

---

### Section 3: Our Story (`OurStory.tsx`)

**Light-on-dark section** — dark background `#0A0A0A`, cream content area or full dark.

| Element | Position | Detail |
|---------|----------|--------|
| Image | Left 40% | Restaurant interior / ambiance photo, tall portrait crop. Slight rounded corners. |
| Section heading | Right top | `"Our Story"` — Cormorant Garamond, ~36px, gold `#C9A96E` |
| Body text | Right | 2 paragraphs about Sanhao London. DM Sans, 16px, `#E8E2DA`. Line-height 1.7. Use REAL copy from the existing sanhaolondon.com About section. |
| CTA link | Right bottom | `"Learn More →"` — DM Sans, 14px, `#C9A96E`, underline on hover |
| Divider | Above section | Optional thin gold line `1px #C9A96E` with opacity 0.3 |

**Layout**: Flexbox, `gap: 60px`. Image takes ~45% width, text takes ~55%. On mobile: stack vertically, image on top.

**Animations**:
- Image: parallax float (GSAP, subtle `y: -30` on scroll)
- Heading: fade-in from right (Motion, `x: 40 → 0`)
- Body paragraphs: staggered fade-up (Motion, `staggerChildren: 0.1`)
- "Learn More" link: fade-in last

---

### Section 4: The Atmosphere (`Atmosphere.tsx`)

**Photo grid / gallery section** showcasing the restaurant interior and details.

| Element | Detail |
|---------|--------|
| Section heading | `"The Atmosphere"` — Cormorant Garamond, gold `#C9A96E`, centered above grid |
| Grid layout | Masonry-style or CSS grid with mixed sizes: 2 large images (spanning 2 cols or 2 rows), 4-6 smaller images. ~3 columns on desktop, 2 on tablet, 1 on mobile. |
| Overlay text | Over the center of the grid: `"A Sanctuary of Culinary Art"` — large Cormorant Garamond (~48px), `#F5F0EB`, with text-shadow or dark overlay behind for legibility |
| Subtitle | Below grid: `"Where Tradition Meets Modern Sophistication"` — Cormorant Garamond, ~28px, gold `#C9A96E`, centered |
| Background | `#0A0A0A` or very dark brown `#1A1714` |

**Images**: Use actual restaurant interior photos from their site or high-quality placeholders. Mix wide shots with detail shots (dishes, decor, lighting, ceramics).

**Animations**:
- Grid images: staggered scale-up entrance (`scale: 0.9 → 1, opacity: 0 → 1`) when scrolled into view
- Overlay text: word-by-word reveal using AnimatedText component
- Subtitle: fade-up after grid is visible

---

### Section 5: Our Menu (`OurMenu.tsx`)

**Split layout** — food image left, menu highlights text right.

| Element | Position | Detail |
|---------|----------|--------|
| Section heading | Centered above | `"Our Menu"` — Cormorant Garamond, gold `#C9A96E` |
| Food image | Left ~45% | Large ramen bowl photo, rounded corners, slight shadow. Object-cover in a tall container. |
| Subheading | Right top | `"Menu Highlights"` — Cormorant Garamond, ~28px, `#F5F0EB` |
| Menu items | Right | List of 4-5 highlight items. Each has: **bold name** (DM Sans 500, `#F5F0EB`) + description line (DM Sans 400, `#8C8579`). Spacing: `16px` between items. |
| CTA button | Right bottom | `"View the Full Menu"` — bordered button matching hero CTA style (1px gold border, gold text, hover fill) |
| Background | Full section | `#0A0A0A` dark |

**Menu items content** (use real categories from their actual site):
1. **Signature Ramen** — Rich and aromatic broths with handmade noodles and fresh toppings
2. **Premium Ingredient** — Select Chinese premium ingredients and traditional preparations
3. **Artisan Appetizers** — Crispy spring rolls, pan-fried dumplings, and chef's specials
4. **Fresh Arrangement** — Seasonal ingredients sourced for the finest, freshest flavours
5. **House Specials** — Our chef's curated selection of signature Sanhao creations

**Animations**:
- Food image: fade-in + slight scale from left
- Menu items: staggered fade-up (each item delayed by 100ms)
- CTA button: fade-in last with slight y offset

---

### Section 6: The Sanhao Standard (`SanhaoStandard.tsx`)

**Three feature cards** on a lighter dark or warm dark background.

| Element | Detail |
|---------|--------|
| Section heading | `"The Sanhao Standard"` — Cormorant Garamond, gold, centered |
| Background | Slightly lighter dark: `#1A1714` or `#0F0D0A` to create contrast with adjacent sections |
| Card layout | 3 cards in a row (flexbox or grid), equal width, centered |

**Each card:**

| Card | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | Custom noodle icon (gold line art SVG, ~48px) | `"Hand-Crafted Noodles"` | Fresh noodles made in-house daily using traditional techniques passed down through generations |
| 2 | Custom broth/pot icon (gold line art SVG, ~48px) | `"48-Hour Broth"` | Slow-simmered broth perfected over 48 hours for deep, complex flavour |
| 3 | Custom leaf/ingredient icon (gold line art SVG, ~48px) | `"Artisan Ingredients"` | Premium ingredients sourced to create refined, authentic Chinese flavours |

**Card styling**:
- No visible card border — rely on spacing and the icon for structure
- Icon: gold `#C9A96E` stroke, no fill (line art style), centered above title
- Title: DM Sans 500, 18px, `#F5F0EB`, centered
- Description: DM Sans 400, 14px, `#8C8579`, centered, max-width ~280px
- Spacing: icon → title `16px`, title → description `12px`

**Icons**: If custom SVGs aren't available yet, use Lucide icons as temporary placeholders: `ChefHat`, `Flame`, `Leaf`. Style them with `stroke: #C9A96E, strokeWidth: 1.5`.

**Animations**:
- Cards: staggered slide-up + fade (`y: 40 → 0, opacity: 0 → 1`, stagger 150ms)
- Icons: subtle rotate on hover (`rotate: 5deg`, spring transition)

---

### Section 7: Contact & Inquiry (`Contact.tsx`)

**Split layout** — map left, contact form right.

| Element | Position | Detail |
|---------|----------|--------|
| Map | Left ~45% | Google Maps embed via `<iframe>`, dark-themed. Center on `3 Gerrard St, London W1D 5PD`. Give it rounded corners and full section height. |
| Form heading | Right top | `"Private Dining Inquiry"` — Cormorant Garamond italic, ~28px, gold `#C9A96E` |
| Form subtitle | Right | `"Contact our inquiry. Information with Sanhao London."` — DM Sans, 14px, `#8C8579` |
| Form fields | Right | `Name` (half), `Email` (half) on one row. `Email address` or `Message` full width below. All fields: transparent bg, bottom-border only (`1px #8C8579`), placeholder text `#8C8579`, input text `#F5F0EB`. |
| Submit button | Right | `"Send"` — full-width within form. Background `#C9A96E`, text `#0A0A0A`, DM Sans 500. Hover: darken slightly. This is the ONE place we use a filled gold button. |
| Background | Full section | `#0A0A0A` with very subtle warm tint, or same dark |

**Google Maps iframe styling**: Use `&style=feature:all|element:geometry|color:0x242f3e` or similar dark map theme. Add `loading="lazy"`. Border-radius on wrapper div.

**Form behavior**: For now, the form is front-end only (no backend). `onSubmit` can show a success toast or alert. If they want real submissions later, add Formspree or a Next.js API route.

**Animations**:
- Map: fade-in from left
- Form: fade-in from right
- Form fields: staggered entrance (each field slides up in sequence)

---

### Section 8: Footer (`Footer.tsx`)

**Minimal, elegant footer** on `#0A0A0A`.

| Element | Detail |
|---------|--------|
| Nav links | Same as header: `About Us · Menu · Our Noodles · Choose Us · Visit Us · Contact Us` — centered, DM Sans 14px, `#8C8579`, hover `#C9A96E` |
| Copyright | `"© 2025 Sanhao London. All rights reserved."` — DM Sans, 12px, `#8C8579`, centered below links |
| Spacing | `24px` between links row and copyright. `60px` padding top, `40px` padding bottom. |
| Divider | Thin `1px` line above footer, `#C9A96E` at 20% opacity, max-width `1200px` centered |

**No animation needed** for footer — it's utilitarian.

---

## Animation Standards

### Motion (Framer Motion) Variants — define in `lib/animations.ts`

```typescript
// Fade up — the default entrance for most elements
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

// Fade in from side
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

// Scale entrance for images / gallery
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}
```

### GSAP Usage Rules

- Always use the `useGSAP` hook from `@gsap/react` — it handles cleanup automatically
- Register ScrollTrigger: `gsap.registerPlugin(ScrollTrigger)` at component top level
- Parallax pattern: `gsap.to(ref, { y: -30, scrollTrigger: { trigger: ref, start: "top bottom", end: "bottom top", scrub: true } })`
- Use `scrub: true` for scroll-linked, `scrub: 1` for smooth catch-up

### Lenis Setup (`SmoothScroll.tsx`)

```typescript
"use client"
import { ReactLenis } from "lenis/react"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
```

Wrap in `layout.tsx` around `{children}`. Lenis is the OUTERMOST wrapper (outside Preloader content, but Preloader itself is fixed-position so it's unaffected).

### Scroll-triggered entrances

Every section uses Motion's `whileInView` prop with `viewport={{ once: true, margin: "-100px" }}` so animations trigger when the section is ~100px into the viewport, and only play once.

---

## Responsive Breakpoints

| Breakpoint | Tailwind | Behavior |
|------------|----------|----------|
| Mobile | Default (`<768px`) | Single column, stacked layouts, smaller type |
| Tablet | `md:` (`≥768px`) | 2-column grids, medium type sizes |
| Desktop | `lg:` (`≥1024px`) | Full layouts as designed in mockup |
| Large | `xl:` (`≥1280px`) | Max-width container, generous spacing |

Mobile-first: write mobile styles first, layer up with `md:` and `lg:` prefixes.

---

## Image Strategy

### Sources
1. **Actual restaurant photos**: Scrape/download from the current sanhaolondon.com site
2. **Supplement with**: High-quality stock from Unsplash (search "chinese restaurant interior", "ramen bowl", "noodle making")
3. **Placeholder service**: Use `https://placehold.co/800x600/0A0A0A/C9A96E?text=Sanhao` during development

### Optimization
- All images go through `next/image` with `sizes` prop set correctly
- Hero image: `priority` flag, `quality={85}`
- All other images: lazy loaded (default), `quality={80}`
- Generate blur placeholders with `plaiceholder` package or use solid color fallback
- Target WebP/AVIF output (automatic with Next.js Image)

---

## Code Standards

- All components are TypeScript with explicit interfaces/types
- Use `"use client"` ONLY on components that need it (animations, interactivity, Lenis)
- Server components by default — keep data and copy in `lib/constants.ts`
- Tailwind for ALL styling — no inline `style={}` props, no CSS modules
- Motion variants live in `lib/animations.ts`, not defined inline in components
- GSAP effects use `useGSAP` with refs — never query DOM by class/id
- Follow the section order: build top-down (Preloader → Nav → Hero → ... → Footer)
- Test each section on mobile before moving to the next
- Run `npm run build` before every commit to catch errors

---

## Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# First deploy (creates project)
vercel

# Production deploy
vercel --prod
```

Connect GitHub repo to Vercel dashboard for auto-deploys on `main` branch push.

### Vercel Config (`vercel.json` — optional)

```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

---

## Content Source of Truth

ALL text content lives in `lib/constants.ts`. Components import from there — never hardcode copy in JSX. This makes it trivial to update text for the client later.

```typescript
export const SITE = {
  name: "Sanhao London",
  tagline: "Authentic Chinese Ramen",
  address: "3 Gerrard St, London W1D 5PD",
  phone: "02074342899",
  email: "info@sanhaolondon.com",
  hours: {
    weekday: "Monday to Thursday: 12:00 PM – 10:00 PM",
    weekend: "Friday to Sunday: 12:00 PM – 11:00 PM",
  },
  copyright: "© 2025 Sanhao London. All rights reserved.",
}

export const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Our Noodles", href: "#noodles" },
  { label: "Choose Us", href: "#standard" },
  { label: "Visit Us", href: "#contact" },
  { label: "Contact Us", href: "#contact" },
]
```

---

## Key Decisions

- **Preloader**: Yes — 三好 character reveal animation on every page load
- **Horizontal scroll section**: No — the Atmosphere gallery serves this purpose
- **Menu style**: Simple split-layout (mockup style), not tabbed cards
- **Accent strategy**: Gold `#C9A96E` for headings/decorative, Vermillion `#D4380D` reserved for important CTAs and hover accents
- **Form backend**: None initially — front-end only with visual feedback
- **Custom icons**: Gold line-art SVGs for The Sanhao Standard section. Use Lucide as fallback.