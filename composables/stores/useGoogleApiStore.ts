export function useGoogleApiStore() {
    const DISCOVERY_DOC: string = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

    return useState('googleApiStore',()=>{
        const apiKey: Ref<string> = ref('');
        const clientId: Ref<string> = ref('593691061710-og346hl8vl4t2ukkgl5uolqicaapmtvs.apps.googleusercontent.com');
        const scopes: Ref<string|string[]> = ref('');
        const sheetId: Ref<string> = ref('');
        const gapiloaded: Ref<boolean> = ref(false);

        function connect(){
            gapi.load('client', initializeGapiClient);
        }

        async function initializeGapiClient() {
            await gapi.client.init({
                apiKey: apiKey.value,
                discoveryDocs: [DISCOVERY_DOC],
            });
            gapiloaded.value = true;
        }

        function setGoogleApiKey(value){
            apiKey.value = value
        }
        async function loadGoogleApiKey(strategy = 'sessionStorage'){
            if(strategy === 'sessionStorage') {
                apiKey.value = sessionStorage.getItem('google_api_key') || 'AIzaSyDzuZgo-pF-4be2-vA_Y0VmGUpO5WPNBgA'
                return
            }
        }
        async function updateGoogleApiKey(value, strategy = 'sessionStorage') {
            apiKey.value = value
            if (strategy === 'sessionStorage'){
                sessionStorage.setItem('google_api_key', value)
                return;
            }
        }

        return {
            apiKey,
            setGoogleApiKey,
            loadGoogleApiKey,
            updateGoogleApiKey
        }
    }).value
}