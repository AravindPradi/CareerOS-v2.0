'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Briefcase, Globe, Zap, Filter, ArrowRight, ShieldCheck } from 'lucide-react';
import { sampleApplications } from '@/lib/mockData';

export default function JobFinderPage() {
  const [searchTerm, setSearchTerm] = useState('Full Stack Engineer');
  const [locationFilter, setLocationFilter] = useState('Europe');

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-2">
            <Search className="h-3.5 w-3.5 text-indigo-400" /> AI Job Discovery Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Global Job Finder & Match Scorer</h1>
          <p className="text-xs text-slate-400">Discover top verified tech postings with visa sponsorship indicators and pre-computed match scores.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="h-4 w-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Role, skill, or technology..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm text-white focus:outline-none"
          />
        </div>
        <div className="relative sm:w-64">
          <MapPin className="h-4 w-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            placeholder="Location / Region..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Job Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleApplications.map((job, idx) => (
          <div key={job.id} className="glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between hover:scale-[1.02] transition-transform">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white">{job.companyName}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold text-xs border border-emerald-500/20">
                  {88 - idx * 4}% Match
                </span>
              </div>
              <h3 className="text-base font-bold text-white leading-tight">{job.jobTitle}</h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-indigo-400" /> {job.location}
              </p>
              <p className="text-xs font-semibold text-slate-300 mt-2">{job.salary}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" /> Visa Sponsoring
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  Full Time
                </span>
              </div>
            </div>

            <Link
              href="/dashboard/one-click"
              className="w-full py-2.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-500/40 text-center font-bold text-xs text-white transition-all flex items-center justify-center gap-1.5"
            >
              <Zap className="h-3.5 w-3.5 text-cyan-400" /> One Click Apply Pack
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
