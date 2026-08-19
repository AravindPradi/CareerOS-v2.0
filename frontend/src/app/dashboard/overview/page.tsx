'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Flame,
  CheckCircle2,
  Circle,
  Zap,
  ShieldAlert,
  HelpCircle,
  Plane,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  Sparkles,
} from 'lucide-react';
import { mockUser, initialMissions, sampleApplications } from '@/lib/mockData';
import { ScoreGauge } from '@/components/ui/ScoreGauge';

export default function CareerGPSOverview() {
  const [missions, setMissions] = useState(initialMissions);
  const [careerScore, setCareerScore] = useState(mockUser.careerScore);
  const [streakCount, setStreakCount] = useState(mockUser.streakCount);

  const toggleMission = (id: string) => {
    setMissions((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextCompleted = !m.isCompleted;
          if (nextCompleted) {
            setCareerScore((s) => Math.min(s + m.points, 1000));
          } else {
            setCareerScore((s) => Math.max(s - m.points, 0));
          }
          return { ...m, isCompleted: nextCompleted };
        }
        return m;
      })
    );
  };

  const completedCount = missions.filter((m) => m.isCompleted).length;

  return (
    <div className="space-y-8">
      
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-slate-950 border border-indigo-500/30 shadow-2xl backdrop-blur-xl">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" /> Career GPS Active Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Welcome back, {mockUser.name}!
          </h1>
          <p className="text-xs text-slate-400">
            Targeting: <span className="text-slate-200 font-semibold">{mockUser.targetRole}</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Flame className="h-5 w-5 fill-amber-400" />
            <div className="flex flex-col">
              <span className="text-sm font-extrabold">{streakCount} Days</span>
              <span className="text-[10px] text-amber-300 font-medium">Daily Streak</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
            <Award className="h-5 w-5 text-indigo-400" />
            <div className="flex flex-col">
              <span className="text-sm font-extrabold">Level 8</span>
              <span className="text-[10px] text-indigo-300 font-medium">Global Elite</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: GPS Gauge + Daily Missions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Progress Score Gauge Card */}
        <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-between text-center">
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-indigo-400" /> Career Readiness
            </span>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Top 5% Job Hunter
            </span>
          </div>

          <ScoreGauge score={careerScore} max={1000} label="Overall Career GPS Index" size={150} />

          <div className="w-full mt-6 space-y-2 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Today's Missions Completed</span>
              <span className="text-white font-bold">{completedCount} / {missions.length}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / missions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Daily Mission List */}
        <div className="lg:col-span-2 glass-card p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" /> Today's Recommended Missions
              </h2>
              <p className="text-xs text-slate-400">Complete tasks to increase streak & unlock priority recruiter recommendations.</p>
            </div>
            <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Resets in 8h 12m
            </span>
          </div>

          <div className="space-y-3">
            {missions.map((mission) => (
              <div
                key={mission.id}
                onClick={() => toggleMission(mission.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  mission.isCompleted
                    ? 'bg-slate-900/40 border-emerald-500/30 opacity-75'
                    : 'bg-slate-900/80 border-white/10 hover:border-indigo-500/40 hover:scale-[1.01]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {mission.isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 fill-emerald-400/20" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-500 hover:text-indigo-400 transition-colors" />
                    )}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${mission.isCompleted ? 'line-through text-slate-400' : 'text-white'}`}>
                      {mission.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{mission.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    +{mission.points} pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Flagship Differentiator Quick Launcher */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
          Flagship AI Engines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Link href="/dashboard/one-click" className="glass-card p-5 rounded-2xl hover:scale-105 transition-transform group">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 w-fit mb-3">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-300">One Click Apply Pack</h3>
            <p className="text-xs text-slate-400">Generate full application kit from job link.</p>
          </Link>

          <Link href="/dashboard/rejection" className="glass-card p-5 rounded-2xl hover:scale-105 transition-transform group">
            <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 w-fit mb-3">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-rose-300">Rejection Intelligence</h3>
            <p className="text-xs text-slate-400">Identify systemic rejection root causes.</p>
          </Link>

          <Link href="/dashboard/why-not-me" className="glass-card p-5 rounded-2xl hover:scale-105 transition-transform group">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 w-fit mb-3">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300">Why Not Me Analyzer</h3>
            <p className="text-xs text-slate-400">Match percentage & gap report vs JD.</p>
          </Link>

          <Link href="/dashboard/migration" className="glass-card p-5 rounded-2xl hover:scale-105 transition-transform group">
            <div className="p-2.5 rounded-xl bg-violet-500/20 text-violet-400 w-fit mb-3">
              <Plane className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-violet-300">Migration Planner</h3>
            <p className="text-xs text-slate-400">EU visa pathway & cost breakdown.</p>
          </Link>

        </div>
      </div>

      {/* Active Pipeline Preview */}
      <div className="glass-card p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-400" /> Active Job Applications
          </h2>
          <Link href="/dashboard/job-tracker" className="text-xs font-semibold text-indigo-400 hover:underline">
            View Kanban Board →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sampleApplications.slice(0, 3).map((app) => (
            <div key={app.id} className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{app.companyName}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                  {app.stage}
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate">{app.jobTitle}</p>
              <p className="text-[10px] text-slate-500">{app.location}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
