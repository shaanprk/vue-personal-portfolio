<template>
  <div id="app">
    <Navbar />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from './components/TheNavbar.vue'
import Footer from './components/PageFooter.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style>
/* App-level styling */
</style>
