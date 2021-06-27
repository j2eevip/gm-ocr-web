<!-- 发送验证码 -->
<template>
  <el-button
    type="primary"
    :disabled="sendCodes.code === 2"
    :loading="sendCodes.code === 1"
    style="width: 100%"
    @click="sendCode"
  >{{ sendCodes.text }}</el-button>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'SendCode',
  props: {
    params: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup() {
    const sendCodes = reactive({
      code: 0,
      text: '发送验证码',
    });

    function resetText() {
      let num = 60;

      let timer = setInterval(() => {
        num -= 1;
        sendCodes.text = '重新获取（' + num + '）';
        if (num === 0) {
          clearInterval(timer);
          timer = null;
          sendCodes.text = '获取验证码';
          sendCodes.code = 0;
        }
      }, 1000);
    }
    // 发送验证码
    function sendCode() {
      sendCodes.text = '获取中';
      sendCodes.code = 1;
      console.log('短信发送中');
    }

    return {
      sendCodes,
      sendCode,
      resetText
    };
  },
};
</script>
