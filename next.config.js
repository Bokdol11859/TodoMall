/** @type {import('next').NextConfig} */
// FIXME : To be removed when published on stores
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net',
      },
    ],
  },
});

module.exports = nextConfig;
