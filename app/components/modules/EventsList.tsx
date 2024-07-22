import React from "react";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
// import { formatDate } from "@/app/lib/utils";
import { Separator } from "@/components/ui/separator";

interface Props {
  display: boolean;
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

async function getEventData() {
  const query = `
    *[_type == 'event'] | order(date desc) {
    title,
      title,
      "currentSlug": slug.current,
      date,
      "creationDate": _createdAt
    }`;

  const data = await client.fetch(query);

  return data;
}

const EventsList: React.FC<Props> = async ({ display }) => {
  const data = await getEventData();
  // console.log(data);

  return (
    <section className="my-8">
      <div className="mx-auto max-w-3xl flex flex-col my-8">
        {data.map((event: any, idx: number) => (
          <div key={idx} className="flex gap-4 h-16 items-stretch">
            <div className="flex items-center w-28 flex-shrink-0">
              <div className="my-auto w-full text-center">
                {formatDate(event.date)}
              </div>
            </div>
            <Separator orientation="vertical" />
            <Link
              className="items-center flex font-medium text-lg text-ctid-taupe my-4 hover:underline flex-grow"
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
