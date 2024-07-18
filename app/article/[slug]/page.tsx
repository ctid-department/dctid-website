import ImageComponent from "@/app/components/ImageComponent";
import Hero from "@/app/components/Hero";
import { fullArticle } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
  *[_type == 'article' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    content,
    titleImage
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullArticle = await getData(params.slug);

  console.log(data);
  return (
    <div className="my-4">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide">
          News {">"} {data.title}
        </span>
        <Hero src={urlFor(data.titleImage).url()} className="h-[60vh] my-3">
          <h1 className="text-white text-center bg-[rgba(0,0,0,0.5)] text-3xl p-1">
              {data.title}
          </h1>
        </Hero>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border w-full"
      />

      <div className="mx-auto mt-16 prose prose-blue prose-md">
        <PortableText
          value={data.content}
          components={{
            types: {
              image: ImageComponent,
            },
          }}
        />
      </div>
    </div>
  );
}
