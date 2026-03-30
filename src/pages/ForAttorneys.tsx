import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Scale, Shield, Users, Globe, ChevronRight } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Vetted Global Programs", desc: "Access government-approved citizenship and residency programs with full due diligence and compliance oversight." },
  { icon: Users, title: "White-Label Collaboration", desc: "Seamless partnership that keeps your client relationship intact while we handle the outbound migration advisory." },
  { icon: Globe, title: "U.S.-Based Communication", desc: "Responsive, same-timezone support from a U.S.-based team that understands your practice and your clients." },
  { icon: Scale, title: "Strategic Co-Advisory", desc: "Complement your immigration expertise with our investment migration specialization for a complete client solution." },
];

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Scale className="w-10 h-10 text-primary mb-6" strokeWidth={1} />
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">For Immigration Attorneys</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Your Trusted Outbound <span className="italic text-primary">Investment Migration</span> Partner
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              U.S. immigration attorneys increasingly encounter clients who need outbound solutions—second 
              citizenship, Golden Visas, or strategic residency abroad. Global Freedom Capital serves as 
              your vetted, specialized advisory partner for these cases.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Partnership Benefits" title="Why Attorneys Choose Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <h3 className="font-serif text-xl text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-foreground mb-6">How It Works</h2>
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                When your client expresses interest in citizenship by investment, a Golden Visa, 
                or strategic residency abroad, simply introduce us. We handle the entire outbound 
                advisory process—from program selection through application and approval.
              </p>
              <p>
                Your client relationship remains fully intact. We operate as an extension of your 
                advisory ecosystem, providing the specialized expertise your clients need while 
                you maintain your trusted counsel role.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Confidential referral process",
                "Transparent fee structures",
                "Regular status updates to you and your client",
                "Compliance-first approach across all jurisdictions",
                "Dedicated relationship manager for your firm",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <ChevronRight size={14} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            Let's Build a <span className="italic text-primary">Strategic Partnership</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Schedule a confidential call to discuss how we can support your clients' global mobility needs.
          </p>
          <CTAButton to="/contact" variant="primary">Schedule a Partner Call</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForAttorneys;
