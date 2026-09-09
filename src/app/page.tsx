"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, type Variants, type Transition } from "framer-motion";
import { ArrowRight, ChevronRight, Layers, Zap, Shield, Thermometer, Factory, Radio } from "lucide-react";
import { GarageByLogo } from "@/components/Logo";

// ── Animation Variants ──────────────────────────────────────────────────────
const easeOut: Transition = { duration: 1.1, ease: "easeOut" };
const springUp: Transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springUp },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: easeOut },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function useScrollInView(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

// ── NavBar ──────────────────────────────────────────────────────────────────
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <GarageByLogo className="h-8 md:h-9 w-auto" />
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1.5 bg-gray-50" style={{ fontFamily: "var(--font-jetbrains)" }}>
          <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot inline-block" />
          <span className="text-xs font-medium text-gray-600 tracking-widest uppercase">R&D STATUS: ALPHA</span>
        </div>
      </div>
    </nav>
  );
}

// ── Email / Dossier Link ───────────────────────────────────────────────────
const MAILTO_LINK = "mailto:founder@garageby.com?subject=GarageBy%20Alpha%20%7C%20Technical%20Dossier%20Request&body=Please%20provide%20your%20institutional%20affiliation%20to%20receive%20the%20DCIM%20architecture%20dossier.";

// Module-level ref so HeroSection (a sibling component) can trigger the toast
let _setToast: ((msg: string | null) => void) | null = null;

function handleDossierClick() {
  navigator.clipboard.writeText("founder@garageby.com").then(() => {
    _setToast?.("founder@garageby.com copied to clipboard · Opening email client");
    setTimeout(() => _setToast?.(null), 4000);
  }).catch(() => {
    _setToast?.("founder@garageby.com copied to clipboard");
    setTimeout(() => _setToast?.(null), 4000);
  });
}

// ── Hero ────────────────────────────────────────────────────────────────────
function HeroSection() {
  const { ref, inView } = useScrollInView(0.05);
  return (
    <section ref={ref} className="blueprint-grid min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-gray-200 opacity-60" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-gray-200 opacity-60" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-gray-200 opacity-60" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-gray-200 opacity-60" />
      <div className="absolute top-24 left-6 text-[10px] text-gray-300 tracking-widest" style={{ fontFamily: "var(--font-jetbrains)" }}>GBY-ARCH-001 // REV.A</div>
      <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.div variants={fadeIn}>
          <span className="inline-flex items-center gap-2 text-xs tracking-widest border border-[#0052FF]/30 rounded-sm px-3 py-1.5 text-[#0052FF] bg-[#0052FF]/5" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] inline-block" />
            8T-SRAM DCIM // ARCHITECTURE · 2026
          </span>
        </motion.div>
        <motion.div variants={fadeIn} className="w-full max-w-2xl aspect-video rounded-sm relative overflow-hidden border border-[#0052FF]/20 shadow-lg">
          <Image
            src="/gby-helmet-proto-rev-a.png"
            alt="GarageBy Sovereign Spatial Helmet — ISO Class 5 Cleanroom, Prototype REV.A"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle blueprint overlay */}
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,82,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          {/* Bottom vignette for label legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/30" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/30" />
          <div className="absolute bottom-8 left-3 w-4 h-4 border-b border-l border-white/30" />
          <div className="absolute bottom-8 right-3 w-4 h-4 border-b border-r border-white/30" />
          {/* Top annotation */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span className="text-[9px] text-white/50 tracking-widest uppercase">ISO CLASS 5 CLEANROOM // GBY-PROTO-001</span>
          </div>
          {/* Bottom labels */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <span className="text-[9px] text-white/60 tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>SOVEREIGN SPATIAL HELMET // REV.A</span>
            <span className="text-[9px] text-white/50 tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>340 × 220 × 180mm</span>
          </div>
        </motion.div>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#14161A] tracking-tight leading-[0.95]" style={{ fontFamily: "var(--font-jakarta)" }}>
          Sovereign Spatial<br /><span style={{ color: "#0052FF" }}>Computing.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="max-w-2xl text-base md:text-lg text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter-var)" }}>
          An air-gapped, spatial computing{" "}<strong className="text-[#14161A] font-semibold">helmet</strong>{" "}engineered for deterministic situational awareness. Powered by indigenous{" "}<strong className="text-[#14161A] font-semibold">8T-SRAM Digital Compute-in-Memory (DCIM) architecture.</strong>
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={MAILTO_LINK}
            onClick={handleDossierClick}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-sm text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer inline-flex"
            style={{ backgroundColor: "#0052FF", fontFamily: "var(--font-inter-var)" }}
          >
            Request Technical Dossier<ArrowRight size={16} strokeWidth={2} />
          </a>
          <a
            href="#architecture"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0052FF] transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter-var)" }}
          >
            View Architecture Paper<ChevronRight size={14} />
          </a>
        </motion.div>
        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-4 border-t border-gray-100 w-full">
          {[
            { label: "Process Node", value: "180nm CMOS" },
            { label: "Array Density", value: "256kb x 8b" },
            { label: "Inference Power", value: "< 12mW" },
            { label: "Latency", value: "< 1ms" },
          ].map((spec) => (
            <div key={spec.label} className="flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400 tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)" }}>{spec.label}</span>
              <span className="text-sm font-bold text-[#14161A]" style={{ fontFamily: "var(--font-jetbrains)" }}>{spec.value}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── Section 2: Hardware Integration & Thermal Dynamics ─────────────────────

function ThermalSection() {
  const { ref, inView } = useScrollInView();
  return (
    <section ref={ref} className="py-24 px-6 border-t border-gray-100 blueprint-grid">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px" style={{ backgroundColor: "#0052FF" }} />
          <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)", color: "#0052FF" }}>Hardware Integration // Section 02</span>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col gap-6">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-[#14161A] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
              Zero-Fan Thermal<br />Architecture.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter-var)" }}>
              Because our DCIM silicon operates on{" "}<strong className="text-[#14161A] font-semibold">milliwatts</strong>, we eliminated the moving parts entirely. The helmet features a ruggedized{" "}<strong className="text-[#14161A] font-semibold">SLS-printed Nylon PA12 chassis</strong>{" "}with a passive chimney exhaust system. Silent, durable, and highly resilient in hostile environments.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2">
              {[
                { icon: Thermometer, label: "Thermal Output", value: "< 0.8W sustained", note: "No active cooling required" },
                { icon: Layers, label: "Chassis Material", value: "SLS Nylon PA12", note: "MIL-STD-810H vibration rated" },
                { icon: Shield, label: "Ingress Protection", value: "IP67 sealed", note: "Dust-tight, 1m immersion" },
                { icon: Zap, label: "Acoustic Output", value: "0 dB", note: "Fully fanless architecture" },
              ].map(({ icon: Icon, label, value, note }) => (
                <div key={label} className="flex items-center gap-4 border border-gray-100 rounded-sm px-4 py-3 bg-white/60">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0,82,255,0.06)" }}>
                    <Icon size={14} style={{ color: "#0052FF" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[10px] text-gray-400 tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)" }}>{label}</span>
                      <span className="text-xs font-bold text-[#14161A]" style={{ fontFamily: "var(--font-jetbrains)" }}>{value}</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-inter-var)" }}>{note}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} className="border rounded-sm p-4" style={{ borderColor: "rgba(0,82,255,0.2)", backgroundColor: "rgba(0,82,255,0.02)" }}>
              <p className="text-[11px] tracking-wider leading-relaxed" style={{ fontFamily: "var(--font-jetbrains)", color: "rgba(0,82,255,0.8)" }}>
                // THERMAL NOTE<br />Passive convection via top-mounted chimney vents.<br />Delta-T: 18 degC above ambient at max sustained load.
              </p>
            </motion.div>
          </motion.div>
          {/* Diagram */}
          <motion.div variants={fadeIn} initial="hidden" animate={inView ? "visible" : "hidden"} className="border border-gray-200 rounded-sm min-h-[480px] relative overflow-hidden shadow-sm">
            <Image
              src="/gby-helmet-proto-rev-a.png"
              alt="GarageBy Sovereign Spatial Helmet — SLS PA12 Chassis, Passive Chimney Exhaust"
              fill
              className="object-cover object-center"
            />
            {/* Blueprint grid overlay */}
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,82,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            {/* Bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/25" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/25" />
            {/* Top label */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2">
              <span className="text-[9px] text-white/50 tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)" }}>FIG. 3 — PASSIVE CHIMNEY EXHAUST // GBY-THERM-003</span>
            </div>
            {/* Bottom legend */}
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: "SLS PA12", color: "#9CA3AF" },
                  { label: "Passive Chimney", color: "#0052FF" },
                  { label: "Diffractive Visor", color: "#93C5FD" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-[9px] text-white/60 tracking-widest" style={{ fontFamily: "var(--font-jetbrains)" }}>{label.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Silicon (Core IP) ───────────────────────────────────────────────────────

function SiliconSection() {
  const { ref, inView } = useScrollInView();
  return (
    <section id="architecture" ref={ref} className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px" style={{ backgroundColor: "#0052FF" }} />
          <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)", color: "#0052FF" }}>Core IP // Section 03</span>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col gap-6">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-[#14161A] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
              The Von Neumann<br />Bottleneck is{" "}<span className="relative inline-block">Dead.<span className="absolute -bottom-1 left-0 w-full h-0.5" style={{ backgroundColor: "#0052FF" }} /></span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter-var)" }}>
              Traditional AR fails at the edge. Every watt burned shuttling data between CPU and RAM is a watt stolen from the mission. We engineered a{" "}<strong className="text-[#14161A] font-semibold">Sparsity-Aware 8T-SRAM architecture</strong>{" "}that performs matrix math{" "}<strong className="text-[#14161A] font-semibold">directly inside the memory array.</strong>{" "}Designed for milliwatt-power AI inference at the sensor level.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2">
              {[
                { icon: Zap, text: "In-memory MAC operations eliminate the memory wall" },
                { icon: Shield, text: "Air-gapped, zero cloud dependency" },
                { icon: Layers, text: "Sparsity-aware skip logic reduces active cycles" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(0,82,255,0.08)" }}><Icon size={11} style={{ color: "#0052FF" }} /></div>
                  <span className="text-sm text-gray-600" style={{ fontFamily: "var(--font-inter-var)" }}>{text}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} className="border rounded-sm p-4" style={{ borderColor: "rgba(0,82,255,0.2)", backgroundColor: "rgba(0,82,255,0.02)" }}>
              <p className="text-[11px] tracking-wider leading-relaxed" style={{ fontFamily: "var(--font-jetbrains)", color: "rgba(0,82,255,0.8)" }}>
                // ARCHITECTURE NOTE<br />Multiply-Accumulate (MAC) ops executed inside bitline<br />periphery. SRAM read = compute. No off-chip data movement.
              </p>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" animate={inView ? "visible" : "hidden"} className="border border-[#0052FF]/25 rounded-sm min-h-[480px] relative overflow-hidden shadow-sm">
            <Image
              src="/gby-dcim-silicon-wafer.png"
              alt="8T-SRAM DCIM Array — GarageBy Core Silicon IP"
              fill
              className="object-cover"
            />
            {/* Cobalt-tinted overlay to tie into brand */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF]/15 via-transparent to-black/40" />
            {/* Scan-line texture */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(0,82,255,0.12) 1px, transparent 1px)", backgroundSize: "100% 4px" }} />
            {/* Top annotation */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="text-[9px] text-[#0052FF]/90 tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)" }}>FIG. 1 — 8T-SRAM DCIM ARRAY // GBY-SI-001</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF]/80 pulse-dot" />
            </div>
            {/* Bottom callout */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="border border-[#0052FF]/40 rounded-sm px-3 py-2.5 backdrop-blur-sm" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
                <p className="text-[10px] text-[#0052FF] tracking-wider font-bold" style={{ fontFamily: "var(--font-jetbrains)" }}>8T-SRAM ARRAY // 256kb × 8b</p>
                <p className="text-[9px] text-white/60 tracking-wider mt-0.5" style={{ fontFamily: "var(--font-jetbrains)" }}>In-Memory MAC · 180nm CMOS · &lt;12mW Inference</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Optics ──────────────────────────────────────────────────────────────────

function OpticsSection() {
  const { ref, inView } = useScrollInView();
  return (
    <section ref={ref} className="py-24 px-6 border-t border-gray-100" style={{ backgroundColor: "rgba(249,250,251,0.5)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px" style={{ backgroundColor: "#0052FF" }} />
          <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)", color: "#0052FF" }}>Optics // Section 04</span>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeIn} initial="hidden" animate={inView ? "visible" : "hidden"} className="border border-gray-200 rounded-sm min-h-[420px] relative overflow-hidden shadow-sm" style={{ backgroundColor: "#F1F2F4" }}>
            <Image
              src="/gby-holographic-visor-110fov.png"
              alt="110-Degree Ultra-Wide Holographic Visor — GarageBy Optics, Alpha Stage"
              fill
              className="object-contain p-4"
            />
            {/* Annotation overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="text-[9px] text-gray-500 tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)" }}>FIG. 2 — 110° ULTRA-WIDE HOLOGRAPHIC VISOR // GBY-OPT-002</span>
            </div>
            {/* Bottom light-path legend matching image annotations */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex gap-4 flex-wrap">
                {[
                  { label: "Digital Twin Overlay", color: "#3B82F6" },
                  { label: "Thermal Imaging Path", color: "#F97316" },
                  { label: "Visible Light AR", color: "#D1D5DB" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-2 h-0.5 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-[9px] text-gray-500 tracking-widest" style={{ fontFamily: "var(--font-jetbrains)" }}>{label.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col gap-6">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-[#14161A] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>Deterministic<br />Telemetry.</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter-var)" }}>
              Destroy the tunnel vision of legacy AR. Our{" "}<strong className="text-[#14161A] font-semibold">High-Index Holographic Waveguides</strong>{" "}project thermal imaging and industrial digital twins across an immersive{" "}<strong className="text-[#14161A] font-semibold">110° Field of View.</strong>{" "}Four independent optical layers combine visible, infrared, digital twin, and eye-coupling into a single, curved combiner stack that maps perfectly to human peripheral vision.
            </motion.p>
            <motion.div variants={fadeIn} className="border border-gray-200 rounded-sm overflow-hidden">
              <table className="w-full text-xs" style={{ fontFamily: "var(--font-jetbrains)" }}>
                <thead><tr className="border-b border-gray-100 bg-gray-50"><th className="text-left px-4 py-2.5 text-gray-400 font-medium tracking-widest">PARAMETER</th><th className="text-right px-4 py-2.5 text-gray-400 font-medium tracking-widest">VALUE</th></tr></thead>
                <tbody>
                  {[
                    { param: "Optical Stack Thickness", value: "< 1.2mm" },
                    { param: "FOV (Diagonal)", value: "110 deg (Ultra-Wide)" },
                    { param: "Display Luminance", value: "10,000 nits" },
                    { param: "IR Band", value: "8-14 um LWIR" },
                    { param: "Refresh Rate", value: "240 Hz" },
                    { param: "Eye Relief", value: "18mm" },
                  ].map((row, i) => (
                    <tr key={row.param} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : ""}`} style={i % 2 !== 0 ? { backgroundColor: "rgba(249,250,251,0.5)" } : {}}>
                      <td className="px-4 py-2.5 text-gray-500">{row.param}</td>
                      <td className="px-4 py-2.5 text-right font-bold text-[#14161A]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Section 5: Deployment Scenarios ────────────────────────────────────────
function DeploymentSection() {
  const { ref, inView } = useScrollInView();
  const scenarios = [
    {
      index: "01",
      icon: Factory,
      tag: "Industrial",
      headline: "Industrial Digital Twins.",
      body: "Overlaying live thermal telemetry and structural diagnostics onto physical factory equipment. Processing happens on the edge, eliminating cloud-rendering latency during critical maintenance operations.",
      specs: [
        { label: "Update Rate", value: "Real-time / < 2ms" },
        { label: "Processing", value: "On-device NPU" },
        { label: "Connectivity", value: "Air-gapped OPC-UA" },
      ],
      highlight: false,
    },
    {
      index: "02",
      icon: Radio,
      tag: "Tactical & Defense",
      headline: "Sovereign Tactical Telemetry.",
      body: "Absolute data security. Threat-detection and spatial mapping algorithms execute entirely on the visor NPU, ensuring zero radio-frequency (RF) emissions or external dependencies.",
      specs: [
        { label: "RF Emissions", value: "Zero" },
        { label: "Data Egress", value: "None — fully local" },
        { label: "Threat Detection", value: "On-visor inference" },
      ],
      highlight: true,
    },
  ];
  return (
    <section ref={ref} className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ backgroundColor: "#0052FF" }} />
          <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)", color: "#0052FF" }}>Deployment Scenarios // Section 05</span>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-14">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-[#14161A] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>Built for the Field.</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-gray-500 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter-var)" }}>
            The sovereign helmet is purpose-engineered for two high-stakes environments where data sovereignty, edge compute, and reliability are non-negotiable.
          </motion.p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scenarios.map(({ index, icon: Icon, tag, headline, body, specs, highlight }) => (
            <motion.div key={index} variants={fadeUp} className="flex flex-col border rounded-sm p-8 gap-6 relative overflow-hidden" style={{ borderColor: highlight ? "#0052FF" : "#E5E7EB", backgroundColor: highlight ? "rgba(0,82,255,0.02)" : "#FFFFFF" }}>
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(0,82,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ backgroundColor: highlight ? "rgba(0,82,255,0.1)" : "rgba(0,0,0,0.04)" }}>
                      <Icon size={16} style={{ color: highlight ? "#0052FF" : "#6B7280" }} />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase border px-2 py-0.5 rounded-sm" style={{ fontFamily: "var(--font-jetbrains)", color: highlight ? "#0052FF" : "#9CA3AF", borderColor: highlight ? "rgba(0,82,255,0.3)" : "#E5E7EB", backgroundColor: highlight ? "rgba(0,82,255,0.05)" : "transparent" }}>{tag}</span>
                  </div>
                  <span className="text-4xl font-extrabold" style={{ fontFamily: "var(--font-jetbrains)", color: highlight ? "rgba(0,82,255,0.12)" : "rgba(0,0,0,0.06)" }}>{index}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#14161A] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>{headline}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter-var)" }}>{body}</p>
                <div className="border rounded-sm overflow-hidden" style={{ borderColor: highlight ? "rgba(0,82,255,0.15)" : "#F3F4F6" }}>
                  {specs.map((s, i) => (
                    <div key={s.label} className="flex items-center justify-between px-4 py-2" style={{ borderBottom: i < specs.length - 1 ? "1px solid" : "none", borderColor: highlight ? "rgba(0,82,255,0.08)" : "#F3F4F6", backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.7)" : "rgba(249,250,251,0.5)" }}>
                      <span className="text-[10px] text-gray-400 tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains)" }}>{s.label}</span>
                      <span className="text-xs font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: highlight ? "#0052FF" : "#14161A" }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Backers ─────────────────────────────────────────────────────────────────
function BackersSection() {
  const { ref, inView } = useScrollInView();
  const backers = [
    { label: "STPI Electropreneur Park", sub: "Pre-Incubated -- MeitY, Govt. of India" },
    { label: "IIIT Bhubaneswar", sub: "Academic Research Partner" },
    { label: "Startup Odisha", sub: "State Recognition -- Odisha Govt." },
  ];
  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col items-center gap-10">
          <motion.p variants={fadeIn} className="text-[10px] text-gray-400 tracking-widest uppercase text-center" style={{ fontFamily: "var(--font-jetbrains)" }}>Institutional Backing and Recognition</motion.p>
          <motion.div variants={stagger} className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full">
            {backers.map((backer, i) => (
              <motion.div key={backer.label} variants={fadeUp} className={`flex flex-col items-center gap-1.5 px-10 py-6 text-center ${i < backers.length - 1 ? "sm:border-r border-b sm:border-b-0 border-gray-100" : ""}`}>
                <span className="text-sm font-semibold text-[#14161A]" style={{ fontFamily: "var(--font-jakarta)" }}>{backer.label}</span>
                <span className="text-[10px] text-gray-400 tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>{backer.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <GarageByLogo className="h-7 sm:h-8 w-auto" />
        </div>
        <p className="text-[10px] text-gray-400 text-center tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>
          {`\u00A9 ${new Date().getFullYear()} GarageBy Technologies Pvt. Ltd. -- All rights reserved.`}
        </p>
        <span className="text-[10px] text-gray-400 tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>Bhubaneswar, Odisha</span>
      </div>
    </footer>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  _setToast = setToastMsg; // wire module ref to component state
  return (
    <>
      {/* Toast notification — shown when mailto opens or email is copied */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-lg" style={{ backgroundColor: "#14161A", border: "1px solid rgba(0,82,255,0.4)" }}>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0052FF" }} />
          <span className="text-white text-xs tracking-widest" style={{ fontFamily: "var(--font-jetbrains)" }}>{toastMsg}</span>
        </div>
      )}
      <main className="flex flex-col">
        <NavBar />
        <HeroSection />
        <ThermalSection />
        <SiliconSection />
        <OpticsSection />
        <DeploymentSection />
        <BackersSection />
        <Footer />
      </main>
    </>
  );
}
