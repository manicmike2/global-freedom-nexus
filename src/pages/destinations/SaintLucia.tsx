import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destStlucia from "@/assets/dest-stlucia.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Saint Lucia",
  type: "cbi" as const,
  tagline: "Citizenship by Investment",
  label: "Caribbean Citizenship",
  heroDescription: "Saint Lucia offers one of the most efficient and flexible citizenship-by-investment programs globally. Designed for high-net-worth individuals seeking global mobility, tax efficiency, and a strategic Plan B — without relocation.",
  heroSubDescription: "Explore all Caribbean CBI programs:",
  image: destStlucia,
  imageAlt: "Saint Lucia citizenship by investment destination",
  seoTitle: "Saint Lucia Citizenship by Investment | Bonds | GFC",
  seoDescription: "Saint Lucia citizenship by investment with flexible options including government bonds. 146+ visa-free countries. Expert advisory from GFC.",
  canonicalPath: "/citizenship-by-investment/saint-lucia",
  highlights: [
    { icon: Globe, title: "140+ Countries", desc: "Visa-free or visa-on-arrival access to over 140 countries including the UK and EU Schengen Area." },
    { icon: Shield, title: "No Worldwide Tax", desc: "No tax on worldwide income. No residency requirement before or after citizenship." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children up to age 30, and parents aged 55+." },
    { icon: Clock, title: "~3 Month Processing", desc: "One of the fastest processing times among Caribbean CBI programs." },
  ],
  investmentOptions: [
    { title: "National Economic Fund (Donation)", amount: "From $240,000", desc: "A non-refundable contribution to the Saint Lucia National Economic Fund. The most straightforward route, ideal for families of four." },
    { title: "Real Estate Investment", amount: "From $300,000", desc: "Purchase government-approved real estate with a minimum holding period of 5 years. Combines immigration qualification with a tangible asset." },
    { title: "Enterprise Investment", amount: "From $250,000", desc: "Investment in an approved enterprise project in Saint Lucia, contributing to the country's economic development." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility, family structure, and objectives." },
    { step: "02", title: "Documentation & Due Diligence", desc: "We prepare your complete application and guide you through the required background checks." },
    { step: "03", title: "Application Submission", desc: "Your application is submitted to the Saint Lucia Citizenship by Investment Board." },
    { step: "04", title: "Approval & Citizenship", desc: "Upon approval, you complete your investment and receive your certificate of citizenship and passport." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Clean criminal record and clear background check",
    "Legitimate source of funds documentation required",
    "Good health — basic medical examination required",
    "No residency requirement before or after citizenship",
    "Dual citizenship is permitted",
  ],
  faqItems: [
    { question: "What is the Saint Lucia CBI program?", answer: "The Saint Lucia Citizenship by Investment Program was established in 2015 and allows qualified individuals to obtain full citizenship through a government-approved economic contribution. It offers multiple flexible investment options including donation, real estate, and enterprise projects." },
    { question: "How much does Saint Lucia CBI cost?", answer: "The National Economic Fund donation starts at $240,000 for a family of four. Real estate options start at $300,000 with a 5-year hold period. Enterprise investments start at $250,000. Government fees and due diligence costs apply." },
    { question: "How long does Saint Lucia CBI take?", answer: "Saint Lucia typically processes applications in approximately 3 months, making it one of the fastest Caribbean CBI programs." },
  ],
  faqHeading: "Saint Lucia CBI — Common Questions",
  ctaHeading: "Ready to Explore Saint Lucia?",
  ctaDescription: "Our advisors will guide you through every step of the Saint Lucia CBI process. Book a confidential consultation to get started.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All CBI programs",
};

const SaintLucia = () => <DestinationPageTemplate data={data} />;
export default SaintLucia;
