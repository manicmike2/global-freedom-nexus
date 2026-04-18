import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destAntigua from "@/assets/dest-antigua.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Antigua & Barbuda",
  type: "cbi" as const,
  tagline: "Citizenship by Investment Program",
  label: "Caribbean Citizenship",
  heroDescription: "The Antigua & Barbuda CBI program offers one of the Caribbean's most family-friendly pathways to second citizenship, with competitive pricing for larger families and visa-free access to 151+ countries.",
  heroSubDescription: "Established in 2013, the program is fully government-authorized and internationally recognized. Explore all Caribbean CBI programs:",
  image: destAntigua,
  imageAlt: "Antigua & Barbuda citizenship by investment destination",
  seoTitle: "Antigua & Barbuda Citizenship by Investment | Second Passport | Global Freedom Capital",
  seoDescription: "Antigua & Barbuda citizenship by investment from $230,000. Family-friendly CBI with 151+ visa-free countries. Expert advisory. Free consultation available.",
  canonicalPath: "/citizenship-by-investment/antigua-barbuda",
  highlights: [
    { icon: Globe, title: "151+ Countries", desc: "Visa-free or visa-on-arrival access to over 151 countries worldwide, including the UK and Schengen Area." },
    { icon: Shield, title: "Family-Friendly", desc: "Competitive pricing for families with reduced per-dependent costs. Include spouse, children, parents, and grandparents." },
    { icon: Users, title: "Minimal Residency", desc: "Only 5 days of physical presence required within the first 5 years — one of the most flexible CBI programs globally." },
    { icon: Clock, title: "3–6 Month Processing", desc: "Applications are typically processed within 3 to 6 months from submission to approval." },
  ],
  investmentOptions: [
    { title: "National Development Fund (Donation)", amount: "From $230,000", desc: "A non-refundable contribution to the Antigua & Barbuda National Development Fund. The most straightforward route to citizenship." },
    { title: "Real Estate Investment", amount: "From $325,000", desc: "Purchase government-approved real estate with a minimum holding period of 5 years. The property can generate rental income during the holding period." },
    { title: "Business Investment", amount: "From $400,000", desc: "Invest in an approved business venture in Antigua & Barbuda, either individually or as a joint investment with other applicants." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility, family structure, and objectives." },
    { step: "02", title: "Documentation & Due Diligence", desc: "We prepare your complete application package and guide you through the required due diligence." },
    { step: "03", title: "Application Submission", desc: "Your application is submitted to the Citizenship by Investment Unit (CIU) of Antigua & Barbuda." },
    { step: "04", title: "Approval & Citizenship", desc: "Upon approval, you complete your investment and receive your certificate of citizenship and passport." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Clean criminal record and clear background check",
    "Legitimate source of funds documentation required",
    "Good health — basic medical examination required",
    "5 days of physical presence required within the first 5 years",
    "Documented legal source of investment funds",
  ],
  faqItems: [
    { question: "What is the Antigua & Barbuda Citizenship by Investment program?", answer: "The Antigua & Barbuda Citizenship by Investment Program (CIP) is a government-authorized program established in 2013 that allows qualified individuals and their families to obtain full citizenship through an approved economic contribution. Applicants can choose from a donation to the National Development Fund, a qualifying real estate purchase, or an approved business investment." },
    { question: "How much does Antigua & Barbuda CBI cost?", answer: "The minimum investment starts at $230,000 for a donation to the National Development Fund (for a family of up to 4). Real estate investments start at $325,000 with a 5-year holding requirement. Business investments start at $400,000. Additional government fees, due diligence fees, and processing costs apply depending on the number of dependents." },
    { question: "How long does the Antigua CBI process take?", answer: "The Antigua & Barbuda CBI process typically takes 3 to 6 months from the submission of a complete application to the issuance of citizenship and passport. Timelines depend on the thoroughness of documentation and the speed of due diligence clearance." },
    { question: "What is the residency requirement?", answer: "Antigua & Barbuda requires just 5 days of physical presence within the first 5 years of citizenship. This is one of the most minimal residency requirements among all CBI programs globally." },
  ],
  faqHeading: "Antigua & Barbuda CBI — Common Questions",
  ctaHeading: "Ready to Explore Antigua & Barbuda?",
  ctaDescription: "Our advisors will guide you through every step of the Antigua & Barbuda CBI process. Book a confidential consultation to get started.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All CBI programs",
};

const AntiguaBarbuda = () => <DestinationPageTemplate data={data} />;
export default AntiguaBarbuda;
