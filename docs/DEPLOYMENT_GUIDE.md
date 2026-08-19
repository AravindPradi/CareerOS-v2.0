# Deployment Guide & DevOps - CareerOS

## 1. Local Containerized Setup (Docker Compose)

### Prerequisites
- Docker Engine v24+ and Docker Compose v2.20+
- Node.js 20+ and Python 3.12 (for local development outside containers)

### Quickstart Command
```bash
# 1. Clone repository
git clone https://github.com/careeros/careeros-app.git
cd careeros-app

# 2. Copy environment variable template
cp .env.example .env

# 3. Spin up complete stack (Frontend, Backend, Postgres, Redis, Celery, Nginx)
docker-compose up -d --build

# 4. Run database migrations and seed data
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py seed_demo_data
```

---

## 2. Production Docker Architecture

### `docker-compose.yml` Services
1. **`frontend`**: Next.js 15 SSR Node production server listening on port 3000.
2. **`backend`**: Gunicorn WSGI server running Django 5 REST API on port 8000.
3. **`celery_worker`**: Celery asynchronous background worker processing ATS and AI pipelines.
4. **`postgres`**: PostgreSQL 16 relational database with volume persistence (`pgdata`).
5. **`redis`**: Redis 7.2 memory cache and Celery broker.
6. **`nginx`**: Nginx reverse proxy routing `/api/` to Gunicorn and `/` to Next.js with SSL certificates.

---

## 3. Environment Variables Reference (`.env`)

```env
# General
ENVIRONMENT=production
SECRET_KEY=super-secret-django-production-key
DEBUG=False
ALLOWED_HOSTS=careeros.app,api.careeros.app,localhost

# Database
POSTGRES_DB=careeros_db
POSTGRES_USER=careeros_admin
POSTGRES_PASSWORD=secure_postgres_pass
POSTGRES_HOST=postgres
POSTGRES_PORT=5432

# Redis & Celery
REDIS_URL=redis://redis:6379/0

# AWS S3 Storage
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_STORAGE_BUCKET_NAME=careeros-user-assets
AWS_S3_REGION_NAME=us-east-1

# Payments (Razorpay)
RAZORPAY_KEY_ID=rzp_live_key_id
RAZORPAY_KEY_SECRET=rzp_live_key_secret
RAZORPAY_WEBHOOK_SECRET=webhook_secret_key

# OAuth Providers
GOOGLE_CLIENT_ID=google_oauth_client_id
GOOGLE_CLIENT_SECRET=google_oauth_secret
LINKEDIN_CLIENT_ID=linkedin_client_id
LINKEDIN_CLIENT_SECRET=linkedin_secret
```

---

## 4. GitHub Actions CI/CD Pipeline (`.github/workflows/ci.yml`)

The repository includes automated CI/CD workflows:
- **Build Verification:** Compiles TypeScript Next.js app and checks Django syntax.
- **Automated Tests:** Executes Jest frontend component tests and PyTest backend API specs.
- **Docker Image Build & Push:** Builds multi-architecture Docker images and pushes to GitHub Container Registry (GHCR) on release tags.
- **Zero-Downtime Deployment:** Triggers SSH deployment webhook to reload production containers cleanly.
