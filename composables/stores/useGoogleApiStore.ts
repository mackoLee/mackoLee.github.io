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

        const scopes: Ref<string|string[]> = ref('');


        const gapiInited: Ref<boolean> = ref(false);
        async function loadGapi(){
            await gapi.load('client', initializeGapiClient);
        }
        async function initializeGapiClient(){
            let token = sessionStorage.getItem('google_token')||null;
            if(token){
                token = JSON.parse(token)
            }

            await gapi.client.init({
                apiKey: apiKey.value,
                discoveryDocs: [DISCOVERY_DOC],
            })
            gapi.client.setToken(token);
            gapiInited.value = true;
        }
        async function saveGapiToken(strategy: string='sessionStorage') {
            const token = gapi.auth.getToken();
            if (strategy === 'sessionStorage'){
                sessionStorage.setItem('google_token', JSON.stringify(token))
                // after 1 hour
                // const time = new Date(new Date().getTime() + 60*60*1000);

                sessionStorage.setItem('google_token_expires_at', time.toString())
            }
        }

        const gisInited: Ref<boolean> = ref(false);
        const tokenClient :Ref<any> = ref(null);

        async function requestAccessToken(callback: Function){
            if(!gisInited.value){
                await loadGis();
            }

            tokenClient.value.callback = ()=>{
                callback();
                saveGapiToken();
            }
            if(gapi.client.getToken() === null) {
                tokenClient.value.requestAccessToken({prompt: 'consent'});
            }
            else{
                tokenClient.value.requestAccessToken({prompt: ''});
            }
        }

        async function loadGis(){
            tokenClient.value = await google.accounts.oauth2.initTokenClient({
                client_id: clientId.value,
                scope: SCOPES,
                callback: '', // defined later
            });

            gisInited.value = true;
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

            gapiInited,
            loadGapi,
            saveGapiToken,

            requestAccessToken,
            gisInited,
            loadGis
        }
    })