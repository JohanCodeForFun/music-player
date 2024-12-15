<script setup lang="ts">
  import { onMounted, reactive, ref } from "vue";

  type Meme = {
    id: string;
    name: string;
    url: string;
  };
  let memes = reactive<Meme[]>([]);
  let index = ref<number>(0);

  async function getData() {
    const url = "https://api.imgflip.com/get_memes";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

      memes.splice(0, memes.length, ...json.data.memes); // = json.data
      console.log(memes);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  onMounted(() => {
    getData();
  });
</script>

<template>
  <main>
    <h2>Meme list</h2>
    <div class="meme-container" v-if="memes.length > 0">
      <div>
        <h3>{{ memes[index].name }}</h3>
        <img 
          :src="memes[index].url" 
          :alt="memes[index].name" 
          class="responsive-image"
          >
      </div>
      <div class="button-container">
        <button @click="index > 0 ? index-- : 0">Previous</button>
        <button @click="index++">Next</button>
      </div>
    </div>
    <div v-else>no data</div>
  </main>
</template>

<style scoped>
.meme-container {
  max-width: 100%;
  justify-content: center;
  align-items: center;
}

.responsive-image {
  max-width: 100%;
  height: auto;
}

.button-container {
  /* width: 100%; */
  display: flex;
  justify-content: space-around;
  background-color: red;
  max-width: 200px;
}
</style>