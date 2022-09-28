import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import globals from './translations'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: 'es',
    interpolation: { escapeValue: false },
    resources: { ...globals }
  })

export default i18next
