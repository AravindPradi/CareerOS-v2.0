'use client';

import React, { useState } from 'react';
import { Mic, Video, Sparkles, CheckCircle2, RefreshCw, Volume2, Award } from 'lucide-react';

export default function InterviewSimulatorPage() {
  const [role, setRole] = useState('Senior Full Stack Engineer');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<null | { score: number; strengths: string[]; improvements: string }>(null);

  const questions = [
    {
      q: 'How do you design a high-throughput real-time notification service in Next.js 15 and Django with Redis?',
      category: 'System Design',
    },
    {
      q: 'Explain the difference between React 19 Server Components and Client Components in terms of bundle size & data fetching.',
      category: 'Frontend Deep Dive',
    },
  ];

  const handleEvaluate = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setFeedback({
        score: 92,
        strengths: [
          'Strong emphasis on Redis Pub/Sub architecture',
          'Accurate explanation of SSR server actions vs client hooks',
        ],
        improvements: 'Mention database query caching with PostgreSQL indexes for extra polish.',
      });
    }, 1200);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-semibold text-violet-300 mb-2">
            <Mic className="h-3.5 w-3.5 text-violet-400" /> AI Voice & Text Simulator
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">AI Interview Simulator</h1>
          <p className="text-xs text-slate-400">Practice role-specific mock interviews with instant AI speech & answer scoring.</p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-xs font-bold uppercase text-violet-400">{questions[currentQIndex].category}</span>
          <span className="text-xs text-slate-400">Question {currentQIndex + 1} of {questions.length}</span>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/90 border border-violet-500/30 space-y-3">
          <h2 className="text-lg font-bold text-white">{questions[currentQIndex].q}</h2>
          <button className="text-xs font-semibold text-indigo-400 flex items-center gap-1">
            <Volume2 className="h-4 w-4" /> Listen to AI Interviewer Audio
          </button>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-bold uppercase text-slate-300 block">Your Answer Response</label>
          <textarea
            rows={5}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your response or click Record Voice Answer..."
            className="w-full p-4 rounded-2xl glass-input text-xs leading-relaxed focus:outline-none"
          />
          <div className="flex justify-between items-center">
            <button className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2">
              <Mic className="h-4 w-4 text-rose-400" /> Record Voice Answer
            </button>
            <button
              onClick={handleEvaluate}
              disabled={isEvaluating}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2"
            >
              {isEvaluating ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              Evaluate Answer
            </button>
          </div>
        </div>

        {feedback && (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <Award className="h-4 w-4" /> AI Answer Score
              </span>
              <span className="text-xl font-extrabold text-emerald-400">{feedback.score} / 100</span>
            </div>
            <p className="text-xs text-slate-300"><strong>Strengths:</strong> {feedback.strengths.join(', ')}</p>
            <p className="text-xs text-slate-400"><strong>Tip:</strong> {feedback.improvements}</p>
          </div>
        )}
      </div>
    </div>
  );
}
