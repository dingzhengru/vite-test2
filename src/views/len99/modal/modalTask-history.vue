<template>
  <div class="modal task">
    <div class="modal_tabbar">
      <header>歷史紀錄</header>
    </div>
    <div class="modal_content">
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
    </div>
    <div class="modal_bottom">
      <van-button type="default" class="btn btn-sm btn_success m-auto" @click="CloseSecPopup()">回上頁</van-button>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from 'vue';
import { CloseSecPopup } from '@/util/public';
export default {
  components: {},
  setup(prop, context) {
    return {
      CloseSecPopup,
    };
  },
};
</script>
