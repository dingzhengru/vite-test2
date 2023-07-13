<template>
  <div class="modal market">
    <div class="modal_tabbar">
      <header>G7Pay</header>
    </div>
    <div class="modal_content">
      <van-form class="form">
        <van-cell-group class="form_section">
          <van-cell title="支付方式" value="掃描/網關" value-class="form_section_value" />
          <van-cell title="支付金額" value="100" value-class="form_section_value" />
          <van-cell title="轉換點數" value="120" value-class="form_section_value" />
        </van-cell-group>
      </van-form>
      <van-row justify="center" class="mv-10">
        <van-col span="8">
          <van-button type="default" class="btn btn-sm btn_default">馬上支付 </van-button>
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
        <van-row justify="center" align="center" gutter="8">
          <van-col>
            <van-button class="btn btn-sm btn_default" icon="arrow-left" @click="CloseSecPopup()">上一步 </van-button>
          </van-col>
          <van-col>
            <i
              class="i i-close"
              @click="
                ClosePopup();
                CloseSecPopup();
              "
            ></i>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { CloseSecPopup, ClosePopup } from '@/util/public';
export default {
  setup(prop, context) {
    return {
      CloseSecPopup,
      ClosePopup,
    };
  },
};
</script>
