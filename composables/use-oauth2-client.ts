///client_id=your_client_id&
//   response_type=code&
//   state=state_parameter_passthrough_value&
//   scope=https%3A//www.googleapis.com/auth/drive.file&
//   redirect_uri=https%3A//oauth2.example.com/code&
//   prompt=consent&
//   include_granted_scopes=true


type AuthorizationParameters = {
    client_id: string,
    redirect_uri: string,
    response_type: 'code'|'token',
    scope: string,
    state?: string,
    prompt?: string,
    include_granted_scopes?: boolean,
}

export function useOauth2Client(){
    function generateAuthUrl(authParams: AuthorizationParameters): string{
        return 'https://accounts.google.com/o/oauth2/v2/auth?'
            +'client_id=' + authParams.client_id
            +'&redirect_uri=' + authParams.redirect_uri
            +'&response_type=' + authParams.response_type
            +'&scope=' + authParams.scope
            +'&state=' + (authParams.state || '')
            +'&prompt=' + (authParams.prompt || 'consent')
            +'&include_granted_scopes=' + (authParams.include_granted_scopes || true)
    }

    return {
        generateAuthUrl
    }

}