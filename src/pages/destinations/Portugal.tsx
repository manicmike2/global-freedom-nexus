import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destPortugal from "@/assets/dest-portugal.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Portugal",
  type: "golden-visa" as const,
  tagline: "Golden Visa Program",
  label: "European Golden Visa",
  heroDescription: "One of Europe's most popular Golden Visa programs, offering a clear pathway to EU citizenship within 5 years. Portugal's high quality of life, favorable tax regime, and access to the Schengen Area make it a premier destination.",
  heroSubDescription: "Explore all European Golden Visa programs:",
  image: destPortugal,
  imageAlt: "Portugal Golden Visa residency by investment destination",
  seoTitle: "Portugal Golden Visa | EU Residency | GFC",
  seoDescription: "Portugal Golden Visa from €500K — EU residency with citizenship pathway after 5 years. Expert advisory from Global Freedom Capital. Free consultation.",
  canonicalPath: "/golden-visa/portugal",
  highlights: [
    { icon: Globe, title: "188+ Countries (with citizenship)", desc: "Portuguese citizenship grants one of the world's most powerful passports with visa-free access to 188+ countries." },
    { icon: Shield, title: "EU Citizenship Pathway", desc: "Clear pathway to full EU citizenship after 5 years of residency, with minimal physical presence requirements." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children, and parents in your application. Family reunification provisions available." },
    { icon: Clock, title: "6–12 Month Processing", desc: "Initial Golden Visa approval typically within 6 to 12 months. Citizenship eligibility after 5 years." },
  ],
  investmentOptions: [
    { title: "Investment Fund Subscription", amount: "From €500,000", desc: "Subscription of units in qualifying Portuguese venture capital or private equity funds regulated by the CMVM. Funds must have at least 60% of investments in Portuguese companies. The primary route following the 2023 real estate reforms." },
    { title: "Research & Development", amount: "From €500,000", desc: "Capital transfer to support research activities conducted by accredited Portuguese public or private research institutions." },
    { title: "Company Formation & Job Creation", amount: "From €500,000", desc: "Incorporate or capitalise a Portuguese commercial company with the creation of at least 5 permanent jobs, or invest €500,000 in an existing Portuguese company creating or maintaining 5 jobs for 3 years." },
    { title: "Cultural Heritage Donation", amount: "From €250,000", desc: "Donation supporting artistic production or the recovery of national cultural heritage through approved public or private entities — the lowest entry point currently available." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility, family structure, and long-term EU objectives." },
    { step: "02", title: "Investment & Documentation", desc: "Complete your qualifying investment and prepare your application documentation." },
    { step: "03", title: "Application Submission", desc: "Your application is submitted to the Portuguese Immigration and Borders Service (SEF/AIMA)." },
    { step: "04", title: "Residency & Renewal", desc: "Upon approval, receive your residence permit. Renew every 2 years with minimal stay requirements." },
    { step: "05", title: "Citizenship Eligibility", desc: "After 5 years of legal residency, apply for Portuguese (EU) citizenship." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Non-EU/EEA/Swiss national",
    "Clean criminal record",
    "Qualifying investment completed before application",
    "Minimum 7-day stay in Portugal per year (14 days in subsequent 2-year periods)",
    "Documented legal source of investment funds",
  ],
  faqItems: [
    { question: "What is the Portugal Golden Visa?", answer: "The Portugal Golden Visa is a residency-by-investment program that grants non-EU nationals a residence permit in Portugal through a qualifying investment. It provides access to the Schengen Area and a pathway to Portuguese (EU) citizenship after 5 years." },
    { question: "How much does the Portugal Golden Visa cost?", answer: "The standard minimum is €500,000 via qualifying investment funds, R&D contributions, or company formation with job creation. A €250,000 entry point is available through cultural heritage donations. The real estate route was discontinued in October 2023. Government and legal fees apply." },
    { question: "Can I get EU citizenship through Portugal's Golden Visa?", answer: "Yes. After 5 years of legal residency under the Golden Visa program, you can apply for Portuguese citizenship, which grants full EU citizenship and one of the world's most powerful passports." },
    { question: "Do I need to live in Portugal?", answer: "The Golden Visa has minimal stay requirements — just 7 days in the first year and 14 days in each subsequent 2-year period. You do not need to relocate full-time." },
  ],
  faqHeading: "Portugal Golden Visa — Common Questions",
  ctaHeading: "Ready to Explore Portugal?",
  ctaDescription: "Our advisors will guide you through every step of the Portugal Golden Visa process. Book a confidential consultation to get started.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Portugal = () => <DestinationPageTemplate data={data} />;
export default Portugal;
