import json
import os
from openai import OpenAI

class OpenAIService:
    def __init__(self):
        api_key = os.environ.get('OPENAI_API_KEY')
        self.model = os.environ.get('OPENAI_MODEL', 'gpt-4o-mini')
        if api_key:
            self.client = OpenAI(api_key=api_key)
        else:
            self.client = None

    def _call_llm(self, system_prompt: str, user_prompt: str, json_mode: bool = True):
        if not self.client:
            raise ValueError("OpenAI API key is missing or invalid in environment.")

        kwargs = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            "temperature": 0.3
        }

        if json_mode:
            kwargs["response_format"] = {"type": "json_object"}

        response = self.client.chat.completions.create(**kwargs)
        content = response.choices[0].message.content

        if json_mode:
            try:
                return json.loads(content)
            except Exception:
                return {"raw_output": content}
        return content

    def analyze_ats(self, resume_text: str, job_description: str, target_role: str):
        system_prompt = (
            "You are an expert ATS (Applicant Tracking System) parser and resume optimizer. "
            "Analyze the resume against the target job description and return JSON with keys: "
            "ats_score (integer 0-100), matching_keywords (list of strings), missing_keywords (list of strings), "
            "formatting_score (integer 0-100), suggestions (list of string action items), "
            "and heatmap (list of objects with keyword, countInResume, expectedCount)."
        )
        user_prompt = f"Target Role: {target_role}\n\nJob Description:\n{job_description}\n\nCandidate Resume:\n{resume_text}"
        return self._call_llm(system_prompt, user_prompt, json_mode=True)

    def generate_one_click_pack(self, job_url_or_description: str, candidate_summary: str):
        system_prompt = (
            "You are CareerOS One-Click Apply Pack AI Generator. Synthesize a complete application pack. "
            "Return JSON with keys: "
            "tailored_resume (string text), europass_cv_xml (string XML representation), "
            "cover_letter (string text), hr_email_draft (string text), "
            "predicted_questions (list of objects with question, category, tip), "
            "skill_gap_report (object with current_match percentage and missing_skills list)."
        )
        user_prompt = f"Job Posting / URL:\n{job_url_or_description}\n\nCandidate Summary:\n{candidate_summary}"
        return self._call_llm(system_prompt, user_prompt, json_mode=True)

    def analyze_rejections(self, rejection_history_json: list):
        system_prompt = (
            "You are the CareerOS Rejection Intelligence Engine. Analyze candidate application rejections "
            "and return JSON with keys: "
            "primary_bottleneck (string), failure_distribution (object with category keys and percentage values), "
            "action_matrix (list of 5 step object items with step, title, description)."
        )
        user_prompt = f"Application Rejection History:\n{json.dumps(rejection_history_json)}"
        return self._call_llm(system_prompt, user_prompt, json_mode=True)

    def analyze_why_not_me(self, resume_text: str, job_description: str):
        system_prompt = (
            "You are CareerOS Why Not Me Candidate Gap Analyzer. Compare candidate resume to JD. "
            "Return JSON with keys: match_percentage (integer 0-100), candidate_status (string), "
            "high_impact_fixes (list of 3 objects with fix_number, title, description)."
        )
        user_prompt = f"Job Description:\n{job_description}\n\nCandidate Resume:\n{resume_text}"
        return self._call_llm(system_prompt, user_prompt, json_mode=True)

    def evaluate_interview_answer(self, question: str, user_answer: str):
        system_prompt = (
            "You are CareerOS AI Mock Interview Evaluator. "
            "Return JSON with keys: score (integer 0-100), strengths (list of strings), "
            "improvements (string), model_answer (string)."
        )
        user_prompt = f"Interview Question:\n{question}\n\nUser Response:\n{user_answer}"
        return self._call_llm(system_prompt, user_prompt, json_mode=True)

    def career_coach_chat(self, user_message: str):
        system_prompt = (
            "You are CareerOS AI Career Coach. Provide concise, expert, strategic advice "
            "on job hunting, salary negotiation, resume optimization, and international relocation."
        )
        return {"response": self._call_llm(system_prompt, user_message, json_mode=False)}

    def optimize_linkedin(self, profile_summary: str, target_role: str):
        system_prompt = (
            "You are CareerOS LinkedIn Optimizer. "
            "Return JSON with keys: searchability_score (integer 0-100), "
            "optimized_headline (string), optimized_summary (string), search_keywords (list of strings)."
        )
        user_prompt = f"Target Role: {target_role}\n\nCurrent LinkedIn Info:\n{profile_summary}"
        return self._call_llm(system_prompt, user_prompt, json_mode=True)
