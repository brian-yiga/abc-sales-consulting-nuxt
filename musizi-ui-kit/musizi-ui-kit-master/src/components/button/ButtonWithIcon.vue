<template>
  <component
    :is="elementType"
    v-bind="$attrs"
    :href="isAnchor ? href : undefined"
    :to="isRouterComponent ? (to ?? href) : undefined"
    :target="(isAnchor || isRouterComponent) && external ? '_blank' : undefined"
    :rel="(isAnchor || isRouterComponent) && external ? 'noopener noreferrer' : undefined"
    :class="variantClasses"
  >
    <span class="label">
      {{ label }}
    </span>

    <span class="icon">
      <MuiIcon :icon="icon" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MuiIcon } from '@components/icon'
import type { ButtonWithIconProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ButtonWithIconProps>(), {
  variant: 'right-icon-no-fill',
  icon: 'arrow_forward',
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

const variantClasses = computed(
  () =>
    ({
      'right-icon-no-fill': 'btn--right-icon',
      'right-icon-red-fill': 'btn--right-icon btn--right-icon-red-fill',
    })[props.variant],
)
</script>

<style scoped>
@reference "@/styles/_theme.css";

.btn--right-icon {
  @apply grid grid-cols-[1fr_50px] w-[235px] mx-auto md:ml-0 2xl:ml-auto cursor-pointer no-underline;
}

.btn--right-icon .label {
  @apply text-white font-bold uppercase font-poppins border-2 border-white h-[50px] leading-[50px] transition duration-300;
}

.btn--right-icon:hover .label {
  @apply bg-white text-maroon;
}

.btn--right-icon .icon,
.btn--right-icon .icon :deep(span) {
  @apply bg-white text-5xl text-maroon block overflow-hidden;
}

.btn--right-icon-red-fill .label {
  @apply text-white bg-maroon transition duration-300;
}

.btn--right-icon-red-fill .icon {
  @apply bg-white;
}
</style>
