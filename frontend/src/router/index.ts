import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Jeongbin Sean Park - Software Engineer',
      description: "Welcome to Jeongbin Sean Park's Portfolio",
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About Me - Jeongbin Sean Park',
      description: 'Learn more about Jeongbin Sean Park outside of work',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
    meta: {
      title: 'My Projects - Jeongbin Sean Park',
      description: 'Explore the work of Jeongbin Sean Park',
    },
  },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: ContactPage,
  //   meta: {
  //     title: 'Contact',
  //     description: 'Reach out and connect with Jeongbin Sean Park',
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Default Title'
  next()
})

export default router
