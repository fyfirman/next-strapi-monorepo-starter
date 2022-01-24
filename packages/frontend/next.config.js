/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Notes: Disabled. Using eslint command on root of monorepo folder. 
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
