import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import InternalLink from "@/components/InternalLink";

const faqItems = [
  { question: "What is Citizenship by Investment?", answer: "[UPDATE: add answer explaining CBI as a legal, government-approved pathway to obtain full citizenship in a sovereign nation through a qualifying economic contribution such as a donation or real estate investment.]" },
  { question: "How much does Citizenship by Investment cost?", answer: "[UPDATE: add answer covering the range of investment thresholds — from $200,000 (Dominica) to $250,000 (St Kitts) for Caribbean programs, and €250,000 (Greece) to €500,000+ (Portugal) for European Golden Visas.]" },
  { question: "How long does the CBI process take?", answer: "[UPDATE: add answer covering typical timelines — 3–6 months for Caribbean CBI, 6–12 months for European Golden Visas, and factors that affect processing speed.]" },
  { question: "What is the difference between a Golden Visa and Citizenship by Investment?", answer: "[UPDATE: add answer explaining that Golden Visas grant residency while CBI grants full citizenship. Golden Visas offer a gradual path to citizenship over 5–7+ years, while CBI provides immediate citizenship.]" },
  { question: "Which CBI program is best for U.S. citizens?", answer: "[UPDATE: add answer highlighting Grenada's E-2 Treaty access, St Kitts' established reputation, and Dominica's cost-effectiveness as top choices for Americans.]" },
  { question: "Is Citizenship by Investment legal?", answer: "[UPDATE: add answer confirming CBI is fully legal, government-sanctioned, and regulated. Programs operate under specific legislation and are subject to rigorous due diligence.]" },
  { question: "What is the Investment Migration Council (IMC)?", answer: "[UPDATE: add answer explaining the IMC as the worldwide association for the investment migration industry, setting ethical standards and professional qualifications. Tatiana Muntean is an IMC member.]" },
  { question: "Does Global Freedom Capital offer a free consultation?", answer: "[UPDATE: add answer confirming that Global Freedom Capital offers a confidential, obligation-free initial consultation to discuss your objectives, timeline, and situation.]" },
];

const ResourcesFAQ = () => (
  <div className="min-h-screen bg-background">
    <PageSEO
      title="Citizenship by Investment FAQ | Common Questions Answered | Global Freedom Capital"
      description="Frequently asked questions about citizenship by investment, Golden Visas, costs, timelines, and eligibility. Expert answers from Global Freedom Capital."
      canonical="https://www.globalfreedomcapital.com/resources/faq"
    />
    <Header />

    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Resources</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            Frequently Asked Questions About <span className="italic text-primary rounded-none">Citizenship by Investment</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            Answers to the most common questions about investment migration, citizenship by investment, 
            and Golden Visa programs. Explore our{" "}
            <InternalLink to="/resources/blog">blog</InternalLink> for in-depth guides.
          </p>
        </motion.div>
      </div>
    </section>

    <FAQ items={faqItems} heading="Common Questions" />

    <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-10">Book a confidential, obligation-free consultation with our advisory team.</p>
        <CTAButton to="/contact" variant="primary">Book a Private Consultation</CTAButton>
      </div>
    </section>

    <Footer />
  </div>
);

export default ResourcesFAQ;
