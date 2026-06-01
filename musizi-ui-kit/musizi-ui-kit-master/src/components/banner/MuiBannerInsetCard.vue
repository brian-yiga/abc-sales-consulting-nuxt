<template>
  <div
    v-bind="$attrs"
    :style="backgroundStyle"
    class="md:bg-cover relative bg-position-[60%_80%] bg-size-[400%] md:bg-size-[100%] md:bg-position-[20%_25%] md:bg-center h-[830px] sm:h-[calc(100vh-82px)] max-h-[933px] lg:h-[525px] lg:mx-4"
  >
    <div
      class="absolute z-0 bg-purple/90 w-[90%] h-[40%] left-[5%] bottom-[5%] md:w-[600px] md:h-full md:bottom-0 md:left-0 md:[clip-path:polygon(10%_10%,100%_10%,100%_90%,10%_90%)]"
    >
      <div class="h-full w-full flex flex-col items-center justify-center md:items-start md:justify-center md:pl-36">
        <div
          class="text-white font-poppins text-[40px] leading-tight mb-4 md:mb-8 text-center md:text-left max-w-[279px] md:max-w-full"
        >
          <slot name="title" />
        </div>

        <div v-if="action">
          <a
            :href="action.url"
            :target="action.external ? '_blank' : undefined"
            :rel="action.external ? 'noopener noreferrer' : undefined"
            class="grid grid-cols-[1fr_40px] sm:grid-cols-[1fr_48px] w-44 sm:w-60 border-2 hover:border-maroon border-white text-white uppercase font-poppins font-bold text-center leading-[40px] sm:leading-[48px] transition-all hover:text-maroon cursor-pointer"
            @click="handleActionClick"
          >
            <span class="bg-maroon hover:bg-white">{{ action.label }}</span>
            <span class="bg-white w-10 sm:w-12 h-10 sm:h-12 text-3xl sm:text-4xl flex items-center justify-center">
              <MuiIcon icon="arrow_forward" color="var(--color-maroon)" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import MuiIcon from '@components/icon/MuiIcon.vue'
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
  backgroundImage: `url('${props.backgroundImage.large}')`,
}))

function handleActionClick(event: MouseEvent) {
  if (props.action) {
    emit('actionClick', props.action)
    // If no URL, prevent default anchor behavior
    if (!props.action.url) {
      event.preventDefault()
    }
  }
}
</script>
