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
    { icon: Clock, title: "[UPDATE] Processing", desc: "[UPDATE: add program details here] Typical processing timeline for the Guest Investor Program." },
  ],
  investmentOptions: [
    { title: "Real Estate Fund Investment", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Investment in a qualifying Hungarian real estate fund." },
    { title: "Real Estate Purchase", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Direct purchase of qualifying residential real estate in Hungary." },
    { title: "Donation", amount: "[UPDATE: current amount]", desc: "[UPDATE: add program details here] Donation to a Hungarian higher education institution." },
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
    "[UPDATE: add additional eligibility requirements here]",
  ],
  faqItems: [
    { question: "What is Hungary's Guest Investor Program?", answer: "[UPDATE: add answer] Hungary's Guest Investor Program allows non-EU nationals to obtain residency through qualifying investments in real estate funds, property, or donations to higher education." },
    { question: "How much does Hungary's Golden Visa cost?", answer: "[UPDATE: add answer with current investment thresholds]" },
    { question: "Can I get EU citizenship through Hungary?", answer: "[UPDATE: add answer with citizenship pathway details and timeline]" },
  ],
  faqHeading: "Hungary Golden Visa — Common Questions",
  ctaHeading: "Ready to Explore Hungary?",
  ctaDescription: "Our advisors will guide you through every step of the Hungary Golden Visa process. Book a confidential consultation to get started.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Hungary = () => <DestinationPageTemplate data={data} />;
export default Hungary;
