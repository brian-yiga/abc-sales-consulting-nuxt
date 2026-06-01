<template>
  <component
    :is="elementType"
    v-bind="$attrs"
    :href="isAnchor ? href : undefined"
    :to="isRouterComponent ? (to ?? href) : undefined"
    :target="(isAnchor || isRouterComponent) && external ? '_blank' : undefined"
    :rel="(isAnchor || isRouterComponent) && external ? 'noopener noreferrer' : undefined"
    :class="[
      'btn',
      sizeClasses,
      variantClasses,
      {
        'w-full': wide,
      },
    ]"
  >
    {{ label }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonNoIconProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ButtonNoIconProps>(), {
  label: 'Label',
  size: 'medium',
  variant: 'black-stroke',
  wide: false,
  external: false,
})

const elementType = computed(() => {
  if (props.as) return props.as
  if (props.href || props.to) return 'a'
  return 'button'
})

const isAnchor = computed(() => elementType.value === 'a')

const isRouterComponent = computed(() =>
  typeof elementType.value !== 'string'
)

const sizeClasses = computed(
  () =>
    ({
      small: 'btn--small',
      'medium-small': 'btn--medium-small',
      medium: '',
      large: 'btn--large',
    })[props.size],
)

const variantClasses = computed(
  () =>
    ({
      'black-stroke': '',
      'white-stroke': 'btn--white-stroke',
      'red-fill': 'btn--red-fill',
      'white-fill': 'btn--white-fill',
      'all-white': 'btn--all-white',
    })[props.variant],
)
</script>

<style scoped>
@reference "@/styles/_theme.css";

.btn {
  @apply font-poppins font-semibold border-zinc-700 text-center uppercase px-7 py-3.5 border-3 text-zinc-700 text-lg leading-none transition-all duration-300 cursor-pointer no-underline inline-block;
  @apply hover:bg-maroon hover:text-white hover:border-maroon;
}

.btn.btn--small {
  @apply px-3 py-1.5 text-sm;
}

.btn.btn--medium-small {
  @apply px-6 py-3.5 text-sm font-semibold;
}

.btn.btn--large {
  @apply px-16 py-4 text-xl;
}

.btn--white-stroke {
  @apply border-white text-white;
}

.btn.btn--white-stroke:hover {
  @apply text-maroon bg-white border-white;
}

.btn--red-fill {
  @apply text-white bg-maroon border-maroon;
  @apply hover:text-maroon hover:bg-white;
}

.btn.btn--white-fill {
  @apply text-black bg-white border-black;
  @apply hover:text-white hover:border-white hover:bg-transparent;
}

.btn.btn--all-white {
  @apply text-black bg-white border-white;
  @apply hover:text-maroon;
}
</style>
