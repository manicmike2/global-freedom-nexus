import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destPortugal from "@/assets/dest-portugal.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Hungary",
  type: "golden-visa" as const,
  tagline: "Golden Visa Program",
  label: "European Golden Visa",
  heroDescription: "Hungary's Guest Investor Program offers a pathway to EU residency through investment in Hungarian real estate or government-approved funds. A strategic entry point to Central Europe and the Schengen Area.",
  heroSubDescription: "Explore all European Golden Visa programs:",
  image: destPortugal,
  imageAlt: "Hungary Golden Visa residency by investment destination",
  seoTitle: "Hungary Golden Visa | Residency by Investment | Global Freedom Capital",
  seoDescription: "Hungary Golden Visa — EU residency through the Guest Investor Program. Schengen access. Expert advisory from Global Freedom Capital. Free consultation.",
  canonicalPath: "/golden-visa/hungary",
  highlights: [
    { icon: Globe, title: "Schengen Access", desc: "Free movement across all Schengen Area countries with a Hungarian residence permit." },
    { icon: Shield, title: "Central EU Location", desc: "Strategic positioning in the heart of Europe with access to the EU single market." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse and dependent children in your residence permit application." },
    { icon: Clock, title: "3–4 Month Processing", desc: "Guest Investor visa applications are typically processed within 3 to 4 months from submission to issuance." },
  ],
  investmentOptions: [
    { title: "Real Estate Fund Investment", amount: "From €250,000", desc: "Investment in units of a qualifying Hungarian real estate fund registered with the Magyar Nemzeti Bank. Held for a minimum of 5 years — the most popular and accessible route." },
    { title: "Residential Real Estate", amount: "From €500,000", desc: "Direct purchase of qualifying residential real estate in Hungary. Subject to ministerial approval and held for a minimum 5-year qualifying period." },
    { title: "Donation to Higher Education", amount: "From €1,000,000", desc: "Non-refundable donation to a Hungarian higher education institution supporting research, teaching, or arts and cultural activities of public benefit." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility and EU residency objectives." },
    { step: "02", title: "Investment & Documentation", desc: "Complete your qualifying investment and prepare application documentation." },
    { step: "03", title: "Application Submission", desc: "Submit your Guest Investor visa application through the Hungarian authorities." },
    { step: "04", title: "Residence Permit", desc: "Upon approval, receive your residence permit with pathway to permanent residency." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Non-EU/EEA national",
    "Clean criminal record",
    "Valid health insurance",
    "Qualifying investment completed",
    "Documented legal source of investment funds",
  ],
  faqItems: [
    { question: "What is Hungary's Guest Investor Program?", answer: "The Hungary Guest Investor Program (Vendégbefektetői Tartózkodási Engedély) is a residency by investment program launched in 2024 that grants non-EU nationals a 10-year renewable residence permit through qualifying investments in real estate funds, property, or higher education donations. Permit holders gain full Schengen Area mobility." },
    { question: "How much does Hungary's Golden Visa cost?", answer: "The most accessible route is a €250,000 investment in a registered Hungarian real estate fund held for at least 5 years. Direct residential property purchases require €500,000, and donations to higher education institutions require €1 million." },
    { question: "Can I get EU citizenship through Hungary?", answer: "Yes. After 8 years of legal residency in Hungary (reduced to 3 years for those married to a Hungarian citizen), Guest Investor permit holders may apply for naturalisation, subject to language proficiency and integration requirements. Hungarian citizenship grants full EU rights." },
  ],
  faqHeading: "Hungary Golden Visa — Common Questions",
  ctaHeading: "Ready to Explore Hungary?",
  ctaDescription: "Our advisors will guide you through every step of the Hungary Golden Visa process. Book a confidential consultation to get started.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Hungary = () => <DestinationPageTemplate data={data} />;
export default Hungary;
