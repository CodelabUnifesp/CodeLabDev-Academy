<template>
    <div class="footer">
      <div class="codelab-container">
        <a href="https://www.codelab-unifesp.org/">
          <img src="../assets/logo-codelab.png" class="desktop-logo" alt="Logo do CodeLab" height="70" />
        </a>
      </div>
      <div class="icons">
        <a
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.link"
          :aria-label="icon.label"
          target="_blank"
          rel="noopener noreferrer"
          class="icon"
        >
          <span :class="['mdi', icon.name]"></span>
        </a>
      </div>
    </div>
</template>

<script setup lang="ts">
interface IconLink {
  name: string
  label: string
  link: string
}

const icons: IconLink[] = [
  {
    name: 'mdi-linkedin',
    label: 'Veja nosso linkedIn',
    link: 'https://www.linkedin.com/company/codelab-unifesp/'
  },
  {
    name: 'mdi-email',
    label: 'Entre em contato por email',
    link: 'mailto:codelab.unifesp@gmail.com?subject="link HTML"'
  },
  {
    name: 'mdi-github',
    label: 'Veja nosso github',
    link: 'https://github.com/UnifespCodeLab'
  }
]
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background-color: #1d1d1f;
  height: 80px;
  padding:0 2rem 0 2rem;
}

.icons {
  padding-top: 1rem;
}

.icon {
  font-size: 24px;
  color: #afafaf;
  transition: color 0.3s;
  padding: 1rem;
}

.icon:hover {
  color: #f9fafb;
}
</style>
