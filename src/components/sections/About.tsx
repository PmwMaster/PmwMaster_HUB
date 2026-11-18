"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Gamepad2, Users, Radio, ExternalLink } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-vice-surface/40 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-vice-pink/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white">
            O HUB DO <span className="text-vice-pink">GTA VI</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Acompanhe o lançamento ao vivo, jogue em esquadrão no Discord e participe das decisões da gameplay.
          </p>
        </div>

        {/* Balanced 2-Column Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left: Banner Visual (Compact & Balanced Proportion) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden bg-vice-dark border border-white/10 shadow-2xl shadow-vice-pink/10 group-hover:border-vice-pink/40 transition-all duration-500">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/brand/pmwmaster-banner-official.jpg"
                  alt="PmwMaster Setup Gamer GTA VI Vice City"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Subtle bottom gradient shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-vice-dark/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom tag strip */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-black/80 backdrop-blur border border-white/10 text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-vice-clover animate-pulse" />
                  PmwMaster Oficial
                </span>
                <span className="text-[11px] font-display uppercase tracking-wider text-slate-300 bg-black/80 backdrop-blur px-2.5 py-1 rounded-md border border-white/10">
                  Vice City Hub
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Hub Highlights & Direct Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-3.5"
          >
            {/* Feature 1 */}
            <div className="p-4 rounded-xl bg-vice-surface/80 border border-white/[0.08] hover:border-vice-pink/40 transition-all flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-vice-pink/10 border border-vice-pink/30 text-vice-pink shrink-0">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-display font-bold uppercase text-white">
                  Decisões com o Chat
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Votações para o público escolher veículos, rotas e desafios na campanha.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-4 rounded-xl bg-vice-surface/80 border border-white/[0.08] hover:border-indigo-500/40 transition-all flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-display font-bold uppercase text-white">
                  Esquadrão em Call
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Salas de voz abertas no Discord para jogar missões e trocar teorias.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-4 rounded-xl bg-vice-surface/80 border border-white/[0.08] hover:border-vice-clover/40 transition-all flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-vice-clover/10 border border-vice-clover/30 text-vice-clover shrink-0">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-display font-bold uppercase text-white">
                  Cobertura Simultânea
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Transmissões ao vivo no TikTok, Kick e YouTube desde o primeiro minuto.
                </p>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex items-center gap-3">
              <Button
                href="#transmissoes"
                variant="neon"
                size="md"
                className="flex-1 text-xs font-bold py-3"
              >
                Assistir Lives
              </Button>
              <Button
                href="https://discord.gg/7tAB7BRzc"
                isExternal
                variant="glass"
                size="md"
                rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                className="flex-1 text-xs font-bold py-3"
              >
                Discord Oficial
              </Button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
