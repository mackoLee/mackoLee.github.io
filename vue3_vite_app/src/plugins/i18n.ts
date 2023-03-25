import {createI18n} from "vue-i18n";
import {App} from "vue";
import messages from '@/i18n/messages'

const i18n = createI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    messages,

})

export default function usePlugin(app: App) {
    app.use(i18n);
}