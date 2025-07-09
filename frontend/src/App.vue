<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div class="app-container">
    <TheHeader/>
    <main class="main-content">
       <router-view />
    </main>
    <TheFooter/>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app,
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem;
  height: 100%;
}
</style>
