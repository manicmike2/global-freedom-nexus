import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destDominica from "@/assets/dest-dominica.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Dominica",
  type: "cbi" as const,
  tagline: "Citizenship by Investment Program",
  label: "Caribbean Citizenship",
  heroDescription: "Consistently ranked as the world's best citizenship by investment program. Dominica offers the most cost-effective pathway to second citizenship with visa-free access to 145+ countries.",
  heroSubDescription: "Explore all Caribbean CBI programs:",
  image: destDominica,
  imageAlt: "Dominica citizenship by investment destination",
  seoTitle: "Dominica Citizenship by Investment from $200K | GFC",
  seoDescription: "Dominica citizenship by investment from $200,000 — among the most affordable second citizenship programs. 145+ visa-free countries. Speak with GFC.",
  canonicalPath: "/citizenship-by-investment/dominica",
  highlights: [
    { icon: Globe, title: "145+ Countries", desc: "Visa-free or visa-on-arrival access to over 145 countries worldwide, including the UK and Schengen Area." },
    { icon: Shield, title: "Top-Ranked Program", desc: "Consistently ranked #1 globally by the CBI Index for program quality, due diligence, and value." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children, parents, and grandparents in a single application." },
    { icon: Clock, title: "3–4 Month Processing", desc: "One of the fastest processing times among all CBI programs globally." },
  ],
  investmentOptions: [
    { title: "Economic Diversification Fund (Donation)", amount: "From $200,000", desc: "A non-refundable contribution to the Economic Diversification Fund. The most cost-effective CBI route globally." },
    { title: "Real Estate Investment", amount: "From $200,000", desc: "Purchase a share in a government-approved real estate development with a minimum holding period of 3 years (5 years if resold to another CBI applicant). Approved projects include luxury resorts and hospitality assets that may generate rental yield." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility, family structure, and objectives." },
    { step: "02", title: "Documentation & Due Diligence", desc: "We prepare your complete application package and guide you through the required background checks." },
    { step: "03", title: "Application Submission", desc: "Your application is submitted to the Dominica Citizenship by Investment Unit." },
    { step: "04", title: "Approval & Citizenship", desc: "Upon approval, you complete your investment and receive your certificate of citizenship and passport." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age",
    "Clean criminal record with no ongoing investigations",
    "Legitimate source of funds documentation required",
    "Good health — basic medical examination required",
    "No residency requirement before or after citizenship",
    "Documented legal source of investment funds",
  ],
  faqItems: [
    { question: "What is the Dominica CBI program?", answer: "The Dominica Citizenship by Investment Program allows qualified individuals to obtain full Dominican citizenship through a government-approved economic contribution. It is widely regarded as the most cost-effective and best-managed CBI program in the world." },
    { question: "How much does Dominica CBI cost?", answer: "The minimum investment starts at $200,000 for a single applicant via the Economic Diversification Fund. Real estate investments also start at $200,000. Government fees and due diligence costs apply." },
    { question: "How long does Dominica CBI take?", answer: "Dominica typically processes applications within 3 to 4 months, making it one of the fastest CBI programs available." },
  ],
  faqHeading: "Dominica CBI — Common Questions",
  ctaHeading: "Ready to Explore Dominica?",
  ctaDescription: "Our advisors will guide you through every step of the Dominica CBI process. Book a confidential consultation to get started.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All CBI programs",
};

const Dominica = () => <DestinationPageTemplate data={data} />;
export default Dominica;
