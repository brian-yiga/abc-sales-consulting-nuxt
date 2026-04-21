<template>
  <div
    class="bg-maroon pt-4 pb-5 bg-cover bg-center bg-[url('/bg-images/bg-blue.png')]"
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
                <p class="text-base font-medium text-white uppercase mb-4">
                  {{ link.name }}
                </p>
                <div class="flex flex-col gap-5 pl-4 border-l border-white/20">
                  <NuxtLink
                    v-for="sub in link.subLinks"
                    :key="sub.name"
                    :to="sub.to"
                    @click="isMobileMenuOpen = false"
                    class="text-sm font-medium text-gray-400"
                  >
                    {{ sub.name }}
                  </NuxtLink>
                </div>
              </template>
              <NuxtLink
                v-else
                :to="link.to"
                @click="isMobileMenuOpen = false"
                class="text-base font-medium text-white uppercase"
              >
                {{ link.name }}
              </NuxtLink>
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
      class="text-center text-white pt-20 pb-16 lg:pt-25 lg:pb-20 xl:pt-[120px] xl:pb-25 relative bg-cover bg-center"
    >
      <div class="absolute inset-0 pointer-events-none"></div>

      <div class="max-w-3xl mx-auto relative z-10">
        <div
          class="inline-block border border-abc-green/50 bg-abc-green/10 text-abc-green px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
        >
         Talent Acquisition & Placements
        </div>

        <h2
          class="mui-text--display-1 uppercase font-black tracking-tighter leading-tight"
        >
          job placements that <br> transform businesses
        </h2>

        <p
          class="max-w-xl mt-6 mb-10 mx-auto text-white/90 leading-relaxed text-sm tracking-wide"
        >
        ABC Sales Consulting connects world-class sales talent with Africa’s leading organizations.
        </p>

       
      </div>
    </MuiPageContainer>
  </div>

  <MuiPageContainer class="py-20">
    <div class="mb-24">
      <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl font-black uppercase text-abc-navy">Open Opportunities</h2>
        <div class="h-px flex-1 bg-gray-200"></div>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div v-for="job in activePlacements" :key="job.title" class="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-6 shadow-xl hover:shadow-2xl transition-all group">
          <div class="w-full md:w-48 h-64 bg-gray-200 overflow-hidden rounded-sm flex-shrink-0">
             <img :src="job.image" :alt="job.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          <div class="flex flex-col justify-between py-2">
            <div>
              <p class="text-abc-green font-bold text-[10px] uppercase tracking-widest mb-1">{{ job.company }}</p>
              <h3 class="text-xl font-black text-abc-navy uppercase leading-tight mb-3">{{ job.title }}</h3>
              <div class="flex gap-2 mb-4">
                <span class="text-[9px] bg-gray-100 px-2 py-1 font-bold text-gray-500 uppercase">{{ job.type }}</span>
                <span class="text-[9px] bg-abc-navy text-white px-2 py-1 font-bold uppercase">{{ job.salary }}</span>
              </div>
              <p class="text-gray-500 text-xs leading-relaxed mb-6">{{ job.description }}</p>
            </div>

            <div class="flex gap-2">
              <MuiButton label="APPLY NOW" variant="red-fill" class="!text-[9px] !px-4 !py-3 !rounded-none" :href="getApplyLink(job)" />
              <MuiButton label="VIEW FLYER" variant="white-stroke" class="!text-[9px] !px-4 !py-3 !rounded-none !border-abc-navy !text-abc-navy" :href="job.image" target="_blank" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
     <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl font-black uppercase text-abc-navy">Recently Filled</h2>
        <div class="h-px flex-1 bg-gray-200"></div>
      </div>

     <div class="grid gap-8 md:grid-cols-3">
  <div 
    v-for="job in filledPlacements" 
    :key="job.title" 
    class="relative group opacity-70 grayscale-[50%] hover:opacity-100 hover:grayscale-0 transition-all duration-300"
  >
    <div class="relative aspect-[3/4] bg-gray-200 mb-4 overflow-hidden rounded-sm">
      <img :src="job.image" class="w-full h-full object-cover" />
      
      <div class="absolute inset-0 bg-white/20 flex items-center justify-center">
         <span class="border-4 border-red-600 text-red-600 font-black uppercase text-3xl px-4 py-1 -rotate-12 shadow-lg">
           FILLED
         </span>
      </div>
    </div>

    <p class="text-[9px] font-bold text-abc-green uppercase tracking-wider">
      {{ job.company }}
    </p>
    <h4 class="text-sm font-black text-abc-navy uppercase leading-tight">
      {{ job.title }}
    </h4>
  </div>
</div>
    </div>
  </MuiPageContainer>

  <BackToTop />

  <footer class="bg-abc-navy text-white" id="contacts">
    <MuiPageContainer class="py-16 border-b border-white/10">
      <div class="text-center mb-10">
        <h2
          class="text-2xl md:text-4xl font-black uppercase mb-2 tracking-tighter"
        >
          Scale Your Revenue Today
        </h2>
        <p class="text-white/80 font-light tracking-wide">
          Subscribe to get exclusive sales strategies and market insights from
          ABC Sales Consulting.
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
            <input type="checkbox" class="w-4 h-4 accent-abc-green" />
            I'm not a robot
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
        <p
          class="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6 font-bold"
        >
          Connect with our experts
        </p>
        <div class="flex items-center gap-6">
          <NuxtLink
            to="https://linkedin.com/company/abc-sales-consulting"
            target="_blank"
            class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300"
          >
            <Icon
              name="uil:linkedin"
              class="text-xl group-hover:text-abc-green transition-colors"
            />
          </NuxtLink>
          <NuxtLink
            to="https://instagram.com/abcsales"
            target="_blank"
            class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300"
          >
            <Icon
              name="uil:instagram"
              class="text-xl group-hover:text-abc-green transition-colors"
            />
          </NuxtLink>
          <NuxtLink
            to="https://facebook.com/abcsales"
            target="_blank"
            class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300"
          >
            <Icon
              name="uil:facebook-f"
              class="text-xl group-hover:text-abc-green transition-colors"
            />
          </NuxtLink>
          <NuxtLink
            to="https://tiktok.com/@abcsales"
            target="_blank"
            class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300"
          >
            <Icon
              name="ic:baseline-tiktok"
              class="text-xl group-hover:text-abc-green transition-colors"
            />
          </NuxtLink>
        </div>
      </div>
    </MuiPageContainer>

    <MuiPageContainer class="py-12 border-b border-white/10">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
      >
        <div>
          <h4
            class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4"
          >
            Our Office
          </h4>
          <p class="text-sm text-white/70 leading-relaxed uppercase">
            Plot 1, Ntinda Church Road<br />
            Church Bend, Off Martyrs Way<br />
            Ministers' Village, Ntinda
          </p>
        </div>

        <div>
          <h4
            class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4"
          >
            Contact Us
          </h4>
          <p class="text-sm text-white/70 leading-relaxed">
            <span class="block mb-1">admin@abcsalesconsulting.net</span>
            <span>+256 748 019 936</span>
          </p>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h4
            class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4"
          >
            Find Us
          </h4>
          <MuiButton
            label="VIEW ON GOOGLE MAPS"
            href="https://maps.app.goo.gl/35pEPphgGXnyuYSg9m"
            target="_blank"
            variant="white-stroke"
            class="px-6 !text-[10px]"
          />
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

  <!-- Discovery Form Modal -->
  <DiscoveryForm ref="discoveryFormRef" />
  <BackToTop />
</template>

<script setup>
import { ref } from "vue";
import {
  MuiButton,
  MuiPageContainer,
  MuiLogoButtonCard,
  MuiTextWithImage,
} from "@northgreenug/musizi-ui-kit";
import DiscoveryForm from "~/components/DiscoveryForm.vue";
import BackToTop from "~/components/BackToTop.vue";

useHead({
  title: "Careers",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ABC Sales Consulting` : 'ABC Sales Consulting';
  }
});

const isMobileMenuOpen = ref(false);
const activeSubMenu = ref(null);
const discoveryFormRef = ref(null);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleSubMenu = (menuName) => {
  activeSubMenu.value = activeSubMenu.value === menuName ? null : menuName;
};

// ABC SALES NAVIGATION STRUCTURE
const navLinks = [
  { name: "About", to: "/" },
  { name: "Services", to: "/services" },
  {
    name: "Resources",
    to: "/resources",
    subLinks: [
      { name: "Sales Blogs", to: "/resources" },
      { name: "Whitepapers", to: "/resources" },
      { name: "Job Opportunities", to: "/careers" },
    ],
  },
  { name: "Case Studies", to: "/case-studies" },
  {
    name: "Why ABC?",
    to: "/why-abc/methodology", // This acts as a fallback if they click the header
    subLinks: [
      { name: "Methodology", to: "/why-abc/methodology" }, // Points to pages/why-abc/methodology.vue
      { name: "Our Team", to: "/why-abc/team" }, // Points to pages/why-abc/team.vue
    ],
  },
  { name: "Gallery", to: "/gallery" },
];

const activePlacements = [
  {
    company: "Meik Car Hub",
    title: "Car Sales Specialist",
    description: "Meik Car Hub is seeking a high-caliber Car Sales Specialist to spearhead our regional growth and market expansion.",
    type: "Salaried + Bonus",
    salary: "Attractive",
    image: "/img/jobs/meik-car-hub.jpeg" 
  },
];

const filledPlacements = [
  {
    company: "Moving Ads Uganda",
    title: "Sales Operations Manager",
    description: "Successfully placed a candidate to drive revenue growth and sales data.",
    type: "Contract",
    salary: "Closed",
    image: "/img/jobs/moving-ads.jpeg"
  },
  {
    company: "BioHaz Waste Solutions",
    title: "Sales lead",
    description: "Successfully placed a candidate to drive revenue growth and sales data.",
    type: "Salaried + Bonus",
    salary: "Closed",
    image: "/img/jobs/biohaz1.jpeg"
  },
  {
    company: "Fnacy Packs Limited",
    title: "Sales Executive",
    description: "Successfully placed a candidate to drive revenue growth and sales data.",
    type: "Salaried + Bonus",
    salary: "Closed",
    image: "/img/jobs/fancypacks.jpeg"
  },
  {
    company: "International Market Development & Administrative Manager",
    title: "Sales lead",
    description: "Successfully placed a candidate to drive revenue growth and sales data.",
    type: "Salaried + Bonus",
    salary: "Closed",
    image: "/img/jobs/internationalDevtMgr.jpeg"
  },
  {
    company: "Kitchen Italian Design",
    title: "Sales & Marketing Lead",
    description: "Successfully placed a candidate to drive revenue growth and sales data.",
    type: "Salaried + Bonus",
    salary: "Closed",
    image: "/img/jobs/italianDesignSalesExecs.jpeg"
  },
];

// Helper to format the application email
const getApplyLink = (job) => {
  const subject = encodeURIComponent(`Application for ${job.title} at ${job.company} (via ABC Sales)`);
  const body = encodeURIComponent(`Dear ABC Recruitment Team,\n\nI am interested in the ${job.title} position at ${job.company}. Please find my CV attached.\n\nBest regards,`);
  return `mailto:admin@abcsalesconsulting.net?subject=${subject}&body=${body}`;
};
</script>
