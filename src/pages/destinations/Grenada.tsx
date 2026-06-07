import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destGrenada from "@/assets/dest-grenada.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Grenada",
  type: "cbi" as const,
  tagline: "Citizenship by Investment Program",
  label: "Caribbean Citizenship",
  heroDescription: "The only Caribbean CBI program with E-2 Treaty investor visa access to the United States. Grenada offers a powerful combination of global mobility, U.S. market access, and Caribbean lifestyle.",
  heroSubDescription: "Explore all Caribbean CBI programs:",
  image: destGrenada,
  imageAlt: "Grenada citizenship by investment destination",
  seoTitle: "Grenada Citizenship by Investment | E-2 Treaty Passport | GFC",
  seoDescription: "Grenada citizenship by investment with E-2 U.S. treaty visa access — second passport, 145+ visa-free countries, family inclusion. Free consultation with GFC.",
  canonicalPath: "/citizenship-by-investment/grenada",
  highlights: [
    { icon: Globe, title: "145+ Countries", desc: "Visa-free or visa-on-arrival access to over 145 countries including the UK, EU Schengen Area, China, and Russia." },
    { icon: Shield, title: "E-2 Treaty Access", desc: "The only Caribbean CBI with a U.S. E-2 Treaty — enabling you to live and work in the United States as an investor." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children, parents, grandparents, and unmarried siblings in your application." },
    { icon: Clock, title: "4–6 Month Processing", desc: "Applications are typically processed within 4 to 6 months from submission to approval." },
  ],
  investmentOptions: [
    { title: "National Transformation Fund (Donation)", amount: "From $235,000", desc: "A non-refundable contribution to Grenada's National Transformation Fund. The most straightforward pathway to citizenship." },
    { title: "Real Estate Investment", amount: "From $270,000", desc: "Purchase government-approved real estate with a minimum holding period of 5 years. Approved developments include luxury resorts and hospitality projects." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility, family structure, and strategic objectives including E-2 visa planning." },
    { step: "02", title: "Documentation & Due Diligence", desc: "Comprehensive preparation of your application with meticulous attention to compliance and documentation." },
    { step: "03", title: "Application Submission", desc: "Your application is submitted to Grenada's Citizenship by Investment Committee (CBIC)." },
    { step: "04", title: "Approval & Citizenship", desc: "Upon approval, you complete your investment and receive your certificate of citizenship and passport." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Clean criminal record and clear background check",
    "Legitimate source of funds documentation required",
    "Good health — basic medical examination required",
    "No residency requirement before or after citizenship",
    "Documented legal source of investment funds",
  ],
  faqItems: [
    { question: "What is the Grenada CBI program?", answer: "The Grenada Citizenship by Investment Program allows qualified individuals and their families to obtain full Grenadian citizenship through a government-approved economic contribution. Grenada is uniquely positioned as the only Caribbean CBI with E-2 Treaty access to the United States." },
    { question: "How much does Grenada CBI cost?", answer: "The minimum investment starts at $235,000 for a donation to the National Transformation Fund. Real estate investments start at $270,000. Additional government fees and due diligence costs apply depending on family size." },
    { question: "What is E-2 Treaty access?", answer: "Grenada has an E-2 investor visa treaty with the United States. This means Grenadian citizens can apply for the E-2 visa, which allows them to live and work in the U.S. by investing in a U.S.-based business. This is a significant advantage unique to Grenada among Caribbean CBI programs." },
    { question: "How long does Grenada CBI take?", answer: "The Grenada CBI process typically takes 4 to 6 months from submission of a complete application to passport issuance." },
  ],
  faqHeading: "Grenada CBI — Common Questions",
  ctaHeading: "Ready to Explore Grenada?",
  ctaDescription: "Our advisors will guide you through every step of the Grenada CBI process, including E-2 Treaty visa planning. Book a confidential consultation.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All CBI programs",
};

const Grenada = () => <DestinationPageTemplate data={data} />;
export default Grenada;
