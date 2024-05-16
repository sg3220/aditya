// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://stories-3.onrender.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
