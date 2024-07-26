import AddressList from "./AddressList";
import QuickLinkList from "./QuickLinkList";
import { client } from "@/app/lib/sanity";

async function getFooterData() {
  const query = `
  *[_type == 'footer'] {
    address,
    email,
    phoneNumber,
    quickLinks[] {
      "title": label,
      "link": select(
        type == 'internal' => "/" + coalesce(internal->slug.current, ""),
        external
      )
    },
  }[0]
  `;

  const data = await client.fetch(query);
  return data || null;
}

export default async function Footer() {
  const { address, email, phoneNumber, quickLinks } = await getFooterData();

  return (
    <footer className="text-sm text-white w-full min-h-[20vh] bg-ctid-green">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-around mx-auto gap-8 pt-8 pb-16 px-8">
        <AddressList
          title="Department of Clothing, Textiles and Interior Design"
          address={address}
          email={email}
          phoneNumber={phoneNumber}
        />
        <QuickLinkList title="Quick Links" links={quickLinks} />
      </div>
    </footer>
  );
}
