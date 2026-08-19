'use client';

import React, { useState } from 'react';
import { Globe, Download, Check, Sparkles } from 'lucide-react';

export default function EuropassGeneratorPage() {
  const [lang, setLang] = useState('English');

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
            <Globe className="h-3.5 w-3.5 text-cyan-400" /> Official EU Standard Format
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Europass CV Generator</h1>
          <p className="text-xs text-slate-400">Generate fully compliant European Union Europass CVs required by employers in Germany, Poland, Netherlands, and Czechia.</p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="px-3 py-2 rounded-xl glass-input text-xs font-semibold"
          >
            <option value="English">Language: English</option>
            <option value="German">Language: Deutsch</option>
            <option value="Polish">Language: Polski</option>
          </select>
          <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-600/30">
            <Download className="h-4 w-4" /> Export Europass XML/PDF
          </button>
        </div>
      </div>

      <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-blue-600/30">
              EU
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Europass Curriculum Vitae</h2>
              <p className="text-xs text-slate-400">Official European Commission Schema v3.0</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs border border-emerald-500/20">
            ✓ 100% EU Blue Card Compliant
          </span>
        </div>

        <div className="space-y-4 text-xs text-slate-300">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
            <p className="font-bold text-white text-sm">PERSONAL INFORMATION</p>
            <p>Alex Morgan | Nationality: Non-EU (EU Work Visa Eligible)</p>
            <p>Languages: English (C2 Native/Proficient), German (B1 Intermediate)</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
            <p className="font-bold text-white text-sm">WORK EXPERIENCE</p>
            <p className="font-semibold text-cyan-400">Senior Full Stack Engineer @ CareerOS Inc.</p>
            <p className="text-slate-400">2023 - Present | Remote / Global</p>
            <p className="mt-2">Architected high-scale Next.js 15 and Django microservices serving 100,000+ active job seekers across Europe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
