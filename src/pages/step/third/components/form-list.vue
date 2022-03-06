<template>
  <view class="form-list">
    <view class="item-style" v-for="(item, index) in state.formList" :key="index">
      <view class="item-text-style">
        <text >{{ item.label }}</text>
      </view>
      <UInput :value="item.value" :maxlength="item.maxlength" :placeholder="item.placeholder" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { onReady } from '@dcloudio/uni-app';
import { formList } from '../lib/form-list';
import UInput from '@/components/u-input.vue';

const state = reactive({
  formList: JSON.parse(JSON.stringify(formList))
});

// 选择类型
const selectShopItem = (type: any) => {
  uni.navigateTo({
    url: '/pages/step/fourth/index'
  });
};
</script>

<style lang="scss" scoped>
.form-list {
  width: 85%;
  margin: 0 auto;
  .item-style {
    margin: 40rpx 0;
  }
  .item-text-style {
    margin-bottom: 20rpx;
    color: $uni-text-color-placeholder;
  }
}
</style>
