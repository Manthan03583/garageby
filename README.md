# GarageBy — Sovereign Spatial Computing

> Engineering air-gapped, zero-latency situational awareness powered by indigenous **8T-SRAM Digital Compute-in-Memory (DCIM)** architecture.

**R&D Status:** Alpha · **Tapeout Target:** Q3 2025 · **Location:** Bhubaneswar, Odisha, India

---

## What is GarageBy?

GarageBy is building a sovereign spatial computing **helmet** for industrial and tactical deployments. The system is purpose-engineered around three core pillars:

| Pillar | Technology |
|---|---|
| **Silicon IP** | Indigenous 8T-SRAM DCIM chip · 180nm CMOS · In-Memory MAC · <12mW inference · <1ms latency |
| **Hardware** | SLS-printed Nylon PA12 chassis · Fanless passive chimney exhaust · IP67 · MIL-STD-810H |
| **Optics** | High-Index Holographic Waveguides · 110° Ultra-Wide FOV · 10,000 nits · 240Hz · 8–14µm LWIR IR band |

**Institutional Backing:**
- STPI Electropreneur Park — Pre-Incubated, MeitY, Govt. of India
- IIIT Bhubaneswar — Academic Research Partner
- Startup Odisha — State Recognition, Odisha Govt.

---

## This Repository

This repo contains the **public-facing product landing page** — a single-page investor and partner dossier site built with Next.js.

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Animation | Framer Motion 13 |
| Icons | Lucide React |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| Language | TypeScript 5 |
| Fonts | Plus Jakarta Sans · Inter · JetBrains Mono (via `next/font`) |

### Page Sections

| Section | Content |
|---|---|
| **Hero** | Helmet in ISO Class 5 cleanroom · Key specs · CTA |
| **Section 02 — Hardware** | Zero-fan thermal architecture · SLS PA12 chassis |
| **Section 03 — Core IP** | 8T-SRAM DCIM silicon · Von Neumann bottleneck explainer |
| **Section 04 — Optics** | 110° holographic waveguide visor · Spec table |
| **Section 05 — Deployment** | Industrial digital twins · Tactical & defense |
| **Backers** | STPI · IIIT Bhubaneswar · Startup Odisha |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Lint

```bash
npm run lint
```

### Production build

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
└── app/
    ├── layout.tsx        # Root layout — fonts, metadata
    ├── page.tsx          # Entire single-page application
    ├── globals.css       # Design tokens + utility animations
    └── favicon.ico

public/
    ├── Gemini_Generated_Image_zev1lpzev1lpzev1.png   # Hero + Thermal — helmet in ISO Class 5 lab
    ├── Gemini_Generated_Image_2vwoe02vwoe02vwo.png   # Core IP — 8T-SRAM silicon wafer macro
    └── Gemini_Generated_Image_xkho5zxkho5zxkho.png  # Optics — 110° holographic visor render
```

---

## Contact

**Founder alias:** [founder@garageby.com](mailto:founder@garageby.com?subject=GarageBy%20Alpha%20%7C%20Technical%20Dossier%20Request&body=Please%20provide%20your%20institutional%20affiliation%20to%20receive%20the%20DCIM%20architecture%20dossier.)

Include your institutional affiliation to receive the full DCIM architecture dossier.

---

© 2025 GarageBy Technologies Pvt. Ltd. · Bhubaneswar, Odisha, India
