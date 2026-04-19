import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import PageSEO from "@/components/PageSEO";
import { getArticleBySlug, articles } from "@/lib/articles";
import { ArrowLeft } from "lucide-react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/insights" replace />;

  const related = articles.filter((a) => a.cluster === article.cluster && a.slug !== article.slug).slice(0, 3);

  // Simple markdown-ish rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="font-serif text-2xl lg:text-3xl text-foreground mt-12 mb-4">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("### ")) {
        return <h3 key={i} className="font-serif text-xl text-foreground mt-8 mb-3">{block.replace("### ", "")}</h3>;
      }
      if (block.startsWith("|")) {
        const rows = block.split("\n").filter((r) => !r.startsWith("|---"));
        const headers = rows[0]?.split("|").filter(Boolean).map((h) => h.trim());
        const dataRows = rows.slice(1);
        return (
          <div key={i} className="overflow-x-auto my-8">
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="bg-card">
                  {headers?.map((h, j) => <th key={j} className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border">
                    {row.split("|").filter(Boolean).map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-muted-foreground">{cell.trim()}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="space-y-2 my-4 ml-4">
            {items.map((item, j) => (
              <li key={j} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
      }
      // Regular paragraph
      return (
        <p key={i} className="text-muted-foreground text-sm leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title={`${article.title} – Global Freedom Capital`}
        description={article.excerpt}
        canonical={`https://www.globalfreedomcapital.com/insights/${article.slug}`}
      />
      <Header />

      <article className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/insights" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{article.category}</span>
              <span className="text-[10px] text-muted-foreground">·</span>
              <span className="text-[10px] text-muted-foreground">{article.readTime} read</span>
              <span className="text-[10px] text-muted-foreground">·</span>
              <span className="text-[10px] text-muted-foreground">{article.date}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-8">
              {article.title}
            </h1>

            <p className="text-muted-foreground text-base leading-relaxed mb-12 pb-8 border-b border-border">
              {article.excerpt}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose-custom"
          >
            {renderContent(article.content)}
          </motion.div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-card border border-border text-center">
            <h3 className="font-serif text-xl text-foreground mb-3">Ready to Explore Your Options?</h3>
            <p className="text-sm text-muted-foreground mb-6">Schedule a confidential consultation with our advisory team.</p>
            <CTAButton to="/contact" variant="primary">Book a Consultation</CTAButton>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-card/30 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-6 block">Related Insights</span>
            <div className="space-y-4">
              {related.map((a, i) => (
                <Link key={i} to={`/insights/${a.slug}`} className="group block p-5 border border-border hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{a.category}</span>
                    <span className="text-[10px] text-muted-foreground">· {a.readTime}</span>
                  </div>
                  <h4 className="font-serif text-base text-foreground group-hover:text-primary transition-colors">{a.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Article;
