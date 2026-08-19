'use client';

import React from 'react';

export const ScoreGauge = ({
  score,
  max = 100,
  label = 'ATS Score',
  size = 120,
}: {
  score: number;
  max?: number;
  label?: string;
  size?: number;
}) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(Math.max(score / max, 0), 1);
  const strokeDashoffset = circumference - percentage * circumference;

  let colorClass = 'stroke-indigo-500';
  if (percentage < 0.6) colorClass = 'stroke-rose-500';
  else if (percentage < 0.8) colorClass = 'stroke-amber-500';
  else colorClass = 'stroke-emerald-400';

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          {/* Track Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-slate-800"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Score Indicator Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={`${colorClass} transition-all duration-1000 ease-out`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold tracking-tight text-white">{score}</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">/ {max}</span>
        </div>
      </div>

      {label && <span className="mt-2 text-xs font-semibold text-slate-300">{label}</span>}
    </div>
  );
};
