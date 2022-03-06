<template>
  <view class="first">
    <Robit :robot-Text="state.robotText" />
    <view class="main">
      <view v-for="(item, index) in 2" :key="index" @click="selectType(index)"> 1234</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
import Robit from '@/components/step/robot.vue';
import { getShopCategories } from '@/api/step/first';
import { onReady } from '@dcloudio/uni-app';

const state = reactive({
  robotText: 'Hi，让我为您做设计！ 请告诉我您的经营范围。'
});

// 获取列表
const getShopList = async () => {
  try {
    const res = await getShopCategories();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// 选择类型
const selectType = (type: any) => {
  uni.navigateTo({
    url: '/pages/step/second/index'
  });
};

onReady(() => {
  getShopList();
});
</script>

<style lang="scss" scoped>
.first {
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
