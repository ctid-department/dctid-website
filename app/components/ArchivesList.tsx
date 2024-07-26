import Link from "next/link";
import React from "react";
import { client } from "../lib/sanity";

async function getData() {
  const query = `
    *[_type == "article"] {
      "year": string::split(date, '-')[0],
      "month": string::split(date, '-')[1]
    } | order(year desc, month desc)
  `;

  const data = await client.fetch(query);
  return data || [];
}

export function formatMonthYear(year: string, month: string) {
  const date = new Date(`${year}-${month}-01`);
  return date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
  });
}

export default async function ArchivesList() {
  const linkCSS = "hover:brightness-90";
  const data = await getData();

  const uniqueMonthYears: string[] = Array.from(
    new Set(
      data.map(
        ({ year, month }: { month: string; year: string }) => `${year}-${month}`
      )
    )
  );

  return (
    <div className="md:text-left text-center mb-8 min-w-max">
      <h1 className="text-xl md:text-2xl font-medium mt-4 text-ctid-taupe">
        Archives
      </h1>
      <div className="flex flex-col mt-8 gap-4 text-ctid-taupe text-sm">
        {uniqueMonthYears.map((monthYear) => {
          const [year, month] = monthYear.split("-");
          return (
            <Link
              href={`news/${year}/${month}`}
              key={monthYear}
              className={linkCSS}
            >
              {formatMonthYear(year, month)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
