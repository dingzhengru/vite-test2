<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>溫馨提醒</header>
    </div>
    <div class="modal_content">
      <div class="modal_msg">是否離開大廳, 前往客服</div>
      <van-row justify="center" align="center" gutter="8" class="modal_btn">
        <van-col span="12">
          <van-button class="btn btn_default" type="default" block @click="ClosePopup()">取消</van-button>
        </van-col>
        <van-col :span="12">
          <van-button class="btn btn_success" type="default" block @click="ClosePopup()">確認</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { setSecPopupData, ClosePopup } from '@/util/public';
export default defineComponent({
  components: {},
  emits: ['closePopup2'],
  setup(prop, context) {
    const checked = ref(true);
    const setList1 = ref(['背景音樂', '背景音效', '聊天室音效', '公頻通知', '私聊通知']);
    const setList2 = ref(['兌換紅包碼', '遊戲介紹', '操作說明', '如何充值']);
    return {
      setSecPopupData,
      ClosePopup,
      checked,
      setList1,
      setList2,
    };
  },
});
</script>
