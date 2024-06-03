<template>
  <div class="flex align-items-center gap-2">
    <span class="font-bold">
      {{ content }}
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  content: string;
}>();
</script>
