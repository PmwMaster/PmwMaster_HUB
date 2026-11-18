"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowColor?: "purple" | "blue" | "clover" | "pink" | "cyan" | "none";
  isGlass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      hoverEffect = true,
      glowColor = "none",
      isGlass = true,
      children,
      ...props
    },
    ref
  ) => {
    const glowClasses = {
      purple: "hover:border-pmw-purple/50 hover:shadow-neon-purple",
      blue: "hover:border-vice-cyan/50 hover:shadow-vice-cyan",
      clover: "hover:border-pmw-clover/50 hover:shadow-neon-clover",
      pink: "hover:border-vice-pink/50 hover:shadow-vice-pink",
      cyan: "hover:border-vice-cyan/50 hover:shadow-vice-cyan",
      none: "hover:border-white/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl border border-white/[0.08] p-6 transition-all duration-300",
          isGlass ? "bg-pmw-surface/80 backdrop-blur-md" : "bg-pmw-surface",
          hoverEffect && "hover:-translate-y-1 hover:bg-pmw-surfaceLight/90",
          glowClasses[glowColor],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
