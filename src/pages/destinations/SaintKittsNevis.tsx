import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destStkitts from "@/assets/dest-stkitts.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Saint Kitts & Nevis",
  type: "cbi" as const,
  tagline: "Citizenship by Investment Program",
  label: "Caribbean Citizenship",
  heroDescription: "The world's oldest and most established citizenship by investment program, operating since 1984. Saint Kitts & Nevis offers a trusted pathway to second citizenship with visa-free access to 157+ countries.",
  heroSubDescription: "Explore all Caribbean CBI programs:",
  image: destStkitts,
  imageAlt: "Saint Kitts & Nevis citizenship by investment destination",
  seoTitle: "St Kitts CBI | Second Passport Program | GFC",
  seoDescription: "St Kitts & Nevis citizenship by investment — the world's longest-running CBI program. Second passport, 150+ visa-free countries. Free consultation with GFC.",
  canonicalPath: "/citizenship-by-investment/saint-kitts-nevis",
  highlights: [
    { icon: Globe, title: "157+ Countries", desc: "Visa-free or visa-on-arrival access to over 157 countries including the UK, EU Schengen Area, and Singapore." },
    { icon: Shield, title: "Established Since 1984", desc: "The world's longest-running CBI program with a proven track record of stability and international recognition." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children, parents, and grandparents in a single application." },
    { icon: Clock, title: "3–6 Month Processing", desc: "Standard processing within 3 to 6 months. Accelerated processing available for qualifying applicants." },
  ],
  investmentOptions: [
    { title: "Sustainable Island State Contribution (SISC)", amount: "From $250,000", desc: "A non-refundable contribution to the Sustainable Island State Contribution fund. The most direct route to citizenship." },
    { title: "Real Estate Investment", amount: "From $325,000", desc: "Purchase government-approved real estate with a minimum holding period. Properties can generate rental income during the holding period." },
    { title: "Private Home Sale Option", amount: "From $400,000", desc: "Purchase a privately-owned approved residence (a single-family home rather than a development share), held for a minimum of 7 years. Suited to investors seeking direct ownership of a Caribbean residence." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility, family structure, and objectives." },
    { step: "02", title: "Documentation & Due Diligence", desc: "We prepare your complete application package and guide you through the required background checks." },
    { step: "03", title: "Application Submission", desc: "Your application is submitted to the Citizenship by Investment Unit (CIU) of Saint Kitts & Nevis." },
    { step: "04", title: "Approval & Citizenship", desc: "Upon approval, you complete your investment and receive your certificate of citizenship and passport." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Clean criminal record with no prior visa refusals to partnered nations",
    "Legitimate source of funds documentation required",
    "Good health — basic medical examination required",
    "No residency requirement before or after citizenship",
    "Documented legal source of investment funds",
  ],
  faqItems: [
    { question: "What is the Saint Kitts & Nevis CBI program?", answer: "The Saint Kitts & Nevis Citizenship by Investment Program is the world's oldest CBI program, established in 1984. It allows qualified individuals and their families to obtain full citizenship through an approved economic contribution — either a donation to the SISC fund or a qualifying real estate investment." },
    { question: "How much does Saint Kitts CBI cost?", answer: "The minimum investment starts at $250,000 for a contribution to the Sustainable Island State Contribution fund. Real estate investments start at $325,000. Additional government fees, due diligence fees, and processing costs apply depending on the number of dependents." },
    { question: "How long does the Saint Kitts CBI process take?", answer: "The process typically takes 3 to 6 months from submission of a complete application. Accelerated processing options are available for qualifying applicants who need expedited timelines." },
    { question: "Can I include my family?", answer: "Yes. You can include your spouse, dependent children (typically up to age 30), parents and grandparents (55+), and in some cases, unmarried siblings. Saint Kitts offers broad family inclusion options." },
  ],
  faqHeading: "Saint Kitts & Nevis CBI — Common Questions",
  ctaHeading: "Ready to Explore Saint Kitts & Nevis?",
  ctaDescription: "Our advisors will guide you through every step of the Saint Kitts & Nevis CBI process. Book a confidential consultation to get started.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All CBI programs",
};

const SaintKittsNevis = () => <DestinationPageTemplate data={data} />;
export default SaintKittsNevis;
