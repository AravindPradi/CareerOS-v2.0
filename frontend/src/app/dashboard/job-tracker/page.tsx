'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutGrid, Plus, MoreHorizontal, ShieldAlert, ArrowRight } from 'lucide-react';
import { sampleApplications } from '@/lib/mockData';
import { JobApplication } from '@/types';

const stages: { label: string; key: JobApplication['stage']; color: string }[] = [
  { label: 'Saved Jobs', key: 'SAVED', color: 'border-slate-500 text-slate-300' },
  { label: 'Applied', key: 'APPLIED', color: 'border-indigo-500 text-indigo-400' },
  { label: 'Interviewing', key: 'INTERVIEW', color: 'border-cyan-500 text-cyan-400' },
  { label: 'Offers Received', key: 'OFFER', color: 'border-emerald-500 text-emerald-400' },
  { label: 'Rejections', key: 'REJECTED', color: 'border-rose-500 text-rose-400' },
];

export default function JobTrackerPage() {
  const [apps, setApps] = useState<JobApplication[]>(sampleApplications);

  const moveStage = (id: string, newStage: JobApplication['stage']) => {
    setApps((prev) => prev.map((a) => (a.id === id ? { ...a, stage: newStage } : a)));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-2">
            <LayoutGrid className="h-3.5 w-3.5 text-indigo-400" /> Pipeline Management
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Application Kanban Board</h1>
          <p className="text-xs text-slate-400">Track application stages, interview dates, and automatically feed rejections to Rejection Intelligence.</p>
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-600/30">
          <Plus className="h-4 w-4" /> Add Application
        </button>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
        {stages.map((stg) => {
          const colApps = apps.filter((a) => a.stage === stg.key);

          return (
            <div key={stg.key} className="glass-card p-4 rounded-3xl space-y-3 min-w-[220px] flex flex-col justify-between">
              <div>
                <div className={`flex items-center justify-between border-b pb-2 mb-3 ${stg.color}`}>
                  <span className="text-xs font-bold uppercase">{stg.label}</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-white">
                    {colApps.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {colApps.map((app) => (
                    <div key={app.id} className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{app.companyName}</span>
                        <span className="text-[10px] text-slate-400">{app.appliedDate}</span>
                      </div>
                      <p className="text-slate-300 font-medium truncate">{app.jobTitle}</p>
                      <p className="text-[10px] text-slate-500">{app.location}</p>

                      {app.stage === 'REJECTED' && (
                        <Link
                          href="/dashboard/rejection"
                          className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded border border-rose-500/20"
                        >
                          <ShieldAlert className="h-3 w-3" /> Analyze Rejection →
                        </Link>
                      )}

                      {/* Quick Move Trigger */}
                      <div className="pt-2 flex justify-end gap-1 text-[10px]">
                        {stg.key !== 'INTERVIEW' && (
                          <button
                            onClick={() => moveStage(app.id, 'INTERVIEW')}
                            className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40"
                          >
                            → Interview
                          </button>
                        )}
                        {stg.key !== 'OFFER' && (
                          <button
                            onClick={() => moveStage(app.id, 'OFFER')}
                            className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/40"
                          >
                            → Offer
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
