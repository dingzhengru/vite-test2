<template>
  <headerArea topshow="lobby" />
  <len99lobby />
  <footArea />
  <van-popup v-model:show="showPopupData" :position="popupPosition" class="popup" closeable>
    <component :is="windowComponent" />
  </van-popup>
  <van-popup v-model:show="showSecPopupData" :position="SecpopupPosition" class="popup" closeable>
    <component :is="SecwindowComponent" />
  </van-popup>
  <menuArea />
</template>
<script>
import {
  showPopupData,
  popupPosition,
  windowComponent,
  showSecPopupData,
  SecpopupPosition,
  SecwindowComponent,
} from '@/util/public';

import headerArea from '@/components/header.vue';
import footArea from '@/components/footer.vue';
import menuArea from '@/components/menu.vue';
import len99lobby from '@/views/len99/lobby.vue';
export default {
  components: {
    headerArea,
    footArea,
    menuArea,
    len99lobby,
  },
  setup() {
    return {
      showPopupData,
      popupPosition,
      windowComponent,
      showSecPopupData,
      SecpopupPosition,
      SecwindowComponent,
    };
  },
};
</script>
