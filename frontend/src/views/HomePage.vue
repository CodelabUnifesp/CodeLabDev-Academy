<template>
    <div class="info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
    <div class="card-container">
    <div class="card" v-for="(card, index) in cards" :key="index">
        <img :src="card.image" alt="Imagem do card" />
        <div class="card-body">
            <div class="card-header">
                <span class="label">{{ card.time }}</span>
                <h3>{{ card.title }}</h3>
            </div>
            <p class="description">{{ card.description }}</p>
            <router-link :to="`/curso/${card.slug}`" class="acessar-btn">
              Acessar &gt;
            </router-link>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gitCourse from '../data/courses/git-github/git-github'
import htmlCourse from '../data/courses/html-course/html';

defineProps({
  title: {
    type: String,
    default: 'CodeLab Academy'
  },
    description: {
    type: String,
    default: 'Tudo que você precisa pra começar a colaborar nos projetos!'
  }
})

const cards = [
  {
    slug: gitCourse.slug,
    title: gitCourse.name,
    time: '10 min',
    image: 'https://assets.dio.me/2j-8wvnftcFuoBr4QmgwILeIborbn4dKrjsH199rD28/f:webp/q:80/L2FydGljbGVzL2NvdmVyL2ZlYmZlNDg5LWQwMjctNGQ4Yy04M2EwLTNkYTU5MzEwMjgzYi5wbmc',
    description: 'Aprenda os primeiros passos com Git e versionamento de código.'
  },
  {
    slug: htmlCourse.slug,
    title: htmlCourse.name,
    time: htmlCourse.time,
    image: 'https://arquivo.devmedia.com.br/marketing/img/guia-html-38051.png',
    description: 'Construa sua primeira página web com HTML.'
  },
]

</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  box-sizing: border-box;
}

.info h1 {
  font-size: 2.5rem;
  margin: 0;
  font-size: 36px;
}

.info p {
  font-size: 1.25rem;
  margin-top: 0.75rem; /* distância menor entre título e descrição */
  color: #666;
  font-size: 16px;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.label {
  display: inline-block;
  margin-top: 0.25rem;
  background-color: #949393;
  color: white;
  padding: 0.15rem 0.65rem;
  border-radius: 8px;
  font-size: 0.55rem;
}

.description {
  margin: 1rem 0;
  color: #444;
}

.acessar-btn {
  background-color: #1d1d1f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.acessar-btn:hover {
  background-color: #7a7a7a;
}
</style>
