import { create } from 'zustand'
import { ThemeMode, StroageEnum, ThemeColorPresets, ThemeLayout } from '#/enum'
import { setItem, getItem, removeItem } from '@/utils/storage'

interface Settingstype {
  themeMode: ThemeMode
  themeColorPreset: ThemeColorPresets
  layout: ThemeLayout
  showBreadcrumb: boolean
  showHistoryPage: boolean
}

interface SettingStore {
  settings: Settingstype
  setSetings: (settings: Settingstype) => void
  clearSetings: () => void
}

const useThemeStore = create<SettingStore>((set) => ({
  settings: getItem(StroageEnum.Settings) || {
    themeMode: ThemeMode.Light,
    themeColorPreset: ThemeColorPresets.Default,
    layout: ThemeLayout.Horizontal,
    showBreadcrumb: false,
    showHistoryPage: false,
  },
  setSetings: (settings: Settingstype) => {
    set({ settings })
    setItem(StroageEnum.Settings, settings)
  },
  clearSetings: () => {
    removeItem(StroageEnum.Settings)
  },
}))

export default useThemeStore
