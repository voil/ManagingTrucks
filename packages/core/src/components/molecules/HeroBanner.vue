<template>
  <header aria-labelledby="cardTitle" role="banner">
    <Card>
      <template #title>
        <h1 id="cardTitle">{{ title }}</h1>
      </template>
      <template #content v-if="description">
        <p id="cardDescription">{{ description }}</p>
      </template>
    </Card>
  </header>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description?: string;
}>();
</script>
