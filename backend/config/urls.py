from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def health_check(request):
    return JsonResponse({
        "status": "healthy",
        "service": "CareerOS Backend Engine API v1",
        "version": "1.0.0",
        "ai_engine": "OpenAI Live Integration (gpt-4o-mini / gpt-4o)",
        "payment_gateway": "Razorpay Live Integration (rzp_live_TPcpT8ogtE5Q3J)",
        "features": [
            "ATS Engine",
            "Career GPS",
            "One Click Apply Pack",
            "Why Not Me Analyzer",
            "Rejection Intelligence Engine",
            "Migration Path Generator",
            "Razorpay Subscriptions (₹49/mo)"
        ]
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/health/', health_check, name='health_check'),
    path('api/v1/ai/', include('apps.ai_engine.urls')),
    path('api/v1/billing/', include('apps.billing.urls')),
]
