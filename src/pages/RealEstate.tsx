import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import InternalLink from "@/components/InternalLink";
import FAQ from "@/components/FAQ";
import destGrenada from "@/assets/dest-grenada.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destPortugal from "@/assets/dest-portugal.jpg";
import destUae from "@/assets/dest-uae.jpg";
import destPanama from "@/assets/dest-panama.jpg";
import { Building, TrendingUp, Shield, Globe, CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  { icon: Building, title: "Government-Approved Projects", desc: "All featured properties are pre-approved under their respective investment migration programs, ensuring your investment qualifies for residency or citizenship." },
  { icon: TrendingUp, title: "Capital Appreciation Potential", desc: "Carefully curated real estate in high-growth markets that offer both immigration benefits and strong potential for long-term value appreciation." },
  { icon: Shield, title: "Managed Investment Options", desc: "For investors who prefer a hands-off approach, we offer managed real estate fund options that qualify under various Golden Visa programs." },
  { icon: Globe, title: "Diversified Portfolio", desc: "Build a globally diversified real estate portfolio across the Caribbean, Europe, and the Middle East—each serving a strategic immigration purpose." },
];

const projects = [
  {
    country: "Grenada",
    region: "Caribbean",
    image: destGrenada,
    title: "CBI-Approved Resort & Residential Developments",
    investment: "From $220,000",
    program: "Citizenship by Investment",
    highlights: [
      "Government-approved real estate qualifying for CBI",
      "Luxury resort and branded residences",
      "Rental income potential during holding period",
      "E-2 Treaty access to the United States",
      "Title ownership with 5-year hold requirement",
    ],
    programLink: "/citizenship-by-investment#grenada",
  },
  {
    country: "Greece",
    region: "Europe",
    image: destGreece,
    title: "Golden Visa Qualifying Properties",
    investment: "From €250,000",
    program: "Golden Visa",
    highlights: [
      "Residential and commercial properties across Athens and the islands",
      "Strong rental yields in tourist-driven markets",
      "EU residency through real estate ownership",
      "No minimum stay requirement for visa renewal",
      "Growing real estate market with appreciation potential",
    ],
    programLink: "/golden-visa#greece",
  },
  {
    country: "Portugal",
    region: "Europe",
    image: destPortugal,
    title: "Fund-Based & Qualifying Real Estate",
    investment: "From €500,000",
    program: "Golden Visa",
    highlights: [
      "Real estate investment funds qualifying for Golden Visa",
      "Commercial and rehabilitation projects in Lisbon and Porto",
      "Path to EU citizenship in 5 years",
      "Favorable tax regime for new residents",
      "One of Europe's strongest real estate markets",
    ],
    programLink: "/golden-visa#portugal",
  },
  {
    country: "UAE",
    region: "Middle East",
    image: destUae,
    title: "Golden Visa Real Estate Investments",
    investment: "From $550,000",
    program: "Golden Visa",
    highlights: [
      "Off-plan and ready properties in Dubai and Abu Dhabi",
      "Tax-free rental income and capital gains",
      "10-year Golden Visa through property ownership",
      "World-class infrastructure and lifestyle",
      "Strong developer incentives and payment plans",
    ],
    programLink: "/golden-visa#uae",
  },
  {
    country: "Panama",
    region: "Americas",
    image: destPanama,
    title: "Friendly Nations Visa Properties",
    investment: "From $300,000",
    program: "Permanent Residency",
    highlights: [
      "Properties qualifying under the Friendly Nations Visa",
      "U.S. dollar-denominated market",
      "No capital gains tax on primary residence",
      "Growing expat community and infrastructure",
      "Strategic location between North and South America",
    ],
    programLink: "/golden-visa#panama",
  },
];

const faqItems = [
  { question: "Do I own the property outright?", answer: "In most programs, yes—you receive full title ownership of the property. Some programs also offer fractional ownership or shares in qualifying real estate funds. The ownership structure depends on the specific program and investment vehicle." },
  { question: "Can I rent out the property?", answer: "Yes, in most jurisdictions you can earn rental income from your qualifying property. Many CBI-approved developments in the Caribbean include hotel management agreements that generate rental returns during the holding period." },
  { question: "What is the typical holding period?", answer: "Most programs require a minimum holding period of 3-5 years. After this period, you can sell the property while maintaining your citizenship or residency status (rules vary by program). Some programs allow the next buyer to also qualify for immigration benefits." },
  { question: "How do you select featured projects?", answer: "We only feature projects that are officially approved under their respective government programs. We evaluate developer track record, construction quality, location, rental potential, and exit strategy before recommending any project to our clients." },
  { question: "Can I visit the property before investing?", answer: "Absolutely. We encourage property visits and can arrange inspection trips to your preferred destinations. For clients who prefer not to travel, we provide detailed virtual tours, legal documentation, and third-party appraisals." },
  { question: "What are the additional costs beyond the property price?", answer: "Additional costs typically include government processing fees, due diligence fees, legal fees, and in some cases stamp duty or transfer taxes. We provide a full cost breakdown during your consultation so there are no surprises." },
];

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="CBI & Golden Visa Real Estate | GFC"
        description="Explore government-approved real estate investments qualifying for citizenship and Golden Visa programs in Grenada, Greece, Portugal, UAE & Panama."
        canonical="https://www.globalfreedomcapital.com/real-estate"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Investment Migration Real Estate",
          provider: { "@type": "Organization", name: "Global Freedom Capital" },
          description: "Government-approved real estate investments for citizenship by investment and Golden Visa programs.",
        }}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Real Estate Opportunities</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Invest in Property, <span className="italic text-primary rounded-none">Gain the World</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Real estate is the foundation of many investment migration programs. Our curated portfolio 
              of government-approved properties combines immigration qualification with genuine investment 
              value—offering both a strategic pathway and a tangible asset.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Whether you're pursuing <InternalLink to="/citizenship-by-investment">citizenship by investment</InternalLink> in 
              the Caribbean or a <InternalLink to="/golden-visa">Golden Visa</InternalLink> in Europe, 
              we connect you with vetted developments that meet program requirements and your investment criteria.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton to="/contact" variant="primary">Request Property Details</CTAButton>
              <CTAButton to="/destinations" variant="outline">View All Destinations</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Why Real Estate" title="Investment Highlights" subtitle="Real estate-based immigration offers a unique dual benefit: a qualifying investment and a valuable asset." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border border-border hover:border-primary/20 transition-colors">
                <h.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1} />
                <h3 className="font-serif text-lg text-foreground mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Featured Projects" title="Curated Opportunities" subtitle="Government-approved real estate across premier investment migration jurisdictions." />
          <div className="space-y-8">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border overflow-hidden hover:border-primary/20 transition-colors"
              >
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img src={p.image} alt={`${p.country} real estate investment`} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
                </div>
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-2xl lg:text-3xl text-foreground">{p.country}</h3>
                    <span className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-primary/30 text-primary">{p.region}</span>
                  </div>
                  <p className="font-serif text-lg text-muted-foreground mb-1">{p.title}</p>
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground">
                    <span>{p.investment}</span>
                    <span>•</span>
                    <span>{p.program}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {p.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-foreground/70">
                        <CheckCircle size={12} className="text-primary flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <CTAButton to="/contact" variant="primary">Request Details</CTAButton>
                    <InternalLink to={p.programLink} className="inline-flex items-center gap-1 text-xs tracking-[0.12em] uppercase text-primary hover:underline">
                      View Program <ArrowRight size={12} />
                    </InternalLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} heading="Real Estate Investment Questions" />

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            Ready to Explore <span className="italic text-primary rounded-none">Investment Properties?</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Request a confidential portfolio overview tailored to your investment objectives 
            and immigration goals.
          </p>
          <CTAButton to="/contact" variant="primary">Request Individual Estimate</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstate;
