<template>
  <div v-bind="$attrs" :style="backgroundStyle" :class="containerClasses">
    <div class="container grid lg:grid-cols-2 lg:gap-14">
      <div class="uppercase font-poppins">
        <div class="lg:w-[500px]">
          <div class="text-xl md:text-2xl mb-1 lg:mb-3">
            <slot name="caption" />
          </div>

          <div class="text-5xl md:text-7xl font-bold mb-4 lg:mb-0">
            <slot name="title" />
          </div>
        </div>
      </div>

      <div class="leading-relaxed flex flex-col justify-center">
        <slot />
      </div>

      <div v-if="showScrollIndicator" class="bg-maroon py-3 px-2 w-14 mt-10 text-center hidden max-lg:block">
        <MuiIcon icon="arrow_downward" color="white" :size="28" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import MuiIcon from '@components/icon/MuiIcon.vue'
import type { ResponsiveImage } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /** Responsive background image configuration */
    backgroundImage: ResponsiveImage
    /** Background overlay color (defaults to purple) */
    overlayColor?: string
    /** Show scroll indicator on mobile */
    showScrollIndicator?: boolean
  }>(),
  {
    overlayColor: '#5e024f',
    showScrollIndicator: true,
  }
)

const backgroundStyle = computed(() => ({
  '--img-sm': `url('${props.backgroundImage.small || props.backgroundImage.large}')`,
  '--img-md': `url('${props.backgroundImage.medium || props.backgroundImage.large}')`,
  '--img-lg': `url('${props.backgroundImage.large}')`,
  '--overlay-color': props.overlayColor,
}))

const containerClasses = [
  'blurred-bg-banner',
  'bg-cover',
  'text-white',
  'py-16',
  'px-7',
  'max-lg:h-[calc(100vh-74px)]',
  'max-lg:flex',
  'max-lg:flex-col',
  'max-lg:justify-center',
  'lg:py-36',
  'lg:px-0',
]
</script>

<style scoped>
.blurred-bg-banner {
  background-color: var(--overlay-color);
  background-image: var(--img-sm);
}

@media (min-width: 768px) {
  .blurred-bg-banner {
    background-image: var(--img-md);
  }
}

@media (min-width: 1024px) {
  .blurred-bg-banner {
    background-image: var(--img-lg);
  }
}
</style>
