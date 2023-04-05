import { contextBridge, ipcRenderer } from 'electron'
import { ipcEvent } from '../event-name'
// import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  getPreferLanguages: () => ipcRenderer.invoke(ipcEvent.GET_PREFER_LANGUAGES),
  setPreferLanguage: (language: string) => ipcRenderer.send('set-prefer-languages', language)
}

if (process.contextIsolated) {
  try {
    // contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  // window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
