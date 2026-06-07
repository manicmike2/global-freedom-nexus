import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destUae from "@/assets/dest-uae.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "UAE",
  type: "golden-visa" as const,
  tagline: "10-Year Golden Visa",
  label: "Tax-Efficient Residency",
  heroDescription: "The UAE Golden Visa offers a 10-year renewable residency in one of the world's most dynamic, tax-efficient jurisdictions. A premier base for entrepreneurs, investors, and family offices seeking global mobility from a stable Gulf hub.",
  heroSubDescription: "Compare other residency by investment programs:",
  image: destUae,
  imageAlt: "UAE Golden Visa — Dubai skyline residency by investment",
  seoTitle: "UAE Golden Visa | 10-Year Dubai Residency by Investment | GFC",
  seoDescription: "UAE Golden Visa from AED 2M (~$545K) in real estate or qualifying capital — 10-year renewable residency with 0% personal income tax. Expert advisory from GFC.",
  canonicalPath: "/golden-visa/uae",
  highlights: [
    { icon: Globe, title: "Global Hub", desc: "Strategic Gulf base with world-class connectivity to Europe, Asia, and Africa, anchored by Dubai and Abu Dhabi international airports." },
    { icon: Shield, title: "Tax-Efficient", desc: "0% personal income tax on salaries and most personal investment income, with a competitive 9% corporate tax regime above the AED 375K threshold." },
    { icon: Users, title: "Family Sponsorship", desc: "Sponsor spouse, children, and parents under the same Golden Visa. No employer sponsor required for the main applicant." },
    { icon: Clock, title: "2–4 Month Processing", desc: "Initial entry permit and residence visa typically issued within 2 to 4 months of a complete application." },
  ],
  investmentOptions: [
    { title: "Real Estate Investment", amount: "From AED 2M (~$545,000)", desc: "Purchase qualifying ready or off-plan property in the UAE. Mortgaged property is permitted subject to bank confirmation and minimum equity requirements." },
    { title: "Public Investment / Fund", amount: "From AED 2M (~$545,000)", desc: "Capital deposit with an accredited UAE investment fund or business investment, supported by audited financials and a licence from the relevant authority." },
    { title: "Specialized Talent / Entrepreneur Tracks", amount: "Case-by-case", desc: "Distinct Golden Visa categories for founders of approved start-ups, investors in licensed businesses, and individuals with specialized scientific, medical, or creative talent." },
  ],
  timeline: [
    { step: "01", title: "Strategic Consultation", desc: "Assessment of the most appropriate Golden Visa category for your profile, family, and asset structure." },
    { step: "02", title: "Investment & Documentation", desc: "Property purchase or capital deployment, supported by full source-of-funds and KYC documentation." },
    { step: "03", title: "Application & Medical", desc: "Submission to the relevant emirate authority (Dubai/Abu Dhabi), medical fitness test, and Emirates ID biometrics." },
    { step: "04", title: "10-Year Residency Granted", desc: "Golden Visa and Emirates ID issued for the main applicant and sponsored dependants, renewable on the same terms." },
  ],
  eligibility: [
    "Main applicant must be at least 18 years of age",
    "Clean criminal record and security clearance",
    "Valid medical fitness test in the UAE",
    "Documented legal source of investment funds",
    "Hold qualifying real estate or investment for the visa duration",
    "Comprehensive UAE health insurance for the main applicant and dependants",
  ],
  faqItems: [
    { question: "Does the UAE Golden Visa lead to citizenship?", answer: "No. The UAE Golden Visa grants long-term renewable residency. UAE citizenship is exceptional and not part of the Golden Visa programme." },
    { question: "Do I have to live in the UAE full-time?", answer: "No. Golden Visa holders are not subject to the standard 6-month absence rule that applies to ordinary UAE residence visas, providing significant flexibility for internationally mobile families." },
    { question: "Is the UAE actually tax-free?", answer: "There is no personal income tax in the UAE. Corporate tax of 9% applies to qualifying business profits above AED 375K. VAT is 5%. Tax residency status should be reviewed with a qualified tax advisor in your home jurisdiction." },
    { question: "Can I include my family?", answer: "Yes. Spouse, children, and parents may be sponsored under the main applicant's Golden Visa, subject to documentation and applicable health insurance requirements." },
  ],
  faqHeading: "UAE Golden Visa — Common Questions",
  ctaHeading: "Ready to Explore UAE Residency?",
  ctaDescription: "Our advisors will help you select the right Golden Visa track, structure your qualifying investment, and manage end-to-end application. Book a confidential consultation.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Uae = () => <DestinationPageTemplate data={data} />;
export default Uae;
