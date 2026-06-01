<template>
  <div v-bind="$attrs" class="bg-white p-8 max-lg:mb-8">
    <div class="mb-6">
      <div class="bg-maroon text-center text-white font-poppins font-bold text-3xl h-[60px] w-[60px] leading-[60px]">
        {{ number }}
      </div>
    </div>

    <h3 class="font-poppins uppercase font-bold text-zinc-600 text-2xl mb-6">
      {{ title }}
    </h3>

    <div class="prose">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  number: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>