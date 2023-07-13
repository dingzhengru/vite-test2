<template>
  <div class="modal modal-sm">
    <div class="modal_tabbar">
      <header>修改密碼</header>
    </div>
    <div class="modal_content center">
      <div class="modal_msg">
        <van-form class="form form_vertical">
          <van-cell-group inset>
            <van-field
              v-model="password2"
              class="input-text"
              type="password2"
              name="新密码"
              label="新密码"
              placeholder="請輸入新密碼"
            />
            <van-field
              v-model="checkpassword"
              class="input-text"
              type="checkpassword"
              name="密碼確認"
              label="密碼確認"
              placeholder="再次確認新密碼"
            />
          </van-cell-group>
        </van-form>
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
    const password = ref('');
    const password2 = ref('');
    const checkpassword = ref('');
    return {
      CloseSecPopup,
      checked,
      setList1,
      setList2,
      password,
      password2,
      checkpassword,
    };
  },
};
</script>
