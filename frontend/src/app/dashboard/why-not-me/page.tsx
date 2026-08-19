'use client';

import React, { useState } from 'react';
import { HelpCircle, Upload, Sparkles, AlertCircle, CheckCircle2, ArrowRight, RefreshCw, Crosshair } from 'lucide-react';
import { ScoreGauge } from '@/components/ui/ScoreGauge';

export default function WhyNotMeAnalyzerPage() {
  const [jobDescription, setJobDescription] = useState(
    'Looking for a Lead Frontend Engineer with deep expertise in React 19, TypeScript, Next.js, Framer Motion, GraphQL, Micro-frontends, and CI/CD pipelines.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 1200);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300 mb-3">
          <HelpCircle className="h-3.5 w-3.5 text-cyan-400" /> Flagship AI Engine
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Why Not Me? Candidate Gap Analyzer</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Wondering why you didn't get called for an interview? Side-by-side objective gap breakdown between your profile and any target Job Description.
        </p>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="glass-card p-6 rounded-3xl space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">Candidate Master Resume</label>
          <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-xs">
            <p className="font-bold text-white mb-1">Alex_Morgan_Master_Resume.pdf</p>
            <p className="text-slate-400">Senior Full Stack Engineer • 6 Years Exp • React, TypeScript, Next.js, Django, PostgreSQL</p>
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">Target Job Description</label>
          <textarea
            rows={3}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full p-3 rounded-2xl glass-input text-xs resize-none focus:outline-none"
          />
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-cyan-600/20 flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
          >
            {isAnalyzing ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Crosshair className="h-4 w-4" />}
            Analyze Candidate Gaps
          </button>
        </div>

      </div>

      {/* Analysis Output */}
      {analyzed && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center">
            <ScoreGauge score={79} max={100} label="Candidate Fit Match" size={150} />
            <span className="mt-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold text-xs">
              Strong Potential • 3 Small Gaps
            </span>
          </div>

          <div className="lg:col-span-2 glass-card p-6 rounded-3xl space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" /> 3 High-Impact Fixes to Boost Match to 95%
            </h2>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 space-y-1">
                <span className="font-bold text-rose-400">Fix 1: Add "GraphQL" API experience keyword</span>
                <p className="text-slate-400">The JD emphasizes GraphQL micro-frontends. Add 1 bullet point demonstrating Apollo Client or GraphQL queries.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 space-y-1">
                <span className="font-bold text-amber-400">Fix 2: Highlight "Framer Motion" UI micro-animations</span>
                <p className="text-slate-400">The team prioritizes polished visual aesthetics. Mention Framer Motion transitions in your project section.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 space-y-1">
                <span className="font-bold text-emerald-400">Fix 3: Clarify Lead/Mentorship scope</span>
                <p className="text-slate-400">Rename section heading to emphasize tech leadership and architectural decision making.</p>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
