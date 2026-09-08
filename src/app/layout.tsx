import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GarageBy — Sovereign Spatial Computing",
  description:
    "Engineering air-gapped, zero-latency situational awareness powered by indigenous 8T-SRAM Digital Compute-in-Memory (DCIM) architecture.",
  keywords: [
    "spatial computing",
    "DCIM",
    "8T-SRAM",
    "compute-in-memory",
    "AR helmet",
    "deep tech",
    "hardware startup",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetBrainsMono.variable} h-full`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-white text-[#14161A] antialiased">
        {children}
      </body>
    </html>
  );
}
