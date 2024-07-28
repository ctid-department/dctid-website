"use client";

import Image, { StaticImageData } from "next/image";

import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { useState } from "react";

import {cn} from "@/lib/utils";

interface ImageSource {
  src: StaticImageData
  alt: string,
  caption?: string
};

interface Props {
  srcArray: ImageSource[]
  className?: string
}

/*
Usage:

// can static media be queried from sanity?
import image01 from "./images/sampleImages/image01.jpg";
import image02 from "./images/sampleImages/image02.jpg";
import image03 from "./images/sampleImages/image03.jpg";
import image04 from "./images/sampleImages/image04.jpg";

function MyComponent() {

  return (<>
  ...
  
  <Slideshow srcArray={[
    {src: image01, alt: "Image 01", caption: "Network."},
    {src: image02, alt: "Image 02", caption: "Space"},
    {src: image03, alt: "Image 03", caption: "City"},
    {src: image04, alt: "Image 04"},
  ]}/>

  ...
  </>);

}
*/

const Slideshow: React.FC<Props> = ({
  srcArray,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [captionHidden, setCaptionHidden] = useState(true)

  const handleLeft = () => {
    const nextIndex = currentIndex - 1
    setCurrentIndex(nextIndex < 0 ? srcArray.length - 1 : nextIndex)
  }

  const handleRight = () => {
    setCurrentIndex((currentIndex + 1) % srcArray.length)
  }

  const toggleCaption = () => {
    setCaptionHidden(!captionHidden)
  }

  const wrapperCSS = cn(
    "w-[100vw] md:w-[640px] h-[480px] m-auto",
    "my-3",
    "bg-slate-500",
    className
  )

  const buttonCSS = cn(
    "w-[50px] h-[50px] rounded-full",
    "drop-shadow-lg bg-ctid-green text-white",
    "flex justify-center items-center z-50"
  )

  const dotWrapperCSS = "h-[25px] relative bottom-[50px] flex flex-row bg-[rgba(64,64,64,0.5)] text-white p-1 rounded-full m-auto"
  const dotCSS = cn(
    "w-5 h-5" 
  )

  return (
    <div className={wrapperCSS}>
      <div className="flex flex-row justify-center items-center content-between">
        <button onClick={handleLeft} className={cn(buttonCSS, "")}><FaAngleLeft /></button>
        <Image
              src={srcArray[currentIndex].src}
              alt={srcArray[currentIndex].alt}
              width={0}
              height={0}
              className={cn("mx-[-60px] w-[100vw] md:w-[640px] h-[480px] object-cover bg-rose-500")}
              priority
              />
        <button onClick={handleRight} className={cn(buttonCSS, "")}><FaAngleRight /></button>
      </div>
      <div className={"flex flex-row z-50 relative h-0 items-center"}>
        <div className={dotWrapperCSS}>
          {
            srcArray.map((_, idx) => {
              return idx == currentIndex ? <GoDotFill key={idx} className={dotCSS} /> : <GoDot key={idx} className={dotCSS} />
            })
          }
        </div>
      </div>
      <p className={cn(
        !(srcArray[currentIndex].caption) || captionHidden ? "opacity-0" : "opacity-100",
        "p-[70px] z-40 h-[480px] relative bottom-[480px]",
        `text-xs bg-[#554940cc] text-white align-middle`,
        "transition-all"
        )} onClick={toggleCaption}>{srcArray[currentIndex].caption}</p>
    </div>
  );
}

export default Slideshow;