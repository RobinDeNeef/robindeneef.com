import createMDX from '@next/mdx'
import path, { parse } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  async redirects() {
    return [
      // Wildcard path matching
      {
        source: '/makerlog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ]
  },
  // To get MDX posts working
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    parseFrontmatter: true,
  }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
