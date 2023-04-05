import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getPreferLanguages: () => Promise<PreferLanguage>
      setPreferLanguage: (language: string) => void
    }
  }
}
