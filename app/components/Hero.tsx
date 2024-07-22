import defaultHeroImage from "../images/sample1.png";
import { cn } from "@/lib/utils";


/*

Props:
- `src` : source of hero image

USAGE:

<Hero src={urlFor(data.titleImage).url()} className="h-[60vh] my-3">
  <!--any content you want-->
  <h1 className="text-white text-center bg-[rgba(0,0,0,0.5)] text-3xl p-1">
    {data.title}
  </h1>
</Hero>

*/

export default async function Hero({...props}) {
  // TODO: try parallax effect? https://blog.logrocket.com/create-parallax-scrolling-css/
  // REFERENCE: https://tailwindcss.com/docs/content-configuration#dynamic-class-names

  const heroCSS = cn(
    "bg-fixed bg-center bg-contain bg-no-repeat w-full overflow-hidden flex flex-col justify-between",
    props.className
  )

  return (
    <div style={{
      backgroundColor: 'maroon',
      backgroundImage: `url(${props.src ?? defaultHeroImage.src})`,
    }}
    className={heroCSS}>
      <div className="w-full h-0 shadow-[0_0_15px_15px_rgba(0,0,0,0.5)]"></div>
      <div style={{
        display: 'initial'
      }}>
        {props.children}
      </div>
      <div className="w-full h-0 shadow-[0_0_15px_15px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}