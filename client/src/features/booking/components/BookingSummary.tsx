import type { BookingFormValues } from "../bookingTypes";
import { 
  getBookingPackageOptions, 
  getBookingRouteOptions, 
  DATE_FLEXIBILITY_OPTIONS, 
  GROUP_TYPE_OPTIONS, 
  MEETING_POINT_OPTIONS, 
  ADDITIONAL_NEEDS_OPTIONS 
} from "../bookingData";
import { normalizeCustomerWhatsapp } from "../bookingContact";

type BookingSummaryProps = {
  values: BookingFormValues;
};

export function BookingSummary({ values }: BookingSummaryProps) {
  function getLabel(value: string, options: readonly { value: string; label: string }[]): string {
    const option = options.find((o) => o.value === value);
    return option ? option.label : value;
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

  const packageLabel = values.packageChoice ? getLabel(values.packageChoice, getBookingPackageOptions()) : "-";
  const dateStr = values.dateUndecided ? "Belum Ditentukan" : (values.plannedDate ? formatDate(values.plannedDate) : "-");
  const flexibilityLabel = values.dateFlexibility ? getLabel(values.dateFlexibility, DATE_FLEXIBILITY_OPTIONS) : "";
  const groupLabel = values.groupType ? getLabel(values.groupType, GROUP_TYPE_OPTIONS) : "-";
  const routeLabel = values.routeChoice ? getLabel(values.routeChoice, getBookingRouteOptions()) : "";
  const meetingLabel = values.meetingPoint ? getLabel(values.meetingPoint, MEETING_POINT_OPTIONS) : "";
  const additionalNeedsLabels = values.additionalNeeds.length > 0 
    ? values.additionalNeeds.map((need) => getLabel(need, ADDITIONAL_NEEDS_OPTIONS)).join(", ")
    : "";

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Ringkasan Permintaan</h3>
      
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-gray-500 dark:text-gray-400">Nama Pemesan</dt>
          <dd className="font-medium text-gray-900 dark:text-gray-100">{values.customerName || "-"}</dd>
        </div>
        <div>
          <dt className="text-gray-500 dark:text-gray-400">WhatsApp</dt>
          <dd className="font-medium text-gray-900 dark:text-gray-100">{values.customerWhatsapp ? normalizeCustomerWhatsapp(values.customerWhatsapp) : "-"}</dd>
        </div>
        {values.organizationName && (
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Instansi / Organisasi</dt>
            <dd className="font-medium text-gray-900 dark:text-gray-100">{values.organizationName}</dd>
          </div>
        )}
        
        <hr className="border-gray-200 dark:border-gray-800 my-3" />
        
        <div>
          <dt className="text-gray-500 dark:text-gray-400">Paket Wisata</dt>
          <dd className="font-medium text-gray-900 dark:text-gray-100">{packageLabel}</dd>
        </div>
        <div>
          <dt className="text-gray-500 dark:text-gray-400">Tanggal Rencana</dt>
          <dd className="font-medium text-gray-900 dark:text-gray-100">{dateStr}</dd>
        </div>
        {flexibilityLabel && (
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Fleksibilitas</dt>
            <dd className="font-medium text-gray-900 dark:text-gray-100">{flexibilityLabel}</dd>
          </div>
        )}
        <div>
          <dt className="text-gray-500 dark:text-gray-400">Jumlah Peserta</dt>
          <dd className="font-medium text-gray-900 dark:text-gray-100">{values.participantCount || "-"}</dd>
        </div>
        <div>
          <dt className="text-gray-500 dark:text-gray-400">Jenis Kelompok</dt>
          <dd className="font-medium text-gray-900 dark:text-gray-100">{groupLabel}</dd>
        </div>

        {(routeLabel || meetingLabel || additionalNeedsLabels || values.safetyNeeds || values.additionalNotes) && (
          <>
            <hr className="border-gray-200 dark:border-gray-800 my-3" />
            {routeLabel && (
              <div>
                <dt className="text-gray-500 dark:text-gray-400">Preferensi Rute</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">{routeLabel}</dd>
              </div>
            )}
            {meetingLabel && (
              <div>
                <dt className="text-gray-500 dark:text-gray-400">Preferensi Titik Temu</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">{meetingLabel}</dd>
              </div>
            )}
            {additionalNeedsLabels && (
              <div>
                <dt className="text-gray-500 dark:text-gray-400">Kebutuhan Tambahan</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">{additionalNeedsLabels}</dd>
              </div>
            )}
            {values.safetyNeeds && (
              <div>
                <dt className="text-gray-500 dark:text-gray-400">Kebutuhan Kenyamanan/Keselamatan</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100 break-words">{values.safetyNeeds}</dd>
              </div>
            )}
            {values.additionalNotes && (
              <div>
                <dt className="text-gray-500 dark:text-gray-400">Catatan Tambahan</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100 break-words">{values.additionalNotes}</dd>
              </div>
            )}
          </>
        )}
      </dl>
    </div>
  );
}
