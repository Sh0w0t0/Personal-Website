<template>
    <div v-if="manga">
      <h1>{{ manga.title }}</h1>
      <img :src="manga.images.jpg.image_url" alt="Manga Cover" width="100">
      <p>{{ manga.synopsis }}</p>
      <p><strong>Chapters:</strong> {{ manga.chapters }}</p>
      <p><strong>Volumes:</strong> {{ manga.volumes }}</p>
      <p><strong>Score:</strong> {{ manga.score }}</p>
      <router-link :to="`/manga/${manga.mal_id}/characters`">View Characters</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        manga: null
      };
    },
    created() {
      this.fetchMangaDetails();
    },
    methods: {
      fetchMangaDetails() {
        const mangaId = this.$route.params.id;
        axios.get(`https://api.jikan.moe/v4/manga/${mangaId}`)
          .then(response => {
            this.manga = response.data.data;
          })
          .catch(error => {
            console.error("There was an error fetching the manga details!", error);
          });
      }
    }
  };
  </script>
  
  <style>
  /* Add some basic styling */
  img {
    display: block;
    margin-bottom: 20px;
  }
  
  h1 {
    margin-top: 20px;
  }
  
  p {
    margin: 10px 0;
  }
  
  router-link {
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: #42b983;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  