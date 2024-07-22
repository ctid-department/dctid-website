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
    "",
    props.className
  )

  const linkCSS = "hover:underline"
  const titleCSS = "text-xl sm:text-2xl font-bold border-b-2 pb-2 mb-2"
  
  if(data){
    // https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements
    return (
      <div className={quickLinkListCSS}>
        <h1 className={titleCSS}>Quick Links</h1>
        <>
        {
          data.links?.map((link, index) => {
            return <p key={index}><a className={linkCSS} href={link.link}>{link.title}</a></p>;
          })
        }
        </>
      </div>
    );
  }else{
    return (
      <div className={quickLinkListCSS}>
        <h1 className={titleCSS}>Quick Links</h1>
        <p><a className={linkCSS} href="https://up.edu.ph">University of the Philippines System</a></p>
        <p><a className={linkCSS} href="https://upd.edu.ph">University of the Philippines Diliman</a></p>
        <p><a className={linkCSS} href="https://che.upd.edu.ph">UPD College of Home Economics</a></p>
        <p><a className={linkCSS} href="#">UPD Webmail</a></p>
        <p><a className={linkCSS} href="https://crs.upd.edu.ph">UPD Computerized Registration System</a></p>
      </div>
    );
  }

}