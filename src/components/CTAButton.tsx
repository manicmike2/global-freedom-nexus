import { Link } from "react-router-dom";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

const CTAButton = ({ to, children, variant = "primary", className = "" }: CTAButtonProps) => {
  const baseStyles = "inline-block px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",
    outline:
      "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground",
    ghost:
      "text-primary hover:text-foreground underline underline-offset-4 decoration-primary/30 hover:decoration-primary px-0",
  };

  return (
    <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default CTAButton;
