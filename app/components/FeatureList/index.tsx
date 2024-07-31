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

  const sampleArticles = [0, 0, 0, 0, 0]

  const CSS = {
    wrapper: cn(
      "w-full p-4 my-4",
    ),
    featuredWrapper: cn(""),
    featuredImage: cn(
      "w-full h-[25vh]",
      "shadow-lg",
      "rounded-sm"
    ),
    featuredHeader: cn(
      "font-bold text-xl",
      "mt-2"
    ),
    featuredIntro: cn(
      "text-sm",
      "mt-2 mb-4"
    ),

    articleList: cn(
      "pt-2",
      "border-t border-ctid-taupe"
    ),

    viewAllButton: cn(
      "block w-full p-4 mt-2",
      "shadow-lg border border-gray-200",
      "text-center text-sm text-ctid-taupe font-semi"
    ),
  }

  return (<div className={CSS.wrapper}>
    <div className={CSS.featuredWrapper}>
      <Image className={CSS.featuredImage} src={""} width={0} height={0} alt=""/>
      <h1 className={CSS.featuredHeader}>{"BSID Graduates Join the 1st Gabi ng Parangal Para sa mga Alumni 2024"}</h1>
      <p className={CSS.featuredIntro}>{"Associate Professor and former Dean of the UP College of Home Economics (CHE), Dr. Adelaida Mayo, was honored with the first-ever Home Economics Lifetime Achievement Award by the Philippine Association for Technology in Home Economics of State Colleges..."} <span className={"text-ctid-taupe"} >Read more</span></p>
    </div>
    <div className={CSS.articleList}>
      {
        sampleArticles.map((item, idx)=>(
          <FeatureItem articleItem={item} key={idx} />
        ))
      }
    </div>
    <Link className={CSS.viewAllButton} href="">View All</Link>
  </div>)
}

export default FeatureList;
