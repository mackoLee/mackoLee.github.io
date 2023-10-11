import {defineStore} from 'pinia';


const DISCOVERY_DOC: string = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES: string = 'https://www.googleapis.com/auth/spreadsheets';

export const useGoogleApiStore = defineStore('googleApi',()=>{
        // @ts-ignore
        const [gapi, google] = [window.gapi, window.google];
        async function loadAll(strategy: string='sessionStorage'){
            if(strategy === 'sessionStorage') {
                const googleApi = sessionStorage.getItem('google_api')
                if(googleApi){
                    const googleApiJson = JSON.parse(googleApi)
                    apiKey.value = googleApiJson.apiKey
                    spreadsheetId.value = googleApiJson.spreadsheetId
                    clientId.value = googleApiJson.clientId
                }
                else{
                    apiKey.value = 'AIzaSyDzuZgo-pF-4be2-vA_Y0VmGUpO5WPNBgA'
                    spreadsheetId.value = '1s4Qkqh2CkWGOsK0LCSJ4p_Hwks1ePFpQrrvXKRmAJNw'
                    clientId.value = ''
                }
                return;
            }
        }

        async function saveAll(strategy: string='sessionStorage'){
            if (strategy === 'sessionStorage'){
                sessionStorage.setItem('google_api', JSON.stringify({
                    apiKey: apiKey.value,
                    spreadsheetId: spreadsheetId.value,
                    clientId: clientId.value,
                }))
                return;
            }
        }

        async function resetAll(){
            await loadAll();
        }

        const apiKey: Ref<string> = ref('AIzaSyDzuZgo-pF-4be2-vA_Y0VmGUpO5WPNBgA');
        function setApiKey(value: string){
            apiKey.value = value
        }


        const spreadsheetId: Ref<string> = ref('1s4Qkqh2CkWGOsK0LCSJ4p_Hwks1ePFpQrrvXKRmAJNw');
        function setSpreadsheetId(value: string){
            spreadsheetId.value = value
        }


        const clientId: Ref<string> = ref('');
        const setClientId = (value: string) => {
            clientId.value = value
        }

        const tokenClient: Ref<object|null> = ref(null);
        const setTokenClient = (value: object) => {

        }


        return {
            loadAll,
            saveAll,
            resetAll,

            apiKey,
            setApiKey,

            spreadsheetId,
            setSpreadsheetId,

            clientId,
            setClientId,

        }
    })