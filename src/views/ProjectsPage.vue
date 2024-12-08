<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'ProjectsPage',
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
          githubLink: 'https://github.com/shaanprk/cc-points-analyzer',
          liveDemoLink: '',
        },
        {
          id: 3,
          title: 'Redis App',
          description: 'A simple Redis app to store and retrieve data built in C++',
          techStack: 'C++, Redis',
          githubLink: 'https://github.com/shaanprk/redis-app',
          liveDemoLink: '',
        },
        {
          id: 4,
          title: 'Youtube Clone',
          description:
            'Created a Youtube clone to get a better understanding of Full Stack Development.',
          techStack: 'TypeScript, Next.js, Google Cloud Services, Firestore, Docker',
          githubLink: 'https://github.com/shaanprk/youtube-clone',
          liveDemoLink: '',
        },
        {
          id: 4,
          title: 'Mods and Plugins',
          description: 'Collection of plugins and mods I created/modified in Java and Kotlin',
          techStack: 'Java, Kotlin, Spigot, Bukkit',
          githubLink: 'https://github.com/shaanprk/Mods-Plugins',
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
