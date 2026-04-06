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
  seoTitle: "Bulgaria Golden Visa | Residency by Investment | Global Freedom Capital",
  seoDescription: "Bulgaria Golden Visa — EU residency through investment. Competitive thresholds with Schengen access. Expert advisory from Global Freedom Capital. Free consultation.",
  canonicalPath: "/golden-visa/bulgaria",
  highlights: [
    { icon: Globe, title: "EU & Schengen Access", desc: "Bulgaria joined the Schengen Area, granting residence permit holders visa-free travel across member states." },
    { icon: Shield, title: "Competitive Threshold", desc: "One of the more affordable EU residency programs with growing investor interest." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse and dependent children in your residence permit application." },
    { icon: Clock, title: "[UPDATE] Processing", desc: "[UPDATE: add program details here] Typical processing timeline for the Bulgarian residency program." },
  ],
  investmentOptions: [
    { title: "Government Bonds", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Investment in Bulgarian government bonds for a specified holding period." },
    { title: "Real Estate Investment", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Purchase qualifying real estate in Bulgaria." },
    { title: "Business Investment", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Invest in a Bulgarian company meeting capital and employment requirements." },
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
    "[UPDATE: add additional eligibility requirements here]",
  ],
  faqItems: [
    { question: "What is the Bulgaria Golden Visa?", answer: "[UPDATE: add answer] Bulgaria's residency by investment program allows non-EU nationals to obtain a residence permit through qualifying investments in government bonds, real estate, or business ventures." },
    { question: "How much does Bulgaria's Golden Visa cost?", answer: "[UPDATE: add answer with current investment thresholds]" },
    { question: "Can I get EU citizenship through Bulgaria?", answer: "[UPDATE: add answer with citizenship pathway details and timeline]" },
  ],
  faqHeading: "Bulgaria Golden Visa — Common Questions",
  ctaHeading: "Ready to Explore Bulgaria?",
  ctaDescription: "Our advisors will guide you through every step of the Bulgaria Golden Visa process. Book a confidential consultation to get started.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Bulgaria = () => <DestinationPageTemplate data={data} />;
export default Bulgaria;
