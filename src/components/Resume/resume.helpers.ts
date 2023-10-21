export interface YearData {
  beginYear: number,
  endYear?: number
}

export const yearSorter = (a: YearData, b: YearData) => {
  if (a.beginYear === b.beginYear) {
    if (!a.endYear) {
      return -1
    } else if (!b.endYear) {
      return 1
    } else {
      return b.endYear - a.endYear
    }
  } else {
    return b.beginYear - a.beginYear
  }
}
