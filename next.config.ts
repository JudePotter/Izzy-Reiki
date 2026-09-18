import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Google reviewer avatar photos, returned by the Places API `reviews` field.
    remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  },
};

export default nextConfig;
