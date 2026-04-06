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
  seoTitle: "Portugal Golden Visa | Residency by Investment | Global Freedom Capital",
  seoDescription: "Portugal Golden Visa — EU residency with path to citizenship in 5 years. From €500,000. Expert advisory from Global Freedom Capital. Free consultation.",
  canonicalPath: "/golden-visa/portugal",
  highlights: [
    { icon: Globe, title: "188+ Countries (with citizenship)", desc: "Portuguese citizenship grants one of the world's most powerful passports with visa-free access to 188+ countries." },
    { icon: Shield, title: "EU Citizenship Pathway", desc: "Clear pathway to full EU citizenship after 5 years of residency, with minimal physical presence requirements." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children, and parents in your application. Family reunification provisions available." },
    { icon: Clock, title: "6–12 Month Processing", desc: "Initial Golden Visa approval typically within 6 to 12 months. Citizenship eligibility after 5 years." },
  ],
  investmentOptions: [
    { title: "Investment Fund Subscription", amount: "From €500,000", desc: "Subscription of units in qualifying Portuguese investment funds. The primary route following real estate pathway changes. [UPDATE: add program details here]" },
    { title: "Capital Transfer", amount: "From €500,000", desc: "Capital transfer for investment in research activities or approved ventures. [UPDATE: add program details here]" },
    { title: "Company Formation", amount: "From €500,000", desc: "Creation of a commercial company in Portugal with job creation requirements. [UPDATE: add program details here]" },
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
    "[UPDATE: add additional eligibility requirements here]",
  ],
  faqItems: [
    { question: "What is the Portugal Golden Visa?", answer: "The Portugal Golden Visa is a residency-by-investment program that grants non-EU nationals a residence permit in Portugal through a qualifying investment. It provides access to the Schengen Area and a pathway to Portuguese (EU) citizenship after 5 years." },
    { question: "How much does the Portugal Golden Visa cost?", answer: "The minimum investment is €500,000 for qualifying investment funds or capital transfers. Note that the real estate route was discontinued in 2023. Government fees and legal costs apply. [UPDATE: add current details]" },
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
