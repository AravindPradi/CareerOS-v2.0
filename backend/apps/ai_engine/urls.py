from django.urls import path
from .views import (
    ATSAnalyzeView,
    OneClickPackView,
    RejectionAnalysisView,
    WhyNotMeView,
    InterviewEvaluateView,
    CoachChatView,
    LinkedInOptimizeView,
)

urlpatterns = [
    path('ats-scan/', ATSAnalyzeView.as_view(), name='ai_ats_scan'),
    path('one-click-pack/', OneClickPackView.as_view(), name='ai_one_click_pack'),
    path('rejection-analysis/', RejectionAnalysisView.as_view(), name='ai_rejection_analysis'),
    path('why-not-me/', WhyNotMeView.as_view(), name='ai_why_not_me'),
    path('interview-evaluate/', InterviewEvaluateView.as_view(), name='ai_interview_evaluate'),
    path('coach-chat/', CoachChatView.as_view(), name='ai_coach_chat'),
    path('linkedin-optimize/', LinkedInOptimizeView.as_view(), name='ai_linkedin_optimize'),
]
