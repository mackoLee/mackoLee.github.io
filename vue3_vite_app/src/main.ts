import { createApp } from 'vue'
import './style/index.scss'
import App from './App.vue'
import {useQuasarPlugin} from "@/plugins/quasar";

const app = createApp(App)

useQuasarPlugin(app);

app.mount('#app')
