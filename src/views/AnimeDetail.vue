<template>
    <div class="anime-detail" v-if="anime">
      <h1>{{ anime.title }}</h1>
      <img :src="anime.images.jpg.image_url" alt="Anime Image" />
      <p><strong>Synopsis:</strong> {{ anime.synopsis }}</p>
      <p><strong>Episodes:</strong> {{ anime.episodes }}</p>
      <p><strong>Status:</strong> {{ anime.status }}</p>
      <p><strong>Score:</strong> {{ anime.score }}</p>
      <p><strong>Rating:</strong> {{ anime.rating }}</p>
      <p><strong>Premiered:</strong> {{ anime.aired.string }}</p>
      <p><strong>Duration:</strong> {{ anime.duration }}</p>
      <button @click="goToCharacters">View Characters</button>
    </div>
    <div v-else-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        anime: null,
        error: '',
        loading: false
      };
    },
    async created() {
      this.loading = true;
      this.error = '';
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${this.id}`);
        this.anime = response.data.data;
      } catch (err) {
        this.error = 'An error occurred while fetching anime details.';
      } finally {
        this.loading = false;
      }
    },
    methods: {
      goToCharacters() {
        this.$router.push({ name: 'AnimeCharacters', params: { id: this.id } });
      }
    }
  };
  </script>
  
  <style scoped>
  .anime-detail {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  img {
    max-width: 300px;
    display: block;
    margin: 16px auto;
  }
  
  .error {
    color: red;
    margin: 16px 0;
  }
  </style>
  