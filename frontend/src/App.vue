<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
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
    Navbar,
    Footer,
  },
}
</script>

<style>
/* App-level styling */
html,
body,
#app {
  height: 100%;
  margin: 0;
  background-color: #e8e8e8;
  font-family: 'Duru Sans', serif;
  color: #2b2b2b;
}

h1 {
  font-family: 'Noto Serif KR', serif; /* Font for headers */
}

.button:hover {
  transform: scale(1.05);
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  background-color: #1d1d1d;
}
</style>
