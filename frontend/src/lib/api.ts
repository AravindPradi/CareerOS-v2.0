const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

async function fetchAPI(endpoint: string, data: any) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      throw new Error(errJson.error || `API error (${response.status})`);
    }

    return await response.json();
  } catch (error: any) {
    console.warn(`Falling back to local simulation due to API connectivity: ${error.message}`);
    throw error;
  }
}

export const aiAPI = {
  analyzeATS: (resume_text: string, job_description: string, target_role: string) =>
    fetchAPI('/ai/ats-scan/', { resume_text, job_description, target_role }),

  generateOneClickPack: (job_url: string, candidate_summary: string) =>
    fetchAPI('/ai/one-click-pack/', { job_url, candidate_summary }),

  analyzeRejections: (rejection_history: any[]) =>
    fetchAPI('/ai/rejection-analysis/', { rejection_history }),

  analyzeWhyNotMe: (resume_text: string, job_description: string) =>
    fetchAPI('/ai/why-not-me/', { resume_text, job_description }),

  evaluateInterviewAnswer: (question: string, user_answer: string) =>
    fetchAPI('/ai/interview-evaluate/', { question, user_answer }),

  sendCoachMessage: (message: string) =>
    fetchAPI('/ai/coach-chat/', { message }),

  optimizeLinkedIn: (profile_summary: string, target_role: string) =>
    fetchAPI('/ai/linkedin-optimize/', { profile_summary, target_role }),
};

export const billingAPI = {
  createRazorpayOrder: (amount: number = 49.00) =>
    fetchAPI('/billing/razorpay/create-order/', { amount }),

  verifyRazorpayPayment: (razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string) =>
    fetchAPI('/billing/razorpay/verify-payment/', { razorpay_order_id, razorpay_payment_id, razorpay_signature }),
};
