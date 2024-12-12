<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: Array,
      required: true,
    },
    githubLink: {
      type: String,
      default: '',
    },
    liveDemoLink: {
      type: String,
      default: '',
    },
  },
  computed: {
    githubRepoName() {
      const parts = this.githubLink.split('/')
      return parts.length > 0 ? parts[parts.length - 1] : ''
    },
  },
}
</script>

<template>
  <div class="project-card">
    <h3 class="title text-center font-bold text-2xl">{{ title }}</h3>
    <p class="description mb-4">{{ description }}</p>
    <h2 class="text-xl"><b>Tech Stack</b></h2>
    <div class="tech-stack flex flex-wrap justify-center mb-4">
      <a
        v-for="tech in techStack"
        :key="tech.name"
        :href="tech.link"
        target="_blank"
        class="tech-item flex flex-col items-center m-2 text-center text-inherit underline"
      >
        <span v-html="tech.svg" class="tech-logo w-6 h-6 mb-2"></span>
        {{ tech.name }}
      </a>
    </div>
    <div class="links grid grid-cols-[1fr_auto_1fr] items-center">
      <div class="link-item github-link text-right">
        Github:
        <a :href="githubLink" class="underline">
          {{ githubRepoName }}
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <span class="separator my-0 mx-[10px]">|</span>
      <div class="link-item livedemo-link text-left">
        Live Demo:
        <span v-if="liveDemoLink">
          <a :href="liveDemoLink" class="underline">
            {{ liveDemoLink }} <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </span>
        <span v-else> Unavailable </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-card + .project-card {
  margin-top: 20px;
}
</style>
