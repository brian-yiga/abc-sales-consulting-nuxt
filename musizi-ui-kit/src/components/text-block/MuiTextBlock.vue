<template>
  <div
    v-bind="$attrs"
  >
    <h2 :class="['mui-text--display-3', titleClass]">
      <slot name="title" />
    </h2>

    <div :class="bodyClass">
      <slot name="body" />
    </div>

    <MuiButton
      v-if="button"
      :label="button.label"
      :href="button.href"
      :variant="button.variant ?? 'red-fill'"
      :external="button.external"
      class="mui-text-block__button"
    />
  </div>
</template>

<script setup lang="ts">
import { MuiButton } from '../button'
import type { TextBlockProps } from './types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<TextBlockProps>(), {
  titleClass: 'uppercase mb-6',
  bodyClass: 'prose',
})
</script>

<style scoped>
</style>
