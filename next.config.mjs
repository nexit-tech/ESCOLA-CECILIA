/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yata-apix-f86015e4-b0f0-46cb-93d0-ebd6a0cb6dd7.s3-object.locaweb.com.br',
      },
      {
        protocol: 'https',
        hostname: 'yata.s3-object.locaweb.com.br',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1440, 1920, 2400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
