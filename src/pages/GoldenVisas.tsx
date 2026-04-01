import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import FAQ from "@/components/FAQ";
import StrategicInsight from "@/components/StrategicInsight";
import InternalLink from "@/components/InternalLink";
import destPortugal from "@/assets/dest-portugal.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destMalta from "@/assets/dest-malta.jpg";
import destUae from "@/assets/dest-uae.jpg";
import destPanama from "@/assets/dest-panama.jpg";
import { CheckCircle, Clock, Globe, AlertTriangle, ChevronRight } from "lucide-react";

const programs = [
  {
    country: "Portugal",
    image: destPortugal,
    investment: "From €500,000",
    pathway: "Permanent residency → citizenship in 5 years",
    highlight: "Gateway to the EU with one of Europe's most attractive residency programs. Portugal offers a high quality of life, political stability, and access to the entire Schengen Area.",
    details: [
      "Access to all 27 EU member states",
      "Minimal physical presence requirements",
      "Path to full EU citizenship and passport",
      "Favorable Non-Habitual Resident (NHR) tax regime",
    ],
  },
  {
    country: "Greece",
    image: destGreece,
    investment: "From €250,000",
    pathway: "5-year renewable residency permit",
    highlight: "Europe's most affordable Golden Visa with access to the Schengen Area. Greece offers a compelling combination of value, lifestyle, and strategic European positioning.",
    details: [
      "Lowest investment threshold in Europe",
      "No minimum stay requirement for residency renewal",
      "Real estate appreciation in key markets",
      "Pathway to citizenship after 7 years of residency",
    ],
  },
  {
    country: "Malta",
    image: destMalta,
    investment: "From €690,000",
    pathway: "Residency → citizenship by naturalization",
    highlight: "Full EU citizenship through Malta's Exceptional Investor Naturalization program. The gold standard for obtaining a European passport through investment.",
    details: [
      "Full EU citizenship and passport",
      "English-speaking, stable jurisdiction",
      "Strong banking and financial services infrastructure",
      "Visa-free access to 185+ countries",
    ],
  },
  {
    country: "UAE",
    image: destUae,
    investment: "From $550,000",
    pathway: "10-year Golden Visa",
    highlight: "Tax-free living in one of the world's most dynamic business environments. The UAE Golden Visa has become a premier destination for global entrepreneurs and families.",
    details: [
      "Zero personal income tax",
      "World-class infrastructure and safety",
      "Strategic geographic hub between East and West",
      "Growing ecosystem for family offices and wealth management",
    ],
  },
  {
    country: "Panama",
    image: destPanama,
    investment: "From $300,000",
    pathway: "Permanent residency",
    highlight: "Friendly Nations Visa offering a fast path to residency in the Americas. Panama is a strategic base for international business with a dollarized economy.",
    details: [
      "Territorial tax system (no tax on foreign-source income)",
      "U.S. dollar-based economy",
      "Modern banking infrastructure",
      "Fast-growing international business hub",
    ],
  },
];

const idealClients = [
  "Families seeking EU residency or citizenship for their children's future",
  "Retirees looking for a high-quality lifestyle with favorable tax treatment",
  "Entrepreneurs who need a base in Europe, the Middle East, or the Americas",
  "Investors seeking real estate opportunities combined with residency benefits",
  "Professionals planning a gradual international relocation",
];

const faqItems = [
  { question: "What is a Golden Visa?", answer: "A Golden Visa is a residency-by-investment program that grants foreign nationals the right to live, work, and in some cases eventually obtain citizenship in a country, in exchange for a qualifying investment—typically in real estate, government bonds, or a business. Unlike citizenship by investment, a Golden Visa grants residency first, with citizenship as a potential long-term outcome." },
  { question: "What is the cheapest Golden Visa in Europe?", answer: "Greece currently offers Europe's most affordable Golden Visa at €250,000 for qualifying real estate investments, though this threshold has increased in prime areas like Athens. Other affordable options include Portugal (from €500,000) and Spain (from €500,000). Investment minimums can change, so it's important to work with current information." },
  { question: "Can I get EU citizenship through a Golden Visa?", answer: "Yes, most European Golden Visa programs offer a pathway to citizenship after a period of legal residency, typically 5-7 years. Portugal offers one of the fastest paths at 5 years. You'll typically need to demonstrate basic language proficiency and ties to the country. Malta's program can lead to EU citizenship through a separate naturalization track." },
  { question: "Do I have to live in the country to maintain my Golden Visa?", answer: "Requirements vary. Portugal requires an average of 7 days per year. Greece has no minimum stay for residency renewal, but requires physical presence for citizenship. The UAE Golden Visa requires periodic entry. Each program has specific rules, and we help you understand and plan for them." },
  { question: "How does a Golden Visa compare to citizenship by investment?", answer: "Golden Visas provide residency with a potential path to citizenship over time (5-7+ years). Citizenship by investment programs grant full citizenship and a passport within months. Golden Visas generally require lower investments and offer access to specific regions (like the EU), while CBI provides immediate global mobility. Learn more on our citizenship by investment page." },
  { question: "Are Golden Visa investments recoverable?", answer: "Many Golden Visa investments are in real estate, which retains value and can appreciate. After the mandatory holding period (typically 5 years), you may sell the property while maintaining your residency in some jurisdictions. Government bond and fund investments are typically returned after the holding period. The specifics depend on the program." },
  { question: "What are the tax implications of a Golden Visa?", answer: "Tax implications vary significantly by jurisdiction. Portugal's former NHR regime offered favorable tax treatment. The UAE has no personal income tax. Greece offers a flat tax option for foreign retirees. U.S. citizens should note they remain subject to worldwide taxation regardless of where they reside. We always recommend engaging a cross-border tax advisor." },
  { question: "Can I work in the country with a Golden Visa?", answer: "Most Golden Visa programs grant the right to live and work in the issuing country. In the EU, your residency may also allow you to travel freely throughout the Schengen Area, though working rights may be limited to the issuing country. The UAE Golden Visa explicitly permits employment and business ownership." },
];

const GoldenVisas = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Golden Visa Programs 2026 – Residency by Investment Guide"
        description="Compare Golden Visa programs in Portugal, Greece, Malta, UAE & Panama. Expert advisory on residency by investment for HNWIs seeking EU residency, tax optimization & global mobility."
        canonical="https://globalfreedomcapital.com/golden-visas"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Golden Visa & Residency by Investment Advisory",
          provider: { "@type": "Organization", name: "Global Freedom Capital" },
          description: "Expert advisory for Golden Visa and residency by investment programs worldwide.",
          areaServed: "Worldwide",
        }}
      />
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Golden Visas & Residency</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Residency by Investment, <span className="italic text-primary rounded-none">Reimagined</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Golden Visa and residency-by-investment programs offer a pathway to live, work, and 
              eventually gain citizenship in some of the world's most desirable jurisdictions. 
              For families seeking long-term strategic positioning, these programs represent the 
              intersection of lifestyle and legacy.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Unlike <InternalLink to="/citizenship-by-investment">citizenship by investment</InternalLink>, 
              Golden Visa programs grant residency first—with citizenship as a potential long-term outcome. 
              This gradual approach is ideal for families who want to establish roots in a new jurisdiction 
              before making a permanent commitment.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton to="/contact" variant="primary">Explore Golden Visas</CTAButton>
              <CTAButton to="/citizenship-by-investment" variant="outline">Compare with CBI</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Insight */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <StrategicInsight title="Market Intelligence">
            <p>
              European Golden Visa programs are in a period of significant evolution. Several countries 
              have increased investment thresholds or modified eligibility criteria in recent years. 
              Portugal restructured its program in 2023, Greece has raised minimums in key areas, and 
              Spain is considering changes. For families considering European residency, acting with 
              informed urgency—not haste—is the strategic approach.
            </p>
          </StrategicInsight>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Ideal Client Profile</span>
              <h2 className="font-serif text-3xl text-foreground mb-6">
                Is a Golden Visa Right <span className="italic text-primary rounded-none">for You?</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Golden Visa programs are best suited for individuals and families who value a measured, 
                strategic approach to international relocation and want to establish a footprint in a 
                new jurisdiction over time.
              </p>
              <ul className="space-y-3">
                {idealClients.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 border border-border bg-card">
              <h3 className="font-serif text-xl text-foreground mb-4">Quick Comparison</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Fastest to citizenship</span>
                  <span className="text-foreground">Portugal (5 years)</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Lowest investment</span>
                  <span className="text-foreground">Greece (€250,000)</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Tax-free residency</span>
                  <span className="text-foreground">UAE</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">EU passport pathway</span>
                  <span className="text-foreground">Malta, Portugal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Americas gateway</span>
                  <span className="text-foreground">Panama</span>
                </div>
              </div>
              <div className="mt-6">
                <CTAButton to="/destinations" variant="ghost">View all destinations</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Programs" title="Golden Visa Destinations" subtitle="Each program offers a unique combination of investment structure, lifestyle, and strategic value." />
          <div className="space-y-8">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border overflow-hidden hover:border-primary/20 transition-colors"
              >
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img src={p.image} alt={`${p.country} Golden Visa program`} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
                </div>
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2">{p.country}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground">
                    <span>{p.investment}</span>
                    <span>•</span>
                    <span>{p.pathway}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.highlight}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {p.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-foreground/70">
                        <ChevronRight size={12} className="text-primary flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <CTAButton to="/contact" variant="outline">Inquire About {p.country}</CTAButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portugal vs Greece Comparison */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Head-to-Head" title="Portugal vs. Greece Golden Visa" subtitle="Two of Europe's most popular Golden Visa programs compared across key decision factors." />
          <div className="grid grid-cols-3 gap-0 text-sm border border-border">
            {/* Header */}
            <div className="p-4 bg-card border-b border-r border-border font-serif text-foreground">Factor</div>
            <div className="p-4 bg-card border-b border-r border-border font-serif text-foreground text-center">Portugal</div>
            <div className="p-4 bg-card border-b border-border font-serif text-foreground text-center">Greece</div>
            {/* Rows */}
            {[
              ["Minimum Investment", "€500,000", "€250,000"],
              ["Time to Citizenship", "5 years", "7 years"],
              ["Physical Presence", "~7 days/year", "None for renewal"],
              ["EU Passport Pathway", "Yes", "Yes"],
              ["Language Required", "A2 Portuguese", "B1 Greek (for citizenship)"],
              ["Real Estate Option", "Yes (funds/RE)", "Yes (real estate)"],
            ].map(([factor, portugal, greece], i) => (
              <motion.div key={i} className="contents" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="p-4 border-b border-r border-border text-muted-foreground">{factor}</div>
                <div className="p-4 border-b border-r border-border text-foreground text-center">{portugal}</div>
                <div className="p-4 border-b border-border text-foreground text-center">{greece}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Key Considerations</span>
          <h2 className="font-serif text-3xl text-foreground mb-10">Before You Apply</h2>
          <div className="space-y-6">
            {[
              { title: "Investment Recovery", desc: "Most Golden Visa investments in real estate can be sold after a mandatory holding period (typically 5 years). Consider the local property market, rental yields, and exit strategy." },
              { title: "Changing Program Terms", desc: "Golden Visa programs are subject to policy changes. Investment minimums, eligible property types, and processing requirements have all shifted in recent years across multiple jurisdictions." },
              { title: "Physical Presence Planning", desc: "While many programs have minimal presence requirements, those seeking citizenship will need to plan for increased physical presence and integration into the local community." },
              { title: "Family Inclusion Strategy", desc: "Evaluate which family members can be included and at what cost. Some programs offer better value for larger families, while others have age restrictions for dependents." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <AlertTriangle size={16} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-base text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} heading="Golden Visa: Your Questions Answered" />

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            Find Your <span className="italic text-primary rounded-none">Ideal Jurisdiction</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Our advisors will match your objectives with the right residency program, 
            considering your family structure, investment preferences, and long-term goals.
          </p>
          <p className="text-xs text-muted-foreground mb-10">
            Considering citizenship instead? Explore our{" "}
            <InternalLink to="/citizenship-by-investment">citizenship by investment programs</InternalLink>.
          </p>
          <CTAButton to="/contact" variant="primary">Book a Consultation</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoldenVisas;
