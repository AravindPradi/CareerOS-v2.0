# API Documentation - CareerOS (OpenAPI 3.0 Standard)

## Base URL: `https://api.careeros.app/v1`

---

## 1. Authentication Endpoints

### `POST /auth/register/`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "SecurePassword123!",
    "first_name": "Alex",
    "last_name": "Morgan"
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "user": { "id": "uuid", "email": "user@example.com" },
    "access": "jwt_access_token",
    "refresh": "jwt_refresh_token"
  }
  ```

### `POST /auth/otp/send/`
- **Description:** Request Email or Mobile OTP code.
- **Request Body:** `{ "identifier": "+919876543210", "type": "MOBILE" }`

---

## 2. ATS Center Endpoints

### `POST /ats/analyze/`
- **Description:** Perform ATS score scanning and keyword heatmap generation.
- **Request Body (Multipart):**
  - `file`: Resume PDF/DOCX
  - `job_description`: Target Job Description text
  - `target_role`: Target job title string
- **Response (200 OK):**
  ```json
  {
    "ats_score": 84,
    "matching_keywords": ["React", "TypeScript", "Next.js", "REST APIs"],
    "missing_keywords": ["GraphQL", "Docker", "Jest"],
    "formatting_issues": [],
    "suggestions": [
      "Add Docker under Technical Skills",
      "Mention automated testing metrics in experience section"
    ]
  }
  ```

---

## 3. Flagship Feature Endpoints

### `POST /one-click-apply/generate/`
- **Description:** Synthesize full application pack from job URL/description.
- **Request Body:**
  ```json
  {
    "job_url": "https://linkedin.com/jobs/view/123456",
    "resume_id": "optional-uuid"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "pack_id": "uuid",
    "tailored_resume_text": "...",
    "europass_cv_xml": "...",
    "cover_letter": "...",
    "hr_email_draft": "...",
    "interview_questions": [
      { "question": "Explain React 19 server actions vs client side hooks.", "category": "Technical" }
    ],
    "skill_gap_report": { "gap_score": 12, "critical_missing": ["Kubernetes"] }
  }
  ```

### `GET /career-gps/daily-missions/`
- **Description:** Fetch user's active daily career missions & streak metrics.
- **Response (200 OK):**
  ```json
  {
    "streak_count": 7,
    "career_score": 780,
    "missions": [
      { "id": "m1", "title": "Apply to 5 jobs", "points": 50, "is_completed": true },
      { "id": "m2", "title": "Improve ATS score by 10%", "points": 100, "is_completed": false },
      { "id": "m3", "title": "Complete 1 interview simulation", "points": 75, "is_completed": false }
    ]
  }
  ```

### `POST /migration/calculate/`
- **Description:** Comparative international relocation analysis.
- **Request Body:** `{ "target_countries": ["Germany", "Poland", "Netherlands"], "current_role": "Senior Frontend Engineer" }`
- **Response (200 OK):** Detailed breakdown of visa eligibility, salary benchmark, and living expenses index per country.

---

## 4. Payment Endpoints

### `POST /billing/razorpay/create-order/`
- **Description:** Initiate ₹49/month subscription checkout.
- **Response (200 OK):** `{ "order_id": "order_123456", "amount": 4900, "currency": "INR" }`
