<div align="center">

# GarageBy

### Sovereign Spatial Computing

*Engineering air-gapped, zero-latency situational awareness*
*powered by indigenous 8T-SRAM Digital Compute-in-Memory (DCIM) architecture.*

![R&D Status](https://img.shields.io/badge/R%26D%20Status-Alpha-0052FF?style=flat-square&labelColor=14161A)
![Tapeout](https://img.shields.io/badge/Tapeout-Q3%202025-0052FF?style=flat-square&labelColor=14161A)
![Location](https://img.shields.io/badge/Bhubaneswar%2C%20Odisha-India-0052FF?style=flat-square&labelColor=14161A)

</div>

---

## The Product

GarageBy is developing a **sovereign spatial computing helmet** — built for high-stakes industrial and tactical environments where data security, edge compute, and reliability are non-negotiable.

The helmet runs entirely on indigenous silicon. No cloud. No RF emissions. No latency.

### Three Core Systems

#### 🔵 Core Silicon IP — 8T-SRAM DCIM
An indigenous **Digital Compute-in-Memory** architecture that eliminates the Von Neumann bottleneck by performing matrix math *inside* the memory array.

| Specification | Value |
|---|---|
| Process Node | 180nm CMOS |
| Array Density | 256kb × 8b |
| Inference Power | < 12mW |
| Latency | < 1ms |
| Architecture | Sparsity-Aware MAC · CSA Trees · LZD |

#### ⚙️ Hardware — Zero-Fan Thermal Architecture
A ruggedized chassis engineered around the milliwatt power envelope of the DCIM chip — no moving parts, no fans, no noise.

| Specification | Value |
|---|---|
| Chassis Material | SLS Nylon PA12 |
| Vibration Rating | MIL-STD-810H |
| Ingress Protection | IP67 (dust-tight, 1m immersion) |
| Thermal Output | < 0.8W sustained |
| Acoustic Output | 0 dB (fully fanless) |

#### 👁 Optics — High-Index Holographic Waveguides
Four independent optical layers fused into a single curved combiner stack — projecting thermal imaging and digital twins across the full width of human peripheral vision.

| Specification | Value |
|---|---|
| FOV (Diagonal) | 110° Ultra-Wide |
| Display Luminance | 10,000 nits |
| Optical Stack Thickness | < 1.2mm |
| IR Band | 8–14µm LWIR |
| Refresh Rate | 240Hz |
| Eye Relief | 18mm |

---

## Deployment Scenarios

**Industrial Digital Twins** — Overlay live thermal telemetry and structural diagnostics onto physical factory equipment. On-device NPU. Air-gapped OPC-UA. < 2ms update rate.

**Sovereign Tactical Telemetry** — Zero RF emissions. Zero data egress. Threat detection and spatial mapping run entirely on the visor NPU. Absolute data sovereignty.

---

## Institutional Backing

| Institution | Recognition |
|---|---|
| STPI Electropreneur Park | Pre-Incubated — MeitY, Govt. of India |
| IIIT Bhubaneswar | Academic Research Partner |
| Startup Odisha | State Recognition — Odisha Govt. |

---

## This Repository

This repo contains the **public-facing product landing page** — a single-page investor and partner dossier built with Next.js 16.

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Animation | Framer Motion 13 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript 5 |
| Fonts | Plus Jakarta Sans · Inter · JetBrains Mono |

### Project Structure

```
src/app/
├── layout.tsx                        # Root layout — fonts, SEO metadata
├── page.tsx                          # Full single-page application
├── globals.css                       # Design tokens + animations
└── favicon.ico

public/
├── gby-helmet-proto-rev-a.png        # Helmet in ISO Class 5 cleanroom (Hero + Thermal)
├── gby-dcim-silicon-wafer.png        # 8T-SRAM wafer macro (Core IP section)
└── gby-holographic-visor-110fov.png  # 110° holographic visor render (Optics section)
```

### Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Contact

To request the full **DCIM Architecture Dossier**, reach the founding team at:

**[founder@garageby.com](mailto:founder@garageby.com?subject=GarageBy%20Alpha%20%7C%20Technical%20Dossier%20Request&body=Please%20provide%20your%20institutional%20affiliation%20to%20receive%20the%20DCIM%20architecture%20dossier.)**

*Please include your institutional affiliation.*

---

<div align="center">

© 2025 GarageBy Technologies Pvt. Ltd. · Bhubaneswar, Odisha, India

*Building sovereign hardware for the missions that matter.*

</div>
