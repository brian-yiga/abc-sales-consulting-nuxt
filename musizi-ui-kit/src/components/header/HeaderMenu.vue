<template>
  <div v-bind="$attrs">
    <ul>
      <HeaderMenuItem
        v-for="menuItem in menuItems"
        :key="menuItem.text"
        :menu-item="menuItem"
      />
    </ul>

    <div v-if="ctaUrl" class="container mt-4 lg:hidden">
      <a
        :href="ctaUrl"
        class="btn btn--big btn--white"
      >
        {{ ctaText }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderMenuItem from './HeaderMenuItem.vue'

defineOptions({
  inheritAttrs: false,
})

interface MenuItem {
  text: string
  url: string
  desc?: string
  childrenItems?: MenuItem[]
}

withDefaults(defineProps<{
  menuItems: MenuItem[]
  ctaUrl?: string
  ctaText?: string
}>(), {
  menuItems: () => [],
  ctaUrl: '',
  ctaText: 'Donate',
})
</script>
