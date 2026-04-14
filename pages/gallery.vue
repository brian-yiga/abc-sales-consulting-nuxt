<script setup>
import { ref } from "vue";
import { MuiButton, MuiPageContainer } from "@northgreenug/musizi-ui-kit";

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
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1776150799/WhatsApp_Image_2026-04-13_at_10.37.02_ymh7tv.jpg",
        type: "image",
        caption: "Collaborative Meeting",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1776150797/WhatsApp_Image_2026-04-09_at_17.45.13_bmtrkn.jpg",
        type: "image",
        caption: "CEO Training",
      },
      {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1776150797/WhatsApp_Image_2026-04-09_at_17.45.12_ckwbhb.jpg",
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
       {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1760125441/PHOTO-2025-08-28-09-18-47_2_tgduxb.jpg",
        type: "image",
        caption: "Prime Training",
      },
       {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1776150801/WhatsApp_Image_2026-04-03_at_10.32.04_id22xw.jpgg",
        type: "image",
        caption: "Prime Training",
      },
       {
        url: "https://res.cloudinary.com/dz1t6hhe7/image/upload/v1776150801/WhatsApp_Image_2026-04-03_at_10.32.05_mcplq1.jpgg",
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


    <MuiPageContainer
      class="text-white pt-24 pb-20 lg:pt-40 lg:pb-32 bg-cover bg-center relative overflow-hidden bg-[url('/bg-images/pattern-overlay.png')]"
    >
      <div class="absolute inset-0 z-0"></div>

      <div class="relative z-10 max-w-5xl mx-auto">
        <div class="mb-8 flex justify-center">
          <a
            href="/"
            class="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white/90 bg-white/15 hover:bg-white/25 transition-all duration-300 rounded-full px-6 py-3 mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
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
