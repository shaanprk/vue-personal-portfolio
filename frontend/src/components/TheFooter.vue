<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<template>
  <footer class="bg-gray-800 text-white py-4 text-center">
    <div class="container mx-auto">
      <p>&copy; {{ currentYear }} Jeongbin Sean Park. All rights reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/shaanprk" target="_blank" class="hover:underline"> GitHub </a>
        <a
          href="https://www.linkedin.com/in/jeongbin-sean-park/"
          target="_blank"
          class="hover:underline"
        >
          LinkedIn
        </a>
        <a href="mailto:imbinpark@gmail.com" class="hover:underline"> Email </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  left: 0;
}
</style>
