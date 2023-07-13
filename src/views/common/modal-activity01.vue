<template>
  <div class="modal activity">
    <div class="modal_tabbar">
      <header>WinPay提現</header>
    </div>
    <div class="modal_content">
      <div class="activity_pic">
        <img :src="'/src/assets/img/len99/' + lang + '/activity/01.png'" alt="" />
      </div>
      <div class="activity_cont">
        <div class="title">[資料編輯]</div>
        <p>
          登錄後點擊個人中心, 會彈出個人資料畫面<br />
          可修改編輯或更新會員資料
        </p>
        <br />
        <div class="title">[修改登錄密碼]</div>
        <p>
          登錄後點擊個人中心, 點選修改密碼輸入當前的登入密碼<br />
          輸入改變的新密碼<br />
          再輸入一次新密碼做確認點及確認修改
        </p>
      </div>
    </div>
    <div class="modal_footer">
      <div class="modal_bottom modal_bottom-bg">
        <van-button type="default" class="btn btn-md btn_default" icon="arrow-left" @click="CloseSecPopup()">
          所有活動
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { CloseSecPopup, lang } from '@/util/public';
export default defineComponent({
  components: {},
  setup(prop, context) {
    return {
      CloseSecPopup,
      lang,
    };
  },
});
</script>
