<template>
  <label class="text-sm mb-1 block">
    <slot />
    <SupBadge v-if="required" />
  </label>
</template>

<script lang="ts" setup>
import SupBadge from "./SupBadge.vue";

defineProps<{
  required?: boolean;
}>();
</script>
