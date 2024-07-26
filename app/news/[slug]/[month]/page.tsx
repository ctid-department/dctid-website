import { fullArticle } from "@/app/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/app/components/ArticleCard";

export const revalidate = 30;

function formatMonthYear(year: string, month: string) {
  const date = new Date(`${year}-${month}-01`);
  return date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
  });
}

async function getData(startDate: string, endDate: string) {
  const query = `
    *[_type == 'article' && date >= $startDate && date < $endDate] {
    "currentSlug": slug.current,
    title,
    heroImage,
    date
    }
    `;

  const data = await client.fetch(query, { startDate, endDate });
  return data;
}

export default async function Article({
  params,
}: {
  params: { slug: string; month: string };
}) {
  const year = params.slug;
  const month = params.month;

  const startDate = `${year}-${month.padStart(2, "0")}-01`;
  const endDate =
    month === "12"
      ? `${Number(year) + 1}-01-01`
      : `${year}-${(Number(month) + 1).toString().padStart(2, "0")}-01`;

  const data: fullArticle[] = await getData(startDate, endDate);

  // console.log(data);

  if (!data || data.length === 0) {
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
        <span className="mt-2 block text-lg md:text-2xl text-center leading-8 font-bold text-ctid-taupe">
          Month: {formatMonthYear(year, month)}
        </span>
      </h1>
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
      </div>
    </div>
  );
}
