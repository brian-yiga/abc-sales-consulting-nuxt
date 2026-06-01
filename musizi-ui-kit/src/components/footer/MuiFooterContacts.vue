<template>
  <div
    v-bind="$attrs"
    class="footer-contacts-container"
    :class="containerClasses"
  >
    

    <div class="grid md:grid-cols-2 text-base">
      <div class="max-md:text-center">
        <p class="font-poppins font-bold uppercase max-md:text-2xl max-md:mb-4">
          Contact Us
        </p>

        <p>
          <a
            :href="`mailto:${email}`"
            class="text-white"
          >
            {{ email }}
          </a>

          <span class="max-md:hidden"> • </span>
          <br class="md:hidden">
          {{ phone }}
        </p>

        <p>
          {{ address }}
        </p>

        <div class="flex gap-4 mt-4 justify-center md:justify-start">
          <MuiSocialMedia platform="linkedin" href="https://www.linkedin.com/company/musizi-university" size="md" color="white" hover-color="white" />
          <MuiSocialMedia platform="youtube" href="https://www.youtube.com/@MUSIZIUNIVERSITY" size="md" color="white" hover-color="white" />
          <MuiSocialMedia platform="twitter" href="https://x.com/MusiziUni" size="md" color="white" hover-color="white" />
          <MuiSocialMedia platform="instagram" href="https://www.instagram.com/musiziu/" size="md" color="white" hover-color="white" />
        </div>
      </div>

      <div class="flex flex-col justify-center items-center md:items-end max-md:mt-6">
        <a
          :href="googleMapsUrl"
          target="_blank"
          class="block text-white uppercase font-poppins font-bold text-center py-4 md:py-6 w-72 border-white border-[3px] transition-all hover:bg-white hover:text-zinc-800"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MuiSocialMedia from '../social-media/MuiSocialMedia.vue';

defineOptions({
  inheritAttrs: false,
})

export interface MuiFooterContactsProps {
  containerClasses?: string[];
  email?: string;
  phone?: string;
  address?: string;
  googleMapsUrl?: string;
}

withDefaults(defineProps<MuiFooterContactsProps>(), {
  containerClasses: () => ['bg-maroon', 'text-white'],
  email: 'info@musizi.ac.ug',
  phone: '+256 753 136473 • +256 704 415029',
  address: "Plot 5B, Kindergarten Close, Ministers' Village, Ntinda, Kampala, Uganda",
  googleMapsUrl: 'https://maps.app.goo.gl/nVXkwdJyQHR2kfK48'
})
</script>