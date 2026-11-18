"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Users, ChevronDown, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { ViceCityHelicopter } from "@/components/effects/ViceCityHelicopter";

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end pt-28 sm:pt-48 md:pt-80 pb-12 sm:pb-16 overflow-hidden bg-vice-dark"
    >
      {/* Background Wallpaper: Full-Visibility Official Jason & Lucia GTA VI Artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/hero-bg.jpg"
          alt="GTA VI Jason and Lucia Vice City"
          fill
          priority
          unoptimized
          className="object-cover object-[62%_12%] sm:object-[60%_top] md:object-top filter brightness-[0.88] md:brightness-[0.78] contrast-105"
        />
        {/* Soft Ambient Overlay for Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-vice-dark/60 via-transparent to-transparent" />
        {/* Top Vignette for Navbar legibility */}
        <div className="absolute top-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-b from-vice-dark/80 to-transparent" />
      </div>

      {/* Seamless Transition Gradient to the Next Section (Eliminates any harsh cut/line) */}
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-64 bg-gradient-to-t from-vice-dark via-vice-dark/85 to-transparent pointer-events-none z-10" />

      {/* Vice City Police Maverick Helicopter Flyby Animation */}
      <ViceCityHelicopter />

      {/* Atmospheric Neon Glows */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-vice-pink/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-vice-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Content positioned in the lower third to let the characters shine */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center w-full">
        {/* Main Headline - Vice City Sunset */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-white leading-none mb-4 sm:mb-5 drop-shadow-[0_12px_30px_rgba(0,0,0,0.95)]"
        >
          A CASA DO GTA VI.
          <br />
          <span className="bg-gradient-to-r from-vice-pink via-purple-300 to-vice-cyan bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(255,0,122,0.6)]">
            VIVA O JOGO AO VIVO.
          </span>
        </motion.h1>

        {/* Subtitle with dark backdrop for maximum legibility */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-xl text-slate-100 font-medium leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] px-2"
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <Button
            href={siteConfig.hero.ctaPrimary.href}
            variant="neon"
            size="lg"
            leftIcon={<Radio className="w-5 h-5 text-white animate-pulse" />}
            className="w-full sm:w-auto shadow-vice-pink border-vice-pink/60 hover:border-vice-pink bg-gradient-to-r from-vice-pink to-vice-purple text-base font-bold"
          >
            {siteConfig.hero.ctaPrimary.text}
          </Button>

          <Button
            href={siteConfig.hero.ctaSecondary.href}
            variant="glass"
            size="lg"
            leftIcon={<Users className="w-5 h-5 text-vice-cyan" />}
            className="w-full sm:w-auto bg-vice-dark/80 backdrop-blur-md border-vice-cyan/40 hover:border-vice-cyan shadow-vice-cyan/30 text-base font-bold"
          >
            {siteConfig.hero.ctaSecondary.text}
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <a
            href="#transmissoes"
            className="inline-flex flex-col items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
            aria-label="Rolar para as transmissões"
          >
            <span className="text-[11px] font-display uppercase tracking-widest text-slate-300 group-hover:text-vice-pink drop-shadow">
              Explorar Canais
            </span>
            <ChevronDown className="w-4 h-4 text-vice-pink animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
