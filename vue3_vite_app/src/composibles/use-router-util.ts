import {useRouter} from "vue-router";

const router  = useRouter();
function getLink (to: string | Object) {
    try { return router.resolve(to) }
    catch (_) {}

    return null
}
export function useRouterUtil() {
    return {
        getLink,
    };
}
