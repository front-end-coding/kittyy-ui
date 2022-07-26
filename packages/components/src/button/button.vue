<template>
  <button class="k-button" :class="styleClass">
    <slot />
  </button>
</template>

<script lang="ts" setup>
// 在 <script setup> 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits 
import { computed } from 'vue'
import { buttonProps } from './types';
import './index.less'

const props = defineProps(buttonProps);

const styleClass = computed(() => {
  return {
    [`k-button--${props.type}`]: props.type,
    'is-plain': props.plain,
    'is-round': props.round,
    'is-disabled': props.disabled,
    [`k-button--${props.size}`]: props.size,
    'is-circle': props.circle,
  }
})

</script>