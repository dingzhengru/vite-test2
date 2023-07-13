<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>修改個人簽名</header>
    </div>
    <div class="modal_content">
      <div class="form-wrap">
        <van-form class="form">
          <van-field class="input-textarea" rows="3" autosize label="" type="textarea" model-value="text" />
        </van-form>
      </div>

      <van-row justify="center" align="center" gutter="8" class="modal_btn">
        <van-col>
          <van-button class="btn btn-sm btn_default" type="default" @click="CloseSecPopup()">取消</van-button>
        </van-col>
        <van-col>
          <van-button class="btn btn-sm btn_success" type="default" @click="CloseSecPopup()">確認</van-button>
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
