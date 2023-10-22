<script setup lang="ts">
const onClick = () => {
  const a = document.createElement('a');
  a.href = useOauth2Client().generateAuthUrl({
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    client_id: useGoogleApiStore().clientId,
    redirect_uri: 'http://localhost:3000/token/callback',
    response_type: 'token',
  });
  a.click();
}
</script>
<template>
  <HeaderButtonLayout
    :icon-name="`logos:google-icon`"
    color="white"
    @click="onClick"
  >
    {{ $t('구글 로그인') }}
  </HeaderButtonLayout>
</template>