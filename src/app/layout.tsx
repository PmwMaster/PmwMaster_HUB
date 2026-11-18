import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WantedLevel } from "@/components/effects/WantedLevel";
import { CheatCodeListener } from "@/components/effects/CheatCodeListener";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "PmwMaster",
    "GTA VI",
    "Lives",
    "Gamer",
    "Gameplay",
    "TikTok Live",
    "Kick Streamer",
    "Discord Comunidade",
  ],
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@pmwmaster",
  },
  icons: {
    icon: "/assets/brand/clover.svg",
    shortcut: "/assets/brand/clover.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="min-h-screen bg-pmw-dark text-pmw-text antialiased flex flex-col selection:bg-pmw-purple selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WantedLevel />
        <CheatCodeListener />
      </body>
    </html>
  );
}
