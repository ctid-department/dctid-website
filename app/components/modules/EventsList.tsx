import React from "react";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import DateSeparator from "../DateSeparator";
import { dateDiff, formatDateDiff } from "@/lib/utils";

interface Props {
  isCustom: boolean;
  maxItems: number;
  items?: any;
}

export const revalidate = 30;

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

async function getEventData(maxItems: number) {
  const query = `
    *[_type == 'event'][0..${maxItems - 1}] | order(date desc) {
    title,
      title,
      "currentSlug": slug.current,
      date,
      "creationDate": _createdAt
    }`;

  const data = await client.fetch(query);

  return data;
}

async function getFromRefs(refs: any) {
  const refIds = refs.map((ref: any) => ref._ref);

  const query = `
    *[_type == "event" && _id in $refIds] {
      title,
      "currentSlug": slug.current,
      date
    }
  `;

  const data = await client.fetch(query, { refIds });

  return data;
}

const EventsList: React.FC<Props> = async ({ isCustom, maxItems, items }) => {
  let data = [];
  if (isCustom) {
    data = await getFromRefs(items);
  } else {
    data = await getEventData(maxItems ?? 100);
  }
  // console.log(data);

  const dateNow = new Date()

  return (
    <section className="my-8">
      <div className="mx-auto max-w-3xl flex flex-col my-8 px-2">
        {data.map((event: any, idx: number) => (
          <div key={idx} className={`flex gap-4 items-stretch`}>
            <div className="flex items-center w-28 flex-shrink-0">
              <div className="my-auto w-full text-center text-sm md:text-base">
                <span>{formatDate(event.date)}</span>
                <br />
                <span className="text-xs">({formatDateDiff(dateDiff(event.date))})</span>
              </div>
            </div>
            <DateSeparator />
            <Link
              className="items-center flex font-medium md:text-lg text-ctid-taupe my-4 hover:underline flex-grow"
              href={`/events/${event.currentSlug}`}
            >
              {event.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsList;
