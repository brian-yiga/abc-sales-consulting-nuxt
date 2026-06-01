<template>
  <div
    v-bind="$attrs"
    class="bg-cover bg-[url('/img/CallToAction/background-blur.jpeg')] py-8 px-4 lg:mx-20 mt-4"
  >
    <div
      class="container flex flex-col sm:flex-row items-center justify-center"
    >
      <h2
        class="text-white font-poppins text-2xl sm:text-3xl font-bold mb-4 sm:mb-0 mr-6"
      >
        Join WINGS today
      </h2>

      <div class="flex flex-row gap-4">
        <Button variant="red-fill" label="contact us">contact us</Button>

        <Button variant="white-stroke" label="donate">donate</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MuiButton as Button } from '@components/button'

defineOptions({
  inheritAttrs: false,
})
</script>
