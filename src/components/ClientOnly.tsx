import { useEffect, useState, type ReactNode } from "react";

/**
 * Renders children only on the client (after mount).
 * Use for components that touch browser-only APIs (WebGL, canvas, window, etc.)
 * so SSG prerender doesn't try to render them.
 */
const ClientOnly = ({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <>{mounted ? children : fallback}</>;
};

export default ClientOnly;
