import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destPortugal from "@/assets/dest-portugal.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Latvia",
  type: "golden-visa" as const,
  tagline: "Golden Visa Program",
  label: "European Golden Visa",
  heroDescription: "Latvia's residence permit by investment program offers access to the EU and Schengen Area through real estate or business investment. A strategic gateway to the Baltic region and Northern Europe.",
  heroSubDescription: "Explore all European Golden Visa programs:",
  image: destPortugal,
  imageAlt: "Latvia Golden Visa residency by investment destination",
  seoTitle: "Latvia Golden Visa from €60K | Schengen Residency | GFC",
  seoDescription: "Latvia Golden Visa from €60,000 — affordable EU residency through business or real estate, with Schengen access and 2–3 month processing. GFC expert advisory.",
  canonicalPath: "/golden-visa/latvia",
  highlights: [
    { icon: Globe, title: "Schengen Access", desc: "Free movement across all 27 Schengen Area countries with a Latvian residence permit." },
    { icon: Shield, title: "EU Gateway", desc: "Strategic access to the European Union single market and Baltic business ecosystem." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse and dependent children in your residence permit application." },
    { icon: Clock, title: "2–3 Month Processing", desc: "Latvia offers one of Europe's fastest Golden Visa processing windows — typically 2 to 3 months from submission to permit issuance." },
  ],
  investmentOptions: [
    { title: "Real Estate Investment", amount: "From €250,000", desc: "Purchase qualifying residential or commercial real estate in Latvia with a cadastral value above the legal minimum. The property must be held for the duration of the residence permit." },
    { title: "Business Investment", amount: "From €60,000", desc: "Invest €60,000 in equity capital of a Latvian company, plus an annual state fee. The company must employ Latvian residents and contribute meaningful tax revenue." },
    { title: "Subordinated Bank Deposit", amount: "From €280,000", desc: "Subordinated deposit in a Latvian credit institution held for a minimum of 5 years. A capital-preserving route with full return at the end of the holding period." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility and EU residency objectives." },
    { step: "02", title: "Investment & Documentation", desc: "Complete your qualifying investment and prepare application documentation." },
    { step: "03", title: "Application Submission", desc: "Submit your residence permit application to the Latvian Office of Citizenship and Migration Affairs." },
    { step: "04", title: "Residence Permit", desc: "Upon approval, receive your temporary residence permit with renewal options." },
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
    { question: "What is the Latvia Golden Visa?", answer: "Latvia's residence permit by investment program, established in 2010, allows non-EU nationals to obtain a temporary residence permit through qualifying investments in real estate, business equity, or subordinated bank deposits. The permit is renewable and grants Schengen mobility." },
    { question: "How much does the Latvia Golden Visa cost?", answer: "Investment thresholds start at €60,000 for business investment, €250,000 for qualifying real estate, or €280,000 for a 5-year subordinated bank deposit. Government fees and an annual state contribution apply depending on the chosen route." },
    { question: "Can I travel freely in the EU with a Latvian residence permit?", answer: "Yes. A Latvian residence permit grants visa-free travel across the Schengen Area for up to 90 days in any 180-day period. You can live and work in Latvia with full residency rights." },
  ],
  faqHeading: "Latvia Golden Visa — Common Questions",
  ctaHeading: "Ready to Explore Latvia?",
  ctaDescription: "Our advisors will guide you through every step of the Latvia Golden Visa process. Book a confidential consultation to get started.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Latvia = () => <DestinationPageTemplate data={data} />;
export default Latvia;
