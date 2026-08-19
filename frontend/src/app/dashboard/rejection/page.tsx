'use client';

import React from 'react';
import { ShieldAlert, TrendingUp, AlertCircle, Sparkles, CheckCircle2, ArrowRight, RefreshCw, BarChart2 } from 'lucide-react';
import { sampleApplications } from '@/lib/mockData';

export default function RejectionIntelligencePage() {
  const rejectedApps = sampleApplications.filter((a) => a.stage === 'REJECTED');

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-950 via-slate-900 to-slate-950 border border-rose-500/30 shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-bold text-rose-300 mb-3">
          <ShieldAlert className="h-3.5 w-3.5 text-rose-400" /> Flagship AI Engine
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Rejection Intelligence Engine</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Turn rejections into data. CareerOS detects systemic patterns across your past application failures and prescribes exact corrective actions.
        </p>
      </div>

      {/* Analytics Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Metric Card 1 */}
        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-xs font-semibold uppercase text-slate-400">Total Analyzed Rejections</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-white">12 Applications</span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              -40% Rejection Rate
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Imported from Job Tracker Kanban</p>
        </div>

        {/* Metric Card 2 */}
        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-xs font-semibold uppercase text-slate-400">Primary Rejection Bottleneck</span>
          <div className="flex items-baseline justify-between">
            <span className="text-xl font-extrabold text-rose-400">Missing Hard Keywords</span>
            <span className="text-xs font-bold text-rose-300">58% of Failures</span>
          </div>
          <p className="text-[11px] text-slate-400">Docker, Kubernetes, Redis missing in scanned resumes</p>
        </div>

        {/* Metric Card 3 */}
        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-xs font-semibold uppercase text-slate-400">Secondary Bottleneck</span>
          <div className="flex items-baseline justify-between">
            <span className="text-xl font-extrabold text-amber-400">Country Visa Sponsorship</span>
            <span className="text-xs font-bold text-amber-300">25% of Failures</span>
          </div>
          <p className="text-[11px] text-slate-400">Non-EU applicants targeting non-sponsoring roles</p>
        </div>

      </div>

      {/* Root Cause Analysis & Corrective Action Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Cause Breakdown Card */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-indigo-400" /> Systemic Failure Distribution
          </h2>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>1. Missing ATS Hard Keywords (Docker, Celery, Redis)</span>
                <span className="font-bold text-rose-400">58%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-rose-500 h-2 rounded-full w-[58%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>2. Country Eligibility / Visa Sponsorship Restriction</span>
                <span className="font-bold text-amber-400">25%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full w-[25%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>3. Salary Expectations Mismatch</span>
                <span className="font-bold text-cyan-400">12%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full w-[12%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>4. Experience Seniority Alignment</span>
                <span className="font-bold text-indigo-400">5%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full w-[5%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Personalized Action Matrix */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" /> Prescribed Action Plan
          </h2>

          <div className="space-y-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-indigo-500/30 flex items-start gap-3">
              <span className="px-2 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold text-xs">Step 1</span>
              <div>
                <h3 className="text-xs font-bold text-white">Run ATS Center Scan before every submission</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Ensure ATS score is ≥85% before sending application.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-violet-500/30 flex items-start gap-3">
              <span className="px-2 py-1 rounded-lg bg-violet-500/20 text-violet-300 font-bold text-xs">Step 2</span>
              <div>
                <h3 className="text-xs font-bold text-white">Use Migration Planner for international applications</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Target companies with confirmed EU Blue Card sponsorship history.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-500/30 flex items-start gap-3">
              <span className="px-2 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold text-xs">Step 3</span>
              <div>
                <h3 className="text-xs font-bold text-white">Attach Europass CV for EU destinations</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Generate official Europass CV using Europass Generator module.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
