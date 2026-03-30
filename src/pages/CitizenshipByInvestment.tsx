import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import destCaribbean from "@/assets/dest-caribbean.jpg";
import { Globe, Shield, Users, Briefcase, ChevronRight } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Global Mobility", desc: "Visa-free or visa-on-arrival access to 140+ countries, unlocking borderless travel for you and your family." },
  { icon: Shield, title: "Optionality & Security", desc: "A strategic Plan B providing geopolitical insurance, alternative residency, and peace of mind." },
  { icon: Users, title: "Family Legacy", desc: "Most programs extend to spouses, children, and dependent parents—protecting your entire family's future." },
  { icon: Briefcase, title: "Strategic Diversification", desc: "Access to international banking, business formation, and tax planning in favorable jurisdictions." },
];

const programs = [
  { country: "Grenada", investment: "From $150,000", timeline: "4-6 months", highlight: "Only Caribbean CBI with E-2 Treaty access to the U.S." },
  { country: "Saint Kitts & Nevis", investment: "From $250,000", timeline: "3-6 months", highlight: "The world's oldest and most established CBI program." },
  { country: "Antigua & Barbuda", investment: "From $230,000", timeline: "3-6 months", highlight: "Family-friendly with reduced rates for larger families." },
  { country: "Dominica", investment: "From $100,000", timeline: "3-4 months", highlight: "Most cost-effective citizenship by investment globally." },
];

const CitizenshipByInvestment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Citizenship by Investment</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
                A Second Citizenship, <span className="italic text-primary">Strategically Acquired</span>
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Citizenship by investment enables qualified individuals and families to obtain full 
                citizenship in a sovereign nation through a government-approved economic contribution. 
                These are legal, time-tested pathways to global freedom.
              </p>
              <CTAButton to="/contact" variant="primary">Explore Your Options</CTAButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img src={destCaribbean} alt="Caribbean destination" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Benefits" title="Why Citizenship by Investment" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-border hover:border-primary/20 transition-colors"
              >
                <b.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1} />
                <h3 className="font-serif text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Programs" title="Featured Caribbean Programs" subtitle="The Caribbean region offers the world's most efficient and well-established citizenship by investment programs." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-border hover:border-primary/30 transition-all"
              >
                <h3 className="font-serif text-2xl text-foreground mb-2">{p.country}</h3>
                <div className="flex gap-6 mb-4 text-xs text-muted-foreground">
                  <span>{p.investment}</span>
                  <span>{p.timeline}</span>
                </div>
                <p className="text-sm text-primary/80 mb-4">{p.highlight}</p>
                <CTAButton to="/contact" variant="ghost">Learn More</CTAButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            Ready to Secure Your <span className="italic text-primary">Second Citizenship?</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Every journey begins with a private, obligation-free consultation.
          </p>
          <CTAButton to="/contact" variant="primary">Book a Private Consultation</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CitizenshipByInvestment;
