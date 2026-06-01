<template>
  <span
    v-bind="$attrs"
    class="mui-logo mui-logo-wings inline-block leading-0"
    :style="{
      '--mui-logo-width': width ? `${width}px` : undefined,
      '--mui-logo-height': height ? `${height}px` : undefined,
    }"
    v-html="logoSvg"
  />
</template>

<script setup lang="ts">
import type { LogoProps } from './types'
import logoSvg from '@/assets/logos/wings.svg?raw'

defineOptions({
  inheritAttrs: false,
})

defineProps<LogoProps>()
</script>
