import type { BookingFormValues } from "./bookingTypes";
import { 
  getBookingPackageOptions, 
  getBookingRouteOptions, 
  DATE_FLEXIBILITY_OPTIONS, 
  GROUP_TYPE_OPTIONS, 
  MEETING_POINT_OPTIONS, 
  ADDITIONAL_NEEDS_OPTIONS 
} from "./bookingData";
import { normalizeCustomerWhatsapp } from "./bookingContact";

function getLabel(value: string, options: readonly { value: string; label: string }[]): string {
  const option = options.find((o) => o.value === value);
  return option ? option.label : value;
}

export function buildBookingMessage(values: BookingFormValues): string {
  const packageLabel = getLabel(values.packageChoice, getBookingPackageOptions());
  const dateStr = values.dateUndecided 
    ? "Belum Ditentukan" 
    : formatDate(values.plannedDate);
  
  const flexibilityLabel = values.dateFlexibility 
    ? getLabel(values.dateFlexibility, DATE_FLEXIBILITY_OPTIONS) 
    : "";
    
  const groupLabel = getLabel(values.groupType, GROUP_TYPE_OPTIONS);
  
  const routeLabel = values.routeChoice 
    ? getLabel(values.routeChoice, getBookingRouteOptions()) 
    : "";
    
  const meetingLabel = values.meetingPoint 
    ? getLabel(values.meetingPoint, MEETING_POINT_OPTIONS) 
    : "";
    
  const additionalNeedsLabels = values.additionalNeeds
    .map((need) => getLabel(need, ADDITIONAL_NEEDS_OPTIONS))
    .join(", ");

  const normalizedWhatsapp = normalizeCustomerWhatsapp(values.customerWhatsapp);

  const lines = [
    "Halo WNB, saya ingin mengajukan rencana perjalanan.",
    "",
    `Nama: ${values.customerName}`,
    `Nomor WhatsApp: ${normalizedWhatsapp}`,
  ];

  if (values.organizationName.trim()) {
    lines.push(`Perusahaan/Komunitas: ${values.organizationName.trim()}`);
  }

  lines.push(`Paket: ${packageLabel}`);
  lines.push(`Tanggal Rencana: ${dateStr}`);
  
  if (flexibilityLabel) {
    lines.push(`Fleksibilitas Tanggal: ${flexibilityLabel}`);
  }
  
  lines.push(`Jumlah Peserta: ${values.participantCount}`);
  lines.push(`Jenis Kelompok: ${groupLabel}`);

  if (routeLabel) {
    lines.push(`Preferensi Rute: ${routeLabel}`);
  }

  if (meetingLabel) {
    lines.push(`Preferensi Titik Temu: ${meetingLabel}`);
  }

  if (additionalNeedsLabels) {
    lines.push(`Kebutuhan Tambahan: ${additionalNeedsLabels}`);
  }

  if (values.safetyNeeds.trim()) {
    lines.push(`Kebutuhan Kenyamanan/Keselamatan: ${values.safetyNeeds.trim()}`);
  }

  if (values.additionalNotes.trim()) {
    lines.push(`Catatan: ${values.additionalNotes.trim()}`);
  }

  lines.push("");
  lines.push("Saya memahami bahwa permintaan ini belum menjadi konfirmasi booking dan masih menunggu pemeriksaan dari tim WNB.");

  return lines.join("\n");
}

function formatDate(dateString: string): string {
  if (!dateString) return "";
  try {
    const parts = dateString.split("-");
    if (parts.length === 3 && parts.every(p => !isNaN(Number(p)))) {
      const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      return new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    }
    return dateString;
  } catch (e) {
    return dateString;
  }
}
