<template>
  <div v-bind="$attrs" class="relative">
    <div :style="backgroundStyle" class="banner-bleeding-bg absolute z-0 left-0 top-0 w-full h-[75%] bg-cover bg-top bg-gray-300" />

    <div class="container relative z-5">
      <div class="text-white text-5xl uppercase font-bold font-poppins text-center leading-tight py-32 lg:text-6xl">
        <slot name="title" />
      </div>

      <div :class="captionClasses">
        <slot />

        <div v-if="action" class="mt-8">
          <a
            :href="action.url"
            :target="action.external ? '_blank' : undefined"
            :rel="action.external ? 'noopener noreferrer' : undefined"
            class="uppercase font-bold text-maroon border-b-2 border-maroon hover:text-maroon/70 hover:border-maroon/70 transition-colors text-sm tracking-wider px-0 text-center lg:mx-auto inline-block"
            @click="handleActionClick"
          >
            {{ action.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ResponsiveImage, BannerAction } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  /** Responsive background image configuration */
  backgroundImage: ResponsiveImage
  /** Optional action button configuration */
  action?: BannerAction
}>()

const emit = defineEmits<{
  /** Emitted when the action button is clicked */
  actionClick: [action: BannerAction]
}>()

const backgroundStyle = computed(() => ({
  '--img-sm': `url('${props.backgroundImage.small || props.backgroundImage.large}')`,
  '--img-lg': `url('${props.backgroundImage.large}')`,
}))

const captionClasses = [
  'py-10',
  'px-8',
  'lg:px-16',
  'bg-white',
  'max-w-[900px]',
  'mx-auto',
  'leading-relaxed',
  'lg:text-center',
  '[&_p:not(:last-child)]:mb-4',
]

function handleActionClick(event: MouseEvent) {
  if (props.action) {
    emit('actionClick', props.action)
    if (!props.action.url) {
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
.banner-bleeding-bg {
  background-image: var(--img-sm);
}

@media (min-width: 768px) {
  .banner-bleeding-bg {
    background-image: var(--img-lg);
  }
}
</style>
