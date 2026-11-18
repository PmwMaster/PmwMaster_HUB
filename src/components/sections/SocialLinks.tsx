"use client";

import React from "react";
import Image from "next/image";
import { socialLinks } from "@/config/social";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

export const SocialLinks: React.FC = () => {
  const logoMap: Record<string, string> = {
    discord: "/assets/platforms/discord-logo.png",
    tiktok: "/assets/platforms/tiktok-logo.png",
    instagram: "/assets/platforms/instagram-logo.webp",
    youtube: "/assets/platforms/youtube-logo.png",
    kick: "/assets/platforms/kick-logo.png",
  };

  return (
    <section id="redes" className="py-20 md:py-28 bg-vice-surface/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-vice-pink/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="REDES OFICIAIS"
          subtitle="Siga os canais verificados para acompanhar as novidades e avisos de lives."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus:outline-none"
            >
              <Card
                glowColor="pink"
                className="h-full flex flex-col items-center text-center p-5 bg-vice-surface/90 group-hover:bg-vice-surfaceLight border-white/[0.08] group-hover:border-vice-pink/40 transition-all duration-300"
              >
                <div className="relative w-16 h-16 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center shadow-md overflow-hidden group-hover:scale-105 group-hover:border-vice-pink/50 transition-all mb-4">
                  {logoMap[social.id] && (
                    <Image
                      src={logoMap[social.id]}
                      alt={social.name}
                      fill
                      className="object-contain p-2.5 drop-shadow-lg"
                    />
                  )}
                </div>

                <div className="w-full">
                  <h3 className="text-lg font-display font-bold uppercase tracking-wide text-white group-hover:text-vice-pink transition-colors">
                    {social.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 block truncate mt-0.5">
                    {social.handle}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] w-full flex items-center justify-center gap-1 text-[11px] font-display uppercase tracking-wider text-slate-400 group-hover:text-white">
                  <span>Acessar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-vice-pink" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
