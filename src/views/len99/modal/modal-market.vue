<template>
  <div class="modal market">
    <div class="modal_tabbar">
      <header>商城</header>
    </div>
    <div class="modal_content">
      <div class="modal_link">
        <van-row justify="space-around" gutter="8">
          <van-col span="10">
            <van-button
              class="btn btn_primary"
              block
              @click="setSecPopupData('len99/modal/modalMarket-deposit', 'bottom')"
            >
              申請存款
            </van-button>
          </van-col>
          <van-col span="10">
            <van-button
              class="btn btn_primary"
              block
              @click="setSecPopupData('len99/modal/modalMarket-record', 'bottom')"
            >
              存款紀錄
            </van-button>
          </van-col>
        </van-row>
        <van-button
          type="default"
          class="btn btn_share"
          @click="setSecPopupData('len99/modal/modalMarket-storedValue', 'bottom')"
        >
          儲值推薦
        </van-button>
      </div>

      <!-- <div class="modal_title">
            <span class="title_s1">提現</span>
        </div> -->
      <div class="modal_title">
        <span class="title_s2">G7Pay</span>
      </div>
      <van-row gutter="8" class="mt-8">
        <van-col v-for="item in 4" :key="item" class="mv-12" span="8">
          <div class="market_list" @click="setSecPopupData('len99/modal/modalMarket-storedValue', 'bottom')">
            <van-tag class="tag_money" round>贈 120</van-tag>
            <div class="market_title">G8Pay</div>
            <div class="market_money">
              <i class="i i-star"></i>
              <span>120</span>
            </div>
            <van-button class="btn btn_money">$100</van-button>
          </div>
        </van-col>
      </van-row>
      <div class="modal_title">
        <span class="title_s2">G7Pay</span>
      </div>
      <van-row gutter="8" class="mt-8">
        <van-col v-for="item in 4" :key="item" class="mv-12" span="8">
          <div class="market_list">
            <van-tag class="tag_money" round>贈 120</van-tag>
            <div class="market_title">G8Pay</div>
            <div class="market_money">
              <i class="i i-star"></i>
              <span>120</span>
            </div>
            <van-button class="btn btn_money">$100</van-button>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="modal_footer">
      <div class="modal_result">
        <div class="modal_money">
          <i class="i i-star" data-size="md"></i>
          <div class="modal_money_txt">
            <p class="t-brown">當前點數</p>
            <p class="t-yellow">1000.0000點</p>
          </div>
          <div></div>
        </div>
      </div>
      <div class="modal_bottom modal_bottom-bg">
        <i class="i i-close" @click="ClosePopup()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { setSecPopupData, ClosePopup } from '@/util/public';
export default {
  components: {},
  setup(prop, context) {
    return {
      setSecPopupData,
      ClosePopup,
    };
  },
};
</script>
