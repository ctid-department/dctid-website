import React from "react";
import { cn } from "@/lib/utils";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import FeatureItem from "./FeatureItem";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Props {
  data: any;
  showButton: boolean;
}

const FeatureListCore: React.FC<Props> = ({ data, showButton }) => {
  const CSS = {
    wrapper: cn("w-full p-4 my-4"),
    featuredWrapper: cn(
      "group",
      "md:flex",
      "md:p-2",
      "hover:bg-gray-200",
      "rounded-md",
      "transition-all"
    ),
    featuredImage: cn(
      "w-full h-[25vh]",
      "md:w-2/3 md:h-[40vh] object-cover",
      "shadow-md",
      "border border-gray-200",
      "rounded-md"
    ),
    featuredInfo: cn("mb-4", "md:w-1/3 md:pl-3"),
    featuredHeader: cn(
      "font-bold",
      data[0].thesis ? "text-xl" : "text-2xl",
      "text-ctid-taupe",
      "mt-2"
    ),
    featuredDate: cn("text-xs"),
    featuredIntro: cn("text-sm", "mt-2"),
    readMore: cn("text-sm text-ctid-taupe", "group-hover:underline"),

    articleList: cn("pt-2", "md:flex md:flex-row md:items-center", "gap-3"),

    viewAllButton: cn(
      "block p-4 mt-2 md:mt-0",
      "md:h-full",
      "border border-gray-200",
      "md:border-0",
      "text-center text-ctid-taupe font-semibold",
      "align-middle",
      "hover:underline hover:bg-gray-200",
      "active:bg-ctid-taupe active:text-white",
      "rounded-md",
      "transition-all"
    ),
  };

  return (
    <div className={CSS.wrapper}>
      <Link
        href={`/news/${data[0].currentSlug}`}
        className={CSS.featuredWrapper}
      >
        <Image
          className={CSS.featuredImage}
          src={urlFor(data[0].heroImage).url()}
          width={640}
          height={480}
          alt=""
        />
        <div className={CSS.featuredInfo}>
          <h1 className={CSS.featuredHeader}>{data[0].title ?? ""}</h1>
          <p className={CSS.featuredDate}>
            {data[0].date ? formatDate(data[0].date) : ""}
          </p>
          <p className={CSS.featuredIntro}>{data[0].thesis ?? ""}</p>
          <span className={CSS.readMore}>Read more</span>
        </div>
      </Link>
      <div className={CSS.articleList}>
        {data?.map((article: any, idx: any) =>
          idx == 0 ? (
            <div className="hidden" key={idx}></div>
          ) : (
            <FeatureItem
              key={idx}
              title={article.title}
              href={`/news/${article.currentSlug}`}
              date={article.date}
              imageSrc={urlFor(article.heroImage).url()}
            />
          )
        )}
        {showButton ? (
          <Link className={CSS.viewAllButton} href="/news">
            <span>View All ›</span>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FeatureListCore;
