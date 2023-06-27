import {App} from "vue";

import { Quasar, AppFullscreen, Notify, Dialog } from 'quasar';

function usePlugin(app: App){
    app.use(Quasar, {
        plugins: {
            AppFullscreen,
            Notify,
            Dialog
        },
    })
}

export default usePlugin;