/**
 * This is used for easy use of all plugins.
 */
import { useI18n } from "vue-i18n";
import {useRouter, useRoute} from "vue-router";
import { useEmitter } from "@/plugins/mitt";
import { useQuasar} from "quasar";

export function usePlugins(){

    return {
        router:useRouter(),
        route:useRoute(),
        emitter:useEmitter(),
        $q:useQuasar(),
        i18n:useI18n()
    }
}