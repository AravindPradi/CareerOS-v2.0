'use client';

import React from 'react';
import { UserCheck, DollarSign, Users, FileCheck, Globe, TrendingUp, Shield, BarChart3 } from 'lucide-react';

export default function AdminPanelPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-semibold text-violet-300 mb-2">
            <UserCheck className="h-3.5 w-3.5 text-violet-400" /> SaaS Operations Control
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">SaaS Admin Operations Panel</h1>
          <p className="text-xs text-slate-400">Platform revenue metrics, user retention rates, ATS load monitoring, and country demand heatmaps.</p>
        </div>

        <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 font-bold text-xs border border-violet-500/30">
          SuperAdmin View
        </span>
      </div>

      {/* Revenue & Growth Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-xs font-semibold uppercase text-slate-400">Monthly Recurring Revenue</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-white">₹4,85,200</span>
            <span className="text-xs font-bold text-emerald-400">+18% MoM</span>
          </div>
          <p className="text-[10px] text-slate-500">9,902 Active ₹49/mo Subscribers</p>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-xs font-semibold uppercase text-slate-400">Total Registered Job Seekers</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-white">42,500</span>
            <span className="text-xs font-bold text-indigo-400">Global</span>
          </div>
          <p className="text-[10px] text-slate-500">DAU / MAU Ratio: 44.2%</p>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-xs font-semibold uppercase text-slate-400">ATS Scans Processed</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-cyan-400">184,200</span>
            <span className="text-xs font-bold text-cyan-300">Celery Tasks</span>
          </div>
          <p className="text-[10px] text-slate-500">Avg Scan Time: 420ms</p>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-xs font-semibold uppercase text-slate-400">Top Migration Destination</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-violet-400">Germany 🇩🇪</span>
            <span className="text-xs font-bold text-violet-300">42% Share</span>
          </div>
          <p className="text-[10px] text-slate-500">Followed by Poland (28%) & NL (18%)</p>
        </div>

      </div>

      {/* Operations Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Globe className="h-5 w-5 text-indigo-400" /> International Country Demand Map
          </h2>
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
              <span className="font-bold text-white">1. Germany (Berlin, Munich, Hamburg)</span>
              <span className="text-emerald-400 font-bold">17,850 Searches</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
              <span className="font-bold text-white">2. Poland (Warsaw, Krakow, Wroclaw)</span>
              <span className="text-emerald-400 font-bold">11,900 Searches</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
              <span className="font-bold text-white">3. Netherlands (Amsterdam, Eindhoven)</span>
              <span className="text-emerald-400 font-bold">7,650 Searches</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Shield className="h-5 w-5 text-cyan-400" /> System Health & API Queue Status
          </h2>
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
              <span className="text-slate-300">Django API Gateway (Gunicorn 4 Workers)</span>
              <span className="text-emerald-400 font-bold">✓ 99.99% Uptime</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
              <span className="text-slate-300">Celery Async Task Workers (Redis Broker)</span>
              <span className="text-emerald-400 font-bold">✓ 0 Tasks Pending</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
              <span className="text-slate-300">PostgreSQL Primary DB</span>
              <span className="text-emerald-400 font-bold">✓ 8.2% Storage Used</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
