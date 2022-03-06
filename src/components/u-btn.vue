<template>
  <view class="u-btn">
    <view class="btn-style" @click="handleClick">
      <text>{{ props.text }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// props参数
const props = defineProps({
  text: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholderClass: { type: String, default: 'input-placeholder' },
  placeholder: { type: String, default: '请输入...' },
  maxlength: { type: Number, default: -1 },
  disabled: { type: Boolean, default: false }
});
// 自定义事件
const emit = defineEmits<{
  (e: 'click'): void;
}>();

// input输入框输入
const handleClick = () => {
  emit('click');
};
</script>

<style lang="scss" scoped>
.u-btn {
  .btn-style {
    width: 85%;
    height: 80rpx;
    margin: 0 auto;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
