import { fullPage } from "./interface";
import { client, urlFor } from "./lib/sanity";
import Modules from "./components/Modules";
import SearchResults from "./components/SearchResults";
import Hero from "./components/Hero";
export const revalidate = 30;

async function getPageData() {
  const query = `
  *[_type == 'page' && slug == null] {
    "currentSlug": slug.current,
    title,
    modules[],
    heroImage
  }[0]`;

  const data = await client.fetch(query);
  return data || null;
}

async function performSearch(searchQuery: string) {
  const searchResults = await client.fetch(
    `
  *[
    (_type == 'article' || _type == 'page' || _type == 'event') && 
    (
      title match $searchQuery + "*" ||
      count(modules[_type == "richtext-module" && pt::text(content) match $searchQuery + "*"]) > 0 ||
      count(modules[_type == "image-module" && caption match $searchQuery + "*"]) > 0 ||
      count(modules[_type == "hero.split" && pt::text(content) match $searchQuery + "*"]) > 0 ||
      count(modules[_type == "profile-card" && pt::text(items[].reference->name) match $searchQuery + "*"]) > 0
    )
  ] {
    _type,
    title,
    "currentSlug": slug.current,
    image
  }
  +
  *[
    _type == 'profile' && 
    (pt::text(name) match $searchQuery + "*" || pt::text(content) match $searchQuery + "*")
  ][0..0] {
    "_type": "page",
    "title": "Faculty and Staff",
    "currentSlug": "faculty-and-staff"
  }
  `,
    { searchQuery }
  );
  return searchResults;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { q?: string };
}) {
  const searchQuery = searchParams.q;

  if (searchQuery) {
    const searchResults = await performSearch(searchQuery);
    return <SearchResults query={searchQuery} results={searchResults} />;
  }

  const data: fullPage = await getPageData();

  if (!data) {
    return (
      <div className="min-h-80 text-center mt-16">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      {data.heroImage ? <Hero src={urlFor(data.heroImage).url()} /> : <></>}
      <div className="my-4 mt-8">
        <h1>
          <span className="mt-2 block text-lg md:text-2xl text-center leading-8 font-bold uppercase text-ctid-taupe">
            {data.title}
          </span>
        </h1>
        <Modules modules={data?.modules} />
      </div>
    </>
  );
}
