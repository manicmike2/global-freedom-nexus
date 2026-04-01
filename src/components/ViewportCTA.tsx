import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

interface ViewportCTAProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  delay?: number;
}

const ViewportCTA = ({ to, children, variant = "primary", className = "", delay = 0 }: ViewportCTAProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const baseStyles = "inline-block px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-medium transition-all duration-500";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10",
    outline: "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
};

export default ViewportCTA;
