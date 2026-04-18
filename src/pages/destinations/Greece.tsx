import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destGreece from "@/assets/dest-greece.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Greece",
  type: "golden-visa" as const,
  tagline: "Golden Visa Program",
  label: "European Golden Visa",
  heroDescription: "Europe's most affordable Golden Visa program, offering access to the Schengen Area and a pathway to Greek (EU) citizenship after 7 years of residency. Real estate investment starting from €250,000.",
  heroSubDescription: "Explore all European Golden Visa programs:",
  image: destGreece,
  imageAlt: "Greece Golden Visa residency by investment destination",
  seoTitle: "Greece Golden Visa | Residency by Investment | Global Freedom Capital",
  seoDescription: "Greece Golden Visa from €250,000 — Europe's most affordable. EU residency with citizenship pathway. Expert advisory from Global Freedom Capital. Free consultation.",
  canonicalPath: "/golden-visa/greece",
  highlights: [
    { icon: Globe, title: "186+ Countries (with citizenship)", desc: "Greek citizenship grants visa-free access to 186+ countries and full EU rights across all member states." },
    { icon: Shield, title: "Most Affordable EU Entry", desc: "Starting from €250,000, Greece offers the lowest investment threshold for EU Golden Visa programs." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children under 21, and parents of both the main applicant and spouse." },
    { icon: Clock, title: "3–6 Month Processing", desc: "One of the fastest Golden Visa processing times in Europe." },
  ],
  investmentOptions: [
    { title: "Real Estate Investment", amount: "From €250,000", desc: "Purchase real estate in eligible areas of Greece. Athens, Thessaloniki, Mykonos, Santorini, and other high-demand zones now require €800,000, while most other regions require €400,000. The €250,000 threshold remains for commercial-to-residential conversions and listed heritage properties." },
    { title: "Capital Investment", amount: "From €400,000", desc: "Investment in Greek government bonds, corporate bonds, shares of Greek-listed companies, or term deposits in a Greek credit institution held for the duration of the permit." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility and EU residency objectives." },
    { step: "02", title: "Property Selection & Purchase", desc: "Identify and acquire qualifying real estate with our guidance." },
    { step: "03", title: "Application Submission", desc: "Submit your Golden Visa application to the Greek immigration authorities." },
    { step: "04", title: "Residency Permit", desc: "Receive your 5-year residence permit, renewable indefinitely." },
    { step: "05", title: "Citizenship Eligibility", desc: "After 7 years of legal residency, apply for Greek (EU) citizenship." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Non-EU/EEA national",
    "Clean criminal record",
    "Valid health insurance covering Greece",
    "Qualifying real estate or capital investment completed",
    "Documented legal source of investment funds",
  ],
  faqItems: [
    { question: "What is the Greece Golden Visa?", answer: "The Greece Golden Visa is a residency-by-investment program granting non-EU nationals a 5-year renewable residence permit through qualifying real estate or capital investment. It provides Schengen Area access and a pathway to EU citizenship after 7 years." },
    { question: "How much does the Greece Golden Visa cost?", answer: "Real estate investment starts at €250,000 in eligible areas, with some premium locations requiring €500,000. Capital investment alternatives start at €400,000. Government and legal fees apply." },
    { question: "Do I need to live in Greece?", answer: "No. The Greece Golden Visa has no minimum stay requirement for maintaining residency. However, 7 years of legal residency is required for citizenship eligibility." },
    { question: "Can I rent out my Greek property?", answer: "Yes. Property purchased under the Golden Visa can be rented out, providing rental income while maintaining your residency status." },
  ],
  faqHeading: "Greece Golden Visa — Common Questions",
  ctaHeading: "Ready to Explore Greece?",
  ctaDescription: "Our advisors will guide you through every step of the Greece Golden Visa process. Book a confidential consultation to get started.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Greece = () => <DestinationPageTemplate data={data} />;
export default Greece;
