<script setup>
import { ref } from "vue";
import { MuiButton } from "@northgreenug/musizi-ui-kit";

useHead({ title: 'Gallery' });

// Section Data - Add your Cloudinary and local assets here
const sections = ref([
  {
    id: "moments",
    title: "Moments of Impact",
    description: "Discover moments that define our journey.",
    limit: 6,
    items: [
      {
        url: "/img/gallery/collaborative meeting.jpeg",
        type: "image",
        caption: "Collaborative Meeting",
      },
      {
        url: "/img/gallery/dahlinTraining.jpeg",
        type: "image",
        caption: "CEO Training",
      },
      {
        url: "/img/gallery/dahlinTraining2.jpeg",
        type: "image",
        caption: "CEO Training",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125550/PHOTO-2025-08-28-14-36-10_2_j9ecek.jpg",
        type: "image",
        caption: "Group Meditation",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125504/PHOTO-2025-08-28-10-35-49_v0dai6.jpg",
        type: "image",
        caption: "Group Meditation",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125480/PHOTO-2025-08-28-09-18-50_oeuk8k.jpg",
        type: "image",
        caption: "Group Meditation",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125391/PHOTO-2025-08-27-08-56-44_wpp3wr.jpg",
        type: "image",
        caption: "Group Meditation",
      },
    ],
  },
  {
    id: "triumphs",
    title: "Triumphs and Recognition",
    description: "Celebrating our achievements and industry accolades.",
    limit: 6,
    items: [
      {
        url: "/img/gallery/goldmineCertificates.jpeg",
        type: "image",
        caption: "Goldmine Certificates",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1762525994/italianKitchen5_ob8t1o.jpg",
        type: "image",
        caption: "Training Session",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1761882090/PHOTO-2025-10-30-16-56-31_wktxo7.jpg",
        type: "image",
        caption: "Collaborative Meeting",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760126117/PHOTO-2025-07-01-15-49-22_ous1h3.jpg",
        type: "image",
        caption: "Prime Staff",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760126076/PHOTO-2025-07-01-15-49-20_2_jpcqi4.jpg",
        type: "image",
        caption: "Alela Training",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760126012/PHOTO-2025-07-01-15-18-48_s9argz.jpg",
        type: "image",
        caption: "Dahlin Training",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760126075/PHOTO-2025-07-01-15-49-18_obnpbi.jpg",
        type: "image",
        caption: "Kanzu Training",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125441/PHOTO-2025-08-28-09-18-47_2_tgduxb.jpg",
        type: "image",
        caption: "Prime Training",
      },
    ],
  },
  {
    id: "visionaries",
    title: "Meet the Visionaries",
    description: "The leaders and advisors driving our success.",
    limit: 6,
    items: [
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760129851/DSC08540_iyy9a3.jpg",
        type: "image",
        caption: "Mr. Akampa Leon",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760129852/DSC08542_zas5fk.jpg",
        type: "image",
        caption: "Mr. John Ddegeya Sekyeru",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760129867/DSC08568_ow1t7m.jpg",
        type: "image",
        caption: "Mrs. Jassy Kabahiniza Ebwanyu",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760129869/DSC08570_rvhvva.jpg",
        type: "image",
        caption: "Mrs. Josephine Sajjabi",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760129872/DSC08572_in0txk.jpg",
        type: "image",
        caption: "Ms. Gloria Nakiguli",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760130677/DSC08597_bl4jbr.jpg",
        type: "image",
        caption: "Ms. Primera Muthoni",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760130675/DSC08594_ploecv.jpg",
        type: "image",
        caption: "Ms. Primera Muthoni",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760130706/DSC08657_t5pya0.jpg",
        type: "image",
        caption: "Ms. Primera Muthoni",
      },
    ],
  },
  {
    id: "trainings",
    title: "Turning Clients Into Pros",
    limit: 6,
    items: [
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125668/PHOTO-2025-08-29-08-23-24_e0txhc.jpg",
        type: "image",
        caption: "Turning Clients into Pros",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125749/PHOTO-2025-08-29-15-01-41_2_aahlyq.jpg",
        type: "image",
        caption: "Turning Clients into Pros",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125747/PHOTO-2025-08-29-15-01-40_2_chlbca.jpg",
        type: "image",
        caption: "Turning Clients into Pros",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125723/PHOTO-2025-08-29-15-01-38_2_n5edjm.jpg",
        type: "image",
        caption: "Turning Clients into Pros",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125668/PHOTO-2025-08-29-08-23-24_e0txhc.jpg",
        type: "image",
        caption: "Turning Clients into Pros",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125553/PHOTO-2025-08-29-08-23-13_2_tz60rz.jpg",
        type: "image",
        caption: "Turning Clients into Pros",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125503/PHOTO-2025-08-28-10-35-48_2_h8472z.jpg",
        type: "image",
        caption: "Turning Clients into Pros",
      },
    ],
  },
  {
    id: "videos",
    title: "See it Happen",
    description: "Experience our high-energy training sessions and keynotes.",
    limit: 6,
    items: [
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526041/motorCenter5_rouraq.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-4.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526033/Luuka1_dclamo.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-5.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526036/successMotors3_hjz6fi.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-6.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526008/italianKitchen4_tpkkp6.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-7.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526007/motorCenter2_yn5zgy.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-8.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1760129626/ALELA-23-10-36-50_egu2ib.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-9.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526041/motorCenter5_rouraq.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-4.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526041/motorCenter5_rouraq.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-4.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526041/motorCenter5_rouraq.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-4.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526041/motorCenter5_rouraq.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-4.png",
        caption: "Training Session Highlights",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526041/motorCenter5_rouraq.mp4",
        type: "video",
        thumbnail: "/img/video-thumbs/thumb-4.png",
        caption: "Training Session Highlights",
      },
    ],
  },
]);

// Logic to reveal more images
const handleViewMore = (index) => {
  sections.value[index].limit += 6;
};

// Lightbox
const lightboxItem = ref(null);
const openLightbox = (item) => {
  lightboxItem.value = item;
};
const closeLightbox = () => {
  lightboxItem.value = null;
};
</script>

<template>
  <div
    class="bg-maroon pt-4 pb-5 bg-cover bg-center bg-[url('/bg-images/bg-blue3.png')]"
  >
    <MuiPageContainer wide class="relative">
      <header
        class="flex items-center justify-between px-6 py-4 md:px-8 bg-white/20 backdrop-blur-[10px] border border-white/10 relative z-[210]"
      >
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/bg-images/abcGlobe-no-bg.png"
            alt="ABC Icon"
            class="h-10 md:hidden object-contain"
          />
          <img
            src="/bg-images/abcLogo1-no-bg.png"
            alt="ABC Sales Consulting"
            class="h-16 hidden md:block object-contain"
          />
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-8">
          <template v-for="link in navLinks" :key="link.name">
            <button
              v-if="link.subLinks"
              @click="toggleSubMenu(link.name)"
              class="text-white font-bold uppercase text-sm hover:opacity-80 transition flex items-center gap-1 cursor-pointer"
            >
              {{ link.name }}
              <span
                :class="{ 'rotate-180': activeSubMenu === link.name }"
                class="transition-transform text-[10px]"
                >▼</span
              >
            </button>
            <NuxtLink
              v-else
              :to="link.to"
              class="text-white font-bold uppercase text-sm hover:opacity-80 cursor-pointer"
            >
              {{ link.name }}
            </NuxtLink>
          </template>
        </nav>

        <div class="flex items-center gap-3">
          <MuiButton
            label="Get in touch"
            href="#contacts"
            variant="all-white"
            size="medium-small"
            class="hidden md:flex"
          />
          <button
            class="lg:hidden p-2 text-white cursor-pointer"
            @click="toggleMenu"
          >
            <div v-if="!isMobileMenuOpen" class="space-y-1.5">
              <span class="block w-6 h-0.5 bg-white" />
              <span class="block w-6 h-0.5 bg-white" />
              <span class="block w-6 h-0.5 bg-white" />
            </div>
            <div v-else class="text-2xl font-bold">✕</div>
          </button>
        </div>
      </header>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div
          v-if="activeSubMenu"
          class="hidden lg:flex bg-white border-t border-gray-100 shadow-xl w-full z-[200] relative"
        >
          <MuiPageContainer wide class="flex items-center">
            <template
              v-for="sub in navLinks.find((l) => l.name === activeSubMenu)
                ?.subLinks"
              :key="sub.name"
            >
              <NuxtLink
                :to="sub.to"
                @click="activeSubMenu = null"
                class="text-maroon px-8 py-4 uppercase font-bold text-xs border-l first:border-l-0 border-gray-100 hover:bg-maroon hover:text-white transition-all cursor-pointer"
              >
                {{ sub.name }}
              </NuxtLink>
            </template>
          </MuiPageContainer>
        </div>
      </Transition>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 z-[300] lg:hidden bg-maroon text-white flex flex-col p-8"
        >
          <div class="flex justify-end mb-8">
            <button
              @click="isMobileMenuOpen = false"
              class="text-4xl font-light p-2 cursor-pointer"
            >
              ✕
            </button>
          </div>
          <div class="flex flex-col space-y-6 overflow-y-auto">
            <div
              v-for="link in navLinks"
              :key="link.name"
              class="border-b border-white/10 pb-4"
            >
              <template v-if="link.subLinks">
                <p
                  class="text-xs uppercase text-white/60 font-normal mb-4 tracking-widest"
                >
                  {{ link.name }}
                </p>
                <div class="flex flex-col gap-5 pl-4 border-l border-white/20">
                  <NuxtLink
                    v-for="sub in link.subLinks"
                    :key="sub.name"
                    :to="sub.to"
                    @click="isMobileMenuOpen = false"
                    class="text-xl font-normal"
                    >{{ sub.name }}</NuxtLink
                  >
                </div>
              </template>
              <NuxtLink
                v-else
                :to="link.to"
                @click="isMobileMenuOpen = false"
                class="text-3xl font-bold uppercase"
                >{{ link.name }}</NuxtLink
              >
            </div>
          </div>
          <div class="mt-auto">
            <MuiButton
              label="Get in touch"
              href="#contacts"
              variant="all-white"
              class="w-full justify-center !rounded-full"
              @click="isMobileMenuOpen = false"
            />
          </div>
        </div>
      </Transition>
    </MuiPageContainer>

    <MuiPageContainer
      class="text-white pt-24 pb-20 lg:pt-40 lg:pb-32 bg-maroon bg-cover bg-center relative overflow-hidden bg-[url('/bg-images/pattern-overlay.png')]"
    >
      <div class="absolute inset-0 bg-black/20 z-0"></div>

      <div class="relative z-10 max-w-5xl mx-auto">
        <div class="mb-8 flex justify-center">
          <a
            href="/"
            class="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 mt-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </a>
        </div>

        <div class="text-center flex flex-col items-center">
          <div>
            <MuiButton
              variant="all-white"
              label="OUR VISUAL JOURNEY"
              class="!rounded-full px-6 !font-bold mb-6 pointer-events-none tracking-widest text-[10px] opacity-90"
            />
          </div>

          <h2
            class="mui-text--display-1 uppercase leading-[0.9] font-black tracking-tighter text-5xl lg:text-7xl"
          >
            Moments of <br />
            <span class="text-abc-green">Impact & Excellence.</span>
          </h2>

          <p
            class="mt-8 mb-12 text-white/80 leading-relaxed text-lg lg:text-xl max-w-2xl mx-auto"
          >
            Explore our journey through a collection of snapshots—capturing
            impactful outreach, strategic board sessions, and the vibrant
            community we are building together.
          </p>

          <div class="flex justify-center gap-4">
            <MuiButton
              label="VIEW MOMENTS"
              href="#gallery-grid"
              variant="white-stroke"
              class="!rounded-full px-10"
            />
          </div>
        </div>
      </div>
    </MuiPageContainer>
  </div>

  <main class="gallery-page bg-gray-50 min-h-screen">
    <section
      v-for="(section, sIdx) in sections"
      :key="section.id"
      :id="section.id"
      class="py-16"
    >
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold mb-10 border-l-4 border-maroon pl-4 italic"
          style="color: #db8f3d"
        >
          {{ section.title }}
        </h2>

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
              <img
                :src="item.thumbnail"
                :alt="item.caption"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all"
              >
                <div
                  class="w-16 h-16 flex items-center justify-center rounded-full bg-white text-maroon shadow-2xl scale-90 group-hover:scale-100 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div
              class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center"
            >
              <span
                class="text-white font-medium uppercase tracking-wider text-sm"
              >
                {{ item.caption }}
              </span>
            </div>
          </div>
        </div>

        <div
          v-if="section.limit < section.items.length"
          class="mt-12 text-center"
        >
          <button
            @click="handleViewMore(sIdx)"
            class="px-10 py-3 font-black uppercase bg-[#7cbc56] hover:text-white transition-all cursor-pointer"
          >
            View More
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Transition name="fade">
      <div
        v-if="lightboxItem"
        class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
        @click="closeLightbox"
      >
        <button
          class="absolute top-10 right-10 text-white text-4xl z-60"
          @click="closeLightbox"
        >
          &times;
        </button>

        <div
          class="max-w-5xl w-full h-full flex items-center justify-center"
          @click.stop
        >
          <img
            v-if="lightboxItem.type === 'image'"
            :src="lightboxItem.url"
            :alt="lightboxItem.caption"
            class="max-w-full max-h-full shadow-2xl"
          />
          <iframe
            v-else
            :src="lightboxItem.url"
            class="w-full aspect-video shadow-2xl"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
