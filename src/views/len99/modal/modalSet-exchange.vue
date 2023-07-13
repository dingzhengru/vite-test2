<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>兌換紅包碼</header>
    </div>
    <div class="modal_content center">
      <div class="modal_msg">
        <p>請輸入兌換碼</p>
        <van-form class="form">
          <van-field label="" class="input-text" placeholder="輸入兌換碼" />
        </van-form>
        <p class="t-danger">您尚未輸入兌換碼</p>
      </div>

      <van-row justify="center" class="modal_btn">
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
    const checked = ref(true);
    const setList1 = ref(['背景音樂', '背景音效', '聊天室音效', '公頻通知', '私聊通知']);
    const setList2 = ref(['兌換紅包碼', '遊戲介紹', '操作說明', '如何充值']);
    return {
      CloseSecPopup,
      checked,
      setList1,
      setList2,
    };
  },
};
</script>
