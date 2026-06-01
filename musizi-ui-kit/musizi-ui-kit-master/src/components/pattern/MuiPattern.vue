<template>
  <div v-bind="$attrs" class="pattern-container">
    <div
      v-for="index in strips"
      :key="index"
      class="h-[59px] bg-repeat-x"
      :style="getStripStyle(index)"
    />
  </div>
</template>

<script setup lang="ts">
import type { PatternProps } from './types'
import patternSvg from '@/assets/mu-pattern.svg?raw'

defineOptions({
  inheritAttrs: false,
})

// Convert raw SVG to data URL to ensure it's bundled with the library
const patternUrl = `data:image/svg+xml,${encodeURIComponent(patternSvg)}`

const PATTERN_WIDTH = 1408

const props = withDefaults(defineProps<PatternProps>(), {
  strips: 1,
})

function getStripStyle(index: number) {
  // Distribute offsets evenly: 2 strips = 50%, 3 strips = 33%, etc.
  const offset = ((index - 1) * (PATTERN_WIDTH / props.strips)) % PATTERN_WIDTH
  return {
    backgroundImage: `url(${patternUrl})`,
    backgroundPositionX: `-${offset}px`,
  }
}
</script>
