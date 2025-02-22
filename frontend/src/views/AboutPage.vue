<script>
import SpotifyData from '@/components/SpotifyData.vue'
import Navbar from '@/components/TheNavbar.vue'
import links from '@/assets/links.json'

export default {
  name: 'AboutPage',
  data() {
    return {
      pdfUrl: '/Resume.pdf',
      isMusicExpanded: false,
      links: links,
    }
  },
  methods: {
    toggleMusic() {
      this.isMusicExpanded = !this.isMusicExpanded
    },
  },
  components: {
    SpotifyData,
    Navbar,
  },
}
</script>

<template>
  <div class="about-page glow">
    <Navbar />
    <div
      class="serious-introduction h-[calc(100vh-20px)] px-[80px] relative justify-center items-center flex flex-col"
    >
      <div class="introduction space-x-4 flex items-center">
        <img
          src="@/assets/profile-picture.jpg"
          alt="Profile Picture"
          class="w-80 h-80 rounded-full"
          title="Das me :)"
        />
        <div class="introduction-text">
          <h1 class="text-4xl font-bold mb-4">About Me</h1>
          <p>
            I graduated from <span class="font-bold">University of California, San Diego</span> with
            a degree in <span class="font-bold">Math & Computer Science</span> and a minor in
            <span class="font-bold">Finance</span>.
          </p>
          <p class="mt-2">
            Since childhood, I've loved tinkering with Legos and building things—a passion that
            seamlessly transitioned into coding.
          </p>
          <div class="links mt-4 flex md:justify-center">
            <a
              v-for="(link, index) in links"
              :key="link.id"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="['link', 'fade-slide-down', `delay-${index}`, 'mr-4']"
            >
              <span v-html="link.svg"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 w-3/5 mt-12 mb-12">
        <div class="technical-skills md:text-right text-center slide-in-left">
          <h1 class="text-2xl font-semibold mb-4">Technical Skills</h1>

          <h4 class="text-xl font-bold">Programming Languages</h4>
          <p>Python, C/C++, JavaScript, TypeScript, Java, R</p>

          <h4 class="text-xl font-bold">Frameworks & Libraries</h4>
          <p>React, Vue.js, Django, Express.js</p>

          <h4 class="text-xl font-bold">Database Systems</h4>
          <p>PostgreSQL, MongoDB, SQLite, Redis</p>

          <h4 class="text-xl font-bold">Developer Tools</h4>
          <p>Git, Docker, Node.js, Jest, Linux, Vercel</p>
        </div>
        <div class="empty-div"></div>
        <div class="empty-div"></div>
        <div class="work-experience md:text-left text-center slide-in-right">
          <h1 class="text-2xl font-semibold mb-2">Work Experience</h1>

          <h4 class="text-xl font-bold">New-Sol (June 2021—Sep. 2023)</h4>
          <p class="text-xs italic">Software Engineer Intern</p>

          <h4 class="text-xl font-bold">UCSD Tutor (Dec. 2023—Mar. 2024)</h4>
          <p class="text-xs italic">Computer Science Tutor</p>

          <h4 class="text-xl font-bold">Outlier (May 2024—Nov. 2024)</h4>
          <p class="text-xs italic">Freelance Coder & AI Training</p>
        </div>
      </div>

      <div class="scroll flex flex-col justify-center items-center absolute bottom-0 fade-in">
        <p class="text-xs mb-2">
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
          viewBox="0 0 1 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#2B2B2B" />
        </svg>
      </div>
    </div>

    <div class="fun-stuff h-[calc(100vh-20px)] relative justify-center items-center flex flex-col">
      <div class="scroll flex flex-col justify-center items-center absolute top-0 fade-in">
        <svg
          width="1"
          height="100%"
          viewBox="0 0 1 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#2B2B2B" />
        </svg>
      </div>
      <div class="coming-soon text-center">
        <h3 class="text-4xl font-bold">Now onto the fun stuff!</h3>
        <h3 class="text-2xl font-bold mt-8">Coming Soon</h3>
      </div>
      <!-- <h3 class="text-4xl font-bold">Now onto the fun stuff!</h3>
      <p class="text-2xl">When I'm not coding, I enjoy:</p>
      <div class="music tile p-4 rounded-lg" @click="toggleMusic">
        <h4 class="title text-xl cursor-pointer flex items-center">
          <span>Music +</span>
        </h4>
        <div v-show="isMusicExpanded" class="content">
          <p>I love music.</p>
          <p>Tune into what I'm listening to:</p>
          <SpotifyData />
        </div>
      </div> -->
    </div>
  </div>
</template>

<style>
.about-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/bamboo_clear.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: scroll;
  opacity: 0.6;
  z-index: -1;
}
.about-page {
  position: relative;
  min-height: 100vh;
}
.glow {
  text-shadow: 1px 1px 2px white;
}

/* .music {
  border: 1px solid red;
}
.fun-stuff {
  border: 1px solid purple;
} */
@keyframes fadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-slide-down {
  opacity: 0;
  transform: translateX(50px);
  animation: fadeSlideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Delay classes for staggered animation */
.delay-0 {
  animation-delay: 0.2s;
}
.delay-1 {
  animation-delay: 0.4s;
}
.delay-2 {
  animation-delay: 0.6s;
}
.delay-3 {
  animation-delay: 0.8s;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (min-width: 768px) {
  .slide-in-right {
    animation: slideInRight 0.6s ease-out forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .slide-in-left {
    animation: slideInLeft 0.6s ease-out forwards;
    opacity: 0;
    animation-delay: 0.5s;
  }
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
  animation-delay: 1.3s;
  opacity: 0;
}

.letter + .letter {
  margin-left: 0.25em;
}

.letter {
  display: inline-block;
  animation: bounce 7.5s infinite ease-in-out;
  animation-delay: calc(4s + 0.1s * var(--index));
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
</style>
