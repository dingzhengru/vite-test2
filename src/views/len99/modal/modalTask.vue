<template>
  <div class="modal task">
    <van-tabs v-model:active="active" class="tabModal" type="card">
      <van-tab title="初級任務">
        <van-row gutter="8" justify="space-around">
          <van-col span="12">
            <van-button
              class="btn_default btn btn-md m-auto"
              @click="setSecPopupData('len99/modal/modalTask-history', 'bottom')"
            >
              歷史紀錄
            </van-button>
          </van-col>
          <van-col span="12">
            <van-button
              class="btn_second btn btn-md m-auto"
              icon="info"
              @click="setSecPopupData('len99/modal/modalTask-info', 'center')"
            >
              任務說明
            </van-button>
          </van-col>
          <van-col span="12" class="mv-12">
            <van-button class="btn btn_primary" block>選擇賞金任務</van-button>
          </van-col>
        </van-row>
        <p class="center">點擊"接受任務"按鈕後, 即開始賞金任務</p>
        <div class="task_list">
          <div class="task_list_mask">
            <p>任務進行中,接受間:(03:13 12:12:49)</p>
          </div>
          <div class="task_list_txt">
            <p>
              連續<span class="t-yellow">3</span>天, 每天累積投注<br />
              <span class="t-yellow">30,000</span>, 可獲得獎金 <span class="t-yellow">30,000</span> 點
            </p>
            <van-button class="btn btn-md btn_success" icon-position="right" icon="arrow">接受任務</van-button>
          </div>
          <div class="task_money">
            <span>3,000</span>
          </div>
        </div>
        <div class="task_list">
          <div class="task_list_mask">
            <p>您已接受過此任務</p>
          </div>
          <div class="task_list_txt">
            <p>
              連續<span class="t-yellow">3</span>天, 每天累積投注<br />
              <span class="t-yellow">30,000</span>, 可獲得獎金 <span class="t-yellow">30,000</span> 點
            </p>
            <van-button class="btn btn-md btn_success" icon-position="right" icon="arrow">接受任務</van-button>
          </div>
          <div class="task_money">
            <span>3,000</span>
          </div>
        </div>
      </van-tab>
      <van-tab title="高級任務">
        <van-row gutter="8" justify="space-around">
          <van-col span="12">
            <van-button
              class="btn_default btn btn-md m-auto"
              @click="setSecPopupData('len99/modal/modalTask-history', 'bottom')"
            >
              歷史紀錄
            </van-button>
          </van-col>
          <van-col span="12">
            <van-button
              class="btn_second btn btn-md m-auto"
              icon="info"
              @click="setSecPopupData('len99/modal/modalTask-info', 'center')"
            >
              任務說明
            </van-button>
          </van-col>
          <van-col span="12" class="mv-12">
            <van-button class="btn btn_primary" block>選擇賞金任務</van-button>
          </van-col>
        </van-row>
        <p class="center">點擊"接受任務"按鈕後, 即開始賞金任務</p>
        <div class="task_list">
          <div class="task_list_mask">
            <p>此任務限制等級VIP4</p>
          </div>
          <div class="task_list_txt">
            <p>
              連續<span class="t-yellow">3</span>天, 每天累積投注<br />
              <span class="t-yellow">30,000</span>, 可獲得獎金 <span class="t-yellow">30,000</span> 點
            </p>
            <van-button
              class="btn btn-md btn_success"
              icon-position="right"
              icon="arrow"
              @click="setSecPopupData('len99/modal/modalTask-check', 'center')"
            >
              接受任務
            </van-button>
          </div>
          <div class="task_money">
            <span>3,000</span>
          </div>
        </div>
        <div v-for="item in 5" :key="item" class="task_list">
          <div class="task_list_txt">
            <p>
              連續<span class="t-yellow">3</span>天, 每天累積投注<br />
              <span class="t-yellow">30,000</span>, 可獲得獎金 <span class="t-yellow">30,000</span> 點
            </p>
            <van-button
              class="btn btn-md btn_success"
              icon-position="right"
              icon="arrow"
              @click="setSecPopupData('len99/modal/modalTask-check', 'center')"
            >
              接受任務
            </van-button>
          </div>
          <div class="task_money">
            <span>3,000</span>
          </div>
        </div>
        <div class="task_list">
          <div class="task_list_mask">
            <p>此任務限制等級VIP4</p>
          </div>
          <div class="task_list_txt">
            <p>
              連續<span class="t-yellow">3</span>天, 每天累積投注<br />
              <span class="t-yellow">30,000</span>, 可獲得獎金 <span class="t-yellow">30,000</span> 點
            </p>
            <van-button
              class="btn btn-md btn_success"
              icon-position="right"
              icon="arrow"
              @click="setSecPopupData('len99/modal/modalTask-check', 'center')"
            >
              接受任務
            </van-button>
          </div>
          <div class="task_money">
            <span>3,000</span>
          </div>
        </div>
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
import { setSecPopupData, ClosePopup } from '@/util/public';
import { ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {},
  setup(prop, context) {
    let router = useRouter();
    let changeRouter = (data) => {
      router.push({
        path: '/' + data,
      });
    };
    return {
      setSecPopupData,
      ClosePopup,
      router,
      changeRouter,
    };
  },
};
</script>
