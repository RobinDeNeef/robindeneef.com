/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

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
