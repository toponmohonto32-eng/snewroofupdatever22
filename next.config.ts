import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    'preview-chat-e68f14b9-8b57-40c6-9396-74deca57ba3e.space.z.ai',
    '.space.z.ai',
  ],
};

export default nextConfig;
