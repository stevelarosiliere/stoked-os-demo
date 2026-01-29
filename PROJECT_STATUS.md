# STOKED OS Clickable Prototype

## Purpose
Demo app for the DC National Mentoring Summit (Feb 4-6, 2026). Steve demos this to potential program partners and funders to show what STOKED OS delivers as a platform for mentoring organizations.

## Why This Exists
- 7 mentoring software competitors exhibiting at the summit (MentorPRO, Riza, MoonPi, etc.)
- Current STOKED beta is functional but basic (CRUD tables, no analytics/outcomes visualization)
- Steve needs a "here's what your organization gets" walkthrough for potential OS licensees ($300-500/mo)
- Target outcome: 10 program partners and 5 funding partners from the summit

## Competitive Positioning
Only STOKED OS has:
1. **Youth Progression Framework** -- visible journey from enrollment through outcomes, not a flat database
2. **Movement-Based Curriculum Integration** -- structured multi-week programs with coach standards
3. **Network Intelligence** -- shared benchmarks, curriculum, coaching standards across organizations

One-liner: "MentorPRO is a CRM for mentoring pairs. STOKED OS is an operating system for mentoring organizations."

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with STOKED color tokens
- shadcn/ui (cards, tables, badges, tabs, dialogs, buttons, avatar, progress, separator)
- Recharts (area, bar, donut, line charts)
- Montserrat (headings) + Inter (body) via Google Fonts
- All data is hardcoded TypeScript mock data (no backend)
- Dev server runs on port 4100

## Design System

| Token | Hex | Usage |
|-------|-----|-------|
| Primary (teal) | #1AB394 | Actions, active nav, chart fills |
| Primary dark | #148F76 | Hover states |
| Primary light | #E8F8F4 | Card backgrounds |
| Sidebar | #0F172A | Dark sidebar |
| Text | #334155 | Body text |
| Background | #F1F5F9 | Page bg |
| Success | #22C55E | On target |
| Warning | #F59E0B | Approaching target |
| Alert | #EF4444 | Below target |

Cards: rounded-xl shadow-sm border bg-white p-6. Sidebar: 240px fixed dark.

## Screens Built

| Route | Screen | Purpose | Status |
|-------|--------|---------|--------|
| `/` | Executive Dashboard | Hero screen, first impression | Done |
| `/partners` | Partner List | Table of 12 partner schools | Done |
| `/partners/[id]` | Partner Detail | The "sell" screen for orgs | Done |
| `/youth/[id]` | Youth Journey | Emotional anchor (Marcus story) | Done |
| `/outcomes` | Outcomes Dashboard | Funder screen with report modal | Done |
| `/programs` | Programs List | 9 programs with filter chips | Done |
| `/coaches` | Coach Management | 9 coaches with certifications | Done |
| `/admin` | Multi-Org Platform | Licensing screen, network view | Done |
| `/login` | Login Page | Branded entry point | Done |

## Screen Details

### Executive Dashboard (`/`)
- 4 KPI cards: 283 Youth Enrolled (+12%), 9 Active Coaches, 12 Partner Schools, 80% Avg Attendance
- Attendance area chart (6 months, upward trend)
- Programs by Type donut (Risers/Launchpad/Pathways)
- Outcomes horizontal bars (Belonging 82%, Confidence 74%, Connection 78%, Try New Things 85%)
- Upcoming Sessions list, Recent Activity feed

### Partner Detail (`/partners/[id]`)
- School header with principal, contact info, "Active since" badge
- 4 KPIs: Youth, Attendance, Programs, Coaches
- Tabs: Overview, Programs, Youth, Outcomes
- 12-week attendance trend line chart
- Active program cards
- Pre/post outcomes grouped bar chart

### Youth Journey (`/youth/[id]`)
- Marcus Thompson profile (the demo story)
- Milestone badges: First Drop-In, 10 Sessions, Mentor Match, Leadership Nominated
- Pre/mid/post outcome scores (Belonging: 3.2 to 3.8 to 4.1)
- Vertical timeline with 10 events (Sept 2025 to Jan 2026)
- Sidebar: coach info, mentor match, emergency contact, programs list

### Outcomes Dashboard (`/outcomes`)
- 4 KPI cards with green/amber status vs targets
- Multi-line growth chart (4 outcomes across Pre/Mid/Post)
- By-partner grouped bar comparison (5 schools)
- Survey completion progress bars
- "Generate Funder Report" button opens modal with PDF-style preview
- Modal has Download PDF and Share Link buttons

### Programs List (`/programs`)
- Filter chips: All, Risers, Launchpad, Pathways
- Card grid with type badge, status, school, coach, dates, enrollment, session progress bar
- 9 programs total (3 per type, mix of completed/active/upcoming)

### Coach Management (`/coaches`)
- Summary cards: 9 total, 8 active, 1 training
- Table with avatar, certification badges, assigned partners, programs, tenure, status
- Certifications: Skate, Snow, Surf, Mentor 101, Mental Health First Aid

### Multi-Org Platform (`/admin`)
- STOKED NYC (live with full stats), Big Brothers Big Sisters (pending), Boys & Girls Club (pending)
- "+ Add Organization" card
- Network value prop banner at bottom

### Login (`/login`)
- Full-screen branded entry with STOKED logo on dark background
- Pre-filled email/password, "Sign In" links to dashboard
- "Demo mode" note

## Mock Data (`/lib/data/`)
- `partners.ts` -- 12 NYC Bronx partner schools, total enrollment = 283
- `coaches.ts` -- 9 coaches with certification arrays
- `programs.ts` -- 9 programs (Risers/Launchpad/Pathways, Fall'25 + Spring'26)
- `youth.ts` -- 5 detailed profiles (Marcus Rivera is the demo story) + aggregate stats
- `outcomes.ts` -- Pre/Mid/Post time series, partner comparisons, targets, survey completion
- `attendance.ts` -- 24 weeks aggregate (72% to 83% trend) + per-partner 12-week data
- `activity.ts` -- 10 recent feed entries from Jan 2026

## Demo Script (3-5 min)
1. Dashboard: "We built the infrastructure for mentorship. Here's STOKED OS."
2. KPIs: Point to 283 youth, 80% attendance, outcomes snapshot
3. Partner view: Click Bronx International. "This is what your org sees."
4. Youth journey: Click Marcus. "Belonging score went from 3.2 to 4.1 in 3 months."
5. Outcomes: "This is what your funder report looks like. Auto-generated."
6. The sell: "We're opening this to other organizations. $300-500/month. You join the network."
7. Share URL, collect contact info

## Deployment
- GitHub: https://github.com/stevelarosiliere/stoked-os-demo
- Local: `npm run dev` (port 4100)
- Vercel: Not yet connected. Import the GitHub repo at vercel.com to deploy.
- Suggested URL: stokedos.vercel.app or demo.stokedos.org

## Known Issues / Polish Needed
- Recharts SSR warning about chart width/height (cosmetic, renders fine in browser)
- Login page renders inside the main layout (sidebar visible). Could use a route group to isolate it.
- Youth page currently only shows Marcus (youth-1). Other youth IDs show the same data.
- Partner detail has rich data for partner-1 through partner-3, others use fallback data.
- No mobile responsive pass yet. Demo is optimized for laptop/desktop.
- Brand logo PNGs are from the vault. May want SVG versions for sharper rendering.

## File Structure
```
stoked-os-demo/
  app/
    layout.tsx              -- Sidebar + header wrapper
    page.tsx                -- Executive Dashboard
    globals.css             -- Design tokens, fonts
    partners/
      page.tsx              -- Partners list table
      [id]/page.tsx         -- Partner detail with tabs
    programs/page.tsx       -- Programs grid with filters
    coaches/page.tsx        -- Coach table
    youth/[id]/page.tsx     -- Youth journey profile
    outcomes/page.tsx       -- Outcomes dashboard + funder modal
    admin/page.tsx          -- Multi-org platform view
    login/
      layout.tsx            -- Standalone layout (no sidebar)
      page.tsx              -- Login screen
  components/
    layout/
      sidebar.tsx           -- Dark sidebar nav
      header.tsx            -- Top header with search
    dashboard/
      kpi-card.tsx          -- Reusable KPI card
      attendance-chart.tsx  -- Area chart
      programs-donut.tsx    -- Pie/donut chart
      outcomes-bars.tsx     -- Horizontal progress bars
      upcoming-sessions.tsx -- Session list
      activity-feed.tsx     -- Activity feed
    ui/                     -- shadcn/ui components
  lib/
    data/                   -- All mock data TypeScript files
    utils.ts                -- shadcn cn() utility
  public/
    stoked-logo.png         -- Full color wordmark
    stoked-logo-white.png   -- White wordmark
    stoked-icon.png         -- Icon mark
```

## Built With
Initial build: Jan 28, 2026. Built by Claude Opus 4.5 via Claude Code.
