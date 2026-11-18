"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Image as ImageIcon, Play, Sparkles } from "lucide-react";

export interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspectRatio?: "16/9" | "9/16" | "4/3" | "1/1" | "hero";
  className?: string;
  icon?: "image" | "play" | "clover" | "sparkles";
  label?: string;
  fill?: boolean;
  priority?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  aspectRatio = "16/9",
  className,
  icon = "image",
  label,
  fill = false,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  const aspectClasses = {
    "16/9": "aspect-video",
    "9/16": "aspect-[9/16]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "hero": "h-[650px] md:h-[780px] w-full",
  };

  const renderIcon = () => {
    switch (icon) {
      case "play":
        return <Play className="w-8 h-8 text-pmw-purpleLight fill-pmw-purple/40" />;
      case "sparkles":
        return <Sparkles className="w-8 h-8 text-pmw-clover animate-pulse" />;
      case "clover":
        return (
          <svg className="w-10 h-10 fill-pmw-clover/60 text-pmw-clover" viewBox="0 0 24 24">
            <path d="M12 2a4 4 0 0 0-4 4c0 1.2.5 2.2 1.3 3A4 4 0 0 0 6 12a4 4 0 0 0 3 3.9A4 4 0 0 0 6 18a4 4 0 0 0 4 4c1.2 0 2.2-.5 3-1.3.8.8 1.8 1.3 3 1.3a4 4 0 0 0 4-4 4 4 0 0 0-3-3.9 4 4 0 0 0 3-3.1 4 4 0 0 0-4-4c-1.2 0-2.2.5-3 1.3A4 4 0 0 0 12 2zm0 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
          </svg>
        );
      default:
        return <ImageIcon className="w-8 h-8 text-pmw-muted/60" />;
    }
  };

  const hasValidImage = src && !hasError;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-pmw-surface border border-white/[0.08] select-none",
        !fill && aspectClasses[aspectRatio],
        fill && "w-full h-full",
        className
      )}
    >
      {hasValidImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pmw-dark via-pmw-surface to-pmw-surfaceLight text-center">
          {/* Cyberpunk grid background pattern */}
          <div className="absolute inset-0 bg-cyber-grid bg-[size:24px_24px] opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-pmw-purple/10 via-transparent to-transparent pointer-events-none" />

          {/* Central icon and label */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="p-3 rounded-full bg-pmw-surfaceLight/80 border border-white/10 shadow-neon-subtle">
              {renderIcon()}
            </div>
            <span className="text-xs font-display font-medium uppercase tracking-wider text-pmw-muted/80 max-w-[200px] truncate">
              {label || alt}
            </span>
            <span className="text-[10px] text-pmw-purpleLight/60 font-mono">
              [ Asset PmwMaster ]
            </span>
          </div>

          {/* Decorative tech lines */}
          <div className="absolute bottom-2 right-2 flex gap-1 pointer-events-none opacity-40">
            <div className="w-1.5 h-1.5 rounded-full bg-pmw-clover" />
            <div className="w-1.5 h-1.5 rounded-full bg-pmw-purple" />
            <div className="w-1.5 h-1.5 rounded-full bg-pmw-blue" />
          </div>
        </div>
      )}
    </div>
  );
};
