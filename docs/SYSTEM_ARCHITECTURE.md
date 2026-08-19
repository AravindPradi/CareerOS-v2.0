# System Architecture Document - CareerOS

## 1. Architectural Overview

CareerOS uses a high-performance decoupled multi-layer micro-services architecture designed for sub-second API response times, high AI processing throughput, and horizontal scalability.

```
                  ┌───────────────────────────────────────────────┐
                  │          Next.js 15 App Router Frontend       │
                  │  (TypeScript, Tailwind CSS, Framer Motion)    │
                  └───────────────────────┬───────────────────────┘
                                          │ HTTPS / REST / WebSockets
                                          ▼
                  ┌───────────────────────────────────────────────┐
                  │             Nginx Reverse Proxy & SSL         │
                  └───────────────────────┬───────────────────────┘
                                          │
                   ┌──────────────────────┴──────────────────────┐
                   ▼                                             ▼
       ┌──────────────────────────────┐              ┌───────────────────────────┐
       │   Django 5 REST API Gateway   │              │   Static & Media Assets   │
       │   (Python 3.12 / DRF Core)   │              │     (AWS S3 Bucket)       │
       └──────────────┬───────────────┘              └───────────────────────────┘
                      │
        ┌─────────────┼─────────────────────────────┐
        ▼             ▼                             ▼
┌──────────────┐ ┌──────────────┐            ┌──────────────┐
│ PostgreSQL   │ │ Redis        │            │ Celery       │
│ Database     │ │ Cache &      │───────────>│ Background   │
│ (Primary DB) │ │ Broker       │            │ Task Workers │
└──────────────┘ └──────────────┘            └──────┬───────┘
                                                    │
                                                    ▼
                                           ┌─────────────────┐
                                           │ AI Engine & PDF │
                                           │ Generators      │
                                           └─────────────────┘
```

---

## 2. Component Specifications

### 2.1 Frontend Architecture (Next.js 15)
- **Framework:** Next.js 15 App Router with React 19 server/client components.
- **Styling & Aesthetics:** Custom Glassmorphism CSS design system, Tailwind CSS, Framer Motion micro-animations, Lucide React icons.
- **State Management:** React Query (TanStack Query) for server state caching & optimistic UI updates; Zustand for global client UI state (theme, active mission, drawer state).
- **Authentication Handling:** Client-side JWT auto-refresh interceptors, OAuth redirect handlers, and Session storage synchronization.

### 2.2 Backend Service (Django 5 & DRF)
- **Framework:** Django 5.0 with Django REST Framework (DRF) 3.15 running on Python 3.12.
- **Authentication:** `djangorestframework-simplejwt` with 15-minute access token lifespan and 7-day refresh token lifespan.
- **Security:** Rate limiting via DRF throttling (`AnonRateThrottle`, `UserRateThrottle`), CORS headers management, CSRF middleware, input sanitization via serializers.

### 2.3 Async Background Task Queue (Celery & Redis)
- **Task Broker & Cache:** Redis 7.2 handling session caching, rate-limit counters, and Celery task queues.
- **Celery Workers:** Dedicated worker nodes processing heavy computation out-of-band:
  - `tasks.process_ats_scan`: PDF parsing, TF-IDF keyword extraction, vector similarity scoring.
  - `tasks.generate_one_click_pack`: Asynchronous generation of tailored Resume, Europass XML, Cover Letter, HR Email, and Interview Q&A.
  - `tasks.run_rejection_analytics`: Application failure pattern recognition & action matrix creation.
  - `tasks.sync_daily_gps_missions`: Nightly cron cronjob generating personalized missions per user.

### 2.4 External Service Integrations
- **Payment Processing:** Razorpay API for subscription checkout, webhooks, and subscription lifecycle management.
- **Cloud Storage:** AWS S3 (or S3-compatible Blob Storage) with presigned URLs for secure resume/document storage.
- **AI Processing Engine:** Multi-model fallback LLM pipeline for resume optimization, cover letter generation, and mock interview evaluation.

---

## 3. Data Flow & Security Sequence

```
User App  --->  Nginx Proxy  --->  Django API (JWT Check)  ---> Redis (Cache Check)
                                        │
                                        ├── DB Query ---> PostgreSQL
                                        │
                                        └── Async Job ---> Celery Worker ---> S3 / AI Engine
```

### Security & Privacy Protections
1. **At-Rest Encryption:** User resumes and documents encrypted using AES-256 before S3 storage.
2. **In-Transit Encryption:** Mandatory TLS 1.3 across all HTTP and WebSocket connections.
3. **Data Isolation:** Row-Level Security (RLS) policies and DRF queryset filters guaranteeing users can only access their owned artifacts.
