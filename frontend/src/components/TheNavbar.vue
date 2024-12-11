<template>
  <header class="bg-gray-800 p-4">
    <div class="flex items-center m-1 justify-between">
      <router-link to="/">
        <img src="../assets/Cropped_Image.png" class="navbar-logo" />
      </router-link>

      <nav class="navbar">
        <ul class="flex space-x-4 text-[#383838] w-full justify-between">
          <li class="navbar-links">
            <router-link to="/">Home</router-link>
            <img src="../assets/vecteezy_chinese-brush-stroke_10829827.png" class="nav-arrow" />
          </li>
          <li class="navbar-links">
            <router-link to="/projects">Projects</router-link>
            <img src="../assets/vecteezy_chinese-brush-stroke_10829827.png" class="nav-arrow" />
          </li>
          <li class="navbar-links">
            <router-link to="/about">About</router-link>
            <img src="../assets/vecteezy_chinese-brush-stroke_10829827.png" class="nav-arrow" />
          </li>
          <li class="navbar-links">
            <router-link to="/contact">
              Contact
              <img src="../assets/vecteezy_chinese-brush-stroke_10829827.png" class="nav-arrow" />
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.bg-gray-800 {
  background-color: #d6c7b2;
}

.navbar-logo {
  width: 100px;
  border-radius: 100%;
}

.navbar-links {
  font-family: 'Noto Serif KR', serif;
  color: #2b2b2b;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;
}

.nav-arrow {
  position: absolute;
  bottom: -15px; /* Adjust as needed */
  height: 15px;
  width: 100%;
  transform: rotate(4deg);
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.navbar-links:hover .nav-arrow {
  width: 100%;
  opacity: 0.8;
  animation: draw 0.3s forwards;
}

@keyframes draw {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
