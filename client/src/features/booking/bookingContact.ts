export function getOfficialWhatsAppNumber(): string | null {
  const envNumber = import.meta.env.VITE_WNB_WHATSAPP_NUMBER;
  if (!envNumber) {
    return null;
  }

  // Trim and remove non-digit characters
  let cleaned = envNumber.trim().replace(/\D/g, "");

  // Normalize prefix 0 to 62
  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.substring(1);
  }

  // Validate length and prefix
  if (cleaned.length >= 10 && cleaned.startsWith("62")) {
    return cleaned;
  }

  return null;
}

export function normalizeCustomerWhatsapp(input: string): string {
  let cleaned = input.trim().replace(/\D/g, "");
  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.substring(1);
  }
  return cleaned;
}
