import { Card, CardContent } from "@/components/ui/card";
import { fullPage, simpleArticleCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30;

async function getArticleData() {
  const query = `
  *[_type == 'article'] | order(_createdAt desc) {
  title,
    title,
    "currentSlug": slug.current,
    titleImage,
    "creationDate": _createdAt
  }`;

  const data = await client.fetch(query);

  return data;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: simpleArticleCard[] = await getArticleData();

  console.log(data);
  console.log(params.slug);

  return (
    <div className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 my-5 gap-8">
      {data.map((article, idx) => (
        <Card key={idx} className="shadow rounded">
          <Link href={`/article/${article.currentSlug}`}>
            <Image
              src={urlFor(article.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t h-[200px] object-cover"
            />
          </Link>
          <CardContent className="p-4">
            <Link href={`/article/${article.currentSlug}`}>
              <h3 className="text-md line-clamp-2 font-semibold">
                {article.title}
              </h3>
            </Link>
            <p className="line-clamp-3 text-xs mt-1 text-gray-600">
              {formatDate(article.creationDate)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
