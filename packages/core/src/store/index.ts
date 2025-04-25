import { reactive } from 'vue'
import type { User } from '../models'

export interface StoreState {
  user: User | null
  theme: 'light' | 'dark'
  loading: boolean
}

export const createStore = () => {
  const state = reactive<StoreState>({
    user: null,
    theme: 'light',
    loading: false
  })

  const setUser = (user: User | null) => {
    state.user = user
  }

  const setTheme = (theme: 'light' | 'dark') => {
    state.theme = theme
  }

  const setLoading = (loading: boolean) => {
    state.loading = loading
  }

  return {
    state,
    setUser,
    setTheme,
    setLoading
  }
}