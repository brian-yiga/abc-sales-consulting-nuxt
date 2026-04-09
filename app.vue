<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const { page } = useContent();

useHead({
  titleTemplate: '%s - Musizi University',
  htmlAttrs: {
    lang: 'en',
  },
});

useServerSeoMeta({
  // Adding ?. and || 'Musizi' prevents the 500 error
  title: page.value?.title || 'Musizi University',
  ogTitle: page.value?.title || 'Musizi University',
  description: page.value?.description || 'Educating future African Leaders',
  ogDescription: page.value?.description || 'Educating future African Leaders',
  ogImage: page.value?.ogImg ? page.value.ogImg : 'https://musizifoundation.org/img/banners/header-about-medium.jpg',
});
</script>

<style scoped>

</style>
