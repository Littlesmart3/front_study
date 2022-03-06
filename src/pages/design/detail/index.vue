<template>
  <view class="design-detail">
    <view class="main">
      <view @click="selectShopItem(1)">列表详情页面</view>
      </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { onReady } from '@dcloudio/uni-app';



// 选择类型
const selectShopItem = (type: any) => {
  uni.navigateTo({
    url: '/pages/step/fourth/index'
  });
};



</script>

<style lang="scss" scoped>
.design-detail {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
