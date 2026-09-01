/**
 * Generates a prefilled WhatsApp chat link using VITE_WHATSAPP_NUMBER env var.
 * @param customMessage Optional message override
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const rawNumber =
    import.meta.env.VITE_WHATSAPP_NUMBER || "918511092863";
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");

  const defaultMsg =
    "Hi Rudra, I visited your website and I'm interested in automation for my business.";
  const text = encodeURIComponent(customMessage || defaultMsg);

  return `https://wa.me/${cleanNumber}?text=${text}`;
}
