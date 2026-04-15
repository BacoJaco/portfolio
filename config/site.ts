export const siteConfig = {
  name: "Jacob McLaughlin",

  // Personal Information
  author: {
    name: "Jacob McLaughlin",
    email: "mclaughlinjacob2005@gmail.com",
    github: "https://github.com/BacoJaco",
    linkedin: "https://www.linkedin.com/in/jacob-mcl",
  },

  // Leave empty objects or comment out sections you don't want to use
  analytics: {
    visitors: {
      token: process.env.NEXT_PUBLIC_VISITORS_TOKEN,
    },
    // Umami Analytics
    umami: {
      websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
      url: process.env.NEXT_PUBLIC_UMAMI_URL,
    },
    // Microsoft Clarity
    clarity: {
      projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;