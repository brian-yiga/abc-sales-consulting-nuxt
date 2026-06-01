<template>
  <div v-bind="$attrs" class="logo-button-card">
    <div class="logo-button-card__content">
      <div class="logo-button-card__image">
        <slot name="Image" />
      </div>

      <div class="logo-button-card__text mui-text--headline-2">
        <slot name="Text" />
      </div>

      <div class="logo-button-card__button">
        <MuiButton
          :label="button.text"
          :href="button.href"
          :external="button.external"
          variant="white-stroke"
          size="medium-small"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MuiButton } from '@/components/button'
import type { LogoButtonCardProps } from './types'

defineOptions({
  inheritAttrs: false,
})

defineProps<LogoButtonCardProps>()
</script>

<style scoped>
@reference "@/styles/_theme.css";

.logo-button-card {
  @apply text-white px-8 py-20 text-center bg-cover bg-maroon;
}

.logo-button-card__image {
  @apply flex justify-center;
}

.logo-button-card__text {
  @apply my-16;
}
</style>
