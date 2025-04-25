/**
 * Format date to string
 * @param date Date object
 * @param format Date format (default: 'YYYY-MM-DD')
 * @returns Formatted date string
 */
export const formatDate = (date: Date, format = 'YYYY-MM-DD'): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
}

/**
 * Get date range
 * @param start Start date
 * @param end End date
 * @returns Array of dates
 */
export const getDateRange = (start: Date, end: Date): Date[] => {
  const dates: Date[] = []
  const current = new Date(start)

  while (current <= end) {
    dates.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }

  return dates
}