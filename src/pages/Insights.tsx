import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import InternalLink from "@/components/InternalLink";
import { topicClusters, articles } from "@/lib/articles";

const featuredArticles = articles.filter((a) => a.featured);

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Investment Migration Insights – CBI & Golden Visa Analysis"
        description="Strategic insights on citizenship by investment, Golden Visas, global mobility & cross-border wealth planning. Expert analysis for HNWIs, families & advisors."
        canonical="https://www.globalfreedomcapital.com/insights"
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/insights/${article.slug}`} className="group block p-8 lg:p-10 bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{article.category}</span>
                    <span className="text-[10px] text-muted-foreground">·</span>
                    <span className="text-[10px] text-muted-foreground">{article.readTime} read</span>
                  </div>
                  <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">{article.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{article.excerpt}</p>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Clusters */}
      {topicClusters.map((cluster, ci) => (
        <section key={ci} className={`py-16 lg:py-20 ${ci % 2 === 0 ? "bg-card/30 border-y border-border" : ""}`}>
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-2 block">Topic Cluster</span>
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground">{cluster.cluster}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {cluster.articles.map((article, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <Link to={`/insights/${article.slug}`} className="group block p-6 bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{article.category}</span>
                      <span className="text-[10px] text-muted-foreground">· {article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-base text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-grow">{article.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">{article.excerpt}</p>
                    <span className="text-[10px] text-muted-foreground">{article.date}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Editorial Approach */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Our Editorial Approach</span>
          <h2 className="font-serif text-3xl text-foreground mb-6">
            Intelligence, Not <span className="italic text-primary rounded-none">Information</span>
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>Our insights are written for sophisticated readers—high-net-worth individuals, family office professionals, and immigration attorneys who demand strategic depth, not surface-level definitions.</p>
            <p>Every article is informed by our direct advisory experience across multiple jurisdictions and hundreds of client engagements. We publish analysis you can act on, not content designed to fill a blog.</p>
            <p>For personalized guidance on any topic covered in our insights, <InternalLink to="/contact" className="ml-1">schedule a private consultation</InternalLink>.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl text-foreground mb-6">Stay Informed</h2>
          <p className="text-muted-foreground mb-8">Receive our latest insights on global mobility, investment migration trends, and cross-border planning directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50" />
            <button className="px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors">Subscribe</button>
          </div>
          <p className="text-[10px] text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
