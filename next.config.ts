import type { NextConfig } from "next";

const imageDomain = new URL(process.env.NEXT_PUBLIC_IMAGE_DOMAIN || 'https://api.adgscribe.companydemo.ca');
const parsed = new URL(imageDomain);

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: parsed.protocol.replace(':', ''),
        hostname: parsed.hostname,
        port: parsed.port || '',
        pathname: '/storage/uploads/**', // wildcard path
      },
    ],
  },
};

export default nextConfig;
