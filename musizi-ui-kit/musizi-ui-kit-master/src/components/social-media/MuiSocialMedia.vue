<template>
  <a
    v-bind="$attrs"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="computedAriaLabel"
    class="mui-social-media"
    :style="cssVars"
  >
    <MuiIcon :name="iconName" :size="computedSize" />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MuiIcon } from '@components/icon'
import type { SocialMediaProps, SocialPlatform } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SocialMediaProps>(), {
  size: 'md',
  color: 'currentColor',
  hoverColor: 'white',
})

const PLATFORM_ICONS: Record<SocialPlatform, string> = {
  linkedin: 'simple-icons:linkedin',
  youtube: 'simple-icons:youtube',
  instagram: 'simple-icons:instagram',
  facebook: 'simple-icons:facebook',
  twitter: 'simple-icons:x',
  tiktok: 'simple-icons:tiktok',
}

const SIZE_MAP: Record<string, number> = {
  sm: 24,
  md: 32,
  lg: 48,
}

const PLATFORM_LABELS: Record<SocialPlatform, string> = {
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  instagram: 'Instagram',
  facebook: 'Facebook',
  twitter: 'Twitter',
  tiktok: 'TikTok',
}

const iconName = computed(() => PLATFORM_ICONS[props.platform])

const computedSize = computed(() => {
  if (typeof props.size === 'number') {
    return props.size
  }
  return SIZE_MAP[props.size] ?? SIZE_MAP.md
})

const computedAriaLabel = computed(() => {
  return props.ariaLabel ?? PLATFORM_LABELS[props.platform]
})

const cssVars = computed(() => ({
  '--mui-social-color': props.color,
  '--mui-social-hover-color': props.hoverColor,
}))
</script>

<style scoped>
.mui-social-media {
  display: inline-block;
  color: var(--mui-social-color);
  transition: color 0.2s ease;
}

.mui-social-media:hover {
  color: var(--mui-social-hover-color);
}
</style>
