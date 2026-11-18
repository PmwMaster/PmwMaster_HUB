"use client";

import React from "react";
import { ArrowUp, Radio, ShieldCheck, Terminal, Heart, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030407] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background Neon Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 bg-gradient-to-b from-vice-pink/10 via-vice-purple/5 to-transparent blur-3xl pointer-events-none" />

      {/* Massive Background Watermark */}
      <div className="absolute -bottom-6 left-0 right-0 overflow-hidden pointer-events-none select-none text-center opacity-[0.03]">
        <span className="text-[18vw] font-display font-black tracking-tighter text-white leading-none whitespace-nowrap">
          PMWMASTER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Dashboard (3 Distinct Architectural Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/[0.08]">
          
          {/* Block 1: Diretrizes da Comunidade & Chat */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-vice-pink mb-3">
                <Heart className="w-3.5 h-3.5" />
                <span>Diretrizes do Chat</span>
              </div>
              <h3 className="text-lg font-display font-black uppercase text-white mb-2">
                Resenha Sem Toxicidade
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                O chat é aberto para todos se divertirem, sugerirem rotas e decidirem escolhas na gameplay. Respeito mútuo é regra número um em todas as transmissões.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-vice-clover" />
              <span>Moderação Ativa 24/7</span>
            </div>
          </div>

          {/* Block 2: Telemetria & Live Ops */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-vice-cyan mb-3">
                <Radio className="w-3.5 h-3.5" />
                <span>Transmissão & Status</span>
              </div>
              <h3 className="text-lg font-display font-black uppercase text-white mb-2">
                Multi-Stream Feed
              </h3>
              <div className="space-y-2 text-xs font-mono text-slate-400">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-500">Qualidade:</span>
                  <span className="text-white font-bold">1080p 60 FPS HDR</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-500">Plataformas:</span>
                  <span className="text-white font-bold">TikTok • Kick • YouTube</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Ambiente:</span>
                  <span className="text-vice-pink font-bold">Leonida / Vice City</span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Status Operacional</span>
              <span className="text-vice-clover font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-vice-clover animate-pulse" />
                Feed Ativo
              </span>
            </div>
          </div>

          {/* Block 3: Ecossistema & Easter Eggs */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-vice-clover mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>Console & Interação</span>
              </div>
              <h3 className="text-lg font-display font-black uppercase text-white mb-2">
                Easter Eggs Ativos
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                O site possui cheats sonoros interativos inspirados no GTA clássico. Experimente digitar os códigos de teclado a qualquer momento:
              </p>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2 py-1 rounded bg-white/[0.06] border border-white/10 text-vice-cyan font-bold">
                  GTA
                </span>
                <span className="px-2 py-1 rounded bg-white/[0.06] border border-white/10 text-vice-pink font-bold">
                  VICE
                </span>
                <span className="px-2 py-1 rounded bg-white/[0.06] border border-white/10 text-vice-clover font-bold">
                  PMW
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.06]">
              <button
                onClick={scrollToTop}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-vice-pink/20 border border-white/10 hover:border-vice-pink/40 text-xs font-display font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                <span>Retornar ao Início</span>
                <ArrowUp className="w-3.5 h-3.5 text-vice-pink group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Lower Legal Compliance Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-slate-400">
              © {currentYear} <strong className="text-white">PmwMaster</strong>. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-slate-600 max-w-xl">
              Grand Theft Auto, GTA VI e Vice City são marcas registradas da Rockstar Games e Take-Two Interactive. Este projeto é um hub independente criado por e para a comunidade de fãs.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-500 shrink-0">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-vice-pink" />
              Verificado Oficial
            </span>
            <span>•</span>
            <span>v2.6 Vice City Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
