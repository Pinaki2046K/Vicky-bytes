# Live Event Streaming Platform

> A premium live event streaming UI built for the VickyBytes Frontend Engineering Assignment.

---

## 🚀 Live Demo

> _Deploy and paste your Vercel URL here_

---

## 📸 Features

### Part 1 — Event Listing Page
- **15 real event cards** across 7 categories (Music, Gaming, Tech, Sports, Art, Comedy, Education)
- **Live search** — filter by title, host, category, or tags
- **Category filter pills** — one-click filtering
- **Live Now** and **Trending** quick-filter toggles
- **Like button** — UI toggle with animated heart + counter
- **Share button** — copies link to clipboard with feedback
- **View / Watch button** — navigates to event detail
- **Schedule date & time** on every card
- **Live badge** with pulsing dot for ongoing events
- **Trending badge** for popular events
- **Responsive grid** — 1 col (mobile) / 2 col (tablet) / 3 col (desktop)
- **Hero section** with live event count and CTA
- **Live ticker** marquee showing currently streaming events

### Part 2 — Event Streaming Page
- **YouTube embed** video player with custom thumbnail overlay
- **Auto-simulated live chat** with new messages every 2–4s
- **Auto-scroll** chat to bottom, with "N new messages" bounce-up button
- **Send your own messages** — they appear in the chat
- **Highlighted messages** (moderator / pinned style)
- **Event description** — full details, host info, tags, share
- **Related events** sidebar — same category or trending
- **Fully responsive** — video + chat stacked on mobile, side-by-side on desktop

---

## 🛠️ Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + Custom CSS |
| Icons | Lucide React |
| Fonts | Playfair Display (display) · DM Sans (body) · JetBrains Mono |
| Images | Next/Image with Unsplash |
| Video | YouTube iframe embed |
| Language | TypeScript |
| Deployment | Vercel |

**No backend. No Firebase. No shadcn/ui.**

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/vickybytes-live.git
cd vickybytes-live
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## 🌐 Deployment (Vercel)

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo — Vercel auto-detects Next.js
4. Click **Deploy**

No environment variables required.

---

## 📁 Project Structure

```
vickybytes-live/
├── app/
│   ├── layout.tsx          # Root layout + fonts + metadata
│   ├── page.tsx            # Home — Event Listing (Part 1)
│   ├── globals.css         # Global styles + animations
│   ├── not-found.tsx       # 404 page
│   └── event/
│       └── [id]/
│           └── page.tsx    # Event Streaming (Part 2)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   └── Badges.tsx      # Live / Trending / Category badges
│   ├── event/
│   │   ├── EventCard.tsx   # Card with like/share/view
│   │   ├── EventGrid.tsx   # Filtered grid client component
│   │   ├── SearchFilterBar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LiveTicker.tsx  # Scrolling live event marquee
│   │   ├── VideoPlayer.tsx # YouTube embed with custom UI
│   │   ├── EventDescription.tsx
│   │   └── RelatedEvents.tsx
│   └── chat/
│       └── LiveChat.tsx    # Real-time simulated chat
├── data/
│   ├── events.ts           # 15 mock events + helpers
│   └── chat.ts             # Mock messages + random generator
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Design Decisions

- **Dark-first aesthetic** — deep navy/charcoal surfaces with a bold red (`#ff3d30`) accent
- **Playfair Display** for editorial headings — gives a premium broadcast feel
- **Glass morphism** for overlays — navbar, badges, viewer counts
- **Staggered fade-up animations** on page load for perceived performance
- **CSS-only animations** — no heavy animation libraries needed
- **Semantic HTML** throughout for accessibility

---

_Built with ❤️ for the VickyBytes Frontend Engineering Assignment_
