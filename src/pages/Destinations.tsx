import { useState } from "react";
import { motion } from "framer-motion";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { getDestinationPath, toAnchorId } from "@/lib/destinations";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import FAQ from "@/components/FAQ";
import InternalLink from "@/components/InternalLink";
import destPortugal from "@/assets/dest-portugal.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destMalta from "@/assets/dest-malta.jpg";
import destUae from "@/assets/dest-uae.jpg";
import destPanama from "@/assets/dest-panama.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";
import destGrenada from "@/assets/dest-grenada.jpg";
import destStkitts from "@/assets/dest-stkitts.jpg";
import destAntigua from "@/assets/dest-antigua.jpg";
import destDominica from "@/assets/dest-dominica.jpg";

const allDestinations = [
  { name: "Grenada", region: "Caribbean", investment: "From $150,000", type: "Citizenship", advantage: "E-2 Treaty access to the U.S.", image: destGrenada, timeline: "4-6 months", visaFree: "145+", description: "The only Caribbean CBI program with E-2 Treaty investor visa access to the United States, making it uniquely valuable for investors seeking both a second passport and a pathway to live and work in America." },
  { name: "Saint Kitts & Nevis", region: "Caribbean", investment: "From $250,000", type: "Citizenship", advantage: "Oldest CBI program worldwide", image: destStkitts, timeline: "3-6 months", visaFree: "157+", description: "The world's first and most established citizenship by investment program, operating since 1984. Trusted by families worldwide for its proven track record and robust due diligence standards." },
  { name: "Antigua & Barbuda", region: "Caribbean", investment: "From $230,000", type: "Citizenship", advantage: "Family-friendly pricing structure", image: destAntigua, timeline: "3-6 months", visaFree: "151+", description: "A family-oriented CBI program with competitive rates for larger families and a minimal 5-day physical presence requirement over 5 years." },
  { name: "Dominica", region: "Caribbean", investment: "From $100,000", type: "Citizenship", advantage: "Most cost-effective CBI globally", image: destDominica, timeline: "3-4 months", visaFree: "145+", description: "Consistently ranked as the world's best citizenship by investment program by the CBI Index. Offers the lowest investment threshold among all CBI programs globally." },
  { name: "Portugal", region: "Europe", investment: "From €500,000", type: "Residency", advantage: "EU residency with citizenship pathway", image: destPortugal, timeline: "6-12 months", visaFree: "188+ (with citizenship)", description: "One of Europe's most popular Golden Visa programs, offering a clear pathway to EU citizenship within 5 years. Portugal's high quality of life and favorable tax regime make it a top destination." },
  { name: "Greece", region: "Europe", investment: "From €250,000", type: "Residency", advantage: "Affordable EU Golden Visa", image: destGreece, timeline: "3-6 months", visaFree: "186+ (with citizenship)", description: "Europe's most affordable Golden Visa program, offering access to the Schengen Area and a pathway to Greek (EU) citizenship after 7 years of residency." },
  { name: "Malta", region: "Europe", investment: "From €690,000", type: "Citizenship", advantage: "Full EU citizenship by naturalization", image: destMalta, timeline: "12-36 months", visaFree: "185+", description: "The gold standard for EU citizenship by investment. Malta's Exceptional Investor Naturalization program provides full EU citizenship and one of the world's most powerful passports." },
  { name: "Turkey", region: "Global", investment: "From $400,000", type: "Citizenship", advantage: "Fast-track citizenship in 3-6 months", image: destTurkey, timeline: "3-6 months", visaFree: "110+", description: "A fast-track citizenship program through real estate investment, offering access to a dynamic economy positioned between Europe and Asia." },
  { name: "UAE", region: "Global", investment: "From $550,000", type: "Residency", advantage: "Tax-free Golden Visa residency", image: destUae, timeline: "2-4 months", visaFree: "N/A (residency)", description: "The UAE Golden Visa offers 10-year renewable residency in one of the world's most dynamic, tax-free jurisdictions. A premier destination for entrepreneurs and family offices." },
  { name: "Panama", region: "Global", investment: "From $300,000", type: "Residency", advantage: "Friendly Nations Visa program", image: destPanama, timeline: "3-6 months", visaFree: "N/A (residency)", description: "Panama's Friendly Nations Visa offers a fast path to permanent residency in a dollarized economy with territorial taxation and a thriving international business environment." },
];

const regions = ["All", "Caribbean", "Europe", "Global"];

const faqItems = [
  { question: "Which destination is best for my family?", answer: "The ideal destination depends on your specific objectives: whether you prioritize speed (Caribbean CBI), EU access (Portugal, Greece, Malta), tax optimization (UAE, Panama), or U.S. market access (Grenada). Our advisors conduct a thorough assessment of your goals before recommending any jurisdiction." },
  { question: "Can I apply to multiple programs simultaneously?", answer: "Yes, it is possible to apply to multiple programs at the same time. Some families choose to pursue a Caribbean CBI for immediate global mobility while also starting a European Golden Visa for long-term EU access. We can help you strategize a multi-program approach." },
  { question: "How do investment amounts compare across regions?", answer: "Caribbean CBI programs range from $100,000 (Dominica) to $250,000 (St Kitts). European Golden Visas start at €250,000 (Greece) and go up to €690,000+ (Malta for citizenship). Global options like Turkey ($400,000) and UAE ($550,000) offer competitive alternatives." },
  { question: "Which programs offer the fastest processing?", answer: "Dominica (3-4 months) and Turkey (3-6 months) are among the fastest. Caribbean CBI programs generally process within 3-6 months. European Golden Visas can take 3-12 months for initial residency approval, with citizenship pathways taking 5-7+ years." },
];

const Destinations = () => {
  useHashScroll();
  const [activeRegion, setActiveRegion] = useState("All");
  const filtered = activeRegion === "All" ? allDestinations : allDestinations.filter((d) => d.region === activeRegion);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Citizenship by Investment Destinations | Caribbean & European Programs | Global Freedom Capital"
        description="Explore leading Citizenship by Investment and Golden Visa programs across the Caribbean and Europe. Compare benefits, timelines, and investment levels. Free consultation."
        canonical="https://www.globalfreedomcapital.com/destinations"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalfreedomcapital.com/" },
            { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.globalfreedomcapital.com/destinations" },
          ],
        }}
      />
      <Header />

      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Destinations</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Citizenship by Investment & <span className="italic text-primary rounded-none">Golden Visa Destinations</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl leading-relaxed mb-4">
              From the Caribbean to Europe and beyond, discover curated investment migration 
              programs in the world's most strategic jurisdictions.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Each destination has been selected for its program integrity, strategic value, and lifestyle appeal. 
              Compare{" "}
              <InternalLink to="/citizenship-by-investment">citizenship by investment</InternalLink> and{" "}
              <InternalLink to="/golden-visa">Golden Visa</InternalLink> options side by side.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-4 flex-wrap">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
                  activeRegion === r
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                {r} {r !== "All" && `(${allDestinations.filter(d => d.region === r).length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest, i) => (
              <motion.div
                key={dest.name}
                id={toAnchorId(dest.name)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="scroll-mt-28"
              >
                <Link to={getDestinationPath(dest.name)} className="group block relative overflow-hidden aspect-[3/4]">
                  <img src={dest.image} alt={`${dest.name} ${dest.type.toLowerCase()} by investment`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={1000} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">
                      {dest.type}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary block mb-1">{dest.region}</span>
                    <h3 className="font-serif text-2xl text-foreground mb-1">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{dest.investment} · {dest.timeline}</p>
                    <p className="text-xs text-primary/80">{dest.advantage}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Overviews */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Regional Overview" title="Investment Migration by Region" />
          <div className="space-y-12">
            {[
              { region: "Caribbean", desc: "The Caribbean offers the world's most efficient citizenship by investment programs. With processing times of 3-6 months, no residency requirements, and investment thresholds starting at $100,000, Caribbean CBI programs are ideal for families seeking immediate global mobility. Grenada stands out for its E-2 Treaty access to the U.S.", link: "/citizenship-by-investment" },
              { region: "Europe", desc: "European Golden Visa programs provide access to the world's most established economies and the Schengen Area. From Greece's affordable entry point at €250,000 to Malta's prestigious EU citizenship pathway, European programs suit families planning long-term relocation or generational positioning within the EU.", link: "/golden-visa" },
              { region: "Global", desc: "Beyond the Caribbean and Europe, select jurisdictions offer compelling residency and citizenship options. Turkey's fast-track citizenship, the UAE's tax-free Golden Visa, and Panama's territorial tax system each serve distinct strategic objectives for globally-minded families.", link: "/contact" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-serif text-2xl text-foreground mb-3">{item.region}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                <InternalLink to={item.link}>Explore {item.region} programs</InternalLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} heading="Choosing the Right Destination" />

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Not Sure Which Jurisdiction?</h2>
          <p className="text-muted-foreground mb-10">
            Our advisors will help you identify the perfect match based on your family's 
            unique objectives, timeline, and investment preferences.
          </p>
          <CTAButton to="/contact" variant="primary">Book a Strategy Call</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
