import { cn } from "@/lib/utils";
import AddressList from "./AddressList"
import QuickLinkList from "./QuickLinkList"

export default async function Footer({...props}) {

  const footerCSS = cn(
    "text-white w-full min-h-[20vh] bg-ctid-green flex",
    props.className
  )

  return (
    <div className={footerCSS}>
      <AddressList className="" title="Department of Clothing, Textiles and Interior Design"/>
      <QuickLinkList className=""/>
    </div>
  );

}