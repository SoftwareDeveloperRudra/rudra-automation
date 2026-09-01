import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Input validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, message: "Name and Email are required." },
        { status: 400 }
      );
    }

    const n8nWebhookUrl =
      process.env.N8N_WEBHOOK_URL || process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    // Payload enrichment
    const enrichedPayload = {
      ...body,
      receivedAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "unknown",
      ip: request.headers.get("x-forwarded-for") || "unknown",
    };

    if (n8nWebhookUrl) {
      try {
        const n8nRes = await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrichedPayload),
        });

        if (!n8nRes.ok) {
          console.error(`n8n webhook error response: ${n8nRes.status}`);
        }
      } catch (err) {
        console.error("Failed to post to n8n webhook:", err);
      }
    } else {
      console.log("No N8N_WEBHOOK_URL configured. Payload logged server-side:", enrichedPayload);
    }

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully. Rudra will get back to you shortly!",
    });
  } catch (error) {
    console.error("API /api/lead error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
