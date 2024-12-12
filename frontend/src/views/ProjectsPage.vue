<script>
import ProjectCard from '@/components/ProjectCard.vue'
import Navbar from '../components/TheNavbar.vue'
import projects from '@/assets/projects.json'

export default {
  name: 'ProjectsPage',
  components: {
    ProjectCard,
    Navbar,
  },
  data() {
    return {
      projects: projects,
    }
  },
}
</script>

<template>
  <Navbar />
  <div class="content mt-[150px]">
    <h1 class="text-5xl font-bold text-center mb-[20px]">Projects</h1>
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
