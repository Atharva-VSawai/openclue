import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for razorpay (uses node crypto)
  serverExternalPackages: ["razorpay"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
