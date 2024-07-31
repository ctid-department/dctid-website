
import Image from "next/image";
import {cn} from "@/lib/utils";
import Link from "next/link"

export default function FeatureItem({...props}){

  const CSS = {
    articleItem: cn(
      "flex flex-row items-center",
      "my-1",
      "md:flex-col md:justify-center",
      "md:flex-grow",
      "hover:bg-gray-200",
      "transition-all"
    ),
    articleItemImage: cn(
      "w-1/2 h-[15vh]",
      "md:w-[90%]",
      "my-1 mr-2 md:mx-auto",
      "shadow-md"
    ),
    articleItemHeader: cn(
      "w-[90%]",
      "font-semibold"
    )
  }

  return(
  <Link className={CSS.articleItem} href={props.href ?? ""}>
    <Image className={CSS.articleItemImage} src="" width={0} height={0} alt=""/>
    <h2 className={CSS.articleItemHeader}>{"BSID Graduates Join the 1st Gabi ng Parangal Para sa mga Alumni 2024"}</h2>
  </Link>
)
}