import { cn } from "@/lib/utils";
import { client } from "../../lib/sanity";
import { linkItem } from "../../interface";
import React, { FC } from "react";

interface quickLinks {
  currentSlug: string;
  title: string;
  links: linkItem[];
}

async function getPageData(slug: string) {
  const query = `
  *[_type == 'page' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    modules[]
  }[0]`;

  const data = await client.fetch(query);
  return data || null;
}

export default async function QuickLinkList({...props}) {
  const data: quickLinks = await getPageData(props.slug);

  const quickLinkListCSS = cn(
    "w-full h-full p-[5%]",
    props.className
  )

  const linkCSS = "text-blue-500 underline"
  
  if(data){
    // https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements
    return (
      <div className={quickLinkListCSS}>
        <h1 className="text-2xl font-bold">Quick Links</h1>
        <>
        {
          data.links?.map((link, index) => {
            return <p key={index}><span>{link.title}</span> (<a className={linkCSS} href={link.link}>{link.link}</a>)</p>;
          })
        }
        </>
      </div>
    );
  }else{
    return (
      <div className={quickLinkListCSS}>
        <h1 className="text-2xl font-bold">Quick Links</h1>
        <p><span>University of the Philippines System</span> (<a className={linkCSS} href="https://up.edu.ph">https://up.edu.ph</a>)</p>
        <p><span>University of the Philippines Diliman</span> (<a className={linkCSS} href="https://upd.edu.ph">https://upd.edu.ph</a>)</p>
        <p><span>UPD College of Home Economics</span> (<a className={linkCSS} href="https://che.upd.edu.ph">https://che.upd.edu.ph</a>)</p>
        <p><span>UPD Webmail</span></p>
        <p><span>UPD Computerized Registration System</span></p>
      </div>
    );
  }

}