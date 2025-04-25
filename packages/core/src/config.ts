import { AppConfig } from './types'
import { defaultConfig } from './models'

let currentConfig: AppConfig = { ...defaultConfig }

export const getConfig = () => currentConfig

export const updateConfig = (newConfig: Partial<AppConfig>) => {
  currentConfig = { ...currentConfig, ...newConfig }
}

export const useConfig = () => ({
  getConfig,
  updateConfig
})