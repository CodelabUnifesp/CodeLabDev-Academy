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
  padding: 8px 0px;
}

</style>
