<template>
  <div v-bind="$attrs" class="bg-white mb-4 md:mb-0">
    <div class="bg-gray-300 pt-2">
      <a
        v-if="url"
        :href="url"
      >
        <img
          :src="imgSrc"
          :alt="imgAlt"
          height="245"
          width="auto"
          class="mx-auto h-[245px] object-cover"
        />
      </a>
      <img
        v-else
        :src="imgSrc"
        :alt="imgAlt"
        height="245"
        width="auto"
        class="mx-auto h-[245px] object-cover"
      />
    </div>

    <div class="p-7">
      <h3 class="profile-card-title text-2xl font-bold uppercase font-poppins mb-4">
        {{ title }}
      </h3>

      <div class="mb-6 leading-loose">
        {{ description }}
      </div>

      <div v-if="url && buttonText">
        <a
          :href="url"
          class="profile-card-button"
        >
          {{ buttonText }}
        </a>
      </div>

      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileCardProps } from './types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<ProfileCardProps>(), {
  imgAlt: '',
  url: '',
  buttonText: '',
})
</script>

<style scoped>
.profile-card-title {
  color: var(--profile-card-title-color, #000);
}

.profile-card-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid currentColor;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s ease;
}

.profile-card-button:hover {
  opacity: 0.8;
}
</style>
