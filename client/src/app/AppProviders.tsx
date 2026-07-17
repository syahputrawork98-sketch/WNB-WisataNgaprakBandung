import type { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";
import { ScrollToTop } from "./ScrollToTop";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {children}
    </BrowserRouter>
  );
}
