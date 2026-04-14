import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import StrategicInsight from "@/components/StrategicInsight";
import InternalLink from "@/components/InternalLink";
import FAQ from "@/components/FAQ";
import boardroom from "@/assets/boardroom.jpg";
import tatianaMuntean from "@/assets/tatiana-muntean.jpg";
import { ChevronRight, Shield, Users, Globe, Award, CheckCircle } from "lucide-react";

const values = [
  { title: "Discretion", desc: "Every engagement is handled with the utmost confidentiality. Your family's privacy is non-negotiable. We never disclose client identities, transaction details, or advisory relationships.", icon: Shield },
  { title: "Strategic Depth", desc: "We don't sell programs—we architect solutions. Every recommendation is rooted in cross-border strategic thinking, considering tax, legal, family, and lifestyle dimensions.", icon: Globe },
  { title: "White-Glove Service", desc: "From first consultation to final approval, every touchpoint reflects the premium standard our clients expect. Dedicated relationship managers, proactive updates, and meticulous attention to detail.", icon: Award },
];

const differentiators = [
  "Founder-led, relationship-driven advisory model",
  "U.S.-based with deep international network",
  "Deliberate, select client approach — not volume-driven",
  "Cross-border strategic thinking, not transactional selling",
  "Trusted by immigration attorneys and wealth advisors as an outbound partner",
  "Compliance-first methodology across all jurisdictions",
];

const timeline = [
  { year: "Founded", title: "Established in the U.S.", desc: "Global Freedom Capital was established as an expert advisory firm dedicated exclusively to investment migration and strategic residency solutions." },
  { year: "Network", title: "Global Partnerships", desc: "Built relationships with government-approved programs, licensed agents, and legal professionals across the Caribbean, Europe, and the Middle East." },
  { year: "Expertise", title: "Advisory Excellence", desc: "Developed deep expertise across citizenship by investment, Golden Visa, and residency-by-investment programs spanning 15+ jurisdictions." },
  { year: "Today", title: "Trusted Advisory Partner", desc: "Serving high-net-worth individuals, multigenerational families, and the attorneys and advisors who represent them." },
];

const faqItems = [
  { question: "Where is Global Freedom Capital based?", answer: "We are headquartered in New York, United States. Our U.S. presence allows us to serve American families and professionals directly while maintaining partnerships with government programs and legal professionals worldwide." },
  { question: "How is Global Freedom Capital different from other firms?", answer: "We are a founder-led, relationship-driven advisory that works with a deliberately select number of clients. We do not operate as a high-volume processing center. Every client receives personalized strategic guidance, direct access to senior advisors, and white-glove service throughout the entire process." },
  { question: "Do you provide legal advice?", answer: "No. Global Freedom Capital is an advisory firm, not a law firm. We provide strategic guidance on investment migration programs and coordinate with licensed attorneys in each jurisdiction. For legal matters, we work alongside your existing legal counsel or connect you with qualified professionals." },
  { question: "Can I work with my existing attorney?", answer: "Absolutely. We frequently collaborate with our clients' existing legal counsel, wealth advisors, and family office professionals. We also have a dedicated partnership program for immigration attorneys. Learn more on our For Attorneys page." },
  { question: "What programs do you specialize in?", answer: "We specialize in citizenship by investment programs (particularly Caribbean programs in Grenada, St Kitts, Antigua, Dominica, and Saint Lucia) and Golden Visa/residency programs (Portugal, Greece, Latvia, Hungary, Bulgaria, UAE, and Panama). We continuously evaluate new programs and jurisdictions." },
  { question: "How do I get started?", answer: "Schedule a confidential, obligation-free consultation through our contact page. During this initial conversation, we'll discuss your objectives, timeline, and family situation to determine the best path forward." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Global Mobility Advisory & Citizenship Experts | Tatiana Muntean | Global Freedom Capital"
        description="Meet Tatiana Muntean — IMC member, UN and OSCE veteran, and trusted global mobility advisor to high-net-worth families worldwide. Learn about our advisory approach."
        canonical="https://www.globalfreedomcapital.com/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Global Freedom Capital",
              description: "U.S.-based expert advisory firm specializing in citizenship by investment and Golden Visa programs.",
              url: "https://www.globalfreedomcapital.com",
              address: { "@type": "PostalAddress", addressLocality: "New York", addressCountry: "US" },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalfreedomcapital.com/" },
                { "@type": "ListItem", position: 2, name: "About", item: "https://www.globalfreedomcapital.com/about" },
              ],
            },
          ],
        }}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">About Us</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Global Mobility Advisory for <span className="italic text-primary rounded-none">High-Net-Worth Families</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Global Freedom Capital is a U.S.-based expert advisory firm specializing in{" "}
              <InternalLink to="/citizenship-by-investment">citizenship by investment</InternalLink>,{" "}
              <InternalLink to="/golden-visa">Golden Visa programs</InternalLink>, and strategic 
              residency solutions for the world's most discerning families.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              We exist to provide the caliber of strategic advisory that complex global mobility 
              decisions deserve—with the discretion, depth, and personal attention that our 
              clients expect from every aspect of their professional lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="pb-24 lg:pb-32 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={tatianaMuntean} alt="Tatiana Muntean – Founder & Managing Director of Global Freedom Capital" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Founder & Managing Director</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-2">Tatiana Muntean</h2>
              <p className="text-sm text-primary mb-6 tracking-wide">Global Freedom Capital</p>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Tatiana Muntean brings a distinguished international career spanning diplomacy, 
                  global governance, and strategic advisory to her role as founder and managing 
                  director of Global Freedom Capital.
                </p>
                <p>
                  With professional experience at the <strong className="text-foreground">United Nations</strong>, 
                  the <strong className="text-foreground">Organization for Security and Co-operation in Europe (OSCE)</strong>, 
                  and the <strong className="text-foreground">Investment Migration Council (IMC)</strong>, Tatiana has 
                  developed deep expertise in cross-border mobility, international policy frameworks, 
                  and the complex intersection of immigration, investment, and family planning.
                </p>
                <p>
                  Her career in international organizations provided a unique vantage point on global 
                  mobility trends, regulatory frameworks, and the needs of high-net-worth individuals 
                  navigating complex cross-border decisions. This foundation—combined with her hands-on 
                  advisory work—positions her as a trusted partner for families, attorneys, and wealth 
                  advisors seeking expert guidance on investment migration.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {["United Nations", "OSCE", "Investment Migration Council"].map((org) => (
                  <span key={org} className="text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-border text-muted-foreground">
                    {org}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image + Story */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="aspect-[4/3] overflow-hidden">
              <img src={boardroom} alt="Global Freedom Capital advisory team" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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

      {/* Strategic Insight */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <StrategicInsight title="Founder's Perspective">
            <p>
              The investment migration industry is at an inflection point. Demand from American families 
              has surged, yet the advisory landscape remains fragmented—dominated by offshore agents and 
              volume-driven operations. We built Global Freedom Capital to be the firm we would want to 
              work with ourselves: deeply knowledgeable, transparently structured, and uncompromising in 
              the quality of service we deliver.
            </p>
          </StrategicInsight>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Our Values" title="Built on Trust, Driven by Excellence" subtitle="Three principles that guide every client engagement and advisory decision." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border border-border">
                <val.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1} />
                <h3 className="font-serif text-xl text-foreground mb-3">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Differentiators</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-10">
            What Sets Us <span className="italic text-primary rounded-none">Apart</span>
          </h2>
          <ul className="space-y-4">
            {differentiators.map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <SectionHeading label="Our Journey" title="Building a Trusted Advisory" align="left" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6">
                <span className="text-xs tracking-[0.2em] uppercase text-primary w-20 flex-shrink-0 pt-1">{item.year}</span>
                <div className="border-l border-border pl-6">
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Our Clients" title="Who We Serve" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Individuals & Families", desc: "High-net-worth individuals and multigenerational families seeking second citizenship, Golden Visas, or strategic residency for themselves and their dependents.", link: "/contact" },
              { icon: Globe, title: "Attorneys & Advisors", desc: "U.S. immigration attorneys, wealth advisors, and family office professionals who need a vetted outbound investment migration partner for their clients.", link: "/for-attorneys" },
              { icon: Shield, title: "Program Stakeholders", desc: "Government-approved citizenship programs and real estate developers seeking strategic distribution and representation in the American market.", link: "/contact" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border border-border hover:border-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1} />
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <InternalLink to={item.link}>Learn more</InternalLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} heading="About Global Freedom Capital" />

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Ready to Begin?</h2>
          <p className="text-muted-foreground mb-10">
            Schedule a confidential consultation to discuss your global mobility objectives 
            with our advisory team.
          </p>
          <CTAButton to="/contact" variant="primary">Book a Private Consultation</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
