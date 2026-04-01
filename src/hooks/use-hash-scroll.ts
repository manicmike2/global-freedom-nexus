import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 100; // px offset for sticky header

/**
 * Scrolls to the element matching the URL hash on page load or hash change.
 * Accounts for sticky header offset with a smooth, premium scroll.
 */
export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    // Allow DOM to render before scrolling (especially on cross-page nav)
    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [hash, pathname]);
}
