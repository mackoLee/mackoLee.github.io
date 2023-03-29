import {createI18n} from "vue-i18n";
import {App} from "vue";
import messages from '@/i18n/messages'

const i18n = createI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    messages,

})

export function useI18nT() {
    return i18n.global.t;
}

export function useI18nTc() {
    return i18n.global.tc;
}

export default function useI18nPlugin(app: App) {
    app.use(i18n);
}