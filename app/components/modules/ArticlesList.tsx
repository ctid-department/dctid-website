import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { simpleArticleCard } from "@/app/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/lib/utils";

interface Props {
  isCustom: boolean;
  showButton: boolean;
  maxItems: number;
  items?: any;
}

export const revalidate = 30;

async function getArticleData(maxItems: number) {
  const query = `
    *[_type == 'article'][0..${maxItems - 1}] | order(date desc) {
      title,
      "currentSlug": slug.current,
      heroImage,
      date,
      "creationDate": _createdAt
    }
  `;

  const data = await client.fetch(query);

  return data;
}

async function getFromRefs(refs: any) {
  const refIds = refs.map((ref: any) => ref._ref);

  const query = `
    *[_type == "article" && _id in $refIds] {
      title,
      "currentSlug": slug.current,
      heroImage,
      date,
      "creationDate": _createdAt
    }
  `;

  const data = await client.fetch(query, { refIds });

  return data;
}

const ArticlesList: React.FC<Props> = async ({
  isCustom,
  showButton,
  maxItems,
  items,
}) => {
  let data: simpleArticleCard[] = [];
  if (isCustom) {
    data = await getFromRefs(items);
  } else {
    data = await getArticleData(maxItems ?? 100);
  }

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
                className="rounded-t h-[200px] object-cover min-w-full"
              />
            </Link>
            <CardContent className="p-4">
              <Link href={`/news/${article.currentSlug}`}>
                <h3 className="text-md line-clamp-2 font-semibold text-ctid-taupe hover:underline">
                  {article.title}
                </h3>
              </Link>
              <p className="line-clamp-3 text-xs mt-1 text-ctid-taupe">
                {article.date
                  ? formatDate(article.date)
                  : formatDate(article.creationDate)}
              </p>
            </CardContent>
          </Card>
        ))}
        {showButton ? (
          <Card className="shadow rounded my-auto h-max">
            <CardContent className="p-4">
              <Link href="/news">
                <h3 className="text-md line-clamp-2 font-semibold text-center text-ctid-taupe">
                  View all
                </h3>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default ArticlesList;
