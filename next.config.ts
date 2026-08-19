import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phones/tablets on the local network to load the dev server
  // (Next 16 blocks cross-origin dev requests by default). Add more IPs
  // here if your machine's LAN address changes.
  allowedDevOrigins: ["192.168.100.4"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
