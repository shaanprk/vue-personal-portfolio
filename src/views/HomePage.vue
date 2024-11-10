<template>
  <div class="content">
    <h1 class="text-4xl font-bold my-4">Home Page</h1>
    <div class="intro">
      <h4 class="text-xl">Hi! My name is <em>Jeongbin Sean Park.</em></h4>
      <p>{{ greeting }}</p>
      <p>I am an aspiring SWE based out of California.</p>
    </div>
    <h3 class="text-2xl my-4">Get to know me better!</h3>
    <router-link to="/about">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        About Me
      </button>
    </router-link>
  </div>
</template>

<script>
// export default {
//     data() {
//         return {
//             greeting: 'This is a test',
//         };
//     },
// };
</script>
