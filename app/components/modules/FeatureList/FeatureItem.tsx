
import Image from "next/image";
import {cn} from "@/lib/utils";
import Link from "next/link"

interface Props {
  href: string;
  title: string;
  date?: string;
  imageSrc?: any;
}

const FeatureItem: React.FC<Props> = ({
  href,
  title,
  date,
  imageSrc
}) =>{

  const CSS = {
    articleItem: cn(
      "md:max-w-[20%] md:h-[30vh]",
      "flex flex-row items-top",
      "my-1",
      "md:flex-col md:justify-top",
      "md:flex-grow",
      "hover:bg-gray-200",
      "transition-all"
    ),
    articleItemImage: cn(
      "w-[100px] h-[15vh]",
      "md:w-[100%]",
      "my-1 mr-2 md:mx-auto",
      "shadow-md",
      "border border-gray-200",
      "rounded-md"
    ),
    articleItemInfo: cn(
      "flex flex-col"
    ),
    articleItemHeader: cn(
      "w-[90%]",
      "font-semibold text-sm",
    ),
    articleItemDate: cn(
      "italic text-xs"
    )
  }

  return(
    <Link className={CSS.articleItem} href={href ?? ""}>
      <Image className={CSS.articleItemImage} src={imageSrc ?? ""} width={640} height={480} alt=""/>
      <div className={CSS.articleItemInfo}>
        <h2 className={CSS.articleItemHeader}>{title ?? "BSID Graduates Join the 1st Gabi ng Parangal Para sa mga Alumni 2024"}</h2>
        <p className={CSS.articleItemDate}>{date ?? "12/06/2000"}</p>
      </div>
    </Link>
  )
}

export default FeatureItem;