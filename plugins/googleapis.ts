function install() {
    const gapi_script = document.createElement("script");
    gapi_script.src = "/google/api.js";
    gapi_script.onload = () => {
    };
    document.body.appendChild(gapi_script);

    const gsi_script = document.createElement("script");
    gsi_script.src = "/google/account_gsi_client";
    gsi_script.onload = () => {
    }
    document.body.appendChild(gsi_script);
}


export {
    install as default,

}
