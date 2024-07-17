export function count(arr: Array<any>, singular: string = 'item', plural?: string) {
  return `${arr?.length || 0} ${arr?.length === 1 ? singular : plural || singular + 's'}`
}
