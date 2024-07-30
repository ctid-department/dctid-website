"use client";

import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { useState } from "react";

import {cn} from "@/lib/utils";

interface image {
  alt: string | undefined;
  caption: string | undefined;
  image: any | undefined;
}

export default function Slideshow({
  caption,
  alt,
  images
}: Partial<{
  caption: string;
  alt: string;
  images: image[];
}>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(currentIndex)
  const [captionHidden, setCaptionHidden] = useState(true)
  const [loaded, setLoaded] = useState(false)
  
  const handleLoad = () => {
    setLoaded(true);
  }
  
  const cycleIndex = (number: number) => {
    setPrevIndex(currentIndex)
    setCurrentIndex(images ? (currentIndex + images.length + number) % images.length : 0)
  }

  const handleLeft = () => {
    cycleIndex(-1)
  }

  const handleRight = () => {
    cycleIndex(1)
  }

  const toggleCaption = () => {
    setCaptionHidden(!captionHidden)
  }

  const wrapperCSS = cn(
    "w-[90vw] md:w-[640px] h-[480px] m-auto",
    "my-3",
    "bg-black"
  )

  const slideshowCaptionCSS = cn(
    "w-[90vw] md:w-[640px] m-auto",
    "italic text-ctid-charcoal"
  )

  const imageContainerCSS = cn(
    "w-full mx-[-60px] md:w-[640px] h-[480px]",
    "flex flex-row",
    "transition-all",
  )

  const imageCSS = (idx: number) => cn(
    "block w-full h-full",
    "transition-all",
    "absolute top-0 left-0",
    "object-contain",
    currentIndex == idx ? "opacity-100" : "opacity-0"
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

  const captionCSS = cn(
    "p-[70px] z-40 h-[480px] relative bottom-[480px]",
    `text-xs bg-[#554940cc] text-white align-middle`,
    "transition-all",
    images ? !(images[currentIndex].caption) || captionHidden ? "opacity-0" : "opacity-100" : "opacity-0"
    )

  return (
    <>
    <div className={wrapperCSS}>
      <div className="relative flex flex-row justify-center items-center content-between">
        <button onClick={handleLeft} className={cn(buttonCSS, "")}><FaAngleLeft /></button>
        <div className={imageContainerCSS}>{
            images?.map((img, idx) => (<Image
              key={idx}
              onLoad={handleLoad}
              src={images ? urlFor(img.image).url() : ""}
              alt={alt ?? ""}
              width={500}
              height={500}
              className={imageCSS(idx)}
              priority
            />))
          }
        </div>
        <button onClick={handleRight} className={cn(buttonCSS, "")}><FaAngleRight /></button>
      </div>
      <div className={"flex flex-row z-50 relative h-0 items-center"}>
        <div className={dotWrapperCSS}>
          {
            images ? images.map((_, idx) => {
              return idx == currentIndex ? <GoDotFill key={idx} className={dotCSS} /> : <GoDot key={idx} className={dotCSS} />
            }) : <GoDotFill className={dotCSS} />
          }
        </div>
      </div>
      <p className={captionCSS} onClick={toggleCaption}>{images ? images[currentIndex].caption : ""}</p>
    </div>
    {caption ? <p className={slideshowCaptionCSS}>{caption}</p> : <></>}
    </>
  );
}