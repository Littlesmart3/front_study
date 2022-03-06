<template>
  <view class="second">
    <Robit :robot-Text="state.robotText" />
    <view class="main">
      <view @click="selectShopItem(1)">芜湖起飞</view>
      </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
import Robit from '@/components/step/robot.vue';
import { onReady } from '@dcloudio/uni-app';

const state = reactive({
  robotText: 'Hi～请告诉我您想经营的商品。'
});


// 选择类型
const selectShopItem = (type: any) => {
  uni.navigateTo({
    url: '/pages/step/third/index'
  });
};



</script>

<style lang="scss" scoped>
.second {
  position: relative;
  width: 100%;
  height: 100vh;
  .main {
    position: absolute;
    top: 450rpx;
    z-index: 2;
    width: 100%;
    height: calc(100% - 450rpx);
  }
}
</style>
