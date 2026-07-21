import type { BookingFormValues, BookingFieldErrors } from "./bookingTypes";
import { getBookingPackageOptions, GROUP_TYPE_OPTIONS } from "./bookingData";

export function validateBookingForm(values: BookingFormValues): BookingFieldErrors {
  const errors: BookingFieldErrors = {};

  // 1. Validasi Nama
  const trimmedName = values.customerName.trim();
  if (!trimmedName) {
    errors.customerName = "Nama pemesan wajib diisi.";
  } else if (trimmedName.length > 80) {
    errors.customerName = "Nama maksimal 80 karakter.";
  }

  // 2. Validasi WhatsApp
  const rawWa = values.customerWhatsapp.replace(/[\s\-\(\)]/g, "");
  if (!rawWa) {
    errors.customerWhatsapp = "Masukkan nomor WhatsApp yang dapat dihubungi.";
  } else if (!/^(\+62|62|0)[0-9]{8,13}$/.test(rawWa)) {
    errors.customerWhatsapp = "Masukkan nomor WhatsApp yang valid (contoh: 081234567890).";
  }

  // 3. Validasi Paket
  if (!values.packageChoice) {
    errors.packageChoice = "Pilih Paket atau minta rekomendasi.";
  } else {
    // Validasi apakah paket yang dipilih valid berdasarkan data
    const validPackages = getBookingPackageOptions().map(o => o.value);
    if (!validPackages.includes(values.packageChoice)) {
      errors.packageChoice = "Pilih Paket yang valid.";
    }
  }

  // 4. Validasi Tanggal
  if (!values.dateUndecided) {
    if (!values.plannedDate) {
      errors.plannedDate = "Pilih tanggal rencana atau tandai tanggal belum ditentukan.";
    } else {
      // Bandingkan dengan tanggal lokal hari ini
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalized to start of today local
      
      // Parse YYYY-MM-DD as local date
      const parts = values.plannedDate.split("-");
      if (parts.length === 3 && parts.every(p => !isNaN(Number(p)))) {
        const plannedDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        plannedDate.setHours(0, 0, 0, 0);

        if (plannedDate < today) {
          errors.plannedDate = "Tanggal rencana tidak boleh berada pada masa lalu.";
        }
      } else {
        errors.plannedDate = "Format tanggal tidak valid.";
      }
    }
  }

  // 5. Validasi Jumlah Peserta
  const participantCountNum = parseInt(values.participantCount, 10);
  if (!values.participantCount || isNaN(participantCountNum) || participantCountNum <= 0) {
    errors.participantCount = "Jumlah peserta harus lebih dari nol.";
  }

  // 6. Validasi Jenis Kelompok
  if (!values.groupType) {
    errors.groupType = "Pilih jenis kelompok.";
  } else {
    const validGroups = GROUP_TYPE_OPTIONS.map(o => o.value).filter(Boolean);
    if (!validGroups.includes(values.groupType)) {
      errors.groupType = "Pilih jenis kelompok yang valid.";
    }
  }

  // 7. Validasi Persetujuan
  if (!values.privacyConsent) {
    errors.privacyConsent = "Setujui penggunaan data untuk melanjutkan.";
  }

  return errors;
}
