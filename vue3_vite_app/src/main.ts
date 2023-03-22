import {createApp} from 'vue'
import './style/index.scss'
import App from './App.vue'

type AppPlugin = (app: ReturnType<typeof createApp>) => void | Promise<void>

const plugins = import.meta.glob<{ default: AppPlugin }>('./plugins/*.ts', {
    eager: true,
})

const app = createApp(App)

for (const path in plugins) {
    try {
        const {default: plugin} = plugins[path]
        await plugin(app)
    }
    catch (error) {
        console.error(`Error while loading plugin "${path}".`)
        console.error(error)
    }
}

app.mount('#app')
