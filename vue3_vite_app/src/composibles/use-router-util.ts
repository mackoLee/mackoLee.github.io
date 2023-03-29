import { usePlugins } from "@/composibles/plugins";

const { router } = usePlugins();

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
