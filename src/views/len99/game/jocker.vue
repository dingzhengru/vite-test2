<template>
  <div class="wrap game">
    <div class="topbar">
      <div class="topbar_header">
        <van-button class="btn btn_chat" round @click="changeRouter('chat')">
          <template #icon>
            <van-icon name="chat-o" />
          </template>
          <span>聊天室</span>
        </van-button>
        <van-button class="btn btn_back" icon="arrow-left" type="default" to="/"> 回大廳 </van-button>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    let router = useRouter();
    let changeRouter = (data) => {
      router.push({
        path: '/' + data,
      });
    };
    return {
      router,
      changeRouter,
    };
  },
};
</script>
