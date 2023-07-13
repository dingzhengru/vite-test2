<template>
  <van-swipe class="banner" :autoplay="3000" :show-indicators="false">
    <van-swipe-item v-for="(item, index) in banner" :key="index" :class="item.class"> </van-swipe-item>
  </van-swipe>
  <div class="content lobby">
    <div class="btn btn_task" @click="setPopupData('len99/modal/modalTask', 'bottom')">任務</div>
    <van-button class="btn btn_chat" round @click="changeRouter('chat')">
      <template #icon>
        <van-icon name="chat-o" />
      </template>
      <span>聊天室</span>
    </van-button>
    <div class="btn btn_line">分享</div>
    <van-tabs v-model:active="active" class="tabs" type="card">
      <van-tab>
        <template #title>
          <i class="i subnav1"></i>
          <span>全部</span>
        </template>
        <van-row gutter="12">
          <van-col span="16" @click="changeRouter('jocker')">
            <div class="game_list">
              <i class="i i-recommend"></i>
              <img src="https://g1api2.avkrs.com/public/image/006/14008_cn.png" alt="" class="game_list_pic" />
              <div class="game_list_title">皇家體育</div>
              <van-tag class="tag_game tag_game-1" round>Jocker</van-tag>
              <i :class="[fav ? 'active' : '', 'i i-fav']" @click="fav = !fav"></i>
            </div>
          </van-col>
          <van-col span="8">
            <van-row gutter="12">
              <van-col v-for="item in 2" :key="item" span="24">
                <div class="game_list">
                  <i class="i i-new"></i>
                  <img src="https://g1api2.avkrs.com/public/image/006/14008_cn.png" alt="" class="game_list_pic" />
                  <div class="game_list_title">皇家體育</div>
                  <van-tag class="tag_game tag_game-1" round>Jocker</van-tag>
                  <i :class="[fav ? 'active' : '', 'i i-fav']" @click="fav = !fav"></i>
                </div>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row gutter="12">
          <van-col v-for="item in game_list" :key="item" span="8">
            <div class="game_list">
              <i :class="['i-' + item.icon, 'i']"></i>
              <img
                src="https://g1api2.avkrs.com/public/image/001/406ac3c6785870cea4b0a231b8228988.jpg"
                class="game_list_pic"
              />
              <!-- <img :src="getImageUrl(item.img,'game')" class="game_list_pic"/>  -->
              <div class="game_list_title">{{ item.title }}</div>
              <van-tag class="tag_game tag_game-1" round>{{ item.gameType }}</van-tag>
              <i :class="[fav ? 'active' : '', 'i i-fav']" @click="fav = !fav"></i>
            </div>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab>
        <template #title>
          <i class="i subnav2"></i>
          <span>最愛</span>
        </template>
        <van-row gutter="12">
          <van-col v-for="item in game_list" :key="item" span="8">
            <div class="game_list">
              <i :class="['i-' + item.icon, 'i']"></i>
              <img :src="getImageUrl(item.img, 'game')" class="game_list_pic" />
              <div class="game_list_title">{{ item.title }}</div>
              <van-tag class="tag_game tag_game-1" round>{{ item.gameType }}</van-tag>
              <van-tag class="tag_gamelabel" round>
                {{ item.gameLabel }}
                <van-icon name="lock" />
              </van-tag>
              <i :class="[fav ? 'active' : '', 'i i-fav']" @click="fav = !fav"></i>
            </div>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab>
        <template #title>
          <i class="i subnav2"></i>
          <span>真人</span>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <i class="i subnav3"></i>
          <span>電子</span>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <i class="i subnav4"></i>
          <span>捕魚</span>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <i class="i subnav7"></i>
          <span>棋牌</span>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { lang, setPopupData } from '@/util/public';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    let router = useRouter();
    let changeRouter = (data) => {
      router.push({
        path: '/' + data,
      });
    };
    const active = ref(0);
    const fav = ref(false);
    const getImageUrl = (name, file) => {
      return new URL(`../../assets/img/len99/${lang.value}/${file}/${name}`, import.meta.url).href;
    };
    const game_list = ref([
      {
        img: 'lobby_ameba.png',
        gameType: 'JULI',
        gameLabel: 'VIP2',
        title: '皇家體育',
        icon: 'hot',
      },
      {
        img: 'lobby_ameba.png',
        gameType: 'RSG',
        gameLabel: 'VIP2',
        title: '皇家體育',
        icon: 'new',
      },
      {
        img: 'lobby_ameba.png',
        gameType: 'JDB',
        gameLabel: 'VIP2',
        title: '皇家體育',
        icon: 'recommend',
      },
      {
        img: 'lobby_ameba.png',
        gameType: 'PP',
        gameLabel: 'VIP2',
        title: '皇家體育',
        icon: 'hot',
      },
      {
        img: 'lobby_ameba.png',
        gameType: 'FC',
        gameLabel: 'VIP2',
        title: '皇家體育',
        icon: 'new',
      },
      {
        img: 'lobby_ameba.png',
        gameType: 'FC',
        gameLabel: 'VIP2',
        title: '皇家體育',
        icon: 'recommend',
      },
      {
        img: 'lobby_ameba.png',
        gameType: 'FC',
        gameLabel: 'VIP2',
        title: '皇家體育',
        icon: 'recommend',
      },
      {
        img: 'lobby_ameba.png',
        gameType: 'PP',
        gameLabel: 'VIP2',
        title: '皇家體育',
        icon: 'recommend',
      },
    ]);
    const game_list2 = ref([
      {
        img: 'gameEntry-RgJOKER.png',
        gameType: 'JULI',
        gameLabel: 'VIP2',
        title: '皇家體育',
      },
      {
        img: 'gameEntry-RgMETA.png',
        gameType: 'JULI',
        gameLabel: 'VIP2',
        title: '皇家體育',
      },
      {
        img: 'gameEntry-RgMP.png',
        gameType: 'JULI',
        gameLabel: 'VIP2',
        title: '皇家體育',
      },
      {
        img: 'gameEntry-RgRICH88.png',
        gameType: 'JULI',
        gameLabel: 'VIP2',
        title: '皇家體育',
      },
    ]);

    const banner = ref([
      { img: 'banner01.jpg', class: 'banner1' },
      { img: 'banner02.jpg', class: 'banner2' },
    ]);
    return {
      router,
      changeRouter,
      active,
      fav,
      getImageUrl,
      game_list,
      game_list2,
      lang,
      setPopupData,
      banner,
    };
  },
};
</script>
