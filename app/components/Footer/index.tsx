import { cn } from "@/lib/utils";
import AddressList from "./AddressList"
import QuickLinkList from "./QuickLinkList"

export default async function Footer({...props}) {

  const footerCSS = cn(
    "text-xs sm:text-sm text-white w-full min-h-[20vh] bg-ctid-green flex flex-col sm:flex-row justify-center pb-[5vh]",
    props.className
  )

  return (
    <div className={footerCSS}>
      <AddressList className="sm:w-[50%] p-[5%]" title="Department of Clothing, Textiles and Interior Design"/>
      <QuickLinkList className="sm:w-[50%] p-[5%]"/>
    </div>
  );

}