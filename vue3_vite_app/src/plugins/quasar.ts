import {App} from "vue";

import { Quasar } from 'quasar';

function usePlugin(app: App){
    app.use(Quasar, {
        plugins: {},
    })
}

export default usePlugin;