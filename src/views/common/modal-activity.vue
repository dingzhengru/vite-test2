<template>
  <div class="modal activity">
    <van-tabs v-model:active="active" class="tabModal" type="card">
      <van-tab title="活動">
        <div
          v-for="item in activity"
          :key="item"
          class="activity_list"
          @click="setSecPopupData('common/modal-activity01', 'bottom')"
        >
          <div class="activity_pic">
            <img :src="getImageUrl(item.img)" alt="" />
          </div>
        </div>
        <div
          v-for="item in activity"
          :key="item"
          class="activity_list"
          @click="setSecPopupData('common/modal-activity01', 'center')"
        >
          <div class="activity_pic">
            <img :src="getImageUrl(item.img)" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="公告">
        <van-tabs v-model:active="active2" class="tabs_vertical" type="card">
          <van-tab title="公告公告1">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, praesentium, maiores, unde odit
              laboriosam in fugit voluptas accusamus qui dolore delectus sunt. Voluptas modi consectetur excepturi magni
              odio, ipsa accusamus.
            </p>
          </van-tab>
          <van-tab v-for="item in 5" :key="item" :title="'公告公告' + item">
            {{ item }}
          </van-tab>
        </van-tabs>
      </van-tab>
    </van-tabs>

    <div class="modal_footer">
      <div class="modal_bottom modal_bottom-bg">
        <i class="i i-close" @click="ClosePopup()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { lang, setSecPopupData, ClosePopup } from '@/util/public.js';
export default defineComponent({
  components: {},
  setup(prop, context) {
    const active = ref(0);
    const active2 = ref(0);
    const active3 = ref(0);
    const getImageUrl = (name) => {
      return new URL(`../../assets/img/len99/${lang.value}/activity/${name}`, import.meta.url).href;
    };
    const activity = ref([
      {
        title: '【戰神呂布 上線囉】',
        txt: ' 戰神呂布橫掃千軍，連消掉落補位老虎機遊戲。隨機出現倍數符號，贏分可再乘上2至500倍的隨機倍數更能在免費遊戲中，累積疊加贏分的倍數符號，讓贏分衝至雲霄超容易爆大獎的戰神呂布，快來與呂布並肩作戰吧!',
        img: '01.jpg',
      },
      {
        title: '【戰神呂布 上線囉】',
        txt: ' 戰神呂布橫掃千軍，連消掉落補位老虎機遊戲。隨機出現倍數符號，贏分可再乘上2至500倍的隨機倍數更能在免費遊戲中，累積疊加贏分的倍數符號，讓贏分衝至雲霄超容易爆大獎的戰神呂布，快來與呂布並肩作戰吧!',
        img: '02.jpg',
      },
    ]);
    const activity_tab = ref(['品牌活動', '真人消息', '電子消息', '棋牌消息']);
    return {
      lang,
      setSecPopupData,
      ClosePopup,
      active,
      active2,
      active3,
      getImageUrl,
      activity,
      activity_tab,
    };
  },
});
</script>
