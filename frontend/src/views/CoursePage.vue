<template>
  <div v-if="course">
    <h1 class="text-2xl font-bold mb-4">{{ course.name }}</h1>

    <div class="flex gap-6">
      <!-- Sidebar -->
      <aside class="w-1/4 bg-gray-100 p-4">
        <ul>
          <li v-for="lesson in course.lessons" :key="lesson.slug">
            <RouterLink
              :to="{ query: { lesson: lesson.slug } }"
              :class="{ 'text-green-500 font-bold': lesson.slug === selectedLesson?.slug }"
            >
              {{ lesson.title }}
            </RouterLink>
          </li>
        </ul>
      </aside>

      <!-- Main content -->
      <main class="w-3/4">
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

type ContentType = 'title' | 'text'
type ComponentMap = Record<ContentType, Component>

const route = useRoute()
const courseSlug = route.params.slug as string
const course = courses[courseSlug]

const componentMap: ComponentMap = {
  title: CourseTitle,
  text: CourseContent,
}

const selectedLesson = computed(() => {
  if (!course?.lessons?.length) return undefined
  
  const lessonSlug = route.query.lesson as string | undefined
  return lessonSlug 
    ? course.lessons.find(l => l.slug === lessonSlug)
    : course.lessons[0]
})
</script>