<template>
  <div class="image-wrapper">
    <img :src="content.src" :alt="content.alt" class="course-image" />
    <p v-if="content.caption" class="caption">{{ content.caption }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    src: string
    alt?: string
    caption?: string
  }
}>()
</script>

<style scoped>
.image-wrapper {
  text-align: center;
  margin: 16px 0;
}

.course-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.caption {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}
</style>
