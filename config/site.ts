export const siteConfig = {
  name: "Jacob McLaughlin",

  // Personal Information
  author: {
    name: "Jacob McLaughlin",
    email: "mclaughlinjacob2005@gmail.com",
    github: "https://github.com/BacoJaco",
    linkedin: "https://www.linkedin.com/in/jacob-mcl",
    description: "Hello! I'm a Computer Science student at the University of California, Riverside with a strong interest in software engineering, AI, and full-stack development. I’m always seeking new opportunities to apply my skills and take on meaningful projects.",
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