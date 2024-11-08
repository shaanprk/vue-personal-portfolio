<template>
    <header class="bg-gray-800 p-4">
        <div class="container flex items-center m-1">
            <router-link to="/"><img src="../assets/Cropped_Image.png" class="navbar-logo"/></router-link>

            <button @click="toggleButton = !toggleButton" class="hover:tracking-wider mx-8 text-2xl text-white">
                <p :class="toggleButton ? 'hidden' : ''">Menu</p>
                <p :class="toggleButton ? '' : 'hidden'">Close</p>
            </button>

            <nav class="navbar">
                <ul class="flex space-x-4 text-white w-full justify-between">
                    <li class="navbar-links"><router-link to="/">Home</router-link></li>
                    <li class="navbar-links"><router-link to="/about">About</router-link></li>
                    <li class="navbar-links"><router-link to="/projects">Projects</router-link></li>
                    <li class="navbar-links"><router-link to="/contact">Contact</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "NavbarComponent",
        data() {
            return {
                toggleButton: false
            }
        }
    };
</script>

<style scoped>
    .navbar-logo {
        width: 100px;
        border-radius: 100%;
    }
    .navbar-links {
        @apply hover:text-gray-400 flex-grow text-center outline;
    }
    .navbar-hover {
        @apply hover:tracking-wider;
    }
</style>