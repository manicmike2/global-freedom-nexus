import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const InternalLink = ({ to, children, className = "" }: InternalLinkProps) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all duration-300 ${className}`}
    >
      {children}
      <ArrowRight size={12} />
    </Link>
  );
};

export default InternalLink;
