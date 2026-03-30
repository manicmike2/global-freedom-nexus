import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl text-foreground mb-2">
              Global Freedom Capital
            </h3>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-6">
              Take the world. It's yours.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A U.S.-based advisory firm guiding high-net-worth individuals and families through citizenship by investment, Golden Visa, and strategic residency solutions.
            </p>
          </div>

          {/* Advisory */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6">
              Advisory Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Citizenship by Investment", path: "/citizenship-by-investment" },
                { label: "Golden Visas & Residency", path: "/golden-visas" },
                { label: "Destinations", path: "/destinations" },
                { label: "U.S. Market Entry", path: "/citizenship-by-investment" },
              ].map((item) => (
                <li key={item.path + item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", path: "/about" },
                { label: "For Attorneys", path: "/for-attorneys" },
                { label: "Insights", path: "/insights" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>info@globalfreedomcapital.com</li>
              <li>+1 (800) 555-0199</li>
              <li>New York, United States</li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-6 px-5 py-2 text-xs tracking-[0.15em] uppercase border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Global Freedom Capital. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground leading-relaxed max-w-xl text-center md:text-right">
            Global Freedom Capital provides advisory services related to citizenship and residency by investment programs. 
            We are not a law firm and do not provide legal advice. All programs are subject to the laws and regulations of their respective jurisdictions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
