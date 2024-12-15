import { defineStore } from 'pinia';

export type Meme = {
  id: string;
  name: string;
  url: string;
};

export const useMemeStore = defineStore('memeStore', {
  state: () => ({
    memes: [] as Meme[],
    loading: false,
  }),
  actions: {
    async fetchMemes() {
      this.loading = true;
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        this.memes = data.data?.memes
      } catch (error) {
        console.error('Error fetching memes:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});