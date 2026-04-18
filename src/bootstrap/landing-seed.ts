import type { Core } from '@strapi/strapi';

const landingUid = 'api::landing-page.landing-page' as const;
const navigationUid = 'api::navigation.navigation' as const;
const siteSettingUid = 'api::site-setting.site-setting' as const;

const landingData = {
  hero: {
    headline: 'The Future of Data Science',
    headlineAccent: 'is Visual.',
    description:
      'Mantis is a visual data science and AI platform that enables you to build, explore, and collaborate on complex data workflows.',
    primaryCta: { label: 'View the Features', url: '#features', newTab: false },
    secondaryCta: {
      label: 'Read the Docs',
      url: 'https://mantisdev.csail.mit.edu/docs',
      newTab: true,
    },
  },
  featuresHeading: 'Platform Features',
  featuresDescription:
    'Discover how Mantis revolutionizes data exploration through <span class="text-primary">cognitive cartography</span> and <span class="text-primary">spatial intelligence</span>.',
  features: [
    {
      title: "Agent's Agora & MantisGPT",
      description:
        'An advanced agentic system for orchestrating AI agents, creating private workflows, and leveraging powerful code assistance.',
      icon: 'mdi:robot-happy-outline',
    },
    {
      title: 'Node-Based Workflows',
      description:
        'Visually compose complex data pipelines with a JSON-native system. Use built-in nodes for mapping, webhooks, and merging.',
      icon: 'mdi:sitemap-outline',
    },
    {
      title: 'Multi-Source Data Ingestion',
      description:
        'Create unified Spaces from text, PDFs, web searches, multimedia files, and even specialized financial data via SEC integration.',
      icon: 'mdi:database-import-outline',
    },
    {
      title: 'Automated Synthesis Pipeline',
      description:
        'Efficiently process data with tasks for embedding, clustering, and labeling, with optimized support for Polars dataframes.',
      icon: 'mdi:atom-variant',
    },
    {
      title: 'Interactive Notebooks',
      description:
        'Go beyond static analysis with fully persistent and shareable notebook sessions, managed by a dedicated Control Panel.',
      icon: 'mdi:notebook-edit-outline',
    },
    {
      title: 'Shareable Journeys',
      description:
        'Create and share managed analyses and content as Journeys and Vignettes to collaborate with your team and stakeholders.',
      icon: 'mdi:share-variant-outline',
    },
  ],
  integrationsHeading: 'Integrations',
  integrationsDescription:
    'Craft dynamic workflows with the <span class="text-primary font-bold">tools you trust</span>. Seamlessly connect your favorite <span class="text-primary font-bold">AI models</span> and <span class="text-primary font-bold">data libraries</span> in our vibrant, node-based platform.',
  integrations: [],
  showcaseHeading: 'Showcase',
  showcaseDescription: 'Explore Mantis in action.',
  showcaseItems: [
    {
      title: 'Mantis Intro',
      url: 'https://www.youtube.com/watch?v=9Auu7q5mmKk&list=PLypiXJdtIca6EgTO3WvWMfpm-16BwAZvP&index=1',
    },
    {
      title: 'Cognitive Cartography Presentation',
      url: 'https://www.youtube.com/watch?v=0TEQioo3vgo&list=PLypiXJdtIca6EgTO3WvWMfpm-16BwAZvP&index=8',
    },
    {
      title: 'Athens Universal AI Summit',
      url: 'https://www.youtube.com/watch?v=5X36D-Jsf4A&list=PLypiXJdtIca6EgTO3WvWMfpm-16BwAZvP&index=3',
    },
    {
      title: 'The Revolutionary Potential of AI with CSAIL Professor Manolis Kellis',
      url: 'https://www.youtube.com/watch?v=vm7KXWEplHc&list=PLypiXJdtIca6EgTO3WvWMfpm-16BwAZvP&index=6',
    },
    {
      title: 'Mantis Overview at CSAIL Alliances',
      url: 'https://www.youtube.com/watch?v=APLMwjg87Zw&list=PLypiXJdtIca6EgTO3WvWMfpm-16BwAZvP&index=4',
    },
    {
      title: 'Manolis Kellis AI Keynote',
      url: 'https://www.youtube.com/watch?v=PSOLp731ZRI&list=PLypiXJdtIca6EgTO3WvWMfpm-16BwAZvP&index=2',
    },
  ],
  joinTeam: {
    title: 'Join Our Team',
    description:
      "At Mantis, we are committed to innovation in AI and data visualization. Born from MIT's Kellis Lab and CSAIL, our team of AI specialists and data scientists brings diverse expertise to cognitive cartography. We aim to revolutionize how businesses leverage data for strategic decisions, setting new industry standards.",
    descriptionSecondary:
      'If you are passionate about transforming complex data into actionable insights, join us in shaping the future of data exploration.',
    cta: {
      label: 'Join Our Team',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScUUxXa4o_QKd65zEFfw2p8ulVzwpJQi9FxtFKcSRxHRKCZKw/viewform?usp=send_form',
      newTab: true,
    },
  },
  metaTitle: 'Mantis - The Visual Data Science Platform',
  metaDescription:
    'Mantis is a visual data science and AI platform that enables you to build, explore, and collaborate on complex data workflows.',
};

const navigationData = {
  logoLabel: 'Mantis',
  headerLinks: [
    { label: 'Features', url: '/#features', newTab: false },
    { label: 'Demos', url: '/#demos', newTab: false },
    { label: 'Integrations', url: '/#integrations', newTab: false },
    { label: 'Showcase', url: '/#showcase', newTab: false },
  ],
  primaryCta: { label: 'Sign Up', url: '/inquire', newTab: false },
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/KellisLab', newTab: true },
    { label: 'Docs', url: 'https://mantisdev.csail.mit.edu/docs', newTab: true },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/playlist?list=PLypiXJdtIca6EgTO3WvWMfpm-16BwAZvP',
      newTab: true,
    },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/mantisai', newTab: true },
  ],
  copyrightText:
    "© 2026 Mantis. Born from MIT's Kellis Lab and CSAIL. All rights reserved.",
};

const siteSettingData = {
  siteName: 'Mantis',
  defaultSeoTitle: 'Mantis - The Visual Data Science Platform',
  defaultSeoDescription:
    'Mantis is a visual data science and AI platform that enables you to build, explore, and collaborate on complex data workflows.',
  twitterCard: 'summary_large_image' as const,
};

async function createPublishedSingleType(
  strapi: Core.Strapi,
  uid: typeof landingUid | typeof navigationUid | typeof siteSettingUid,
  data: Record<string, unknown>
) {
  await strapi.documents(uid).create({
    data,
    status: 'published',
  });
}

export async function seedLandingContent(strapi: Core.Strapi) {
  try {
    const landingDraft = await strapi.documents(landingUid).findFirst({ status: 'draft' });
    const landingPublished = await strapi.documents(landingUid).findFirst({ status: 'published' });
    if (!landingDraft && !landingPublished) {
      await createPublishedSingleType(strapi, landingUid, landingData as Record<string, unknown>);
      strapi.log.info('[seed] Created and published Landing Page defaults');
    }

    const navDraft = await strapi.documents(navigationUid).findFirst({ status: 'draft' });
    const navPublished = await strapi.documents(navigationUid).findFirst({ status: 'published' });
    if (!navDraft && !navPublished) {
      await createPublishedSingleType(strapi, navigationUid, navigationData as Record<string, unknown>);
      strapi.log.info('[seed] Created and published Navigation defaults');
    }

    const siteDraft = await strapi.documents(siteSettingUid).findFirst({ status: 'draft' });
    const sitePublished = await strapi.documents(siteSettingUid).findFirst({ status: 'published' });
    if (!siteDraft && !sitePublished) {
      await createPublishedSingleType(strapi, siteSettingUid, siteSettingData as Record<string, unknown>);
      strapi.log.info('[seed] Created and published Site Setting defaults');
    }
  } catch (error) {
    strapi.log.error('[seed] Landing seed failed', error);
  }
}
