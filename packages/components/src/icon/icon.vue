<template>
  <div class="kitty-icon">
    <svg class="icon" :style="iconColor" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
    <div v-if="dot" class="kitty-info" :class="styleDot"> {{ badge }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'k-icon'
}
</script>
<script setup lang="ts" name="k-icon">
import { computed } from 'vue';
import { iconProps } from './types';
import './font/iconfont.js';
import './index.less';

const props = defineProps(iconProps);

const iconName = computed(() => {
  return `#k-icon-${props.name}`
})

const styleDot = computed(() => {
  return {
    [`kitty-dot`]: props.dot && !props.badge
  }
})

const badge = computed(() => props.badge)

const iconColor = computed(() => {
  return {
    color: props.color
  }
})
</script>