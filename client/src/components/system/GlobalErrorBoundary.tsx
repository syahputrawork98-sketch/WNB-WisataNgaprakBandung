import { Component, type ReactNode } from "react";
import { useLocation } from "react-router";
import { GlobalErrorFallback } from "./GlobalErrorFallback";

type ErrorBoundaryProps = {
  children: ReactNode;
  resetKey: string;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.state.hasError && this.props.resetKey !== prevProps.resetKey) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return <GlobalErrorFallback />;
    }

    return this.props.children;
  }
}

export function GlobalErrorBoundaryWithLocation({ children }: { children: ReactNode }) {
  const location = useLocation();
  const resetKey = location.pathname + location.search;

  return (
    <GlobalErrorBoundary resetKey={resetKey}>
      {children}
    </GlobalErrorBoundary>
  );
}
