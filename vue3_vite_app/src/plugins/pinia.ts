import {createPinia} from "pinia";
import {App} from "vue";

const pinia = createPinia();

export default function usePlugin(app: App) {
    app.use(pinia);
}