import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Citizenship by Investment", path: "/citizenship-by-investment" },
  { label: "Golden Visa", path: "/golden-visa" },
  { label: "Real Estate", path: "/real-estate" },
  { label: "Destinations", path: "/destinations" },
  {
    label: "Resources",
    path: "/resources",
    children: [
      { label: "Blog", path: "/resources/blog" },
      { label: "FAQ", path: "/resources/faq" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 xl:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex shrink-0 flex-col items-center gap-1 mr-4 xl:mr-8">
            <img src={logo} alt="Global Freedom Capital" className="h-12 lg:h-14 w-auto" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground whitespace-nowrap">
              Take the world. It's yours.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex flex-1 items-center justify-end gap-5" ref={dropdownRef}>
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-300 hover:text-primary whitespace-nowrap flex items-center gap-1 ${
                      location.pathname.startsWith(item.path)
                        ? "text-primary font-bold"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={12} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 bg-background/98 backdrop-blur-md border border-border min-w-[180px] py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-5 py-2.5 text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-primary hover:bg-card/50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
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
              )
            )}
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
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`text-sm font-semibold tracking-[0.15em] uppercase transition-colors flex items-center gap-2 ${
                        location.pathname.startsWith(item.path)
                          ? "text-primary font-bold"
                          : "text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-3 flex flex-col gap-3"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="text-sm tracking-[0.12em] uppercase text-muted-foreground hover:text-primary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
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
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
