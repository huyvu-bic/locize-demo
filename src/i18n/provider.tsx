'use client'

import i18next from "i18next"
import { I18nextProvider } from "react-i18next"
import { FunctionComponent, PropsWithChildren } from "react"

type I18nProviderProps = PropsWithChildren

const I18nProvider: FunctionComponent<I18nProviderProps> = ({ children }) => {
    return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}

export default I18nProvider