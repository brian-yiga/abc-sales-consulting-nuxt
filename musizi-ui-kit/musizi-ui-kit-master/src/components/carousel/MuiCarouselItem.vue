<template>
  <div v-bind="$attrs" class="mui-carousel-item">
    <!-- Custom variant: full control via slot -->
    <template v-if="variant === 'custom'">
      <slot />
    </template>

    <!-- Image variant: just the image -->
    <template v-else-if="variant === 'image'">
      <slot>
        <img :src="src" :alt="alt" class="mui-carousel-item__image" />
      </slot>
    </template>

    <!-- Content variant: image with title, description, and CTA -->
    <template v-else-if="variant === 'content'">
      <div class="mui-carousel-item__content-wrapper">
        <slot>
          <img :src="src" :alt="alt" class="mui-carousel-item__image" />
        </slot>
        <div class="mui-carousel-item__overlay">
          <div class="mui-carousel-item__text">
            <h3 v-if="title" class="mui-carousel-item__title">{{ title }}</h3>
            <p v-if="description" class="mui-carousel-item__description">
              {{ description }}
            </p>
            <a
              v-if="cta"
              :href="cta.href || '#'"
              class="mui-carousel-item__cta"
            >
              {{ cta.label }}
            </a>
          </div>
        </div>
      </div>
    </template>

    <!-- Button variant: image with just a CTA button overlay -->
    <template v-else-if="variant === 'button'">
      <div class="mui-carousel-item__button-wrapper">
        <slot>
          <img :src="src" :alt="alt" class="mui-carousel-item__image" />
        </slot>
        <div class="mui-carousel-item__button-overlay">
          <a
            v-if="cta"
            :href="cta.href || '#'"
            class="mui-carousel-item__cta"
          >
            {{ cta.label }}
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { CarouselItemProps } from './types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<CarouselItemProps>(), {
  variant: 'image',
})
</script>

<style scoped>
@reference "@/styles/_theme.css";

.mui-carousel-item {
  @apply w-full h-full shrink-0 basis-full;
}

.mui-carousel-item__image {
  @apply w-full h-full object-cover;
}

.mui-carousel-item__content-wrapper,
.mui-carousel-item__button-wrapper {
  @apply relative w-full h-full;
}

.mui-carousel-item__overlay {
  @apply absolute inset-0 bg-black/50 flex items-center justify-center;
}

.mui-carousel-item__text {
  @apply text-center text-white px-4 max-w-2xl;
}

.mui-carousel-item__title {
  @apply font-poppins font-bold text-2xl md:text-4xl mb-4;
}

.mui-carousel-item__description {
  @apply font-sans text-base md:text-lg mb-6;
}

.mui-carousel-item__button-overlay {
  @apply absolute inset-0 flex items-center justify-center bg-black/30;
}

.mui-carousel-item__cta {
  @apply font-poppins font-semibold border-white text-center uppercase px-7 py-3.5 border-3 text-white text-lg leading-none transition-all duration-300 cursor-pointer no-underline inline-block;
  @apply hover:bg-white hover:text-maroon hover:border-white;
}
</style>
