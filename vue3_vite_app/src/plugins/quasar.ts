import {App} from "vue";

import { Quasar } from 'quasar';

export function useQuasarPlugin(app: App){
    app.use(Quasar, {
        plugins: {},
    })
}