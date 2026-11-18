"use client";

import React, { useState, useEffect } from "react";
import { Star, ShieldAlert, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const WantedLevel: React.FC = () => {
  const [stars, setStars] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const triggerPoliceBust = (level: number) => {
    setStars(level);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  const handleClickStar = (index: number) => {
    const nextLevel = stars === index + 1 ? 0 : index + 1;
    triggerPoliceBust(nextLevel);
  };

  return (
    <>
      {/* Red & Blue Police Flashing Lights at Edge of Screen when 3+ stars */}
      <AnimatePresence>
        {stars >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-40"
          >
            <div className="absolute inset-0 border-8 sm:border-[16px] border-red-600/40 animate-pulse pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-600/30 to-transparent animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-red-600/30 to-transparent animate-pulse pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Helicopter Searchlight at 4+ stars */}
      <AnimatePresence>
        {stars >= 4 && (
          <motion.div
            initial={{ x: "-100%", y: "20%" }}
            animate={{ x: "120%", y: "60%" }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="fixed pointer-events-none z-30 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,_transparent_70%)] blur-2xl"
          />
        )}
      </AnimatePresence>

      {/* GTA 5-Star Wanted HUD Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 select-none">
        
        {/* GTA Notification Banner */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="p-3 rounded-xl bg-vice-dark/95 border border-vice-pink/50 backdrop-blur-xl shadow-vice-pink flex items-center gap-3 text-left max-w-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/50 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4 text-red-500 animate-bounce" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] font-mono text-vice-pink uppercase font-bold tracking-wider">
                  {stars === 0 ? "NÍVEL ZERADO" : `PROCURADO: NÍVEL ${stars}`}
                </span>
                <span className="block text-xs font-display font-bold text-white truncate">
                  {stars === 5
                    ? "EXÉRCITO CONVOCADO! CORRE PRA LIVE!"
                    : stars >= 3
                    ? "VIATURAS EM PERSEGUIÇÃO EM VICE CITY"
                    : stars >= 1
                    ? "SUSPEITO LOCALIZADO PELO CHAT"
                    : "ÁREA SEGURA"}
                </span>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Fechar aviso"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 5-Star Button Bar */}
        <div className="group relative flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-vice-dark/90 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-vice-pink/40 transition-all">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mr-1.5 hidden sm:inline">
            PROCURADO
          </span>
          {[0, 1, 2, 3, 4].map((index) => {
            const isLit = index < stars;
            return (
              <button
                key={index}
                onClick={() => handleClickStar(index)}
                className="focus:outline-none p-1 transition-transform hover:scale-125"
                title={`Nível de Procurado: ${index + 1} estrelas`}
                aria-label={`Estrela ${index + 1}`}
              >
                <Star
                  className={`w-4 h-4 transition-all duration-300 ${
                    isLit
                      ? "text-red-500 fill-red-500 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.9)] animate-pulse"
                      : "text-slate-600 hover:text-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
