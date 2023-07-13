<template>
  <h1>Home</h1>
  <h2>vue-i18n</h2>
  {{ $t('hi') }}
  <component :is="comp" @click="changeComp" />
</template>

<script>
import { computed, defineAsyncComponent, ref } from 'vue';

export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const compName = ref('CompTest1');
    const comp = computed(() => {
      return defineAsyncComponent(() => import(`../components/${compName.value}.vue`));
      // return () => import(`../components/${compName.value}.vue`);
    });
    const changeComp = () => {
      compName.value = compName.value === 'CompTest1' ? 'CompTest2' : 'CompTest1';
    };

    return {
      comp,
      changeComp,
    };
  },
};
</script>
