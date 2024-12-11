<script>
import SpotifyData from '@/components/SpotifyData.vue'

export default {
  name: 'AboutPage',
  data() {
    return {
      pdfUrl: '/Resume.pdf',
    }
  },
  components: {
    SpotifyData,
  },
}
</script>

<template>
  <div class="pagewrap">
    <div class="introduction space-x-4 my-4">
      <h1 class="text-4xl font-bold my-4">About Me</h1>
      <p>
        I graduated from University of California, San Diego with a degree in Math & Computer
        Science and a minor in Finance.
      </p>
      <p>I focus on Full Stack Development with proficiencies in:</p>
      <p>Technical Skills</p>
      <p>- Programming Languages: Java, Python, C/C++, JavaScript, TypeScript</p>
      <p>- Frameworks & Libraries: React, Vue.js, Express.js, Django</p>
      <p>- Database Systems: PostgreSQL, MongoDB, SQLite</p>
      <p>- Developer Tools: VS Code, Eclipse, IntelliJ, Git, Docker, Node.js</p>
    </div>

    <div class="personal">
      <h3 class="text-3xl">Personal Interests</h3>
      <div class="music">
        <h4 class="text-2xl">Music</h4>
        <p>I love music.</p>
        <p>Tune into what I'm listening to:</p>
        <SpotifyData />
      </div>
    </div>

    <div class="resume my-8">
      <h3 class="text-2xl mb-2">My Resume</h3>
      <iframe :src="pdfUrl" width="60%" height="850px" style="border: none"></iframe>
    </div>
  </div>
</template>
