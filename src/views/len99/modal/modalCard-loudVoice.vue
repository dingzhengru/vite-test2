<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>大聲公</header>
    </div>
    <div class="modal_content">
      <div class="form-wrap">
        <van-form class="form">
          <van-field
            class="input-textarea"
            rows="3"
            autosize
            label=""
            type="textarea"
            placeholder="请输入大聲公要講的話 !"
          />
        </van-form>
      </div>
      <div class="modal_msg">修改暱稱最多14字元, 不能與其他玩家重複</div>

      <van-row justify="center" align="center" gutter="8" class="modal_btn">
        <van-col>
          <van-button type="default" class="btn btn-sm btn_default" @click="CloseSecPopup()">取消</van-button>
        </van-col>
        <van-col>
          <van-button type="default" class="btn btn-sm btn_success" @click="CloseSecPopup()">
            <template #icon> <i class="i i-star"></i></template>
            確認
          </van-button>
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
