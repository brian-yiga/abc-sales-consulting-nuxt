<template>
  <ButtonIconOnly
    v-if="hasOnlyIcon"
    v-bind="$attrs"
    :icon="icon"
    :size="size"
    :href="href"
    :to="to"
    :as="as"
    :external="external"
    @click="onClick"
  />

  <ButtonWithIcon
    v-else-if="hasIcon"
    v-bind="$attrs"
    :label="label"
    :variant="iconVariant"
    :icon="icon"
    :href="href"
    :to="to"
    :as="as"
    :external="external"
    @click="onClick"
  />

  <ButtonNoIcon
    v-else
    v-bind="$attrs"
    :label="label"
    :size="size"
    :wide="wide"
    :variant="noIconVariant"
    :href="href"
    :to="to"
    :as="as"
    :external="external"
    @click="onClick"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ButtonNoIcon from './ButtonNoIcon.vue'
import ButtonIconOnly from './ButtonIconOnly.vue'
import ButtonWithIcon from './ButtonWithIcon.vue'
import type { ButtonProps, ButtonNoIconVariant, ButtonWithIconVariant } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  variant: 'black-stroke',
  wide: false,
  external: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const onClick = (event: MouseEvent) => {
  emit('click', event)
}

const hasOnlyIcon = computed(() => {
  return props.variant === 'icon-only'
})

const hasIcon = computed(() => {
  return props.variant === 'right-icon-no-fill' || props.variant === 'right-icon-red-fill'
})

const iconVariant = computed(() => props.variant as ButtonWithIconVariant)

const noIconVariant = computed(() => props.variant as ButtonNoIconVariant)
</script>

<!--
  variants:
    - black-stroke
    - white-stroke
    - red-fill
    - white-fill
    - all-white
    - right-icon-no-fill
    - right-icon-red-fill
    - icon-only
  Properties:
    - label: string
    - size: 'small' | 'medium-small' | 'medium' | 'large'
    - variant: 'black-stroke' | 'white-stroke' | 'red-fill' | 'white-fill' | 'all-white' | 'right-icon-no-fill' | 'right-icon-red-fill' | 'icon-only'
    - wide: boolean
    - href: string (optional - renders as anchor when provided)
    - to: RouteLocationRaw (optional - route for router components like NuxtLink/RouterLink)
    - as: 'button' | 'a' | Component (optional - override element type or use router component)
    - external: boolean (optional - opens link in new window, default false)
-->
