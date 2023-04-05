import { ipcMain } from 'electron'
import { getPreferLanguages, setPreferLanguage } from './ipc-handlers/system-handler'
import { ipcEvent } from '../event-name'

export const registerHandlers = () => {
  ipcMain.handle(ipcEvent.GET_PREFER_LANGUAGES, getPreferLanguages)
  ipcMain.on(ipcEvent.SET_PREFER_LANGUAGE, setPreferLanguage)
}
