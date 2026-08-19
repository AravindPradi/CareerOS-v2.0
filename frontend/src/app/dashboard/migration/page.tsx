'use client';

import React, { useState } from 'react';
import { Plane, Globe, Shield, DollarSign, Clock, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { countryMigrationData } from '@/lib/mockData';

export default function MigrationPlannerPage() {
  const [selectedCountry, setSelectedCountry] = useState(countryMigrationData[0]);

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-violet-950 via-slate-900 to-slate-950 border border-violet-500/30 shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-bold text-violet-300 mb-3">
          <Plane className="h-3.5 w-3.5 text-violet-400" /> Flagship Global Mobility Engine
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">International Migration Path Generator</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Detailed relocation insight for top European tech hubs. Compare visa pathways, salary expectations, cost of living, and sponsorship probability.
        </p>
      </div>

      {/* Country Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {countryMigrationData.map((item) => {
          const isSelected = selectedCountry.country === item.country;
          return (
            <div
              key={item.country}
              onClick={() => setSelectedCountry(item)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer text-center space-y-2 ${
                isSelected
                  ? 'bg-gradient-to-b from-violet-900/40 to-slate-900 border-violet-500/50 shadow-xl shadow-violet-500/10 scale-105'
                  : 'bg-slate-900/60 border-white/10 hover:border-white/20'
              }`}
            >
              <span className="text-3xl block">{item.flag}</span>
              <h3 className="text-xs font-bold text-white">{item.country}</h3>
              <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                {item.eligibilityScore}% Eligible
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Country Deep Breakdown Card */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{selectedCountry.flag}</span>
            <div>
              <h2 className="text-2xl font-extrabold text-white">{selectedCountry.country} Relocation Profile</h2>
              <p className="text-xs text-slate-400">Primary Pathway: <span className="text-violet-300 font-semibold">{selectedCountry.visaPathway}</span></p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300">Sponsorship Likelihood:</span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/30">
              {selectedCountry.sponsorshipProbability} Probability
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-bold">
              <DollarSign className="h-4 w-4" /> Average Tech Salary
            </div>
            <p className="text-lg font-extrabold text-white">{selectedCountry.avgSalaryEUR}</p>
            <p className="text-[11px] text-slate-400">Based on Mid to Senior Tech Role benchmark</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Globe className="h-4 w-4" /> Cost of Living Index
            </div>
            <p className="text-lg font-extrabold text-white">{selectedCountry.costOfLivingIndex} / 100</p>
            <p className="text-[11px] text-slate-400">Relative to EU average baseline</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-violet-400 font-bold">
              <Clock className="h-4 w-4" /> Visa Processing Timeline
            </div>
            <p className="text-lg font-extrabold text-white">{selectedCountry.processingTimeMonths} Months</p>
            <p className="text-[11px] text-slate-400">From job offer signing to visa issue</p>
          </div>

        </div>

        {/* High Demand Roles in Country */}
        <div className="pt-4 border-t border-white/10">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">High-Demand Roles in {selectedCountry.country}</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCountry.topDemandRoles.map((role) => (
              <span key={role} className="px-3 py-1.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-200 text-xs font-semibold">
                🔥 {role}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
