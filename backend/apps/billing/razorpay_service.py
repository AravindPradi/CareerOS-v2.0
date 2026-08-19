import os
import razorpay

class RazorpayService:
    def __init__(self):
        self.key_id = os.environ.get('RAZORPAY_KEY_ID', 'rzp_live_TPcpT8ogtE5Q3J')
        self.key_secret = os.environ.get('RAZORPAY_KEY_SECRET', '6Ja5gHo4usp7Xd8miIZdNv80')
        self.webhook_secret = os.environ.get('RAZORPAY_WEBHOOK_SECRET', 'careeros_razorpay_webhook_secret_2026')
        
        self.client = razorpay.Client(auth=(self.key_id, self.key_secret))

    def create_order(self, amount_inr: float = 49.00, currency: str = "INR", receipt: str = "receipt_careeros_premium"):
        # Convert INR to paise (49 INR = 4900 paise)
        amount_paise = int(amount_inr * 100)
        data = {
            "amount": amount_paise,
            "currency": currency,
            "receipt": receipt,
            "notes": {
                "plan": "CareerOS Premium Monthly Plan",
                "price": "₹49/month",
                "features": "Unlimited ATS, One Click Apply Pack, Rejection Intelligence, Migration Planner"
            }
        }
        order = self.client.order.create(data=data)
        return order

    def verify_payment(self, razorpay_order_id: str, razorpay_payment_id: str, razorpay_signature: str):
        params_dict = {
            'razorpay_order_id': razorpay_order_id,
            'razorpay_payment_id': razorpay_payment_id,
            'razorpay_signature': razorpay_signature
        }
        # Throws SignatureVerificationError if invalid
        self.client.utility.verify_payment_signature(params_dict)
        return True

    def verify_webhook(self, body: str, signature: str):
        self.client.utility.verify_webhook_signature(body, signature, self.webhook_secret)
        return True
