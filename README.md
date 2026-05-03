# American Dream — Interactive Sales Deck

A fully interactive, browser-based sales deck for **American Dream Mall** (East Rutherford, NJ), engineered as a commercial tool for retail leasing, brand sponsorship, and event booking conversations.

**Live:** https://american-dream-deck-gamma.vercel.app

---

## Overview

This is a purpose-built sales platform, not a website. It consolidates the fragmented pitch process—scattered across YouTube videos, PDFs, and spreadsheets—into a single, self-contained tool that lets retail partners, event promoters, and sponsors explore the property on their terms.

Every section is built around a business action:

- **Home** — Cinematic hero establishing the property's scale and differentiation
- **Property** — Demographics, capacity proof, and NYC proximity story
- **Retail** — Brand presence, interactive leasing paths, and space filtering
- **Luxury** — Visual proof that entertainment traffic converts to luxury retail (the "I need to be here" moment)
- **Dining** — Venue showcase with operational metrics
- **Entertainment** — Interactive attraction grid with video-on-hover discovery
- **Events** — Past highlights, venue specs, and one-click booking
- **Partner** — Three segmented pathways (retail, events, sponsorship) with success stories

---

## Technology Stack

| Tech | Purpose |
|------|---------|
| **Next.js 14** (App Router) | Framework with optimized routing and server components |
| **TypeScript** | Type safety across interactive components |
| **Tailwind CSS v4** | Utility-first styling with custom gold/dark theme |
| **Framer Motion** | Page transitions, scroll animations, modal choreography |
| **Geist Sans + Playfair Display** | Premium typography pairing |
| **Vercel** | Deployment, edge caching, and analytics |

---

## Getting Started

### Prerequisites
- Node.js 18.17+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/OjhaArchana/american-dream-deck/
cd american-dream-deck

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
american-dream-deck/
├── app/
│   ├── layout.tsx              # Root layout, font config, Deck provider wrapper
│   ├── page.tsx                # Horizontal slide container
│   └── globals.css             # Custom gold theme, scrollbar styling
│
├── components/
│   ├── sections/               # One file per deck section
│   │   ├── Home.tsx            # Hero video + animated stat intro
│   │   ├── Property.tsx        # Demographics + looping stats carousel + proximity modal
│   │   ├── Retail.tsx          # Brand ticker + leasing path selector + budget/duration/footfall filter
│   │   ├── Luxury.tsx          # Auto-cycling imagery + heatmap toggle (retail vs. visitor flow)
│   │   ├── Dining.tsx          # Venue grid + operational stats carousel
│   │   ├── Entertainment.tsx    # Responsive attraction cards + video-on-hover
│   │   ├── Events.tsx          # Past highlights + venue stats + auto-play video carousel + booking modal
│   │   └── Contact.tsx         # Three-path wizard + success stories carousel
│   │
│   └── ui/                     # Shared interactive components
│       ├── DeckContext.tsx          # Horizontal slide state management
│       ├── HorizontalSlide.tsx      # Animated slide transitions with spring physics
│       ├── DeckArrows.tsx           # Left/right navigation with slide counter
│       ├── SideNav.tsx              # Icon-based section navigator
│       ├── Loader.tsx               # Entrance animation
│       ├── AnimatedStats.tsx        # Scroll-triggered counting numbers + gold glow
│       ├── HotspotMap.tsx           # Interactive floor plan with inquiry auto-scroll
│       └── LuxuryHeatmapToggle.tsx  # Entertainment → luxury conversion visualization
│
├── public/
│   ├── videos/                 # Hero loop, attraction clips, event highlights
│   └── images/
│       ├── ai-generated/       # Meta AI/ChatGPT atmospheric imagery
│       └── logos/              # Brand partner logos (Apple, Nike, etc.)
│
└── data/                       # Static content arrays (retail, dining, entertainment, events)
```

---

## Key Features

### 1. **Horizontal Deck Navigation**
Non-linear exploration designed for multiple user roles. Jump to the section that matters to your business.
- Left/right arrows with smooth spring animations
- Keyboard support (← → arrow keys)
- Icon-based side navigation with hover labels
- Real-time slide counter

### 2. **Luxury Heatmap Toggle** ⭐
The core "I need to be here" proof point.
- Toggle between Retail Floor View and Visitor Flow visualization
- Animated flow showing 68% of luxury customers come after 2+ hours of entertainment
- Direct "Secure Your Luxury Space" CTA

### 3. **Looping Stats Carousel**
Tells the story through data without overwhelming.
- **Property**: 6 key metrics cycling (3M sq ft → 450+ tenants → 40M annual visitors → etc.)
- **Dining**: 4 operational metrics (47% longer dwell time → 3x retail conversion → etc.)
- Pause on hover, navigate via dot indicators

### 4. **Interactive Floor Plan**
Explore the property's zones at a glance.
- Color-coded hotspots (retail/luxury/dining/entertainment)
- Status labels (Available, Leased, Coming Soon)
- Click any zone → auto-scroll to inquiry form
- Accessibility: keyboard navigation supported

### 5. **Retail Space Filter Modal**
Precision leasing path matching.
- Filter by budget ($2–5k, $5–15k, $15k+ monthly)
- Filter by lease duration (1m, 3m, 6m+)
- Filter by foot traffic (5k–15k, 15k–30k, 30k+ daily)
- Real-time space preview with match score

### 6. **Auto-Play Video Carousel**
Events section brings past highlights to life.
- Auto-advance every 5 seconds
- Videos auto-play on current slide
- Pause on hover, navigate via dots
- "NOW PLAYING" indicator

### 7. **Partnership Path Wizard**
Guided experience for sponsors and partners.
- 3-step flow: Select Path → Choose Space Type → Set Timeline
- Captures preferences before sales handoff
- Compact modal design, no friction

### 8. **Success Stories Carousel**
Social proof from marquee clients (Nike, Coca-Cola, ArenaBowl).
- Auto-rotates during Property and Contact sections
- Testimonials + metrics (attendance, conversion, ROI)

### 9. **Proximity Modal**
The "location, location, location" story.
- 8-mile radius from Midtown Manhattan
- Animated SVG map with traveling indicator
- Transit access overlay (Lincoln Tunnel, GW Bridge, NJ Transit)

### 10. **Animated Statistics**
Metrics feel earned, not just stated.
- Scroll-triggered count-up animations
- Gold drop-shadow effect on key numbers
- Hover tooltips with context

---

## Design Philosophy

**Dark Cinematic Palette**
Most retail properties default to bright, lifestyle-forward aesthetics. American Dream needed the opposite: a visual language that immediately signals "this is not a normal mall." The dark palette borrows from the brand's own luxury references (Hermès, Apple, Saint Laurent) rather than retail conventions.

**Non-Linear Storytelling**
Prospects don't consume sales decks sequentially. A prospective luxury partner wants Luxury first. An event promoter wants Events. The architecture respects this with persistent, icon-based navigation that jumps directly to relevant sections.

**Video-First, AI-Rich**
- Hero video establishes scale in the first 3 seconds
- Entertainment and Events sections use video-on-hover for immersion
- All imagery is AI-generated (Meta AI/ChatGPT) for tonal consistency without stock photo fatigue

**Modular Component Architecture**
Every section is an independent React component. Scaling is additive: new leasing paths, sponsorship tiers, or venue-specific modules can be added as routes without modifying existing sections.

**Section-Level Business Logic**
- Property section targets tenant decision-makers (demographic data, HHI proof, return-visitor rates)
- Events section targets promoters (past highlights, venue capacity, attendance metrics)
- Partner section mirrors American Dream's commercial segmentation (three CTAs, three audiences)

---

## Build Timeline & AI Integration

**Built with:**
- **Claude (Anthropic)** — Architecture decisions, component structure, iterative design critique, copy refinement, all interactive feature implementation
- **Meta AI/ChatGPT** — AI-generated atmosphere imagery for Entertainment, Dining, Luxury, and Events sections (prompts engineered for dark cinematic consistency)
- **Cloudinary** — Video CDN delivery

This was a focused sprint. Claude functioned as a senior technical reviewer at every decision point, compressing what would typically be a 3–4 week build into an intensive collaborative push.

---

## Future Enhancements

### Phase 2 (In Scope, Not Yet Implemented)

**Dedicated Sub-Modules**
- `/leasing` — Segmented paths per category (luxury flagship, mid-tier, food & beverage, pop-up)
- `/sponsorship` — Partnership tiers with audience reach and activation case studies
- `/events` — Full booking flow with venue calendar and instant quotes

The routing and component architecture already supports this—it's scope, not structure.

**Hero Video**
Replace single-shot clip with multi-cut highlight reel: theme park → luxury corridor → live event → indoor ski slope (first 10 seconds establish range).

**Live Data Integration**
- Connect heatmap visualization to real-time foot traffic analytics
- Display live leasing availability and pricing

**Event Booking System**
Full calendar, venue availability, instant quote generation (currently a modal placeholder).

**Sponsorship Tier Module**
Naming rights, activation partner, digital sponsor tracks with past examples.

**Performance Optimization**
- Image compression and WebM video fallbacks
- Lazy loading audit
- Bundle size optimization for 90+ Lighthouse score

---

**Current URL:** https://american-dream-deck-gamma.vercel.app