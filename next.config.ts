import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Commented out to allow API routes to function locally
  images: {
    unoptimized: true,
  },
  /* 
     GitHub Pages Subdirectory:
     If your repo is https://github.com/user/procard, uncomment the following:
     basePath: '/procard',
  */
  // Subdirectory: '/proCard', // Invalid config key
};

export default nextConfig;
