<template>
  <div class="modal set">
    <div class="modal_tabbar">
      <header>設定</header>
    </div>
    <div class="modal_content">
      <van-cell-group class="set_list">
        <van-cell v-for="item in setList1" :key="item" :title="item" value="内容">
          <template #value>
            <van-switch v-model="checked" />
          </template>
        </van-cell>
        <van-cell
          v-for="item in setList2"
          :key="item"
          :title="item.title"
          :to="item.router"
          @click="setSecPopupData(item.link, 'center')"
        >
          <template #right-icon>
            <van-icon name="arrow" size="24" />
          </template>
        </van-cell>
        <van-cell title="語言">
          <template #value>
            <van-form class="form">
              <select id="" name="" class="sel sel-lang">
                <option value="繁體中文">繁體中文</option>
                <option value="Enlish">Enlish</option>
              </select>
            </van-form>
          </template>
        </van-cell>
      </van-cell-group>
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
import { useRouter } from 'vue-router';
import { setSecPopupData, ClosePopup } from '@/util/public';
export default {
  components: {},

  setup(prop, context) {
    let router = useRouter();
    let changeRouter = (data) => {
      router.push({
        path: '/' + data,
      });
    };
    const checked = ref(true);
    const setList1 = ref(['背景音樂', '背景音效', '聊天室音效', '公頻通知', '私聊通知']);
    const setList2 = ref([
      { title: '兌換紅包碼', link: 'len99/modal/modalSet-exchange' },
      { title: '遊戲介紹', router: 'set' },
      { title: '操作說明', router: 'set' },
      { title: '如何充值', router: 'set' },
      { title: '修改密碼', link: 'len99/modal/modalSet-modPassword' },
    ]);

    return {
      setSecPopupData,
      ClosePopup,
      router,
      changeRouter,
      checked,
      setList1,
      setList2,
    };
  },
};
</script>
