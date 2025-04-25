// Add your type definitions here
export interface Config {
  // Add your configuration types here
}

export interface Options {
  // Add your options types here
}

export type Theme = 'light' | 'dark'

export interface ThemeState {
  theme: Theme
  toggleTheme: () => void
}

export interface AppConfig {
  apiUrl: string
  timeout: number
}
