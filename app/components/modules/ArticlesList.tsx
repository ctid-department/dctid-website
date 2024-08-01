import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { simpleArticleCard } from "@/app/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/lib/utils";
import ArticleCard from "../ArticleCard";

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
          <ArticleCard
            key={idx}
            title={article.title}
            href={`/news/${article.currentSlug}`}
            date={article.date}
            imageSrc={urlFor(article.heroImage).url()}
          />
        ))}
        {showButton ? (
          <Card className={`shadow rounded my-auto h-max ${data.length % 2 == 0 ? "md:col-span-2" : ""}`}>
            <CardContent className="p-0" >
              <Link href="/news">
                <h3 className="p-4 text-md line-clamp-2 font-semibold text-center text-ctid-taupe hover:underline">
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
