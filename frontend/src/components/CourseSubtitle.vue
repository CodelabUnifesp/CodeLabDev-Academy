<template>
  <div v-html="content" class="text"></div>
</template>

<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<style scoped>

.text {
  font-size: 1.2rem;
  font-weight: 600;
  padding-top: 16px;
}

</style>