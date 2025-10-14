import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/lib/site-config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

export function SEOHead({
  title = `${siteConfig.siteName} - Smart Fleet Management`,
  description = `${siteConfig.siteName} brings reliable GPS tracking, smart analytics, and cost optimization to your fleet.`,
  keywords = `${siteConfig.siteName}, fleet management software, GPS tracking, vehicle tracking, fleet analytics, India`,
  canonicalUrl = siteConfig.domainUrl,
  ogImage = siteConfig.logoPath,
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}: SEOHeadProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Sarthi" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteConfig.siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#17B890" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href={siteConfig.logoPath} />
      <link rel="apple-touch-icon" href={siteConfig.logoPath} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Structured Data for Organization
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.siteName,
  "url": siteConfig.domainUrl,
  "logo": siteConfig.logoPath,
  "description": "Smart fleet management platform",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.streetAddress,
    "addressLocality": siteConfig.address.addressLocality,
    "addressRegion": siteConfig.address.addressRegion,
    "postalCode": siteConfig.address.postalCode,
    "addressCountry": siteConfig.address.addressCountry
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.phonePrimary,
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": []
};

// Structured Data for Software Application
export const softwareStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": `${siteConfig.siteName} Fleet Management`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Complete fleet tracking and management solution for Indian transportation businesses",
  "offers": {
    "@type": "Offer",
    "price": "2499",
    "priceCurrency": "INR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "2499",
      "priceCurrency": "INR",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "minValue": 1,
        "maxValue": 10
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

// Structured Data for Local Business
export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.siteName,
  "image": siteConfig.logoPath,
  "description": "Smart fleet management software",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.streetAddress,
    "addressLocality": siteConfig.address.addressLocality,
    "addressRegion": siteConfig.address.addressRegion,
    "postalCode": siteConfig.address.postalCode,
    "addressCountry": siteConfig.address.addressCountry
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0760",
    "longitude": "72.8777"
  },
  "url": siteConfig.domainUrl,
  "telephone": siteConfig.phonePrimary,
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "₹₹₹"
};
