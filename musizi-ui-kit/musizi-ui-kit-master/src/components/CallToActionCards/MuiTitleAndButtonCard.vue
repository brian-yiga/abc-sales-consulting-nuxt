<template>
  <div
    v-bind="$attrs"
    class="mb-4 p-16 text-center bg-maroon bg-cover bg-[url('/img/CallToAction/events-sign-up-sm.jpg')] lg:bg-[url('/img/CallToAction/events-sign-up-lg.jpg')]"
  >
    <h3 class="font-poppins mb-4 uppercase font-bold text-2xl text-white">
      <slot />
    </h3>

    <div>
      <a
        :href="url"
        target="_blank"
        class="inline-block px-8 py-3 rounded text-center font-poppins font-semibold uppercase border-white text-white text-base leading-none transition-all hover:bg-white hover:text-black border-2"
      >
        Sign up here
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  url: {
    type: String,
    default: '#',
  },
})
const { url } = props
</script>

