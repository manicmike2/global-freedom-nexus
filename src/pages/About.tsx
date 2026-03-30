import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import boardroom from "@/assets/boardroom.jpg";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">About Us</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              The Private Advisory for <span className="italic text-primary">Global Freedom</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Global Freedom Capital is a U.S.-based boutique advisory firm specializing in citizenship by investment, 
              Golden Visa programs, and strategic residency solutions for the world's most discerning families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image + Story */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img src={boardroom} alt="Our advisory" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-6">Our Philosophy</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  We believe that global mobility is not a transaction—it is a strategic life decision 
                  that shapes the trajectory of families for generations. Our firm was founded on the 
                  principle that this decision deserves the same caliber of advisory that families expect 
                  from their private bankers, family offices, and legal counsel.
                </p>
                <p>
                  As a founder-led, relationship-driven advisory, we work with a deliberately select 
                  number of clients. This allows us to provide the depth of attention, discretion, 
                  and personalized strategy that complex global mobility cases demand.
                </p>
                <p>
                  Our U.S. presence positions us uniquely to serve American families seeking international 
                  optionality, while our global network ensures seamless execution across jurisdictions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Our Values" title="Built on Trust, Driven by Excellence" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Discretion", desc: "Every engagement is handled with the utmost confidentiality. Your family's privacy is non-negotiable." },
              { title: "Strategic Depth", desc: "We don't sell programs—we architect solutions. Every recommendation is rooted in cross-border strategic thinking." },
              { title: "White-Glove Service", desc: "From first consultation to final approval, every touchpoint reflects the premium standard our clients expect." },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-border"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Ready to Begin?</h2>
          <p className="text-muted-foreground mb-10">
            Schedule a confidential consultation to discuss your global mobility objectives.
          </p>
          <CTAButton to="/contact" variant="primary">Book a Private Consultation</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
