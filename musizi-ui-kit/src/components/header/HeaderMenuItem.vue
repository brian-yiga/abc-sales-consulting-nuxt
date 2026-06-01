<template>
  <li v-bind="$attrs" :class="parentMenuItemClasses">
    <span>
      <a
        :href="menuItem.url"
        :title="menuItem.desc"
      >
        {{ menuItem.text }}
      </a>

      <span
        v-if="hasSubMenu"
        class="lg:hidden cursor-pointer"
        @click="toggleSubMenu"
      >
        <span class="inline-block h-7 w-7 text-white">▼</span>
      </span>
    </span>

    <transition name="sub-menu">
      <div v-if="isShowingSubMenu">
        <ul>
          <li
            v-for="childMenuItem in childMenuItems"
            :key="`sub-menu-${childMenuItem.text}`"
          >
            <a
              :href="childMenuItem.url"
              :title="childMenuItem?.desc"
              :class="getChildMenuItemClasses(childMenuItem.url)"
            >
              {{ childMenuItem.text }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

defineOptions({
  inheritAttrs: false,
})

interface MenuItem {
  text: string
  url: string
  desc?: string
  childrenItems?: MenuItem[]
}

const props = defineProps<{
  menuItem: MenuItem
  currentPath?: string
}>()

const hasSubMenu = computed(() => (props.menuItem?.childrenItems?.length ?? 0) > 0)
const toggleSubMenuToShowValue = ref(false)

const parentMenuItemClasses = reactive({
  'with-sub-menu': hasSubMenu.value,
  'active': computed(() => props.currentPath?.includes(props.menuItem.url) ?? false),
})

const isMobileDisplay = ref(false)
const handleResize = () => {
  isMobileDisplay.value = window.innerWidth < 1024
}

const isShowingSubMenu = computed(() => (
  hasSubMenu.value
  && (
    (isMobileDisplay.value && toggleSubMenuToShowValue.value)
    || (!isMobileDisplay.value)
  )
))

const childMenuItems = computed(() => props.menuItem.childrenItems ?? [])

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function toggleSubMenu() {
  toggleSubMenuToShowValue.value = !toggleSubMenuToShowValue.value
}

function getChildMenuItemClasses(url: string) {
  const urlPartsCount = url?.split('/')?.length || 0
  return {
    'active': props.currentPath === url || (urlPartsCount > 2 && (props.currentPath?.includes(url) ?? false)),
  }
}
</script>
