import Modules from "@/app/components/Modules";
import { client, urlFor } from "@/app/lib/sanity";
import { formatDate } from "@/app/lib/utils";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
  *[_type == 'event' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    modules,
    date
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function Event({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  // console.log(data);
  return (
    <div className="my-4">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide">
          Events {">"} {data.title}
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
        <span className="mt-2 block mx-auto text-center">
          {formatDate(data.date)}
        </span>
      </h1>

      <div className="max-w-3xl mx-auto">
        <Modules modules={data?.modules} />
      </div>
    </div>
  );
}
