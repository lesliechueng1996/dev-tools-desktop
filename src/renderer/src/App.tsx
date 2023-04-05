import { useTranslation } from 'react-i18next'
import AsideMenu from './components/AsideMenu'
import { useEffect } from 'react'
import { languages } from './locale/resource'

function App(): JSX.Element {
  const { i18n } = useTranslation()

  useEffect(() => {
    const getPreferLanguages = async () => {
      const preferLanguages = await window.api.getPreferLanguages()
      if (preferLanguages.hasPreference) {
        i18n.changeLanguage(preferLanguages.languages[0])
      } else {
        let chooseLang = languages[0]
        if (preferLanguages.languages && preferLanguages.languages.length > 0) {
          for (const lang of preferLanguages.languages) {
            if (languages.includes(lang)) {
              chooseLang = lang
              i18n.changeLanguage(lang)
              break
            }
          }
        }
        window.api.setPreferLanguage(chooseLang)
      }
    }

    getPreferLanguages()
  }, [])

  return (
    <div className="flex">
      <AsideMenu className="w-15rem md:w-18rem lg:w-25rem" />
      <main></main>
    </div>
  )
}

export default App
