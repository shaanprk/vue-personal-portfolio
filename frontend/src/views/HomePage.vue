<script>
import greetings from '@/assets/greetings.json' // Imported from https://github.com/novellac/multilanguage-hello-json/tree/master with minor spelling corrections

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
}
</script>

<template>
  <div class="content">
    <h1 class="text-4xl font-bold my-4">Home Page</h1>
    <div class="intro">
      <p class="text-4xl">{{ randomGreeting().message }}!</p>
      <p>Greeting in {{ greeting.language }}</p>
      <p class="text-3xl">Welcome to my portfolio!</p>
      <h4 class="text-xl">My name is <em>Jeongbin Sean Park.</em></h4>
      <p>
        I'm a Software Engineer from San Jose, California. I specialize in Full-Stack Development.
      </p>
      <p>Explore my portfolio to learn more about my work and my background.</p>
    </div>
    <h3 class="text-2xl my-4">Check out my work!</h3>
    <router-link to="/projects">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Projects
      </button>
    </router-link>
  </div>
</template>
