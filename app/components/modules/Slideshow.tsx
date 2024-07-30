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
  caption: string | undefined;
  image: any | undefined;
}

export default function Slideshow({
  images
}: Partial<{
  images: image[];
}>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [captionHidden, setCaptionHidden] = useState(true)

  const handleLeft = () => {
    setCurrentIndex(images ? (currentIndex + images.length - 1) % images.length : 0)
  }

  const handleRight = () => {
    setCurrentIndex(images ? (currentIndex + 1) % images.length : 0)
  }

  const toggleCaption = () => {
    setCaptionHidden(!captionHidden)
  }

  const wrapperCSS = cn(
    "w-[100vw] md:w-[640px] h-[480px] m-auto",
    "my-3",
    "bg-slate-500"
  )

  const imageCSS = cn("mx-[-60px] w-[100vw] md:w-[640px] h-[480px] object-cover bg-rose-500")

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
    images ? !(images[currentIndex].caption) || captionHidden ? "opacity-0" : "opacity-100" : "opacity-0",
    "p-[70px] z-40 h-[480px] relative bottom-[480px]",
    `text-xs bg-[#554940cc] text-white align-middle`,
    "transition-all"
    )

  return (
    <div className={wrapperCSS}>
      <div className="flex flex-row justify-center items-center content-between">
        <button onClick={handleLeft} className={cn(buttonCSS, "")}><FaAngleLeft /></button>
        <Image
              src={images ? urlFor(images[currentIndex]).url() : ""}
              alt={images ? images[currentIndex].caption ?? "" : ""}
              width={0}
              height={0}
              className={imageCSS}
              priority
              />
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
  );
}