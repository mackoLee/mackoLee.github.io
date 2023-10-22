import {useGoogleIntroduceApiImpl} from "~/composables/apis/google/introduceApiImpl";

type Mode = 'googleSheet' | 'local'

type UseIntroduceApi = {
    loadRows: () => Promise<any>,
    updateRow: () => Promise<any>

}
export function useIntroduceApi(mode: Mode = 'googleSheet'): UseIntroduceApi{
    if(mode == 'googleSheet'){
        return useGoogleIntroduceApiImpl()
    }
    return useGoogleIntroduceApiImpl();

}