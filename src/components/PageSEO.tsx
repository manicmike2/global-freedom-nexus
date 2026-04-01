import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

const PageSEO = ({ title, description, canonical, type = "website", jsonLd }: PageSEOProps) => {
  const fullTitle = title.includes("Global Freedom Capital")
    ? title
    : `${title} | Global Freedom Capital`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <link rel="canonical" href={canonical} />}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default PageSEO;
