<template>
  <!-- Iconify SVG icon -->
  <Icon
    v-if="name"
    v-bind="$attrs"
    :icon="name"
    :style="styles"
  />
  <!-- Material Icons font -->
  <span
    v-else
    v-bind="$attrs"
    class="material-icons"
    :style="styles"
  >
    {{ icon }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { IconProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<IconProps>()

const styles = computed(() => {
  const styles: Record<string, string> = {}

  if (props.color) {
    styles.color = props.color
  }

  if (props.size) {
    styles.fontSize = `${props.size}px`
  }

  return styles
})
</script>
