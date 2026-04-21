import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // Enforce lowercase URLs (SEO canonicalization)
    const lower = pathname.toLowerCase();
    if (pathname !== lower) {
      window.location.replace(lower + search + hash);
      return;
    }
    // Don't scroll to top if navigating with a hash anchor
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash, search]);

  return null;
};

export default ScrollToTop;
