import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CareerOS - The AI Career Operating System',
  description:
    'Maximize your global job conversion with CareerOS. Guided AI workflows: Self Assessment → Resume Building → ATS Optimization → Job Discovery → Application Tracking → Interview Prep → Offer Management → Career Growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
