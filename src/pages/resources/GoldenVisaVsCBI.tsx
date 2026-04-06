import BlogArticleLayout from "@/components/BlogArticleLayout";
import InternalLink from "@/components/InternalLink";

const GoldenVisaVsCBI = () => (
  <BlogArticleLayout
    title="Golden Visa vs. Citizenship by Investment: Key Differences Explained"
    seoTitle="Golden Visa vs. Citizenship by Investment: Key Differences | Global Freedom Capital"
    seoDescription="Understand the key differences between Golden Visa residency and citizenship by investment — costs, timelines, rights, and which program is right for you."
    canonicalPath="/resources/blog/golden-visa-vs-citizenship-by-investment"
    date="2026-03-10"
  >
    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Introduction</h2>
      <p>[UPDATE: add details introducing the two main categories of investment migration — Golden Visa (residency) and CBI (citizenship) — and why understanding the difference matters.]</p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">What Is a Golden Visa?</h2>
      <p>[UPDATE: add details explaining Golden Visa programs — residency by investment, typically European programs like Portugal and Greece, how they grant access to the Schengen Area and provide a pathway to citizenship over time.]</p>
      <p>Explore: <InternalLink to="/golden-visa">Golden Visa Programs</InternalLink></p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">What Is Citizenship by Investment?</h2>
      <p>[UPDATE: add details explaining CBI programs — full citizenship and passport granted through economic contribution, primarily Caribbean nations, immediate citizenship without residency requirements.]</p>
      <p>Explore: <InternalLink to="/citizenship-by-investment">CBI Programs</InternalLink></p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Key Differences</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-card/50">
              <th className="text-left p-4 border-b border-border font-serif text-foreground">Factor</th>
              <th className="text-left p-4 border-b border-border font-serif text-foreground">Golden Visa</th>
              <th className="text-left p-4 border-b border-border font-serif text-foreground">CBI</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className="p-4 border-b border-border">What You Get</td><td className="p-4 border-b border-border">Residence permit</td><td className="p-4 border-b border-border">Full citizenship & passport</td></tr>
            <tr><td className="p-4 border-b border-border">Timeline</td><td className="p-4 border-b border-border">3–12 months (residency)</td><td className="p-4 border-b border-border">3–6 months (citizenship)</td></tr>
            <tr><td className="p-4 border-b border-border">Citizenship Path</td><td className="p-4 border-b border-border">5–7+ years</td><td className="p-4 border-b border-border">Immediate</td></tr>
            <tr><td className="p-4 border-b border-border">Investment Range</td><td className="p-4 border-b border-border">€250,000–€500,000+</td><td className="p-4 border-b border-border">$200,000–$250,000+</td></tr>
            <tr><td className="p-4 border-b border-border">Residency Required</td><td className="p-4 border-b border-border">Minimal (varies)</td><td className="p-4 border-b border-border">None (mostly)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Which Is Right for You?</h2>
      <p>[UPDATE: add details on decision factors — immediate citizenship vs. gradual EU integration, budget, family needs, long-term goals, and the value of working with a strategic advisor.]</p>
    </section>
  </BlogArticleLayout>
);

export default GoldenVisaVsCBI;
