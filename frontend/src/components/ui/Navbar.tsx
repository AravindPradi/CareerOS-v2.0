'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Sun, Moon, Shield, Zap, User, Menu, X, ArrowRight } from 'lucide-react';
import { mockUser } from '@/lib/mockData';

export const Navbar = ({ isDashboard = false }: { isDashboard?: boolean }) => {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('light');
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link href={isDashboard ? '/dashboard' : '/'} className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
              <Zap className="h-5 w-5 text-indigo-400 fill-indigo-400/20 group-hover:text-cyan-400 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              Career<span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">OS</span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">AI SaaS</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wide font-medium">The AI Career Operating System</span>
          </div>
        </Link>

        {/* Navigation Links */}
        {!isDashboard && (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#gps" className="hover:text-white transition-colors flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" /> Career GPS
            </Link>

            <Link href="#migration" className="hover:text-white transition-colors">Global Migration</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing (₹49/mo)</Link>
          </div>
        )}

        {/* Actions & User Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all"
            title="Toggle Theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-400" />}
          </button>

          {isDashboard ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
                <Shield className="h-3.5 w-3.5 text-emerald-400" /> Premium Active
              </div>
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <img
                  src={mockUser.avatarUrl}
                  alt={mockUser.name}
                  className="h-8 w-8 rounded-full border border-indigo-400/50 object-cover"
                />
                <span className="hidden md:block text-xs font-semibold text-slate-200">{mockUser.name}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-600 px-4 py-2 rounded-xl shadow-lg shadow-indigo-600/30 border border-indigo-400/30 transition-all hover:scale-[1.02]"
              >
                Launch App <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-white/10 bg-slate-900/60 text-slate-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && !isDashboard && (
        <div className="md:hidden border-b border-white/10 bg-slate-950 px-4 py-4 space-y-3">
          <Link href="#features" className="block text-sm font-medium text-slate-300 hover:text-white">Features</Link>
          <Link href="#gps" className="block text-sm font-medium text-slate-300 hover:text-white">Career GPS</Link>
          <Link href="#one-click" className="block text-sm font-medium text-slate-300 hover:text-white">One Click Apply</Link>
          <Link href="#migration" className="block text-sm font-medium text-slate-300 hover:text-white">Global Migration</Link>
          <Link href="#pricing" className="block text-sm font-medium text-slate-300 hover:text-white">Pricing</Link>
          <Link href="/dashboard" className="block w-full text-center text-sm font-semibold text-white bg-indigo-600 py-2.5 rounded-xl">
            Launch Platform
          </Link>
        </div>
      )}
    </nav>
  );
};
