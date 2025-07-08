<template>
  <h2 class="text-xl font-semibold my-4">{{ content }}</h2>
</template>

<script lang="ts" setup>
defineProps<{ content: string }>()
</script>
