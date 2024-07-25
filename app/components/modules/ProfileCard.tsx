import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";

export default function ProfileCard({
  content,
  image,
  name,
}: Partial<{
  content: any;
  image: any;
  name: any;
}>) {
  const ImageComponent = (
    <div className="">
      <Image
        src={urlFor(image).url()}
        width={150}
        height={150}
        alt="Image"
        priority
        className="mx-auto rounded-full h-auto shadow object-cover min-h-full center my-3 self-center"
      />
    </div>
  );

  const NameComponent = (
    <div
      className="my-3 min-h-full w-60 text-center items-center"
    >
      <div
        className= "text-ctid-taupe font-bold"
      >
        <PortableText value={name} />
      </div>
    </div>
  );

  const ContentComponent = (
    <div
      className="px-4 pb-4 min-h-full text-center w-60 content-center items-center"
    >
      <div
        className="prose prose-blue prose-md prose-headings:text-white text-ctid-taupe"
      >
        <PortableText value={content} />
      </div>
    </div>
  );

  return (
    <section className="my-8 drop-shadow-lg bg-ctid-beige rounded-lg content-center w-60 h-70">
      <div
        className=""
      >
        {ImageComponent}
      </div>
      
      <div
        className=""
      >
        {NameComponent}
        {ContentComponent}
      </div>
    </section>
  );
}
