<template>
  <div class="modal card">
    <div class="modal_tabbar">
      <header>成就</header>
    </div>
    <div class="modal_content">
      <div class="modal_title">
        <span class="title_s1">爆漿成就</span>
      </div>
      <div class="achieve_cont">
        <div class="title">VIP 等級 :</div>
        <div class="txt">1</div>
      </div>
      <div class="modal_title">
        <span class="title_s1">累積投注</span>
      </div>
      <div class="achieve_cont">
        <div class="title">累積投注 :</div>
        <div class="txt">0</div>
      </div>
      <div class="modal_title">
        <span class="title_s1">加入時間</span>
      </div>
      <div class="achieve_cont">
        <div class="title">加入時間 :</div>
        <div class="txt">2023-03-28</div>
      </div>
    </div>
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
