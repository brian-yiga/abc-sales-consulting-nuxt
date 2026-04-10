<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// If you are not using @nuxt/content, you can remove the useContent() line.
// For now, I've kept a fallback to 'ABC Sales Consulting'.
const { page } = useContent();

useHead({
  titleTemplate: '%s - ABC Sales Consulting',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png', // Changed to image/png since your file is a .png
      href: '/favicon.png' // This points to the public folder automatically
    }
  ]
});

useServerSeoMeta({
  title: page.value?.title || 'ABC Sales Consulting',
  ogTitle: page.value?.title || 'ABC Sales Consulting',
  description: page.value?.description || 'High-performance sales training and executive coaching across East Africa.',
  ogDescription: page.value?.description || 'Transforming sales teams into high-performance assets.',
  // Update this URL to a real banner image in your /public/img folder
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