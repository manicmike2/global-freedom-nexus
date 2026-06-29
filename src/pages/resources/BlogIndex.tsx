import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import CTAButton from "@/components/CTAButton";
import { articles as allArticles } from "@/lib/articles";

// Static hand-curated long-form posts under /resources/blog/*
const staticPosts = [
  {
    slug: "best-citizenship-by-investment-programs-2026",
    title: "Best Citizenship by Investment Programs in 2026",
    excerpt: "A comprehensive comparison of the top CBI programs available to high-net-worth families in 2026, including Antigua, St Kitts, Grenada, Dominica, and Saint Lucia.",
    date: "April 1, 2026",
    category: "CBI Guide",
    href: "/resources/blog/best-citizenship-by-investment-programs-2026",
  },
  {
    slug: "antigua-vs-grenada-cbi",
    title: "Antigua & Barbuda vs. Grenada CBI: Which Is Right for You?",
    excerpt: "A detailed head-to-head comparison of two leading Caribbean citizenship by investment programs — investment costs, processing times, and visa-free access.",
    date: "March 25, 2026",
    category: "Comparison",
    href: "/resources/blog/antigua-vs-grenada-cbi",
  },
  {
    slug: "citizenship-by-investment-us-citizens",
    title: "Citizenship by Investment for U.S. Citizens: 2026 Guide",
    excerpt: "What American families need to know about obtaining a second passport through citizenship by investment, including tax implications and dual citizenship rules.",
    date: "March 18, 2026",
    category: "U.S. Citizens",
    href: "/resources/blog/citizenship-by-investment-us-citizens",
  },
  {
    slug: "golden-visa-vs-citizenship-by-investment",
    title: "Golden Visa vs. Citizenship by Investment: Key Differences",
    excerpt: "Understanding the fundamental differences between Golden Visa residency programs and citizenship by investment — costs, timelines, rights, and which is right for you.",
    date: "March 10, 2026",
    category: "Education",
    href: "/resources/blog/golden-visa-vs-citizenship-by-investment",
  },
];

// Merge static long-form posts with every Sanity-sourced insight, dedupe by slug.
const insightPosts = allArticles.map((a) => ({
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  date: a.date,
  category: a.category,
  href: `/insights/${a.slug}`,
}));

const seen = new Set<string>();
const articles = [...staticPosts, ...insightPosts].filter((a) => {
  if (seen.has(a.slug)) return false;
  seen.add(a.slug);
  return true;
});

const BlogIndex = () => (
  <div className="min-h-screen bg-background">
    <PageSEO
      title="Investment Migration Blog: CBI & Golden Visa Guides | GFC"
      description="In-depth guides and analyses on citizenship by investment, Golden Visas, and global mobility for HNW families and immigration attorneys, from GFC advisors."
      canonical="https://www.globalfreedomcapital.com/resources/blog"
    />
    <Header />

    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Resources</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            Insights & <span className="italic text-primary rounded-none">Guides</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            Expert analysis and practical guides on citizenship by investment, Golden Visas,
            and strategic global mobility for high-net-worth families.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link to={`/resources/blog/${article.slug}`} className="group block border border-border p-8 hover:border-primary/30 transition-all duration-300">
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary mb-3 block">{article.category}</span>
                <h2 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{article.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-card/30 border-t border-border text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">Have Questions?</h2>
        <p className="text-muted-foreground mb-10">Our advisors are happy to discuss your specific situation in a confidential consultation.</p>
        <CTAButton to="/contact" variant="primary">Book a Private Consultation</CTAButton>
      </div>
    </section>

    <Footer />
  </div>
);

export default BlogIndex;
