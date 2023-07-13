<template>
  <!-- menu -->
  <van-tabbar v-model="active" class="footerBar">
    <van-tabbar-item v-for="item in tabbar" :key="item" @click="setPopupData(item.link, 'bottom')">
      <template #icon>
        <i :class="[item.iconClass, 'i']"></i>
      </template>
      {{ item.title }}
    </van-tabbar-item>
    <van-tabbar-item @click="setPopupData('common/modal-server', 'center')">
      <template #icon>
        <i class="i nav5"></i>
      </template>
      客服
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { MenuShow, setPopupData, setG1Component } from '@/util/public';
export default defineComponent({
  setup() {
    var router = useRouter();
    var changeRouter = (data) => {
      router.push({
        path: '/' + data,
      });
    };
    const active = ref(0);
    const tabbar = ref([
      {
        title: '活動',
        iconClass: 'nav1',
        link: 'common/modal-activity',
        file: 'common',
      },
      {
        title: '排行榜',
        iconClass: 'nav2',
        link: 'len99/modal/modal-rank',
        file: 'len99',
      },
      {
        title: '商城',
        iconClass: 'nav3',
        link: 'len99/modal/modal-market',
        file: 'len99',
      },
      {
        title: '提現',
        iconClass: 'nav4',
        link: 'len99/modal/modal-card',
        file: 'len99',
      },
    ]);

    const showMenu = () => {
      MenuShow.value = true;
    };
    return {
      router,
      changeRouter,
      MenuShow,
      showMenu,
      setPopupData,
      active,
      tabbar,
      setG1Component,
    };
  },
});
</script>
