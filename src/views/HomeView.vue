<template>
  <div class="anime-search">
    <h1>Anime Search</h1>
    <input v-model="query" @keyup.enter="searchAnime" placeholder="Search for animes..." />
    <button @click="searchAnime">Search</button>
    
    <div v-if="loading">Loading...</div>
    
    <div v-if="error" class="error">{{ error }}</div>
    
    <ul v-if="animes.length > 0">
      <li v-for="anime in animes" :key="anime.mal_id">
        <router-link :to="{ name: 'AnimeDetail', params: { id: anime.mal_id }}">
          <h2>{{ anime.title }}</h2>
          <img :src="anime.images.jpg.image_url" alt="Anime Image" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      animes: [],
      loading: false,
      error: ''
    };
  },
  methods: {
    async searchAnime() {
      this.loading = true;
      this.error = '';
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${this.query}`);
        this.animes = response.data.data;
      } catch (err) {
        this.error = 'An error occurred while searching for animes.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.anime-search {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

input {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  margin-left: 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 16px 0;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  text-align: left;
}

img {
  max-width: 100px;
  display: block;
  margin: 8px 0;
}

.error {
  color: red;
  margin: 16px 0;
}

router-link {
  text-decoration: none;
  color: inherit;
}
</style>
