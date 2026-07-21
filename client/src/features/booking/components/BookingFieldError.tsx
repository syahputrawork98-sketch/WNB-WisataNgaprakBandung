import { AlertCircle } from "lucide-react";

type BookingFieldErrorProps = {
  id?: string;
  error?: string | undefined;
};

export function BookingFieldError({ id, error }: BookingFieldErrorProps) {
  if (!error) return null;

  return (
    <div 
      id={id}
      className="flex items-center gap-1.5 mt-1.5 text-sm text-wnb-danger"
      aria-live="polite"
    >
      <AlertCircle className="w-4 h-4 flex-shrink-0" />
      <span>{error}</span>
    </div>
  );
}
