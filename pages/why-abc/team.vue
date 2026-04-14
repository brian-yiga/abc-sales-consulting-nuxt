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
              label="MEET THE TEAM"
              class="!rounded-full px-8 !font-medium mb-6 pointer-events-none tracking-widest text-[10px]"
            />
          </div>

          <h2
            class="mui-text--display-1 uppercase leading-tight font-black tracking-tighter"
          >
            The Minds Driving <br />
            <span class="text-abc-green">Your Sales Growth.</span>
          </h2>

          <p class="mt-6 mb-10 text-white/90 leading-relaxed text-lg">
            Our team brings together decades of field-tested experience. From
            the high-stakes environments of high-performance sales to global
            consultancy, we’ve mastered the art of behavioral sales coaching.
          </p>
        </div>
      </div>
    </MuiPageContainer>
  </div>

  <section class="py-20 bg-gray-50">
    <MuiPageContainer>
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="inline-block bg-gray-100 text-maroon px-4 py-1 rounded-full text-[12px] font-bold uppercase mb-4 tracking-widest"
        >
          Our Heritage
        </div>
        <h2 class="text-4xl font-black mb-8">Built on Decades of Excellence</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          ABC Sales Consulting was born from a shared history of excellence at
          Saladmaster, where our founders honed a combined 50+ years of direct
          sales expertise. We don't just teach theory; we teach the "Saladmaster
          Way"—a philosophy of high-impact engagement, emotional intelligence,
          and relentless consistency that turns prospects into lifelong
          advocates.
        </p>
      </div>
    </MuiPageContainer>
  </section>

  <section class="py-14 bg-white">
   <MuiPageContainer>
    <div class="text-center mb-16">
      <h2 class="text-4xl font-black uppercase border-maroon inline-block border-b-4 pb-2">
        Founders
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="founder in founders" :key="founder.name" class="bg-white shadow-sm flex flex-col group">
        <div class="overflow-hidden bg-gray-100">
          <img
            :src="founder.image"
            :alt="founder.name"
            class="w-full aspect-square object-cover object-top transition-all duration-500"
          />
        </div>
        <div class="p-8 flex flex-col flex-grow">
          <h3 class="text-2xl font-black uppercase mb-1">{{ founder.name }}</h3>
          <p class="text-maroon font-bold text-sm mb-4">{{ founder.title }}</p>
          <p class="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
            {{ founder.shortBio }}
          </p>
          <MuiButton
            label="READ MORE"
            variant="outline"
            class="w-full !border-gray-200"
            @click="openModal(founder)"
          />
        </div>
      </div>
    </div>

   <Transition name="fade">
  <div v-if="selectedMember" class="fixed inset-0 z-[250] flex items-start md:items-center justify-center p-4 md:p-8">
    
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="closeModal"></div>
    
    <div class="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row scrollbar-hide">
      
      <button @click="closeModal" class="absolute top-4 right-4 z-20 text-gray-400 hover:text-black bg-white/50 rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="w-full md:w-1/2 bg-gray-100 shrink-0">
        <img 
          :src="selectedMember.image" 
          :alt="selectedMember.name" 
          class="w-full h-full object-cover aspect-[4/5] md:aspect-auto" 
        />
      </div>

      <div class="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <h2 class="text-3xl font-black uppercase mb-1">{{ selectedMember.name }}</h2>
        <p class="text-maroon font-bold mb-4">{{ selectedMember.title }}</p>
        <div class="w-12 h-1 bg-maroon mb-6"></div>
        
        <p class="text-gray-700 leading-relaxed text-base md:text-lg">
          {{ selectedMember.fullBio }}
        </p>

        <div class="mt-8">
           <MuiButton label="CLOSE" variant="outline" class="w-full md:w-auto" @click="closeModal" />
        </div>
      </div>
    </div>
  </div>
</Transition>
  </MuiPageContainer>
  </section>

  <section class="py-14 bg-gray-900 text-white">
    <MuiPageContainer>
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-black uppercase pb-4 border-b-4 border-abc-green inline-block"
        >
          Strategic Advisors
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white text-black p-0 group shadow-xl">
          <div class="h-56 overflow-hidden bg-gray-200">
            <img
              src="/img/whoWeAre/Mr. John Ddegeya Sekyeru.jpg"
              alt="Mr. John Ddegeya Sekyeru"
              class="w-full h-full object-cover object-top transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h4 class="font-black uppercase text-xl">
              Mr. John Ddegeya Sekyeru
            </h4>
            <MuiButton
              label="LinkedIn"
              href="https://www.linkedin.com/in/ddegeya-sekyeru-9b1220157/?originalSubdomain=ug"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              class="w-full !border-gray-200 mt-auto"
            />
          </div>
        </div>

        <div class="bg-white text-black p-0 group shadow-xl">
          <div class="h-56 overflow-hidden bg-gray-200">
            <img
              src="/img/whoWeAre/Mrs. Jassy Kabahiniza Ebwanyu.jpeg"
              alt="Mrs. Jassy Kabahiniza Ebwanyu"
              class="w-full h-full object-cover object-top transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h4 class="font-black uppercase text-xl">
              Mrs. Jassy Kabahiniza Ebwanyu
            </h4>
            <MuiButton
              label="LinkedIn"
              href="https://www.linkedin.com/in/kabanihiza/?originalSubdomain=ug"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              class="w-full !border-gray-200 mt-auto"
            />
          </div>
        </div>

         <div class="bg-white text-black p-0 group shadow-xl">
          <div class="h-56 overflow-hidden bg-gray-200">
            <img
              src="/img/whoWeAre/Mrs. Josephine Sajjabi.jpg"
              alt="Mrs. Josephine Sajjabi"
              class="w-full h-full object-cover object-top transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h4 class="font-black uppercase text-xl">Mrs. Josephine Sajjabi <span class="text-white">(dahlin)</span> </h4>
            <MuiButton
              label="LinkedIn"
              href="https://www.linkedin.com/in/josephine-sajjabi-9b6a9171/?originalSubdomain=ug"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              class="w-full !border-gray-200 mt-auto"
            />
          </div>
        </div>

         <div class="bg-white text-black p-0 group shadow-xl">
          <div class="h-56 overflow-hidden bg-gray-200">
            <img
              src="/img/whoWeAre/Ms. Gloria Nakiguli.jpeg"
              alt="Ms. Gloria Nakiguli"
              class="w-full h-full object-cover object-top transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h4 class="font-black uppercase text-xl">Ms. Gloria Nakiguli</h4>
            <MuiButton
              label="LinkedIn"
              href="https://www.linkedin.com/in/gloria-nakiguli-9b6a9171/?originalSubdomain=ug"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              class="w-full !border-gray-200 mt-auto"
            />
          </div>
        </div>

         <div class="bg-white text-black p-0 group shadow-xl">
          <div class="h-56 overflow-hidden bg-gray-200">
            <img
              src="/img/whoWeAre/Ms. Primera Muthoni.jpeg"
              alt="Ms. Primera Muthoni"
              class="w-full h-full object-cover object-top transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h4 class="font-black uppercase text-xl">Ms. Primera Muthoni</h4>
            <MuiButton
              label="LinkedIn"
              href="https://www.linkedin.com/in/primera-muthoni-a3338a23b/?originalSubdomain=ug"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              class="w-full !border-gray-200 mt-auto"
            />
          </div>
        </div>

         <div class="bg-white text-black p-0 group shadow-xl">
          <div class="h-56 overflow-hidden bg-gray-200">
            <img
              src="/img/whoWeAre/Mr. Akampa Leon.jpeg"
              alt="Mr. Akampa Leon"
              class="w-full h-full object-cover object-top transition-all duration-500"
            />
          </div>
          <div class="p-6">
            <h4 class="font-black uppercase text-xl">Mr. Akampa Leon</h4>
            <MuiButton
              label="LinkedIn"
              href="https://www.linkedin.com/in/leon-akampa-mugasha-896218138/"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              class="w-full !border-gray-200 mt-auto"
            />
          </div>
        </div>
      </div>
    </MuiPageContainer>
  </section>

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
</footer>
</template>

<script setup>
import { ref } from "vue";
import {
  MuiButton,
  MuiPageContainer,
  MuiPattern,
} from "@northgreenug/musizi-ui-kit";

useHead({ title: 'Team' });

const { openForm } = useDiscoveryForm();
const isMobileMenuOpen = ref(false);
const activeSubMenu = ref(null);

const selectedMember = ref(null)

const founders = [
  {
    name: "Dahlin Ssajjabi",
    title: "Co-Founder | Chief Executive Officer",
    image: "/img/movingAds/dahlinSajjabiNoBg.png",
    shortBio: "My entrepreneurial spirit ignited in 2014 when I co- founded Tasty Yellow Yolk...",
    fullBio: "My entrepreneurial spirit ignited in 2014 when I co- founded Tasty Yellow Yolk. This experience, coupled with my door-to-door supermarket sales, fuelled my passion for the art of the sale. Following my law degree from Makerere University, I joined Saladmaster for 7 years. There, I not only led the top- performing team in Africa, but globally, driving phenomenal sales across East Africa. My expertise lies in creating high-performing teams through excellence in sales training. My mission is to elevate the sales profession, making it a respected career path, not just in Uganda, but across East Africa."
  },
  {
    name: "Priscilla Alela",
    title: "Founder | Chief Operations Officer",
    image: "/img/movingAds/priscillaAlelaNoBg.png",
    shortBio: "For nearly 20 years, she has thrived in the dynamic world of sales, navigating diverse fields...",
    fullBio: "For nearly 20 years, I've thrived in the dynamic world of sales, navigating diverse fields across Kenya and Uganda. It's more than a career; it's a passion that fuels my drive to consistently exceed sales goals and ignite revenue growth. Through clear communication and strategic problem-solving, I develop a deep understanding of their needs. This allows me to craft tailored solutions that empower their businesses to flourish. My success is fuelled by a relentless results orientation and an unwavering commitment to exceptional customer service."
  },
  {
    name: "Godwin Batuma",
    title: "Co-Founder | Director, Human Resources",
    image: "/img/movingAds/godwinBatumaNoBg.png",
    shortBio: "I am a results-driven sales and marketing professional with over 10 years of experience...",
    fullBio: "I am a results-driven sales and marketing professional with over 10 years of experience driving revenue growth, leading high-performing teams, and cultivating long-lasting customer relationships both internationally and locally with my foot print in countries such as Kenya, Mauritius, Burundi , DRC , Malaysia, and Uganda . I believe that clear and effective communication is key to building strong relationships and driving results. Anyone can be taught how to sell with the right training and coaching, and I'm passionate about helping others achieve their full potential.."
  }
]

const openModal = (member) => {
  selectedMember.value = member
}

const closeModal = () => {
  selectedMember.value = null
}

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
