import {defineStore} from 'pinia';

export const useI18nStore = defineStore('i18n', () => {
  const localeOptions = [
      { value: 'ko', label: '한국어' },
      { value: 'en', label: 'English' },
  ]

    return {
        localeOptions
    }
})