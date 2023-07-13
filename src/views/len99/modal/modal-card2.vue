<template>
  <div class="modal card">
    <div class="modal_tabbar">
      <header>WinPay提現</header>
    </div>
    <div class="modal_content">
      <van-form class="form">
        <van-cell-group class="form_section">
          <van-cell title="支付方式" value="WinPay"></van-cell>
          <van-cell title="提現金額">
            <template #value>
              <van-field label="" class="input-text" model-value="sss" />
            </template>
          </van-cell>
        </van-cell-group>
        <van-cell-group class="form_section">
          <van-cell title="銀行">
            <template #value>
              <van-field label="" class="input-text" />
            </template>
          </van-cell>
          <van-cell title="銀行戶名">
            <template #value>
              <van-field label="" class="input-text" />
            </template>
          </van-cell>
          <van-cell title="銀行帳號">
            <template #value>
              <van-field label="" class="input-text" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-form>
      <van-row justify="center" class="mv-10">
        <van-col span="8">
          <van-button type="default" class="btn btn-sm btn_default">馬上提現 </van-button>
        </van-col>
      </van-row>
    </div>

    <div class="modal_footer">
      <div class="modal_result">
        <div class="modal_money">
          <i class="i i-star" data-size="md"></i>
          <div class="modal_money_txt">
            <p class="t-brown">當前點數</p>
            <p class="t-yellow">1000.0000點</p>
          </div>
          <div></div>
        </div>
      </div>
      <div class="modal_bottom modal_bottom-bg">
        <i class="i i-close" @click="ClosePopup()"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from 'vue';
import { ClosePopup } from '@/util/public';
export default {
  components: {},
  setup(prop, context) {
    return {
      ClosePopup,
    };
  },
};
</script>
