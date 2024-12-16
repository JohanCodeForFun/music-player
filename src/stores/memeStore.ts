import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Meme = {
  id: string;
  name: string;
  url: string;
};

export const useMemeStore = defineStore('memeStore', () => {
  let memes = ref<Meme[]>([]);
  let loading = ref(false);

  const fetchMemes = async () => {
    loading.value = true;

    try {
      const response  = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      memes.value = data.data?.memes;
    } catch (error) {
      console.error('Error fetching memes:', error)
    } finally {
      loading.value = false
    }
  }
  
  return {
    memes, 
    loading,
    fetchMemes
  }
})

// export const useMemeStore = defineStore('memeStore', {
//   state: () => ({
//     memes: [] as Meme[],
//     loading: false,
//   }),
//   actions: {
//     async fetchMemes() {
//       this.loading = true;
//       try {
//         const response = await fetch('https://api.imgflip.com/get_memes');
//         const data = await response.json();
//         this.memes = data.data?.memes
//       } catch (error) {
//         console.error('Error fetching memes:', error);
//       } finally {
//         this.loading = false;
//       }
//     },
//   },
// });