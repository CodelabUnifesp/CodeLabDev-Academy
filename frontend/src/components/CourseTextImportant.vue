<template>
  <div class="content-box">
    <div v-html="content" class="text"></div>
  </div>  
</template>

<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<style scoped>

.content-box{
  background-color: #fffac6;
  border-left: 4px solid #facc15;
  padding: 14px 30px;
  color: #854d0e;
  width: 80%;
  align-self: center;
}

.text {
  font-size: 0.9rem;
}

</style>
