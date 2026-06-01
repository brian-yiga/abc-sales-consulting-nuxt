<template>
  <div class="relative" :data-menu-bp="props.menuBreakpoint ?? 'lg'">
    <header v-bind="$attrs" class="flex items-center justify-between px-6 py-4 md:px-8 bg-white/20 backdrop-blur-[10px] border border-white/10">
      <div class="flex items-center">
        <span :class="['block', logoBp.hideSmall]">
          <MuiLogoMu class="h-12 w-auto" />
        </span>

        <span :class="['hidden', logoBp.showFull]">
          <slot name="logo" />
        </span>
      </div>

      <!-- Desktop menu: visible at >= menuBreakpoint -->
      <nav v-if="hasMenu" :class="['hidden items-center mui-header-blur-menu', bp.showDesktop]">
        <ul v-if="hasMenuLinks">
          <li v-for="link in menuLinks" :key="link.href">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
        <slot v-else name="menu" />
      </nav>

      <div class="flex items-center gap-3">
        <!-- Hamburger toggle -->
        <button
          v-if="hasMenu"
          type="button"
          :class="['relative flex h-10 w-10 items-center justify-center', bp.hideDesktop]"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <span
            class="absolute h-0.5 w-6 bg-white transition-transform duration-300"
            :class="menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'"
          />
          <span
            class="absolute h-0.5 w-6 bg-white transition-opacity duration-300"
            :class="menuOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute h-0.5 w-6 bg-white transition-transform duration-300"
            :class="menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'"
          />
        </button>

        <div v-if="button?.text" :class="hasMenu ? 'hidden ' + bp.showDesktop + ' items-center' : 'flex items-center'">
          <MuiButton
            :label="button.text"
            :href="button.href"
            variant="all-white"
            size="medium-small"
          />
        </div>
      </div>
    </header>

    <!-- Mobile overlay menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen && hasMenu"
        :class="['absolute left-0 right-0 top-full z-50 bg-white/20 backdrop-blur-[10px] border border-t-0 border-white/10', bp.hideDesktop]"
      >
        <div class="mui-header-blur-menu">
          <ul v-if="hasMenuLinks">
            <li v-for="link in menuLinks" :key="link.href">
              <a :href="link.href" @click="closeMenu">{{ link.text }}</a>
            </li>
          </ul>
          <slot v-else name="menu" />
        </div>
        <div v-if="button?.text" class="px-4 pb-4" @click="closeMenu">
          <MuiButton
            :label="button.text"
            :href="button.href"
            variant="all-white"
            size="medium-small"
            class="w-full"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, watch, onBeforeUnmount } from 'vue'
import { MuiButton } from '@components/button'
import { MuiLogoMu } from '@components/logo'
import type { HeaderBlurBgProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<HeaderBlurBgProps>()

const menuOpen = defineModel<boolean>('menuOpen', { default: false })

// Literal class strings so Tailwind's scanner can find them via @source
const MENU_BP_CLASSES = {
  sm: { showDesktop: 'sm:flex', hideDesktop: 'sm:hidden' },
  md: { showDesktop: 'md:flex', hideDesktop: 'md:hidden' },
  lg: { showDesktop: 'lg:flex', hideDesktop: 'lg:hidden' },
  xl: { showDesktop: 'xl:flex', hideDesktop: 'xl:hidden' },
} as const

const bp = computed(() => MENU_BP_CLASSES[props.menuBreakpoint ?? 'lg'])

const LOGO_BP_CLASSES = {
  sm: { showFull: 'sm:block', hideSmall: 'sm:hidden' },
  md: { showFull: 'md:block', hideSmall: 'md:hidden' },
  lg: { showFull: 'lg:block', hideSmall: 'lg:hidden' },
  xl: { showFull: 'xl:block', hideSmall: 'xl:hidden' },
} as const

const logoBp = computed(() => LOGO_BP_CLASSES[props.logoBreakpoint ?? 'md'])

const slots = useSlots()
const hasMenuLinks = computed(() => !!props.menuLinks?.length)
const hasMenu = computed(() => hasMenuLinks.value || !!slots.menu)

watch(menuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('overflow-hidden')
  }
})

function closeMenu() {
  menuOpen.value = false
}

defineExpose({ closeMenu })
</script>

<style scoped>
.mui-header-blur-menu :deep(> ul) {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
}

.mui-header-blur-menu :deep(li) {
  border-bottom: 1px solid rgb(255 255 255 / 0.2);
}

.mui-header-blur-menu :deep(a) {
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: white;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.mui-header-blur-menu :deep(a:hover),
.mui-header-blur-menu :deep(a.router-link-active),
.mui-header-blur-menu :deep(a.active) {
  text-decoration: underline;
}

@media (min-width: 640px) {
  [data-menu-bp="sm"] .mui-header-blur-menu :deep(> ul) { flex-direction: row; gap: 1.5rem; padding: 0; }
  [data-menu-bp="sm"] .mui-header-blur-menu :deep(li) { border-bottom: none; }
  [data-menu-bp="sm"] .mui-header-blur-menu :deep(a) { padding-top: 0; padding-bottom: 0; font-size: 1rem; line-height: 1.5rem; text-transform: uppercase; font-weight: 700; font-family: var(--font-poppins, 'Poppins', sans-serif); }
}

@media (min-width: 768px) {
  [data-menu-bp="md"] .mui-header-blur-menu :deep(> ul) { flex-direction: row; gap: 1.5rem; padding: 0; }
  [data-menu-bp="md"] .mui-header-blur-menu :deep(li) { border-bottom: none; }
  [data-menu-bp="md"] .mui-header-blur-menu :deep(a) { padding-top: 0; padding-bottom: 0; font-size: 1rem; line-height: 1.5rem; text-transform: uppercase; font-weight: 700; font-family: var(--font-poppins, 'Poppins', sans-serif); }
}

@media (min-width: 1024px) {
  [data-menu-bp="lg"] .mui-header-blur-menu :deep(> ul) { flex-direction: row; gap: 1.5rem; padding: 0; }
  [data-menu-bp="lg"] .mui-header-blur-menu :deep(li) { border-bottom: none; }
  [data-menu-bp="lg"] .mui-header-blur-menu :deep(a) { padding-top: 0; padding-bottom: 0; font-size: 1rem; line-height: 1.5rem; text-transform: uppercase; font-weight: 700; font-family: var(--font-poppins, 'Poppins', sans-serif); }
}

@media (min-width: 1280px) {
  [data-menu-bp="xl"] .mui-header-blur-menu :deep(> ul) { flex-direction: row; gap: 1.5rem; padding: 0; }
  [data-menu-bp="xl"] .mui-header-blur-menu :deep(li) { border-bottom: none; }
  [data-menu-bp="xl"] .mui-header-blur-menu :deep(a) { padding-top: 0; padding-bottom: 0; font-size: 1rem; line-height: 1.5rem; text-transform: uppercase; font-weight: 700; font-family: var(--font-poppins, 'Poppins', sans-serif); }
}
</style>
