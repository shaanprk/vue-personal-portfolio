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
}
</script>

<template>
  <div class="project-card border border-gray-300 rounded-lg p-4">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p>Tech Stack: {{ techStack }}</p>
    <p>Github: {{ githubLink }}</p>
    <p>Live Demo: {{ liveDemoLink }}</p>
  </div>
</template>

<style></style>
