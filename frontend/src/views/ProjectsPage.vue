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
  <div class="projects-page mt-[150px]">
    <div class="content">
      <h1 class="text-5xl font-bold text-center mb-8">Projects</h1>
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
      <div class="to-about-me items-center justify-center text-center mt-8">
        <h3 class="text-2xl">Get to know me better!</h3>
        <router-link to="/about">
          <button class="font-bold py-2 px-4 rounded">About me</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
