<script>
export default {
  name: 'HomePage',
  data() {
    return {
      greetingArr: [
        { message: 'Hello', language: 'English' },
        { message: '안녕', language: 'Korean' },
        { message: 'مرحبا', language: 'Arabic' },
        { message: 'Ciao', language: 'Italian' },
        { message: 'Bonjour', language: 'French' },
        { message: 'こんにちは', language: 'Japanese' },
        { message: '你好', language: 'Chinese (Mandarin)' },
        { message: 'Hola', language: 'Spanish' },
        { message: 'Hallo', language: 'German' },
        { message: 'Привет', language: 'Russian' },
        { message: 'नमस्ते', language: 'Hindi' },
        { message: 'Hej', language: 'Swedish' },
        { message: 'Salam', language: 'Persian' },
        { message: 'Shalom', language: 'Hebrew' },
        { message: 'Kamusta', language: 'Filipino' },
      ],
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
