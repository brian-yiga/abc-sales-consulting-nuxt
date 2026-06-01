<template>
  <div v-bind="$attrs" class="mui-carousel" :class="{ 'mui-carousel--vertical': orientation === 'vertical' }">
    <div class="mui-carousel__viewport" ref="emblaRef">
      <div class="mui-carousel__container" :class="containerClass">
        <slot />
      </div>
    </div>

    <!-- Navigation Arrows -->
    <template v-if="showArrows">
      <button
        class="mui-carousel__arrow mui-carousel__arrow--prev"
        :class="{ 'mui-carousel__arrow--disabled': !canScrollPrev }"
        :disabled="!canScrollPrev"
        @click="scrollPrev"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mui-carousel__arrow-icon">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        class="mui-carousel__arrow mui-carousel__arrow--next"
        :class="{ 'mui-carousel__arrow--disabled': !canScrollNext }"
        :disabled="!canScrollNext"
        @click="scrollNext"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mui-carousel__arrow-icon">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </template>

    <!-- Navigation Dots -->
    <div v-if="showDots && scrollSnaps.length > 1" class="mui-carousel__dots">
      <button
        v-for="(_, index) in scrollSnaps"
        :key="index"
        class="mui-carousel__dot"
        :class="{ 'mui-carousel__dot--active': index === selectedIndex }"
        @click="scrollTo(index)"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import type { CarouselProps } from './types'
import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<CarouselProps>(), {
  autoplay: false,
  autoplayDelay: 4000,
  autoscroll: false,
  autoscrollSpeed: 1,
  showArrows: false,
  showDots: false,
  orientation: 'horizontal',
  loop: true,
  itemsPerView: 1,
  containerClass: '',
})

const selectedIndex = ref(0)
const scrollSnaps = ref<number[]>([])
const canScrollPrev = ref(false)
const canScrollNext = ref(false)

// Build Embla options
const emblaOptions = computed<EmblaOptionsType>(() => ({
  loop: props.loop,
  axis: props.orientation === 'vertical' ? 'y' : 'x',
  align: 'start',
  containScroll: 'trimSnaps',
  slidesToScroll: typeof props.itemsPerView === 'number' ? 1 : 'auto',
}))

// Build plugins array
const plugins = computed<EmblaPluginType[]>(() => {
  const pluginList: EmblaPluginType[] = []

  if (props.autoplay && !props.autoscroll) {
    pluginList.push(
      Autoplay({
        delay: props.autoplayDelay,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    )
  }

  if (props.autoscroll) {
    pluginList.push(
      AutoScroll({
        speed: props.autoscrollSpeed,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    )
  }

  return pluginList
})

// Initialize Embla
const [emblaRef, emblaApi] = emblaCarouselVue(emblaOptions, plugins)

// Update carousel state
const onSelect = (api: EmblaCarouselType) => {
  selectedIndex.value = api.selectedScrollSnap()
  canScrollPrev.value = api.canScrollPrev()
  canScrollNext.value = api.canScrollNext()
}

const onInit = (api: EmblaCarouselType) => {
  scrollSnaps.value = api.scrollSnapList()
  onSelect(api)
}

// Navigation methods
const scrollPrev = () => {
  emblaApi.value?.scrollPrev()
}

const scrollNext = () => {
  emblaApi.value?.scrollNext()
}

const scrollTo = (index: number) => {
  emblaApi.value?.scrollTo(index)
}

// Setup event listeners
onMounted(() => {
  if (!emblaApi.value) return

  onInit(emblaApi.value)
  emblaApi.value.on('select', onSelect)
  emblaApi.value.on('reInit', onInit)
})

// Watch for API changes
watch(emblaApi, (api) => {
  if (!api) return

  onInit(api)
  api.on('select', onSelect)
  api.on('reInit', onInit)
})

// Cleanup
onUnmounted(() => {
  if (!emblaApi.value) return
  emblaApi.value.off('select', onSelect)
  emblaApi.value.off('reInit', onInit)
})

// Expose API for parent components
defineExpose({
  emblaApi,
  scrollPrev,
  scrollNext,
  scrollTo,
  selectedIndex,
})
</script>

<style scoped>
@reference "@/styles/_theme.css";

.mui-carousel {
  @apply relative w-full;
}

.mui-carousel__viewport {
  @apply overflow-hidden w-full;
}

.mui-carousel__container {
  @apply flex touch-pan-x;
}

.mui-carousel--vertical .mui-carousel__container {
  @apply flex-col;
}

/* Slide sizing - children don't shrink and handle overflow */
.mui-carousel__container > :deep(*) {
  @apply shrink-0 min-w-0;
}

/* Navigation Arrows */
.mui-carousel__arrow {
  @apply absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 text-zinc-700 rounded-full shadow-lg transition-all duration-200;
  @apply hover:bg-white hover:text-maroon hover:scale-110;
  @apply focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-offset-2;
}

.mui-carousel__arrow--prev {
  @apply left-4;
}

.mui-carousel__arrow--next {
  @apply right-4;
}

.mui-carousel__arrow--disabled {
  @apply opacity-50 cursor-not-allowed hover:scale-100 hover:text-zinc-700;
}

.mui-carousel__arrow-icon {
  @apply w-6 h-6;
}

/* Navigation Dots */
.mui-carousel__dots {
  @apply flex justify-center gap-2 mt-4;
}

.mui-carousel__dot {
  @apply w-3 h-3 rounded-full bg-zinc-300 transition-all duration-200;
  @apply hover:bg-zinc-400;
  @apply focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-offset-2;
}

.mui-carousel__dot--active {
  @apply bg-maroon w-6;
}
</style>
