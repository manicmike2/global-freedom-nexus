import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { getDestinationPath } from "@/lib/destinations";
import { ArrowRight, Shield, Globe, Users, Building, Briefcase, Scale, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import GlobeScene from "@/components/GlobeScene";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import SectionReveal from "@/components/SectionReveal";
import PageSEO from "@/components/PageSEO";
import heroBg from "@/assets/hero-yacht.jpg";
import boardroom from "@/assets/boardroom.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destPortugal from "@/assets/dest-portugal.jpg";
import destUae from "@/assets/dest-uae.jpg";
import destPanama from "@/assets/dest-panama.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";
import destGrenada from "@/assets/dest-grenada.jpg";
import destStkitts from "@/assets/dest-stkitts.jpg";
import destAntigua from "@/assets/dest-antigua.jpg";
import destStlucia from "@/assets/dest-stlucia.jpg";
import destDominica from "@/assets/dest-dominica.jpg";

const destinations = [
  { name: "Grenada", region: "Caribbean", investment: "From $235,000", ideal: "U.S.-based families", advantage: "E-2 treaty access to U.S.", image: destGrenada },
  { name: "Saint Kitts & Nevis", region: "Caribbean", investment: "From $250,000", ideal: "Global entrepreneurs", advantage: "Oldest CBI program", image: destStkitts },
  { name: "Antigua & Barbuda", region: "Caribbean", investment: "From $230,000", ideal: "Families", advantage: "Family-friendly CBI", image: destAntigua },
  { name: "Dominica", region: "Caribbean", investment: "From $200,000", ideal: "Cost-conscious investors", advantage: "Most affordable CBI", image: destDominica },
  { name: "Saint Lucia", region: "Caribbean", investment: "From $240,000", ideal: "Flexible investors", advantage: "Multiple investment routes", image: destStlucia },
  { name: "Portugal", region: "Europe", investment: "From €500,000", ideal: "Families & entrepreneurs", advantage: "EU residency & citizenship pathway", image: destPortugal },
  { name: "Greece", region: "Europe", investment: "From €250,000", ideal: "Investors & retirees", advantage: "Golden Visa with EU access", image: destGreece },
  { name: "UAE", region: "Global", investment: "From $550,000", ideal: "Executives & families", advantage: "Tax-free residency", image: destUae },
];

const services = [
  { icon: Globe, title: "Citizenship by Investment", desc: "Acquire second citizenship through government-approved investment programs across the Caribbean, Europe, and beyond.", link: "/citizenship-by-investment" },
  { icon: Shield, title: "Golden Visa & Residency", desc: "Secure strategic residency in premier jurisdictions with pathways to permanent residence and eventual citizenship.", link: "/golden-visa" },
  { icon: Building, title: "U.S. Market Entry for CBI Firms", desc: "We represent government-approved programs and developers seeking strategic distribution in the American market.", link: "/citizenship-by-investment" },
  { icon: Briefcase, title: "Wealth & Legacy Structuring", desc: "Complement your investment migration with cross-border wealth strategy, family governance, and multi-jurisdictional planning.", link: "/contact" },
];

const steps = [
  { num: "01", title: "Private Consultation", desc: "A confidential discussion to understand your family's goals, timeline, and global mobility objectives." },
  { num: "02", title: "Strategic Program Match", desc: "We analyze jurisdictions and programs to identify the optimal solution for your unique circumstances." },
  { num: "03", title: "Due Diligence & Structuring", desc: "Comprehensive preparation of your application with meticulous attention to compliance and documentation." },
  { num: "04", title: "Execution & Integration", desc: "End-to-end management through approval, with ongoing support for your global integration." },
];

const trustItems = [
  "U.S.-Based Advisory",
  "White-Glove Service",
  "Tailored Global Strategy",
  "Discreet Client Experience",
  "Trusted by Families & Advisors",
];

// Stagger animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const RevealText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.08]);
  const heroTextY = useTransform(heroScroll, [0, 0.6], [0, -60]);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: showcaseScroll } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });
  const showcaseParallax = useTransform(showcaseScroll, [0, 1], ["5%", "-5%"]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Citizenship by Investment Advisory | GFC"
        description="Global Freedom Capital offers expert Citizenship by Investment and Golden Visa advisory for HNW individuals. Private, trusted, results-driven. Book a free consultation."
        canonical="https://www.globalfreedomcapital.com/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Global Freedom Capital",
              url: "https://www.globalfreedomcapital.com",
              description: "U.S.-based Citizenship by Investment and Golden Visa advisory firm",
              sameAs: [
                "https://www.linkedin.com/company/globalfreedomcapital",
                "https://www.instagram.com/globalfreedomcapital"
              ]
            },
            {
              "@type": "Person",
              name: "Tatiana Muntean",
              jobTitle: "CEO",
              hasCredential: "IMC Member, former OSCE and UN",
              worksFor: {
                "@type": "Organization",
                name: "Global Freedom Capital"
              }
            },
            {
              "@type": "Service",
              name: "Citizenship by Investment Advisory",
              provider: {
                "@type": "Organization",
                name: "Global Freedom Capital"
              },
              description: "Expert advisory for citizenship by investment and Golden Visa programs for high-net-worth individuals and families."
            },
            {
              "@type": "Service",
              name: "Golden Visa Advisory",
              provider: {
                "@type": "Organization",
                name: "Global Freedom Capital"
              },
              description: "Strategic Golden Visa and residency-by-investment advisory across Europe, the Caribbean, and beyond."
            }
          ]
        }}
      />
      <ScrollProgress />
      <Header />

      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY, scale: heroScale }}>
          <img src={heroBg} alt="Luxury coastal estate" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </motion.div>

        <GlobeScene />

        <motion.div
          className="relative z-10 container mx-auto px-6 lg:px-12 text-center"
          style={{ opacity: heroOpacity, y: heroTextY }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="text-xs uppercase text-primary mb-6 block"
            >
              The Private Advisory for Global Freedom
            </motion.span>

            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1]"
              >
                Citizenship by Investment.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] block"
              >
                Residency. <span className="italic text-primary rounded-none">Optionality.</span>
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Global Freedom Capital is a U.S.-based advisory firm guiding high-net-worth individuals,
              families, and trusted intermediaries through citizenship by investment, Golden Visa,
              and strategic residency solutions across the Caribbean, Europe, and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CTAButton to="/contact" variant="primary">
                Book a Private Consultation
              </CTAButton>
              <CTAButton to="/destinations" variant="outline">
                Explore Destinations
              </CTAButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ TRUST STRIP ═══════════════ */}
      <section className="border-y border-border bg-card/50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {trustItems.map((item, i) => (
              <motion.span
                key={i}
                variants={itemVariants}
                className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 300 }}
                />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ WHAT WE DO ═══════════════ */}
      <section className="py-28 lg:py-36 relative">
        <ParticleField />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <SectionHeading
            label="Advisory Services"
            title="What We Do"
            subtitle="Comprehensive investment migration solutions designed for the world's most discerning families and their trusted advisors."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={cardVariants}>
                <Link
                  to={service.link}
                  className="group block p-8 lg:p-10 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-700 h-full relative overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                  <div className="relative z-10">
                    <service.icon className="w-8 h-8 text-primary mb-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
                    <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <span className="text-xs tracking-[0.15em] uppercase text-primary flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ DESTINATIONS ═══════════════ */}
      <section className="py-28 lg:py-36 bg-muted/30 relative">
        {/* Subtle section transition gradient */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Featured Destinations"
            title="Your World, Expanded"
            subtitle="Curated investment migration programs across premier jurisdictions, each selected for their strategic value and lifestyle appeal."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {destinations.slice(0, 8).map((dest, i) => (
              <motion.div key={i} variants={cardVariants}>
                <Link
                  to={getDestinationPath(dest.name)}
                  className="group block relative overflow-hidden aspect-[3/4] hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-700"
                >
                  <motion.img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent group-hover:via-foreground/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-1">
                      {dest.region}
                    </span>
                    <h3 className="font-serif text-xl text-primary-foreground mb-1 group-hover:translate-x-1 transition-transform duration-500">{dest.name}</h3>
                    <p className="text-xs text-primary-foreground/70 mb-2">{dest.investment}</p>
                    <p className="text-xs text-primary-foreground/50 group-hover:text-primary-foreground/70 transition-colors duration-300">{dest.advantage}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <SectionReveal delay={0.3} className="text-center mt-14">
            <CTAButton to="/destinations" variant="outline">
              View All Destinations
            </CTAButton>
          </SectionReveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════ WHY GFC ═══════════════ */}
      <section ref={showcaseRef} className="py-28 lg:py-36 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden group">
                <motion.img
                  src={boardroom}
                  alt="Executive boardroom"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  style={{ y: showcaseParallax }}
                  loading="lazy"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-700" />
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/30" />
              </div>
            </SectionReveal>
            <SectionReveal direction="right" delay={0.15}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
                Why Global Freedom Capital
              </span>
              <RevealText>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-6">
                  An Expert Advisory Built on{" "}
                  <span className="italic text-primary">Trust & Discretion</span>
                </h2>
              </RevealText>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  We are a U.S.-based, founder-led advisory firm built on the conviction that
                  global mobility is not a commodity—it is a strategic decision that demands
                  bespoke guidance, deep expertise, and unwavering discretion.
                </p>
                <p>
                  Our clients are high-net-worth individuals, multigenerational families,
                  and the attorneys and advisors who serve them. We work with a select number
                  of clients at any given time to ensure white-glove attention at every stage.
                </p>
              </div>
              <motion.ul
                className="mt-8 space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Founder-led, relationship-driven model",
                  "Cross-border strategic thinking",
                  "White-glove handling of complex family cases",
                  "Strong intermediary & attorney collaboration",
                  "Boots-on-the-ground international support",
                ].map((item, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex items-center gap-3 text-sm text-foreground/80 group cursor-default">
                    <ChevronRight size={14} className="text-primary flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <SectionReveal delay={0.4} className="mt-8">
                <CTAButton to="/about" variant="outline">About Our Firm</CTAButton>
              </SectionReveal>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-28 lg:py-36 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <ParticleField />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <SectionHeading
            label="Process"
            title="How It Works"
            subtitle="A refined, four-step process designed to deliver clarity, confidence, and results."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative p-8 border border-border hover:border-primary/30 transition-all duration-700 bg-card/50 backdrop-blur-sm group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-700" />
                <span className="text-5xl font-serif text-primary/15 block mb-4 group-hover:text-primary/30 transition-colors duration-500">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {/* Connecting line on desktop */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════ FOR ATTORNEYS ═══════════════ */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal>
              <Scale className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1} />
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
                For Immigration Attorneys & Partners
              </span>
              <RevealText>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-6">
                  Your Trusted Outbound Investment Migration Partner
                </h2>
              </RevealText>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                U.S. immigration attorneys trust Global Freedom Capital as their vetted
                outbound advisory partner. We provide white-label collaboration, responsive
                communication, and access to government-approved programs worldwide—so you
                can serve your clients with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton to="/for-attorneys" variant="primary">Partner With Us</CTAButton>
                <CTAButton to="/contact" variant="outline">Schedule a Partner Call</CTAButton>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ INSIGHTS ═══════════════ */}
      <section className="py-28 lg:py-36 bg-muted/30 border-y border-border relative">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Insights"
            title="Thought Leadership"
            subtitle="Strategic perspectives on global mobility, investment migration, and cross-border planning."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              { title: "Why Americans Are Seeking Second Citizenship in Record Numbers", category: "Global Mobility", date: "March 2026" },
              { title: "Golden Visa vs. Citizenship by Investment: Which Path Is Right for You?", category: "Advisory", date: "February 2026" },
              { title: "The Rise of the Strategic Family Office: Global Mobility as a Wealth Tool", category: "Wealth Strategy", date: "January 2026" },
            ].map((article, i) => (
              <motion.div key={i} variants={cardVariants}>
                <Link
                  to="/insights"
                  className="group block p-8 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-700 h-full relative overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{article.category}</span>
                    <h3 className="font-serif text-lg text-foreground mt-3 mb-4 group-hover:text-primary transition-colors duration-500 leading-snug">
                      {article.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-700" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <SectionReveal delay={0.3} className="text-center mt-14">
            <CTAButton to="/insights" variant="ghost">View All Insights</CTAButton>
          </SectionReveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-28 lg:py-44 relative overflow-hidden">
        <ParticleField />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <SectionReveal>
            <motion.span
              className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Begin Today
            </motion.span>
            <div className="max-w-3xl mx-auto">
              <RevealText>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight mb-6">
                  Your Next Move Deserves a{" "}
                  <span className="italic text-primary">Global Strategy</span>
                </h2>
              </RevealText>
            </div>
            <motion.p
              className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Whether you're an individual, family, attorney, or advisor—your journey to
              global freedom begins with a single, confidential conversation.
            </motion.p>
            <SectionReveal delay={0.5}>
              <CTAButton to="/contact" variant="primary">
                Begin Your Private Consultation
              </CTAButton>
            </SectionReveal>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
