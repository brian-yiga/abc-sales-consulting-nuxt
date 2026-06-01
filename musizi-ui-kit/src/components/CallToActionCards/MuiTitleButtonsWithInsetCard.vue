<template>
  <div v-bind="$attrs">
    <div>
      <div
        class="p-6 py-12 bg-maroon bg-cover bg-[url('/img/CallToAction/footer-red-bg-small.jpg')] md:py-12 md:p-12 md:bg-[url('/img/CallToAction/footer-red-bg-medium.jpg')] lg:bg-[url('/img/CallToAction/footer-red-bg-large.jpg')]"
      >
        <div class="grid gap-8 md:gap-12 lg:grid-cols-[1fr_1px_400px] xl:grid-cols-[1fr_1px_460px]">
          <div class="flex flex-col justify-center">
            <h3 class="font-poppins font-bold text-white text-5xl text-center mb-4 lg:mb-8">
              Let's create a better world.
            </h3>

            <div class="flex flex-col items-center gap-4 md:flex-row md:justify-center">
              <Button variant="white-stroke" label="contact us">Contact Us</Button>
              <Button variant="white-stroke" label="donate">Donate</Button>
            </div>
          </div>

          <div class="bg-white h-full w-px" />

          <div
            class="bg-maroon bg-opacity-25 text-white p-8 leading-relaxed text-center flex flex-col justify-center md:p-14 lg:text-left lg:p-8 xl:p-14"
          >
            Musizi University Foundation is a 501(c)(3) organization. Gifts are tax deductible to
            the full extent allowable under the law.
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { MuiButton as Button } from '@components/button'

defineOptions({
  inheritAttrs: false,
})

defineProps({
  url: {
    type: String,
    default: '#',
  },
})
</script>
