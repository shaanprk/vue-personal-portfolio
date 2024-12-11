<script>
import greetings from '@/assets/greetings.json' // Imported from https://github.com/novellac/multilanguage-hello-json/tree/master with minor spelling corrections
import ZenBrush from '@/assets/Zen Brush.svg' // Import the SVG file

export default {
  name: 'HomePage',
  data() {
    return {
      greetingArr: greetings,
      greeting: { message: 'Hello', language: 'English' },
      zenBrush: ZenBrush, // Add the SVG to the data
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
    <div class="intro">
      <div class="greeting">
        <h1 class="text-8xl message">{{ randomGreeting().message }}!</h1>
        <p class="language">
          <em>Greeting in {{ greeting.language }}</em>
        </p>
      </div>

      <p class="text-3xl">Welcome to my portfolio!</p>
      <h4 class="text-xl">My name is <em>Jeongbin Sean Park.</em></h4>
      <p>
        I'm a Software Engineer from San Jose, California. I specialize in Full-Stack Development.
      </p>
      <p>Explore my portfolio to learn more about my work and my background.</p>
    </div>

    <div class="to-projects">
      <h3 class="text-2xl my-4">Check out my work!</h3>
      <router-link to="/projects" class="border-2 rounded-lg p-2">
        <button class="text-white font-bold rounded" style="margin: 10px">Projects</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.message {
  line-height: 1.2; /* Adjust line height as needed */
  margin-bottom: 1rem; /* Add margin to push down the language message */
  font-weight: bold;
}

.language {
  text-align: right;
  width: 100%;
  font-size: 0.75rem; /* Adjust font size as needed */
  color: #555; /* Adjust color as needed */
}

.intro {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-container {
  position: relative;
  display: inline-block;
}

.button-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.button-container:hover img {
  opacity: 1;
}
</style>
