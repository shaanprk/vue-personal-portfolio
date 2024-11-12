<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Portfolio Website',
          description: 'A personal portfolio website built with Vue.js and Tailwind CSS.',
          techStack: 'Vue3.js, Tailwind CSS, JavaScript, TypeScript, Vercel',
          githubLink: 'https://github.com/shaanprk/Vue-Personal-Portfolio',
          liveDemoLink: 'https://www.google.com/',
        },
        {
          id: 2,
          title: 'Credit Card Tracker',
          description:
            'Financial Tracker to track purchases and points across various credit cards',
          techStack: 'React, Django, SQLite',
          githubLink: '',
          liveDemoLink: '',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="content">
    <h1 class="text-4xl font-bold my-4">Projects</h1>
    <div class="projects">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :techStack="project.techStack"
        :githubLink="project.githubLink"
        :liveDemoLink="project.liveDemoLink"
      />
    </div>
    <h3 class="text-2xl my-4">Get to know me better!</h3>
    <router-link to="/about">
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-8">
        About me
      </button>
    </router-link>
  </div>
</template>
