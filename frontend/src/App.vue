<template>
  <div id="app" class="flex flex-col min-h-screen">
    <!-- <Navbar /> -->
    <main class="flex-grow border-frame">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'

import Navbar from './components/TheNavbar.vue'
import Footer from './components/TheFooter.vue'

export default {
  components: {
    // Navbar,
    // Footer,
  },
}
</script>

<style>
/* App-level styling */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  font-family: 'Duru Sans', serif;
  color: #2b2b2b;
}

body {
  background-image: url('@/assets/5741_2_.jpg');
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  /* background-color: #e8e8e8; */
}

.border-frame {
  border: 20px solid transparent;
  border-image: url('@/assets/border.jpg') 30 round;
}

h1 {
  font-family: 'Noto Serif KR', serif; /* Font for headers */
}
</style>
