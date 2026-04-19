# American Dream — Interactive Sales Deck

A fully interactive, browser-based sales deck for **American Dream Mall** (East Rutherford, NJ), built as a purpose-built commercial tool for retail leasing, brand sponsorship, and event booking conversations.

**Live URL:** https://american-dream-deck-gamma.vercel.app

---

## What This Is

This is not a website. It is a self-contained sales tool designed to replace the fragmented pitch process (YouTube videos + PDFs + spreadsheets) that commercial teams currently use when presenting a property like American Dream to prospective tenants, sponsors, and event partners.

Every section is built around a specific business action:
- Retail section → drives leasing inquiries
- Luxury section → positions the property for flagship brand conversations
- Dining & Entertainment → communicates dwell time and differentiation
- Events section → drives venue booking
- Partner section → three segmented CTAs for each audience type

---

## Tech Stack


1. Framework - Next.js 14 (App Router) 
2. Language - TypeScript 
3. Styling - Tailwind CSS 
4. Animation - Framer Motion 
5. Font - Geist (sans) + system serif italic for accent 
6. Deployment - Vercel 

---

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/american-dream-deck.git
cd american-dream-deck

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Requirements
- Node.js 18.17 or later
- npm 9+

---

## Project Structure

```
american-dream-deck/
├── app/
│   ├── layout.tsx          # Root layout, font config, DeckNav
│   ├── page.tsx            # Main deck, all sections composed here
│   └── events/             # Phase 2: Events sub-module route
├── components/
│   ├── sections/           # One file per deck section
│   │   ├── Home.tsx        # Cinematic hero with background video
│   │   ├── Property.tsx    # Stats grid + demographic bar chart
│   │   ├── Retail.tsx      # Brand ticker + leasing path cards
│   │   ├── Luxury.tsx      # Auto-cycling image panel + brand list
│   │   ├── Dining.tsx      # 4-column image grid + pull quote
│   │   ├── Entertainment.tsx # 2x2 attraction cards with imagery
│   │   ├── Events.tsx      # Stats row + past highlights table + booking modal
│   │   └── Contact.tsx     # Three-path partner CTA section
│   └── ui/
│       ├── DeckNav.tsx     # Persistent top nav with IntersectionObserver active state
│       ├── SideNav.tsx     # Section dot indicators (disabled for now)
│       └── Loader.tsx      # Initial page load animation
├── public/
│   ├── videos/             # Hero background video
│   └── images/             # Section imagery + brand logos
└── data/                   # Static content data
```

---

## Design Decisions

**Dark cinematic palette throughout**
Most retail properties default to bright, lifestyle-forward design. American Dream's differentiator is that it's not a normal mall, the visual language needed to signal that immediately. The dark palette is borrowed from the brief's own luxury references (Hermès, Apple, Saint Laurent) rather than from retail.

**Non-linear navigation**
The persistent DeckNav uses IntersectionObserver to track the active section and allows any prospect to jump directly to the content most relevant to their role, a CMO goes straight to Luxury, an event promoter goes straight to Events, without being forced through a linear sequence.

**Section-level business logic**
Each section is built around a specific decision-maker and a specific action. The demographic data in the Property section (HHI $100K+, 71% return visitors) is targeted at tenant decision-makers. The events past-highlights table is targeted at promoters. The three-path Partner section mirrors how American Dream's commercial team actually segments outreach.

**Modular component architecture**
Every section is an independent component under `/components/sections/`. New sub-modules (leasing paths, sponsorship tiers, venue-specific pages) can be added as new routes without modifying existing sections. The routing structure under `/app/` already supports Phase 2 expansion.

**Image loading strategy**
Luxury section preloads all brand images before the slideshow starts to eliminate flash between transitions. Dining and Entertainment cards use a blur-up pattern (blur(8px) → blur(0px)) with per-image loaded state tracking — no layout shift, no pop-in.

---

## AI Tools Used


**- Claude (Anthropic)** - Primary thinking partner throughout, architecture decisions, component structure, iterative design critique against the brief's evaluation criteria, copy refinement, and debugging

**- AI-assisted image research** - Used AI tools to source and identify 
relevant visual assets for Entertainment and Dining sections selecting imagery that matched the dark cinematic tone of the deck

**- Claude** - Used to evaluate each section against the brief's scoring criteria (Visual Design 30%, Technical 25%, AI Integration 15%, Storytelling 15%, Expandability 10%, Detail 5%) before finalising

The AI usage was not decorative. Claude compressed what would have been a multi-week build into a focused sprint while maintaining craft at each decision point, functioning as a senior reviewer available at every stage.

---

## What I Would Improve With More Time

**Phase 2 sub-modules**
`/leasing` with segmented paths per category (luxury flagship, mid-tier, F&B, pop-up), `/sponsorship` with partnership tiers and audience data visualisations, `/events` with a full booking flow. The routing and component architecture already supports this, it is scope, not structure.

**Hero video**
Replace the current single-shot clip with a proper multi-cut highlight reel theme park → luxury corridor → live event → indoor ski slope to communicate the property's full range in the first 10 seconds.

**Lighthouse performance pass**
Image compression, lazy loading audit, and bundle size optimisation to hit the 90+ Lighthouse score target specified in the brief.

**Sponsorship tier module**
This business objective is currently the least represented in the deck. A dedicated sponsorship page with three tiers (naming rights, activation partner, digital sponsor), audience reach data per tier, and past activation examples would complete the commercial story.

**Demographics visualisation**
Replace the animated bar chart with a D3.js catchment area map showing the 20M+ metro reach radius, more visceral than percentages for a tenant decision-maker evaluating regional exposure.

---

## Brief

This project was built in response to the Senior Frontend Engineer & AI-Powered Interactive Design assignment from [Liat.ai](https://liat.ai).

The assignment brief: build a fully interactive, browser-based sales deck for one of the world's largest shopping malls designed to replace the fragmented pitch process commercial teams currently use, and to make prospective tenants, sponsors, and event partners feel: *"I need to be here."*