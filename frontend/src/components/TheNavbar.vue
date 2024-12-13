<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>

<template>
  <header class="navbar bg-transparent fixed z-50 p-[50px] w-[calc(100%-40px)]">
    <div class="flex items-center justify-between">
      <router-link to="/">
        <img
          src="../assets/Cropped_Image.png"
          class="navbar-logo w-24 rounded-full"
          title="Logo Picture"
        />
      </router-link>

      <button class="hamburger md:hidden" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <nav :class="{ hidden: !isMenuOpen, block: isMenuOpen }" class="md:block">
        <ul class="flex space-x-14 text-[#383838] w-full justify-between">
          <li class="navbar-links">
            <router-link to="/">Home</router-link>
            <img src="../assets/straight-brush-stroke.png" class="nav-arrow" />
          </li>
          <li class="navbar-links">
            <router-link to="/projects">Projects</router-link>
            <img src="../assets/straight-brush-stroke.png" class="nav-arrow" />
          </li>
          <li class="navbar-links">
            <router-link to="/about">About</router-link>
            <img src="../assets/straight-brush-stroke.png" class="nav-arrow" />
          </li>
          <!-- <li class="navbar-links">
            <router-link to="/contact"> Contact </router-link>
            <img src="../assets/straight-brush-stroke.png" class="nav-arrow" />
          </li> -->
        </ul>
      </nav>

      <div
        v-if="isMenuOpen"
        class="mobile-menu fixed inset-0 bg-white flex flex-col items-center justify-center z-40"
      >
        <ul class="text-4xl space-y-8">
          <li class="navbar-links">
            <router-link to="/" @click="closeMenu">Home</router-link>
          </li>
          <li class="navbar-links">
            <router-link to="/projects" @click="closeMenu">Projects</router-link>
          </li>
          <li class="navbar-links">
            <router-link to="/about" @click="closeMenu">About</router-link>
          </li>
          <!-- <li class="navbar-links">
            <router-link to="/contact" @click="closeMenu">Contact</router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar-links {
  font-family: 'Nanum Brush Script', serif;
  color: #2b2b2b;
  font-weight: bold;
  font-size: 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;
}

.nav-arrow {
  position: absolute;
  bottom: 0px; /* Adjust as needed */
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

/* Hamburger menu styles */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 50;
}

.hamburger span {
  width: 30px;
  height: 3px;
  background: #383838;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg);
}

/* Mobile menu styles */
.mobile-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100vw;
  z-index: 40;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
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
