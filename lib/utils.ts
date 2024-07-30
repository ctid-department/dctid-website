import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/*
 * Returns the difference between the specified date string and now. Best used with `formatDateDiff()`
 */
export function dateDiff(date: Date | string) {
  const then = typeof date == "string" ? new Date(date) : date;
  const now = new Date();
  return new Date(then.valueOf() - now.valueOf());
}

/*
 * Returns the amount of time passed since / until the specified date. Best used with `dateDiff()`
 */
export function formatDateDiff(diff: Date) {
  
  const daysDiff = (diff: Date) => {
    return Math.ceil(diff.valueOf()/(1000 * 60 * 60 * 24))
  }

  const dDiff = daysDiff(diff)
  if(Math.abs(dDiff) < 30){
    return dDiff == 0 ?
      "Today" :
      `~${Math.abs(dDiff)} day${Math.abs(dDiff) > 1 ? "s" : ""} ${dDiff > 0 ? "from now" : "ago"}`
  }else{
    const monthsDiff = Math.ceil(dDiff/30)
    return monthsDiff == 0 ?
      "This past month" :
      `~${Math.abs(monthsDiff)} month${Math.abs(monthsDiff) > 1 ? "s" : ""} ${monthsDiff > 0 ? "from now" : "ago"}`
  }
}
