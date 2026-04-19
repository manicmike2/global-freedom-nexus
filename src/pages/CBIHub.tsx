import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import InternalLink from "@/components/InternalLink";
import FAQ from "@/components/FAQ";
import destGrenada from "@/assets/dest-grenada.jpg";
import destStkitts from "@/assets/dest-stkitts.jpg";
import destAntigua from "@/assets/dest-antigua.jpg";
import destDominica from "@/assets/dest-dominica.jpg";
import destStlucia from "@/assets/dest-stlucia.jpg";
import destCaribbean from "@/assets/dest-caribbean.jpg";

const programs = [
  { country: "Grenada", path: "/citizenship-by-investment/grenada", image: destGrenada, investment: "From $235,000", timeline: "4–6 months", visaFree: "145+", highlight: "Only Caribbean CBI with E-2 Treaty access to the U.S." },
  { country: "Saint Kitts & Nevis", path: "/citizenship-by-investment/saint-kitts-nevis", image: destStkitts, investment: "From $250,000", timeline: "3–6 months", visaFree: "157+", highlight: "World's oldest CBI program, operating since 1984." },
  { country: "Antigua & Barbuda", path: "/citizenship-by-investment/antigua-barbuda", image: destAntigua, investment: "From $230,000", timeline: "3–6 months", visaFree: "151+", highlight: "Family-friendly pricing with minimal 5-day residency requirement." },
  { country: "Dominica", path: "/citizenship-by-investment/dominica", image: destDominica, investment: "From $200,000", timeline: "3–4 months", visaFree: "145+", highlight: "Most cost-effective CBI globally. Top-ranked by CBI Index." },
  { country: "Saint Lucia", path: "/citizenship-by-investment/saint-lucia", image: destStlucia, investment: "From $240,000", timeline: "~3 months", visaFree: "140+", highlight: "Flexible investment routes including donation, real estate, and enterprise." },
  { country: "São Tomé & Príncipe", path: "/citizenship-by-investment/sao-tome-and-principe", image: destCaribbean, investment: "From $90,000", timeline: "2–3 months", visaFree: "ECOWAS+", highlight: "One of the most affordable CBI programs globally. Licensed agent access." },
  { country: "Sierra Leone", path: "/citizenship-by-investment/sierra-leone", image: destCaribbean, investment: "From $140,000", timeline: "2–4 months", visaFree: "Emerging", highlight: "'Go For Gold' program with cost optimization for families." },
];

const faqItems = [
  { question: "Is citizenship by investment legal?", answer: "Yes. Citizenship by investment programs are fully legal, government-sanctioned pathways established by sovereign nations. Each program operates under specific legislation and is subject to international oversight." },
  { question: "How long does the CBI process take?", answer: "Most Caribbean CBI programs process applications within 3–6 months from submission. Some programs offer expedited processing for an additional fee." },
  { question: "Can my family be included?", answer: "Yes. All major CBI programs allow you to include your spouse, dependent children, and in many cases, parents and grandparents." },
  { question: "Do I need to live in the country?", answer: "Most Caribbean CBI programs have no physical residency requirement. Antigua & Barbuda requires 5 days within the first 5 years." },
  { question: "What is the difference between CBI and a Golden Visa?", answer: "CBI grants full citizenship and a passport. Golden Visa programs grant residency with a potential pathway to citizenship after several years. Explore our Golden Visa programs." },
];

const CBIHub = () => (
  <div className="min-h-screen bg-background">
    <PageSEO
      title="Citizenship by Investment Programs 2026 | GFC"
      description="Compare leading citizenship by investment programs for HNW families: Antigua, St Kitts, Grenada, Dominica, Saint Lucia, São Tomé, Sierra Leone."
      canonical="https://www.globalfreedomcapital.com/citizenship-by-investment"
      jsonLd={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: "Citizenship by Investment Advisory",
            provider: { "@type": "Organization", name: "Global Freedom Capital" },
            description: "Expert advisory for citizenship by investment programs across the Caribbean.",
            areaServed: "Worldwide",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalfreedomcapital.com/" },
              { "@type": "ListItem", position: 2, name: "Citizenship by Investment", item: "https://www.globalfreedomcapital.com/citizenship-by-investment" },
            ],
          },
        ],
      }}
    />
    <Header />

    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Citizenship by Investment</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            Caribbean <span className="italic text-primary rounded-none">Citizenship by Investment</span> Programs
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed mb-4">
            Acquire second citizenship through government-approved investment programs across the Caribbean.
            These are legal, time-tested pathways to global freedom for high-net-worth families.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Compare programs side by side or explore our{" "}
            <InternalLink to="/golden-visa">Golden Visa programs</InternalLink> and{" "}
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
                <img src={prog.image} alt={`${prog.country} citizenship by investment`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={1000} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">Citizenship</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary block mb-1">Caribbean</span>
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

    <FAQ items={faqItems} heading="Citizenship by Investment — FAQ" />

    <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Not Sure Which Program?</h2>
        <p className="text-muted-foreground mb-10">Our advisors will help you identify the perfect Caribbean CBI program based on your family's unique objectives.</p>
        <CTAButton to="/contact" variant="primary">Book a Strategy Call</CTAButton>
      </div>
    </section>

    <Footer />
  </div>
);

export default CBIHub;
