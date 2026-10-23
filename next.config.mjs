/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
