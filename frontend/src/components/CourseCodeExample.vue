<template>
  <div class="text">
    <!-- Se não há quebras de linha, exibe como texto comum -->
    <template v-if="!hasLineBreaks">
      <div v-html="content"></div>
    </template>

    <!-- Se houver quebras de linha, exibe como bloco de código -->
    <pre v-else v-html="content"></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  content: string
}>()

const hasLineBreaks = computed(() => {
  return props.content.includes('\n') || props.content.includes('\\n')
})
</script>

<style scoped>
.text {
  background-color: #1f2937;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #3aac64;
  width: 80%;
}
</style>
