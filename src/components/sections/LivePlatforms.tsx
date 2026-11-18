"use client";

import React from "react";
import Image from "next/image";
import { livePlatforms } from "@/config/platforms";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ExternalLink } from "lucide-react";

export const LivePlatforms: React.FC = () => {
  return (
    <section id="transmissoes" className="py-20 md:py-28 bg-vice-dark relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-vice-pink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="TRANSMISSÕES AO VIVO"
          subtitle="Acompanhe as gameplays diárias e a cobertura completa do GTA VI."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {livePlatforms.map((platform) => {
            const glowMap = {
              tiktok: "pink",
              kick: "clover",
              youtube: "cyan",
            } as const;

            return (
              <Card
                key={platform.id}
                glowColor={glowMap[platform.id as keyof typeof glowMap] || "purple"}
                className="flex flex-col justify-between overflow-hidden group bg-vice-surface/90 border-white/[0.08] p-5"
              >
                <div>
                  {/* Media banner */}
                  <div className="relative mb-5 overflow-hidden rounded-xl">
                    <ImagePlaceholder
                      src={platform.image}
                      alt={`Transmissão ${platform.name}`}
                      aspectRatio="16/9"
                      icon="play"
                      label={`Canal ${platform.name}`}
                    />
                  </div>

                  {/* Platform info */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black/70 border border-white/10 flex items-center justify-center shrink-0 shadow-md p-1">
                      <Image
                        src={`/assets/platforms/${platform.id}-logo.png`}
                        alt={platform.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold uppercase tracking-wide text-white group-hover:text-vice-pink transition-colors">
                        {platform.name}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">{platform.handle}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <Button
                    href={platform.url}
                    isExternal
                    variant="glass"
                    size="md"
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                    className="w-full"
                  >
                    Acessar {platform.name}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
