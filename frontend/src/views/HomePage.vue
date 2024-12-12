<script>
import greetings from '@/assets/greetings.json' // Imported from https://github.com/novellac/multilanguage-hello-json/tree/master with minor spelling corrections
import Navbar from '../components/TheNavbar.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      greetingArr: greetings,
      greeting: { message: 'Hello', language: 'English' },
    }
  },
  methods: {
    randomGreeting() {
      const index = Math.floor(Math.random() * this.greetingArr.length)
      this.greeting = this.greetingArr[index]
      return this.greeting
    },
  },
  components: {
    Navbar,
  },
}
</script>

<template>
  <Navbar />
  <div class="intro flex flex-col justify-center items-center text-[#2c3e50] p-8">
    <div class="flex justify-center items-center gap-3">
      <div class="greeting mb-8 inline-flex flex-col items-center justify-center">
        <h1 class="message text-7xl font-bold mb-4 text-center">{{ randomGreeting().message }}!</h1>
        <p class="language text-xs italic self-end">Greeting in {{ greeting.language }}</p>
      </div>

      <div class="short-message mb-8">
        <h4 class="text-5xl">My name is <br /><span class="font-bold">Jeongbin Sean Park</span></h4>
      </div>
    </div>

    <p class="text-3xl">Welcome to My Portfolio</p>
  </div>

  <div class="summary text-center">
    <p>
      I'm a Software Engineer from San Jose, California. I specialize in Full-Stack Development.
    </p>
    <p>Explore my portfolio to learn more about my work and my background.</p>
  </div>

  <div class="to-projects text-center">
    <h3 class="text-2xl mb-4">Check out my work!</h3>
    <router-link to="/projects">
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Projects</button>
    </router-link>
  </div>
</template>

<style scoped>
.to-projects button {
  transition: background-color 0.3s ease;
}
.to-projects button:hover {
  background-color: #1d72b8;
}
.intro {
  height: calc(100vh);
}
</style>
