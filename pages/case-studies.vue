<template>
  <div
    class="bg-maroon pt-4 pb-5 bg-cover bg-center bg-[url('/bg-images/bg-green.jpg')]"
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

    <MuiPageContainer class="py-20 lg:py-32 overflow-hidden relative">
      <div class="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div class="text-left max-w-xl">
          <MuiButton
            variant="all-white"
            label="Proven Results & Impact"
            class="!rounded-full px-8 !font-medium mb-4 pointer-events-none"
          />
          <h2 class="mui-text--display-1 uppercase leading-tight text-white">
            Real Stories. <br />
            <span class="text-abc-green">Measurable Success.</span>
          </h2>
          <p class="mt-6 mb-8 text-white/80 text-lg leading-relaxed">
            Explore how ABC Sales Consulting has transformed sales departments
            across the continent. We turn potential into performance with
            data-backed strategies and direct market insights.
          </p>
          <div class="flex gap-4">
            <MuiButton
              label="View Testimonials"
              href="#whatsapp-wall"
              variant="all-white"
            />
          </div>
        </div>

        <div class="relative">
          <img
            src="/img/WhatsAppImages/whatsappMarch-23.jpg"
            alt="Case Studies"
            class="rounded-2xl shadow-2xl w-full object-cover object-top aspect-[4/3] lg:h-[500px] border border-white/10"
          />
          <div
            class="absolute -bottom-6 -left-6 h-24 w-24 bg-abc-green rounded-full blur-3xl opacity-30"
          ></div>
        </div>
      </div>
    </MuiPageContainer>
  </div>

  <MuiPageContainer class="py-16">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <div
          class="bg-maroon text-white p-8 rounded-sm text-center flex flex-col justify-center items-center min-h-[180px]"
        >
          <span class="text-5xl font-bold mb-2 uppercase italic text-abc-green"
            >95%</span
          >
          <span class="uppercase tracking-widest text-sm font-semibold"
            >REVENUE GROWTH</span
          >
        </div>
        <div
          class="bg-maroon text-white p-8 rounded-sm text-center flex flex-col justify-center items-center min-h-[180px]"
        >
          <span class="text-5xl font-bold mb-2 uppercase italic">100+</span>
          <span class="uppercase tracking-widest text-sm font-semibold"
            >TEAMS TRAINED</span
          >
        </div>
        <div
          class="bg-maroon text-white p-8 rounded-sm text-center flex flex-col justify-center items-center min-h-[180px]"
        >
          <span class="text-5xl font-bold mb-2 uppercase italic text-abc-orange"
            >20+</span
          >
          <span class="uppercase tracking-widest text-sm font-semibold"
            >YEARS EXPERIENCE</span
          >
        </div>
      </div>
      <div
        class="text-center italic text-gray-600 max-w-2xl mx-auto leading-relaxed text-[20px]"
      >
        <p>
          "We don't just teach sales; we engineer high-performance cultures that
          deliver predictable, scalable results."
        </p>
      </div>
    </div>
  </MuiPageContainer>

  <div class="bg-maroon py-10 overflow-hidden border-y border-white/5">
    <div class="animate-scroll whitespace-nowrap flex items-center">
      <span v-for="n in 2" :key="n" class="flex items-center">
        <span class="text-abc-orange text-5xl font-black uppercase mx-12"
          >"Revenue up by 40%"</span
        >
        <span class="text-abc-green text-5xl font-black uppercase mx-12"
          >"Best team building ever"</span
        >
        <span class="text-white text-5xl font-black uppercase mx-12"
          >"Sales culture transformed"</span
        >
        <span class="text-abc-orange text-5xl font-black uppercase mx-12"
          >"Closing rates doubled"</span
        >
      </span>
    </div>
  </div>

  <MuiPageContainer class="py-20 bg-gray-50" id="case-grid">
    <div class="text-center mb-16">
      <div
        class="inline-block bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-[14px] font-bold uppercase mb-4 tracking-widest"
      >
        Client Success
      </div>
      <h2 class="mui-text--display-1 text-maroon uppercase mb-4">
        The Video Vault
      </h2>
      <p class="max-w-3xl mx-auto text-gray-600">
        Watch our latest training highlights and executive workshops in action
        across East Africa.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="n in 2"
        :key="n"
        class="bg-white group shadow-sm hover:shadow-xl transition-all overflow-hidden rounded-xl"
      >
        <div class="relative h-72">
          <img
            :src="`/img/video-thumbs/thumb-${n}.png`"
            class="w-full h-full object-cover object-top"
          />
          <div
            class="absolute inset-0 bg-maroon/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div
              class="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-white"
            >
              ▶
            </div>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-maroon font-extrabold uppercase text-xl mb-2">
            High-Performance Training Session 0{{ n }}
          </h3>
          <p class="text-gray-600 text-sm">
            A deep dive into the ABC framework implemented with top-tier
            corporate sales leads.
          </p>
        </div>
      </div>
    </div>
  </MuiPageContainer>

  <MuiPageContainer id="whatsapp-wall" class="py-24 bg-white">
    <div class="text-center mb-16">
      <h2 class="mui-text--display-1 text-maroon uppercase mb-4">
        The Wall of Love
      </h2>
      <p class="text-gray-500">
        Unfiltered feedback from the field. Real results from real sales
        professionals.
      </p>
    </div>
    <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      <div
        v-for="i in 9"
        :key="i"
        class="break-inside-avoid bg-white p-2 rounded-lg shadow-sm border border-gray-100"
      >
        <img
          :src="`/img/testimonies/whatsappTestimonies/whatsappTestimony-${i}.jpg`"
          class="w-full rounded-md"
        />
      </div>
    </div>
  </MuiPageContainer>

  <div class="relative bg-black py-20 text-center overflow-hidden">
    <MuiPageContainer class="relative z-10">
      <div class="max-w-3xl mx-auto flex flex-col items-center">
        <h2
          class="text-3xl md:text-5xl font-bold text-white uppercase mb-6 leading-tight"
        >
          Ready to Outperform <br />Your Competition?
        </h2>
        <MuiButton
          variant="all-white"
          label="Book a Discovery Session"
          href="#contacts"
          class="!rounded-full px-12 py-4"
        />
      </div>
    </MuiPageContainer>
  </div>

  <footer
    class="bg-abc-navy text-white"
    id="contacts"
  >
    <MuiPageContainer class="py-16 border-b border-white/10">
      <div class="text-center mb-10">
        <h2
          class="text-2xl md:text-4xl font-black uppercase mb-2 tracking-tighter"
        >
          Scale Your Revenue Today
        </h2>
        <p class="text-white/80 font-light tracking-wide">
          Subscribe to get exclusive sales strategies from ABC Sales Consulting.
        </p>
      </div>
      <form
        @submit.prevent
        class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/20 rounded-none overflow-hidden shadow-2xl"
      >
        <input
          type="text"
          placeholder="Full Name"
          class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400"
        />
        <input
          type="email"
          placeholder="Business Email"
          class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400"
        />
        <div
          class="bg-white flex items-center px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200"
        >
          <div
            class="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-widest font-bold"
          >
            <input type="checkbox" class="w-4 h-4 accent-abc-green" /> I'm not a
            robot
          </div>
        </div>
        <button
          type="submit"
          class="bg-abc-green hover:bg-abc-green/90 text-abc-navy font-black uppercase transition-all py-5 px-8 cursor-pointer tracking-widest text-xs"
        >
          Join the List
        </button>
      </form>
      <div class="mt-12 flex flex-col items-center">
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="social in ['linkedin', 'instagram', 'facebook-f', 'tiktok']"
            :key="social"
            to="#"
            class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300"
          >
            <Icon
              :name="
                social === 'tiktok' ? 'ic:baseline-tiktok' : `uil:${social}`
              "
              class="text-xl group-hover:text-abc-green transition-colors"
            />
          </NuxtLink>
        </div>
      </div>
    </MuiPageContainer>
    <MuiPageContainer
      class="py-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase opacity-60"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} ABC Sales Consulting. All Rights
        Reserved.
      </p>
      <div class="flex gap-8 mt-4 md:mt-0">
        <NuxtLink to="/privacy" class="hover:text-abc-green"
          >Privacy Policy</NuxtLink
        >
        <NuxtLink to="/terms" class="hover:text-abc-green"
          >Terms of Service</NuxtLink
        >
      </div>
    </MuiPageContainer>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import {
  MuiButton,
  MuiPageContainer,
  MuiPattern,
} from "@northgreenug/musizi-ui-kit";

const isMobileMenuOpen = ref(false);
const activeSubMenu = ref(null);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const toggleSubMenu = (menuName) => {
  activeSubMenu.value = activeSubMenu.value === menuName ? null : menuName;
};

const navLinks = [
  { name: "About", to: "/" },
  { name: "Services", to: "/services" },
  {
    name: "Resources",
    to: "/resources",
    subLinks: [
      { name: "Sales Blog", to: "/resources" },
      { name: "Whitepapers", to: "/resources" },
    ],
  },
  { name: "Case Studies", to: "/case-studies" },
  {
  name: "Why ABC?",
  to: "/why-abc/methodology", // This acts as a fallback if they click the header
  subLinks: [
    { name: "Methodology", to: "/why-abc/methodology" }, // Points to pages/why-abc/methodology.vue
    { name: "Our Team", to: "/why-abc/team" },           // Points to pages/why-abc/team.vue
  ],
},
  { name: "Gallery", to: "/gallery" },
];
</script>

<style scoped>
.break-inside-avoid {
  break-inside: avoid;
}
</style>
