<template>
  <div v-bind="$attrs" :style="backgroundStyle" :class="containerClasses">
    <div class="container">
      <div :class="gridClasses">
        <div class="uppercase font-poppins">
          <div class="text-xl md:text-2xl mb-1 lg:mb-3">
            <slot name="caption" />
          </div>

          <div :class="mainTextClasses">
            <slot name="title" />
          </div>

          <div v-if="hasSubCaption" class="font-semibold normal-case">
            <slot name="subcaption" />
          </div>
        </div>

        <div v-if="hasContent" class="mt-4 lg:mt-0 leading-relaxed flex flex-col justify-center">
          <slot />
        </div>

        <div v-if="showScrollIndicator" class="bg-maroon py-3 w-12 mt-10 text-center hidden max-lg:block">
          <MuiIcon icon="arrow_downward" color="white" :size="28" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import MuiIcon from '@components/icon/MuiIcon.vue'
import type { ResponsiveImage } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /** Responsive background image configuration */
    backgroundImage: ResponsiveImage
    /** Background overlay color (Tailwind color name or hex) */
    overlayColor?: string
    /** Show scroll indicator on mobile */
    showScrollIndicator?: boolean
  }>(),
  {
    overlayColor: 'maroon',
    showScrollIndicator: true,
  }
)

const slots = useSlots()
const hasSubCaption = computed(() => Boolean(slots.subcaption))
const hasContent = computed(() => Boolean(slots.default))

const backgroundStyle = computed(() => ({
  '--img-sm': `url('${props.backgroundImage.small || props.backgroundImage.large}')`,
  '--img-md': `url('${props.backgroundImage.medium || props.backgroundImage.large}')`,
  '--img-lg': `url('${props.backgroundImage.large}')`,
}))

const containerClasses = computed(() => [
  'page-banner-text',
  `bg-${props.overlayColor}`,
  'bg-cover',
  'text-white',
  'py-16',
  'px-7',
  'lg:px-7',
  'max-lg:h-[calc(100vh-74px)]',
  'max-lg:flex',
  'max-lg:flex-col',
  'max-lg:justify-center',
  'lg:py-36',
  !hasContent.value && 'flex flex-col justify-end min-h-[608px] md:min-h-[510px]',
].filter(Boolean))

const gridClasses = computed(() => [
  hasContent.value && 'grid lg:grid-cols-2 lg:gap-14',
  !hasContent.value && 'max-w-[450px] lg:max-w-[770px]',
].filter(Boolean))

const mainTextClasses = computed(() => [
  'text-5xl md:text-7xl font-bold',
  hasSubCaption.value && 'mb-3',
].filter(Boolean))
</script>

<style scoped>
.page-banner-text {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: var(--img-sm);
}

@media (min-width: 768px) {
  .page-banner-text {
    background-image: var(--img-md);
  }
}

@media (min-width: 1024px) {
  .page-banner-text {
    background-image: var(--img-lg);
  }
}
</style>
