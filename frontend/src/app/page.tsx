'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import {
  Sparkles,
  Zap,
  ShieldAlert,
  HelpCircle,
  Plane,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  TrendingUp,
  Globe,
  Bot,
  Users,
  Star,
  Check,
  ChevronRight,
  Flame,
} from 'lucide-react';
import { ScoreGauge } from '@/components/ui/ScoreGauge';

export default function LandingPage() {
  const [demoUrl, setDemoUrl] = useState('https://linkedin.com/jobs/view/senior-fullstack-engineer-berlin');
  const [demoAtsScore, setDemoAtsScore] = useState(84);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />

      {/* Hero Background Glow Effects */}
      <div className="glow-indigo top-0 left-1/2 -translate-x-1/2" />
      <div className="glow-cyan top-40 right-10" />

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300 shadow-xl backdrop-blur-md mb-8">
          <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
          <span>Beyond Job Boards • Your Global AI Companion</span>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] uppercase font-bold">New v2.0</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
          Stop Applying Blindly.{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Operate Your Career Like a Pro.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
          CareerOS guides you from <strong className="text-slate-200">Self Assessment → Resume Building → ATS Optimization → Job Discovery → Application Tracking → Interview Prep → Offer Management → Career Growth</strong>.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 border border-indigo-400/30 transition-all hover:scale-105"
          >
            Launch CareerOS Dashboard <ArrowRight className="h-5 w-5" />
          </Link>
          
          <a
            href="#one-click"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900/80 border border-white/10 text-slate-200 hover:text-white hover:border-white/20 font-semibold text-base backdrop-blur-md transition-all"
          >
            <Zap className="h-5 w-5 text-cyan-400" /> Try One Click Apply Pack
          </a>
        </div>

        {/* Feature Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Unlimited ATS Scans</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-400" /> Europass CV Generator</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Rejection Intelligence Engine</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-violet-400" /> 6-Country Migration Planner</span>
        </div>

        {/* Interactive App Preview Showcase */}
        <div className="mt-16 relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">app.careeros.app/dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                <Flame className="h-3.5 w-3.5 fill-amber-400" /> 9 Day Streak
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Widget 1: Career GPS */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase text-indigo-400 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" /> Career GPS Today
                </span>
                <span className="text-xs font-mono text-emerald-400">Score 785/1000</span>
              </div>
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Apply to 5 Germany Roles</span>
                  <span className="text-emerald-400 font-bold">✓ Complete</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-indigo-500/30 flex items-center justify-between text-xs">
                  <span className="text-slate-200">Elevate ATS score by 10%</span>
                  <span className="text-indigo-400 font-bold">+100 pts</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Live ATS Scan Meter */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-around">
              <ScoreGauge score={demoAtsScore} label="ATS Match Rate" size={100} />
              <div className="flex flex-col gap-1 text-xs">
                <span className="text-emerald-400 font-medium">✓ 7 Hard Skills Matched</span>
                <span className="text-rose-400 font-medium">✗ 3 Keywords Missing</span>
                <span className="text-slate-400 text-[10px]">Docker, Celery, Redis</span>
              </div>
            </div>

            {/* Widget 3: Migration Planner */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-violet-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  <Plane className="h-4 w-4 text-violet-400" /> Germany EU Blue Card
                </span>
                <span className="text-xs text-emerald-400 font-bold">88% Eligible</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-2">Avg Salary: €70k-€95k • 2-Mo Visa</p>
              <div className="w-full bg-slate-800 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-violet-500 to-cyan-400 h-1.5 rounded-full w-[88%]" />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Flagship Differentiator Section */}
      <section id="one-click" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Flagship AI Engines</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Built Different. Built to Convert.
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            While generic job tools stop at resume writing, CareerOS acts as an end-to-end operational engine for global employment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Flagship 1: One Click Apply */}
          <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">One Click Apply Pack</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Paste any job link. Instant generation of ATS Resume, Europass CV, Cover Letter, HR Email, and Interview Q&A.
            </p>
            <Link href="/dashboard/one-click" className="text-xs font-bold text-indigo-400 flex items-center gap-1 hover:gap-2 transition-all">
              Try Generator <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Flagship 2: Rejection Intelligence */}
          <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="p-3 rounded-2xl bg-rose-500/20 text-rose-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rejection Intelligence</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Analyzes your rejection history. Pinpoints systemic keyword gaps, salary mismatches, or country visa bottlenecks.
            </p>
            <Link href="/dashboard/rejection" className="text-xs font-bold text-rose-400 flex items-center gap-1 hover:gap-2 transition-all">
              Analyze Rejections <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Flagship 3: Why Not Me Analyzer */}
          <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Why Not Me Analyzer</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Upload your resume and any target JD. Get match percentages, missing keywords, experience alignment, and 3 quick fixes.
            </p>
            <Link href="/dashboard/why-not-me" className="text-xs font-bold text-cyan-400 flex items-center gap-1 hover:gap-2 transition-all">
              Run Gap Check <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Flagship 4: Migration Planner */}
          <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="p-3 rounded-2xl bg-violet-500/20 text-violet-400 w-fit mb-4 group-hover:scale-110 transition-transform">
              <Plane className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Migration Path Generator</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Target Poland, Germany, Czechia, Netherlands, Slovakia, or Lithuania with visa pathway advice & cost of living breakdown.
            </p>
            <Link href="/dashboard/migration" className="text-xs font-bold text-violet-400 flex items-center gap-1 hover:gap-2 transition-all">
              Explore Countries <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Pricing Section (₹49/month) */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Fair & Transparent Pricing</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Accelerate Your Job Hunt for ₹49/mo
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            No expensive subscriptions. Premium power features for less than a cup of coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Plan Card */}
          <div className="p-8 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Free Starter</span>
              <div className="flex items-baseline gap-1 mt-4 mb-6">
                <span className="text-4xl font-extrabold text-white">₹0</span>
                <span className="text-slate-400 text-sm">/ forever</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> 3 ATS Scans per Month</li>
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> Basic Resume Upload & Storage</li>
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> Job Application Kanban Tracker</li>
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> Limited Daily GPS Missions</li>
              </ul>
            </div>
            <Link href="/dashboard" className="mt-8 w-full py-3 rounded-xl border border-white/20 text-center font-semibold text-sm text-slate-200 hover:text-white hover:border-white/40 transition-colors">
              Get Started Free
            </Link>
          </div>

          {/* Premium Plan Card (₹49/month) */}
          <div className="p-8 rounded-3xl border-2 border-indigo-500/50 bg-gradient-to-b from-indigo-950/80 via-slate-900/90 to-slate-950 backdrop-blur-xl relative overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">CareerOS Premium</span>
              <div className="flex items-baseline gap-1 mt-4 mb-6">
                <span className="text-5xl font-extrabold text-white">₹49</span>
                <span className="text-slate-400 text-sm">/ month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> <strong>Unlimited</strong> ATS Scans & Optimization</li>
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> <strong>One Click Apply Pack</strong> (Resume + Europass + Letters)</li>
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> <strong>Rejection Intelligence Engine</strong> & Action Plans</li>
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> <strong>Migration Planner</strong> (Germany, Poland, NL, etc.)</li>
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> <strong>AI Voice & Text Interview Simulator</strong></li>
                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-400" /> <strong>LinkedIn Profile & Headline AI Optimizer</strong></li>
              </ul>
            </div>
            <Link
              href="/dashboard/billing"
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-600 text-center font-bold text-sm text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
            >
              Upgrade Now for ₹49/mo
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-slate-300">
            <Zap className="h-4 w-4 text-indigo-400" /> CareerOS Inc. © 2026
          </div>
          <div className="flex gap-6 text-slate-400">
            <Link href="/dashboard/ats" className="hover:text-white">ATS Center</Link>
            <Link href="/dashboard/one-click" className="hover:text-white">One Click Apply</Link>
            <Link href="/dashboard/migration" className="hover:text-white">Migration</Link>
            <Link href="/dashboard/billing" className="hover:text-white">Pricing</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
