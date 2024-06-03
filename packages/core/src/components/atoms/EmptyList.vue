<template>
  <div class="flex flex-col items-center py-20">
    <IconSvg name="empty" aria-hidden="true" class="w-44 h-44" />
    <h3 class="font-bold text-xl text-primary-100 mt-6">
      {{ heading }}
    </h3>
    <p v-if="description" class="text-sm mb-5">{{ description }}</p>
    <slot name="additional" />
  </div>
</template>

<script lang="ts" setup>
import IconSvg from "./IconSvg.vue";

defineProps<{
  heading: string;
  description?: string;
}>();
</script>
