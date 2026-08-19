'use client';

import React from 'react';
import { BarChart3, CheckCircle2, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react';

export default function SkillGapAnalysisPage() {
  const currentSkills = ['React 19', 'TypeScript', 'Next.js 15', 'Python', 'Django', 'PostgreSQL'];
  const missingSkills = [
    { name: 'Docker & Containerization', priority: 'High', course: 'Docker & Kubernetes Mastery (3 hrs)' },
    { name: 'Redis Caching & Pub/Sub', priority: 'High', course: 'Redis in Action for Python & Node (2 hrs)' },
    { name: 'GraphQL Microservices', priority: 'Medium', course: 'Apollo GraphQL Fundamentals (4 hrs)' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-2">
            <BarChart3 className="h-3.5 w-3.5 text-indigo-400" /> Market Alignment Matrix
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Skill Gap Analysis</h1>
          <p className="text-xs text-slate-400">Market requirement comparison for Senior Full Stack Engineer roles.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Acquired Skills */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" /> Acquired Market Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {currentSkills.map((sk) => (
              <span key={sk} className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                ✓ {sk}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Skills & Courses */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-rose-400" /> Missing High-Demand Skills
          </h2>
          <div className="space-y-3">
            {missingSkills.map((item) => (
              <div key={item.name} className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 space-y-1 text-xs">
                <div className="flex justify-between font-bold text-white">
                  <span>{item.name}</span>
                  <span className="text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">{item.priority} Priority</span>
                </div>
                <p className="text-slate-400 flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-indigo-400" /> Recommended: {item.course}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
