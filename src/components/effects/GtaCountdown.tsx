"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Flame, Clock } from "lucide-react";

export const GtaCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    // Target set precisely for 00:00 on November 19, 2026
    const targetDate = new Date("2026-11-19T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          isLive: false,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true,
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 max-w-3xl mx-auto p-4 sm:p-6 rounded-2xl bg-vice-dark/85 backdrop-blur-xl border border-vice-pink/30 shadow-vice-sunset text-center relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-vice-pink/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-vice-cyan/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full bg-vice-pink/10 border border-vice-pink/30 text-xs font-display font-bold uppercase tracking-widest text-vice-pink">
          <Clock className="w-3.5 h-3.5" />
          <span>Contagem Regressiva • Estreia Hoje às 00:00</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-4">
          {timeLeft.isLive ? (
            <span className="text-red-500 animate-pulse flex items-center gap-2 justify-center">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
              AO VIVO AGORA! ACOMPANHE A TRANSMISSÃO!
            </span>
          ) : (
            <>
              A CONTAGEM PARA O <span className="text-vice-pink">LANÇAMENTO</span> COMEÇOU
            </>
          )}
        </h3>

        {/* Flip-style Timer Units */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-lg">
          <div className="p-3 sm:p-4 rounded-xl bg-vice-surface border border-white/10 shadow-inner">
            <span className="block font-mono text-2xl sm:text-4xl font-black text-white">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-display uppercase tracking-wider text-slate-400">
              Dias
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-vice-surface border border-white/10 shadow-inner">
            <span className="block font-mono text-2xl sm:text-4xl font-black text-vice-pink">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-display uppercase tracking-wider text-slate-400">
              Horas
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-vice-surface border border-white/10 shadow-inner">
            <span className="block font-mono text-2xl sm:text-4xl font-black text-purple-400">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-display uppercase tracking-wider text-slate-400">
              Minutos
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-vice-surface border border-white/10 shadow-inner">
            <span className="block font-mono text-2xl sm:text-4xl font-black text-vice-cyan animate-pulse">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-display uppercase tracking-wider text-slate-400">
              Segundos
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-pmw-clover animate-ping" />
          Transmissão especial programada para 19/11 às 00:00 (Meia-noite de hoje)
        </p>
      </div>
    </div>
  );
};
