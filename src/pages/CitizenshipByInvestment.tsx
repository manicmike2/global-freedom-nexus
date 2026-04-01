import { motion } from "framer-motion";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { toAnchorId } from "@/lib/destinations";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import FAQ from "@/components/FAQ";
import StrategicInsight from "@/components/StrategicInsight";
import InternalLink from "@/components/InternalLink";
import destCaribbean from "@/assets/dest-caribbean.jpg";
import { Globe, Shield, Users, Briefcase, ChevronRight, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Global Mobility", desc: "Visa-free or visa-on-arrival access to 140+ countries, unlocking borderless travel for you and your family." },
  { icon: Shield, title: "Optionality & Security", desc: "A strategic Plan B providing geopolitical insurance, alternative residency, and peace of mind in an uncertain world." },
  { icon: Users, title: "Family Legacy", desc: "Most programs extend to spouses, children, and dependent parents—protecting your entire family's future across generations." },
  { icon: Briefcase, title: "Strategic Diversification", desc: "Access to international banking, business formation, and tax planning in favorable jurisdictions worldwide." },
];

const programs = [
  { country: "Grenada", investment: "From $150,000", timeline: "4-6 months", highlight: "Only Caribbean CBI with E-2 Treaty access to the U.S. Ideal for investors who want a Caribbean passport and the ability to live and work in America.", visaFree: "145+" },
  { country: "Saint Kitts & Nevis", investment: "From $250,000", timeline: "3-6 months", highlight: "The world's oldest and most established CBI program, operating since 1984. Trusted by families worldwide for its proven track record.", visaFree: "157+" },
  { country: "Antigua & Barbuda", investment: "From $230,000", timeline: "3-6 months", highlight: "Family-friendly with reduced rates for larger families. Includes a short residency requirement of just 5 days over 5 years.", visaFree: "151+" },
  { country: "Dominica", investment: "From $100,000", timeline: "3-4 months", highlight: "Most cost-effective citizenship by investment globally. Consistently ranked among the world's top CBI programs by independent assessments.", visaFree: "145+" },
];

const considerations = [
  { title: "Due Diligence Requirements", desc: "All CBI programs require comprehensive background checks. Programs with rigorous due diligence are generally more reputable and their passports carry greater international trust." },
  { title: "Tax Implications", desc: "A second citizenship alone does not change your tax obligations. U.S. citizens remain subject to worldwide taxation regardless of additional citizenships. Proper cross-border tax planning is essential." },
  { title: "Processing Timelines", desc: "While timelines range from 3-6 months, they depend on the completeness of your application, background check clearance, and the program's current processing volume." },
  { title: "Investment Structure", desc: "Programs typically offer two routes: a non-refundable donation to a government fund, or a qualifying real estate investment. Each has distinct advantages depending on your financial objectives." },
];

const idealClients = [
  "High-net-worth individuals seeking geopolitical optionality",
  "Families planning generational wealth preservation across borders",
  "Entrepreneurs needing global business mobility and market access",
  "U.S. citizens seeking a strategic Plan B for their family",
  "Professionals in restrictive-passport countries seeking upgraded travel freedom",
  "Investors looking to diversify their residency and citizenship portfolio",
];

const mistakes = [
  { title: "Choosing based on price alone", desc: "The cheapest program isn't always the best fit. Visa-free access, processing speed, family inclusion, and long-term program stability matter more than the upfront cost." },
  { title: "Ignoring due diligence quality", desc: "Programs with lax due diligence may see their passport's value decline over time as countries add visa restrictions." },
  { title: "Not planning for tax implications", desc: "Failing to consult a cross-border tax advisor before acquiring citizenship can lead to unexpected obligations." },
  { title: "Working with unvetted agents", desc: "The CBI industry has intermediaries of varying quality. Working with a licensed, government-authorized advisory ensures your application is handled properly." },
  { title: "Delaying the decision", desc: "Investment minimums and program terms change regularly. Several programs have increased their requirements significantly in recent years." },
];

const faqItems = [
  { question: "Is citizenship by investment legal?", answer: "Yes. Citizenship by investment programs are fully legal, government-sanctioned pathways established by sovereign nations. Each program operates under specific legislation and is subject to international oversight. Programs in the Caribbean, for example, have been operating for decades with full recognition from the international community." },
  { question: "How long does the process take?", answer: "Most Caribbean CBI programs process applications within 3-6 months from submission. Some programs offer expedited processing for an additional fee, which can reduce timelines to as little as 45-60 days. The timeline depends on due diligence clearance and the completeness of your documentation." },
  { question: "Can my family be included?", answer: "Yes. All major CBI programs allow you to include your spouse, dependent children (typically up to age 30), and in many cases, parents and grandparents over 55-65. Some programs, like Antigua & Barbuda, offer favorable pricing for larger families." },
  { question: "Do I need to live in the country?", answer: "Most Caribbean CBI programs have no physical residency requirement. Antigua & Barbuda requires 5 days of physical presence within the first 5 years. European programs like Malta require a period of residency before citizenship is granted." },
  { question: "Will I have to renounce my current citizenship?", answer: "No. All major CBI programs allow dual or multiple citizenship. You retain your existing citizenship(s) in full. However, it's important to check your home country's laws regarding dual citizenship, as some nations have restrictions." },
  { question: "What is the difference between CBI and a Golden Visa?", answer: "Citizenship by investment (CBI) grants you full citizenship and a passport. Golden Visa programs grant residency—typically temporary or permanent—with a potential pathway to citizenship after several years. CBI is faster but generally requires a higher investment, while Golden Visas offer a more gradual path." },
  { question: "Are there ongoing costs after obtaining citizenship?", answer: "Passport renewal fees apply (typically every 5-10 years). If you invested in real estate, you may have property maintenance costs. There are no annual citizenship fees, but government fee structures can change over time." },
  { question: "How does CBI affect my U.S. tax obligations?", answer: "Acquiring a second citizenship does not change your U.S. tax obligations. As a U.S. citizen or permanent resident, you remain subject to worldwide taxation by the IRS. However, proper structuring with a qualified cross-border tax advisor can help you plan effectively for your expanded global footprint." },
];

const CitizenshipByInvestment = () => {
  useHashScroll();
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Citizenship by Investment Programs 2026 – Second Passport Advisory"
        description="Explore government-approved citizenship by investment programs in Grenada, St Kitts, Antigua & Dominica. Expert advisory for HNWIs seeking second citizenship, global mobility & family legacy planning."
        canonical="https://globalfreedomcapital.com/citizenship-by-investment"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Citizenship by Investment Advisory",
          provider: { "@type": "Organization", name: "Global Freedom Capital" },
          description: "Expert advisory for citizenship by investment programs across the Caribbean, Europe, and beyond.",
          areaServed: "Worldwide",
        }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Citizenship by Investment</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
                A Second Citizenship, <span className="italic text-primary rounded-none">Strategically Acquired</span>
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Citizenship by investment enables qualified individuals and families to obtain full 
                citizenship in a sovereign nation through a government-approved economic contribution. 
                These are legal, time-tested pathways to global freedom.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                For high-net-worth families, a second passport is no longer a luxury—it is a strategic 
                imperative. In an era of geopolitical uncertainty, travel restrictions, and shifting tax 
                landscapes, citizenship diversification provides the ultimate form of optionality.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton to="/contact" variant="primary">Explore Your Options</CTAButton>
                <CTAButton to="/golden-visas" variant="outline">Compare with Golden Visas</CTAButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img src={destCaribbean} alt="Caribbean citizenship by investment destination" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Benefits" title="Why Citizenship by Investment" subtitle="A second passport is a strategic asset that compounds in value across generations." />
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

      {/* Strategic Insight */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <StrategicInsight title="Advisory Perspective">
            <p>
              We've observed a significant increase in inquiries from U.S.-based families since 2020. 
              The primary drivers are not tax-related—they are about optionality. Families want to 
              know that if the political, economic, or social landscape shifts, they have a credible 
              Plan B. A second citizenship provides exactly that, without requiring you to change 
              anything about your current life.
            </p>
          </StrategicInsight>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Ideal Client Profile</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
                Who Citizenship by Investment <span className="italic text-primary rounded-none">Is For</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Citizenship by investment is designed for individuals and families who value strategic 
                foresight, global access, and long-term family planning. Our clients typically share 
                several of these characteristics:
              </p>
              <ul className="space-y-4">
                {idealClients.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-foreground">Not sure if CBI is right for you?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If your primary goal is residency rather than full citizenship, a{" "}
                <InternalLink to="/golden-visas">Golden Visa program</InternalLink>{" "}
                may be a better fit. Golden Visas offer residency permits with potential pathways 
                to citizenship over time, typically at lower investment thresholds.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our advisors will help you determine the optimal path based on your specific 
                objectives, timeline, and family situation.{" "}
                <InternalLink to="/destinations">Explore all destinations</InternalLink>.
              </p>
              <CTAButton to="/contact" variant="outline">Discuss Your Options</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Programs" title="Featured Caribbean Programs" subtitle="The Caribbean region offers the world's most efficient and well-established citizenship by investment programs, trusted by thousands of families worldwide." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                id={toAnchorId(p.country)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-border hover:border-primary/30 transition-all scroll-mt-28"
              >
                <h3 className="font-serif text-2xl text-foreground mb-2">{p.country}</h3>
                <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase size={12} /> {p.investment}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {p.timeline}</span>
                  <span className="flex items-center gap-1"><Globe size={12} /> {p.visaFree} countries</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.highlight}</p>
                <CTAButton to="/contact" variant="ghost">Inquire About {p.country}</CTAButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Process" title="How Citizenship by Investment Works" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "We begin with a confidential discussion to understand your family's objectives, timeline, budget, and any specific jurisdictional preferences." },
              { step: "02", title: "Program Selection & Strategy", desc: "Based on your profile, we recommend the optimal program and investment route, considering factors like visa-free access, family inclusion, and long-term value." },
              { step: "03", title: "Documentation & Submission", desc: "Our team prepares your complete application package, including all required documentation, notarizations, and supporting materials for government submission." },
              { step: "04", title: "Due Diligence & Approval", desc: "The government conducts its due diligence review. We manage all communication and address any requests throughout the process until approval." },
            ].map((item, i) => (
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

      {/* Considerations */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Key Considerations" title="What You Should Know" subtitle="Important factors to evaluate before pursuing citizenship by investment." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {considerations.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 border border-border"
              >
                <AlertTriangle size={16} className="text-primary mb-3" />
                <h3 className="font-serif text-lg text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Expert Guidance</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-10">
            Common Mistakes to <span className="italic text-primary rounded-none">Avoid</span>
          </h2>
          <div className="space-y-6">
            {mistakes.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4"
              >
                <span className="text-primary font-serif text-lg mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-base text-foreground mb-1">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CBI vs Golden Visa Comparison */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Comparison" title="CBI vs. Golden Visa: Which Is Right for You?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 border border-border bg-card">
              <h3 className="font-serif text-xl text-foreground mb-4">Citizenship by Investment</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> Full citizenship and passport</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> 3-6 month processing</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> No residency requirement (Caribbean)</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> Immediate global mobility</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> Generational benefit</li>
              </ul>
              <div className="mt-6">
                <CTAButton to="/contact" variant="outline">Explore CBI</CTAButton>
              </div>
            </div>
            <div className="p-8 border border-border bg-card">
              <h3 className="font-serif text-xl text-foreground mb-4">Golden Visa / Residency</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> Residency permit (not citizenship)</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> Citizenship pathway in 5+ years</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> Lower entry investment (some programs)</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> EU/Schengen access (European programs)</li>
                <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" /> Real estate investment options</li>
              </ul>
              <div className="mt-6">
                <InternalLink to="/golden-visas">Learn about Golden Visas</InternalLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        heading="Citizenship by Investment: Your Questions Answered"
        label="Frequently Asked Questions"
      />

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            Ready to Secure Your <span className="italic text-primary rounded-none">Second Citizenship?</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Every journey begins with a private, obligation-free consultation. Our advisors 
            will assess your objectives and recommend the optimal pathway for your family.
          </p>
          <p className="text-xs text-muted-foreground mb-10">
            Already working with an attorney? Ask them about our{" "}
            <InternalLink to="/for-attorneys">attorney partnership program</InternalLink>.
          </p>
          <CTAButton to="/contact" variant="primary">Book a Private Consultation</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CitizenshipByInvestment;
