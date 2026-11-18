"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "neon" | "clover" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "neon",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display uppercase tracking-wider font-bold rounded-lg transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none relative overflow-hidden group";

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5",
      md: "px-6 py-3 text-sm gap-2",
      lg: "px-8 py-4 text-base gap-2.5",
    };

    const variantStyles = {
      neon: "bg-pmw-purple text-white hover:bg-pmw-purpleLight shadow-neon-purple hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] border border-purple-400/30",
      clover: "bg-pmw-clover text-black font-extrabold hover:bg-green-400 shadow-neon-clover hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] border border-green-300/40",
      glass:
        "bg-white/[0.04] backdrop-blur-md border border-white/10 text-pmw-text hover:bg-white/[0.1] hover:border-pmw-purple/40 hover:text-white shadow-neon-subtle",
      outline:
        "bg-transparent border border-pmw-purple/50 text-pmw-purpleLight hover:bg-pmw-purple/10 hover:border-pmw-purple hover:text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]",
      ghost: "bg-transparent text-pmw-muted hover:text-white hover:bg-white/5",
    };

    const combinedStyles = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {/* Subtle shine on hover */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal || href.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedStyles}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedStyles} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
