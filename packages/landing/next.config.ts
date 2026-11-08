import type { NextConfig } from 'next';

const NODE_ENV = process.env.NODE_ENV ?? 'development';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
      },
    },
  },

  output: 'export',
  trailingSlash: true,
  // GitHub Pages project site lives under //neuro.imagers/
  basePath: NODE_ENV === 'production' ? '/neuro.imagers' : '',
  assetPrefix: NODE_ENV === 'production' ? '/neuro.imagers' : '',
  images: { unoptimized: true },
};

export default nextConfig;
