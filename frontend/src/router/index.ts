import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CoursePage from '../views/CoursePage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/curso/:slug',  name: 'CoursePage', component: CoursePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
