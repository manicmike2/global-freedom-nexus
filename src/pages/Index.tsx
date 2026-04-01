import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Users, Building, Briefcase, Scale, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import GlobeScene from "@/components/GlobeScene";
import LuxuryShowcase from "@/components/LuxuryShowcase";
import ParticleField from "@/components/ParticleField";
import heroBg from "@/assets/hero-bg.jpg";
import boardroom from "@/assets/boardroom.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destPortugal from "@/assets/dest-portugal.jpg";
import destCaribbean from "@/assets/dest-caribbean.jpg";
import destMalta from "@/assets/dest-malta.jpg";
import destUae from "@/assets/dest-uae.jpg";
import destPanama from "@/assets/dest-panama.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";

const destinations = [
  { name: "Portugal", region: "Europe", investment: "From €500,000", ideal: "Families & entrepreneurs", advantage: "EU residency & citizenship pathway", image: destPortugal },
  { name: "Malta", region: "Europe", investment: "From €690,000", ideal: "UHNW individuals", advantage: "EU citizenship by naturalization", image: destMalta },
  { name: "Greece", region: "Europe", investment: "From €250,000", ideal: "Investors & retirees", advantage: "Golden Visa with EU access", image: destGreece },
  { name: "Grenada", region: "Caribbean", investment: "From $150,000", ideal: "U.S.-based families", advantage: "E-2 treaty access to U.S.", image: destCaribbean },
  { name: "Saint Kitts & Nevis", region: "Caribbean", investment: "From $250,000", ideal: "Global entrepreneurs", advantage: "Oldest CBI program", image: destCaribbean },
  { name: "Turkey", region: "Global", investment: "From $400,000", ideal: "Business investors", advantage: "Citizenship in 3-6 months", image: destTurkey },
  { name: "UAE", region: "Global", investment: "From $550,000", ideal: "Executives & families", advantage: "Tax-free residency", image: destUae },
  { name: "Panama", region: "Global", investment: "From $300,000", ideal: "Retirees & investors", advantage: "Friendly Nations Visa", image: destPanama },
];

const services = [
  { icon: Globe, title: "Citizenship by Investment", desc: "Acquire second citizenship through government-approved investment programs across the Caribbean, Europe, and beyond.", link: "/citizenship-by-investment" },
  { icon: Shield, title: "Golden Visa & Residency", desc: "Secure strategic residency in premier jurisdictions with pathways to permanent residence and eventual citizenship.", link: "/golden-visas" },
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
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const RevealText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
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
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: showcaseScroll } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });
  const showcaseParallax = useTransform(showcaseScroll, [0, 1], ["5%", "-5%"]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero with parallax + 3D Globe */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY, scale: heroScale }}>
          <img src={heroBg} alt="Luxury coastal estate" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        </motion.div>

        {/* 3D Globe overlay */}
        <GlobeScene />

        <motion.div className="relative z-10 container mx-auto px-6 lg:px-12 text-center" style={{ opacity: heroOpacity }}>
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

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1]"
              >
                Citizenship. Residency.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] whitespace-pre-line"
              >
                <span className="italic text-primary">Optionality.{"\n"}</span>
              </motion.h1>
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

      {/* Trust Strip with stagger animation */}
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

      {/* What We Do — enhanced card hover */}
      <section className="py-24 lg:py-32 relative">
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
              <motion.div key={i} variants={itemVariants}>
                <Link
                  to={service.link}
                  className="group block p-8 lg:p-10 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-700 h-full relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                  <div className="relative z-10">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                      <service.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1} />
                    </motion.div>
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

      {/* 3D Luxury Showcase — Private Jet */}
      <section className="py-16 lg:py-24 bg-card/20 border-y border-border relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
                Global Mobility
              </span>
              <RevealText>
                <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-tight mb-6">
                  Travel Without <span className="italic text-primary">Boundaries</span>
                </h2>
              </RevealText>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                With a strategically acquired second citizenship, the world opens up.
                Visa-free access to 140+ countries. Private aviation clearances simplified.
                Your global lifestyle, unencumbered.
              </p>
              <CTAButton to="/citizenship-by-investment" variant="outline">
                Explore Citizenship Programs
              </CTAButton>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="h-[400px] lg:h-[500px]"
            >
              <LuxuryShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations with enhanced cards */}
      <section className="py-24 lg:py-32 bg-card/30 relative">
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
              <motion.div key={i} variants={itemVariants}>
                <Link
                  to="/destinations"
                  className="group block relative overflow-hidden aspect-[3/4]"
                >
                  <motion.img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent group-hover:via-background/30 transition-all duration-500" />
                  {/* Hover overlay glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <motion.span
                      className="text-[10px] tracking-[0.2em] uppercase text-primary block mb-1"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                    >
                      {dest.region}
                    </motion.span>
                    <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{dest.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{dest.investment}</p>
                    <p className="text-xs text-primary/80 group-hover:text-primary transition-colors duration-300">{dest.advantage}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <CTAButton to="/destinations" variant="outline">
              View All Destinations
            </CTAButton>
          </motion.div>
        </div>
      </section>


      {/* Why GFC with parallax image */}
      <section ref={showcaseRef} className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="relative aspect-[4/3] overflow-hidden group">
                <motion.img
                  src={boardroom}
                  alt="Executive boardroom"
                  className="w-full h-full object-cover"
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
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
                Why Global Freedom Capital
              </span>
              <RevealText>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-6">
                  A Boutique Advisory Built on{" "}
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
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                      <ChevronRight size={14} className="text-primary flex-shrink-0" />
                    </motion.div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <CTAButton to="/about" variant="outline">About Our Firm</CTAButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works — enhanced with connecting lines + counter animation */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border relative overflow-hidden">
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
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 border border-border hover:border-primary/30 transition-colors duration-500 bg-card/50 backdrop-blur-sm group"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-700" />
                <motion.span
                  className="text-5xl font-serif text-primary/15 block mb-4 group-hover:text-primary/30 transition-colors duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.num}
                </motion.span>
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
      </section>

      {/* For Attorneys */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block"
              >
                <Scale className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1} />
              </motion.div>
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
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <CTAButton to="/for-attorneys" variant="primary">Partner With Us</CTAButton>
                <CTAButton to="/contact" variant="outline">Schedule a Partner Call</CTAButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
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
              <motion.div key={i} variants={itemVariants}>
                <Link
                  to="/insights"
                  className="group block p-8 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-700 h-full relative overflow-hidden"
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <CTAButton to="/insights" variant="ghost">View All Insights</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Final CTA with dramatic reveal */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        <ParticleField />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.span
              className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Begin Today
            </motion.span>
            <RevealText>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight mb-6">
                Your Next Move Deserves a{" "}
                <span className="italic text-primary">Global Strategy</span>
              </h2>
            </RevealText>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <CTAButton to="/contact" variant="primary">
                Begin Your Private Consultation
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
