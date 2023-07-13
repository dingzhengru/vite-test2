<template>
  <div class="modal market">
    <div class="modal_tabbar">
      <header>存款紀錄</header>
    </div>
    <div class="modal_content">
      <div class="modal_title"><span class="title_s1">存款紀錄</span></div>
      <div class="tb-wrap">
        <table class="tb tb-vip">
          <thead>
            <tr>
              <th>訂單號</th>
              <th>金額</th>
              <th>狀態</th>
              <th>時間</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aa2320652320365848</td>
              <td>120.0000</td>
              <td>代支付</td>
              <td>2023-04-13<br />09:22:07</td>
            </tr>
            <tr>
              <td>Aa2320652320365848</td>
              <td>120.0000</td>
              <td>代支付</td>
              <td>2023-04-13<br />09:22:07</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal_footer">
      <div class="modal_bottom modal_bottom-bg">
        <van-row justify="center" align="center" gutter="8">
          <van-col><i class="i i-close" @click="CloseSecPopup()"></i> </van-col>
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
