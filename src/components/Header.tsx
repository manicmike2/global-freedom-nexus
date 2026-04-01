import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Citizenship by Investment", path: "/citizenship-by-investment" },
  { label: "Golden Visas", path: "/golden-visas" },
  { label: "Real Estate", path: "/real-estate" },
  { label: "Destinations", path: "/destinations" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 xl:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex shrink-0 items-center gap-3 mr-8 xl:mr-12">
            <img src={logo} alt="Global Freedom Capital" className="h-12 lg:h-14 w-auto" />
            <div className="flex flex-col">
              <span className="font-serif text-lg lg:text-xl tracking-wide text-foreground whitespace-nowrap">
                Global Freedom Capital
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground whitespace-nowrap">
                Take the world. It's yours.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex flex-1 items-center justify-end gap-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-300 hover:text-primary whitespace-nowrap ${
                  location.pathname === item.path
                    ? "text-primary font-bold"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-block px-5 py-2.5 text-xs tracking-[0.12em] uppercase border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 whitespace-nowrap"
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="xl:hidden text-foreground"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold tracking-[0.15em] uppercase transition-colors ${
                    location.pathname === item.path
                      ? "text-primary font-bold"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
