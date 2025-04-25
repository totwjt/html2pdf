/**
 * Capitalize first letter of string
 * @param str Input string
 * @returns Capitalized string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Truncate string with ellipsis
 * @param str Input string
 * @param length Max length
 * @returns Truncated string
 */
export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.slice(0, length) + '...' : str
}

/**
 * Generate random string
 * @param length String length
 * @returns Random string
 */
export const randomString = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return result
}