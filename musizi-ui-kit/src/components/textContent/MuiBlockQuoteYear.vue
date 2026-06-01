<template>
  <div v-bind="$attrs" class="rounded-3xl bg-white overflow-hidden">
    <div :class="yearClasses">
      <slot />
      {{ year }}
    </div>

    <div class="text-xl p-10 prose">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  colourClassName: {
    type: String,
    default: 'bg-orange-600',
  },
  year: {
    type: String,
    default: '',
  },
});

const yearClasses = computed(() => [
  'text-center',
  'text-8xl',
  'font-bold',
  'font-poppins',
  'leading-[190px]',
  'text-white',
  props.colourClassName,
]);
</script>