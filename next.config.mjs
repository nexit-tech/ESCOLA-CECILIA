/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yata-apix-f86015e4-b0f0-46cb-93d0-ebd6a0cb6dd7.s3-object.locaweb.com.br',
      },
      {
        protocol: 'https',
        hostname: 'yata.s3-object.locaweb.com.br',
      },
      {
        protocol: 'https',
        hostname: 'pub-2f61a9552bab449495b240463abcaa31.r2.dev',
      },
    ],
  },
};

export default nextConfig;
