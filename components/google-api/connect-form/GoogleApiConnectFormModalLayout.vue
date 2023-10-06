<template>
  <UCard>
    <template #header>
      <div
        class="flex items-center"
      >
        <div
          class="text-lg font-semibold my-auto"
        >
          구글 연동하기
        </div>
        <div class="flex ml-auto gap-2 my-auto">
          <GoogleApiResetButton />
          <icon
            class="cursor-pointer"
            name="ic:baseline-close"
            size="25"
            @click="$modal.hide()"
          />
        </div>
      </div>
    </template>
    <GoogleApiConnectForm />
    <template #footer>
      <div class="flex justify-between">
        <GoogleApiSubmitButton />
        <GoogleApiSaveButton />
      </div>
    </template>
  </UCard>
</template>