<template>
  <div class="topbar">
    <div class="topbar_header">
      <div class="topbar_l">
        <div class="logo" @click="changeRouter('/')">
          <!-- <img :src="'/src/assets/img/g1/'+lang+'/logo.png'" alt="" width="120"> -->
        </div>
        <div class="user">
          <div class="user_pic" @click="setPopupData('len99/modal/modal-card', 'bottom')">
            <img src="@/assets/img/len99/user/userPic.png" alt="" />
          </div>
          <div class="user_txt">
            <div class="name">Linda</div>
            <div class="user_url">我的</div>
            <div class="user_tag" @click="setPopupData('len99/modal/modalCard-vip', 'bottom')">VIP1</div>
          </div>
        </div>
      </div>
      <div class="topbar_r">
        <van-button class="btn btn-xs btn_login" @click="setPopupData('common/modal-login', 'center')">登入</van-button>
        <!-- <div class="money" @click="setPopupData('len99/modal/modal-market','bottom')">                    
                        <i class="i i-star" data-size="sm"></i>
                        <span>1000.00</span>
                        <i class="i i-reflash"></i>
                    </div>
                    <i class="i i-set" @click="setPopupData('len99/modal/modalSet','bottom')" ></i> -->
      </div>
    </div>
    <van-notice-bar
      v-if="topshow == 'lobby'"
      class="noticeBar"
      left-icon="volume-o"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    />
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';

import { lang, MenuShow, setPopupData } from '@/util/public';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {},
  props: {
    topshow: {
      type: String,
      default: '',
    },
  },
  setup() {
    let router = useRouter();
    let changeRouter = (data) => {
      router.push({
        path: '/' + data,
      });
    };
    const showMenu = () => {
      MenuShow.value = true;
    };
    return {
      lang,
      MenuShow,
      setPopupData,
      router,
      changeRouter,
      showMenu,
    };
  },
});
</script>
