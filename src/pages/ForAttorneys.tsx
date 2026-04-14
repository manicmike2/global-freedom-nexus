import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import FAQ from "@/components/FAQ";
import StrategicInsight from "@/components/StrategicInsight";
import InternalLink from "@/components/InternalLink";
import { Scale, Shield, Users, Globe, ChevronRight, CheckCircle, Handshake, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Vetted Global Programs", desc: "Access government-approved citizenship and residency programs with full due diligence and compliance oversight. We only work with programs that meet the highest standards of integrity." },
  { icon: Users, title: "White-Label Collaboration", desc: "Seamless partnership that keeps your client relationship fully intact. We operate behind the scenes, providing the specialized expertise while you maintain your trusted counsel role." },
  { icon: Globe, title: "U.S.-Based Communication", desc: "Responsive, same-timezone support from a U.S.-based team that understands your practice, your clients, and the regulatory environment you operate in." },
  { icon: Scale, title: "Strategic Co-Advisory", desc: "Complement your immigration expertise with our investment migration specialization. Together, we deliver a complete solution for clients with both inbound and outbound needs." },
];

const referralProcess = [
  { step: "01", title: "Confidential Introduction", desc: "You identify a client with outbound investment migration needs and make a confidential introduction. We handle the initial assessment." },
  { step: "02", title: "Client Consultation", desc: "We conduct a thorough assessment of the client's objectives, family situation, and timeline—keeping you informed at every stage." },
  { step: "03", title: "Program Selection", desc: "Based on the client's profile, we recommend optimal programs and investment routes, providing you with a full advisory memo." },
  { step: "04", title: "Application & Execution", desc: "We manage the entire application process through approval, with regular status updates to both you and your client." },
];

const clientScenarios = [
  { title: "The HNWI Seeking a Plan B", desc: "Your client is a successful entrepreneur or executive who wants a second citizenship for their family—but doesn't want to leave the U.S. They need strategic optionality, not relocation." },
  { title: "The Family Office Client", desc: "A multigenerational family with complex cross-border interests wants to incorporate global mobility into their overall wealth and legacy strategy." },
  { title: "The Client with a Restrictive Passport", desc: "Your client holds a passport with limited travel access and needs an upgraded citizenship for business travel, family access, or educational opportunities." },
  { title: "The Client Considering Expatriation", desc: "A U.S. citizen is exploring the strategic, tax, and lifestyle implications of acquiring alternative residency or citizenship before making any decisions." },
];

const faqItems = [
  { question: "How does the referral process work?", answer: "When your client expresses interest in outbound investment migration, simply introduce us via email or schedule a three-way call. We handle the entire advisory and application process while keeping you informed. Your client relationship remains fully intact." },
  { question: "Do you pay referral fees?", answer: "We have transparent, professional fee structures for attorney partnerships. The specifics are discussed during our initial partner call and are structured to be compliant with all relevant professional standards." },
  { question: "What programs do you recommend?", answer: "We specialize in Caribbean citizenship by investment programs (Grenada, St Kitts, Antigua, Dominica) and Golden Visa/residency programs (Portugal, Greece, Malta, UAE, Panama). We recommend programs based on each client's unique objectives, not on commission structures." },
  { question: "How do you handle conflicts of interest?", answer: "We maintain strict ethical standards. If we identify any potential conflict, we disclose it immediately. We recommend programs based solely on the client's best interests, not on our commercial relationships." },
  { question: "Can you present at our firm's events?", answer: "Yes. We regularly present to law firms, bar associations, and professional groups on topics including outbound investment migration trends, program comparisons, and how to identify clients who may benefit from these solutions. Contact us to arrange a presentation." },
  { question: "What is your compliance framework?", answer: "We operate with a compliance-first methodology. All programs we recommend are government-sanctioned and subject to rigorous due diligence. We maintain detailed records of all client interactions and program recommendations." },
];

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="For Immigration Attorneys – Outbound Investment Migration Partnership"
        description="Partner with Global Freedom Capital for your clients' outbound investment migration needs. White-label CBI and Golden Visa advisory for U.S. immigration law firms."
        canonical="https://globalfreedomcapital.com/for-attorneys"
      />
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Scale className="w-10 h-10 text-primary mb-6" strokeWidth={1} />
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">For Immigration Attorneys</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Your Trusted Outbound <span className="italic text-primary rounded-none">Investment Migration</span> Partner
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              U.S. immigration attorneys increasingly encounter clients who need outbound solutions—second 
              citizenship, Golden Visas, or strategic residency abroad. Global Freedom Capital serves as 
              your vetted, specialized advisory partner for these cases.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Our partnership model is designed to complement your practice, not compete with it. 
              We handle the outbound advisory while you maintain your client relationship and 
              continue to serve as their trusted legal counsel.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton to="/contact" variant="primary">Schedule a Partner Call</CTAButton>
              <CTAButton to="/citizenship-by-investment" variant="outline">View Programs</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Insight */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <StrategicInsight title="Market Opportunity">
            <p>
              According to industry data, outbound investment migration inquiries from U.S.-based 
              individuals have increased significantly since 2020. Many immigration attorneys report 
              that 10-20% of their client base has expressed interest in second citizenship or residency 
              abroad. Having a vetted outbound partner allows you to serve this growing demand without 
              building an entirely new practice area.
            </p>
          </StrategicInsight>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Partnership Benefits" title="Why Attorneys Choose Us" subtitle="A partnership model built for trust, compliance, and mutual success." />
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

      {/* How It Works */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Process" title="How Our Partnership Works" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {referralProcess.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-border"
              >
                <span className="text-3xl font-serif text-primary/20 block mb-2">{item.step}</span>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Scenarios */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Client Scenarios" title="When to Refer" subtitle="Common situations where your clients may benefit from our outbound advisory." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientScenarios.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 border border-border"
              >
                <h3 className="font-serif text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs We Recommend */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Programs</span>
          <h2 className="font-serif text-3xl text-foreground mb-6">Programs We Recommend</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            We specialize in a curated set of programs selected for their legal integrity, 
            processing efficiency, and long-term value for clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-border">
              <h3 className="font-serif text-lg text-foreground mb-3">Citizenship by Investment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-primary" /> Grenada (E-2 Treaty access)</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-primary" /> Saint Kitts & Nevis</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-primary" /> Antigua & Barbuda</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-primary" /> Dominica</li>
              </ul>
              <div className="mt-4">
                <InternalLink to="/citizenship-by-investment">Learn more</InternalLink>
              </div>
            </div>
            <div className="p-6 border border-border">
              <h3 className="font-serif text-lg text-foreground mb-3">Golden Visas & Residency</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-primary" /> Portugal</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-primary" /> Greece</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-primary" /> Malta</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-primary" /> UAE & Panama</li>
              </ul>
              <div className="mt-4">
                <InternalLink to="/golden-visa">Learn more</InternalLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} heading="Attorney Partnership: Questions Answered" />

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <Handshake className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            Let's Build a <span className="italic text-primary rounded-none">Strategic Partnership</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Schedule a confidential call to discuss how we can support your clients' 
            global mobility needs and grow your practice.
          </p>
          <CTAButton to="/contact" variant="primary">Schedule a Partner Call</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForAttorneys;
