<template>
  <p class="my-2 text-base">{{ content }}</p>
</template>

<script lang="ts" setup>
defineProps<{ content: string }>()
</script>
