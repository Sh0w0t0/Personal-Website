<template>
    <div class="anime-characters" v-if="characters.length > 0">
      <h1>Characters</h1>
      <ul>
        <li v-for="character in characters" :key="character.character.mal_id">
          <img :src="character.character.images.jpg.image_url" alt="Character Image" />
          <p>{{ character.character.name }}</p>
        </li>
      </ul>
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
        characters: [],
        error: '',
        loading: false
      };
    },
    async created() {
      this.loading = true;
      this.error = '';
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${this.id}/characters`);
        this.characters = response.data.data;
      } catch (err) {
        this.error = 'An error occurred while fetching characters.';
      } finally {
        this.loading = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .anime-characters {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
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
  </style>
  