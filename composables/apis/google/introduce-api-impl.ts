const sheetRange = "Sheet1!A1:C2";
const updateSheetRange = "Sheet1!A4:C4"

const getVars = () => {
    const SPREADSHEET_ID = useGoogleApiStore().spreadsheetId;

    return {SPREADSHEET_ID}
}

export function useGoogleIntroduceApiImpl() {
    // @ts-ignore
    const [gapi, google] = [window.gapi, window.google];

    async function loadRows(tryTimes: number = 0, maxTryTimes: number = 1) {

        try {
            const {SPREADSHEET_ID} = getVars();

            const res = await gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: sheetRange,
            })
            const result = {}
            if (res.result) {
                // @ts-ignore
                _forEach(_zip(res.result.values[0], res.result.values[1]), ([k, v]) => {
                    // @ts-ignore
                    result[k] = v;
                })
            }
            return result;
        } catch (err) {
            if (tryTimes >= maxTryTimes) {
                throw err;
            }
            gapi.client.setToken(null);
            await loadRows(tryTimes + 1);
        }
    }

    async function updateRow(tryTimes: number = 0, maxTryTimes: number = 1) {
        try {
            const {SPREADSHEET_ID} = getVars();

            const res = await gapi.client.sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: updateSheetRange,
                valueInputOption: "RAW",
            }, {
                values: [[1, 2, 3]]
            });
        } catch (err) {
            if (tryTimes >= maxTryTimes) {
                throw err;
            }

            gapi.client.setToken(null);
            updateRow(tryTimes + 1);
            // await useGoogleApiStore().requestAccessToken(()=>
            //     updateRow(tryTimes+1)
            // );
            // gapi.client.setToken(null);
            // await updateRow(tryTimes + 1);
        }


    }

    return {
        loadRows,
        updateRow
    }
}