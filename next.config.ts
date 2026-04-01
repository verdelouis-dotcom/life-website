import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "longevityinitiativeforfoodandeducation.com" }],
        destination: "https://www.longevityinitiativeforfoodandeducation.com/:path*",
        permanent: true,
      },
      {
        source: "/tracker",
        destination: "/thank-you",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
