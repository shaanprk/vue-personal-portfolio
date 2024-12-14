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
  <div
    class="landing-page flex flex-col justify-center items-center text-[#2c3e50] p-8 h-[calc(100vh-20px)] relative"
  >
    <div
      class="initial-message fade-up flex justify-center items-center gap-3 max-md:flex-col max-md:text-center"
    >
      <div class="greeting mb-8 inline-flex flex-col items-center justify-center">
        <h1 class="message text-7xl font-bold mb-4 text-end">{{ randomGreeting().message }}!</h1>
        <p class="language text-xs italic self-end">Greeting in {{ greeting.language }}</p>
      </div>

      <div class="introduction mb-8 inline">
        <h4 class="text-5xl">
          My name is <br /><span class="font-bold">Jeongbin Sean Park.</span>
        </h4>
      </div>
    </div>

    <p class="welcome fade-up-delay text-3xl max-md:text-center">Welcome to My Portfolio</p>

    <div class="scroll flex flex-col justify-center items-center absolute bottom-0">
      <p class="text-xs mb-2 fade-in">
        <span class="letter">S</span>
        <span class="letter">C</span>
        <span class="letter">R</span>
        <span class="letter">O</span>
        <span class="letter">L</span>
        <span class="letter">L</span>
      </p>
      <svg
        width="1"
        height="100%"
        viewBox="0 0 1 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fade-in max-md:hidden"
      >
        <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#2B2B2B" />
      </svg>
      <svg
        width="1"
        height="100%"
        viewBox="0 0 1 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fade-in md:hidden"
      >
        <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#2B2B2B" />
      </svg>
    </div>
  </div>

  <div
    class="summary flex flex-col justify-center items-center h-[calc(100vh-20px)] relative max-md:text-center"
  >
    <div class="scroll flex flex-col justify-center items-center absolute top-0">
      <svg
        width="1"
        height="100%"
        viewBox="0 0 1 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fade-in max-md:hidden"
      >
        <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#2B2B2B" />
      </svg>
      <svg
        width="1"
        height="100%"
        viewBox="0 0 1 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fade-in md:hidden"
      >
        <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#2B2B2B" />
      </svg>
    </div>
    <p>
      I'm a Software Engineer from San Jose, California. I specialize in Full-Stack Development.
    </p>
    <p>Explore my portfolio to learn more about my work and my background.</p>

    <div class="to-projects text-center">
      <h3 class="text-2xl mb-4">Check out my work!</h3>
      <router-link to="/projects">
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Projects</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-up {
  animation: fadeUp 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}
.fade-up-delay {
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 1.2s;
  opacity: 0;
}

.letter {
  display: inline-block;
  animation: bounce 7.5s infinite ease-in-out;
  animation-delay: calc(2.7s + 0.1s * var(--index));
}
@keyframes bounce {
  0%,
  5% {
    transform: translateY(0);
    opacity: 1;
  }
  2.5% {
    transform: translateY(-10px); /* Bounce upwards */
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

p .letter:nth-child(1) {
  --index: 1;
}
p .letter:nth-child(2) {
  --index: 2;
}
p .letter:nth-child(3) {
  --index: 3;
}
p .letter:nth-child(4) {
  --index: 4;
}
p .letter:nth-child(5) {
  --index: 5;
}
p .letter:nth-child(6) {
  --index: 6;
}

.letter + .letter {
  margin-left: 0.25em;
}
.to-projects button {
  transition: background-color 0.3s ease;
}
.to-projects button:hover {
  background-color: #1d72b8;
}
</style>
