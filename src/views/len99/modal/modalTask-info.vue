<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>任務說明</header>
    </div>
    <div class="modal_content">
      <ol class="list">
        <li>每人同時只能參加一次挑戰任務</li>
        <li>若中途無完成則屬失敗</li>
        <li>初級任務免繳參加費</li>
        <li>高級任務需繳交參加費(挑戰項目金額十分之一)</li>
        <li>任務開放報名時間為:美日00:00:00 ~ 21:00</li>
        <li>每日以24:00為結算時間</li>
      </ol>

      <van-row justify="center" align="center" class="modal_btn">
        <van-col>
          <van-button type="default" class="btn btn-sm btn_success" @click="CloseSecPopup()">回上頁</van-button>
        </van-col>
      </van-row>
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
