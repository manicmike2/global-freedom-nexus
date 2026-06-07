import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destCaribbean from "@/assets/dest-caribbean.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "São Tomé & Príncipe",
  type: "cbi" as const,
  tagline: "Citizenship by Investment",
  label: "African Citizenship",
  heroDescription: "A newly launched and highly strategic citizenship program positioned for forward-thinking global investors. Ideal for those seeking diversification, speed, and early access to an emerging passport. 🏅 Global Freedom Capital is a licensed agent for the São Tomé & Príncipe Citizenship by Investment Program, providing direct access, verified processing, and concierge-level guidance throughout the entire application journey.",
  heroSubDescription: "Explore all CBI programs:",
  image: destCaribbean,
  imageAlt: "São Tomé and Príncipe citizenship by investment destination",
  seoTitle: "São Tomé & Príncipe Citizenship by Investment from $90K | GFC",
  seoDescription: "São Tomé & Príncipe citizenship by investment from $90,000 — a discreet, fast-track second passport program for HNW families. Expert advisory from GFC.",
  canonicalPath: "/citizenship-by-investment/sao-tome-and-principe",
  highlights: [
    { icon: Clock, title: "2–3 Month Processing", desc: "Fast-track processing for qualified applicants seeking rapid citizenship acquisition." },
    { icon: Shield, title: "Clean Compliance", desc: "Not on FATF grey or black lists. Outside U.S. visa restriction lists. Clean international standing." },
    { icon: Globe, title: "ECOWAS Mobility", desc: "Access to ECOWAS regional mobility and strategic positioning for future passport growth." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, children up to 30, and parents aged 55+ with additional government fees." },
  ],
  investmentOptions: [
    { title: "National Transformation Fund (Donation)", amount: "From $90,000", desc: "One of the most affordable citizenship programs globally. A non-refundable contribution to the National Transformation Fund for a single applicant." },
    { title: "Family Application", amount: "From $90,000 + fees", desc: "Include spouse, children up to age 30, and parents aged 55+. Additional government fees apply per dependent." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility, objectives, and family structure with our licensed advisory team." },
    { step: "02", title: "Documentation & Due Diligence", desc: "Complete application preparation with thorough background checks and compliance verification." },
    { step: "03", title: "Application Submission", desc: "Your application is submitted directly through our licensed agent channel for priority processing." },
    { step: "04", title: "Approval & Citizenship", desc: "Upon approval, complete your contribution and receive your certificate of citizenship and passport." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Clean criminal record and clear background check",
    "Legitimate source of funds documentation required",
    "No residency requirement before or after citizenship",
    "Dual citizenship is permitted",
    "Good health — basic medical examination required",
  ],
  faqItems: [
    { question: "What is the São Tomé & Príncipe CBI program?", answer: "The São Tomé & Príncipe Citizenship by Investment Program is a newly launched program that allows qualified individuals to obtain citizenship through a contribution to the National Transformation Fund. It is one of the most affordable CBI programs globally." },
    { question: "How much does São Tomé & Príncipe CBI cost?", answer: "The minimum contribution starts at $90,000 for a single applicant, making it one of the most cost-effective citizenship programs available. Additional government fees apply for family members." },
    { question: "Is Global Freedom Capital a licensed agent?", answer: "Yes. Global Freedom Capital is a licensed agent for the São Tomé & Príncipe Citizenship by Investment Program, providing direct access to the program with verified processing and concierge-level guidance." },
  ],
  faqHeading: "São Tomé & Príncipe CBI — Common Questions",
  ctaHeading: "Ready to Explore São Tomé & Príncipe?",
  ctaDescription: "As a licensed agent, we provide direct access and concierge-level guidance for the São Tomé & Príncipe CBI program. Book a confidential consultation.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All CBI programs",
  licenses: {
    label: "Credentials",
    heading: "Our Licenses",
    description: "Global Freedom Capital is a licensed marketing agent for the São Tomé & Príncipe Citizenship by Investment Program.",
    items: [
      { title: "Marketing Agent License — Global Freedom Capital Corp.", file: "/licenses/sao-tome-cbi-agent-license.pdf", image: "/licenses/images/sao-tome-license-1.jpg" },
    ],
    verification: {
      label: "cip.gov.st/marketing-agents",
      url: "https://cip.gov.st/marketing-agents#list-of-marketing-agents",
    },
  },
};

const SaoTomePrincipe = () => <DestinationPageTemplate data={data} />;
export default SaoTomePrincipe;
