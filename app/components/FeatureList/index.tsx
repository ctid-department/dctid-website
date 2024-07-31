"use client";

import React, {useState} from "react"
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link"

import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

import FeatureItem from "./FeatureItem"

interface Props {
  articles?: any;
}

const FeatureList: React.FC<Props> = ({
  articles,
}) => {

  const sampleArticles = [0, 0, 0, 0]

  const CSS = {
    wrapper: cn(
      "w-full p-4 my-4",
    ),
    featuredWrapper: cn(
      "md:flex",
      "md:pb-2"
    ),
    featuredImage: cn(
      "w-full h-[25vh]",
      "md:w-2/3 md:h-[50vh]",
      "",
      "shadow-lg",
      "rounded-sm"
    ),
    featuredInfo: cn(
      "mb-4",
      "md:w-1/3 md:pl-3"
    ),
    featuredHeader: cn(
      "font-bold text-xl",
      "mt-2",
    ),
    featuredIntro: cn(
      "text-sm",
      "mt-2",
    ),
    readMore: cn(
      "text-sm text-ctid-taupe"
    ),

    articleList: cn(
      "pt-2",
      "border-t border-ctid-taupe",
      "md:flex md:flex-row md:items-center"
    ),

    viewAllButton: cn(
      "block p-4 mt-2 md:mt-0",
      "md:h-full",
      "border border-gray-200",
      "md:border-0",
      "text-center text-ctid-taupe font-semibold",
      "align-middle",
      "hover:underline hover:bg-gray-200",
      "active:bg-ctid-taupe active:text-white",
      "transition-all"
    ),
  }

  return (<div className={CSS.wrapper}>
    <Link href="" className={CSS.featuredWrapper}>
      <Image className={CSS.featuredImage} src={""} width={0} height={0} alt=""/>
      <div className={CSS.featuredInfo}>
        <h1 className={CSS.featuredHeader}>{"BSID Graduates Join the 1st Gabi ng Parangal Para sa mga Alumni 2024"}</h1>
        <p className={CSS.featuredIntro}>{"Associate Professor and former Dean of the UP College of Home Economics (CHE), Dr. Adelaida Mayo, was honored with the first-ever Home Economics Lifetime Achievement Award by the Philippine Association for Technology in Home Economics of State Colleges..."}</p>
        <span className={CSS.readMore} >Read more</span>
      </div>
    </Link>
    <div className={CSS.articleList}>
      {
        sampleArticles.map((item, idx)=>(
          <FeatureItem articleItem={item} key={idx} />
        ))
      }
      <Link className={CSS.viewAllButton} href="">View All ›</Link>
    </div>
  </div>)
}

export default FeatureList;
