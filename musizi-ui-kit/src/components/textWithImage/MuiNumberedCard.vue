<template>
  <div
    v-bind="$attrs"
    class="bg-white"
    :class="containerClasses"
  >
    <div :class="imageContainerClasses">
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="w-full h-full object-cover bg-slate-600"
      />
    </div>

    <div class="p-4 lg:p-8">
      <h2 class="numbered-card-title font-semibold mb-4 normal-case font-poppins text-2xl">
        {{ title }}
      </h2>

      <div class="prose">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { NumberedCardProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NumberedCardProps>(), {
  imgAlt: '',
  imagePosition: 'right', 
})

const containerClasses = computed(() => {
  if (props.imagePosition === 'left') {
    return 'lg:grid lg:grid-cols-2 lg:col-span-2'
  }
  return 'basis-[calc(33.33%-1.5rem)] mb-8 lg:mb-0'
})

const imageContainerClasses = computed(() => {
  if (props.imagePosition === 'left') {
    return ''
  }
  return ''
})
</script>

<style scoped>
.numbered-card-title {
  color: var(--numbered-card-title-color, #C10230);
}
</style>
