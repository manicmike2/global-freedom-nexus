import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import destPortugal from "@/assets/dest-portugal.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destMalta from "@/assets/dest-malta.jpg";
import destUae from "@/assets/dest-uae.jpg";
import destPanama from "@/assets/dest-panama.jpg";

const programs = [
  { country: "Portugal", image: destPortugal, investment: "From €500,000", pathway: "Permanent residency → citizenship in 5 years", highlight: "Gateway to the EU with one of Europe's most attractive residency programs." },
  { country: "Greece", image: destGreece, investment: "From €250,000", pathway: "5-year renewable residency permit", highlight: "Europe's most affordable Golden Visa with access to the Schengen Area." },
  { country: "Malta", image: destMalta, investment: "From €690,000", pathway: "Residency → citizenship by naturalization", highlight: "Full EU citizenship through Malta's Exceptional Investor Naturalization program." },
  { country: "UAE", image: destUae, investment: "From $550,000", pathway: "10-year Golden Visa", highlight: "Tax-free living in one of the world's most dynamic business environments." },
  { country: "Panama", image: destPanama, investment: "From $300,000", pathway: "Permanent residency", highlight: "Friendly Nations Visa offering a fast path to residency in the Americas." },
];

const GoldenVisas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Golden Visas & Residency</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Residency by Investment, <span className="italic text-primary">Reimagined</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Golden Visa and residency-by-investment programs offer a pathway to live, work, and 
              eventually gain citizenship in some of the world's most desirable jurisdictions. 
              For families seeking long-term strategic positioning, these programs represent the 
              intersection of lifestyle and legacy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
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
                  <img src={p.image} alt={p.country} className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
                </div>
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2">{p.country}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground">
                    <span>{p.investment}</span>
                    <span>•</span>
                    <span>{p.pathway}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.highlight}</p>
                  <div>
                    <CTAButton to="/contact" variant="outline">Inquire About {p.country}</CTAButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            Find Your <span className="italic text-primary">Ideal Jurisdiction</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Our advisors will match your objectives with the right residency program.
          </p>
          <CTAButton to="/contact" variant="primary">Book a Consultation</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoldenVisas;
