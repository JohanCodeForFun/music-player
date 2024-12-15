<script setup lang="ts">
import { useFavoriteStore } from '@/stores/favoriteStore';
const favoriteStore = useFavoriteStore();

console.log(favoriteStore)
</script>

<template>
  <h2>Your Favorite Memes</h2>
    <div class="meme-container" v-if="favoriteStore.favorites.length > 0">
      <div class="card" v-for="favorite in favoriteStore.favorites">
        <h3>{{ favorite.name }}</h3>
        <img 
          :src="favorite.url" 
          :alt="favorite.name" 
          class="responsive-image"
          >
          <button @click="favoriteStore.removeFavorite(favorite.id)">remove</button>
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
</style>
