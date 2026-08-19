from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .openai_service import OpenAIService

ai_service = OpenAIService()

class ATSAnalyzeView(APIView):
    def post(self, request):
        resume_text = request.data.get('resume_text', '')
        job_description = request.data.get('job_description', '')
        target_role = request.data.get('target_role', 'Full Stack Engineer')

        if not job_description:
            return Response({"error": "job_description is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            result = ai_service.analyze_ats(resume_text, job_description, target_role)
            return Response(result, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class OneClickPackView(APIView):
    def post(self, request):
        job_url_or_description = request.data.get('job_url', request.data.get('job_description', ''))
        candidate_summary = request.data.get('candidate_summary', 'Senior Full Stack Engineer React TypeScript Django')

        if not job_url_or_description:
            return Response({"error": "job_url or job_description is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            result = ai_service.generate_one_click_pack(job_url_or_description, candidate_summary)
            return Response(result, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RejectionAnalysisView(APIView):
    def post(self, request):
        rejection_history = request.data.get('rejection_history', [])
        try:
            result = ai_service.analyze_rejections(rejection_history)
            return Response(result, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class WhyNotMeView(APIView):
    def post(self, request):
        resume_text = request.data.get('resume_text', '')
        job_description = request.data.get('job_description', '')

        try:
            result = ai_service.analyze_why_not_me(resume_text, job_description)
            return Response(result, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class InterviewEvaluateView(APIView):
    def post(self, request):
        question = request.data.get('question', '')
        user_answer = request.data.get('user_answer', '')

        try:
            result = ai_service.evaluate_interview_answer(question, user_answer)
            return Response(result, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CoachChatView(APIView):
    def post(self, request):
        message = request.data.get('message', '')

        try:
            result = ai_service.career_coach_chat(message)
            return Response(result, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LinkedInOptimizeView(APIView):
    def post(self, request):
        profile_summary = request.data.get('profile_summary', '')
        target_role = request.data.get('target_role', 'Senior Full Stack Engineer')

        try:
            result = ai_service.optimize_linkedin(profile_summary, target_role)
            return Response(result, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
