import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center px-3.5 py-1 mb-4 rounded-full text-xs font-semibold uppercase tracking-widest border border-vice-pink/40 bg-vice-pink/10 text-vice-pink shadow-[0_0_15px_rgba(255,0,122,0.2)]",
            align === "center" ? "mx-auto" : ""
          )}
        >
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white drop-shadow-sm">
        <span className="bg-gradient-to-r from-white via-slate-100 to-pink-200 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "mt-5 h-1 w-24 bg-gradient-to-r from-vice-pink via-purple-500 to-vice-cyan rounded-full shadow-[0_0_12px_rgba(255,0,122,0.5)]",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
};
