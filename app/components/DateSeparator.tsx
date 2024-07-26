"use client";
import { FaCircle } from "react-icons/fa";
import {cn} from "@/lib/utils";

export default function DateSeparator({...props}){

  const lineCSS = cn(
    "border-l-[1px] flex justify-center items-center",
    "border-ctid-beige",
    "text-ctid-beige",
    props.className
  )

  const dotCSS = cn(
    "w-[10px] ml-[-5px]"
  )

  return (
    <div className={lineCSS}>
      <FaCircle className={dotCSS} />
    </div>
  );
}