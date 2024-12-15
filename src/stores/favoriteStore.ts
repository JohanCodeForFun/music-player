import { defineStore } from "pinia";
import { type Meme } from "./memeStore";

export const useFavoriteStore = defineStore('favoriteStore', {
  state: () => ({
    favorites: [] as Meme[]
  }),
  // actions: () => {
  //   addFavorite = ()
  // }
  // getters
})