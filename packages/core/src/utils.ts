import { Theme, ThemeState } from './types'

let currentTheme: Theme = 'light'

export const getTheme = () => currentTheme

export const toggleTheme = () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light'
  return currentTheme
}

export const useTheme = (): ThemeState => ({
  theme: currentTheme,
  toggleTheme
})
