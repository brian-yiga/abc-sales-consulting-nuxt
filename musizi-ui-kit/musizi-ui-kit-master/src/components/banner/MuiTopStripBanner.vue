<template>
  <div v-bind="$attrs" class="relative sm:p-8 sm:pb-20 sm:bg-white lg:p-14">
    <div>
      <picture class="object-cover">
        <source
          v-if="image.small"
          media="(max-width: 640px)"
          :srcset="image.small"
        >
        <source
          v-if="image.medium"
          media="(max-width: 768px)"
          :srcset="image.medium"
        >
        <img
          :src="image.large"
          :alt="image.alt || ''"
          class="object-cover bg-slate-600 w-full h-[600px] md:h-[510px] lg:h-[408px]"
        >
      </picture>
    </div>

    <div :class="captionContainerClasses">
      <div :class="captionBoxClasses">
        <div :class="captionSubTextClasses">
          <slot name="caption" />
        </div>

        <h1 :class="captionHeadingClasses">
          <slot name="title" />
        </h1>

        <div :class="captionBodyClasses">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ResponsiveImage } from './types'

defineOptions({
  inheritAttrs: false,
})

export type CaptionTheme = 'dark' | 'light'

const props = withDefaults(
  defineProps<{
    /** Responsive image configuration */
    image: ResponsiveImage
    /** Caption box theme - 'dark' for light background, 'light' for maroon background */
    theme?: CaptionTheme
    /** Use compact caption height */
    compact?: boolean
  }>(),
  {
    theme: 'light',
    compact: false,
  }
)

const isDark = computed(() => props.theme === 'dark')

const captionContainerClasses = [
  'container',
  '-mt-44',
  'z-5',
  'relative',
  'sm:-mt-24',
  'lg:-mt-[408px]',
  'lg:h-[408px]',
  'lg:flex',
  'lg:flex-col',
  'lg:justify-end',
]

const captionBoxClasses = computed(() => ({
  'p-12': true,
  'sm:mr-16': true,
  'sm:max-w-[540px]': true,
  'lg:max-w-[600px]': true,
  'text-white': !isDark.value,
  'bg-maroon': !isDark.value,
  'bg-neutral-100': isDark.value,
  'lg:h-full': !props.compact,
}))

const captionSubTextClasses = computed(() => ({
  'uppercase': true,
  'font-bold': true,
  'text-lg': true,
  'mb-4': true,
  'text-gray-600': isDark.value,
}))

const captionHeadingClasses = computed(() => ({
  'mb-4': !props.compact,
  'font-bold': true,
  'text-4xl': true,
  'font-poppins': true,
  'text-maroon': isDark.value,
  'uppercase': true,
}))

const captionBodyClasses = computed(() => ({
  'font-semibold': true,
  'leading-loose': true,
  'text-gray-600': isDark.value,
}))
</script>
