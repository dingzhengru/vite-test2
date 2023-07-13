<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>分享名片</header>
    </div>
    <div class="modal_content">
      <div class="modal_msg">
        <i class="i i-line"></i>
        <p>分享至Line</p>
      </div>
      <van-row justify="center" align="center" gutter="8" class="modal_btn">
        <van-col>
          <van-button class="btn btn-sm btn_default" type="default" @click="CloseSecPopup()">取消</van-button>
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
