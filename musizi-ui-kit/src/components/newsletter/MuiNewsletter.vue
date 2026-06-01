<template>
  <div
    v-bind="$attrs"
    class="newsletter-container"
    :class="containerClasses"
  >
    <div class="newsletter-title-description-wrapper">
      <h3 class="newsletter-title">
        Get Updates, Stay Informed
      </h3>

      <p class="newsletter-description">
        Get updates from Musizi University Foundation.
      </p>
    </div>

    <div
      class="ml-embedded"
      :data-form="formId"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

defineOptions({
  inheritAttrs: false,
})

export interface MuiNewsletterProps {
  /** The MailerLite embedded form ID */
  formId: string

  /**
   * Array of CSS classes to apply to the container.
   * @default ['bg-maroon']
   */
  containerClasses?: string[]
}

withDefaults(defineProps<MuiNewsletterProps>(), {
  containerClasses: () => ['bg-maroon'],
})

declare global {
  interface Window {
    ml?: (command: string, accountId: string) => void
  }
}

onMounted(() => {
  // Check if MailerLite is already initialized
  if (window.ml) return

  // Initialize MailerLite
  const initScript = document.createElement('script')
  initScript.textContent = `
    (function(w,d,e,u,f,l,n){
      w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},
      l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);
    })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '614008');
  `
  document.body.appendChild(initScript)
})
</script>

<style scoped>
@reference "@/styles/_theme.css";

/* Base container - enables container queries */
.newsletter-container {
  container-type: inline-size;
}

.newsletter-title-description-wrapper {
  color: #fff;
}

/* Base styles (vertical/small container) */
.newsletter-title {
  @apply text-2xl uppercase font-bold mb-4;
}

.newsletter-description {
  @apply text-base font-semibold mb-4;
}

/* Shared form styles - :not(#_) adds ID-level specificity to override MailerLite's ID selectors */
.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody),
.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody) {
  padding: 0 !important;
}

.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent),
.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow) {
  margin-bottom: 8px !important;
}

.newsletter-container:not(#_) :deep(.ml-form-recaptcha) {
  float: none !important;
  margin-bottom: 8px !important;
}

.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button[type="submit"]) {
  padding: 1rem !important;
  border: solid 3px #fff !important;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  font-size: 1.125rem !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  transition: all .3s ease-in;
}

.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button[type="submit"]:hover),
.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button[type="submit"]:focus) {
  background-color: #fff !important;
  color: #333 !important;
}

.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p),
.newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p) {
  color: #fff !important;
  text-align: center !important;
}

/* Horizontal layout for larger containers */
@container (min-width: 700px) {
  .newsletter-title-description-wrapper {
    text-align: center;
  }

  .newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input) {
    height: 76px !important;
  }

  .newsletter-container:not(#_) :deep(.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button[type="submit"]) {
    height: 76px !important;
  }

  .newsletter-container:not(#_) :deep(.g-recaptcha > div) {
    height: auto !important;
  }

  .newsletter-container:not(#_) :deep(form) {
    display: grid !important;
    gap: 2px;
    justify-content: center !important;
    grid-template-columns: 310px 305px 180px !important;
  }

  .newsletter-container:not(#_) :deep(form > *) {
    margin: 0 0 4px !important;
    float: none !important;
    width: auto !important;
  }

  .newsletter-container:not(#_) :deep(.ml-form-recaptcha) {
    margin-bottom: 0 !important;
  }
}
</style>
