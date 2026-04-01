import type { NextConfig } from "next";

/** GitHub Pages project sites live under /<repo-name>; set NEXT_PUBLIC_BASE_PATH=/portfolio when building for gh-pages. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/** Static hosts (GitHub Pages) cannot run the image optimization API; export emits plain asset URLs. */
const staticExport = Boolean(basePath);

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  ...(staticExport
    ? { output: "export" as const, trailingSlash: true }
    : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    ...(staticExport ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
