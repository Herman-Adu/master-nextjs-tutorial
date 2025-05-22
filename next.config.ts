import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        protocol: "http",
        port: "3000",
      },
      {
        hostname: "master-nextjs-tutorial.vercel.app",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
//avatars.githubusercontent.com
