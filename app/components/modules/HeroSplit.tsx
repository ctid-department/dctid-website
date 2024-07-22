import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";

export default function HeroSplit({
  content,
  image,
}: Partial<{
  content: any;
  image: any;
}>) {
  const onRight = image.alignment === "right";

  const ImageComponent = (
    <div className="md:w-1/2">
      <Image
        src={urlFor(image).url()}
        width={300}
        height={300}
        alt="Hero image"
        priority
        className="mx-auto rounded-lg shadow-lg h-auto object-cover"
      />
    </div>
  );

  const ContentComponent = (
    <div className="w-full md:w-1/2">
      <div className="prose prose-blue prose-md">
        <PortableText value={content} />
      </div>
    </div>
  );

  return (
    <section className="my-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mx-auto">
        {onRight ? ContentComponent : ImageComponent}
        {onRight ? ImageComponent : ContentComponent}
      </div>
    </section>
  );
}
