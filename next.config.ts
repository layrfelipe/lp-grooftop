import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dx3ulr1ti/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
