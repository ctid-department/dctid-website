
import Image from "next/image";
import {cn} from "@/lib/utils";
import Link from "next/link"

export default function FeatureItem({...props}){

  const CSS = {
    articleItem: cn(
      "flex flex-row items-center",
    ),
    articleItemImage: cn(
      "w-1/3 h-[10vh] my-2 mr-2",
      "shadow-lg"
    ),
    articleItemHeader: cn("font-bold")
  }

  return(
  <Link className={CSS.articleItem} href={props.href ?? ""}>
    <Image className={CSS.articleItemImage} src="" width={0} height={0} alt=""/>
    <h2 className={CSS.articleItemHeader}>{"Lorem Ipsum"}</h2>
  </Link>
)
}