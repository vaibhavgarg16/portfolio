import type { NextConfig } from "next";

/**
 * GitHub Pages:
 * - Project site `https://<user>.github.io/<repo>/` → set NEXT_PUBLIC_BASE_PATH=/<repo> (leading slash, match repo name).
 * - User site `https://<user>.github.io/` → leave NEXT_PUBLIC_BASE_PATH unset or empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  output: "export",
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
