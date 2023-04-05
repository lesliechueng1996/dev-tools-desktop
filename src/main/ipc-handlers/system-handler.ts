import { IpcMainEvent, app } from 'electron'
import store from '../db'

export const getPreferLanguages = async (): Promise<PreferLanguage> => {
  const preferLanguage = store.get('preference.language') as string
  if (preferLanguage) {
    return {
      hasPreference: true,
      languages: [preferLanguage]
    }
  }
  const languages = app.getPreferredSystemLanguages()
  return {
    hasPreference: false,
    languages
  }
}

export const setPreferLanguage = (_event: IpcMainEvent, language: string): void => {
  store.set('preference.language', language)
}
