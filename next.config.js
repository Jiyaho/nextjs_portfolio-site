const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ibb.co'],
  },
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = withContentlayer(nextConfig);
