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
    <div className="bg-wnb-surface rounded-2xl p-6 border border-wnb-border">
      <h3 className="font-semibold text-lg mb-4 text-wnb-text">Ringkasan Permintaan</h3>
      
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-wnb-muted">Nama Pemesan</dt>
          <dd className="font-medium text-wnb-text">{values.customerName || "-"}</dd>
        </div>
        <div>
          <dt className="text-wnb-muted">WhatsApp</dt>
          <dd className="font-medium text-wnb-text">{values.customerWhatsapp ? normalizeCustomerWhatsapp(values.customerWhatsapp) : "-"}</dd>
        </div>
        {values.organizationName && (
          <div>
            <dt className="text-wnb-muted">Instansi / Organisasi</dt>
            <dd className="font-medium text-wnb-text">{values.organizationName}</dd>
          </div>
        )}
        
        <hr className="border-wnb-border my-3" />
        
        <div>
          <dt className="text-wnb-muted">Paket Wisata</dt>
          <dd className="font-medium text-wnb-text">{packageLabel}</dd>
        </div>
        <div>
          <dt className="text-wnb-muted">Tanggal Rencana</dt>
          <dd className="font-medium text-wnb-text">{dateStr}</dd>
        </div>
        {flexibilityLabel && (
          <div>
            <dt className="text-wnb-muted">Fleksibilitas</dt>
            <dd className="font-medium text-wnb-text">{flexibilityLabel}</dd>
          </div>
        )}
        <div>
          <dt className="text-wnb-muted">Jumlah Peserta</dt>
          <dd className="font-medium text-wnb-text">{values.participantCount || "-"}</dd>
        </div>
        <div>
          <dt className="text-wnb-muted">Jenis Kelompok</dt>
          <dd className="font-medium text-wnb-text">{groupLabel}</dd>
        </div>

        {(routeLabel || meetingLabel || additionalNeedsLabels || values.safetyNeeds || values.additionalNotes) && (
          <>
            <hr className="border-wnb-border my-3" />
            {routeLabel && (
              <div>
                <dt className="text-wnb-muted">Preferensi Rute</dt>
                <dd className="font-medium text-wnb-text">{routeLabel}</dd>
              </div>
            )}
            {meetingLabel && (
              <div>
                <dt className="text-wnb-muted">Preferensi Titik Temu</dt>
                <dd className="font-medium text-wnb-text">{meetingLabel}</dd>
              </div>
            )}
            {additionalNeedsLabels && (
              <div>
                <dt className="text-wnb-muted">Kebutuhan Tambahan</dt>
                <dd className="font-medium text-wnb-text">{additionalNeedsLabels}</dd>
              </div>
            )}
            {values.safetyNeeds && (
              <div>
                <dt className="text-wnb-muted">Kebutuhan Kenyamanan/Keselamatan</dt>
                <dd className="font-medium text-wnb-text break-words">{values.safetyNeeds}</dd>
              </div>
            )}
            {values.additionalNotes && (
              <div>
                <dt className="text-wnb-muted">Catatan Tambahan</dt>
                <dd className="font-medium text-wnb-text break-words">{values.additionalNotes}</dd>
              </div>
            )}
          </>
        )}
      </dl>
    </div>
  );
}
