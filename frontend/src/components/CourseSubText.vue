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
  padding: 0px 60px;
  font-size: 0.8rem;
  width: 80%;
}

</style>
