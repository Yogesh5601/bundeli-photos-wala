import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For cPanel / public_html static hosting, uncomment:
  // output: "export",
  // trailingSlash: true,
  images: {
    // Required when using output: "export"
    unoptimized: true,
  },
};

export default nextConfig;
