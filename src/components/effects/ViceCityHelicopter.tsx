"use client";

import React from "react";
import { motion } from "framer-motion";

export const ViceCityHelicopter: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <motion.div
        initial={{ x: "115vw", y: "8vh" }}
        animate={{ x: "-20vw", y: "16vh" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute w-24 h-12 opacity-50 hover:opacity-90 transition-opacity"
      >
        {/* Helicopter Vector Silhouette */}
        <svg viewBox="0 0 100 45" className="w-full h-full fill-black filter drop-shadow-[0_0_8px_rgba(255,0,122,0.3)]">
          {/* Main Rotor */}
          <rect x="15" y="4" width="70" height="2" className="animate-pulse" />
          <rect x="48" y="6" width="4" height="6" />
          {/* Body */}
          <ellipse cx="45" cy="22" rx="25" ry="12" />
          {/* Tail */}
          <path d="M68 22 L92 20 L94 15 L90 22 L94 28 Z" />
          {/* Tail Rotor */}
          <circle cx="92" cy="18" r="4" className="animate-spin" />
          {/* Skids */}
          <path d="M30 36 L65 36 M38 32 L35 36 M58 32 L55 36" stroke="black" strokeWidth="2" />
        </svg>

        {/* Flashing Red Aviation Beacon Light */}
        <div className="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-red-500 animate-ping shadow-[0_0_8px_#ef4444]" />

        {/* Searchlight Beam angled down */}
        <div className="absolute top-6 left-6 w-32 h-64 bg-gradient-to-b from-cyan-400/20 via-cyan-400/5 to-transparent -rotate-45 blur-md origin-top-left pointer-events-none" />
      </motion.div>
    </div>
  );
};
