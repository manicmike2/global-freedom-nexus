import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import InternalLink from "@/components/InternalLink";
import FAQ from "@/components/FAQ";
import destPortugal from "@/assets/dest-portugal.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destMalta from "@/assets/dest-malta.jpg";
import destUae from "@/assets/dest-uae.jpg";
import destPanama from "@/assets/dest-panama.jpg";

const programs = [
  { country: "Portugal", path: "/golden-visa/portugal", image: destPortugal, investment: "From €500,000", timeline: "6–12 months", visaFree: "188+ (with citizenship)", highlight: "EU citizenship pathway in 5 years. One of Europe's most popular programs." },
  { country: "Greece", path: "/golden-visa/greece", image: destGreece, investment: "From €250,000", timeline: "3–6 months", visaFree: "186+ (with citizenship)", highlight: "Europe's most affordable Golden Visa. EU citizenship after 7 years." },
  { country: "Latvia", path: "/golden-visa/latvia", image: destPortugal, investment: "From €60,000", timeline: "2–3 months", visaFree: "Schengen access", highlight: "Strategic gateway to the Baltic region and Northern Europe." },
  { country: "Hungary", path: "/golden-visa/hungary", image: destPortugal, investment: "From €250,000", timeline: "3–4 months", visaFree: "Schengen access", highlight: "Guest Investor Program — Central European entry point." },
  { country: "Bulgaria", path: "/golden-visa/bulgaria", image: destPortugal, investment: "From €512,000", timeline: "6–9 months", visaFree: "EU & Schengen access", highlight: "Competitive thresholds with emerging EU market potential." },
  { country: "Malta", path: "/golden-visa/malta", image: destMalta, investment: "From €150,000", timeline: "4–6 months", visaFree: "Schengen access", highlight: "Malta Permanent Residence Programme (MPRP) — lifetime EU residency." },
  { country: "UAE", path: "/golden-visa/uae", image: destUae, investment: "From ~$545,000", timeline: "2–4 months", visaFree: "Global hub", highlight: "10-year renewable Golden Visa in a tax-efficient Gulf hub." },
  { country: "Panama", path: "/golden-visa/panama", image: destPanama, investment: "From $300,000", timeline: "30–60 days", visaFree: "Americas hub", highlight: "Qualified Investor Visa — fast permanent residency in a USD economy." },
];

const faqItems = [
  { question: "What is a Golden Visa?", answer: "A Golden Visa is a residency-by-investment program that grants non-EU nationals a residence permit through a qualifying investment. It typically provides Schengen Area access and a pathway to permanent residency or citizenship." },
  { question: "How is a Golden Visa different from CBI?", answer: "Golden Visa programs grant residency, while CBI programs grant full citizenship and a passport. Golden Visas offer a more gradual path with eventual citizenship eligibility after several years of residency." },
  { question: "Which European Golden Visa is most affordable?", answer: "Greece offers the lowest entry point at €250,000 for real estate investment. Portugal requires €500,000 for fund subscriptions. Latvia, Hungary, and Bulgaria have varying thresholds." },
  { question: "Do I need to live in Europe full-time?", answer: "Most Golden Visa programs have minimal stay requirements. Portugal requires just 7 days in the first year. Greece has no minimum stay for maintaining residency." },
];

const GoldenVisaHub = () => (
  <div className="min-h-screen bg-background">
    <PageSEO
      title="EU Residency by Investment | Golden Visa | GFC"
      description="Compare EU residency by investment programs: Portugal, Greece, Hungary, Bulgaria, Latvia. Schengen access from €60K. Expert advisory from GFC."
      canonical="https://www.globalfreedomcapital.com/golden-visa"
      jsonLd={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: "Golden Visa Advisory",
            provider: { "@type": "Organization", name: "Global Freedom Capital" },
            description: "Expert advisory for Golden Visa and residency by investment programs across Europe.",
            areaServed: "Worldwide",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalfreedomcapital.com/" },
              { "@type": "ListItem", position: 2, name: "Golden Visa", item: "https://www.globalfreedomcapital.com/golden-visa" },
            ],
          },
        ],
      }}
    />
    <Header />

    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Golden Visa</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            European <span className="italic text-primary rounded-none">Golden Visa</span> Programs
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed mb-4">
            Secure strategic EU residency through government-approved Golden Visa programs. 
            Access the Schengen Area with pathways to permanent residency and European citizenship.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Compare programs side by side or explore our{" "}
            <InternalLink to="/citizenship-by-investment">CBI programs</InternalLink> and{" "}
            <InternalLink to="/destinations">all destinations</InternalLink>.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div key={prog.country} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Link to={prog.path} className="group block relative overflow-hidden aspect-[3/4]">
                <img src={prog.image} alt={`${prog.country} Golden Visa program`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={1000} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">Residency</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary block mb-1">Europe</span>
                  <h3 className="font-serif text-2xl text-foreground mb-1">{prog.country}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{prog.investment} · {prog.timeline}</p>
                  <p className="text-xs text-primary/80">{prog.highlight}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <FAQ items={faqItems} heading="Golden Visa — FAQ" />

    <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Not Sure Which Program?</h2>
        <p className="text-muted-foreground mb-10">Our advisors will help you identify the right European residency pathway for your family.</p>
        <CTAButton to="/contact" variant="primary">Book a Strategy Call</CTAButton>
      </div>
    </section>

    <Footer />
  </div>
);

export default GoldenVisaHub;
