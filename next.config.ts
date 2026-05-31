import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/brulee-bakery" : "",
  assetPrefix: isProd ? "/brulee-bakery/" : "",
};

export default nextConfig;
