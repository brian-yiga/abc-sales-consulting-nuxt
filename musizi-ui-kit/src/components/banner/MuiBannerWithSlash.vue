<template>
  <div
    v-bind="$attrs"
    :style="backgroundStyle"
    class="banner-with-slash bg-cover bg-bottom relative h-[calc(100vh-82px)] md:max-lg:max-h-[500px] lg:h-[525px] lg:bg-center lg:mx-4"
  >
    <div
      class="absolute z-0 w-full lg:w-[80%] h-full bg-maroon mix-blend-multiply [clip-path:polygon(0%_0%,100%_0%,100%_40%,0%_85%)] lg:[clip-path:polygon(0%_0%,100%_0%,40%_100%,0%_100%)]"
    />

    <div class="container relative z-10 h-full flex flex-col lg:justify-end lg:pb-36">
      <div class="lg:w-1/2 max-lg:pt-28 max-w-[600px]">
        <div class="text-white font-bold font-poppins uppercase text-[40px] leading-[1.1] md:leading-tight mb-10">
          <slot name="title" />
        </div>

        <div v-if="action">
          <a
            :href="action.url"
            :target="action.external ? '_blank' : undefined"
            :rel="action.external ? 'noopener noreferrer' : undefined"
            class="grid grid-cols-[1fr_48px] w-60 border-2 border-white text-white uppercase font-poppins font-bold text-center leading-[48px] transition-all hover:bg-white hover:text-maroon cursor-pointer"
            @click="handleActionClick"
          >
            <span>{{ action.label }}</span>
            <span class="bg-white w-12 h-12 text-4xl flex items-center justify-center">
              <MuiIcon icon="arrow_downward" color="var(--color-maroon)" :size="24" />
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
  '--img-sm': `url('${props.backgroundImage.small || props.backgroundImage.large}')`,
  '--img-md': `url('${props.backgroundImage.medium || props.backgroundImage.large}')`,
  '--img-lg': `url('${props.backgroundImage.large}')`,
}))

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
.banner-with-slash {
  background-image: var(--img-sm);
}

@media (min-width: 768px) {
  .banner-with-slash {
    background-image: var(--img-md);
  }
}

@media (min-width: 1024px) {
  .banner-with-slash {
    background-image: var(--img-lg);
  }
}
</style>
