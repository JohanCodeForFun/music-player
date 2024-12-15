<script setup lang="ts">
  import { ref } from "vue";
  import { useMemeStore } from "@/stores/memeStore";
  import { useFavoriteStore } from "@/stores/favoriteStore";
  
  const favoriteStore = useFavoriteStore();
  const memeStore = useMemeStore();
  memeStore.fetchMemes();

  let index = ref<number>(0);
</script>

<template>
  <h2>Meme list</h2>
    <div class="meme-container" v-if="memeStore.memes.length > 0">
      <div class="card">
        <h3>{{ memeStore.memes[index].name }}</h3>
        <img 
          :src="memeStore.memes[index].url" 
          :alt="memeStore.memes[index].name" 
          class="responsive-image"
          >
      </div>
      <div class="button-container">
        <button @click="index > 0 ? index-- : 0">Previous</button>
        <button @click="favoriteStore.addFavorite(memeStore.memes[index])">Save meme</button>
        <button @click="index++">Next</button>
      </div>
    </div>
    <div v-else>no data</div>
</template>

<style scoped>
.meme-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  border: 1px solid #ccc;
  border: 1rem;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
}

.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.button-container {
  display: flex;
  justify-content: space-around;
  max-width: 300px;
  width: 100%;
}
</style>