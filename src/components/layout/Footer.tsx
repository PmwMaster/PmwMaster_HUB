"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030407] border-t border-white/[0.08] py-8 sm:py-12 overflow-hidden">
      {/* Background Neon Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-vice-pink/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Row: Brand + Quick Channels + Back to top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-white/[0.06] text-center md:text-left">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-vice-pink/40 bg-black/60 shadow-neon-pink shrink-0">
              <Image
                src="/assets/profile/pmw-mascot.png"
                alt="PmwMaster"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl font-black uppercase tracking-wider text-white">
                PMW<span className="text-vice-pink">MASTER</span>
              </span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Vice City Hub • GTA VI
              </span>
            </div>
          </div>

          {/* Quick Verified Channel Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <a
              href="https://kick.com/pmw-master"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-vice-clover/50 text-slate-300 hover:text-white transition-all"
            >
              Kick
            </a>
            <a
              href="https://www.tiktok.com/@pmwmaster"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-vice-pink/50 text-slate-300 hover:text-white transition-all"
            >
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@PmwMaster"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-red-500/50 text-slate-300 hover:text-white transition-all"
            >
              YouTube
            </a>
            <a
              href="https://discord.gg/7tAB7BRzc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-indigo-400/50 text-slate-300 hover:text-white transition-all"
            >
              Discord
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-vice-pink/20 border border-white/10 hover:border-vice-pink/40 text-xs font-display font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all group"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-vice-pink group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Minimal Legal Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>© {currentYear} PmwMaster. Todos os direitos reservados.</p>
          <p className="text-[11px] text-slate-500 max-w-md">
            Hub de fã e comunidade gamer. GTA VI é marca registrada da Rockstar Games.
          </p>
        </div>

      </div>
    </footer>
  );
};
