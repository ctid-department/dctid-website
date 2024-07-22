import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { simpleArticleCard } from "@/app/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/lib/utils";

interface Props {
  display: boolean;
}

export const revalidate = 30;

async function getArticleData() {
  const query = `
    *[_type == 'article'] | order(date desc) {
    title,
      title,
      "currentSlug": slug.current,
      heroImage,
      date,
      "creationDate": _createdAt
    }`;

  const data = await client.fetch(query);

  return data;
}

const ArticlesList: React.FC<Props> = async ({ display }) => {
  const data: simpleArticleCard[] = await getArticleData();
  // console.log(data);

  return (
    <section className="my-8">
      <div className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 my-16 gap-8">
        {data.map((article, idx) => (
          <Card key={idx} className="shadow rounded">
            <Link href={`/news/${article.currentSlug}`}>
              <Image
                src={urlFor(article.heroImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t h-[200px] object-cover"
              />
            </Link>
            <CardContent className="p-4">
              <Link href={`/news/${article.currentSlug}`}>
                <h3 className="text-md line-clamp-2 font-semibold">
                  {article.title}
                </h3>
              </Link>
              <p className="line-clamp-3 text-xs mt-1 text-gray-600">
                {article.date
                  ? formatDate(article.date)
                  : formatDate(article.creationDate)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArticlesList;
