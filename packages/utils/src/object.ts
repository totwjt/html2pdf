import { Obj } from './types'

/**
 * Deep clone object
 * @param obj Object to clone
 * @returns Cloned object
 */
export const deepClone = <T extends Obj>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Merge objects
 * @param target Target object
 * @param source Source object
 * @returns Merged object
 */
export const merge = <T extends Obj, S extends Obj>(target: T, source: S): T & S => {
  return { ...target, ...source }
}

/**
 * Pick properties from object
 * @param obj Source object
 * @param keys Keys to pick
 * @returns New object with picked properties
 */
export const pick = <T extends Obj, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key]
    }
    return acc
  }, {} as Pick<T, K>)
}