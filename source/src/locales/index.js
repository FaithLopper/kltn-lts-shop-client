import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { LANGUAGE } from '../constants/storageKeys'

import en from '../locales/en'
import vi from '../locales/vi'
import { getStringData } from '_utils/localStorageHelper'
import {DEFAULT_LANGUAGE} from '../locales/languages'


const resources = {
    en,
    vi,
}

const initOptions = {
    resources,
    lng: getStringData(LANGUAGE) || DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    load: 'languageOnly',

    interpolation: {
        escapeValue: false,
    },
    missingKeyHandler: (lngs, namespace, key, res) => {
        console.debug({ lngs, namespace })
    },
}

// 'i18next-browser-languagedetector'
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init(initOptions)

export default i18n
