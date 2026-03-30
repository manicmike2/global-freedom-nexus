import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const articles = [
  { title: "Why Americans Are Seeking Second Citizenship in Record Numbers", category: "Global Mobility", date: "March 2026", excerpt: "An unprecedented wave of U.S. citizens are exploring citizenship by investment and Golden Visa programs. We examine the driving forces behind this trend." },
  { title: "Golden Visa vs. Citizenship by Investment: Which Path Is Right for You?", category: "Advisory", date: "February 2026", excerpt: "Understanding the fundamental differences between residency and citizenship programs—and how to choose the right one for your family." },
  { title: "The Rise of the Strategic Family Office: Global Mobility as a Wealth Tool", category: "Wealth Strategy", date: "January 2026", excerpt: "How forward-thinking family offices are incorporating investment migration into their comprehensive wealth and legacy planning." },
  { title: "Grenada's E-2 Treaty Advantage: The Caribbean Gateway to the U.S.", category: "Destinations", date: "December 2025", excerpt: "A deep dive into why Grenada's citizenship program remains uniquely valuable for investors seeking access to the American market." },
  { title: "Due Diligence in Investment Migration: What You Need to Know", category: "Compliance", date: "November 2025", excerpt: "An insider's guide to the due diligence process that protects both investors and sovereign nations in citizenship programs." },
  { title: "The Attorney's Guide to Outbound Investment Migration", category: "For Attorneys", date: "October 2025", excerpt: "How U.S. immigration lawyers can serve clients seeking second citizenship and residency abroad through trusted advisory partnerships." },
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Insights</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Thought <span className="italic text-primary">Leadership</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Strategic perspectives on citizenship by investment, Golden Visas, global mobility, 
              and cross-border wealth planning from the Global Freedom Capital advisory team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="group block p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{article.category}</span>
                  <h3 className="font-serif text-lg text-foreground mt-3 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl text-foreground mb-6">Stay Informed</h2>
          <p className="text-muted-foreground mb-8">
            Receive our latest insights on global mobility and investment migration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
