/**
 * Generates a prefilled WhatsApp chat link using NEXT_PUBLIC_WHATSAPP_NUMBER env var.
 * @param customMessage Optional message override
 */
export function getWhatsAppUrl(customMessage?: string): string {
  // Default to Rudra's WhatsApp number env variable or fallback
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");

  const defaultMsg =
    "Hi Rudra, I visited your website and I'm interested in automation for my business.";
  const text = encodeURIComponent(customMessage || defaultMsg);

  return `https://wa.me/${cleanNumber}?text=${text}`;
}
