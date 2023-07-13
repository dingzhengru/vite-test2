<template>
  <div class="modal card">
    <van-tabs v-model:active="active" class="tabModal" type="card">
      <van-tab title="VIP等級">
        <div class="modal_header">VIP1 有效期限 <span>永久</span></div>

        <van-row justify="space-between" align="center" class="vip_ad">
          <van-col>
            <i class="i i-level" data-level="1"></i>
          </van-col>
          <van-col span="14" class="vip_ad_txt">
            <p>綁定門號即可升級為VIP2</p>
            <van-space :size="3">
              <van-button class="btn btn-sm btn_success">綁定門號</van-button>
              <van-button class="btn btn-sm btn_primary">首次儲值</van-button>
            </van-space>
          </van-col>
          <van-col>
            <i class="i i-level" data-level="2"></i>
          </van-col>
        </van-row>

        <div class="modal_title"><span class="title_s1">VIP等級表</span></div>
        <div class="tb-wrap">
          <table class="tb tb-vip">
            <tbody>
              <tr>
                <th>項目</th>
                <td class="active">
                  <i class="i i-level" data-level="1"></i>
                  <div>VIP1</div>
                </td>
                <td v-for="item in 5" :key="item" width="20%">
                  <i class="i i-level" :data-level="n + 1"></i>
                  <div>VIP{{ item + 1 }}</div>
                </td>
              </tr>
              <tr>
                <th>一個月內<br />累積儲值</th>
                <td class="active">註冊成功</td>
                <td>身分驗證</td>
                <td>首儲</td>
                <td>1,000</td>
                <td>1,000</td>
                <td>1,000</td>
              </tr>
              <tr>
                <th>一個月內<br />累積投注</th>
                <td class="active">50</td>
                <td>--</td>
                <td>--</td>
                <td>1萬<br />點數</td>
                <td>1萬<br />點數</td>
                <td>1萬<br />點數</td>
              </tr>
              <tr>
                <th>會員期限</th>
                <td class="active">永久</td>
                <td>永久</td>
                <td>永久</td>
                <td>永久</td>
                <td>永久</td>
                <td>永久</td>
              </tr>
              <tr>
                <th>發財金</th>
                <td class="active">0點數</td>
                <td>0點數</td>
                <td>0點數</td>
                <td>0點數</td>
                <td>0點數</td>
                <td>0點數</td>
              </tr>
            </tbody>
          </table>
        </div>
      </van-tab>
      <van-tab title="等級說明">
        <div class="modal_title"><span class="title_s1">VIP等級相關資格</span></div>
        <ol class="list">
          <li>綁定門號升級為VIP2,開通接受禮物的功能。</li>
          <li>首次儲值升級為VIP3,開通贈送禮物的功能。</li>
        </ol>
        <div class="modal_title"><span class="title_s1">VIP等級有效期限</span></div>
        <ol class="list">
          <li>VIP資格根據當月內的「累積儲值」或「累積投注額」,取兩者中最高判定。</li>
          <li>「累積儲值」或「累積投注額」若達成下一階段會員資格門檻即立即生效。</li>
          <li>系統將於會員資格門檻生效時,重新判斷會員資格門檻到期日。</li>
          <li>升級為VIP3才會開始累積投注額。</li>
          <li>VIP3資格永久有效。</li>
        </ol>
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
