<template>
  <div v-bind="$attrs" class="bg-maroon p-8 lg:p-12 basis-[calc(33.33%-1.5rem)]">
    <div class="prose text-white">
      <slot />
    </div>

    <div class="pt-12">
      <Button variant="white-stroke" label="donate">donate</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MuiButton as Button } from '@components/button'

defineOptions({
  inheritAttrs: false,
})

defineProps({
  imgSrc: {
    type: String,
    default: '',
  },
})
</script>
