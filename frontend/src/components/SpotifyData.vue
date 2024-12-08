<template>
  <div class="spotify-data">
    <h2>Top 10 Artists (Last 30 Days)</h2>
    <ul v-if="topArtists.length > 0">
      <li v-for="(artist, index) in topArtists" :key="artist.id">
        {{ index + 1 }}. {{ artist.name }}
      </li>
    </ul>
    <p v-else>Loading your top artists...</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SpotifyData',
  data() {
    return {
      topArtists: [], // Store artist data
      intervalId: null,
    }
  },
  methods: {
    async fetchTopArtists() {
      try {
        const response = await axios.get('http://localhost:3000/api/top-artists')
        this.topArtists = response.data.artists.map((artist) => ({
          id: artist.id,
          name: artist.name,
        }))
      } catch (error) {
        console.error('Error fetching Spotify data:', error)
      }
    },
    startFetching() {
      this.fetchTopArtists()
      this.intervalId = setInterval(this.fetchTopArtists, 3600000) // Fetch data every hour
    },
    stopFetching() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
      }
    },
  },
  mounted() {
    this.startFetching()
  },
  beforeUnmount() {
    this.stopFetching()
  },
}
</script>

<style scoped>
.spotify-data {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>
