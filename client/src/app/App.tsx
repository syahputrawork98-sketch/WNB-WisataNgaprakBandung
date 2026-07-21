import { AppRoutes } from "@/routes/AppRoutes";
import { GlobalErrorBoundaryWithLocation } from "@/components/system/GlobalErrorBoundary";

export function App() {
  return (
    <GlobalErrorBoundaryWithLocation>
      <AppRoutes />
    </GlobalErrorBoundaryWithLocation>
  );
}
