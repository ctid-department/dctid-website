import { cn } from "@/lib/utils";

export default async function Footer({...props}) {

  const footerCSS = cn(
    "w-full h-[10vh] bg-rose-500",
    props.className
  )

  return (
    <div className={footerCSS}>

    </div>
  );

}