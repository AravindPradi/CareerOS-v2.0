from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .razorpay_service import RazorpayService

razorpay_service = RazorpayService()

class CreateRazorpayOrderView(APIView):
    def post(self, request):
        amount = request.data.get('amount', 49.00)
        try:
            order = razorpay_service.create_order(amount_inr=float(amount))
            return Response({
                "order_id": order.get("id"),
                "amount": order.get("amount"),
                "currency": order.get("currency"),
                "key_id": razorpay_service.key_id,
                "status": order.get("status")
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class VerifyRazorpayPaymentView(APIView):
    def post(self, request):
        order_id = request.data.get('razorpay_order_id')
        payment_id = request.data.get('razorpay_payment_id')
        signature = request.data.get('razorpay_signature')

        if not (order_id and payment_id and signature):
            return Response({"error": "Missing order_id, payment_id, or signature"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            verified = razorpay_service.verify_payment(order_id, payment_id, signature)
            return Response({
                "success": True,
                "message": "Payment verified successfully. CareerOS Premium Tier Activated!",
                "payment_id": payment_id
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"success": False, "error": f"Verification failed: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)

class RazorpayWebhookView(APIView):
    def post(self, request):
        signature = request.headers.get('X-Razorpay-Signature', '')
        try:
            body = request.body.decode('utf-8')
            razorpay_service.verify_webhook(body, signature)
            # Process webhook event (e.g. payment.captured, subscription.charged)
            return Response({"status": "accepted"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
