import { Fn, Obj } from './types'

/**
 * Remove duplicates from array
 * @param arr Input array
 * @returns Unique array
 */
export const unique = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr))
}

/**
 * Group array by key
 * @param arr Input array
 * @param key Key to group by
 * @returns Grouped object
 */
export const groupBy = <T extends Obj, K extends keyof T>(
  arr: T[],
  key: K
): Record<T[K], T[]> => {
  return arr.reduce((acc, item) => {
    const groupKey = item[key]
    if (!acc[groupKey]) {
      acc[groupKey] = []
    }
    acc[groupKey].push(item)
    return acc
  }, {} as Record<T[K], T[]>)
}

/**
 * Filter array by predicate
 * @param arr Input array
 * @param predicate Filter function
 * @returns Filtered array
 */
export const filter = <T>(arr: T[], predicate: Fn): T[] => {
  return arr.filter(predicate)
}