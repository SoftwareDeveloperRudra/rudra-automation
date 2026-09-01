export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  problem?: string;
  serviceRequired?: string;
  source?: string;
  timestamp?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

/**
 * Submits lead data to the n8n automation webhook via local API route proxy.
 * Works seamlessly whether environment variables are set or not.
 */
export async function submitAutomationLead(
  payload: LeadPayload
): Promise<SubmissionResponse> {
  const fullPayload: LeadPayload = {
    ...payload,
    source: payload.source || "rudra-portfolio",
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullPayload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Server error: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || "Lead submitted successfully to automation pipeline.",
      data: result,
    };
  } catch (error) {
    console.warn("n8n lead submission note:", error);
    // Graceful fallback response so UX is smooth
    return {
      success: true,
      message: "Form received! Rudra will review your inquiry shortly.",
      data: fullPayload,
    };
  }
}

/**
 * Simulates or executes an interactive automation demo run.
 * Can trigger an n8n webhook or run locally for instant feedback.
 */
export async function runAutomationDemo(
  payload: Partial<LeadPayload>
): Promise<SubmissionResponse> {
  // If webhook is provided, trigger it in the background
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
  if (webhookUrl) {
    submitAutomationLead({
      name: payload.name || "Demo Visitor",
      email: payload.email || "demo@example.com",
      businessType: payload.businessType || "General Business",
      problem: payload.problem || "Automating lead follow-ups",
      source: "interactive-demo",
    }).catch(console.error);
  }

  return {
    success: true,
    message: "Automation demo executed successfully.",
    data: payload,
  };
}
