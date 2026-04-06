import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destStlucia from "@/assets/dest-stlucia.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Saint Lucia",
  type: "cbi" as const,
  tagline: "Citizenship by Investment Program",
  label: "Caribbean Citizenship",
  heroDescription: "One of the Caribbean's newest and most competitive CBI programs, offering flexible investment options including government bonds, real estate, and enterprise projects with visa-free access to 146+ countries.",
  heroSubDescription: "Explore all Caribbean CBI programs:",
  image: destStlucia,
  imageAlt: "Saint Lucia citizenship by investment destination",
  seoTitle: "Saint Lucia Citizenship by Investment | Second Passport | Global Freedom Capital",
  seoDescription: "Saint Lucia citizenship by investment with flexible options from $240,000. 146+ visa-free countries. Expert advisory from Global Freedom Capital. Free consultation.",
  canonicalPath: "/citizenship-by-investment/saint-lucia",
  highlights: [
    { icon: Globe, title: "146+ Countries", desc: "Visa-free or visa-on-arrival access to over 146 countries including the UK and EU Schengen Area." },
    { icon: Shield, title: "Flexible Routes", desc: "Multiple investment pathways including donation, real estate, government bonds, and enterprise projects." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children, parents, and grandparents in a single application." },
    { icon: Clock, title: "3–5 Month Processing", desc: "Applications typically processed within 3 to 5 months from submission." },
  ],
  investmentOptions: [
    { title: "National Economic Fund (Donation)", amount: "From $240,000", desc: "A non-refundable contribution to the Saint Lucia National Economic Fund. The most straightforward route." },
    { title: "Real Estate Investment", amount: "From $300,000", desc: "Purchase government-approved real estate with a minimum holding period of 5 years. [UPDATE: add program details here]" },
    { title: "Government Bonds", amount: "From $300,000", desc: "Investment in non-interest-bearing government bonds held for a specified period. [UPDATE: add program details here]" },
    { title: "Enterprise Project", amount: "From $3,500,000", desc: "Investment in an approved enterprise project in Saint Lucia. [UPDATE: add program details here]" },
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
    "[UPDATE: add additional eligibility requirements here]",
  ],
  faqItems: [
    { question: "What is the Saint Lucia CBI program?", answer: "The Saint Lucia Citizenship by Investment Program was established in 2015 and allows qualified individuals to obtain full citizenship through a government-approved economic contribution. It offers the widest range of investment options among Caribbean CBI programs." },
    { question: "How much does Saint Lucia CBI cost?", answer: "The minimum donation starts at $240,000 for a family. Real estate and government bond options start at $300,000. Enterprise projects start at $3,500,000. Government fees and due diligence costs apply." },
    { question: "How long does Saint Lucia CBI take?", answer: "Saint Lucia typically processes applications within 3 to 5 months from submission of a complete application." },
  ],
  faqHeading: "Saint Lucia CBI — Common Questions",
  ctaHeading: "Ready to Explore Saint Lucia?",
  ctaDescription: "Our advisors will guide you through every step of the Saint Lucia CBI process. Book a confidential consultation to get started.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All CBI programs",
};

const SaintLucia = () => <DestinationPageTemplate data={data} />;
export default SaintLucia;
