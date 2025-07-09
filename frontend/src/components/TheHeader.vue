<script setup lang="ts">
</script>

<template>
    <header class="header">
    <router-link to="/">
      &lt/&gt CodeLab Academy
    </router-link>
    <nav>
      <a href="#">Início</a>
      <a href="#">Sobre Nós</a>
      <a href="#">Encontrar conteúdo</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #afafaf;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

a {
  color: #1d1d1f;
  text-decoration: none;
}

nav a {
  margin-left: 1rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
  border-radius: 12px;
}

nav a:hover {
  background-color: #d8d8d8;
}

</style>
