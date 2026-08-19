'use client';

import React, { useState } from 'react';
import {
  Zap,
  Globe,
  FileText,
  Mail,
  HelpCircle,
  BarChart3,
  Download,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function OneClickApplyPage() {
  const [jobUrl, setJobUrl] = useState('https://linkedin.com/jobs/view/senior-fullstack-engineer-zalando-berlin');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'resume' | 'europass' | 'cover' | 'email' | 'qa' | 'gap'>('resume');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Flagship Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300 mb-3">
          <Zap className="h-3.5 w-3.5 text-cyan-400" /> Flagship AI Pack Engine
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">One Click Apply Pack Generator</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Paste any job posting link. CareerOS automatically extracts requirements and generates your complete application suite in 30 seconds.
        </p>

        {/* Input Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={jobUrl}
            onChange={(e) => setJobUrl(e.target.value)}
            placeholder="Paste Job URL (LinkedIn, Indeed, Glassdoor, Company site)..."
            className="flex-1 px-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm font-mono text-white focus:outline-none"
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all hover:scale-105 shrink-0 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" /> Synthesizing Pack...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 fill-white" /> Generate One Click Pack
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Application Pack Preview */}
      <div className="glass-card p-6 rounded-3xl space-y-6">
        
        {/* Pack Tabs */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('resume')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'resume' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="h-4 w-4" /> ATS Master Resume
            </button>
            <button
              onClick={() => setActiveTab('europass')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'europass' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <Globe className="h-4 w-4" /> Europass CV
            </button>
            <button
              onClick={() => setActiveTab('cover')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'cover' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="h-4 w-4" /> Cover Letter
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'email' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="h-4 w-4" /> HR Cold Email
            </button>
            <button
              onClick={() => setActiveTab('qa')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'qa' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="h-4 w-4" /> Interview Q&A
            </button>
            <button
              onClick={() => setActiveTab('gap')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'gap' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900/60 text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="h-4 w-4" /> Skill Gap Report
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy Text'}
            </button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-600/20">
              <Download className="h-4 w-4" /> Download Complete ZIP Pack
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/5 font-mono text-xs text-slate-300 space-y-4 leading-relaxed min-h-[350px]">
          {activeTab === 'resume' && (
            <div>
              <span className="text-indigo-400 font-bold block mb-2">// Tailored ATS Master Resume for Zalando - Berlin</span>
              <p>Alex Morgan | Senior Full Stack Engineer</p>
              <p>Email: alex.morgan@careeros.app | Location: Berlin, Germany Target</p>
              <br />
              <p className="font-bold text-white">SUMMARY</p>
              <p>Senior Full Stack Engineer with 6+ years of expertise building high-scale React 19 micro-frontends, Next.js apps, and Python/Django REST API backend services with Redis and PostgreSQL.</p>
              <br />
              <p className="font-bold text-white">KEY SKILLS MATCHED</p>
              <p>React 19 • TypeScript • Next.js • Python • Django • PostgreSQL • Redis • Docker • Microservices</p>
            </div>
          )}

          {activeTab === 'europass' && (
            <div>
              <span className="text-cyan-400 font-bold block mb-2">// Official Europass CV Standard XML/PDF Payload</span>
              <p>&lt;EuropassCV lang="en"&gt;</p>
              <p>&nbsp;&nbsp;&lt;PersonalInfo&gt;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;FirstName&gt;Alex&lt;/FirstName&gt;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;LastName&gt;Morgan&lt;/LastName&gt;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;WorkPermission&gt;EU Blue Card Eligible&lt;/WorkPermission&gt;</p>
              <p>&nbsp;&nbsp;&lt;/PersonalInfo&gt;</p>
              <p>&lt;/EuropassCV&gt;</p>
            </div>
          )}

          {activeTab === 'cover' && (
            <div>
              <span className="text-violet-400 font-bold block mb-2">// Tailored Cover Letter for Hiring Manager</span>
              <p>Dear Zalando Hiring Team,</p>
              <br />
              <p>I am writing to express my strong interest in the Senior Full Stack Engineer position in Berlin. Having spearheaded high-performance web applications using React 19, Next.js, and Django microservices, I am eager to bring my expertise to Zalando’s engineering team.</p>
              <br />
              <p>In my recent projects, I improved page render speeds by 40% and reduced API latency by implementing Redis caching layers and PostgreSQL query optimizations.</p>
              <br />
              <p>Sincerely,</p>
              <p>Alex Morgan</p>
            </div>
          )}

          {activeTab === 'email' && (
            <div>
              <span className="text-amber-400 font-bold block mb-2">// HR Cold Outreach / LinkedIn DM Draft</span>
              <p>Subject: Senior Full Stack Engineer Application - Alex Morgan</p>
              <br />
              <p>Hi Zalando Talent Acquisition Team,</p>
              <p>I recently applied for the Senior Full Stack Engineer role (Req #89201). Given my background in Next.js, React 19, and Python microservices, I wanted to reach out directly to share my tailored resume and Europass portfolio.</p>
              <p>Looking forward to connecting!</p>
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="space-y-4">
              <span className="text-emerald-400 font-bold block">// Predicted Role-Specific Technical Interview Q&A</span>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                <p className="font-bold text-white">Q1: How do you handle state management & server rendering in Next.js 15?</p>
                <p className="text-slate-400 mt-1">Model Answer: Leverage React 19 Server Components for data fetching and keep client side state local with Zustand or React Query.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                <p className="font-bold text-white">Q2: How do you scale background tasks in Celery with Redis?</p>
                <p className="text-slate-400 mt-1">Model Answer: Separate queues by task priority, leverage Redis visibility timeouts, and scale worker nodes horizontally.</p>
              </div>
            </div>
          )}

          {activeTab === 'gap' && (
            <div>
              <span className="text-rose-400 font-bold block mb-2">// Instant Skill Gap Analysis</span>
              <p className="text-emerald-400">Match Rate: 88% Match</p>
              <p className="text-slate-400 mt-2">Missing Skills: Kubernetes Cluster Management, GraphQL</p>
              <p className="text-slate-400 mt-1">Action: Review 15-minute quickstart guide on Kubernetes deployment in Skill Gap module.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
