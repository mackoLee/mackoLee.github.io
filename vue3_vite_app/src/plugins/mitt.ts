import mitt from "mitt";
import {App} from "vue";

const emitter = mitt();

export default function usePlugin(app: App) {
    app.config.globalProperties.$emitter = emitter;
}
export function useEmitter() {
    return emitter;
}