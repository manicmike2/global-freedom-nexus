import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import InternalLink from "@/components/InternalLink";

// Topic clusters for SEO architecture
const topicClusters = [
  {
    cluster: "Citizenship by Investment",
    articles: [
      { slug: "best-citizenship-by-investment-programs-2026", title: "The Best Citizenship by Investment Programs in 2026: A Strategic Ranking", category: "CBI Guide", date: "March 2026", readTime: "12 min", excerpt: "A comprehensive, annually updated analysis of the world's top CBI programs—ranked by investment value, passport strength, processing efficiency, and long-term program stability. This isn't a listicle; it's a strategic assessment.", featured: true },
      { slug: "grenada-e2-treaty-advantage", title: "Grenada's E-2 Treaty Advantage: The Caribbean Gateway to the United States", category: "Destinations", date: "March 2026", readTime: "8 min", excerpt: "A deep dive into why Grenada's citizenship program remains uniquely valuable for investors seeking access to the American market through E-2 Treaty investor visa eligibility." },
      { slug: "caribbean-cbi-comparison", title: "Caribbean CBI Programs Compared: Grenada vs. St Kitts vs. Antigua vs. Dominica", category: "Comparison", date: "February 2026", readTime: "10 min", excerpt: "An objective, side-by-side comparison of the four major Caribbean citizenship by investment programs across every factor that matters: cost, speed, passport strength, and family inclusion." },
      { slug: "cbi-due-diligence-explained", title: "Due Diligence in Citizenship by Investment: What You Need to Know", category: "Compliance", date: "February 2026", readTime: "7 min", excerpt: "An insider's guide to the due diligence process that protects both investors and sovereign nations. Understanding due diligence is essential for evaluating program quality." },
    ],
  },
  {
    cluster: "Golden Visas",
    articles: [
      { slug: "portugal-vs-greece-golden-visa", title: "Portugal vs. Greece Golden Visa 2026: A Strategic Comparison", category: "Comparison", date: "January 2026", readTime: "10 min", excerpt: "The two most popular European Golden Visa programs analyzed across investment requirements, lifestyle, path to citizenship, tax treatment, and long-term value for families.", featured: true },
      { slug: "cheapest-golden-visa-europe", title: "The Most Affordable Golden Visas in Europe: 2026 Guide", category: "Golden Visa", date: "January 2026", readTime: "8 min", excerpt: "A strategic analysis of European residency-by-investment programs ranked by affordability, including hidden costs, maintenance fees, and true total cost of ownership." },
      { slug: "malta-citizenship-naturalization", title: "Malta Citizenship by Naturalization: The Path to an EU Passport", category: "Destinations", date: "December 2025", readTime: "9 min", excerpt: "Malta's Exceptional Investor Naturalization program is the only pathway to full EU citizenship by investment. We examine the requirements, timeline, and strategic value." },
      { slug: "golden-visa-vs-cbi", title: "Golden Visa vs. Citizenship by Investment: Which Path Is Right for You?", category: "Advisory", date: "December 2025", readTime: "8 min", excerpt: "Understanding the fundamental differences between residency and citizenship programs—and how to choose based on your family's specific objectives and timeline." },
    ],
  },
  {
    cluster: "Second Citizenship for Americans",
    articles: [
      { slug: "why-americans-seeking-second-citizenship", title: "Why Americans Are Seeking Second Citizenship in Record Numbers", category: "Global Mobility", date: "November 2025", readTime: "10 min", excerpt: "An unprecedented wave of U.S. citizens are exploring citizenship by investment and Golden Visa programs. We examine the driving forces—and what it means for the industry.", featured: true },
      { slug: "second-passport-tax-diversification", title: "Second Passport for Tax Diversification: What Americans Should Know", category: "Tax Strategy", date: "November 2025", readTime: "9 min", excerpt: "How a second citizenship fits into a comprehensive tax diversification strategy—without changing your U.S. tax obligations. What the planning really looks like." },
      { slug: "how-to-get-eu-residency-american", title: "How to Get EU Residency as an American: 2026 Guide", category: "Guide", date: "October 2025", readTime: "11 min", excerpt: "A comprehensive guide for U.S. citizens exploring European residency options through Golden Visa programs, including eligibility, investment requirements, and lifestyle considerations." },
    ],
  },
  {
    cluster: "Global Mobility Strategy",
    articles: [
      { slug: "strategic-family-office-global-mobility", title: "The Rise of the Strategic Family Office: Global Mobility as a Wealth Tool", category: "Wealth Strategy", date: "October 2025", readTime: "9 min", excerpt: "How forward-thinking family offices are incorporating investment migration into their comprehensive wealth, tax, and legacy planning frameworks.", featured: true },
      { slug: "best-countries-hnwi-2026", title: "The Best Countries for High-Net-Worth Individuals in 2026", category: "Analysis", date: "September 2025", readTime: "11 min", excerpt: "An analytical ranking of jurisdictions most favorable to HNWIs—considering tax treatment, lifestyle, safety, business environment, and residency/citizenship accessibility." },
      { slug: "attorney-guide-outbound-migration", title: "The Attorney's Guide to Outbound Investment Migration", category: "For Attorneys", date: "September 2025", readTime: "8 min", excerpt: "How U.S. immigration lawyers can serve clients seeking second citizenship and residency abroad through trusted advisory partnerships." },
      { slug: "uae-golden-visa-guide", title: "UAE Golden Visa 2026: The Complete Guide for Global Entrepreneurs", category: "Destinations", date: "August 2025", readTime: "9 min", excerpt: "Everything you need to know about the UAE's 10-year Golden Visa—eligibility criteria, investment routes, tax advantages, and lifestyle considerations for families." },
    ],
  },
];

const allArticles = topicClusters.flatMap((c) => c.articles);
const featuredArticles = allArticles.filter((a) => a.featured);
const categories = ["All", ...Array.from(new Set(allArticles.map((a) => a.category)))];

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Investment Migration Insights – CBI & Golden Visa Analysis"
        description="Strategic insights on citizenship by investment, Golden Visas, global mobility & cross-border wealth planning. Expert analysis for HNWIs, families & advisors."
        canonical="https://globalfreedomcapital.com/insights"
      />
      <Header />

      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Insights</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Thought <span className="italic text-primary rounded-none">Leadership</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Strategic perspectives on citizenship by investment, Golden Visas, global mobility, 
              and cross-border wealth planning from the Global Freedom Capital advisory team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-8 block">Featured</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredArticles.slice(0, 2).map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group block p-8 lg:p-10 bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{article.category}</span>
                    <span className="text-[10px] text-muted-foreground">·</span>
                    <span className="text-[10px] text-muted-foreground">{article.readTime} read</span>
                  </div>
                  <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>
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

      {/* Topic Clusters */}
      {topicClusters.map((cluster, ci) => (
        <section key={ci} className={`py-16 lg:py-20 ${ci % 2 === 0 ? "bg-card/30 border-y border-border" : ""}`}>
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-2 block">Topic Cluster</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground">{cluster.cluster}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {cluster.articles.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="group block p-6 bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{article.category}</span>
                      <span className="text-[10px] text-muted-foreground">· {article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-base text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-grow">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="text-[10px] text-muted-foreground">{article.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* SEO Content Strategy Note */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Our Editorial Approach</span>
          <h2 className="font-serif text-3xl text-foreground mb-6">
            Intelligence, Not <span className="italic text-primary rounded-none">Information</span>
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Our insights are written for sophisticated readers—high-net-worth individuals, 
              family office professionals, and immigration attorneys who demand strategic depth, 
              not surface-level definitions.
            </p>
            <p>
              Every article is informed by our direct advisory experience across multiple 
              jurisdictions and hundreds of client engagements. We publish analysis you can 
              act on, not content designed to fill a blog.
            </p>
            <p>
              For personalized guidance on any topic covered in our insights, 
              <InternalLink to="/contact" className="ml-1">schedule a private consultation</InternalLink>.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl text-foreground mb-6">Stay Informed</h2>
          <p className="text-muted-foreground mb-8">
            Receive our latest insights on global mobility, investment migration trends, 
            and cross-border planning directly to your inbox.
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
          <p className="text-[10px] text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
