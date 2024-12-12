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
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <h2 class="text-xl"><b>Tech Stack</b></h2>
    <div class="tech-stack">
      <a
        v-for="tech in techStack"
        :key="tech.name"
        :href="tech.link"
        target="_blank"
        class="tech-item"
      >
        <span v-html="tech.svg" class="tech-logo"></span>
        {{ tech.name }}
      </a>
    </div>
    <div class="links">
      <div class="link-item github-link">
        Github:
        <a :href="githubLink">
          {{ githubRepoName }}
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <span class="separator">|</span>
      <div class="link-item livedemo-link">
        Live Demo:
        <span v-if="liveDemoLink">
          <a :href="liveDemoLink">
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

.project-card a {
  text-decoration: underline;
}

.project-card + .project-card {
  margin-top: 20px;
}

.project-card h3 {
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.tech-item:hover {
  text-decoration: underline;
}

.tech-logo {
  width: 24px;
  height: 24px;
  margin-bottom: 0.5rem;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.github-link {
  margin-right: 10px;
}

.livedemo-link {
  margin-left: 10px;
}

.separator {
  margin: 0 10px;
}
</style>
