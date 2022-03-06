<template>
  <view class="robit">
    <image class="eyes" mode="aspectFit" :src="state.EYES_IMG_URL" />
    <view class="robot-dialog">
      <view class="robot-dialog-style">
        <text>{{ state.robotText }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { EYES_IMG_URL } from '@/constants/img/url';
import { onReady } from '@dcloudio/uni-app';

// props参数
const props = defineProps({
  robotText: { type: String, default: '' }
});

const state = reactive({
  EYES_IMG_URL: EYES_IMG_URL,
  robotText: ''
});

// 机器人对话文本一个一个显示
const textAnimation = () => {
  let i = 0;
  const type = () => {
    state.robotText = props.robotText.substring(0, i++);
  };
  setInterval(type, 100);
};

onReady(() => {
  textAnimation();
});
</script>

<style lang="scss" scoped>
.robit {
  z-index: -10;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://yun.baoxiaohe.com/static/aiproject/home/bg.png');
  .eyes {
    width: 700rpx;
    height: 386rpx;
    position: absolute;
    top: 12rpx;
    left: 5rpx;
  }
  .robot-dialog {
    position: absolute;
    width: 460rpx;
    height: 170rpx;
    font-weight: 500;
    font-size: 26rpx;
    top: 100rpx;
    left: 250rpx;
    line-height: 52rpx;
    background-size: cover;
    background-image: url('https://yun.baoxiaohe.com/static/aiproject/home/text-bg.png');
    .robot-dialog-style {
      color: #fff;
      margin: 35rpx 36rpx 20rpx 60rpx;
    }
  }
}
</style>
