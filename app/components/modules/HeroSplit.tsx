import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";

export default function HeroSplit({
  content,
  image,
  style,
}: Partial<{
  content: any;
  image: any;
  style: "1" | "2";
}>) {
  const onRight = image.alignment === "right";

  const ImageComponent = (
    <div className={`${style === "1" ? "md:w-1/2" : ""}`}>
      <Image
        src={urlFor(image).url()}
        width={image.width ?? 400}
        height={image.height ?? 400}
        alt="Hero image"
        priority
        className="mx-auto rounded h-auto shadow object-cover min-h-full"
      />
    </div>
  );

  const ContentComponent = (
    <div
      className={`${style === "1" ? "md:w-1/2" : "p-4 bg-ctid-green min-h-full flex items-center"}`}
    >
      <div
        className={`prose prose-blue prose-md  ${onRight ? "md:text-right" : ""} ${style === "1" ? "" : "prose-headings:text-white text-white"}`}
      >
        <PortableText value={content} />
      </div>
    </div>
  );

  return (
    <section className="my-8">
      <div
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 mx-auto ${style === "1" ? "justify-around" : "justify-start items-stretch"}`}
      >
        {onRight ? ContentComponent : ImageComponent}
        {onRight ? ImageComponent : ContentComponent}
      </div>
    </section>
  );
}
