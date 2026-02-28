import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "longevityinitiativeforfoodandeducation.com" }],
        destination: "https://www.longevityinitiativeforfoodandeducation.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
