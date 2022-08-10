<template>
  <a :href="href" :class="styleClass" class="k-link">
    <span>
      <slot />
    </span>
  </a>
</template>

<script lang="ts">
export default {
  name: 'k-link'
}
</script>
<script setup lang="ts" name="k-link">
import { linkProps } from './types';
import { computed } from 'vue';
import './index.less'

const props = defineProps(linkProps);

const href = computed(() => {
  return props.href
})

const styleClass = computed(() => {
  return {
    'is-disabled': props.disabled,
    [`k-link-${props.type}`]: props.type,
  }
})
</script>
