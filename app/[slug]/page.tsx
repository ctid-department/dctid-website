import { fullPage } from "../interface";
import { client, urlFor } from "../lib/sanity";

import Modules from "../components/Modules";
import ArchivesList from "../components/ArchivesList";
import Hero from "../components/Hero";

export const revalidate = 30;

async function getPageData(slug: string) {
  const query = `
  *[_type == 'page' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    heroImage,
    modules[]
  }[0]
  `;

  const data = await client.fetch(query);
  return data || null;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: fullPage = await getPageData(params.slug);

  // console.log(data);

  if (!data) {
    return (
      <div className="min-h-80 text-center mt-16">
        <h1 className="text-3xl font-bold text-ctid-taupe">
          404 - Page Not Found
        </h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      {data.heroImage ? <Hero src={urlFor(data.heroImage).url()} /> : <></>}
      <div className="my-4 mt-8 flex flex-col md:flex-row md:gap-16">
        <div>
          <h1>
            <span className="mt-2 block text-lg md:text-2xl text-center leading-8 font-bold uppercase text-ctid-taupe">
              {data.title}
            </span>
          </h1>
          <Modules modules={data?.modules} />
        </div>
        {params.slug === "news" ? <ArchivesList /> : <></>}
      </div>
    </>
  );
}
