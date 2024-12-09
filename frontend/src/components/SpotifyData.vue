<script>
import axios from 'axios'

export default {
  name: 'SpotifyData',
  data() {
    return {
      topArtists: [],
    }
  },
  async created() {
    await this.fetchTopArtists()
    setInterval(this.fetchTopArtists, 3600000) // Update every hour
  },
  methods: {
    async fetchTopArtists() {
      try {
        const response = await axios.get('http://localhost:3000/api/top-artists')
        this.topArtists = response.data
      } catch (error) {
        console.error('Error fetching top artists:', error)
      }
    },
  },
}
</script>

<template>
  <div>
    <h3 class="text-4xl">Top 10 Artists in the Last 30 Days</h3>
    <ul>
      <li v-for="artist in topArtists" :key="artist.id">
        {{ artist.name }}
      </li>
    </ul>
  </div>
</template>

<style></style>
