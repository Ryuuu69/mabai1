/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false; // utile sur certains IDE en ligne
    return config;
  },
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  // output: 'export', // dé-commente juste avant un export statique
};
module.exports = nextConfig;
