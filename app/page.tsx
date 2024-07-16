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
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: simpleArticleCard[] = await getArticleData();

  console.log(data);
  console.log(params.slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((article, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(article.titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{article.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600">
              {article.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/article/${article.currentSlug}`}>Read more</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
