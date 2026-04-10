"use client";

import { useState } from "react";
import Link from "next/link";
import { Tv, Bell, Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center glow-red-sm group-hover:scale-110 transition-transform">
              <Tv size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              StreamX<span className="text-gradient"></span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Events", "Trending", "Schedule", "Creators"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-ink-muted hover:text-ink transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1.5 text-xs font-medium text-brand-400 border border-brand-500/30 rounded-full px-3 py-1.5 hover:bg-brand-500/10 transition-colors">
              <Zap size={12} className="fill-current" />
              Go Live
            </button>
            <button className="relative p-2 text-ink-muted hover:text-ink transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-500" />
            </button>
            <button className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-xs font-bold text-white">
              PA
            </button>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-ink-muted"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface-1 border-t border-white/5 px-4 py-4 space-y-3">
          {["Events", "Trending", "Schedule", "Creators"].map((item) => (
            <Link
              key={item}
              href="#"
              className="block text-sm text-ink-muted hover:text-ink py-2"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button className="flex items-center gap-1.5 text-xs font-medium text-brand-400 border border-brand-500/30 rounded-full px-3 py-1.5 hover:bg-brand-500/10 transition-colors">
            <Zap size={12} className="fill-current" />
            Go Live
          </button>
        </div>
      )}
    </header>
  );
}
