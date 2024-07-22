import { fullPage } from "./interface";
import { client } from "./lib/sanity";

import Modules from "./components/Modules";

export const revalidate = 30;

async function getPageData() {
  const query = `
  *[_type == 'page' && slug == null] {
    "currentSlug": slug.current,
    title,
    modules[]
  }[0]`;

  const data = await client.fetch(query);
  return data || null;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: fullPage = await getPageData();

  // console.log(data);

  if (!data) {
    return (
      <div className="min-h-80 text-center mt-16">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="my-4 mt-8">
      <h1>
        <span className="mt-2 block text-lg text-center leading-8 font-bold sm:text-2xl uppercase">
          {data.title}
        </span>
      </h1>
      <Modules modules={data?.modules} />
    </div>
  );
}
