"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Users, ExternalLink } from "lucide-react";

export const Community: React.FC = () => {
  return (
    <section id="comunidade" className="py-20 md:py-28 bg-vice-dark relative overflow-hidden">
      {/* Background neon atmospheric glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Discord Master Feature Card */}
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-vice-surface/90 border border-indigo-500/30 shadow-2xl">
          {/* Background Retrofuturistic Community Banner */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/community/community-neon.png"
              alt="Comunidade Neon PmwMaster"
              fill
              className="object-cover object-center filter brightness-[0.22] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vice-dark via-vice-dark/85 to-vice-dark/70" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            {/* 3D Discord Logo */}
            <div className="relative w-16 h-16 rounded-2xl bg-black/60 border border-indigo-400/30 flex items-center justify-center shadow-2xl mb-6 overflow-hidden">
              <Image
                src="/assets/platforms/discord-logo.png"
                alt="Discord Logo"
                fill
                className="object-contain p-2.5 drop-shadow-xl"
              />
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight mb-4">
              MONTE SEU ESQUADRÃO <span className="text-vice-pink">GTA VI</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Entre no servidor oficial para conversar, participar das chamadas de voz e jogar junto com a comunidade durante as transmissões.
            </p>

            <Button
              href="https://discord.gg/7tAB7BRzc"
              isExternal
              variant="clover"
              size="lg"
              leftIcon={<Users className="w-5 h-5 text-black" />}
              rightIcon={<ExternalLink className="w-4 h-4 text-black" />}
              className="text-base font-extrabold px-8 py-4 shadow-neon-clover"
            >
              ENTRAR NO DISCORD OFICIAL
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
