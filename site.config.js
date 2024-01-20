const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Seungseob Kim",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "끈질기게 기록하고 소화하기",
    email: "sub9707@naver.com",
    linkedin: "",
    github: "sub9707",
    instagram: "",
  },
  projects: [
    {
      name: `trouble-shooter`,
      href: "https://github.com/sub9707/comments_cloud",
    },
    {
      name: `Repomon`,
      href: "https://github.com/sub9707/repomon",
    },
    {
      name: `on-the-mars`,
      href: "https://github.com/sub9707/on-the-mars",
    },
    {
      name: `funteer`,
      href: "https://github.com/sub9707/funteer",
    },
  ],
  // blog setting (required)
  blog: {
    title: "김승섭 개발 학습 블로그",
    description: "웹개발 지식들을 끈질기게 기록하는 학습 블로그입니다",
  },

  // CONFIG configration (required)
  link: "https://subdevblog.vercel.app/",
  since: "", // If leave this empty, current year will be used.
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
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
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
