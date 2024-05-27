import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MangaView from "../views/MangaView.vue"; // Add the .vue extension
import NotFoundView from "../views/NotFoundView.vue";
import MangaDetails from '../views/MangaDetails.vue';
import AnimeDetail from '../views/AnimeDetail.vue';
import AnimeCharacters from '../views/AnimeCharacters.vue';
import MangaCharacters from '../views/MangaCharacters.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/MangaView",
      name: "Manga",
      component: MangaView,
    },
    {
      path: '/manga/:id',
      name: 'MangaDetails',
      component: MangaDetails
    },
    {
      path: '/anime/:id',
      name: 'AnimeDetail',
      component: AnimeDetail,
      props: true
    },
    {
      path: '/anime/:id/characters',
      name: 'AnimeCharacters',
      component: AnimeCharacters,
      props: true
    },
    {
      path: '/manga/:id/characters',
      name: 'MangaCharacters',
      component: MangaCharacters
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
  ],
});

export default router;
