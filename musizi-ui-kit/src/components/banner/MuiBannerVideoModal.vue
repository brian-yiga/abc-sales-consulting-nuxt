<template>
  <div v-bind="$attrs" :style="backgroundStyle" class="banner-video-modal px-4 pb-32 lg:pb-16 bg-cover bg-center">
    <div
      class="text-white text-4xl uppercase font-bold font-poppins text-center leading-tight pt-32 pb-16 lg:pt-20 lg:pb-6 max-w-[950px] mx-auto lg:text-6xl"
    >
      <slot />
    </div>

    <picture class="object-cover">
      <source
        v-if="videoThumbnail.small"
        media="(max-width: 640px)"
        :srcset="videoThumbnail.small"
      >
      <source
        v-if="videoThumbnail.medium"
        media="(max-width: 1024px)"
        :srcset="videoThumbnail.medium"
      >
      <img
        :src="videoThumbnail.large"
        :alt="videoThumbnail.alt || 'Watch video'"
        class="block mx-auto cursor-pointer"
        @click="handlePlayClick"
      >
    </picture>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ResponsiveImage } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  /** Responsive background image configuration */
  backgroundImage: ResponsiveImage
  /** Video thumbnail/play button image configuration */
  videoThumbnail: ResponsiveImage
}>()

const emit = defineEmits<{
  /** Emitted when the video thumbnail is clicked */
  play: []
}>()

const backgroundStyle = computed(() => ({
  '--img-sm': `url('${props.backgroundImage.small || props.backgroundImage.large}')`,
  '--img-lg': `url('${props.backgroundImage.large}')`,
}))

function handlePlayClick() {
  emit('play')
}
</script>

<style scoped>
.banner-video-modal {
  background-image: var(--img-sm);
}

@media (min-width: 1024px) {
  .banner-video-modal {
    background-image: var(--img-lg);
  }
}
</style>
