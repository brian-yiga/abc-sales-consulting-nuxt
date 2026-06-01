<template>
  <component
    :is="elementType"
    v-bind="$attrs"
    :href="isAnchor ? href : undefined"
    :to="isRouterComponent ? (to ?? href) : undefined"
    :target="(isAnchor || isRouterComponent) && external ? '_blank' : undefined"
    :rel="(isAnchor || isRouterComponent) && external ? 'noopener noreferrer' : undefined"
    :class="['btn--icon-only', sizeClasses]"
  >
    <MuiIcon :size="iconSize" :icon="icon" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MuiIcon } from '@components/icon'
import type { ButtonIconOnlyProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ButtonIconOnlyProps>(), {
  icon: 'arrow_forward',
  size: 'medium',
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
      small: 'btn--icon-only--small',
      'medium-small': 'btn--icon-only--medium-small',
      medium: 'btn--icon-only--medium',
      large: 'btn--icon-only--large',
    })[props.size],
)

// Icon sizes proportional to button size
const iconSize = computed(
  () =>
    ({
      small: 18,
      'medium-small': 24,
      medium: 26,
      large: 32,
    })[props.size],
)
</script>

<style scoped>
@reference "@/styles/_theme.css";

.btn--icon-only {
  @apply bg-white text-maroon cursor-pointer transition duration-300 no-underline inline-flex items-center justify-center border-3 border-white;
  @apply hover:bg-maroon hover:text-white hover:border-maroon;
}

/* Size variants - heights match ButtonNoIcon at each size */
.btn--icon-only--small {
  /* Matches: py-1.5 (12px) + text-sm line-height (~20px) + border (6px) = ~38px */
  @apply h-[38px] w-[38px];
}

.btn--icon-only--medium-small {
  @apply h-[48px] w-[48px];
}

.btn--icon-only--medium {
  /* Matches: py-3.5 (28px) + text-lg leading-none (18px) + border (6px) = ~52px */
  @apply h-[52px] w-[52px];
}

.btn--icon-only--large {
  /* Matches: py-4 (32px) + text-xl line-height (~28px) + border (6px) = ~66px */
  @apply h-[66px] w-[66px];
}
</style>
