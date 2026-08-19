# Database Schema Document - CareerOS

## 1. Entity-Relationship Overview

The database uses PostgreSQL 16 with strict foreign key constraints, indexes on high-query fields (`user_id`, `created_at`, `status`), and JSONB support for dynamic ATS heatmaps and AI feedback payloads.

---

## 2. Table Schemas & DDL SQL

### 2.1 Users & Authentication (`users_user`)
```sql
CREATE TABLE users_user (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    is_staff BOOLEAN DEFAULT FALSE,
    is_superuser BOOLEAN DEFAULT FALSE,
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_users_email ON users_user(email);
```

### 2.2 User Profiles & Preferences (`users_profile`)
```sql
CREATE TABLE users_profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES users_user(id) ON DELETE CASCADE,
    target_role VARCHAR(150),
    target_industry VARCHAR(150),
    experience_level VARCHAR(50), -- Junior, Mid, Senior, Lead
    preferred_location VARCHAR(100),
    target_country VARCHAR(100), -- Germany, Poland, Netherlands, etc.
    career_score INT DEFAULT 500, -- 0 to 1000
    streak_count INT DEFAULT 0,
    last_active_date DATE,
    subscription_tier VARCHAR(20) DEFAULT 'FREE', -- FREE, PREMIUM
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 2.3 Resumes (`resumes_resume`)
```sql
CREATE TABLE resumes_resume (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users_user(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    template_name VARCHAR(50) DEFAULT 'modern_sleek',
    content_json JSONB NOT NULL, -- Sections: summary, experience, skills, education
    file_url VARCHAR(500),
    is_master BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 2.4 ATS Scans (`ats_scans`)
```sql
CREATE TABLE ats_scans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users_user(id) ON DELETE CASCADE,
    resume_id UUID REFERENCES resumes_resume(id) ON DELETE SET NULL,
    target_role VARCHAR(150) NOT NULL,
    job_description TEXT NOT NULL,
    ats_score INT NOT NULL, -- 0 to 100
    matching_keywords JSONB NOT NULL,
    missing_keywords JSONB NOT NULL,
    formatting_issues JSONB NOT NULL,
    improvement_suggestions JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 2.5 Job Applications Kanban (`applications_jobapplication`)
```sql
CREATE TABLE applications_jobapplication (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users_user(id) ON DELETE CASCADE,
    company_name VARCHAR(200) NOT NULL,
    job_title VARCHAR(200) NOT NULL,
    location VARCHAR(150),
    country VARCHAR(100),
    salary_range VARCHAR(100),
    job_url VARCHAR(500),
    stage VARCHAR(50) DEFAULT 'SAVED', -- SAVED, APPLIED, INTERVIEW, OFFER, REJECTED
    applied_date DATE,
    rejection_reason VARCHAR(100), -- MISSING_KEYWORDS, SALARY_MISMATCH, VISA_ISSUE, SKILL_GAP
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_apps_user_stage ON applications_jobapplication(user_id, stage);
```

### 2.6 Daily GPS Missions (`career_gps_mission`)
```sql
CREATE TABLE career_gps_mission (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users_user(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL, -- APPLY, ATS, INTERVIEW, LINKEDIN
    points INT DEFAULT 50,
    is_completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP WITH TIME ZONE,
    date_assigned DATE DEFAULT CURRENT_DATE
);
```

### 2.7 One Click Apply Packs (`applications_oneclickpack`)
```sql
CREATE TABLE applications_oneclickpack (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users_user(id) ON DELETE CASCADE,
    job_url VARCHAR(500) NOT NULL,
    company_name VARCHAR(200) NOT NULL,
    job_title VARCHAR(200) NOT NULL,
    tailored_resume_text TEXT NOT NULL,
    europass_cv_xml TEXT NOT NULL,
    cover_letter_text TEXT NOT NULL,
    hr_email_draft TEXT NOT NULL,
    interview_questions JSONB NOT NULL,
    skill_gap_report JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 2.8 Migration Path Logs (`migration_pathway`)
```sql
CREATE TABLE migration_pathway (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users_user(id) ON DELETE CASCADE,
    target_country VARCHAR(100) NOT NULL, -- Poland, Germany, Czechia, etc.
    eligibility_score INT NOT NULL,
    visa_pathway VARCHAR(150) NOT NULL,
    cost_index JSONB NOT NULL,
    salary_benchmark JSONB NOT NULL,
    requirements JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 2.9 Subscriptions & Billing (`billing_subscription`)
```sql
CREATE TABLE billing_subscription (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES users_user(id) ON DELETE CASCADE,
    razorpay_customer_id VARCHAR(100),
    razorpay_subscription_id VARCHAR(100),
    status VARCHAR(50) DEFAULT 'ACTIVE', -- ACTIVE, CANCELLED, EXPIRED
    plan_name VARCHAR(50) DEFAULT 'PREMIUM_MONTHLY', -- ₹49/month
    amount_inr NUMERIC(10, 2) DEFAULT 49.00,
    current_period_start TIMESTAMP WITH TIME ZONE,
    current_period_end TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
