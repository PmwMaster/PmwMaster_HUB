"use client";

import React, { useState } from "react";
import { galleryItems } from "@/config/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Play, ExternalLink, Film } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContentGallery: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "short" | "corte">("all");

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "short") return item.type === "short";
    if (filter === "corte") return item.type === "corte" || item.type === "destaque";
    return true;
  });

  return (
    <section id="conteudos" className="py-20 md:py-28 bg-pmw-surface relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-pmw-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Galeria de Destaques"
          title="MOMENTOS QUE MERECEM SER REVIVIDOS."
          subtitle="Os melhores clipes, reações engraçadas, jogadas inacreditáveis e teasers reunidos em um só lugar."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-2 rounded-lg text-xs font-display uppercase tracking-wider font-bold transition-all",
              filter === "all"
                ? "bg-pmw-purple text-white shadow-neon-purple"
                : "bg-pmw-dark/80 text-pmw-muted hover:text-white border border-white/10"
            )}
          >
            Todos os Momentos
          </button>
          <button
            onClick={() => setFilter("short")}
            className={cn(
              "px-4 py-2 rounded-lg text-xs font-display uppercase tracking-wider font-bold transition-all",
              filter === "short"
                ? "bg-pmw-purple text-white shadow-neon-purple"
                : "bg-pmw-dark/80 text-pmw-muted hover:text-white border border-white/10"
            )}
          >
            Shorts & TikTok (9:16)
          </button>
          <button
            onClick={() => setFilter("corte")}
            className={cn(
              "px-4 py-2 rounded-lg text-xs font-display uppercase tracking-wider font-bold transition-all",
              filter === "corte"
                ? "bg-pmw-purple text-white shadow-neon-purple"
                : "bg-pmw-dark/80 text-pmw-muted hover:text-white border border-white/10"
            )}
          >
            Cortes & Especiais (16:9)
          </button>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              glowColor="pink"
              className="group p-4 flex flex-col justify-between overflow-hidden bg-vice-surface/90 border-white/[0.08]"
            >
              <div>
                {/* Media Thumbnail */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <ImagePlaceholder
                    src={item.thumbnail}
                    alt={item.title}
                    aspectRatio={item.aspectRatio === "vertical" ? "9/16" : "16/9"}
                    icon="play"
                    label={item.title}
                  />

                  {/* Platform & Type Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pmw-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-display font-bold uppercase tracking-wider text-white">
                    <Film className="w-3 h-3 text-pmw-clover" />
                    <span>{item.platform}</span>
                  </div>

                  {item.views && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-pmw-purple/80 text-[10px] font-mono text-white font-bold">
                      {item.views}
                    </div>
                  )}

                  {/* Hover Play Overlay */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-pmw-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs"
                    aria-label={`Assistir ${item.title}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-pmw-purple text-white flex items-center justify-center shadow-neon-purple transform scale-75 group-hover:scale-100 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </a>
                </div>

                {/* Content Title */}
                <h4 className="font-display font-bold text-white uppercase text-sm line-clamp-2 group-hover:text-pmw-purpleLight transition-colors">
                  {item.title}
                </h4>
              </div>

              {/* Direct Link */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-pmw-muted">
                <span className="capitalize">{item.type}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-pmw-purpleLight hover:text-white font-medium"
                >
                  Assistir <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
