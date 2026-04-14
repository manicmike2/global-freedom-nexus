import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import destCaribbean from "@/assets/dest-caribbean.jpg";
import { Globe, Shield, Users, Clock } from "lucide-react";

const data = {
  country: "Sierra Leone",
  type: "cbi" as const,
  tagline: '"Go For Gold" Citizenship Program',
  label: "African Citizenship",
  heroDescription: "A fast-growing program designed for investors seeking speed, affordability, and strategic access to Africa. The 'Go For Gold' structure allows cost optimization — especially for families and partners applying together. 💡 Two families or partners can apply together to optimize overall cost per family. Global Freedom Capital provides on-the-ground support and strategic advisory for the Sierra Leone 'Go For Gold' Program, ensuring a seamless, compliant, and efficient application process for international clients.",
  heroSubDescription: "Explore all CBI programs:",
  image: destCaribbean,
  imageAlt: "Sierra Leone Go For Gold citizenship program destination",
  seoTitle: "Sierra Leone Citizenship – Go For Gold Program | Global Freedom Capital",
  seoDescription: "Sierra Leone Go For Gold citizenship program from $140,000. Fast processing, family-friendly structuring. Expert advisory from Global Freedom Capital.",
  canonicalPath: "/citizenship-by-investment/sierra-leone",
  highlights: [
    { icon: Clock, title: "2–4 Month Processing", desc: "Streamlined application process with fast and flexible processing timelines." },
    { icon: Shield, title: "Cost Optimization", desc: "Under $100K per family achievable with strategic structuring. Two families can apply together." },
    { icon: Globe, title: "Africa Access", desc: "Emerging passport with future growth potential and strategic access to Africa." },
    { icon: Users, title: "Family Friendly", desc: "Include spouse and children under 18. Dual citizenship is permitted." },
  ],
  investmentOptions: [
    { title: "Main Applicant Contribution", amount: "From $140,000", desc: "Contribution-based citizenship for the main applicant with streamlined processing." },
    { title: "Spouse Addition", amount: "+$10,000", desc: "Add your spouse to the application for an additional $10,000 contribution." },
    { title: "Child (Under 18)", amount: "+$10,000 per child", desc: "Each child under 18 can be included for an additional $10,000 per child." },
    { title: "Due Diligence Fee", amount: "~$5,000", desc: "Standard due diligence and background check fee per application." },
  ],
  timeline: [
    { step: "01", title: "Initial Consultation", desc: "Confidential assessment of your eligibility and exploration of cost optimization strategies for families." },
    { step: "02", title: "Documentation & Due Diligence", desc: "Complete application preparation with thorough background checks and compliance verification." },
    { step: "03", title: "Application Submission", desc: "Your application is submitted through our on-the-ground advisory channel." },
    { step: "04", title: "Approval & Citizenship", desc: "Upon approval, complete your contribution and receive your certificate of citizenship." },
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
    { question: "What is the Sierra Leone Go For Gold program?", answer: "The Sierra Leone 'Go For Gold' program is a contribution-based citizenship program designed for investors seeking speed, affordability, and strategic access to Africa. It allows cost optimization through joint family applications." },
    { question: "How much does Sierra Leone citizenship cost?", answer: "The main applicant contribution starts at $140,000. Spouse addition is $10,000, each child under 18 is $10,000, and due diligence is approximately $5,000. Two families can apply together to optimize overall cost." },
    { question: "How long does the Sierra Leone process take?", answer: "Applications are typically processed within 2 to 4 months from submission of a complete application." },
  ],
  faqHeading: "Sierra Leone CBI — Common Questions",
  ctaHeading: "Ready to Explore Sierra Leone?",
  ctaDescription: "Our team provides on-the-ground support and strategic advisory for the Sierra Leone Go For Gold Program. Book a confidential consultation.",
  hubPath: "/citizenship-by-investment",
  hubLabel: "All CBI programs",
};

const SierraLeone = () => <DestinationPageTemplate data={data} />;
export default SierraLeone;
