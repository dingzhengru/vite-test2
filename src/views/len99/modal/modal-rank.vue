<template>
  <div class="modal rank">
    <div class="modal_tabbar">
      <header>富豪榜</header>
    </div>
    <div class="modal_content">
      <div class="modal_info">點數餘額排行, 每15分鐘更新</div>
      <div class="rank">
        <van-cell
          v-for="item in 3"
          :key="item"
          class="rank_list"
          title-class="rank_list_title"
          value-class="rank_list_value"
        >
          <template #title>
            <div class="rank_num-wrap">
              <div class="rank_num" :data-num="'top' + item"></div>
            </div>
            <div class="rank_pic">
              <img src="@/assets/img/len99/user/userPic.png" alt="" />
            </div>
            <div class="rank_name">GL******</div>
          </template>
          <template #value>
            <i class="i i-star" data-size="sm"></i>
            <div class="rank_money">952,010</div>
          </template>
        </van-cell>
        <van-cell
          v-for="(item, index) in rankList"
          :key="index"
          class="rank_list"
          title-class="rank_list_title"
          value-class="rank_list_value"
        >
          <template #title>
            <div class="rank_num-wrap">
              <div class="rank_num" :data-num="index + 4"></div>
            </div>
            <div class="rank_pic">
              <img src="@/assets/img/len99/user/userPic.png" alt="" />
            </div>
            <div class="rank_name">
              {{ item.name }}
            </div>
          </template>
          <template #value>
            <i class="i i-star" data-size="sm"></i>
            <div class="rank_money">
              {{ item.money }}
            </div>
          </template>
        </van-cell>
        <van-cell
          v-for="(item, index) in 3"
          :key="index"
          class="rank_list"
          title-class="rank_list_title"
          value-class="rank_list_value"
        >
          <template #title>
            <div class="rank_num-wrap">
              <div class="rank_num" data-num="1"></div>
              <div class="rank_num" :data-num="index"></div>
            </div>
            <div class="rank_pic">
              <img src="https://fakeimg.pl/300/" />
            </div>
            <div class="rank_name">GL******</div>
          </template>
          <template #value>
            <i class="i i-star" data-size="sm"></i>
            <div class="rank_money">952,010</div>
          </template>
        </van-cell>
      </div>
    </div>
    <div class="modal_footer">
      <div class="modal_result">
        <div class="modal_user">
          <div class="rank_num" data-num="5"></div>
          <div class="rank_num" data-num="0"></div>
          <div class="rank_num" data-num="more"></div>
          <div class="rank_pic"><img src="/src/assets/img/len99/user/userPic.png" alt="" /></div>
          <div class="rank_name">Darren</div>
        </div>
        <div class="modal_money">
          <i class="i i-star" data-size="md"></i>
          <div class="modal_money_txt">
            <p>123,5689</p>
          </div>
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
    const rankList = ref([
      { name: ' Jay 志杰', img: 'userPic', money: '958,585' },
      { name: ' Jay 志杰', img: 'userPic', money: '958,585' },
      { name: ' Jay 志杰', img: 'userPic', money: '958,585' },
      { name: ' Jay 志杰', img: 'userPic', money: '958,585' },
      { name: ' Jay 志杰', img: 'userPic', money: '958,585' },
      { name: ' Jay 志杰', img: 'userPic', money: '958,585' },
    ]);
    return {
      ClosePopup,
      rankList,
    };
  },
};
</script>
