import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './en.json'
import frTranslation from './fr.json'
import jpTranslation from './jp.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
    jp: { translation: jpTranslation },
  },
  lng: 'jp',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
