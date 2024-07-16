import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

export default function ImageComponent({ value }: { value: string }) {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={urlFor(value).url()}
      loading="lazy"
      alt="image"
      height={800}
      width={800}
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
}
