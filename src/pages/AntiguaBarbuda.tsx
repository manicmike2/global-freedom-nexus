import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import FAQ from "@/components/FAQ";
import InternalLink from "@/components/InternalLink";
import destAntigua from "@/assets/dest-antigua.jpg";
import { Globe, Shield, Users, Clock, CheckCircle } from "lucide-react";

const highlights = [
  { icon: Globe, title: "151+ Countries", desc: "Visa-free or visa-on-arrival access to over 151 countries worldwide, including the UK and Schengen Area." },
  { icon: Shield, title: "Family-Friendly", desc: "Competitive pricing for families with reduced per-dependent costs. Include spouse, children, parents, and grandparents." },
  { icon: Users, title: "Minimal Residency", desc: "Only 5 days of physical presence required within the first 5 years — one of the most flexible CBI programs globally." },
  { icon: Clock, title: "3–6 Month Processing", desc: "Applications are typically processed within 3 to 6 months from submission to approval." },
];

const investmentOptions = [
  { title: "National Development Fund (Donation)", amount: "From $230,000", desc: "A non-refundable contribution to the Antigua & Barbuda National Development Fund. The most straightforward route to citizenship." },
  { title: "Real Estate Investment", amount: "From $325,000", desc: "Purchase government-approved real estate with a minimum holding period of 5 years. The property can generate rental income during the holding period." },
  { title: "Business Investment", amount: "From $400,000", desc: "Invest in an approved business venture in Antigua & Barbuda, either individually or as a joint investment with other applicants." },
];

const faqItems = [
  { question: "What is the Antigua & Barbuda Citizenship by Investment program?", answer: "The Antigua & Barbuda Citizenship by Investment Program (CIP) is a government-authorized program established in 2013 that allows qualified individuals and their families to obtain full citizenship through an approved economic contribution. Applicants can choose from a donation to the National Development Fund, a qualifying real estate purchase, or an approved business investment." },
  { question: "How much does Antigua & Barbuda CBI cost?", answer: "The minimum investment starts at $230,000 for a donation to the National Development Fund (for a family of up to 4). Real estate investments start at $325,000 with a 5-year holding requirement. Business investments start at $400,000. Additional government fees, due diligence fees, and processing costs apply depending on the number of dependents." },
  { question: "How long does the Antigua CBI process take?", answer: "The Antigua & Barbuda CBI process typically takes 3 to 6 months from the submission of a complete application to the issuance of citizenship and passport. Timelines depend on the thoroughness of documentation and the speed of due diligence clearance." },
];

const AntiguaBarbuda = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Antigua & Barbuda Citizenship by Investment | Second Passport | Global Freedom Capital"
        description="Obtain Antigua & Barbuda citizenship by investment from $100,000. Global Freedom Capital guides HNW families through every step. Free private consultation available."
        canonical="https://www.globalfreedomcapital.com/antigua-barbuda"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Antigua & Barbuda Citizenship by Investment",
          provider: { "@type": "Organization", name: "Global Freedom Capital", url: "https://www.globalfreedomcapital.com" },
          description: "Expert advisory for the Antigua & Barbuda Citizenship by Investment program.",
          areaServed: "Worldwide",
        }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Caribbean Citizenship</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
                Antigua & Barbuda <span className="italic text-primary rounded-none">Citizenship by Investment</span> Program
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                The Antigua & Barbuda CBI program offers one of the Caribbean's most family-friendly 
                pathways to second citizenship, with competitive pricing for larger families and 
                visa-free access to 151+ countries.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Established in 2013, the program is fully government-authorized and internationally 
                recognized. Learn more about{" "}
                <InternalLink to="/citizenship-by-investment">citizenship by investment</InternalLink> or explore all{" "}
                <InternalLink to="/destinations">destinations</InternalLink>.
              </p>
              <CTAButton to="/contact" variant="primary">Book a Private Consultation</CTAButton>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={destAntigua} alt="Antigua & Barbuda citizenship by investment destination" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Program Highlights" title="Why Antigua & Barbuda" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <item.icon size={28} className="text-primary mx-auto mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Investment Routes" title="How to Qualify" />
          <div className="space-y-8">
            {investmentOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-8"
              >
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <h3 className="font-serif text-xl text-foreground">{option.title}</h3>
                  <span className="text-primary text-sm font-medium tracking-wide">{option.amount}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{option.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="The Process" title="From Application to Citizenship" />
          <div className="space-y-6">
            {[
              { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility, family structure, and objectives." },
              { step: "02", title: "Documentation & Due Diligence", desc: "We prepare your complete application package and guide you through the required due diligence." },
              { step: "03", title: "Application Submission", desc: "Your application is submitted to the Citizenship by Investment Unit (CIU) of Antigua & Barbuda." },
              { step: "04", title: "Approval & Citizenship", desc: "Upon approval, you complete your investment and receive your certificate of citizenship and passport." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <span className="text-primary font-serif text-2xl">{item.step}</span>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} heading="Antigua & Barbuda CBI — Common Questions" />

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Ready to Explore Antigua & Barbuda?</h2>
          <p className="text-muted-foreground mb-10">
            Our advisors will guide you through every step of the Antigua & Barbuda CBI process. 
            Book a confidential consultation to get started.
          </p>
          <CTAButton to="/contact" variant="primary">Book a Strategy Call</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntiguaBarbuda;
