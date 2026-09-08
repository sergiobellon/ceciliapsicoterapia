import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://ceciliapsicoterapia.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

const Seo = ({ title, description, path, noindex }: SeoProps) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Cecilia de Gracia Gallego · Psicoterapia" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default Seo;
