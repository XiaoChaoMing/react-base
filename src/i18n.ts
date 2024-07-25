import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { defaultThemeLanguage } from './models/reducers/themeLanguage.model'
import de from './translations/de/translation.json'
import en from './translations/en/translation.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: defaultThemeLanguage.language,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
        login: en,
      },
      de: {
        translation: de,
      },
    },
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18n
