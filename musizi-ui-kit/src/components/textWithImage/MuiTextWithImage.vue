<template>
  <div v-bind="$attrs" :class="computedContainerClasses">
    <div
      :style="cssVars"
      :class="computedImageContainerClasses"
    >
      <picture class="block w-full h-full">
        <source
          media="(max-width: 640px)"
          :srcset="img.small"
        >
        <source
          media="(max-width: 1024px)"
          :srcset="img.large"
        >
        <img
          :src="img.large"
          :alt="imgAlt"
          class="block w-full h-full object-cover"
        >
      </picture>
    </div>

    <div :class="computedCaptionClasses">
      <h2
        v-if="hasTitle"
        :class="computedTitleClasses"
      >
        <slot name="title" />
      </h2>

      <div class="prose">
        <slot />
      </div>

      <div
        v-if="button"
        class="mt-4"
      >
        <MuiButton
          :href="button.url"
          :label="button.text"
          :variant="button.variant ?? 'black-stroke'"
          size="small"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import MuiButton from '@components/button/MuiButton.vue'
import type { TextWithImageProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TextWithImageProps>(), {
  imgAlt: '',
  imageIsRightPosition: false,
  captionBackgroundColour: 'white',
  onlyHasVerticalLayout: false,
  defaultTitleStyle: 'bold',
})

const slots = useSlots()
const hasTitle = computed(() => Boolean(slots.title))

const cssVars = computed(() => ({
  '--img-sm': `url('${props.img.small}')`,
  '--img-lg': `url('${props.img.large}')`,
}))

const computedContainerClasses = computed(() => {
  const bgClass = props.captionBackgroundColour === 'maroon' ? 'bg-maroon' : 'bg-white'
  const layoutClasses = props.onlyHasVerticalLayout ? [] : ['lg:grid', 'lg:grid-cols-2']
  const propClasses = props.containerClasses ?? []
  return [bgClass, ...layoutClasses, ...propClasses]
})

const computedImageContainerClasses = computed(() => {
  const baseClasses = ['bg-gray-300']
  const positionClasses = props.imageIsRightPosition ? ['order-last'] : []
  const propClasses = props.imageContainerClasses ?? []
  return [...baseClasses, ...positionClasses, ...propClasses]
})

const computedCaptionClasses = computed(() => {
  const baseClasses = [
    'p-8',
    'lg:p-14',
    'xl:p-20',
    'flex',
    'flex-col',
    'justify-center',
  ];
  const propClasses = props.textContainerClasses ?? [];
  const textColorClass = props.captionBackgroundColour === 'white' ? '' : 'text-white';
  return [...baseClasses, ...propClasses, textColorClass];
})

const computedTitleClasses = computed(() => {
  const baseClasses =
    props.defaultTitleStyle === 'light'
      ? ['font-poppins', 'mb-4', 'text-xl', 'lg:text-2xl', 'font-light']
      : ['font-poppins', 'mb-4', 'text-xl', 'lg:text-2xl', 'font-bold', 'uppercase'];
  const textColorClass = props.captionBackgroundColour === 'white' ? 'text-maroon' : 'text-white'
  const propClasses = props.titleClasses ?? []
  return [...baseClasses, textColorClass, ...propClasses]
})
</script>

