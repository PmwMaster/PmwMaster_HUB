"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sparkles } from "lucide-react";

export const CheatCodeListener: React.FC = () => {
  const [cheatTriggered, setCheatTriggered] = useState<string | null>(null);
  const [typedBuffer, setTypedBuffer] = useState("");

  const playCheatAudio = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      osc.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.3); // E6
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch {
      // AudioContext not permitted or muted
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid triggering when user is in an input
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      const key = e.key.toLowerCase();
      const updated = (typedBuffer + key).slice(-10);
      setTypedBuffer(updated);

      if (updated.endsWith("gta") || updated.endsWith("vice")) {
        playCheatAudio();
        setCheatTriggered("CHEAT ATIVADO: MODO VICE CITY LIBERADO!");
        setTimeout(() => setCheatTriggered(null), 4500);
        setTypedBuffer("");
      } else if (updated.endsWith("pmw")) {
        playCheatAudio();
        setCheatTriggered("CHEAT ATIVADO: RESPEITO +9999 DA COMUNIDADE!");
        setTimeout(() => setCheatTriggered(null), 4500);
        setTypedBuffer("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [typedBuffer]);

  return (
    <AnimatePresence>
      {cheatTriggered && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="px-6 py-3.5 rounded-2xl bg-vice-dark/95 border-2 border-vice-pink backdrop-blur-2xl shadow-[0_0_40px_rgba(255,0,122,0.6)] flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-vice-pink flex items-center justify-center text-black font-black">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-vice-pink font-display font-black text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>{cheatTriggered}</span>
              </div>
              <p className="text-xs text-slate-300 font-mono">
                Easter Egg Secreto Desbloqueado • Bem-vindo ao Universo PmwMaster
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
