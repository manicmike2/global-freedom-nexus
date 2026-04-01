import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-foreground text-primary-foreground border-t border-border"
    >
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div custom={0} variants={footerFadeUp} className="lg:col-span-1">
            <h3 className="font-serif text-xl text-primary-foreground mb-2">
              Global Freedom Capital
            </h3>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
              Take the world. It's yours.
            </p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A U.S.-based advisory firm guiding high-net-worth individuals and families through citizenship by investment, Golden Visa, and strategic residency solutions.
            </p>
          </motion.div>

          {/* Advisory */}
          <motion.div custom={1} variants={footerFadeUp}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-6">
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
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div custom={2} variants={footerFadeUp}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-6">
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
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div custom={3} variants={footerFadeUp}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>contact@globalfreedomcapital.com</li>
              <li>+1 (445) 600 3206</li>
              <li>New York, United States</li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-6 px-5 py-2 text-xs tracking-[0.15em] uppercase border border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Book a Call
            </Link>
          </motion.div>
        </div>

        {/* Divider with animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px bg-primary-foreground/10 origin-left"
        />

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Global Freedom Capital. All rights reserved.
          </p>
          <p className="text-[10px] text-primary-foreground/40 leading-relaxed max-w-xl text-center md:text-right">
            Global Freedom Capital provides advisory services related to citizenship and residency by investment programs. 
            We are not a law firm and do not provide legal, tax and/or financial advice. All programs are subject to the laws and regulations of their respective jurisdictions.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
