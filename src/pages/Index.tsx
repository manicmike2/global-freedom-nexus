import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Users, Building, Briefcase, Scale, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Luxury coastal estate" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary mb-6 block">
              The Private Advisory for Global Freedom
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1] mb-8 max-w-5xl mx-auto">
              Citizenship. Residency.{" "}
              <span className="italic text-primary">Optionality.</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Global Freedom Capital is a U.S.-based advisory firm guiding high-net-worth individuals, 
              families, and trusted intermediaries through citizenship by investment, Golden Visa, 
              and strategic residency solutions across the Caribbean, Europe, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/contact" variant="primary">
                Book a Private Consultation
              </CTAButton>
              <CTAButton to="/destinations" variant="outline">
                Explore Destinations
              </CTAButton>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border bg-card/50">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item, i) => (
              <span key={i} className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Advisory Services"
            title="What We Do"
            subtitle="Comprehensive investment migration solutions designed for the world's most discerning families and their trusted advisors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="group block p-8 lg:p-10 bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full"
                >
                  <service.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1} />
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <span className="text-xs tracking-[0.15em] uppercase text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Featured Destinations"
            title="Your World, Expanded"
            subtitle="Curated investment migration programs across premier jurisdictions, each selected for their strategic value and lifestyle appeal."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.slice(0, 8).map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to="/destinations"
                  className="group block relative overflow-hidden aspect-[3/4]"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary block mb-1">
                      {dest.region}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mb-1">{dest.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{dest.investment}</p>
                    <p className="text-xs text-primary/80">{dest.advantage}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton to="/destinations" variant="outline">
              View All Destinations
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why GFC */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={boardroom}
                  alt="Executive boardroom"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-0 bg-background/20" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
                Why Global Freedom Capital
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-6">
                A Boutique Advisory Built on{" "}
                <span className="italic text-primary">Trust & Discretion</span>
              </h2>
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
              <ul className="mt-8 space-y-3">
                {[
                  "Founder-led, relationship-driven model",
                  "Cross-border strategic thinking",
                  "White-glove handling of complex family cases",
                  "Strong intermediary & attorney collaboration",
                  "Boots-on-the-ground international support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <ChevronRight size={14} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton to="/about" variant="outline">About Our Firm</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            label="Process"
            title="How It Works"
            subtitle="A refined, four-step process designed to deliver clarity, confidence, and results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 border border-border hover:border-primary/20 transition-colors"
              >
                <span className="text-4xl font-serif text-primary/20 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Attorneys */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Scale className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1} />
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
                For Immigration Attorneys & Partners
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-6">
                Your Trusted Outbound Investment Migration Partner
              </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Why Americans Are Seeking Second Citizenship in Record Numbers", category: "Global Mobility", date: "March 2026" },
              { title: "Golden Visa vs. Citizenship by Investment: Which Path Is Right for You?", category: "Advisory", date: "February 2026" },
              { title: "The Rise of the Strategic Family Office: Global Mobility as a Wealth Tool", category: "Wealth Strategy", date: "January 2026" },
            ].map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to="/insights"
                  className="group block p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{article.category}</span>
                  <h3 className="font-serif text-lg text-foreground mt-3 mb-4 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton to="/insights" variant="ghost">View All Insights</CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Begin Today
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Your Next Move Deserves a{" "}
              <span className="italic text-primary">Global Strategy</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you're an individual, family, attorney, or advisor—your journey to 
              global freedom begins with a single, confidential conversation.
            </p>
            <CTAButton to="/contact" variant="primary">
              Begin Your Private Consultation
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
