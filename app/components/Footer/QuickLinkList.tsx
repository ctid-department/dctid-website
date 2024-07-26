import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  links: any[];
}

const QuickLinksList: React.FC<Props> = async ({ title, links }) => {
  return (
    <div className="md:w-[40%]">
      <h1 className="text-xl font-bold border-b-2 pb-2 mb-2">
        {title ?? "Quick Links"}
      </h1>
      <>
        {links?.map((link, index) => {
          return (
            <p key={index}>
              <Link className="hover:underline" href={link.link}>
                {link.title}
              </Link>
            </p>
          );
        })}
      </>
    </div>
  );
};

export default QuickLinksList;
