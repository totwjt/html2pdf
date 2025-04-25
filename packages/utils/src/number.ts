/**
 * Format number with commas
 * @param num Number to format
 * @returns Formatted string
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Clamp number between min and max
 * @param num Number to clamp
 * @param min Minimum value
 * @param max Maximum value
 * @returns Clamped number
 */
export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max)
}

/**
 * Generate random number in range
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random number
 */
export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}