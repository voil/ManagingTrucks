<template>
  <main
    class="w-full px-3 m-auto py-6 grid grid-flow-row gap-y-4 max-w-screen-xl"
  >
    <slot />
  </main>
  <ConfirmPopup></ConfirmPopup>
  <NotificationToast />
</template>

<script lang="ts" setup>
import NotificationToast from "@coldrun/core/src/components/atoms/NotificationToast.vue";
</script>
