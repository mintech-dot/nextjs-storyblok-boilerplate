import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    STORYBLOK_OAUTH_TOKEN: process.env.STORYBLOK_OAUTH_TOKEN,
    STORYBLOK_SPACE_ID: process.env.STORYBLOK_SPACE_ID,
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
