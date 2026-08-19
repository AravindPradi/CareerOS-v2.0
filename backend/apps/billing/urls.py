from django.urls import path
from .views import CreateRazorpayOrderView, VerifyRazorpayPaymentView, RazorpayWebhookView

urlpatterns = [
    path('razorpay/create-order/', CreateRazorpayOrderView.as_view(), name='razorpay_create_order'),
    path('razorpay/verify-payment/', VerifyRazorpayPaymentView.as_view(), name='razorpay_verify_payment'),
    path('razorpay/webhook/', RazorpayWebhookView.as_view(), name='razorpay_webhook'),
]
