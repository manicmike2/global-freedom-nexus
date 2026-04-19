import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
  image?: string;
}

const DEFAULT_OG_IMAGE = "https://www.globalfreedomcapital.com/og-image.jpg";

const PageSEO = ({
  title,
  description,
  canonical,
  type = "website",
  jsonLd,
  noindex = false,
  image = DEFAULT_OG_IMAGE,
}: PageSEOProps) => {
  const fullTitle = title.includes("Global Freedom Capital")
    ? title
    : `${title} | Global Freedom Capital`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {canonical && <link rel="canonical" href={canonical} />}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default PageSEO;
