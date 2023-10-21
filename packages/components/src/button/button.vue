<template>
  <button class="k-button" :class="styleClass">
    <Icon class="icon" v-if="iconFont.iconName && iconFont.position !== 'right'"
      :name="iconFont.iconName" />
    <slot />
    <Icon class="icon" v-if="iconFont.iconName && iconFont.position !== 'left'"
      :name="iconFont.iconName" />
  </button>
</template>

<script lang="ts">
export default {
  name: 'k-button'
}
</script>
<script lang="ts" setup>
// 在 <script setup> 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits 
import { computed } from 'vue'
import Icon from '../icon/icon.vue'
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

const iconFont = computed(() => {
  const iconName = props.icon;
  const position = props.iconPosition;
  return {
    iconName,
    position
  }
})

</script>