import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  /* 
     GitHub Pages Subdirectory:
     If your repo is https://github.com/user/procard, uncomment the following:
     basePath: '/procard',
  */
  Subdirectory: '/proCard',
};

export default nextConfig;
