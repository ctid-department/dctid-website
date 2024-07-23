import { cn } from "@/lib/utils";
import { client } from "../../lib/sanity";

interface contact {
  currentSlug: string;
  title: string;
  name?: string;
  info: string;
}

interface address {
  currentSlug: string;
  title: string;
  line1: string;
  line2?: string;
  line3?: string;
  contacts: contact[];
}

interface addresses {
  currentSlug: string;
  title: string;
  addresses: address[];
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

export default async function AddressList({ ...props }) {
  const data: addresses = await getPageData(props.slug);

  const addressListCSS = cn("", props.className);

  const titleCSS = "text-xl font-bold border-b-2 pb-2 mb-2";

  if (data) {
    return (
      <div className={addressListCSS}>
        <h1 className={titleCSS}>{props.title ?? "Address"}</h1>
        <>
          {data.addresses?.map((address, index) => {
            return (
              <p key={index}>
                <span>{address.line1}</span>
                <br />
                <span>{address.line2}</span>
                <br />
                <span>{address.line3}</span>
                <br />
                <span>
                  {address.contacts.map((contact, index) => {
                    return (
                      <span key={index}>
                        {index == 0 ? "" : " | "}
                        {contact.name ? contact.name + ": " : ""}
                        {contact.info}
                      </span>
                    );
                  })}
                </span>
                <br />
              </p>
            );
          })}
        </>
      </div>
    );
  } else {
    return (
      <div className={addressListCSS}>
        <h1 className={titleCSS}>{props.title ?? "Address"}</h1>
        <p>
          <span>College of Home Economics Museum Building</span>
          <br />
          <span>A. Ma. Regidor Street,</span>
          <br />
          <span>University of the Philippines Diliman</span>
          <br />
          <span>
            (02) 8982 8500 loc 3404 |{" "}
            <a href="mailto:chectid.upd@up.edu.ph" className="hover:underline">
              chectid.upd@up.edu.ph
            </a>
          </span>
          <br />
        </p>
      </div>
    );
  }
}
