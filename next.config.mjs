/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.tanishq.co.in',
      },
      {
        protocol: 'https',
        hostname: '**.fireworktv.com',
      }
    ],
  },
};

export default nextConfig;
