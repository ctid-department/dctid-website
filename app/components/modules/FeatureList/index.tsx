import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { simpleArticleCard } from "@/app/interface";

import FeatureListCore from "./FeatureListCore";

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

const FeatureList: React.FC<Props> = async ({
  isCustom,
  showButton,
  items,
}) => {
  let data: simpleArticleCard[] = [];
  if (isCustom) {
    data = await getFromRefs(items);
  } else {
    data = await getArticleData(5);
  }

  return (
    <FeatureListCore data={data} showButton={showButton} />
  );
};

export default FeatureList;
