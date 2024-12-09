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
      type: String,
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
  <div class="project-card border border-gray-300 rounded-lg p-4">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p>Tech Stack: {{ techStack }}</p>
    <p>
      Github:
      <a :href="githubLink">
        {{ githubRepoName }}
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </p>
    <p>
      Live Demo:
      <span v-if="liveDemoLink">
        <a :href="liveDemoLink"
          >{{ liveDemoLink }} <i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </span>
      <span v-else> Unavailable </span>
    </p>
  </div>
</template>

<style>
.project-card a {
  text-decoration: underline;
}
</style>
