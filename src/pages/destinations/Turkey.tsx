import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destTurkey from "@/assets/dest-turkey.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Turkey",
  type: "cbi" as const,
  tagline: "Citizenship by Investment Program",
  label: "Transcontinental Citizenship",
  heroDescription: "Turkey's Citizenship by Investment program offers fast-track second citizenship through real estate or capital investment, providing a strategic base between Europe, Asia, and the Middle East with a passport that includes E-2 treaty access to the United States.",
  heroSubDescription: "Compare other citizenship by investment programs:",
  image: destTurkey,
  imageAlt: "Turkey citizenship by investment — Istanbul real estate and skyline",
  seoTitle: "Turkey Citizenship by Investment | E-2 Visa Access | GFC",
  seoDescription: "Turkey citizenship by investment from $400,000 real estate. Fast-track second passport, E-2 US treaty access, 110+ visa-free destinations. GFC advisory.",
  canonicalPath: "/citizenship-by-investment/turkey",
  highlights: [
    { icon: Globe, title: "110+ Countries", desc: "Visa-free or visa-on-arrival access to 110+ destinations including Japan, Singapore, South Korea, and Hong Kong." },
    { icon: Shield, title: "E-2 Treaty Access", desc: "Turkish citizens are eligible to apply for the U.S. E-2 investor visa, enabling residence in the United States through a qualifying U.S. business." },
    { icon: Users, title: "Family Inclusion", desc: "Include spouse and dependent children under 18 in a single application, with no requirement to renounce existing citizenship." },
    { icon: Clock, title: "3–6 Month Processing", desc: "One of the fastest CBI programs globally, with passports typically issued within 3 to 6 months." },
  ],
  investmentOptions: [
    { title: "Real Estate Investment", amount: "From $400,000", desc: "Purchase qualifying real estate held for a minimum of 3 years. The most popular route, particularly for Istanbul and coastal markets." },
    { title: "Capital Deposit", amount: "From $500,000", desc: "Fixed deposit in a Turkish bank held for a minimum of 3 years, in USD or equivalent foreign currency." },
    { title: "Government Bonds / Fund Subscription", amount: "From $500,000", desc: "Investment in government bonds or a qualifying real estate investment fund, held for a minimum of 3 years." },
  ],
  timeline: [
    { step: "01", title: "Strategic Consultation", desc: "Assessment of your objectives, family composition, and the investment route best suited to your portfolio." },
    { step: "02", title: "Investment & Valuation", desc: "Property selection and SPK-licensed valuation, or completion of the qualifying capital investment." },
    { step: "03", title: "Residency & Citizenship Filing", desc: "Short-term residency permit issued, followed by the citizenship application supported by full due-diligence documentation." },
    { step: "04", title: "Passport Issuance", desc: "Citizenship granted by Presidential decree; Turkish passports issued for the main applicant and all approved family members." },
  ],
  eligibility: [
    "Main applicant must be at least 18 years of age",
    "Clean criminal record and successful background check",
    "Documented legal source of investment funds",
    "Hold qualifying investment for a minimum of 3 years",
    "Dual citizenship permitted — no need to renounce existing nationality",
    "No prior residency requirement before application",
  ],
  faqItems: [
    { question: "How fast is the Turkey CBI process?", answer: "Turkey is among the fastest citizenship by investment programs, with passports typically issued within 3 to 6 months from a complete application." },
    { question: "What is the minimum investment for Turkey CBI?", answer: "The minimum investment starts at $400,000 for the real estate route, $500,000 for a bank deposit, government bonds, or a qualifying investment fund subscription, each held for 3 years." },
    { question: "Does Turkey allow dual citizenship?", answer: "Yes. Turkey permits dual citizenship, so applicants are not required to renounce their existing nationality." },
    { question: "Can Turkish citizens apply for the U.S. E-2 visa?", answer: "Yes. Turkey holds an E-2 treaty with the United States, enabling Turkish citizens to apply for the E-2 investor visa through a qualifying U.S. business investment." },
  ],
  faqHeading: "Turkey Citizenship by Investment — Common Questions",
  ctaHeading: "Ready to Explore Turkey Citizenship?",
  ctaDescription: "Our advisors will guide you through investment-route selection, property due diligence, and end-to-end citizenship application. Book a confidential consultation.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All citizenship by investment programs",
};

const Turkey = () => <DestinationPageTemplate data={data} />;
export default Turkey;
