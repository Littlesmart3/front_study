
<template>
  <view class=" u-upload">
    <view>
        
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// props参数
const props = defineProps({
  value: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholderClass: { type: String, default: 'input-placeholder' },
  placeholder: { type: String, default: '请输入...' },
  maxlength: { type: Number, default: -1 },
  disabled: { type: Boolean, default: false }
});
// 自定义事件
const emit = defineEmits<{
  (e: 'input', data: string): void;
}>();

const state = reactive({
  currentValue: props.value
});

// input输入框输入
const handleInput = (val: string) => {
  if (props.maxlength > 0) {
    state.currentValue = val.slice(0, props.maxlength);
  }
  emit('input', state.currentValue);
  return state.currentValue;
};
</script>

<style lang="scss" scoped>
.u-upload {
  display: flex;
  align-items: center;
  height: 90rpx;
  padding: 0 24rpx;
  background: #ffffff;
  border-radius: 16rpx;
  .input {
    flex: 1;
  }
  .right-nums {
    color: #bfbec1;
  }
  ::v-deep.input-placeholder {
    color: #bfbec1;
  }
}
</style>
