<template>
  <div class="text">
    <!-- Conteúdo HTML normal -->
    <template v-if="!hasLineBreaks">
      <div v-html="content"></div>
    </template>
    
    <!-- Conteúdo transformado em lista -->
    <ul v-else class="text-list">
      <li v-for="(item, index) in contentLines" :key="index" v-html="item"></li>
    </ul>
  </div>
</template>



<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  content: string
}>()

const hasLineBreaks = computed(() => {
  return props.content.includes('\n')
})

const contentLines = computed(() => {
  return props.content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')
})
</script>

<style scoped>
ul {
  list-style-type: disc;
}
ol {
  list-style-type: decimal;
}
</style>