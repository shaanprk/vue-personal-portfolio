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
}
</style>
