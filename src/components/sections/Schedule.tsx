"use client";

import React from "react";
import { upcomingEvents } from "@/config/events";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, Radio } from "lucide-react";
import { GtaCountdown } from "@/components/effects/GtaCountdown";

export const Schedule: React.FC = () => {
  return (
    <section id="agenda" className="py-20 md:py-28 bg-vice-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-vice-pink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="CRONOGRAMA DE LIVES"
          subtitle="Programação semanal e eventos especiais para o lançamento de GTA VI."
        />

        {/* Dynamic GTA VI Hype Countdown */}
        <GtaCountdown />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => {
            const isSpecial = event.status === "especial";
            const isSoon = event.status === "em_breve";

            return (
              <Card
                key={event.id}
                glowColor={isSpecial ? "pink" : isSoon ? "cyan" : "clover"}
                className="flex flex-col justify-between overflow-hidden group bg-vice-surface/90 border-white/[0.08] p-5"
              >
                <div>
                  {/* Event Thumbnail Preview */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <ImagePlaceholder
                      src={event.image}
                      alt={event.title}
                      aspectRatio="16/9"
                      icon="sparkles"
                      label={event.game}
                    />
                  </div>

                  <span className="text-xs font-mono text-vice-pink uppercase block mb-1">
                    {event.game}
                  </span>

                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-4 group-hover:text-vice-pink transition-colors">
                    {event.title}
                  </h3>

                  {/* Compact Date & Time badges */}
                  <div className="space-y-1.5 mb-2 p-3 rounded-xl bg-black/40 border border-white/[0.04] text-xs">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <Calendar className="w-3.5 h-3.5 text-vice-pink" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-vice-cyan" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <Button
                    href="#transmissoes"
                    variant="glass"
                    size="sm"
                    className="w-full text-xs font-bold"
                  >
                    Assistir Transmissão
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
