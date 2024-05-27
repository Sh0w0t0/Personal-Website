<template>
    <div>
      <h1>Characters of {{ mangaTitle }}</h1>
      <ul v-if="characters.length">
        <li v-for="character in characters" :key="character.character.mal_id">
          <img :src="character.character.images.jpg.image_url" alt="Character Image" width="50">
          {{ character.character.name }}
        </li>
      </ul>
      <router-link :to="`/manga/${$route.params.id}`">Back to Details</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        characters: [],
        mangaTitle: ''
      };
    },
    created() {
      this.fetchMangaCharacters();
    },
    methods: {
      fetchMangaCharacters() {
        const mangaId = this.$route.params.id;
        axios.get(`https://api.jikan.moe/v4/manga/${mangaId}/characters`)
          .then(response => {
            this.characters = response.data.data;
            this.mangaTitle = response.data.data[0]?.manga?.title || 'this manga';
          })
          .catch(error => {
            console.error("There was an error fetching the manga characters!", error);
          });
      }
    }
  };
  </script>
  
  <style>
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
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: #42b983;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  