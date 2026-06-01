<template>
  <div
    v-bind="$attrs"
    class="footer-credits-container grid grid-cols-2 text-xs"
    :class="containerClasses"
  >
    <div>
      &copy; All Rights Reserved
    </div>

    <div class="text-right">
      <a
        href="https://www.1010avenue.com/"
        target="_blank"
        class="font-poppins uppercase font-bold"
      >
        Designed by 10/10 Ave
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

export interface MuiFooterCreditsProps {
  /**
   * Array of CSS classes to apply to the container.
   * @default ['text-white', 'py-7']
   */
  containerClasses?: string[]
}

withDefaults(defineProps<MuiFooterCreditsProps>(), {
  containerClasses: () => ['text-white', 'py-7'],
})
</script>
