<template>
  <div
    class="bg-maroon pt-4 pb-5 bg-cover bg-center bg-[url('/bg-images/bg-orange.png')]"
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
                  class="text-base font-medium text-white uppercase mb-4"
                >
                  {{ link.name }}
                </p>
                <div class="flex flex-col gap-5 pl-4 border-l border-white/20">
                  <NuxtLink
                    v-for="sub in link.subLinks"
                    :key="sub.name"
                    :to="sub.to"
                    @click="isMobileMenuOpen = false"
                    class="text-sm font-medium text-gray-400"
                    >{{ sub.name }}</NuxtLink
                  >
                </div>
              </template>
              <NuxtLink
                v-else
                :to="link.to"
                @click="isMobileMenuOpen = false"
                class="text-base font-medium text-white uppercase"
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
      class="text-white pt-20 pb-16 lg:pt-32 lg:pb-32 bg-cover bg-center relative overflow-hidden"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div class="text-left max-w-xl">
          <div>
            <MuiButton
              variant="all-white"
              label="THE ABC FRAMEWORK"
              class="!rounded-full px-8 !font-medium mb-6 pointer-events-none tracking-widest text-[10px]"
            />
          </div>

          <h2
            class="mui-text--display-1 uppercase leading-tight font-black tracking-tighter"
          >
            A Data-Driven <br />
            <span class="text-abc-green">Approach to Growth.</span>
          </h2>

          <p class="mt-6 mb-10 text-white/90 leading-relaxed text-lg">
            We don't believe in "one-size-fits-all" sales. Our proprietary
            methodology combines deep market discovery with intensive behavioral
            coaching to build sales engines that outlast the competition.
          </p>

          <div class="flex flex-row gap-4 max-w-sm">
            <MuiButton
              label="EXPLORE OUR STEPS"
              href="#process-flow"
              variant="all-white"
              class="!rounded-full px-8"
            />
          </div>
        </div>

        <div class="relative hidden lg:block">
          <img
            src="/img/whatsappimages/whatsappMarch-11.jpg"
            alt="Methodology in Action"
            class="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border border-white/10"
          />
          <div
            class="absolute -bottom-6 -right-6 h-32 w-32 bg-abc-green rounded-full blur-3xl opacity-20"
          ></div>
        </div>
      </div>
    </MuiPageContainer>
  </div>

  <MuiPageContainer id="process-flow" class="py-24 bg-white">
    <div class="text-center mb-20">
      <div
        class="inline-block bg-gray-100 text-maroon px-4 py-1 rounded-full text-[12px] font-bold uppercase mb-4 tracking-widest"
      >
        Our Roadmap
      </div>
      <h2 class="mui-text--display-1 text-maroon uppercase">
        How We Engineer Success
      </h2>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative"
    >
      <div class="relative group">
        <span
          class="text-6xl font-black text-gray-100 absolute -top-8 -left-4 group-hover:text-abc-green/20 transition-colors"
          >01</span
        >
        <div class="relative z-10">
          <h3 class="text-maroon font-extrabold uppercase text-xl mb-4">
            Discovery & Needs Analysis
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            We begin with a deep dive into your current ecosystem. We identify
            bottlenecks, market gaps, and untapped potential within your
            existing sales structure.
          </p>
        </div>
      </div>

      <div class="relative group">
        <span
          class="text-6xl font-black text-gray-100 absolute -top-8 -left-4 group-hover:text-abc-green/20 transition-colors"
          >02</span
        >
        <div class="relative z-10">
          <h3 class="text-maroon font-extrabold uppercase text-xl mb-4">
            Tailored Solution Design
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            No templates. We architect a bespoke sales framework designed
            specifically for your product, your territory, and your revenue
            targets.
          </p>
        </div>
      </div>

      <div class="relative group">
        <span
          class="text-6xl font-black text-gray-100 absolute -top-8 -left-4 group-hover:text-abc-green/20 transition-colors"
          >03</span
        >
        <div class="relative z-10">
          <h3 class="text-maroon font-extrabold uppercase text-xl mb-4">
            Timetable & KPI Setup
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            We establish a rigorous implementation schedule with clear
            milestones and measurable KPIs so progress is visible from week one.
          </p>
        </div>
      </div>

      <div class="relative group">
        <span
          class="text-6xl font-black text-gray-100 absolute -top-8 -left-4 group-hover:text-abc-green/20 transition-colors"
          >04</span
        >
        <div class="relative z-10">
          <h3 class="text-maroon font-extrabold uppercase text-xl mb-4">
            Strategic Recruitment
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            If gaps exist, we leverage our network to source and vet top-tier
            sales talent that fits your culture and possesses the "hunter"
            mindset.
          </p>
        </div>
      </div>

      <div class="relative group">
        <span
          class="text-6xl font-black text-gray-100 absolute -top-8 -left-4 group-hover:text-abc-green/20 transition-colors"
          >05</span
        >
        <div class="relative z-10">
          <h3 class="text-maroon font-extrabold uppercase text-xl mb-4">
            Immersive Sales Training
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            The core of our impact. We deliver intensive training focused on
            advanced closing techniques, objection handling, and CRM mastery.
          </p>
        </div>
      </div>

      <div class="relative group">
        <span
          class="text-6xl font-black text-gray-100 absolute -top-8 -left-4 group-hover:text-abc-green/20 transition-colors"
          >06</span
        >
        <div class="relative z-10">
          <h3 class="text-maroon font-extrabold uppercase text-xl mb-4">
            Engagement & Follow-up
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            We don't just walk away. We provide ongoing mentorship and audits of
            each salesperson to ensure long-term behavioral change and sustained
            growth.
          </p>
        </div>
      </div>
    </div>
  </MuiPageContainer>

  <MuiPageContainer class="py-24 bg-maroon relative overflow-hidden">
    <div class="relative z-10 max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <MuiButton
          variant="white-stroke"
          label="PHASE 1: DISCOVERY PREP"
          class="!rounded-full px-8 mb-4 pointer-events-none !bg-white/10 !border-white/20 text-white"
        />
        <h2 class="mui-text--display-2 text-white uppercase font-black">
          Ready for Discovery?
        </h2>
        <p class="text-white/70 mt-4">
          To ensure a productive first session, we recommend having the
          following ready:
        </p>
      </div>

      <div
        class="grid md:grid-cols-2 bg-white rounded-t-3xl overflow-hidden shadow-2xl"
      >
        <div class="p-10 lg:p-16 border-r border-gray-100">
          <div class="flex items-center gap-4 mb-8">
            <div class="bg-abc-green/10 p-3 rounded-lg">
              <span class="text-2xl">📊</span>
            </div>
            <h3 class="text-maroon font-black uppercase text-xl tracking-tight">
              Sales Performance Data
            </h3>
          </div>

          <ul class="space-y-4 text-gray-600 text-sm">
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Last 12 months of revenue performance
            </li>
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Current sales team structure & headcount
            </li>
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Average lead-to-close conversion rates
            </li>
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Existing CRM tools or tracking methods
            </li>
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Primary competitor list & market challenges
            </li>
          </ul>
        </div>

        <div class="p-10 lg:p-16">
          <div class="flex items-center gap-4 mb-8">
            <div class="bg-abc-green/10 p-3 rounded-lg">
              <span class="text-2xl">🎯</span>
            </div>
            <h3 class="text-maroon font-black uppercase text-xl tracking-tight">
              Growth Objectives
            </h3>
          </div>

          <ul class="space-y-4 text-gray-600 text-sm">
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Short-term (3 month) revenue targets
            </li>
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Targeted industry verticals or niches
            </li>
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Current pain points in the sales cycle
            </li>
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Budget allocation for team development
            </li>
            <li class="flex items-start gap-3">
              <span class="text-abc-green font-bold">•</span>
              Long-term scaling goals for 2026
            </li>
          </ul>
        </div>
      </div>

      <div
        class="bg-black/20 backdrop-blur-md border border-white/10 rounded-b-3xl p-8 flex flex-col md:flex-row items-center gap-6"
      >
        <div class="text-4xl">💡</div>
        <p class="text-white/80 text-sm leading-relaxed italic">
          <strong>Note:</strong> We sign a Non-Disclosure Agreement (NDA) with
          every client before the discovery session starts. Your data, strategy,
          and internal sales figures are strictly confidential and protected by
          ABC's privacy policy.
        </p>
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
          @click="openForm"
          class="!rounded-full px-12 py-4 cursor-pointer"
        />
      </div>
    </MuiPageContainer>
  </div>

  <footer class="bg-abc-navy text-white" id="contacts">
  <MuiPageContainer class="py-16 border-b border-white/10">
    <div class="text-center mb-10">
      <h2 class="text-2xl md:text-4xl font-black uppercase mb-2 tracking-tighter">
        Scale Your Revenue Today
      </h2>
      <p class="text-white/80 font-light tracking-wide">
        Subscribe to get exclusive sales strategies and market insights from ABC Sales Consulting.
      </p>
    </div>

    <form @submit.prevent class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/20 rounded-none overflow-hidden shadow-2xl">
      <input type="text" placeholder="Full Name" class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400" />
      <input type="email" placeholder="Business Email" class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400" />
      <div class="bg-white flex items-center px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200">
        <div class="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-widest font-bold">
          <input type="checkbox" class="w-4 h-4 accent-abc-green" />
          I'm not a robot
        </div>
      </div>
      <button type="submit" class="bg-abc-green hover:bg-abc-green/90 text-abc-navy font-black uppercase transition-all py-5 px-8 cursor-pointer tracking-widest text-xs">
        Join the List
      </button>
    </form>

    <div class="mt-12 flex flex-col items-center">
      <p class="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6 font-bold">Connect with our experts</p>
      <div class="flex items-center gap-6">
        <NuxtLink to="https://linkedin.com/company/abc-sales-consulting" target="_blank" class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300">
          <Icon name="uil:linkedin" class="text-xl group-hover:text-abc-green transition-colors" />
        </NuxtLink>
        <NuxtLink to="https://instagram.com/abcsales" target="_blank" class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300">
          <Icon name="uil:instagram" class="text-xl group-hover:text-abc-green transition-colors" />
        </NuxtLink>
        <NuxtLink to="https://facebook.com/abcsales" target="_blank" class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300">
          <Icon name="uil:facebook-f" class="text-xl group-hover:text-abc-green transition-colors" />
        </NuxtLink>
        <NuxtLink to="https://tiktok.com/@abcsales" target="_blank" class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-abc-green transition-all duration-300">
          <Icon name="ic:baseline-tiktok" class="text-xl group-hover:text-abc-green transition-colors" />
        </NuxtLink>
      </div>
    </div>
  </MuiPageContainer>

  <MuiPageContainer class="py-12 border-b border-white/10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div>
        <h4 class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Our Office</h4>
        <p class="text-sm text-white/70 leading-relaxed uppercase">
          Plot 1, Ntinda Church Road<br />
          Church Bend, Off Martyrs Way<br />
          Ministers' Village, Ntinda
        </p>
      </div>

      <div>
        <h4 class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Contact Us</h4>
        <p class="text-sm text-white/70 leading-relaxed">
          <span class="block mb-1">admin@abcsalesconsulting.net</span>
          <span>+256 748 019 936</span>
        </p>
      </div>

      <div class="flex flex-col items-center md:items-start">
        <h4 class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Find Us</h4>
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

  <MuiPageContainer class="py-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase opacity-60">
    <p>&copy; {{ new Date().getFullYear() }} ABC Sales Consulting. All Rights Reserved.</p>
    <div class="flex gap-8 mt-4 md:mt-0">
      <NuxtLink to="/privacy" class="hover:text-abc-green">Privacy Policy</NuxtLink>
      <NuxtLink to="/terms" class="hover:text-abc-green">Terms of Service</NuxtLink>
    </div>
  </MuiPageContainer>
   <BackToTop />
</footer>
</template>

<script setup>
import { ref } from "vue";
import {
  MuiButton,
  MuiPageContainer,
  MuiPattern,
} from "@northgreenug/musizi-ui-kit";
import BackToTop from "~/components/BackToTop.vue";
import { useDiscoveryForm } from "~/composables/useDiscoveryForm.js";

useHead({ title: 'Methodology' });

const { openForm } = useDiscoveryForm();
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
      { name: "Our Team", to: "/why-abc/team" }, // Points to pages/why-abc/team.vue
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
