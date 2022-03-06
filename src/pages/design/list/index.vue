<template>
  <view class="design-list">
    <view class="main">
      <view @click="selectItem(1)">列表页面</view>
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
const selectItem = (type: any) => {
  uni.navigateTo({
    url: '/pages/design/detail/index'
  });
};



</script>

<style lang="scss" scoped>
.design-list {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
