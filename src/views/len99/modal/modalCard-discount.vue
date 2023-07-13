<template>
  <div class="modal card">
    <van-tabs v-model:active="active" class="tabModal" type="card" :ellipsis="false">
      <van-tab title="存款優惠申請">
        <table v-for="item in 2" :key="item" class="tb">
          <tbody>
            <tr>
              <th>優惠代碼</th>
              <th>優惠名稱</th>
              <th>紅利%數</th>
              <th>打碼倍數</th>
            </tr>
            <tr>
              <td>1</td>
              <td>---</td>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <th colspan="3">優惠產品</th>
              <th>功能</th>
            </tr>
            <tr>
              <td colspan="3" align="left">RGS電子, RG真人, RGS電子, RG真人, RGS電子, RG真人, RGS電子, RG真人,</td>
              <td>
                <van-button class="btn btn_money">申請</van-button>
              </td>
            </tr>
          </tbody>
        </table>
      </van-tab>
      <van-tab title="其他優惠申請">
        <table class="tb">
          <tbody>
            <tr>
              <th>優惠代碼</th>
              <th>優惠名稱</th>
              <th>紅利%數</th>
              <th>打碼倍數</th>
            </tr>
            <tr>
              <td>1</td>
              <td>---</td>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <th colspan="3">優惠產品</th>
              <th>功能</th>
            </tr>
            <tr>
              <td colspan="3" align="left">RGS電子, RG真人, RGS電子, RG真人, RGS電子, RG真人, RGS電子, RG真人,</td>
              <td>
                <van-button class="btn btn_money">申請</van-button>
              </td>
            </tr>
          </tbody>
        </table>
      </van-tab>
    </van-tabs>
    <div class="modal_footer">
      <div class="modal_bottom modal_bottom-bg">
        <i class="i i-close" @click="CloseSecPopup()"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from 'vue';
import { CloseSecPopup } from '@/util/public';
export default {
  components: {},
  setup(porp, context) {
    return {
      CloseSecPopup,
    };
  },
};
</script>
