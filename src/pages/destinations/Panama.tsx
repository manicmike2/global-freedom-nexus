import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destPanama from "@/assets/dest-panama.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Panama",
  type: "golden-visa" as const,
  tagline: "Qualified Investor Residency",
  label: "Latin American Residency",
  heroDescription: "Panama's Qualified Investor Visa and Friendly Nations Visa offer fast paths to permanent residency in a USD-denominated, territorial-tax economy with strong banking, a strategic shipping hub, and a clear pathway to naturalization.",
  heroSubDescription: "Compare other residency by investment programs:",
  image: destPanama,
  imageAlt: "Panama Qualified Investor Visa — Panama City skyline",
  seoTitle: "Panama Qualified Investor Visa | Residency by Investment | GFC",
  seoDescription: "Panama Qualified Investor Visa from $300,000 real estate. Permanent residency in a USD economy with territorial taxation. GFC expert advisory.",
  canonicalPath: "/golden-visa/panama",
  highlights: [
    { icon: Globe, title: "Strategic Hub", desc: "Premier connectivity hub for the Americas with the Panama Canal, Tocumen International Airport, and one of Latin America's strongest banking sectors." },
    { icon: Shield, title: "Territorial Taxation", desc: "Panama applies territorial taxation: foreign-source income is generally not subject to Panamanian income tax, supporting efficient international structuring." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse, dependent children, and dependent parents in the same application, with permanent residency granted to all approved members." },
    { icon: Clock, title: "30–60 Day Processing", desc: "Qualified Investor Visa applications are designed for fast processing, typically completing within 30 to 60 days of submission." },
  ],
  investmentOptions: [
    { title: "Qualified Investor — Real Estate", amount: "From $300,000", desc: "Purchase real estate in your personal name, free of liens, held for a minimum of 5 years. The most direct route to permanent residency." },
    { title: "Qualified Investor — Securities", amount: "From $500,000", desc: "Investment through a licensed Panamanian brokerage in a qualifying securities portfolio, held for a minimum of 5 years." },
    { title: "Qualified Investor — Fixed-Term Deposit", amount: "From $750,000", desc: "Fixed-term deposit with a Panamanian bank for a minimum of 5 years, free of liens and held in the applicant's personal name." },
  ],
  timeline: [
    { step: "01", title: "Strategic Consultation", desc: "Assessment of your residency objectives, source-of-funds documentation, and the qualifying route best suited to your profile." },
    { step: "02", title: "Investment Execution", desc: "Real estate acquisition, securities investment, or bank deposit completed through licensed Panamanian counterparties." },
    { step: "03", title: "Application Submission", desc: "Filing with Panama's National Migration Service (Servicio Nacional de Migración), supported by full KYC and source-of-funds documentation." },
    { step: "04", title: "Permanent Residency Granted", desc: "Permanent residency cards issued to the main applicant and all approved dependants. Citizenship eligibility after 5 years of residency." },
  ],
  eligibility: [
    "Main applicant must be at least 18 years of age",
    "Clean criminal record from country of residence",
    "Documented legal source of investment funds",
    "Hold qualifying investment for a minimum of 5 years",
    "Health certificate from a licensed Panamanian physician",
    "Personal appearance in Panama for biometrics and document filing",
  ],
  faqItems: [
    { question: "How fast is the Panama Qualified Investor Visa?", answer: "The Qualified Investor Visa is designed for expedited processing, with permanent residency typically granted within 30 to 60 days of a complete submission." },
    { question: "What is the minimum investment for Panama residency?", answer: "The minimum is $300,000 for the real estate route, $500,000 for a qualifying securities portfolio, or $750,000 for a fixed-term bank deposit, each held for 5 years." },
    { question: "Does Panama use territorial taxation?", answer: "Yes. Panama operates a territorial tax system: in general, only Panama-source income is subject to Panamanian income tax. Specific structures should be reviewed with a qualified tax advisor." },
    { question: "Can I obtain Panamanian citizenship?", answer: "Permanent residents are generally eligible to apply for naturalization after 5 years of residency, subject to language, integration, and procedural requirements determined by Panamanian authorities." },
  ],
  faqHeading: "Panama Residency — Common Questions",
  ctaHeading: "Ready to Explore Panama Residency?",
  ctaDescription: "Our advisors will guide you through Qualified Investor route selection, qualifying asset acquisition, and end-to-end residency application. Book a confidential consultation.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Panama = () => <DestinationPageTemplate data={data} />;
export default Panama;
