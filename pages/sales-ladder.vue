<template>
  <div class="bg-abc-navy min-h-screen text-white">
    <!-- TOP HEADER / NAV -->
    <div class="bg-maroon pt-4 pb-5 bg-cover bg-center bg-[url('/bg-images/bg-blue.png')] border-b border-white/10">
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
      </MuiPageContainer>

      <!-- HERO SECTION -->
      <MuiPageContainer class="py-16 md:py-20 text-center text-white">
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="inline-block border border-abc-green/50 bg-abc-green/10 text-abc-green px-6 py-1.5 rounded-full text-base font-bold uppercase tracking-[0.3em]">
            THE ABC SALES LADDER
          </div>
          
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight">
            Stop Guessing. <br />
            <span class="text-abc-green">Start Closing.</span>
          </h1>

          <p class="text-white/90 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            A step-by-step path that turns you from someone who sells when they get lucky into someone who sells on purpose.
          </p>

          <div class="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="htt256791178657?text=Hello%20ABC%20Sales,%20I%20want%20to%20enrol%20in%20The%20ABC%20Sales%20Ladder"
              target="_blank"
              class="inline-block bg-abc-orange hover:bg-abc-orange/90 text-white font-black uppercase text-base tracking-widest px-8 py-4 transition-colors"
            >
              Message Us On WhatsApp →
            </a>
            <a
              href="#ladder-levels"
              class="inline-block border border-white/30 hover:bg-white hover:text-abc-navy text-white font-bold uppercase text-base tracking-widest px-8 py-4 transition-colors"
            >
              View Programme Levels
            </a>
          </div>
        </div>
      </MuiPageContainer>
    </div>

    <!-- BEFORE AND AFTER: LUCK VS PURPOSE -->
    <section class="py-16 bg-white text-gray-900">
      <MuiPageContainer>
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12 space-y-3">
            <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight text-abc-navy">
              You Already Sell. <span class="text-abc-orange">The Question Is Whether You Sell Well.</span>
            </h2>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
              You run a business. That means you're already selling every single day—to the customer who's "just looking," to the one who says your price is too high, or to the one who promises to call back and vanishes. ABC takes the guesswork out and gives you a process you can repeat and trust.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- LUCK -->
            <div class="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div class="flex items-center gap-2 text-red-600 font-black text-base uppercase tracking-widest border-b border-red-200 pb-3">
                <span>❌</span>
                <span>Selling On Luck</span>
              </div>
              <ul class="space-y-3 text-base sm:text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-red-500">•</span>
                  <span>You drop your price the moment someone hesitates.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500">•</span>
                  <span>You talk too much and listen too little.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500">•</span>
                  <span>"Let me think about it" ends the conversation.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500">•</span>
                  <span>You chase whoever calls, whenever they call.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500">•</span>
                  <span>Referrals happen by accident, if at all.</span>
                </li>
              </ul>
            </div>

            <!-- PURPOSE -->
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div class="flex items-center gap-2 text-emerald-700 font-black text-base uppercase tracking-widest border-b border-emerald-200 pb-3">
                <span>✅</span>
                <span>Selling On Purpose</span>
              </div>
              <ul class="space-y-3 text-base sm:text-sm text-gray-800 font-medium">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600">✓</span>
                  <span>You hold your price because you can show the value.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600">✓</span>
                  <span>You ask the questions that make people open up.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600">✓</span>
                  <span>"Let me think about it" is where you go to work.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600">✓</span>
                  <span>You have a pipeline and you work it on purpose.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600">✓</span>
                  <span>You ask for referrals and you get them.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MuiPageContainer>
    </section>

    <!-- THE 7-STEP PROCESS -->
    <section class="py-16 bg-slate-900 border-t border-b border-white/10">
      <MuiPageContainer>
        <div class="max-w-5xl mx-auto text-center space-y-8">
          <div class="space-y-2">
            <span class="text-abc-green text-base font-black uppercase tracking-widest">Framework</span>
            <h2 class="text-3xl font-black uppercase tracking-tight text-white">
              One Process. Seven Steps. Yours For Life.
            </h2>
            <p class="text-white/70 text-sm max-w-2xl mx-auto">
              Everything we teach hangs on one simple path. The ladder takes you through these seven steps three times—each time deeper, each time on tougher deals.
            </p>
          </div>

          <!-- 7 STEPS PIPELINE UI -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 pt-4">
            <div v-for="(step, idx) in steps" :key="step" class="bg-white/5 border border-white/10 p-4 rounded-xl text-center flex flex-col justify-between hover:border-abc-orange transition-colors">
              <span class="text-abc-orange font-black text-lg">0{{ idx + 1 }}</span>
              <span class="text-base font-bold uppercase tracking-wider text-white mt-2">{{ step }}</span>
            </div>
          </div>

          <!-- MINDSET FOUNDATION -->
          <div class="bg-abc-orange/20 border border-abc-orange/50 p-4 rounded-xl max-w-xl mx-auto text-center mt-6">
            <span class="text-abc-orange font-black text-base uppercase tracking-widest block mb-1">
              IT ALL STANDS ON ONE THING
            </span>
            <span class="text-white font-extrabold text-base uppercase">Sales Mindset</span>
          </div>
        </div>
      </MuiPageContainer>
    </section>

    <!-- PROGRAMME LEVELS -->
    <section id="ladder-levels" class="py-20 bg-abc-navy">
      <MuiPageContainer>
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center space-y-3">
            <span class="text-abc-orange text-base font-black uppercase tracking-widest">Where You Start Is Up To You</span>
            <h2 class="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Choose Your Rung
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- LEVEL 1 -->
            <div class="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-abc-green transition-all">
              <div class="space-y-6">
                <div class="space-y-2 border-b border-white/10 pb-4">
                  <span class="text-abc-green text-base font-black uppercase tracking-widest">Level 1</span>
                  <h3 class="text-xl font-black uppercase text-white">Foundational Selling</h3>
                  <p class="text-base text-white/70">Learn to sell properly, for the first time.</p>
                </div>

                <div class="space-y-2">
                  <span class="text-[10px] font-bold uppercase text-white/50 tracking-wider">Is This You?</span>
                  <p class="text-base text-white/90 leading-relaxed">
                    You sell every day but you've never been trained how. You're winging it, and you know it.
                  </p>
                </div>

                <div class="space-y-2">
                  <span class="text-[10px] font-bold uppercase text-white/50 tracking-wider">You Walk Away With</span>
                  <ul class="space-y-2 text-base text-white/80">
                    <li class="flex items-start gap-2">
                      <span class="text-abc-green font-bold">✓</span>
                      <span>The full 7-step process running on your product</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-abc-green font-bold">✓</span>
                      <span>Rapport that opens doors instead of small talk</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-abc-green font-bold">✓</span>
                      <span>A close that doesn't feel like begging</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="pt-8 border-t border-white/10 mt-8 space-y-4">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-[10px] uppercase text-white/50 block">Duration</span>
                    <span class="text-sm font-bold text-white">6 Weeks</span>
                  </div>
                  <div class="text-right">
                    <span class="text-[10px] uppercase text-white/50 block">Investment</span>
                    <span class="text-lg font-black text-abc-green">UGX 900,000</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/256791178657?text=Hello%20ABC%20Sales,%20I%20want%20to%20register%20for%20Level%201%20Foundational%20Selling"
                  target="_blank"
                  class="block w-full bg-white/10 hover:bg-abc-green hover:text-abc-navy text-white text-center font-black uppercase text-base tracking-widest py-3 transition-colors rounded-lg"
                >
                  Enrol In Level 1
                </a>
              </div>
            </div>

            <!-- LEVEL 2 -->
            <div class="bg-white/10 border-2 border-abc-orange rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl">
              <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-abc-orange text-white px-4 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                Most Popular
              </div>

              <div class="space-y-6">
                <div class="space-y-2 border-b border-white/10 pb-4">
                  <span class="text-abc-orange text-base font-black uppercase tracking-widest">Level 2</span>
                  <h3 class="text-xl font-black uppercase text-white">Frontline Practitioner</h3>
                  <p class="text-base text-white/70">Stop discounting. Start closing on value.</p>
                </div>

                <div class="space-y-2">
                  <span class="text-[10px] font-bold uppercase text-white/50 tracking-wider">Is This You?</span>
                  <p class="text-base text-white/90 leading-relaxed">
                    You can sell, but you cave on price, your pipeline is a mess, and you lose deals you should win.
                  </p>
                </div>

                <div class="space-y-2">
                  <span class="text-[10px] font-bold uppercase text-white/50 tracking-wider">You Walk Away With</span>
                  <ul class="space-y-2 text-base text-white/80">
                    <li class="flex items-start gap-2">
                      <span class="text-abc-orange font-bold">✓</span>
                      <span>Discovery that uncovers what people will really pay for</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-abc-orange font-bold">✓</span>
                      <span>A live pipeline you actually run, not a guess</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-abc-orange font-bold">✓</span>
                      <span>The confidence to defend your price to anyone</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="pt-8 border-t border-white/10 mt-8 space-y-4">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-[10px] uppercase text-white/50 block">Duration</span>
                    <span class="text-sm font-bold text-white">10 Weeks</span>
                  </div>
                  <div class="text-right">
                    <span class="text-[10px] uppercase text-white/50 block">Investment</span>
                    <span class="text-lg font-black text-abc-orange">UGX 1,800,000</span>
                  </div>
                </div>
                <a
                  href="htt256791178657?text=Hello%20ABC%20Sales,%20I%20want%20to%20register%20for%20Level%202%20Frontline%20Practitioner"
                  target="_blank"
                  class="block w-full bg-abc-orange hover:bg-abc-orange/90 text-white text-center font-black uppercase text-base tracking-widest py-3 transition-colors rounded-lg"
                >
                  Enrol In Level 2
                </a>
              </div>
            </div>

            <!-- LEVEL 3 -->
            <div class="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-abc-green transition-all">
              <div class="space-y-6">
                <div class="space-y-2 border-b border-white/10 pb-4">
                  <span class="text-abc-green text-base font-black uppercase tracking-widest">Level 3</span>
                  <h3 class="text-xl font-black uppercase text-white">Sales Leadership</h3>
                  <p class="text-base text-white/70">Build a team that sells without you in the room.</p>
                </div>

                <div class="space-y-2">
                  <span class="text-[10px] font-bold uppercase text-white/50 tracking-wider">Is This You?</span>
                  <p class="text-base text-white/90 leading-relaxed">
                    You've outgrown selling solo. Now you need others to sell as well as you do.
                  </p>
                </div>

                <div class="space-y-2">
                  <span class="text-[10px] font-bold uppercase text-white/50 tracking-wider">You Walk Away With</span>
                  <ul class="space-y-2 text-base text-white/80">
                    <li class="flex items-start gap-2">
                      <span class="text-abc-green font-bold">✓</span>
                      <span>A playbook your whole team can run</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-abc-green font-bold">✓</span>
                      <span>The skill to coach a seller through a real deal</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-abc-green font-bold">✓</span>
                      <span>A pipeline you manage across people, not just yourself</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="pt-8 border-t border-white/10 mt-8 space-y-4">
                <div class="flex justify-between items-end">
                  <div>
                    <span class="text-[10px] uppercase text-white/50 block">Duration</span>
                    <span class="text-sm font-bold text-white">10 Weeks</span>
                  </div>
                  <div class="text-right">
                    <span class="text-[10px] uppercase text-white/50 block">Investment</span>
                    <span class="text-lg font-black text-abc-green">UGX 2,600,000</span>
                  </div>
                </div>
                <a
                  href="htt256791178657?text=Hello%20ABC%20Sales,%20I%20want%20to%20register%20for%20Level%203%20Sales%20Leadership"
                  target="_blank"
                  class="block w-full bg-white/10 hover:bg-abc-green hover:text-abc-navy text-white text-center font-black uppercase text-base tracking-widest py-3 transition-colors rounded-lg"
                >
                  Enrol In Level 3
                </a>
              </div>
            </div>
          </div>
        </div>
      </MuiPageContainer>
    </section>

    <!-- TRAINER CERTIFICATION BANNER -->
    <section class="py-16 bg-slate-900 border-t border-white/10">
      <MuiPageContainer>
        <div class="max-w-4xl mx-auto bg-gradient-to-r from-abc-navy to-slate-800 border border-abc-orange/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div class="md:col-span-8 space-y-4">
              <span class="text-abc-orange text-base font-black uppercase tracking-widest block">
                And When You've Mastered It
              </span>
              <h3 class="text-2xl sm:text-3xl font-black uppercase text-white">
                Certified ABC Trainer
              </h3>
              <p class="text-base sm:text-sm text-white/80 leading-relaxed">
                Teach it. Earn a living from it. Open to Level 3 graduates and proven sellers ready to teach. Get the right to teach the full ABC method in your own business or as a licensed ABC trainer.
              </p>
              <div class="flex flex-wrap gap-4 text-base font-bold text-abc-green">
                <span>• Intensive + Assessed Teach-Back</span>
                <span>• Investment: UGX 2,500,000</span>
              </div>
            </div>
            <div class="md:col-span-4 text-left md:text-right">
              <a
                href="htt256791178657?text=Hello%20ABC%20Sales,%20I%20am%20interested%20in%20the%20Certified%20ABC%20Trainer%20programme"
                target="_blank"
                class="inline-block bg-abc-orange hover:bg-abc-orange/90 text-white font-black uppercase text-xs tracking-widest px-6 py-3.5 rounded-lg transition-colors"
              >
                Apply As Trainer →
              </a>
            </div>
          </div>
        </div>
      </MuiPageContainer>
    </section>

    <!-- WHY OUR CERTIFICATE MATTERS & METHODOLOGY -->
    <section class="py-20 bg-white text-gray-900">
      <MuiPageContainer>
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-4">
            <span class="text-abc-orange text-xs font-black uppercase tracking-widest">
              Why Our Certificate Is Worth Carrying
            </span>
            <h2 class="text-3xl font-black uppercase text-abc-navy tracking-tight leading-tight">
              Real Customers. Real Numbers. Your Actual Business.
            </h2>
            <p class="text-sm text-gray-600 leading-relaxed">
              Plenty of places will hand you a certificate for showing up. We don't. From Level 2 up, you earn it in front of a panel, and you pass on one standard: <strong>No hiding behind a nice-looking slide.</strong>
            </p>
            <p class="text-sm text-gray-600 leading-relaxed">
              When you tell someone you're ABC-certified, it means you stood up, showed your real pipeline, and defended your numbers to a panel who pushed back.
            </p>
          </div>

          <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 class="text-base font-black uppercase text-abc-navy">Why Weeks, Not One Big Day</h3>
            <p class="text-xs text-gray-600 leading-relaxed">
              You already know how a one-day seminar goes. Great energy in the room, and by next week it's gone. Skills don't work that way.
            </p>
            <ul class="space-y-3 text-xs text-gray-800 font-medium pt-2">
              <li class="flex items-start gap-2">
                <span class="text-abc-orange font-bold">✓</span>
                <span>You practise on your customers and your products, not made-up examples.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-abc-orange font-bold">✓</span>
                <span>Each week you take one skill into the field and bring back what happened.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-abc-orange font-bold">✓</span>
                <span>By the end it's a habit, not a memory.</span>
              </li>
            </ul>
          </div>
        </div>
      </MuiPageContainer>
    </section>

    <!-- FOOTER CTA -->
    <section class="py-16 bg-maroon text-center border-t border-white/10">
      <MuiPageContainer>
        <div class="max-w-2xl mx-auto space-y-6">
          <h2 class="text-3xl font-black uppercase text-white tracking-tight">
            Ready When You Are
          </h2>
          <p class="text-white/80 text-sm leading-relaxed">
            If selling still feels like luck, start at Level 1. If you can sell but you're leaving money on the table, come in at Level 2.
          </p>
          <div>
            <a
              href="htt256791178657?text=Hello%20ABC%20Sales,%20I%20am%20ready%20to%20grab%20a%20seat%20in%20the%20next%20cohort"
              target="_blank"
              class="inline-block bg-abc-orange hover:bg-abc-orange/90 text-white font-black uppercase text-xs tracking-widest px-10 py-4 transition-colors"
            >
              Grab Your Seat In The Next Cohort →
            </a>
          </div>
        </div>
      </MuiPageContainer>
    </section>

    <BackToTop />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MuiButton, MuiPageContainer } from "@northgreenug/musizi-ui-kit";
import BackToTop from "~/components/BackToTop.vue";

useHead({
  title: "The ABC Sales Ladder | ABC Sales Consulting",
});

const isMobileMenuOpen = ref(false);
const activeSubMenu = ref(null);

const steps = [
  "Prospecting",
  "Building Rapport",
  "Identifying Needs",
  "Presenting",
  "Handling Objections",
  "Closing",
  "Getting Referrals",
];

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
      { name: "Job Opportunities", to: "/careers" },
      { name: "Career Launch Lab", to: "/launch-lab" },
      { name: "Sales Ladder", to: "/sales-ladder" },
    ],
  },
  { name: "Case Studies", to: "/case-studies" },
  {
    name: "Why ABC?",
    to: "/why-abc/methodology",
    subLinks: [
      { name: "Methodology", to: "/why-abc/methodology" },
      { name: "Our Team", to: "/why-abc/team" },
    ],
  },
  { name: "Gallery", to: "/gallery" },
];
</script>