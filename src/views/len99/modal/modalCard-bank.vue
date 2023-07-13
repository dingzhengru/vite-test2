<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>綁定銀行資料</header>
    </div>
    <div class="modal_content">
      <h2 class="modal_h2">會員帳號:y2779</h2>
      <van-form class="form">
        <select id="" name="" class="sel">
          <option value="請選擇銀行">請選擇銀行</option>
          <option value="銀行1">銀行1</option>
          <option value="銀行2">銀行2</option>
          <option value="銀行3">銀行3</option>
        </select>

        <van-field label="" class="input-text" placeholder="請輸入銀行戶名" />
        <van-field label="" class="input-text" placeholder="請輸入銀行帳戶" />
      </van-form>
      <p class="remind-msg">*提醒:必須填寫真實資料, 提款需僅能使用該銀行帳號進行提款</p>

      <van-row justify="center" align="center" gutter="8" class="modal_btn">
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
  setup(porp, context) {
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
