<template>
  <div v-bind="$attrs" :style="backgroundStyle" :class="containerClasses">
    <slot>{{ title }}</slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ResponsiveImage } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /** The title text to display */
    title?: string
    /** Whether to apply offset padding (more vertical space) */
    isOffset?: boolean
    /** Responsive background image configuration */
    backgroundImage: ResponsiveImage
  }>(),
  {
    title: '',
    isOffset: false,
  }
)

const backgroundStyle = computed(() => ({
  '--img-sm': `url('${props.backgroundImage.small || props.backgroundImage.large}')`,
  '--img-md': `url('${props.backgroundImage.medium || props.backgroundImage.large}')`,
  '--img-lg': `url('${props.backgroundImage.large}')`,
}))

const containerClasses = computed(() => {
  const baseClasses = [
    'blurred-title-banner',
    'container',
    'text-white',
    'uppercase',
    'font-bold',
    'font-poppins',
    'text-6xl',
    'text-center',
    'lg:text-left',
    'bg-gray-500',
    'bg-cover',
  ]

  const paddingClasses = props.isOffset
    ? ['pt-16', 'pb-32', 'md:pb-60', 'lg:pt-12', 'lg:pb-28']
    : ['py-10', 'lg:py-12']

  return [...baseClasses, ...paddingClasses]
})
</script>

<style scoped>
.blurred-title-banner {
  background-image: var(--img-sm);
}

@media (min-width: 768px) {
  .blurred-title-banner {
    background-image: var(--img-md);
  }
}

@media (min-width: 1024px) {
  .blurred-title-banner {
    background-image: var(--img-lg);
  }
}
</style>
