'use client';

import React, { useState } from 'react';
import { FileText, Sparkles, Download, Eye, Plus, Layout, Check, Save } from 'lucide-react';

export default function ResumeBuilderPage() {
  const [template, setTemplate] = useState('modern_sleek');
  const [summary, setSummary] = useState(
    'Senior Full Stack Engineer with 6+ years of expertise designing and delivering high-concurrency web applications using Next.js 15, React 19, TypeScript, Python 3.12, Django 5, and PostgreSQL.'
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-2">
            <FileText className="h-3.5 w-3.5 text-indigo-400" /> AI Resume Studio
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Interactive Resume Builder</h1>
          <p className="text-xs text-slate-400">WYSIWYG resume editor with real-time AI bullet point enhancement and ATS optimization.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5">
            <Save className="h-4 w-4" /> Save Draft
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-600/30">
            <Download className="h-4 w-4" /> Export PDF
          </button>
        </div>
      </div>

      {/* Editor & Preview split pane */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Editor Column */}
        <div className="glass-card p-6 rounded-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Layout className="h-4 w-4 text-indigo-400" /> Choose Template Layout
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setTemplate('modern_sleek')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${template === 'modern_sleek' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'}`}
              >
                Modern Sleek
              </button>
              <button
                onClick={() => setTemplate('executive')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${template === 'executive' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'}`}
              >
                Executive
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-slate-300 block mb-1">Professional Summary</label>
              <textarea
                rows={4}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full p-3 rounded-2xl glass-input text-xs leading-relaxed focus:outline-none"
              />
              <button className="mt-2 text-xs text-indigo-400 font-bold flex items-center gap-1 hover:underline">
                <Sparkles className="h-3.5 w-3.5" /> AI Rewrite Summary for ATS Pass
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview Column */}
        <div className="p-8 rounded-3xl bg-white text-slate-900 shadow-2xl font-sans text-xs space-y-4 min-h-[500px]">
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">Alex Morgan</h1>
            <p className="text-indigo-600 font-bold">Senior Full Stack Engineer</p>
            <p className="text-slate-500 text-[10px]">alex.morgan@careeros.app | Berlin, Germany | github.com/alexmorgan</p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">Professional Summary</h2>
            <p className="text-slate-700 leading-relaxed">{summary}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
