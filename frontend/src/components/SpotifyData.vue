<script>
import axios from 'axios'

export default {
  name: 'SpotifyData',
  data() {
    return {
      topArtists: [],
      lastUpdated: null,
    }
  },
  async created() {
    await this.fetchTopArtists()
  },
  methods: {
    async fetchTopArtists() {
      try {
        const response = await axios.get('http://localhost:3000/top-items')
        this.topArtists = response.data
      } catch (error) {
        console.error('Error fetching top artists:', error)
      }
    },
  },
}
</script>

<!-- <template>
  <div>
    <h3 class="text-4xl">Top 10 Artists in the Last 30 Days</h3>
    <ul class="artist-list">
      <li v-for="artist in topArtists" :key="artist.id" class="artist-item">
        <a :href="artist.external_urls.spotify" target="_blank" class="artist-link">
          <img :src="artist.images[0]?.url" :alt="artist.name" class="artist-image" />
          <p class="artist-name">{{ artist.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template> -->

<template>
  <div>
    <h3 class="text-xl">Top 10 Artists in the Last 30 Days</h3>
    <!-- <p>Last Updated: {{ new Date(lastUpdated).toLocaleString() }}</p> -->
    <ul class="artist-list">
      <li v-for="(artist, index) in topArtists" :key="artist.id" class="artist-item">
        <span class="artist-number">{{ index + 1 }}.</span>
        <a :href="artist.external_urls.spotify" target="_blank" class="artist-link">
          <img :src="artist.images[0]?.url" :alt="artist.name" class="artist-image" />
          <p class="artist-name">{{ artist.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.artist-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  list-style-type: none;
  padding: 0;
}

.artist-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.artist-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.artist-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.artist-name {
  font-size: 1.25rem;
  font-weight: bold;
}

.artist-link:hover .artist-name {
  text-decoration: underline;
}
</style>
