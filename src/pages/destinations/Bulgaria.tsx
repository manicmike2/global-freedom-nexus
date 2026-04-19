import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destPortugal from "@/assets/dest-portugal.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Bulgaria",
  type: "golden-visa" as const,
  tagline: "Golden Visa Program",
  label: "European Golden Visa",
  heroDescription: "Bulgaria's residency by investment program offers access to the EU through real estate or business investment. With Schengen Area membership and competitive investment thresholds, Bulgaria is an emerging destination for global investors.",
  heroSubDescription: "Explore all European Golden Visa programs:",
  image: destPortugal,
  imageAlt: "Bulgaria Golden Visa residency by investment destination",
  seoTitle: "Bulgaria Golden Visa | EU Residency | GFC",
  seoDescription: "Bulgaria Golden Visa — EU residency through investment. Competitive thresholds with Schengen access. Expert advisory from Global Freedom Capital. Free consultation.",
  canonicalPath: "/golden-visa/bulgaria",
  highlights: [
    { icon: Globe, title: "EU & Schengen Access", desc: "Bulgaria joined the Schengen Area, granting residence permit holders visa-free travel across member states." },
    { icon: Shield, title: "Competitive Threshold", desc: "One of the more affordable EU residency programs with growing investor interest." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse and dependent children in your residence permit application." },
    { icon: Clock, title: "6–9 Month Processing", desc: "Standard residence permit applications are processed within approximately 6 to 9 months from submission." },
  ],
  investmentOptions: [
    { title: "Government Bonds", amount: "From €512,000", desc: "Investment in Bulgarian government bonds held for a minimum of 5 years. Capital is returned at the end of the holding period, making this the most capital-efficient route." },
    { title: "Alternative Investment Fund", amount: "From €256,000", desc: "Investment in a licensed Bulgarian alternative investment fund focused on Bulgarian securities. Reduced threshold introduced to attract institutional-grade investors." },
    { title: "Bulgarian Company Investment", amount: "From €1,000,000", desc: "Direct investment in a Bulgarian company, with capital deployed in priority economic sectors and meeting job creation requirements." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility and EU residency objectives." },
    { step: "02", title: "Investment & Documentation", desc: "Complete your qualifying investment and prepare application documentation." },
    { step: "03", title: "Application Submission", desc: "Submit your residence permit application to the Bulgarian Migration Directorate." },
    { step: "04", title: "Residence Permit", desc: "Upon approval, receive your residence permit with pathway to permanent residency and citizenship." },
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
    { question: "What is the Bulgaria Golden Visa?", answer: "Bulgaria's residency by investment program allows non-EU nationals to obtain permanent residence through qualifying investments in government bonds, alternative investment funds, or Bulgarian companies. Bulgaria is a full EU member and joined the Schengen Area in 2024, granting permit holders visa-free travel across member states." },
    { question: "How much does Bulgaria's Golden Visa cost?", answer: "The most popular route is a €512,000 investment in Bulgarian government bonds held for 5 years, with the capital returned at maturity. A reduced €256,000 threshold is available via licensed alternative investment funds. Direct company investment requires €1 million." },
    { question: "Can I get EU citizenship through Bulgaria?", answer: "Yes. Bulgaria offers a pathway to citizenship after 5 years of permanent residency, granting full EU citizenship and one of the strongest passports in Europe. Citizenship requires meeting residency, language, and integration requirements." },
  ],
  faqHeading: "Bulgaria Golden Visa — Common Questions",
  ctaHeading: "Ready to Explore Bulgaria?",
  ctaDescription: "Our advisors will guide you through every step of the Bulgaria Golden Visa process. Book a confidential consultation to get started.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Bulgaria = () => <DestinationPageTemplate data={data} />;
export default Bulgaria;
