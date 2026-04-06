import BlogArticleLayout from "@/components/BlogArticleLayout";
import InternalLink from "@/components/InternalLink";

const AntiguaVsGrenada = () => (
  <BlogArticleLayout
    title="Antigua & Barbuda vs. Grenada: Which Citizenship by Investment Program Is Right for You?"
    seoTitle="Antigua & Barbuda vs. Grenada CBI: Which Is Right for You? | Global Freedom Capital"
    seoDescription="Compare Antigua & Barbuda and Grenada CBI programs — investment costs, processing times, visa-free travel, and family inclusion. Expert analysis."
    canonicalPath="/resources/blog/antigua-vs-grenada-cbi"
    date="2026-03-25"
  >
    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Introduction</h2>
      <p>[UPDATE: add details introducing the comparison between Antigua & Barbuda and Grenada as two leading Caribbean CBI programs.]</p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Quick Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-card/50">
              <th className="text-left p-4 border-b border-border font-serif text-foreground">Factor</th>
              <th className="text-left p-4 border-b border-border font-serif text-foreground">Antigua & Barbuda</th>
              <th className="text-left p-4 border-b border-border font-serif text-foreground">Grenada</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className="p-4 border-b border-border">Min. Investment</td><td className="p-4 border-b border-border">$230,000</td><td className="p-4 border-b border-border">$235,000</td></tr>
            <tr><td className="p-4 border-b border-border">Processing Time</td><td className="p-4 border-b border-border">3–6 months</td><td className="p-4 border-b border-border">4–6 months</td></tr>
            <tr><td className="p-4 border-b border-border">Visa-Free Countries</td><td className="p-4 border-b border-border">151+</td><td className="p-4 border-b border-border">145+</td></tr>
            <tr><td className="p-4 border-b border-border">E-2 Treaty (U.S.)</td><td className="p-4 border-b border-border">No</td><td className="p-4 border-b border-border">Yes</td></tr>
            <tr><td className="p-4 border-b border-border">Residency Requirement</td><td className="p-4 border-b border-border">5 days in 5 years</td><td className="p-4 border-b border-border">None</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Investment Requirements</h2>
      <p>[UPDATE: add details comparing donation and real estate investment routes for both programs.]</p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Processing Time</h2>
      <p>[UPDATE: add details comparing processing timelines and any expedited options.]</p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Visa-Free Travel</h2>
      <p>[UPDATE: add details comparing passport strength and visa-free access.]</p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Family Inclusion</h2>
      <p>[UPDATE: add details comparing dependent eligibility and family pricing.]</p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Residency Requirements</h2>
      <p>[UPDATE: add details comparing physical presence requirements.]</p>
    </section>

    <section>
      <h2 className="font-serif text-2xl text-foreground mb-4">Conclusion</h2>
      <p>[UPDATE: add details summarizing which program suits which type of applicant.]</p>
      <p>Explore each program in detail: <InternalLink to="/citizenship-by-investment/antigua-barbuda">Antigua & Barbuda</InternalLink> | <InternalLink to="/citizenship-by-investment/grenada">Grenada</InternalLink></p>
    </section>
  </BlogArticleLayout>
);

export default AntiguaVsGrenada;
