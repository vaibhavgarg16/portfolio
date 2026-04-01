/** Mirrors `basePath` in next.config; required for `next/image` with `unoptimized` + static export. */
export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${publicBasePath}${path}`;
}
