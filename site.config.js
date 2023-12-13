const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Carnivore",
    image: "/avatar.png",
    role: "Carnivore Korea",
    bio: "카니보어 한국 커뮤니티",
    email: "contact@carnivore.kr",
    linkedin: "",
    github: "CarnivoreKR",
    youtube: "CarnivoreKR",
    twitter: "CarnivoreKR",
    instagram: "carnivore.kr",
  },
  projects: [
    {
      name: "공식사이트",
      href: "https://carnivore.kr/",
    },
    {
      name: "디스코드",
      href: "https://discord.carnivore.kr/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Carnivore Blog",
    description: "Welcome to Carnivore Blog!",
    theme: "auto", // ['light', 'dark', 'auto']
    seo: {
      keywords: ["Blog", "Website", "Notion", "Carnivore", "Keto", "LowCarb"],
        },
  }
  // CONFIG configration (required)
  link: "https://blog.carnivore.kr",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
