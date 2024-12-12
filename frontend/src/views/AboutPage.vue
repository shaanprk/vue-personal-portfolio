<script>
import SpotifyData from '@/components/SpotifyData.vue'
import Navbar from '@/components/TheNavbar.vue'

export default {
  name: 'AboutPage',
  data() {
    return {
      pdfUrl: '/Resume.pdf',
      isMusicExpanded: false,
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
  <Navbar />
  <div class="about-page">
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
          <div class="links mt-4 flex">
            <a
              href="https://www.linkedin.com/in/jeongbin-sean-park/"
              target="_blank"
              rel="noopener noreferrer"
              class="link mr-4"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
              >
                <title>LinkedIn</title>
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/shaanprk"
              target="_blank"
              rel="noopener noreferrer"
              class="link mr-4"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>

            <a
              href="mailto:imbinpark@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="link mr-4"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <title>Gmail</title>
                <path
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                />
              </svg>
            </a>

            <a href="../../public/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file-text"
              >
                <title>Resume</title>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 w-3/5 mt-12 mb-12">
        <div class="technical-skills md:text-right text-center">
          <h1 class="text-2xl font-semibold mb-4">Technical Skills</h1>

          <h4 class="text-xl font-bold">Programming Languages</h4>
          <p>Java, Python, C/C++, JavaScript, TypeScript</p>

          <h4 class="text-xl font-bold">Frameworks & Libraries</h4>
          <p>React, Vue.js, Express.js, Django</p>

          <h4 class="text-xl font-bold">Database Systems</h4>
          <p>PostgreSQL, MongoDB, SQLite</p>

          <h4 class="text-xl font-bold">Developer Tools</h4>
          <p>VS Code, Eclipse, IntelliJ, Git, Docker, Node.js</p>
        </div>
        <div class="empty-div"></div>
        <div class="empty-div"></div>
        <div class="work-experience md:text-left text-center">
          <h1 class="text-2xl font-semibold mb-2">Work Experience</h1>

          <h4 class="text-xl font-bold">New-Sol (June 2021—Sep. 2023)</h4>
          <p class="text-xs italic">Software Engineer Intern</p>

          <h4 class="text-xl font-bold">UCSD Tutor (Dec. 2023—Mar. 2024)</h4>
          <p class="text-xs italic">Computer Science Tutor</p>

          <h4 class="text-xl font-bold">Outlier (May 2024—Present)</h4>
          <p class="text-xs italic">Freelance Coder & AI Training</p>
        </div>
      </div>

      <div class="scroll flex flex-col justify-center items-center absolute bottom-0">
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
      <div class="scroll flex flex-col justify-center items-center absolute top-0">
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
      <h3 class="text-4xl font-bold">Now onto the fun stuff!</h3>
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
      </div>
    </div>
  </div>
</template>

<style>
.music {
  border: 1px solid red;
}
.fun-stuff {
  border: 1px solid purple;
}
.letter {
  display: inline-block;
  animation: bounce 10s infinite ease-in-out;
  animation-delay: calc(0.1s * var(--index));
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
