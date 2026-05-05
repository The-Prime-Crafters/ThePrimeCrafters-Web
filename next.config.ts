import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "theprimecrafters.com", // non-www
          },
        ],
        destination: "https://www.theprimecrafters.com/:path*", // www version
        permanent: true, // ✅ THIS makes it 301 instead of 307
      },
    ];
  },
};

export default nextConfig;