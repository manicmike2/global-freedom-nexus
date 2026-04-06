import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import CTAButton from "@/components/CTAButton";
import InternalLink from "@/components/InternalLink";

interface BlogArticleLayoutProps {
  title: string;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  date: string;
  children: React.ReactNode;
}

const BlogArticleLayout = ({ title, seoTitle, seoDescription, canonicalPath, date, children }: BlogArticleLayoutProps) => (
  <div className="min-h-screen bg-background">
    <PageSEO
      title={seoTitle}
      description={seoDescription}
      canonical={`https://www.globalfreedomcapital.com${canonicalPath}`}
      type="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        author: { "@type": "Person", name: "Tatiana Muntean", jobTitle: "CEO", affiliation: { "@type": "Organization", name: "Global Freedom Capital" } },
        publisher: { "@type": "Organization", name: "Global Freedom Capital", url: "https://www.globalfreedomcapital.com" },
        datePublished: date,
      }}
    />
    <Header />

    <article className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <InternalLink to="/resources/blog">← Back to Blog</InternalLink>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mt-6 mb-4">{title}</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-12">
            <span>Tatiana Muntean, IMC Member | Global Freedom Capital</span>
            <span>·</span>
            <time>{date}</time>
          </div>
        </motion.div>

        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-8">
          {children}
        </div>

        <div className="mt-16 pt-12 border-t border-border text-center">
          <h2 className="font-serif text-2xl text-foreground mb-4">Ready to Take the Next Step?</h2>
          <p className="text-sm text-muted-foreground mb-8">Book a confidential consultation with our advisory team to discuss your specific situation.</p>
          <CTAButton to="/contact" variant="primary">Book a Private Consultation</CTAButton>
        </div>
      </div>
    </article>

    <Footer />
  </div>
);

export default BlogArticleLayout;
