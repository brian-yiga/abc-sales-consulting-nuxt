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
          Sales Strategy & Excellence
        </div>

        <h2
          class="mui-text--display-1 uppercase font-black tracking-tighter leading-tight"
        >
          Transform Your Sales <br />
          Into a Revenue Engine
        </h2>

        <p
          class="max-w-xl mt-6 mb-10 mx-auto text-white/90 leading-relaxed text-sm tracking-wide"
        >
          ABC Sales Consulting provides world-class training and strategic
          interventions to help African businesses scale faster, close bigger
          deals, and build sustainable, predictable growth.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <MuiButton
            variant="red-fill"
            label="BOOK A DISCOVERY CALL"
            class="!rounded-none px-10 py-4 font-bold text-[10px] tracking-widest shadow-xl cursor-pointer"
            @click="discoveryFormRef?.open()"
          />
          <MuiButton
            variant="white-stroke"
            label="OUR SERVICES"
            class="!rounded-none px-10 py-4 font-bold text-[10px] tracking-widest hover:bg-white hover:text-abc-navy transition-all"
            href="/services"
          />
        </div>
      </div>
    </MuiPageContainer>

    <MuiPageContainer wide class="grid grid-cols-2 gap-2 max-w-7xl">
      <div
        class="h-[165px] md:h-[250px] lg:h-[316px] xl:h-[342px] overflow-hidden"
      >
        <NuxtImg
          src="/img/home/freeDiscovery.jpg"
          alt="ABC Sales Consulting free discovery session with professional sales team"
          class="w-full object-cover object-center block rounded-md h-[166px] md:h-[251px] lg:h-[317px] xl:h-[343px]"
          fit="cover"
          sizes="200px md:400px lg:500px xl:540px"
        />
      </div>

      <div
        class="h-[165px] md:h-[250px] lg:h-[316px] xl:h-[342px] overflow-hidden"
      >
        <NuxtImg
          src="/img/home/boardmeeting.jpg"
          alt="Strategic sales planning and board meeting at ABC Sales Consulting"
          class="w-full object-cover block rounded-md h-[166px] md:h-[251px] lg:h-[317px] xl:h-[343px]"
          fit="cover"
          sizes="200px md:400px lg:500px xl:540px"
        />
      </div>

      <div
        class="h-[165px] md:h-[250px] lg:h-[316px] xl:h-[342px] overflow-hidden"
      >
        <NuxtImg
          src="/img/home/consultation.jpg"
          alt="One-on-one professional sales coaching and consultation session"
          class="w-full object-cover block rounded-md h-[166px] md:h-[251px] lg:h-[317px] xl:h-[343px]"
          fit="cover"
          sizes="200px md:400px lg:500px xl:540px"
        />
      </div>

      <div
        class="h-[165px] md:h-[250px] lg:h-[316px] xl:h-[342px] overflow-hidden"
      >
        <NuxtImg
          src="/img/home/rukaPay.jpeg"
          alt="ABC Sales Consulting team and corporate clients after successful workshop"
          class="w-full object-cover block rounded-md h-[166px] md:h-[251px] lg:h-[317px] xl:h-[343px]"
          fit="cover"
          sizes="200px md:400px lg:500px xl:540px"
        />
      </div>
    </MuiPageContainer>
  </div>

  <MuiPageContainer class="mt-16 md:mt-20 lg:mt-25">
    <MuiTextWithImage
      :img="{
        small: '/img/carousel/training.jpeg',
        large: '/img/carousel/training.jpeg',
      }"
      img-alt="ABC Sales Consulting high-impact sales training workshop in Uganda"
      class="mb-6 lg:mb-0"
    >
      <template #title> High-Impact Sales Training </template>

      <p>
        We transform sales teams by mastering the full sales lifecycle—from lead
        generation and psychological prospecting to advanced closing techniques.
        Our project-based coaching ensures your team doesn't just learn theory,
        but builds the actual muscle needed to hit aggressive revenue targets in
        the African market.
      </p>
    </MuiTextWithImage>

    <MuiTextWithImage
      :img="{
        small: '/img/heroCarousel/alelaHeroPage.jpg',
        large: '/img/heroCarousel/alelaHeroPage.jpg',
      }"
      :image-is-right-position="true"
      img-alt="Strategic sales consulting and revenue growth planning"
      class="mb-6 lg:mb-0"
    >
      <template #title> Strategic Sales Consulting </template>

      <p>
        Go beyond the spreadsheet. We partner with leadership to design tailored
        sales processes that align with your unique business goals. Through
        in-depth industry analysis and hands-on consulting, we help you identify
        leaks in your sales funnel and implement predictable systems for
        sustainable growth.
      </p>
    </MuiTextWithImage>

    <MuiTextWithImage
      :img="{
        small: '/img/heroCarousel/dahlinHeroPage.jpg',
        large: '/img/heroCarousel/dahlinHeroPage.jpg',
      }"
      img-alt="Comprehensive sales performance audit and data analysis"
    >
      <template #title> Comprehensive Sales Audits </template>

      <p>
        Optimize your performance with data-driven insights. Our Sales Audits
        provide a 360-degree view of your sales force effectiveness, identifying
        skills gaps and process bottlenecks. We provide actionable roadmaps that
        transform raw performance data into a strategic advantage for your
        organization.
      </p>
    </MuiTextWithImage>
  </MuiPageContainer>

  <MuiPageContainer class="mt-16 md:mt-20 lg:mt-25">
    <h2 class="mui-text--display-2 uppercase mb-10 text-center">
      Why ABC Sales?
    </h2>

    <div class="grid gap-4 lg:grid-cols-2">
      <MuiTextWithImage
        :img="{
          small: '/img/carousel/board1.jpg',
          large: '/img/carousel/board1.jpg',
        }"
        img-alt="World-class sales methodology adapted for the African market"
        class="lg:col-span-2"
        default-title-style="light"
        caption-background-colour="maroon"
      >
        <template #title>
          Global Sales Standards Grounded in African Realities
        </template>

        <p>
          ABC’s methodologies are built on international best practices but
          refined for the unique nuances of the African business landscape. We
          seamlessly integrate psychological prospecting, relationship-based
          selling, and modern CRM data to ensure your team is equipped for an
          ever-evolving market.
        </p>
      </MuiTextWithImage>

      <MuiTextWithImage
        :img="{
          small: '/img/carousel/directors.jpg',
          large: '/img/carousel/directors.jpg',
        }"
        img-alt="Measurable ROI and sales growth with ABC Sales Consulting"
        default-title-style="light"
        caption-background-colour="maroon"
        only-has-vertical-layout
      >
        <template #title> Measurable Revenue Growth </template>

        <p>
          We don't just "train"—we deliver results. Through our partnerships
          with top-tier local firms, we help businesses identify hidden revenue
          gaps and implement closing strategies that result in immediate,
          measurable increases in sales performance.
        </p>
      </MuiTextWithImage>

      <MuiTextWithImage
        :img="{
          small: '/img/carousel/board2.jpg',
          large: '/img/carousel/board2.jpg',
        }"
        img-alt="Practical sales coaching and field-work experience"
        default-title-style="light"
        caption-background-colour="maroon"
        only-has-vertical-layout
      >
        <template #title> Field-Tested Sales Coaching </template>

        <p>
          Our consulting is directly aligned with real-world market needs. We
          move beyond theory with hands-on coaching, ensuring your sales force
          has the practical, high-demand skills to handle objections, negotiate
          effectively, and build long-term client loyalty.
        </p>
      </MuiTextWithImage>
    </div>
  </MuiPageContainer>

  <MuiPageContainer class="mt-16 md:mt-20 lg:mt-25">
    <h2 class="mui-text--display-2 uppercase mb-10 text-center">
      Trusted by Industry Leaders
    </h2>

    <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mb-12 justify-center">
      <MuiLogoButtonCard
        :button="{ text: 'View Impact', href: '/impact', external: false }"
        class="bg-abc-navy bg-blend-overlay"
      >
        <template #Image>
          <img src="/img/logos/client-3.png" class="h-12 w-auto" />
        </template>
        <template #Text>
          <div class="mui-text--headline-2 uppercase text-white">
            <span class="font-light text-abc-green">80% Growth.</span> <br />
            Scaling Operations.
          </div>
        </template>
      </MuiLogoButtonCard>

      <MuiLogoButtonCard
        :button="{ text: 'View Impact', href: '/impact', external: false }"
        class="bg-abc-orange bg-blend-overlay"
      >
        <template #Image>
          <img src="/img/logos/client-4.png" class="h-12 w-auto" />
        </template>
        <template #Text>
          <div class="mui-text--headline-2 uppercase text-white">
            <span class="font-light text-abc-green">High-Performance.</span>
            <br />
            Team Transformation.
          </div>
        </template>
      </MuiLogoButtonCard>

      <MuiLogoButtonCard
        :button="{ text: 'View Impact', href: '/impact', external: false }"
        class="bg-abc-green bg-blend-overlay"
      >
        <template #Image>
          <img src="/img/logos/client-26.png" class="h-12 w-auto" />
        </template>
        <template #Text>
          <div class="mui-text--headline-2 uppercase text-white">
            <span class="font-light text-abc-green">Optimized Funnels.</span>
            <br />
            Predictable Revenue.
          </div>
        </template>
      </MuiLogoButtonCard>

      <MuiLogoButtonCard
        :button="{ text: 'View Impact', href: '/impact', external: false }"
        class="bg-abc-navy bg-blend-overlay"
      >
        <template #Image>
          <img src="/img/logos/client-18.png" class="h-12 w-auto" />
        </template>
        <template #Text>
          <div class="mui-text--headline-2 uppercase text-white">
            <span class="font-light text-abc-green">Closing Mastery.</span>
            <br />
            Market Dominance.
          </div>
        </template>
      </MuiLogoButtonCard>
    </div>

    <div
      class="relative overflow-hidden py-12 border-y border-gray-100 bg-sky-50 md:bg-white"
    >
      <div class="animate-scroll flex items-center gap-16">
        <div
          v-for="n in 26"
          :key="'logo-' + n"
          class="flex-shrink-0 hover:opacity-100 transition-all duration-900"
        >
          <img
            :src="`/img/logos/client-${n}.png`"
            :alt="'ABC Sales Client ' + n"
            class="h-20 md:h-40 w-auto object-contain mx-4"
          />
        </div>

        <div
          v-for="n in 26"
          :key="'dup-' + n"
          class="flex-shrink-0 transition-all duration-900"
        >
          <img
            :src="`/img/logos/client-${n}.png`"
            :alt="'ABC Sales Client ' + n"
            class="h-20 md:h-40 w-auto object-contain mx-4"
          />
        </div>
      </div>
    </div>
  </MuiPageContainer>

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
</footer>

  <!-- Discovery Form Modal -->
  <DiscoveryForm ref="discoveryFormRef" />
  <BackToTop />
</template>

<script setup>
import { ref } from "vue";
import { MuiButton, MuiPageContainer, MuiLogoButtonCard, MuiTextWithImage } from "@northgreenug/musizi-ui-kit";
import DiscoveryForm from "~/components/DiscoveryForm.vue";
import BackToTop from "~/components/BackToTop.vue";

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
      { name: "Sales Blog", to: "/resources" },
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
</script>
