<template>
  <div>
    <NuxtPage />
    <!-- Global Discovery Form -->
    <DiscoveryForm ref="formRef" />
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import DiscoveryForm from "~/components/DiscoveryForm.vue";

const formRef = ref(null);
const { setFormRef } = useDiscoveryForm();

// Keep your form logic
watchEffect(() => {
  if (formRef.value) {
    setFormRef(formRef.value);
  }
});

// Set global SEO (Your index.md will handle the home page SEO automatically)
useHead({
  titleTemplate: '%s | ABC Sales Consulting',
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
});

useServerSeoMeta({
  title: 'ABC Sales Consulting',
  description: 'High-performance sales training and executive coaching across East Africa.',
  ogImage: 'https://abcsalesconsulting.com/img/og-banner.jpg',
  twitterCard: 'summary_large_image',
});
</script>

<style>
/* Global styles can go here if needed */
body {
  margin: 0;
  font-family: 'Inter', sans-serif; /* Or your preferred brand font */
}
</style>