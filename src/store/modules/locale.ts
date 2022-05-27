import { defineStore } from 'pinia'
import { ILocaleSetting, localeSetting } from '@/locales/setupI18n'

interface LocaleState {
  localeInfo: ILocaleSetting
}

export const useLocaleStore = defineStore('locale', {
  state: (): LocaleState => ({
    localeInfo: localeSetting,
  }),
  getters: {
    getLocale(state) {
      return state.localeInfo
    },
  },
  actions: {
    setLocaleInfo(info: Partial<ILocaleSetting>) {
      this.locale = { ...this.localeInfo, ...info }
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo,
      })
    },
  },
})
