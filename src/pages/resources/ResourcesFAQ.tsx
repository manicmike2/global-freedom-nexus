import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import InternalLink from "@/components/InternalLink";

const faqItems = [
  { question: "What is Citizenship by Investment?", answer: "Citizenship by Investment (CBI) is a legal, government-authorised pathway that allows qualified individuals and their families to obtain full citizenship in a sovereign nation through a qualifying economic contribution — typically a non-refundable donation to a national development fund or an approved real estate investment. Successful applicants receive a passport with the same rights as citizens by birth, including the right to live, work, and travel under that nationality." },
  { question: "How much does Citizenship by Investment cost?", answer: "Investment thresholds vary by program. Caribbean CBI programs start at $200,000 (Dominica) and range up to $250,000 (Saint Kitts & Nevis) for a single applicant via the donation route. European Golden Visa residency programs range from €250,000 (Greece) to €500,000+ (Portugal). Government fees, due diligence costs, and professional advisory fees are additional and depend on family size." },
  { question: "How long does the CBI process take?", answer: "Caribbean Citizenship by Investment programs typically take 3 to 6 months from submission of a complete application to passport issuance. European Golden Visa residency programs generally take 6 to 12 months. Timelines depend on the completeness of documentation, the speed of due diligence clearance, and the responsiveness of the applicant during the process." },
  { question: "What is the difference between a Golden Visa and Citizenship by Investment?", answer: "A Golden Visa grants residency rights — the right to live and travel within a country (and often the wider Schengen Area) — while CBI grants immediate full citizenship and a passport. Golden Visa holders typically must wait 5 to 7+ years and meet residency, language, and integration requirements before they can apply for citizenship. CBI delivers a passport in months, with no residency obligations in most Caribbean programs." },
  { question: "Which CBI program is best for U.S. citizens?", answer: "Three programs are particularly popular among Americans. Grenada is the only Caribbean CBI nation with a U.S. E-2 Treaty, allowing citizens to apply for the E-2 investor visa. Saint Kitts & Nevis offers the world's oldest and most prestigious CBI passport. Dominica delivers the most cost-effective entry point, starting at $200,000. The right choice depends on your strategic objectives, family structure, and budget." },
  { question: "Is Citizenship by Investment legal?", answer: "Yes. CBI programs are fully legal and government-sanctioned, established under specific national legislation. Each program is administered by a dedicated government unit and applicants undergo rigorous multi-stage due diligence, often involving international vetting agencies. Caribbean programs in particular have strengthened their compliance frameworks to align with FATF, OECD, and EU standards." },
  { question: "What is the Investment Migration Council (IMC)?", answer: "The Investment Migration Council is the worldwide association for the investment migration industry, setting ethical standards, professional qualifications, and best-practice guidelines for advisors and government programs. IMC membership signals a commitment to compliance, transparency, and client-centric advisory. Our founder Tatiana Muntean is an IMC member." },
  { question: "Does Global Freedom Capital offer a free consultation?", answer: "Yes. We offer a confidential, obligation-free initial consultation to discuss your objectives, family situation, timeline, and the program options most aligned with your goals. There is no cost or commitment involved in this first conversation." },
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
