# UI Design System - CareerOS Glassmorphism & Token System

## 1. Aesthetic Philosophy
CareerOS adopts a **Glassmorphism Apple/Linear-inspired SaaS aesthetic**:
- **Deep Obsidian Dark Mode:** Core backdrop `#090d16` with semi-transparent elevated glass layers (`rgba(15, 23, 42, 0.75)` with `backdrop-filter: blur(16px)`).
- **Vibrant Accent Spectrum:** Sleek Electric Indigo (`#6366f1`), Cyan Glow (`#06b6d4`), Emerald Success (`#10b981`), and Violet Shimmer (`#8b5cf6`).
- **Tactile Depth:** Subtle 1px borders with low opacity white (`rgba(255, 255, 255, 0.1)`), soft ambient box shadows, and smooth hover elevation.
- **Typography:** Inter & Outfit sans-serif variable fonts with crisp weight contrast.

---

## 2. Color Palette & CSS Tokens

```css
:root {
  /* Dark Mode Palette */
  --bg-main: #090d16;
  --bg-surface-glass: rgba(15, 23, 42, 0.7);
  --bg-surface-card: rgba(30, 41, 59, 0.5);
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-glass-hover: rgba(99, 102, 241, 0.3);
  
  /* Primary Accent Colors */
  --accent-primary: #6366f1; /* Electric Indigo */
  --accent-cyan: #06b6d4;    /* Cyan Glow */
  --accent-violet: #8b5cf6;  /* Violet Glow */
  --accent-emerald: #10b981; /* Success Green */
  --accent-rose: #f43f5e;    /* Rejection Alert */
  
  /* Text Token System */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
}

/* Light Mode Override Tokens */
.light {
  --bg-main: #f8fafc;
  --bg-surface-glass: rgba(255, 255, 255, 0.85);
  --bg-surface-card: rgba(241, 245, 249, 0.8);
  --border-glass: rgba(0, 0, 0, 0.08);
  --text-primary: #0f172a;
  --text-secondary: #475569;
}
```

---

## 3. UI Component Patterns
- **Glass Cards:** High-level surface container with light inner gradient and backdrop blur.
- **Live ATS Score Gauge:** Circular SVG gauge with animated stroke offset and dynamic color gradient (Red <60%, Yellow 60-80%, Green >80%).
- **Interactive Kanban Board:** Smooth drag-and-drop state indicators for application stages.
- **Mission Streak Pills:** Flame animated badge counter with active glow.
- **Micro-Animations:** Framer Motion spring physics on button clicks, card hover scale (`scale: 1.02`), and tab transitions.
