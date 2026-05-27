import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import FAQ from "@/components/FAQ";
import InternalLink from "@/components/InternalLink";
import { Globe, Shield, Users, Clock, LucideIcon } from "lucide-react";

export interface DestinationPageData {
  country: string;
  type: "cbi" | "golden-visa";
  tagline: string;
  label: string;
  heroDescription: string;
  heroSubDescription: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  highlights: { icon: LucideIcon; title: string; desc: string }[];
  investmentOptions: { title: string; amount: string; desc: string }[];
  timeline: { step: string; title: string; desc: string }[];
  eligibility: string[];
  faqItems: { question: string; answer: string }[];
  faqHeading: string;
  ctaHeading: string;
  ctaDescription: string;
  hubPath: string;
  hubLabel: string;
  licenses?: {
    heading?: string;
    label?: string;
    description?: string;
    items: { title: string; file: string; image?: string }[];
    verification?: { label: string; url: string };
  };
}

const DestinationPageTemplate = ({ data }: { data: DestinationPageData }) => {
  const programLabel = data.type === "cbi" ? "Citizenship by Investment" : "Golden Visa";
  const timelineLabel = data.type === "cbi" ? "From Application to Citizenship" : "From Application to Residency";

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title={data.seoTitle}
        description={data.seoDescription}
        canonical={`https://www.globalfreedomcapital.com${data.canonicalPath}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: `${data.country} ${programLabel}`,
              provider: { "@type": "Organization", name: "Global Freedom Capital", url: "https://www.globalfreedomcapital.com" },
              description: `Expert advisory for the ${data.country} ${programLabel} program.`,
              areaServed: "Worldwide",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalfreedomcapital.com/" },
                { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.globalfreedomcapital.com/destinations" },
                { "@type": "ListItem", position: 3, name: data.country, item: `https://www.globalfreedomcapital.com${data.canonicalPath}` },
              ],
            },
          ],
        }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">{data.label}</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
                {data.country} <span className="italic text-primary rounded-none">{data.tagline}</span>
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">{data.heroDescription}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {data.heroSubDescription}{" "}
                <InternalLink to={data.hubPath}>{data.hubLabel}</InternalLink> |{" "}
                <InternalLink to="/about">About us</InternalLink> |{" "}
                <InternalLink to="/destinations">All destinations</InternalLink>
              </p>
              <CTAButton to="/contact" variant="primary">Request Full Program Guide</CTAButton>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={data.image} alt={data.imageAlt} className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits / Highlights */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading label="Key Benefits" title={`Why ${data.country}`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.highlights.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
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
          <SectionHeading label="Investment Routes" title="Investment Options" />
          <div className="space-y-8">
            {data.investmentOptions.map((option, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-border p-8">
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

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="The Process" title={timelineLabel} />
          <div className="space-y-6">
            {data.timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start">
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

      {/* Eligibility */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <SectionHeading label="Requirements" title="Eligibility" />
          <div className="space-y-4">
            {data.eligibility.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      {data.licenses && (
        <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
          <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
            <SectionHeading
              label={data.licenses.label ?? "Credentials"}
              title={data.licenses.heading ?? "Our Licenses"}
              subtitle={data.licenses.description}
            />
            <div className="space-y-8">
              {data.licenses.items.map((doc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border bg-background p-4 sm:p-6 mx-auto max-w-xl"
                >
                  <h3 className="font-serif text-base text-foreground mb-4 text-center">{doc.title}</h3>
                  <div className="w-full overflow-hidden border border-border bg-card">
                    {doc.image ? (
                      <img src={doc.image} alt={doc.title} className="w-full h-auto block" loading="lazy" />
                    ) : (
                      <div className="aspect-[3/4]">
                        <object data={`${doc.file}#view=FitH&toolbar=0&navpanes=0`} type="application/pdf" className="w-full h-full">
                          <iframe src={doc.file} title={doc.title} className="w-full h-full" loading="lazy" />
                        </object>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.2em] uppercase text-primary hover:underline"
                    >
                      Open Document
                    </a>
                  </div>
                </motion.div>
              ))}
              {data.licenses.verification && (
                <p className="text-center text-sm text-muted-foreground">
                  Verify our listing on the official registry:{" "}
                  <a
                    href={data.licenses.verification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-words"
                  >
                    {data.licenses.verification.label}
                  </a>
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQ items={data.faqItems} heading={data.faqHeading} />

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">{data.ctaHeading}</h2>
          <p className="text-muted-foreground mb-10">{data.ctaDescription}</p>
          <CTAButton to="/contact" variant="primary">Request Full Program Guide</CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationPageTemplate;
