import { fullPage } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";

import { PortableText } from "next-sanity";
import ImageComponent from "../components/ImageComponent";

export const revalidate = 30;

async function getPageData(slug: string) {
  const query = `
  *[_type == 'page' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    content
  }[0]`;

  const data = await client.fetch(query);
  return data || null;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: fullPage = await getPageData(params.slug);

  console.log(data);

  if (!data) {
    return (
      <div className="min-h-80 text-center mt-16">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-96 mt-8 prose prose-blue prose-md">
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
