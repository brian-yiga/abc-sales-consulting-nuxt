<template>
  <header v-bind="$attrs" class="page-header">
    <nav
      class="
        container grid grid-cols-[200px_40px] justify-between
        lg:grid-cols-[200px_1fr_150px] lg:h-[88px] lg:items-center
        xl:grid-cols-[240px_1fr_150px]
      "
    >
      <a :href="logoUrl">
        <img
          :src="logoSrc"
          :alt="logoAlt"
          class="w-auto h-[50px] lg:h-[56px]"
        >
      </a>

      <input
        id="menu-toggle"
        v-model="menuIsShowing"
        type="checkbox"
        class="hidden lg:hidden"
      >

      <label
        class="menu-button-container lg:hidden"
        for="menu-toggle"
      >
        <div class="menu-button" />
      </label>

      <slot name="menu" />

      <slot name="cta">
        <a
          v-if="ctaUrl"
          :href="ctaUrl"
          class="hidden btn btn--big lg:block"
        >
          {{ ctaText }}
        </a>
      </slot>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

defineOptions({
  inheritAttrs: false,
})

defineProps({
  logoSrc: {
    type: String,
    default: '/img/logo.svg',
  },
  logoAlt: {
    type: String,
    default: 'Logo',
  },
  logoUrl: {
    type: String,
    default: '/',
  },
  ctaUrl: {
    type: String,
    default: '',
  },
  ctaText: {
    type: String,
    default: 'Donate',
  },
});

const menuIsShowing = ref(false);

watch(menuIsShowing, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>
