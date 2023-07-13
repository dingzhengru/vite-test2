<template>
  <div>
    <img :src="imageUrl" class="logo vue" alt="Vue logo" @click="changeImage" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script>
import { computed } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue';
export default {
  components: {
    HelloWorld,
  },
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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
