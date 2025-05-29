import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Ensures better React debugging and strict mode behavior
  reactStrictMode: true,

  // ✅ Required for Vercel's serverless builds with custom logic like NextAuth
  output: "standalone",

  // ✅ Image handling (adjust domains if needed)
  images: {
    unoptimized: false,
    domains: ["lh3.googleusercontent.com"], // Add custom image domains if needed
  },

  // ✅ Skip TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Skip ESLint errors during build (e.g. on Vercel)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Recommended experimental features
  experimental: {
    forceSwcTransforms: true,
    legacyBrowsers: false,
  },

  // ✅ Fix for NextAuth: disables node core modules in the browser
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };
    return config;
  },

  // ✅ Optional: remove "Powered by Next.js" header
  poweredByHeader: false,
};

export default nextConfig;
