import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  // Performance-Optimierungen
  compress: process.env.NODE_ENV === 'production',
  productionBrowserSourceMaps: false,
  // Compiler-Optimierungen
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Experimental Features
  experimental: {
    optimizePackageImports: ['@salzpate/react-ui'],
    scrollRestoration: false,
  },
};

export default nextConfig;
