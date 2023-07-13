<template>
  <div class="modal card">
    <van-tabs v-model:active="active" class="tabModal" type="card" :ellipsis="false">
      <van-tab title="我的">
        <van-row class="user_top">
          <van-col span="6">
            <div class="user_pic user_pic-md">
              <img src="@/assets/img/len99/user/userPic.png" alt="" />
            </div>
          </van-col>
          <van-col span="18">
            <van-row justify="space-between">
              <van-col span="18" class="user_top_txt">
                <div class="user_top_title">暱稱</div>
                <div class="user_top_name">廖慧玲</div>
              </van-col>
              <van-col>
                <i class="i i-share" @click="setSecPopupData('len99/modal/modalCard-share', 'center')"></i>
              </van-col>
              <van-col span="24" class="mb-8">
                <van-row gutter="8">
                  <van-col>
                    <van-button
                      class="btn btn-xs btn_name"
                      @click="setSecPopupData('len99/modal/modalCard-name', 'center')"
                    >
                      改暱稱
                    </van-button>
                  </van-col>
                  <van-col>
                    <van-button
                      class="btn btn-xs btn_voice"
                      @click="setSecPopupData('len99/modal/modalCard-loudVoice', 'center')"
                    >
                      大聲公
                    </van-button>
                  </van-col>
                </van-row>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-form class="form">
          <van-field
            rows="3"
            label=""
            type="textarea"
            placeholder="请输入留言"
            class="input-textarea2"
            model-value="text"
            readonly
          >
            <template #right-icon>
              <i class="i i-write" @click="setSecPopupData('len99/modal/modalCard-modName', 'center')"></i>
            </template>
          </van-field>
        </van-form>
        <van-cell
          title="我的成就"
          class="achieve"
          title-class="achieve_title"
          @click="setSecPopupData('len99/modal/modalCard-achieve', 'bottom')"
        >
          <template #right-icon>
            <i class="i i-arrow"></i>
          </template>
        </van-cell>

        <div class="card_level">
          <van-row align="start">
            <van-col span="8">
              <div class="card_level_l">
                <i class="i i-level" data-level="6"></i>
                <p class="card_level_title">VIP 等級 <span>1</span></p>
                <van-button
                  class="btn btn-xs btn_default m-auto mt-10"
                  @click="setSecPopupData('len99/modal/modalCard-vip', 'bottom')"
                >
                  VIP 說明
                </van-button>
              </div>
            </van-col>
            <van-col span="16">
              <div class="card_level_r">
                <van-cell
                  title="會員帳號"
                  value="y2779"
                  class="level_list"
                  title-class="level_title"
                  value-class="level_value"
                ></van-cell>
                <van-cell
                  title="會員餘額"
                  value="1000"
                  class="level_list"
                  title-class="level_title"
                  value-class="level_value"
                ></van-cell>
                <van-cell
                  title="所屬公會"
                  value="未有所屬公會"
                  class="level_list"
                  title-class="level_title"
                  value-class="level_value"
                ></van-cell>
              </div>
            </van-col>
          </van-row>
        </div>
        <van-row gutter="4" justify="center">
          <van-col>
            <van-button
              type="default"
              class="btn btn-sm btn_primary"
              @click="setSecPopupData('len99/modal/modal-market', 'bottom')"
            >
              首次儲值
            </van-button>
          </van-col>
          <van-col>
            <van-button
              type="default"
              class="btn btn-sm btn_primary"
              @click="setSecPopupData('len99/modal/modalCard-discount', 'bottom')"
            >
              申請優惠
            </van-button>
          </van-col>
          <van-col>
            <van-popover v-model:show="showPopover">
              <div class="popover_cont">贈38點數</div>
              <template #reference>
                <van-button
                  type="default"
                  class="btn btn-sm btn_success"
                  @click="setSecPopupData('len99/modal/modalCard-bank', 'center')"
                >
                  身分驗證
                </van-button>
              </template>
            </van-popover>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="信箱">
        <div class="center">
          <ul class="mailSwitch">
            <li
              v-for="(item, index) in mailSwitch"
              :key="index"
              :class="[mailSwitchShow == index ? 'active' : '']"
              @click="mailSwitchBtn(index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div v-if="mailSwitchShow == 0">
          <van-empty description="尚未加入任何好友" />
        </div>
        <div v-if="mailSwitchShow == 1">
          <van-empty description="尚未加入任何好友" />
        </div>
      </van-tab>
      <van-tab title="好友">
        <van-form class="form">
          <van-field label="" class="input-text" placeholder="搜尋所有玩家" left-icon="search" right-icon="clear" />
        </van-form>
        <van-empty description="尚未加入任何好友" />
      </van-tab>
      <van-tab title="紀錄">
        <div class="modal_title">
          <span class="title_s1">遊戲紀錄</span>
        </div>
        <table class="tb">
          <thead>
            <tr>
              <th>注單號</th>
              <th>投注金額</th>
              <th>結果</th>
              <th>時間</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1121310</td>
              <td>200.00</td>
              <td>--</td>
              <td>10:10:20</td>
            </tr>
            <tr>
              <td>1121310</td>
              <td>200.00</td>
              <td>--</td>
              <td>10:10:20</td>
            </tr>
            <tr>
              <td>1121310</td>
              <td>200.00</td>
              <td>--</td>
              <td>10:10:20</td>
            </tr>
          </tbody>
        </table>
      </van-tab>
    </van-tabs>

    <div class="modal_footer">
      <div class="modal_bottom modal_bottom-bg">
        <i class="i i-close" @click="ClosePopup()"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from 'vue';
import { setSecPopupData, ClosePopup } from '@/util/public';
export default {
  components: {},
  setup(prop, context) {
    const mailSwitch = ref(['寄件匣', '收件匣']);
    const mailSwitchShow = ref(0);
    const mailSwitchBtn = (key) => {
      mailSwitchShow.value = key;
    };
    const showPopover = ref(false);
    return {
      setSecPopupData,
      ClosePopup,
      mailSwitch,
      mailSwitchShow,
      mailSwitchBtn,
      showPopover,
    };
  },
};
</script>
