import { useLocaleStore } from '@/store/modules/locale'
import type { App } from 'vue'
import type { I18n, I18nOptions } from 'vue-i18n'

import { createI18n } from 'vue-i18n'

export let i18n: ReturnType<typeof createI18n>

export enum LanguageType {
  ZH_CN = 'zh-CN',
  EN_US = 'en',
}
export interface ILocaleSetting {
  // Current language
  locale: LanguageType
  // default language
  fallback: LanguageType[]
  // available Locales
  availableLocales: LanguageType[]
}

export const localeSetting: ILocaleSetting = {
  // Locale
  locale: LanguageType.EN_US,
  // Default locale
  fallback: [LanguageType.EN_US, LanguageType.ZH_CN],
  // available Locales
  availableLocales: [LanguageType.EN_US, LanguageType.ZH_CN],
}

async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStore()
  const locale = localeStore.getLocale.locale
  const defaultLocal = await import(`./lang/${locale}.ts`)
  const message = defaultLocal.default?.message ?? {}

  return {
    legacy: false,
    fallbackLocale: localeSetting.fallback,
    locale,
    messages: {
      [locale]: message,
    },
    availableLocales: localeSetting.availableLocales,
    sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  }
}

// setup i18n instance with glob
export async function setupI18n(app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}
