<template>
  <div v-bind="$attrs">
    <div class="text-white text-center">
      <h3 class="text-2xl uppercase font-bold">
        {{ title }}
      </h3>

      <p class="font-semibold mt-2 mb-6">
        {{ description }}
      </p>

      <MuiButton
        :label="buttonLabel"
        :href="buttonHref"
        variant="white-stroke"
        size="large"
        external
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MuiButton from '../button/MuiButton.vue'

defineOptions({
  inheritAttrs: false,
})

export interface MuiNewsletterButtonLinkProps {
  /** The title text displayed above the description */
  title?: string

  /** The description text displayed below the title */
  description?: string

  /** The label for the button */
  buttonLabel?: string

  /** The URL the button links to */
  buttonHref: string
}

withDefaults(defineProps<MuiNewsletterButtonLinkProps>(), {
  title: 'Get Updates, Stay Informed',
  description: 'Get updates from Musizi University.',
  buttonLabel: 'Subscribe',
})
</script>

<style scoped>
@reference "@/styles/_theme.css";
</style>
