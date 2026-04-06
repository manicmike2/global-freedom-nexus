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
  seoTitle: "Latvia Golden Visa | Residency by Investment | Global Freedom Capital",
  seoDescription: "Latvia Golden Visa — EU residency through real estate or business investment. Schengen access. Expert advisory from Global Freedom Capital. Free consultation.",
  canonicalPath: "/golden-visa/latvia",
  highlights: [
    { icon: Globe, title: "Schengen Access", desc: "Free movement across all 27 Schengen Area countries with a Latvian residence permit." },
    { icon: Shield, title: "EU Gateway", desc: "Strategic access to the European Union single market and Baltic business ecosystem." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse and dependent children in your residence permit application." },
    { icon: Clock, title: "2–3 Month Processing", desc: "[UPDATE: add program details here] Applications processed within approximately 2 to 3 months." },
  ],
  investmentOptions: [
    { title: "Real Estate Investment", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Purchase qualifying real estate in Latvia meeting minimum investment thresholds." },
    { title: "Business Investment", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Invest in a Latvian company with specified capital and employment requirements." },
    { title: "Bank Deposit", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Subordinated deposit in a Latvian credit institution for a specified period." },
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
    "[UPDATE: add additional eligibility requirements here]",
  ],
  faqItems: [
    { question: "What is the Latvia Golden Visa?", answer: "[UPDATE: add answer] Latvia's residence permit by investment program allows non-EU nationals to obtain a residence permit through qualifying investments in real estate, business, or bank deposits." },
    { question: "How much does the Latvia Golden Visa cost?", answer: "[UPDATE: add answer with current investment thresholds]" },
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
