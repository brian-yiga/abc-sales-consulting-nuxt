<script setup>
import { ref } from 'vue'

// Section Data - Add your Cloudinary and local assets here
const sections = ref([
  {
    id: 'moments',
    title: 'Moments of Impact',
    description: 'Discover moments that define our journey.',
    limit: 6,
    items: [
      { url: '/img/gallery/collaborative meeting.jpeg', type: 'image', caption: 'Collaborative Meeting' },
      { url: '/img/gallery/dahlinTraining.jpeg', type: 'image', caption: 'CEO Training' },
      { url: '/img/gallery/dahlinTraining2.jpeg', type: 'image', caption: 'CEO Training' },
      { url: 'https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760124801/PHOTO-2025-08-05-10-01-03_2_umoskl.jpg', type: 'image', caption: 'Group Meditation' },
      // ... Add the rest of your 20+ images here
    ]
  },
  {
    id: 'triumphs',
    title: 'Triumphs and Recognition',
    description: 'Celebrating our achievements and industry accolades.',
    limit: 6,
    items: [
      { url: '/img/gallery/goldmineCertificates.jpeg', type: 'image', caption: 'Goldmine Certificates' },
      { url: '/img/gallery/trainingSession.jpeg', type: 'image', caption: 'Training Session' },
      { url: '/img/gallery/collaborative meeting.jpeg', type: 'image', caption: 'Collaborative Meeting' },
      { url: '/img/gallery/prime staff.jpeg', type: 'image', caption: 'Prime Staff' },
      { url: '/img/gallery/alelaTraining.jpeg', type: 'image', caption: 'Alela Training' },
      { url: '/img/gallery/dahlinTraining.jpeg', type: 'image', caption: 'Dahlin Training' },
      { url: '/img/gallery/kanzuTraining.jpeg', type: 'image', caption: 'Kanzu Training' },
      { url: '/img/gallery/primeTraining.jpeg', type: 'image', caption: 'Prime Training' },
    ]
  },
  {
    id: 'visionaries',
    title: 'Meet the Visionaries',
    description: 'The leaders and advisors driving our success.',
    limit: 6,
    items: [
      { url: '/img/whoWeAre/Mr. Akampa Leon.jpeg', type: 'image', caption: 'Mr. Akampa Leon' },
      { url: '/img/whoWeAre/Mr. John Ddegeya Sekyeru.jpg', type: 'image', caption: 'Mr. John Ddegeya Sekyeru' },
      { url: '/img/whoWeAre/Mrs. Jassy Kabahiniza Ebwanyu.jpeg', type: 'image', caption: 'Mrs. Jassy Kabahiniza Ebwanyu' },
      { url: '/img/whoWeAre/Mrs. Josephine Sajjabi.jpg', type: 'image', caption: 'Mrs. Josephine Sajjabi' },
      { url: '/img/whoWeAre/Ms. Gloria Nakiguli.jpeg', type: 'image', caption: 'Ms. Gloria Nakiguli' },
      { url: '/img/whoWeAre/Ms. Primera Muthoni.jpeg', type: 'image', caption: 'Ms. Primera Muthoni' },
    ]
  },
  {
    id: 'trainings',
    title: 'Turning Clients Into Pros',
    limit: 6,
    items: [
      { url: 'https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125668/PHOTO-2025-08-29-08-23-24_e0txhc.jpg', type: 'image', caption: 'Turning Clients into Pros' },
      // ... more items
    ]
  },
  {
    id: 'videos',
    title: 'See it Happen',
    description: 'Experience our high-energy training sessions and keynotes.',
    limit: 6,
    items: [
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', type: 'video', thumbnail: '/img/bg-images/video-thumb.jpg' },
      // ... more videos
    ]
  }
])

// Logic to reveal more images
const handleViewMore = (index) => {
  sections.value[index].limit += 6
}

// Lightbox
const lightboxItem = ref(null)
const openLightbox = (item) => {
  lightboxItem.value = item
}
const closeLightbox = () => {
  lightboxItem.value = null
}
</script>

<template>
  <main class="gallery-page bg-gray-50 min-h-screen">
    <section class="relative bg-maroon min-h-[450px] flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden">
  
  <div 
    class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 bg-[url('/bg-images/bg-purple.jpg')]"
    aria-hidden="true"
  >
    <div class="absolute inset-0 bg-black/40"></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
    
    <h1 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
      Our <span class="text-white/90">Gallery</span>
    </h1>
    
    <p class="text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-medium leading-relaxed">
      Discover moments that define our journey — from impactful outreach and client trainings to awards and our amazing board.
    </p>

    <div class="flex flex-wrap justify-center gap-4 w-full">
      <MuiButton
        label="EXPLORE OUR STEPS"
        href="#moments"
        variant="all-white"
        class="!rounded-full px-10 py-4 text-sm font-bold tracking-widest shadow-xl transition-transform hover:scale-105"
      />
    </div>

  </div>
</section>

    <section v-for="(section, sIdx) in sections" :key="section.id" :id="section.id" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-10 border-l-4 border-maroon pl-4 italic" style="color: #db8f3d;">{{ section.title }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(item, iIdx) in section.items.slice(0, section.limit)" 
            :key="iIdx"
            class="group relative overflow-hidden bg-white shadow-md aspect-video cursor-pointer"
            @click="openLightbox(item)"
          >
            <img 
              v-if="item.type === 'image'"
              :src="item.url" 
              :alt="item.caption" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            <div v-else class="relative h-full">
              <img :src="item.thumbnail" :alt="item.caption" class="w-full h-full object-cover" />
              <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-white text-maroon shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>

            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
              <span class="text-white font-medium uppercase tracking-wider text-sm">
                {{ item.caption }}
              </span>
            </div>
          </div>
        </div>

        <div v-if="section.limit < section.items.length" class="mt-12 text-center">
          <button 
            @click="handleViewMore(sIdx)"
            class="px-10 py-3 border-2 border-black font-black uppercase hover:bg-[#7cbc56] hover:text-white transition-all"
          >
            View More
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="lightboxItem" class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6" @click="closeLightbox">
        <button class="absolute top-10 right-10 text-white text-4xl z-60" @click="closeLightbox">&times;</button>
        
        <div class="max-w-5xl w-full h-full flex items-center justify-center" @click.stop>
          <img v-if="lightboxItem.type === 'image'" :src="lightboxItem.url" :alt="lightboxItem.caption" class="max-w-full max-h-full shadow-2xl" />
          <iframe v-else :src="lightboxItem.url" class="w-full aspect-video shadow-2xl" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>