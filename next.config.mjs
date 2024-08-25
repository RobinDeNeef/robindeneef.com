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
};

export default nextConfig;
