import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { profileItem } from "@/app/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface Props {
  isCustom: boolean;
  maxItems: number;
  items?: any;
}

export const revalidate = 30;

async function getProfileData(maxItems: number) {
  const query = `
    *[_type == 'profile'][0..${maxItems - 1}] |order(orderRank) {
      image,
      name,
      content
    }
  `;

  const data = await client.fetch(query);

  return data;
}

async function getFromRefs(refs: any) {
  const refIds = refs.map((ref: any) => ref._ref);

  const query = `
    *[_type == "profile" && _id in $refIds] {
      image,
      name,
      content
    }
  `;

  const data = await client.fetch(query, { refIds });

  return data;
}

const ProfilesList: React.FC<Props> = async ({ isCustom, maxItems, items }) => {
  let data: profileItem[] = [];
  if (isCustom) {
    data = await getFromRefs(items);
  } else {
    data = await getProfileData(maxItems ?? 100);
  }

  return (
    <section className="my-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 my-16 gap-8">
        {data.map((profile, idx) => (
          <section
            key={idx}
            className="drop-shadow-lg bg-ctid-beige rounded-lg content-center w-70 h-80"
          >
            <div className="">
              <Image
                src={urlFor(profile.image).url()}
                width={150}
                height={150}
                alt="Image"
                priority
                className="mx-auto rounded-full h-auto shadow object-cover min-h-full center my-3 self-center"
              />
            </div>
            <div className="my-3 min-h-full w-60 text-center items-center mx-2">
              <div className="text-ctid-taupe font-bold text-base">
                <PortableText value={profile.name} />
              </div>
              <div className="prose prose-blue prose-md prose-headings:text-white text-ctid-taupe text-sm">
                <PortableText value={profile.content} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ProfilesList;
