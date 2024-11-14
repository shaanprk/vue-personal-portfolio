import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Projects from '../views/ProjectsPage.vue'
import Contact from '../views/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
  { path: '/about', name: 'About', component: About, meta: { title: 'About' } },
  { path: '/projects', name: 'Projects', component: Projects, meta: { title: 'Projects' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Contact' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Default Title'
  next()
})

export default router
