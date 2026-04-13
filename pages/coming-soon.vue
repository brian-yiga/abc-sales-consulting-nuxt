<template>
  <MuiPageContainer class="min-h-[70vh] flex flex-col items-center justify-center text-center">
    <div class="space-y-6">
      <MuiLogoMu class="h-24 w-auto mx-auto opacity-20" />
      <h1 class="text-4xl md:text-6xl font-bold text-maroon uppercase tracking-tighter">
        COMING SOON
      </h1>
      <p class="text-gray-600 max-w-md mx-auto">
        We are currently building the <strong>ABC Sales Consulting</strong> digital experience. 
        Check back shortly for any updates.
      </p>
      <NuxtLink 
        to="/" 
        class="inline-block bg-maroon text-white px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-opacity-90 transition-all"
      >
        Back to Home
      </NuxtLink>
    </div>
  </MuiPageContainer>
</template>

<script setup>
useHead({ title: 'Coming Soon' })
</script>