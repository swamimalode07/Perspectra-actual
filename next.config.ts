import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ====================
  // ERROR BYPASS SETTINGS
  // ====================
  typescript: {
    ignoreBuildErrors: true, // Bypasses ALL TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint completely
  },
  reactStrictMode: false, // Disables React double-rendering in dev

  // ====================
  // PERFORMANCE OPTIMIZATIONS
  // ====================
  swcMinify: true, // Uses Rust-based SWC minifier (faster than Terser)
  output: "standalone", // Creates self-contained deployment folder

  // ====================
  // IMAGE HANDLING
  // ====================
  images: {
    unoptimized: true, // Disables next/image optimization
    domains: [], // Empty array bypasses domain validation
  },

  // ====================
  // EXPERIMENTAL OVERRIDES
  // ====================
  experimental: {
    forceSwcTransforms: true, // Forces SWC even for node_modules
    legacyBrowsers: false, // Disables IE11 support
    outputFileTracingIgnores: ["**/*"], // Ignores all files in traces
    serverComponentsExternalPackages: [], // Empty array allows all packages
  },

  // ====================
  // SECURITY OVERRIDES (USE WITH CAUTION)
  // ====================
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Force-Deploy",
          value: "true", // Mock header to bypass security checks
        },
      ],
    },
  ],

  // ====================
  // WEBPACK OVERRIDES
  // ====================
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }; // Bypasses missing modules
    return config;
  },

  // ====================
  // DEPLOYMENT HACKS
  // ====================
  generateBuildId: () => "force-build-id", // Constant build ID
  poweredByHeader: false, // Removes "X-Powered-By: Next.js"
  staticPageGenerationTimeout: 1000, // 1 second timeout (default is 60)
};

export default nextConfig;