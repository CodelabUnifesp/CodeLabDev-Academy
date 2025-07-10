<template>
  <div v-if="course">
    <h1>{{ course.name }}</h1>

    <div class="course-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <h1>Conteúdo do curso </h1>
        <ul>
            <li 
            v-for="lesson in course.lessons" 
            :key="lesson.slug"
            :class="{ selected: lesson.slug === selectedLesson?.slug }"
            >
            <RouterLink
              :to="{ query: { lesson: lesson.slug } }"
              >
              {{ lesson.title }}
              <p class="time-tag">
                <img src="https://www.svgrepo.com/show/522682/time.svg" class="time-img">
                {{ lesson.time }}
              </p>
            </RouterLink>
          </li>
        </ul>
      </aside>

      <!-- Main content -->
      <main class="main-content">
        <div v-if="selectedLesson">
          <div v-for="(el, index) in selectedLesson.content" :key="index">
            <component :is="componentMap[el.type]" :content="el.content" />
          </div>
        </div>
        <div v-else>
          <p class="text-red-500 text-lg">Aula não encontrada.</p>
        </div>
      </main>
    </div>
  </div>

  <div v-else>
    <p class="text-red-500 text-lg mt-6">Curso não encontrado.</p>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { courses } from '../data/course'
import type { Component } from 'vue'

import CourseTitle from '../components/CourseTitle.vue'
import CourseContent from '../components/CourseText.vue'
import CourseSubtitle from '../components/CourseSubtitle.vue'
import CourseList from '../components/CourseList.vue'
import CourseTextImportant from '../components/CourseTextImportant.vue'
import CourseSubText from '../components/CourseSubText.vue'
import CourseCodeExample from '../components/CourseCodeExample.vue'
import CourseImage from '../components/CourseImage.vue'
import CourseTable from '../components/CourseTable.vue'

type ContentType = 'title' | 'subtitle' | 'text' | 'list' | 'important' | 'subtext' | 'code_example' | 'image' | 'table'
type ComponentMap = Record<ContentType, Component>

const route = useRoute()
const courseSlug = route.params.slug as string
const course = courses[courseSlug]

const componentMap: ComponentMap = {
  title: CourseTitle,
  subtitle: CourseSubtitle,
  text: CourseContent,
  list: CourseList,
  important: CourseTextImportant,
  subtext: CourseSubText,
  code_example: CourseCodeExample,
  image: CourseImage,
  table: CourseTable
}

const selectedLesson = computed(() => {
  if (!course?.lessons?.length) return undefined
  
  const lessonSlug = route.query.lesson as string | undefined
  return lessonSlug 
    ? course.lessons.find(l => l.slug === lessonSlug)
    : course.lessons[0]
})
</script>

<style scoped>

.course-layout {
  display: flex;
  flex-direction: row-reverse;
  gap: 24px;
}

.sidebar {
  width: 23%;
  background-color: var(--background-color);
  padding: 1px 16px 1px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding-bottom: 25px;
  align-self: flex-start;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.sidebar li {
  padding: 5px 0px 0px 15px;
  margin: 0;
  height: 40px;
  font-size: 0.85rem;
}

.time-tag {
  margin-top: 0;
  padding: 0.15rem 0.65rem;
  width: 50%;
  border-radius: 8px;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.time-img {
  height: 0.75rem;
  width: auto;
}

.sidebar a {
  text-decoration: none;
  color: inherit;
}

.sidebar a:visited {
  color: inherit;
}

.sidebar a:hover {
  text-decoration: none;
}


.main-content {
  flex: 1;
  padding: 20px 60px 20px 40px;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 6px;
}

.font-bold {
  font-weight: bold;
}

.selected {
  border: 1px solid var(--selected-border-color);
  border-radius: 16px;
  background-color: var(--selected-background-color);
  font-weight: 500;
}

</style>