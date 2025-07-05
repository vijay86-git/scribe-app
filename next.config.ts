import type { NextConfig } from "next";

const imageDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN || 'https://api.adgscribe.companydemo.ca';
const parsed = new URL(imageDomain);

const remotePattern = {
  protocol: parsed.protocol.replace(':', ''),
  hostname: parsed.hostname,
  pathname: '/storage/uploads/**',
  ...(parsed.port ? { port: parsed.port } : {}), // only include port if it exists
};

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [remotePattern],
  },
};

export default nextConfig;