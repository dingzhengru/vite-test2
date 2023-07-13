<template>
  <van-popup v-model:show="MenuShow" position="right" class="popup sidebar-wrap" overlay-class="sidebar-mask">
    <div class="sidebar">
      <div class="modal_tabbar">
        <div class="logo" @click="changeRouter('')">
          <img :src="'/src/assets/img/g1/' + lang + '/logo-sm.png'" alt="" width="75" />
        </div>
      </div>
      <div class="modal_content">
        <van-cell-group inset>
          <van-cell
            v-for="(item, index) in sidebarlist"
            :key="index"
            :title-class="['sidebar_title']"
            class="sidebar_list"
            :class="['sidebar_' + item.class]"
            @click="setG1Component(item.link)"
          >
            <template #icon>
              <i :class="['i', 'i-' + item.icon]"></i>
            </template>
            <template #title>
              <span>{{ item.title }}</span>
            </template>
          </van-cell>

          <van-cell value-class="sidebar_value" class="sidebar_list sidebar_info">
            <template #icon>
              <i class="i i-info"></i>
            </template>
            <template #title>
              <div class="sidebar_title" @click="siderbarBtn">
                <span>資訊中心</span>
                <i class="i i-arrow"></i>
              </div>
            </template>
            <Transition name="slide-fade">
              <div v-if="siderbar">
                <ul>
                  <li @click="setG1Component('g1/casino')">賭場介紹</li>
                  <li>Royal Gclub News</li>
                  <li>2020 Royal Gclub News</li>
                </ul>
              </div>
            </Transition>
          </van-cell>

          <van-cell value-class="sidebar_value" class="sidebar_list sidebar_lang">
            <template #icon>
              <i class="i i-lang">
                <img src="@/assets/img/g1/flag/flag-zhcn.png" width="16" />
              </i>
            </template>
            <template #title>
              <div class="sidebar_title" @click="siderbarBtn2">
                <span>簡體中文</span>
                <i class="i i-arrow"></i>
              </div>
            </template>

            <Transition name="slide-fade">
              <div v-if="siderbar2">
                <ul>
                  <li v-for="item in langlist" :key="item">
                    <img :src="getImageUrl(item.img)" width="16" />
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </Transition>
          </van-cell>
        </van-cell-group>
      </div>

      <van-row justify="center" align="center" gutter="8" class="modal_btn">
        <van-col span="14">
          <van-button class="btn btn-md btn_logout">註銷</van-button>
        </van-col>
      </van-row>
    </div>
  </van-popup>
</template>
<script>
import { lang, MenuShow, setG1Component } from '@/util/public';
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {},
  setup(prop, context) {
    let router = useRouter();
    let changeRouter = (data) => {
      router.push({
        path: '/' + data,
      });
    };
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const checked = ref(true);
    const setList1 = ref(['背景音樂', '背景音效', '聊天室音效', '公頻通知', '私聊通知']);
    const setList2 = ref(['兌換紅包碼', '遊戲介紹', '操作說明', '如何充值']);
    const sidebarlist = ref([
      { title: '會員中心', file: '', link: '', class: 'member', icon: 'member' },
      { title: '活動消息', file: 'common', link: 'common/modal-activity', class: 'activity', icon: 'activity' },
      { title: '備用網址', file: '', link: '', class: 'backup', icon: 'backup' },
      { title: 'APP下載', file: '', link: '', class: 'androidapk', icon: 'androidapk' },
    ]);

    const siderbar = ref();
    const siderbarBtn = (key) => {
      siderbar.value = !siderbar.value;
    };
    const siderbar2 = ref();
    const siderbarBtn2 = (key) => {
      siderbar2.value = !siderbar2.value;
    };
    const getImageUrl = (name) => {
      return new URL(`../assets/img/len99/flag/${name}`, import.meta.url).href;
    };
    const langlist = ref([
      { title: '简体中文', img: 'flag-zhcn.png' },
      { title: '繁體中文', img: 'flag-zhtw.png' },
      { title: 'ENGLISH', img: 'flag-en.png' },
      { title: 'ภาษาไทย', img: 'flag-thai.png' },
      { title: 'Tiếng việt', img: 'flag-vn.png' },
      { title: '한국어', img: 'flag-kr.png' },
      { title: '日本語', img: 'flag-jp.png' },
      { title: 'မန္မာ', img: 'flag-mm.png' },
    ]);
    return {
      changeRouter,
      show,
      showPopup,
      checked,
      setList1,
      setList2,
      lang,
      sidebarlist,
      siderbar,
      siderbarBtn,
      siderbar2,
      siderbarBtn2,
      getImageUrl,
      langlist,
      MenuShow,
      setG1Component,
    };
  },
});
</script>
