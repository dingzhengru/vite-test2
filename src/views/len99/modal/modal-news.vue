<template>
  <div class="modal news">
    <div class="modal_content">
      <img src="@/assets/img/len99/news/news1.png" alt="" />
      <van-checkbox v-model="checked" shape="square" icon-size="16px">今日不再顯示!</van-checkbox>
    </div>
    <div class="modal_footer">
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
    const checked = ref(false);
    return {
      checked,
      ClosePopup,
    };
  },
};
</script>
