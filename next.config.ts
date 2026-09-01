import type { NextConfig } from "next";

const isStaticExport = process.env.VANT_STATIC_EXPORT === "true";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      trailingSlash: true,
    }
  : {};

export default nextConfig;
