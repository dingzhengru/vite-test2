<template>
  <img :src="imageUrl" class="logo vue" alt="Vue logo" @click="changeImage" />
  <nav>
    <router-link to="/"> Home </router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';
export default {
  setup() {
    const imageName = ref('vue');
    const imageUrl = computed(() => {
      //* dynamic URL & relative path
      const url = new URL(`./assets/${imageName.value}.svg`, import.meta.url).href;
      //* 此問題還未解決，可參考 https://github.com/vitejs/vite/issues/10597
      // const url = new URL(`@/assets/${name}.svg`, import.meta.url).href;

      //* dynamic URL & absolute path
      // const url = new URL(`@/assets/vue.svg`, import.meta.url).href;
      return url;
    });

    const changeImage = () => {
      imageName.value = imageName.value === 'vue' ? 'vite' : 'vue';
    };

    return {
      imageUrl,
      changeImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo {
  &::hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
