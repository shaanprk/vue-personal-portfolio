<script>
import SpotifyData from '@/components/SpotifyData.vue'

export default {
  name: 'AboutPage',
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
      <p>- Frameworks & Libraries: Vue.js, React, Node.js, Tailwind, Django</p>
      <p>- Database Systems: MongoDB, SQLite</p>
      <p>- Developer Tools: VS Code, Eclipse, IntelliJ, Git</p>
    </div>

    <!-- <div class="experience">
      <h3 class="text-3xl">Experience</h3>
      <p>Outlier</p>
      <p>New-Sol</p>
    </div> -->

    <div class="personal">
      <h3 class="text-3xl">Personal Interests</h3>
      <div class="music">
        <h4 class="text-2xl">Music</h4>
        <p>I love music.</p>
        <p>Tune into what I'm listening to:</p>
        <SpotifyData />
      </div>
    </div>

    <!-- <div class="resume my-8">
      <h3 class="text-2xl mb-2">Resume</h3>
      <button
        id="resume-button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click Here To See Resume
      </button>
      <div id="pdf-container" class="my-4">
        <object data="/Resume.pdf" type="application/pdf" width="600" height="830">
          alt : <a href="/Resume.pdf">Download Resume</a>
        </object>
      </div>
    </div> -->

    <div class="spotify-data my-8">
      <h3 class="text-2xl mb-2">What Am I Listening To?</h3>
      <p>Insert Spotify API Data Here</p>
      <p>Updated Every 30 Days</p>
    </div>
    <!-- <h3 class="text-2xl my-4">Check out what I've been working on!</h3>
    <router-link to="/projects">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Projects
      </button>
    </router-link> -->
  </div>
</template>
