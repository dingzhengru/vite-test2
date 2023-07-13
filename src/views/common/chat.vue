<template>
  <div class="wrap chat">
    <div class="topbar">
      <div class="topbar_header">
        <van-button class="btn btn_back" icon="arrow-left" type="default" to="/"> 回大廳 </van-button>
        <i class="i i-write"></i>
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
      </div>
    </div>
    <div class="content">
      <div class="chat_msg">
        <template v-if="mailSwitchShow == 0">
          <ul class="chat_list">
            <li>
              <div class="user_pic">
                <img src="@/assets/img/len99/user/userPic.png" alt="" />
              </div>
              <div class="chat_txt">
                <div class="chat_name">Wei</div>
                <div class="chat_txt_cont">
                  <p>hello<br />sssss</p>
                  <div class="chat_expression">
                    <img src="@/assets/img/len99/chat/001.png" alt="" />
                  </div>
                </div>
                <div class="chat_info">
                  <b>回覆</b>
                  <div>下午</div>
                  <div>11:15</div>
                </div>
              </div>
            </li>
            <li>
              <div class="user_pic">
                <img src="@/assets/img/len99/user/userPic.png" alt="" />
              </div>
              <div class="chat_txt">
                <div class="chat_name">Wei</div>
                <div class="chat_txt_cont">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam natus minima tempore asperiores
                    praesentium, nam magnam quasi illo consequatur. Animi reiciendis laboriosam molestiae accusamus nam
                    officiis perferendis eum quae inventore.
                  </p>
                </div>
                <div class="chat_info">
                  <b>回覆</b>
                  <div>下午</div>
                  <div>11:15</div>
                </div>
              </div>
            </li>
            <li class="chat_own">
              <div class="chat_txt">
                <div class="chat_txt_cont">
                  <p>
                    Lorem ipsum, d agnam quasi illo consequatur. Animi reiciendis laboriosam molestiae accusamus nam
                    officiis perferendis eum quae inventore.
                  </p>
                </div>
              </div>
            </li>
            <li class="chat_own">
              <div class="chat_txt">
                <div class="chat_txt_cont">
                  <p>Lorem e.</p>
                </div>
              </div>
            </li>
          </ul>
        </template>
        <template v-if="mailSwitchShow == 1">
          <van-empty description="沒有聊天中的對象" />
        </template>
      </div>
      <van-row class="chat_btn" align="center" justify="space-around" gutter="4">
        <van-col span="3" class="center">
          <i class="i i-pic"></i>
        </van-col>
        <van-col span="16">
          <div class="chat_input">
            <van-form class="form">
              <van-field v-model="value1" class="input-text input-text-lg">
                <template #right-icon>
                  <i class="i i-chat"></i>
                </template>
              </van-field>
            </van-form>
          </div>
        </van-col>
        <van-col span="5">
          <van-button class="btn btn-xs btn_primary">送出</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from 'vue';
export default {
  components: {},
  setup() {
    const mailSwitch = ref(['公頻', '私聊']);
    const mailSwitchShow = ref(0);
    const mailSwitchBtn = (key) => {
      mailSwitchShow.value = key;
    };
    const value1 = ref('');
    const name = ref();
    const mail = ref();
    const number = ref();
    const msg = ref();
    return {
      mailSwitch,
      mailSwitchShow,
      mailSwitchBtn,
      value1,
      name,
      mail,
      number,
      msg,
    };
  },
};
</script>
