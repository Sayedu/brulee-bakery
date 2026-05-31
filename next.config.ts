import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/brulee-bakery" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

export default nextConfig;
