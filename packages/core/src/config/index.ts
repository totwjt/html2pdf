export interface Config {
  api: {
    baseUrl: string
    timeout: number
  }
  theme: {
    default: 'light' | 'dark'
    storageKey: string
  }
  features: {
    enableComments: boolean
    enableLikes: boolean
    enableSharing: boolean
  }
}

export const defaultConfig: Config = {
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000
  },
  theme: {
    default: 'light',
    storageKey: 'theme'
  },
  features: {
    enableComments: true,
    enableLikes: true,
    enableSharing: true
  }
}