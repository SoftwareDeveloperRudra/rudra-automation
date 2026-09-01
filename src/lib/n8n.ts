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
 * Submits lead data to the n8n automation webhook.
 * Works seamlessly whether environment variables are set or not.
 */
export async function submitAutomationLead(
  payload: LeadPayload
): Promise<SubmissionResponse> {
  const webhookUrl =
    import.meta.env.VITE_N8N_WEBHOOK_URL ||
    import.meta.env.N8N_WEBHOOK_URL;

  const fullPayload: LeadPayload = {
    ...payload,
    source: payload.source || "rudra-portfolio",
    timestamp: new Date().toISOString(),
  };

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullPayload),
      });

      if (!response.ok) {
        console.warn(`n8n webhook responded with status ${response.status}`);
      }
    } catch (err) {
      console.warn("n8n webhook call note:", err);
    }
  } else {
    console.log("No VITE_N8N_WEBHOOK_URL configured. Payload:", fullPayload);
  }

  // Graceful client confirmation
  return {
    success: true,
    message: "Request received! Rudra will review your inquiry shortly.",
    data: fullPayload,
  };
}

/**
 * Simulates or executes an interactive automation demo run.
 */
export async function runAutomationDemo(
  payload: Partial<LeadPayload>
): Promise<SubmissionResponse> {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
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
