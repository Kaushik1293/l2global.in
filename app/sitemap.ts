// app/sitemap.ts
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = 'https://l2global.in';
  const urls = [
    // Core pages
    { path: '/', freq: 'weekly', pri: 1.0 },
    { path: '/about-us', freq: 'monthly', pri: 0.9 },
    { path: '/contact-us', freq: 'monthly', pri: 0.9 },
    { path: '/career', freq: 'monthly', pri: 0.7 },
    { path: '/team', freq: 'monthly', pri: 0.6 },
    { path: '/blog', freq: 'monthly', pri: 0.6 },

    // Services — AI (highest priority)
    { path: '/services/agentforce-ai', freq: 'monthly', pri: 1.0 },
    { path: '/services/sap-ai', freq: 'monthly', pri: 1.0 },
    // Services — Core
    { path: '/services/salesforce-services', freq: 'monthly', pri: 0.95 },
    { path: '/services/sap-link-by-salesforce', freq: 'monthly', pri: 0.95 },
    { path: '/services/mulesoft', freq: 'monthly', pri: 0.95 },
    { path: '/services/crm-consulting', freq: 'monthly', pri: 0.95 },
    { path: '/services/api-integration', freq: 'monthly', pri: 0.9 },
    { path: '/services/aws-cloud-services', freq: 'monthly', pri: 0.9 },
    { path: '/services/oracle-managed-services', freq: 'monthly', pri: 0.9 },
    { path: '/services/sap', freq: 'monthly', pri: 0.95 },
    { path: '/services/sap/s4hana', freq: 'monthly', pri: 0.9 },
    { path: '/services/sap/rise-with-sap', freq: 'monthly', pri: 0.9 },
    { path: '/services/sap/btp', freq: 'monthly', pri: 0.85 },
    { path: '/services/sap/successfactors', freq: 'monthly', pri: 0.85 },
    { path: '/services/sap/ariba', freq: 'monthly', pri: 0.85 },
    { path: '/services/sap/managed-services', freq: 'monthly', pri: 0.8 },
    // Services — Industry Clouds
    { path: '/services/manufacturing-cloud', freq: 'monthly', pri: 0.9 },
    { path: '/services/financial-services-cloud', freq: 'monthly', pri: 0.9 },
    { path: '/services/velocity-banking', freq: 'monthly', pri: 0.85 },
    { path: '/services/cpq-revenue-cloud', freq: 'monthly', pri: 0.9 },
    { path: '/services/automotive-cloud', freq: 'monthly', pri: 0.85 },
    { path: '/services/media-cloud', freq: 'monthly', pri: 0.8 },
    // Services — Digital
    { path: '/services/data-science', freq: 'monthly', pri: 0.9 },
    { path: '/services/web-development', freq: 'monthly', pri: 0.9 },
    { path: '/services/website-design', freq: 'monthly', pri: 0.85 },
    // USA location pages
    { path: '/usa', freq: 'monthly', pri: 0.9 },
    { path: '/usa/dallas', freq: 'monthly', pri: 0.8 },
    { path: '/usa/houston', freq: 'monthly', pri: 0.8 },
    { path: '/usa/austin', freq: 'monthly', pri: 0.75 },
    // Industries
    { path: '/industries/education', freq: 'monthly', pri: 0.7 },
    { path: '/industries/health-care', freq: 'monthly', pri: 0.7 },
    { path: '/industries/real-estate', freq: 'monthly', pri: 0.7 },
    { path: '/industries/manufacturing', freq: 'monthly', pri: 0.7 },
    { path: '/industries/non-profit', freq: 'monthly', pri: 0.7 },
  ];
  return urls.map(({ path, freq, pri }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: pri,
  }));
}
