/** @type {import('next').NextConfig} */
// FIXME : To be removed when published on stores
const withPWA = require('next-pwa')({
  dest: 'public',
});
const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
});

module.exports = nextConfig;
