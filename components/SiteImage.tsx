import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/basePath";

export function SiteImage({ src, alt, ...rest }: ImageProps) {
  const resolved = typeof src === "string" ? withBasePath(src) : src;
  return <Image src={resolved} alt={alt} {...rest} />;
}
