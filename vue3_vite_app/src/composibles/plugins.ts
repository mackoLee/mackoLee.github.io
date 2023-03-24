/**
 * This is used for easy use of all plugins.
 */
import {useRouter, useRoute} from "vue-router";
import { useEmitter } from "@/plugins/mitt";
import { useQuasar} from "quasar";

export function usePlugins(){
    const router = useRouter();
    const route = useRoute();
    const emitter = useEmitter();
    const $q = useQuasar();

    return {
        router,
        route,
        emitter,
        $q
    }
}