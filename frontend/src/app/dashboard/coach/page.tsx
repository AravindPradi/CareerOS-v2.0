'use client';

import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, MessageSquare } from 'lucide-react';
import { mockUser } from '@/lib/mockData';

export default function AICareerCoachPage() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello ${mockUser.name}! I am your AI Career Coach. Ask me anything about salary negotiation, resume positioning, interview tactics, or relocation strategies.`,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Here is my strategic advice: For a Senior Full Stack Engineer role targeting Germany or Netherlands, benchmark your salary at €80,000 - €95,000. Highlight Next.js 15, React 19, and Python microservices in your headline for maximum recruiter search visibility.`,
        },
      ]);
    }, 800);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-2">
            <Bot className="h-3.5 w-3.5 text-indigo-400" /> 24/7 AI Companion
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">AI Career Coach</h1>
          <p className="text-xs text-slate-400">Personalized career advice, salary negotiation scripts, and resume critiques.</p>
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl max-w-4xl mx-auto flex flex-col h-[550px] justify-between">
        
        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`p-2 rounded-xl text-white font-bold text-xs ${
                  msg.sender === 'user' ? 'bg-indigo-600' : 'bg-slate-800 text-cyan-400'
                }`}
              >
                {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              <div
                className={`p-4 rounded-2xl text-xs leading-relaxed max-w-lg ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600/30 border border-indigo-500/40 text-white'
                    : 'bg-slate-900/90 border border-white/10 text-slate-200'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="pt-4 border-t border-white/10 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your AI Career Coach..."
            className="flex-1 px-4 py-3 rounded-xl glass-input text-xs text-white focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-600/30"
          >
            <Send className="h-4 w-4" /> Send
          </button>
        </div>

      </div>
    </div>
  );
}
