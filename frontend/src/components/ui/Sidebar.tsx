'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  FileCheck,
  FileText,
  Globe,
  Search,
  LayoutGrid,
  Mic,
  Bot,
  BarChart3,
  Plane,
  Linkedin,
  Zap,
  HelpCircle,
  ShieldAlert,
  CreditCard,
  Crown,
  Flame,
  UserCheck,
} from 'lucide-react';
import { mockUser } from '@/lib/mockData';

export const navigationItems = [
  { name: 'Career GPS Overview', href: '/dashboard/overview', icon: Compass, badge: 'Daily' },
  { name: 'One Click Apply Pack', href: '/dashboard/one-click', icon: Zap, flagship: true },
  { name: 'Rejection Intelligence', href: '/dashboard/rejection', icon: ShieldAlert, flagship: true },
  { name: 'Why Not Me Analyzer', href: '/dashboard/why-not-me', icon: HelpCircle, flagship: true },
  { name: 'ATS Score Center', href: '/dashboard/ats', icon: FileCheck },
  { name: 'Resume Builder', href: '/dashboard/resume', icon: FileText },
  { name: 'Europass Generator', href: '/dashboard/europass', icon: Globe },
  { name: 'AI Job Finder', href: '/dashboard/job-finder', icon: Search },
  { name: 'Job Tracker (Kanban)', href: '/dashboard/job-tracker', icon: LayoutGrid },
  { name: 'Interview Center', href: '/dashboard/interview', icon: Mic },
  { name: 'AI Career Coach', href: '/dashboard/coach', icon: Bot },
  { name: 'Skill Gap Analysis', href: '/dashboard/skill-gap', icon: BarChart3 },
  { name: 'Migration Planner', href: '/dashboard/migration', icon: Plane, badge: 'Global' },
  { name: 'LinkedIn Optimizer', href: '/dashboard/linkedin', icon: Linkedin },
  { name: 'Subscription Center', href: '/dashboard/billing', icon: CreditCard, price: '₹49/mo' },
  { name: 'SaaS Admin Panel', href: '/dashboard/admin', icon: UserCheck, admin: true },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 hidden lg:flex flex-col border-r border-white/10 bg-slate-950/90 backdrop-blur-xl min-h-[calc(100vh-65px)]">
      
      {/* User Progress Widget */}
      <div className="p-4 border-b border-white/10">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-950/80 to-slate-900/80 p-3.5 border border-indigo-500/20 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Career GPS Score</span>
            <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
              <Flame className="h-3.5 w-3.5 fill-amber-400" /> {mockUser.streakCount} Day Streak
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">{mockUser.careerScore}</span>
            <span className="text-xs font-medium text-emerald-400">/ 1000 Level 8</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 h-1.5 rounded-full w-[78.5%]" />
          </div>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Modules</div>
        {navigationItems.map((item) => {
          const isActive = pathname === item.href || (pathname === '/dashboard' && item.href === '/dashboard/overview');
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600/30 to-violet-600/20 text-white border border-indigo-500/40 shadow-sm shadow-indigo-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60 hover:border-white/5 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive
                      ? 'text-indigo-400'
                      : item.flagship
                      ? 'text-cyan-400 group-hover:text-cyan-300'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />
                <span className="truncate">{item.name}</span>
              </div>

              {item.flagship && (
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
                  AI Flagship
                </span>
              )}
              {item.badge && (
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  {item.badge}
                </span>
              )}
              {item.price && (
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  {item.price}
                </span>
              )}
              {item.admin && (
                <span className="text-[10px] font-semibold text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded border border-violet-500/20">
                  Admin
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Upgrade Callout */}
      <div className="p-3 border-t border-white/10">
        <Link
          href="/dashboard/billing"
          className="flex items-center gap-3 p-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-violet-500/10 border border-amber-500/20 hover:border-amber-500/40 transition-all group"
        >
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
            <Crown className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white">Upgrade to Premium</span>
            <span className="text-[10px] text-slate-400">Unlock All AI Engines • ₹49/mo</span>
          </div>
        </Link>
      </div>

    </aside>
  );
};
