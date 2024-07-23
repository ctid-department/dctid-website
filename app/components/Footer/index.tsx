import { cn } from "@/lib/utils";
import AddressList from "./AddressList";
import QuickLinkList from "./QuickLinkList";

export default async function Footer({ ...props }) {
  const footerCSS = cn(
    "text-sm text-white w-full min-h-[20vh] bg-ctid-green ",
    props.className
  );

  return (
    <footer className={footerCSS}>
      <div className="max-w-5xl w-full flex flex-col sm:flex-row justify-around mx-auto gap-8 pt-8 pb-16 px-8">
        <AddressList
          className="md:w-[40%]"
          title="Department of Clothing, Textiles and Interior Design"
        />
        <QuickLinkList className="md:w-[40%]" />
      </div>
    </footer>
  );
}
