<script setup>
const title = 'Anime';
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-blue">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="@/assets/jikan.png" alt="Logo" height="100" width="100"></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/MangaView">Manga</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-3 p-4 text-white rounded text-center">
      <h1>{{ title }}</h1>
    </div>

    <div class="container mt-3 rounded text-center">
      <img :src="valimage" alt="" width="200">
    </div>
  </div>
</template>

<style scoped>
.custom-bg-blue {
  background-color: #007bff !important; /* Bootstrap primary blue color */
}
</style>
