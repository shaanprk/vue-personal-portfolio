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
  <div class="projects-page glow">
    <Navbar />
    <div class="pt-[150px]">
      <div class="content">
        <h1 class="text-5xl font-bold text-center mb-8 fade-in">Projects</h1>
        <div class="projects">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :techStack="project.techStack"
            :githubLink="project.githubLink"
            :liveDemoLink="project.liveDemoLink"
            :class="['fade-slide-down', `delay-${index}`]"
          />
        </div>
        <div class="to-about-me items-center justify-center text-center mt-12 pb-12">
          <h3 class="text-2xl">Get to know me better!</h3>
          <router-link to="/about">
            <button class="bg-gray-600 text-white font-bold py-2 px-4 rounded">About me</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/bamboo_clear.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: scroll;
  opacity: 0.6;
  z-index: -1;
}
.projects-page {
  position: relative;
  min-height: 100vh;
}

.glow {
  text-shadow: 1px 1px 2px white;
}

/* Projects Header Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

/* Project Card Cascade Animation */
@keyframes fadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-slide-down {
  opacity: 0;
  transform: translateY(-50px);
  animation: fadeSlideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Delay classes for staggered animation */
.delay-0 {
  animation-delay: 0.4s;
}
.delay-1 {
  animation-delay: 0.6s;
}
.delay-2 {
  animation-delay: 0.8s;
}
.delay-3 {
  animation-delay: 1s;
}
.delay-4 {
  animation-delay: 1.2s;
}
.delay-5 {
  animation-delay: 1.4s;
}
</style>
