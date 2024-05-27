<template>
  <div>
    <h1>Manga Search</h1>
    <input type="text" v-model="query" @input="searchManga" placeholder="Search for a manga...">
    <ul>
      <li v-for="manga in mangas" :key="manga.mal_id">
        <img :src="manga.images.jpg.image_url" alt="Manga Cover" width="50">
        {{ manga.title }}
        <router-link :to="`/manga/${manga.mal_id}`">Details</router-link>
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
      mangas: []
    };
  },
  methods: {
    searchManga() {
      if (this.query.length > 2) {
        axios.get(`https://api.jikan.moe/v4/manga?q=${this.query}`)
          .then(response => {
            this.mangas = response.data.data;
          })
          .catch(error => {
            console.error("There was an error fetching the manga data!", error);
          });
      }
    }
  }
};
</script>

<style>
/* Add some basic styling */
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

img {
  margin-right: 10px;
}

router-link {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: #42b983;
}

router-link:hover {
  text-decoration: underline;
}
</style>
