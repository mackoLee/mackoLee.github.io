const sheetRange = "Sheet1!A1:C2";
const updateSheetRange = "Sheet1!A3:C3"

const getVars = () => {
    const SPREAD_SHEET_ID = '1s4Qkqh2CkWGOsK0LCSJ4p_Hwks1ePFpQrrvXKRmAJNw'
    const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;

    return { SPREAD_SHEET_ID, GOOGLE_API_KEY }
}

export function useGoogleIntroduceApiImpl(){
    async function loadRows() {
        const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${sheetRange}?key=${GOOGLE_API_KEY}`
        const res = await useFetch(url);
        const result = {}
        if(res.data){
            // @ts-ignore
            _forEach(_zip(res.data.value.values[0], res.data.value.values[1]), ([k, v])=>{
                // @ts-ignore
                result[k] = v;
            })
        }
        return result;
    }

    async function updateRow() {
        const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
        const updateValues = {
            majorDimension: "ROWS",
            range: updateSheetRange,
            values: [["이름", "생년월일", "간단 자기소개"]]
        }
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${updateSheetRange}?key=${GOOGLE_API_KEY}`
        const res = await useFetch(url, {
            method: 'PUT',
            body: updateValues
        })
        console.log(res);

    }

    return {
        loadRows,
        updateRow
    }
}