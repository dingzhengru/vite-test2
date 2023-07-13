<template>
  <div class="modal modal-sm login">
    <div class="modal_tabbar">
      <header>登錄</header>
    </div>
    <div class="modal_content">
      <van-form class="form_vertical form">
        <van-field v-model="account" class="input-text" label="帳號" name="帳號" placeholder="請輸入帳號"> </van-field>
        <van-field v-model="password" class="input-text" label="密碼" name="密码" placeholder="請輸入密碼">
          <template #right-icon>
            <van-icon :name="show ? 'eye-o' : 'closed-eye'" @click="show = !show" />
          </template>
        </van-field>
        <div class="form_btn">
          <van-row justify="center">
            <van-col :span="12">
              <van-button round class="btn btn_success" block native-type="submit"> 登入 </van-button>
            </van-col>
          </van-row>
        </div>
      </van-form>
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
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    const account = ref('');
    const password = ref('');
    const show = ref(true);
    return {
      setSecPopupData,
      ClosePopup,
      onSubmit,
      account,
      password,
      show,
    };
  },
});
</script>
