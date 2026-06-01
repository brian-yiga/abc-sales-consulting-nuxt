<template>
  <component
    :is="as"
    v-bind="$attrs"
    class="mx-auto w-full"
    :class="wide ? 'px-4 lg:px-6 xl:px-8' : 'px-6 lg:px-8 xl:px-10 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { PageContainerProps } from './types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<PageContainerProps>(), {
  as: 'div',
  wide: false,
})
</script>
