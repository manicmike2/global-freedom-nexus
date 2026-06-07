import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destMalta from "@/assets/dest-malta.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Malta",
  type: "golden-visa" as const,
  tagline: "Permanent Residency Programme",
  label: "European Permanent Residency",
  heroDescription: "The Malta Permanent Residence Programme (MPRP) grants high-net-worth families lifetime EU residency on a stable, English-speaking Mediterranean island with Schengen access and a globally respected regulatory environment.",
  heroSubDescription: "Explore other European residency options:",
  image: destMalta,
  imageAlt: "Malta Permanent Residence Programme — Mediterranean EU residency",
  seoTitle: "Malta Permanent Residency Programme (MPRP) | EU Residence | GFC",
  seoDescription: "Malta Permanent Residence Programme (MPRP) — lifetime EU residency with Schengen access from an English-speaking Mediterranean base. Expert advisory from GFC.",
  canonicalPath: "/golden-visa/malta",
  highlights: [
    { icon: Globe, title: "Schengen Access", desc: "Visa-free travel across the 27-country Schengen Area for residence-card holders and qualifying dependents." },
    { icon: Shield, title: "EU Stability", desc: "Permanent residency in a politically stable, English-speaking EU member state with a common-law-influenced legal system." },
    { icon: Users, title: "Multi-Generational", desc: "Include spouse, children of any age (financially dependent), and parents and grandparents of both applicant and spouse." },
    { icon: Clock, title: "4–6 Month Processing", desc: "Government processing typically completes within 4 to 6 months of a complete submission." },
  ],
  investmentOptions: [
    { title: "Government Contribution + Property Rental", amount: "From €150,000 (rental route)", desc: "Non-refundable government contribution combined with a qualifying long-term residential lease in Malta or Gozo, plus an administrative fee and a charitable donation." },
    { title: "Government Contribution + Property Purchase", amount: "From €375,000 (purchase route)", desc: "Government contribution combined with the purchase of qualifying residential property in Malta or Gozo, held for the required 5-year period." },
  ],
  timeline: [
    { step: "01", title: "Eligibility Review", desc: "Confidential assessment of your family structure, source-of-funds documentation, and qualifying assets." },
    { step: "02", title: "Application Preparation", desc: "Through a licensed agent: full document set, due diligence, and submission to Residency Malta Agency." },
    { step: "03", title: "Approval in Principle", desc: "Government approval in principle, after which you complete the qualifying property and contribution requirements." },
    { step: "04", title: "Residence Cards Issued", desc: "Permanent residence cards issued to the main applicant and all approved dependants." },
  ],
  eligibility: [
    "Applicants must be at least 18 years of age and non-EU/EEA/Swiss nationals",
    "Hold capital assets of at least €500,000, of which €150,000 must be financial assets",
    "Clean criminal record and successful four-tier due diligence",
    "Hold qualifying property for a minimum of 5 years",
    "Comprehensive sickness insurance covering all of Malta",
    "Documented legal source of investment funds and assets",
  ],
  faqItems: [
    { question: "Does MPRP grant Maltese citizenship?", answer: "No. MPRP grants permanent residency in Malta with Schengen access. Global Freedom Capital advises on the MPRP residency route only and does not advise on Maltese citizenship by naturalisation." },
    { question: "Do I need to live in Malta?", answer: "There is no minimum physical presence requirement to maintain MPRP status, but residence cards must be renewed and the qualifying property must be held throughout the 5-year qualifying period." },
    { question: "Who can be included?", answer: "Spouse or partner, financially dependent children of any age, and parents and grandparents of both the main applicant and spouse may be included as dependants, subject to due diligence." },
    { question: "How long does MPRP take?", answer: "From a complete submission, government processing typically completes within 4 to 6 months. Full timeline including property and document preparation is generally 6 to 9 months." },
  ],
  faqHeading: "Malta MPRP — Common Questions",
  ctaHeading: "Ready to Explore Malta Residency?",
  ctaDescription: "Our advisors will guide you through MPRP eligibility, qualifying property selection, and the full application via a licensed agent. Book a confidential consultation.",
  hubPath: "/golden-visa",
  hubLabel: "All Golden Visa programs",
};

const Malta = () => <DestinationPageTemplate data={data} />;
export default Malta;
