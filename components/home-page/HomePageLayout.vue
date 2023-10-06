<script setup lang="ts">
import {useLocaleDayjs} from "~/composables/useLocaleDayjs";

const timesss = ref(useDayjs().format('LLL'));
const onClick = () =>{
  timesss.value = timesss.value.format("YYYY-MMM-DD ddd HH:mm:ss");
  // useIntroduceApi().updateRow();
}

const onSubmit = () => {
  console.log('submit')

}
const sd = ref('sdffs');


</script>
<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
  >
    {{ $t('확인') }}
    <I18nSwitchLocaleSelectMenu />
    <UButton
      @click="onClick"
    >
      {{ timesss }}
    </UButton>

    <form
      method="post"
      action="https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=593691061710-og346hl8vl4t2ukkgl5uolqicaapmtvs.apps.googleusercontent.com&redirect_uri=http://localhost:3000/token&scope=https://www.googleapis.com/auth/spreadsheets"
    >
      <UInput
        v-model="sd"
        type="text"
        placeholder="이름"
      />
      <button
        type="submit"
      >
        sdfsd
      </button>
    </form>
  </div>
</template>