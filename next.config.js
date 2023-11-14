/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { domains: ["www.google.com", "tecdn.b-cdn.net"] },
};

module.exports = nextConfig;
