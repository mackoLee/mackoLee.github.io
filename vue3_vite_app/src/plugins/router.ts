import { createRouter, createWebHistory } from 'vue-router'
import {App} from "vue";
// @ts-ignore
import routes from '~pages';

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default function usePlugin(app: App){
    app.use(router);
}