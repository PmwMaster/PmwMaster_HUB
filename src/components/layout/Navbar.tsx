"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Menu, X, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-pmw-dark/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg"
          : "bg-gradient-to-b from-pmw-dark/90 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-vice-pink via-vice-purple to-vice-cyan p-[1px] shadow-vice-pink transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-[11px] bg-vice-dark overflow-hidden relative flex items-center justify-center">
                <Image
                  src="/assets/profile/pmw-mascot.png"
                  alt="PmwMaster Mascot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-black uppercase tracking-wider text-white group-hover:text-vice-pink transition-colors leading-none">
                PMW<span className="text-vice-pink">MASTER</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-vice-cyan mt-1">
                VICE CITY HUB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-display uppercase tracking-wider text-pmw-muted hover:text-white hover:bg-white/[0.04] rounded-md transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-pmw-dark/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-display uppercase tracking-wider text-pmw-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Button
              href="#transmissoes"
              variant="neon"
              size="md"
              leftIcon={<Radio className="w-4 h-4 text-pmw-clover animate-pulse" />}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              Acessar Transmissões
            </Button>
            <Button
              href="#comunidade"
              variant="glass"
              size="md"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              Entrar no Discord
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
