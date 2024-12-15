<script setup lang="ts">
import { useFavoriteStore } from '@/stores/favoriteStore';
const favoriteStore = useFavoriteStore();
</script>

<template>
  <div>
    favorites ({{ favoriteStore.favoritesCount }})
  </div>
</template>