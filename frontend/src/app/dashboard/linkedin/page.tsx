'use client';

import React, { useState } from 'react';
import { Linkedin, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { ScoreGauge } from '@/components/ui/ScoreGauge';

export default function LinkedInOptimizerPage() {
  const [profileUrl, setProfileUrl] = useState('https://linkedin.com/in/alexmorgan-tech');
  const [generatedHeadline, setGeneratedHeadline] = useState(
    'Senior Full Stack Engineer | Next.js 15, React 19, TypeScript, Python & Django | Building High-Scale SaaS Platforms'
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-300 mb-2">
            <Linkedin className="h-3.5 w-3.5 text-blue-400" /> Recruiter Visibility Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">LinkedIn Profile Optimizer</h1>
          <p className="text-xs text-slate-400">Optimize your headline, summary, and keywords for LinkedIn Recruiter search algorithms.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center">
          <ScoreGauge score={91} max={100} label="Recruiter Searchability Score" size={150} />
          <span className="mt-4 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 font-bold text-xs border border-blue-500/20">
            Top 2% Recruiter Visibility
          </span>
        </div>

        <div className="lg:col-span-2 glass-card p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" /> AI Optimized Headline
            </h2>
            <button
              onClick={handleCopy}
              className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied!' : 'Copy Headline'}
            </button>
          </div>

          <p className="p-4 rounded-2xl bg-slate-900/90 border border-blue-500/30 text-xs font-mono text-white leading-relaxed">
            {generatedHeadline}
          </p>

          <div className="space-y-2 text-xs">
            <p className="font-bold text-white">Recruiter Search Keywords Included:</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">Next.js 15</span>
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">React 19</span>
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">Python / Django</span>
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">EU Relocation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
