<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>歷史紀錄</header>
    </div>
    <div class="modal_content">
      <div class="modal_msg">確認接受此任務</div>

      <van-row justify="center" gutter="8" class="modal_btn">
        <van-col>
          <van-button type="default" class="btn btn-sm btn_default" @click="CloseSecPopup()">取消</van-button>
        </van-col>
        <van-col>
          <van-button type="default" class="btn btn-sm btn_success" @click="CloseSecPopup()">確認</van-button>
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
