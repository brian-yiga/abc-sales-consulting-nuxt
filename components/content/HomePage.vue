<template>
  <div
    class="bg-maroon pb-5 bg-cover bg-center bg-[url('/bg-images/bg-blue.png')]"
  >
    <!-- 1. GLASSY ANNOUNCEMENT TICKER -->
    <div
      class="w-full bg-white/5 backdrop-blur-[8px] text-white py-3.5 overflow-hidden relative z-[220] border-b border-white/10"
    >
      <div
        class="flex whitespace-nowrap animate-marquee text-[13px] font-bold tracking-widest uppercase"
      >
        <!-- Loop Set 1 -->
        <span class="mx-4 text-abc-orange"
          >🔥 November Upcoming Cohort Registration Now Open!</span
        >
        <span class="mx-4 text-white/40">•</span>
        <span class="mx-4"
          ><span class="text-white/60">📅 Starts:</span> Wednesday, 18th
          November 2026</span
        >
        <span class="mx-4 text-white/40">•</span>
        <span class="mx-4 text-abc-green"
          >👥 Only 12 Slots Available! 10am - 12pm</span
        >
        <span class="mx-4 text-white/40">•</span>
        <span class="mx-4"
          ><span class="text-white/60">📍 Venue:</span> Plot 8, Mukulu Curve,
          Off Martyrs Way, Ntinda</span
        >
        <span class="mx-4 text-white/40">•</span>
        <span class="mx-4"
          ><span class="text-white/60">📞 Contact:</span> 0791 178 657</span
        >
        <span class="mx-4 text-white/40">•</span>

        <!-- Loop Set 2 (Duplicates for seamless scrolling) -->
        <span class="mx-4 text-abc-orange"
          >🔥 November Upcoming Cohort Registration Now Open!</span
        >
        <span class="mx-4 text-white/40">•</span>
        <span class="mx-4"
          ><span class="text-white/60">📅 Starts:</span> Wednesday, 18th
          November 2026</span
        >
        <span class="mx-4 text-white/40">•</span>
        <span class="mx-4 text-abc-green"
          >👥 Only 12 Slots Available! 10am - 12pm</span
        >
        <span class="mx-4 text-white/40">•</span>
        <span class="mx-4"
          ><span class="text-white/60">📍 Venue:</span> Plot 8, Mukulu Curve,
          Off Martyrs Way, Ntinda</span
        >
        <span class="mx-4 text-white/40">•</span>
        <span class="mx-4"
          ><span class="text-white/60">📞 Contact:</span> 0791 178 657</span
        >
      </div>
    </div>
    <!-- HEADER & NAVIGATION -->
    <MuiPageContainer wide class="relative pt-4">
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

    <!-- HERO SECTION WITH SUNDAY EVENT FEATURE -->
    <MuiPageContainer
      class="text-white pt-12 pb-16 lg:pt-16 lg:pb-20 xl:pt-[80px] xl:pb-20 relative bg-cover bg-center"
    >
      <div class="absolute inset-0 pointer-events-none"></div>

      <div class="max-w-6xl mx-auto relative z-10">
        <!-- TOP PILLS / HIGHLIGHTS -->
        <div
          class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 text-center"
        >
          <!-- UPCOMING MASTERCLASS PILL -->
          <NuxtLink
            to="/services#upcoming-events"
            class="inline-flex items-center gap-1.5 border border-abc-green bg-abc-green/20 text-abc-green px-5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-abc-green/30 transition-colors cursor-pointer"
          >
            <span class="w-2 h-2 rounded-full bg-abc-green animate-ping"></span>
            🎙️ MASTERCLASS • 21ST OCT
          </NuxtLink>

          <NuxtLink
            to="/services#upcoming-events"
            class="inline-block border border-abc-orange bg-abc-orange/20 text-abc-orange px-5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] animate-pulse cursor-pointer hover:bg-abc-orange/30 transition-colors"
          >
            🔴 November Cohort
          </NuxtLink>

          <!-- JOB OFFERS / CAREERS HIGHLIGHT -->
          <NuxtLink
            to="/careers"
            class="inline-flex items-center gap-1.5 border border-white/30 bg-white/10 hover:bg-white/20 text-white px-5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] transition-all cursor-pointer group"
          >
            <span class="w-2 h-2 rounded-full bg-abc-green animate-ping"></span>
            💼 JOB OPPORTUNITIES
          </NuxtLink>
        </div>

        <!-- MAIN TWO-COLUMN GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <!-- LEFT COLUMN: MAIN HERO TEXT & METRICS (7 Columns) -->
          <div class="lg:col-span-7 text-center lg:text-left">
            <h2
              class="mui-text--display-1 uppercase font-black tracking-tighter leading-tight text-2xl sm:text-3xl lg:text-4xl"
            >
              Transform Your Sales <br />
              Into a Revenue Engine
            </h2>

            <p
              class="mt-5 mb-8 text-white/90 leading-relaxed text-sm sm:text-base tracking-wide max-w-xl mx-auto lg:mx-0"
            >
              ABC Sales Consulting provides world-class training and strategic
              interventions to help African businesses scale faster, close
              bigger deals, and build sustainable, predictable growth.
            </p>

            <!-- COHORT METRICS GRID -->
            <div
              class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-center border-t border-b border-white/10 py-5"
            >
              <div>
                <div class="text-abc-green font-extrabold text-base md:text-lg">
                  UGX 900,000
                </div>
                <div
                  class="text-[9px] uppercase tracking-wider text-white/60 mt-1"
                >
                  Investment
                </div>
              </div>
              <div>
                <div class="text-abc-green font-extrabold text-base md:text-lg">
                  6 Weeks
                </div>
                <div
                  class="text-[9px] uppercase tracking-wider text-white/60 mt-1"
                >
                  Duration
                </div>
              </div>
              <div>
                <div
                  class="text-abc-orange font-extrabold text-base md:text-lg"
                >
                  12 Seats
                </div>
                <div
                  class="text-[9px] uppercase tracking-wider text-white/60 mt-1"
                >
                  Class Limit
                </div>
              </div>
              <div>
                <div class="text-abc-green font-extrabold text-base md:text-lg">
                  Certificate
                </div>
                <div
                  class="text-[9px] uppercase tracking-wider text-white/60 mt-1"
                >
                  Included
                </div>
              </div>
            </div>

            <!-- HERO CTAS -->
            <div
              class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <MuiButton
                variant="white-fill"
                label="REGISTER FOR NOVEMBER COHORT"
                class="!rounded-none px-8 py-4 font-bold text-[10px] tracking-widest !text-abc-orange !border-abc-orange/60 bg-abc-orange/5 hover:bg-abc-orange hover:!text-white transition-all cursor-pointer"
                @click="novemberCohortFormRef?.open()"
              />
              <MuiButton
                variant="white-stroke"
                label="BOOK A DISCOVERY CALL"
                class="!rounded-none px-8 py-4 font-bold text-[10px] tracking-widest hover:bg-white hover:text-abc-navy transition-all"
                @click="discoveryFormRef?.open()"
              />
            </div>
          </div>

          <!-- RIGHT COLUMN: FEATURED INITIATIVES & UPCOMING MASTERCLASS (5 Columns) -->
          <div class="lg:col-span-5 flex flex-col gap-4">
            <!-- CARD 1: ABC CAREER LAUNCH LAB -->
            <div
              class="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden group hover:border-abc-orange/50 transition-all duration-300"
            >
              <div
                class="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="inline-block w-2.5 h-2.5 rounded-full bg-abc-orange animate-ping"
                  ></span>
                  <span
                    class="text-abc-orange text-xs font-bold uppercase tracking-widest"
                  >
                    New Programme • Ages 18–20
                  </span>
                </div>
                <span
                  class="text-[10px] bg-abc-green/20 text-abc-green px-2.5 py-0.5 rounded font-bold uppercase tracking-wider"
                >
                  Starts 1st Oct 2026
                </span>
              </div>

              <div class="flex gap-4 items-center mb-3">
                <div
                  class="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 relative"
                >
                  <img
                    src="/img/launch-lab/hero-bg.png"
                    alt="ABC Career Launch Lab for Year 13 Graduates"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="space-y-1 text-left flex-1 min-w-0">
                  <h3
                    class="text-base sm:text-lg font-black uppercase text-white leading-tight"
                  >
                    Career Launch Lab
                  </h3>
                  <p
                    class="text-abc-orange font-bold text-[11px] uppercase tracking-wider"
                  >
                    Sell Your Skill. Build Your Confidence.
                  </p>
                  <p
                    class="text-[11px] text-white/70 line-clamp-2 leading-relaxed"
                  >
                    Practical sales & real-world transition for Year 13
                    graduates before university. 6 weeks • UGX 900k.
                  </p>
                </div>
              </div>

              <div
                class="pt-2 border-t border-white/10 flex items-center justify-between"
              >
                <div class="text-[10px] text-white/60">
                  📍 Ntinda Ministers Village
                </div>
                <NuxtLink
                  to="/launch-lab"
                  class="inline-flex items-center gap-1.5 bg-abc-orange text-white hover:bg-abc-orange/90 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md transition-all"
                >
                  Explore Launch Lab →
                </NuxtLink>
              </div>
            </div>

            <!-- CARD 2: UPCOMING LIVE MASTERCLASS WITH DAHLIN SAJJABI -->
            <div
              class="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden group hover:border-abc-green/50 transition-all duration-300"
            >
              <div
                class="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="inline-block w-2.5 h-2.5 rounded-full bg-abc-green animate-ping"
                  ></span>
                  <span
                    class="text-abc-green text-xs font-black uppercase tracking-widest"
                  >
                    Live Masterclass • Google Meet
                  </span>
                </div>
                <span
                  class="text-[10px] bg-abc-orange/20 text-abc-orange border border-abc-orange/30 px-2.5 py-0.5 rounded font-black uppercase tracking-wider"
                >
                  21st Oct • 7:30 PM
                </span>
              </div>

              <div class="flex gap-4 items-center mb-3">
                <div
                  class="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 relative bg-gray-800"
                >
                  <img
                    src="/img/flyers/dahlinTraining.jpeg"
                    alt="Dahlin Sajjabi - Sales Masterclass Speaker"
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="space-y-1 text-left flex-1 min-w-0">
                  <span
                    class="text-[10px] font-bold text-abc-green uppercase tracking-wider block"
                  >
                    Speaker: Dahlin Sajjabi
                  </span>
                  <h3
                    class="text-sm sm:text-base font-black uppercase text-white leading-tight"
                  >
                    How to Handle "I Need To Think About It"
                  </h3>
                  <p
                    class="text-[11px] text-white/70 line-clamp-2 leading-relaxed"
                  >
                    Master proven strategies to navigate tough client objections
                    and close deals with confidence.
                  </p>
                </div>
              </div>

              <div
                class="pt-2 border-t border-white/10 flex items-center justify-between"
              >
                <div class="text-[10px] text-white/60">
                  💻 Live on Google Meet
                </div>
                <a
                  href="https://calendar.app.google/QUrvBwTN1DHDv6WW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center rounded-md px-3.5 py-1.5 text-[10px] font-black tracking-widest bg-abc-green text-abc-navy hover:bg-abc-green/90 transition-all cursor-pointer uppercase shadow-md"
                >
                  REGISTER NOW →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MuiPageContainer>

    <!-- MANAGING DIRECTOR'S MESSAGE OF THE WEEK -->
    <MuiPageContainer class="max-w-7xl mx-auto my-12 md:my-16 lg:my-20">
      <div
        class="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group hover:border-abc-orange/50 transition-all duration-300"
      >
        <!-- SINGLE HEADER: MD's Corner Highlighted -->
        <div
          class="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-white/10 pb-4"
        >
          <!-- LEFT: MD'S CORNER -->
          <span
            class="text-sm sm:text-base font-black uppercase tracking-widest text-abc-green bg-abc-green/20 border border-abc-green/40 px-4 py-1.5 rounded-full shadow-sm"
          >
            MD's Corner
          </span>

          <!-- RIGHT: WEEKLY LEADERSHIP INSIGHTS -->
          <div class="flex items-center gap-2.5">
            <span
              class="inline-block w-3 h-3 rounded-full bg-abc-orange animate-pulse"
            ></span>
            <span
              class="text-abc-orange text-xs font-black uppercase tracking-widest"
            >
              Weekly Leadership Insights
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- LEFT: VIDEO PLAYER CONTAINER -->
          <div class="lg:col-span-5 relative group/video">
            <div
              class="relative rounded-xl overflow-hidden border border-white/20 bg-black shadow-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[500px] w-full flex items-center justify-center mx-auto"
            >
              <video
                controls
                preload="metadata"
                poster="/img/video-thumbs/md-message4.png"
                class="w-full h-full object-cover object-top bg-black"
              >
                <source
                  src="/img/tiktok-videos/md-message4.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <!-- RIGHT: TITLE & ACCOMPANYING MESSAGE -->
          <div class="lg:col-span-7 space-y-4 text-left">
            <div class="space-y-1">
              <span
                class="text-abc-green font-bold text-xs uppercase tracking-widest block"
              >
                Message of the Week
              </span>
              <h3
                class="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white leading-tight"
              >
                There Is No Perfect Time for Sales Training
              </h3>
            </div>

            <p class="text-sm sm:text-base text-white/85 leading-relaxed">
              When is the right time to train your sales team? January, June or
              December? The truth is, there is no perfect time. Your sales team
              needs to perform all year round, so their training should not be
              limited to the beginning of the year or when sales start dropping.
              Markets change, customers evolve, and new challenges arise. Your
              team needs to keep learning, practising and improving to stay
              effective. Don’t wait for sales to drop before investing in your
              people. Sales training is not a one-time event. It’s an ongoing
              investment in your business growth. At ABC Sales Consulting, we
              believe every season is an opportunity to sharpen your team’s
              skills and improve performance. The best time to train your sales
              team is now.
            </p>

            <div
              class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-9 h-9 rounded-full bg-abc-orange/20 border border-abc-orange flex items-center justify-center text-abc-orange font-bold text-xs"
                >
                  MD
                </div>
                <div>
                  <span class="block text-xs font-bold text-white uppercase"
                    >Executive Leadership</span
                  >
                  <span
                    class="block text-[10px] text-white/60 uppercase tracking-wider"
                    >ABC Sales Consulting</span
                  >
                </div>
              </div>

              <NuxtLink
                to="/services#discovery-call"
                class="inline-flex items-center gap-2 bg-abc-orange text-white hover:bg-abc-orange/90 px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all cursor-pointer shadow-lg hover:shadow-abc-orange/20"
              >
                Strategy Consultation →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </MuiPageContainer>
    <!-- MEET THE EXPANDED ABC SUPPORT TEAM -->
    <MuiPageContainer class="max-w-7xl mx-auto my-12 md:my-16 lg:my-20">
      <div
        class="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl md:rounded-[28px] p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden group"
      >
        <!-- Subtle Ambient Glows -->
        <div
          class="absolute -top-24 -right-24 w-80 h-80 bg-abc-green/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          class="absolute -bottom-24 -left-24 w-80 h-80 bg-abc-orange/10 rounded-full blur-3xl pointer-events-none"
        />

        <div class="relative z-10">
          <!-- Section Header -->
          <div class="max-w-3xl mb-8">
            <div
              class="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs tracking-[0.2em] uppercase font-black text-abc-green bg-abc-green/10 border border-abc-green/30 rounded-full"
            >
              <span>👥</span> Beefing Up Our Capacity • Support Team
            </div>
            <h3
              class="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-3"
            >
              A Resilient Team Driving Your Growth
            </h3>
            <p class="text-white/80 text-sm sm:text-base leading-relaxed">
              To beef up our operations and deliver unmatched client
              responsiveness, ABC Sales Consulting has recruited a dedicated,
              resilient support team. Meet the talented professionals driving
              business relationships, agile sales coordination, and compelling
              digital brand visibility.
            </p>
          </div>

          <!-- Direct Link to Leadership & Board -->
          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 md:p-5 rounded-xl bg-white/[0.04] border border-white/10 mb-10"
          >
            <div class="flex items-center gap-3.5">
              <div
                class="w-10 h-10 rounded-lg bg-abc-orange/20 border border-abc-orange/40 flex items-center justify-center text-abc-orange text-lg flex-shrink-0"
              >
                👔
              </div>
              <div>
                <h4
                  class="text-xs sm:text-sm font-black uppercase text-white tracking-wider"
                >
                  Executive Directors & Strategic Advisory Board
                </h4>
                <p class="text-[11px] sm:text-xs text-white/70">
                  Looking for our founding directors, managing partners, and
                  strategic board advisors?
                </p>
              </div>
            </div>
            <NuxtLink
              to="/why-abc/team"
              class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-abc-navy border border-white/20 px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all flex-shrink-0 cursor-pointer shadow-md"
            >
              Meet The Directors & Board →
            </NuxtLink>
          </div>

          <!-- Support Team Cards Grid -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            <div
              v-for="member in supportTeam"
              :key="member.name"
              class="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-abc-orange/50 transition-all duration-300 flex flex-col group/card shadow-lg"
            >
              <!-- Studio Grey Hue Backdrop behind portrait -->
              <div
                class="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 flex items-end justify-center pt-3"
              >
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.45),rgba(0,0,0,0.15))] pointer-events-none"
                />
                <img
                  :src="member.image"
                  :alt="`${member.name} - ${member.role}`"
                  class="w-full h-full object-contain object-bottom group-hover/card:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>

              <!-- Card Details -->
              <div class="p-6 flex flex-col flex-grow text-left">
                <span
                  class="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full self-start mb-3"
                  :class="member.roleBadgeClass"
                >
                  {{ member.role }}
                </span>
                <h4 class="text-xl font-black uppercase text-white mb-3">
                  {{ member.name }}
                </h4>
                <p
                  class="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-6 flex-grow"
                >
                  {{ member.bio }}
                </p>

                <div class="pt-4 border-t border-white/10 mt-auto">
                  <a
                    :href="member.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-2 w-full border border-[#0a66c2]/50 text-[#70b5f9] hover:bg-[#0a66c2] hover:text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                  >
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MuiPageContainer>

    <!-- COHORT GRADUATION HIGHLIGHT -->
    <MuiPageContainer class="max-w-7xl mx-auto my-12 md:my-16 lg:my-20">
      <div
        class="bg-white/5 backdrop-blur-[12px] rounded-2xl md:rounded-[32px] border border-white/10 p-6 md:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden"
      >
        <!-- Subtle Ambient Glow -->
        <div
          class="absolute -top-24 -right-24 w-96 h-96 bg-abc-green/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          class="absolute -bottom-24 -left-24 w-96 h-96 bg-abc-orange/10 rounded-full blur-3xl pointer-events-none"
        />

        <div class="relative z-10">
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div
              class="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 mb-4 text-xs tracking-[0.2em] uppercase font-black text-abc-orange bg-abc-orange/10 border border-abc-orange/30 rounded-full"
            >
              <span>🎓</span> Cohort Milestone • Practical Sales Mastery
            </div>
            <h3
              class="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4"
            >
              Celebrating Our Cohort Graduates
            </h3>
            <p class="text-white/80 text-sm sm:text-base leading-relaxed">
              We proudly celebrate the ambitious sales professionals and
              business leaders who have completed our intensive 6-week Sales
              Strategy & Mastery Program! From conquering high-stakes objection
              handling to embedding structured pipeline frameworks, these
              leaders are transforming their sales pipelines into predictable
              revenue engines.
            </p>
          </div>

          <!-- Graduands Photos Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div
              class="group relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-lg"
            >
              <NuxtImg
                src="/img/cohort-graduands/september-graduands1.jpeg"
                alt="ABC Sales Consulting Cohort graduation celebration"
                class="w-full h-[280px] sm:h-[340px] md:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="sm:100vw md:50vw lg:600px"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
              />
              <div class="absolute bottom-4 left-4 right-4 text-left">
                <span
                  class="inline-block bg-abc-green text-abc-navy text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider mb-1"
                >
                  Graduation & Celebration
                </span>
                <p class="text-white text-xs sm:text-sm font-semibold">
                  Cohort Celebration • Milestone Achievement & Practical Growth
                </p>
              </div>
            </div>

            <div
              class="group relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-lg"
            >
              <NuxtImg
                src="/img/cohort-graduands/september-graduands2.jpeg"
                alt="ABC Sales Consulting Cohort team portrait"
                class="w-full h-[280px] sm:h-[340px] md:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="sm:100vw md:50vw lg:600px"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
              />
              <div class="absolute bottom-4 left-4 right-4 text-left">
                <span
                  class="inline-block bg-abc-orange text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider mb-1"
                >
                  Cohort Class
                </span>
                <p class="text-white text-xs sm:text-sm font-semibold">
                  Classroom Energy • Practical, Face-to-Face Sales Excellence
                </p>
              </div>
            </div>
          </div>

          <!-- Graduate Testimonials -->
          <!-- Graduate Testimonials Section -->
          <div class="border-t border-white/10 pt-10">
            <!-- Section Header & View All Link -->
            <div
              class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
            >
              <div>
                <span
                  class="text-[11px] uppercase tracking-[0.25em] font-bold text-abc-green block mb-1"
                >
                  Direct Feedback & Impact
                </span>
                <h4
                  class="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white"
                >
                  What Our Graduates Have to Say About Us
                </h4>
              </div>

              <NuxtLink
                to="/case-studies#whatsapp-wall"
                class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-abc-orange hover:text-white transition-colors self-start md:self-auto group"
              >
                <span>View More & All Testimonials</span>
                <span class="group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </NuxtLink>
            </div>

            <!-- 1. FEATURED PORTRAIT VIDEO SPOTLIGHT (STACKED ON TOP) -->
            <div
              class="bg-white/5 border border-white/15 rounded-2xl p-6 lg:p-8 shadow-2xl mb-10 relative overflow-hidden group hover:border-abc-orange/50 transition-all duration-300"
            >
              <!-- Card Header -->
              <div
                class="flex items-center justify-between mb-6 border-b border-white/10 pb-4"
              >
                <div class="flex items-center gap-2.5">
                  <span
                    class="w-3 h-3 rounded-full bg-abc-orange animate-ping"
                  ></span>
                  <span
                    class="text-xs sm:text-sm font-black uppercase tracking-widest text-abc-orange"
                  >
                    Featured Video Spotlight
                  </span>
                </div>
                <span
                  class="text-xs bg-abc-green/20 text-abc-green border border-abc-green/40 px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                >
                  Graduate Review
                </span>
              </div>

              <!-- Portrait Video + Accompanying Content Grid -->
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <!-- Left: Portrait Phone Video Player (5 Columns) -->
                <div class="lg:col-span-5 relative group/video">
                  <div
                    class="relative rounded-xl overflow-hidden border border-white/20 bg-black shadow-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[460px] w-full flex items-center justify-center mx-auto"
                  >
                    <video
                      controls
                      preload="metadata"
                      poster="/img/video-thumbs/cohort-testimony-1.png"
                      class="w-full h-full object-cover object-top bg-black"
                    >
                      <source
                        src="/img/testimonies/cohort/testimony-1.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <!-- Right: Accompanying Quote Content (7 Columns) -->
                <div class="lg:col-span-7 space-y-4 text-left">
                  <span
                    class="text-abc-green font-bold text-xs uppercase tracking-widest block"
                  >
                    Communicating Real Value
                  </span>
                  <h3
                    class="text-xl sm:text-2xl font-black uppercase text-white leading-tight"
                  >
                    Beyond Features: Helping Clients See Why It Matters
                  </h3>

                  <p class="text-xs sm:text-sm text-white/85 leading-relaxed">
                    You can find the right client and identify their needs, but
                    still lose the sale if you haven’t communicated your
                    product's true value.
                  </p>
                  <p class="text-xs sm:text-sm text-white/85 leading-relaxed">
                    In our sales cohort, participants learn how to move past
                    simply listing features—showing clients exactly how those
                    features solve their problems. That’s the practical selling
                    we focus on at ABC Sales Consulting.
                  </p>

                  <div
                    class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60"
                  >
                    <span>🎥 Verified Alumni Review</span>
                    <span
                      class="text-abc-orange font-semibold uppercase tracking-wider"
                      >ABC Sales Cohort</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. WRITTEN GRADUATE TESTIMONIALS GRID (BELOW VIDEO) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="testimony in graduateTestimonies"
                :key="testimony.name"
                class="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-abc-orange/40 transition-colors shadow-lg"
              >
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-12 h-12 rounded-full flex items-center justify-center font-black text-abc-navy text-sm sm:text-base flex-shrink-0 shadow-md bg-gradient-to-tr"
                        :class="testimony.accentGradient"
                      >
                        {{ testimony.initials }}
                      </div>
                      <div>
                        <h5 class="font-extrabold text-white text-base">
                          {{ testimony.name }}
                        </h5>
                        <p class="text-xs text-abc-green font-medium">
                          {{ testimony.role }}
                        </p>
                      </div>
                    </div>
                    <div class="flex text-abc-orange text-sm">★★★★★</div>
                  </div>
                  <p
                    class="text-white/85 text-xs sm:text-[13px] leading-relaxed italic mb-4 whitespace-pre-line"
                  >
                    {{ testimony.quote }}
                  </p>
                </div>
                <div
                  class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50"
                >
                  <span>{{ testimony.badge }}</span>
                  <span class="text-abc-orange font-semibold">{{
                    testimony.status
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Cohort Sign-Up Callout Banner -->
          <div
            class="mt-10 bg-gradient-to-r from-abc-navy/90 via-white/5 to-abc-navy/90 border border-abc-orange/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          >
            <div>
              <span
                class="inline-block text-[11px] uppercase tracking-widest font-extrabold text-abc-orange mb-1"
              >
                Next Cohort Now Enrolling
              </span>
              <h4 class="text-lg sm:text-xl font-black uppercase text-white">
                Ready to achieve similar results? Join the November Cohort!
              </h4>
              <p class="text-xs sm:text-sm text-white/70 mt-1">
                Starts 18th November 2026 • Only 12 Slots Available • Practical
                In-Person Coaching
              </p>
            </div>
            <MuiButton
              variant="white-fill"
              label="ENROLL IN NOVEMBER COHORT"
              class="!rounded-none px-8 py-4 font-bold text-[11px] tracking-widest !text-abc-orange !border-abc-orange bg-abc-orange/10 hover:bg-abc-orange hover:!text-white transition-all cursor-pointer flex-shrink-0"
              @click="augustCohortFormRef?.open()"
            />
          </div>
        </div>
      </div>
    </MuiPageContainer>

    <!-- PORTFOLIO GRID IMAGES -->
    <MuiPageContainer wide class="grid grid-cols-2 gap-2 max-w-7xl">
      <div
        class="h-[165px] md:h-[250px] lg:h-[316px] xl:h-[342px] overflow-hidden"
      >
        <NuxtImg
          src="/img/home/sept-cohort5.jpeg"
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
          src="/img/home/sept-cohort6.jpeg"
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
          src="/img/home/sept-cohort7.jpeg"
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
        small: '/img/home/sept-cohort8.jpeg',
        large: '/img/home/sept-cohort8.jpeg',
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
    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
    >
      <NuxtLink
        to="/case-studies#whatsapp-wall"
        class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-abc-orange hover:text-white transition-colors self-start md:self-auto group"
      >
        <span>View More & All Testimonials</span>
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </NuxtLink>
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
          <img src="/img/logos/client-38.png" class="h-12 w-auto" />
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
          <img src="/img/logos/client-11.png" class="h-12 w-auto" />
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
          <img src="/img/logos/client-40.png" class="h-12 w-auto" />
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
          <img src="/img/logos/client-27.png" class="h-12 w-auto" />
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
          v-for="n in 42"
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
          v-for="n in 42"
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
        @submit.prevent="submitForm"
        class="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/20 rounded-none overflow-hidden shadow-2xl"
      >
        <!-- Web3Forms Configuration -->
        <input
          type="hidden"
          name="access_key"
          value="1b3f2db3-70e6-4917-b8dc-affe334cdaf1"
        />
        <input
          type="hidden"
          name="subject"
          value="New Quick Request for Information - ABC Sales Consulting"
        />
        <input type="hidden" name="from_name" value="Website Inquiry" />

        <!-- Honeypot (Invisible to humans) -->
        <input
          type="checkbox"
          name="botcheck"
          class="hidden"
          style="display: none"
        />

        <!-- Full Name -->
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400 focus:bg-gray-50 transition-colors"
        />

        <!-- Business Email -->
        <input
          type="email"
          name="email"
          required
          placeholder="Business Email"
          class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400 focus:bg-gray-50 transition-colors"
        />

        <!-- Custom Checkbox/Anti-Bot UI -->
        <div
          class="bg-white flex items-center px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200"
        >
          <label
            class="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-widest font-bold cursor-pointer select-none"
          >
            <input type="checkbox" required class="w-4 h-4 accent-abc-green" />
            I'm not a robot
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="status === 'Sending...'"
          class="bg-abc-green hover:bg-abc-green/90 text-abc-navy font-black uppercase transition-all py-5 px-8 cursor-pointer tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ status || "Request a Call" }}
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
            Plot 18, Mukulu Curve<br />
            Off Martyrs Way,<br />
            Ntinda
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
            href="https://www.google.com/maps/place/0%C2%B020'51.9%22N+32%C2%B037'03.2%22E/@0.3476621,32.6149775,17.65z/data=!4m4!3m3!8m2!3d0.3477551!4d32.6175576?hl=en&entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            variant="white-stroke"
            class="px-6 !text-[10px]"
          />
        </div>
      </div>
    </MuiPageContainer>

    <MuiPageContainer
      class="py-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-[10px] tracking-[0.2em] uppercase opacity-60"
    >
      <!-- 1. Copyright -->
      <p class="text-center md:text-left">
        &copy; {{ new Date().getFullYear() }} ABC Sales Consulting. All Rights
        Reserved.
      </p>

      <!-- 2. Developer/Designer Credits -->
      <p class="text-center my-2 md:my-0">
        Designed by
        <span class="font-bold text-abc-green">Ivory Media House</span> |
        <a
          href="tel:+256709203470"
          class="hover:text-abc-green transition-colors"
          >0709203470</a
        >
        /
        <a
          href="tel:+256752024280"
          class="hover:text-abc-green transition-colors"
          >0752024280</a
        >
      </p>

      <!-- 3. Policy Links -->
      <div class="flex gap-8">
        <NuxtLink to="/privacy" class="hover:text-abc-green transition-colors"
          >Privacy Policy</NuxtLink
        >
        <NuxtLink to="/terms" class="hover:text-abc-green transition-colors"
          >Terms of Service</NuxtLink
        >
      </div>
    </MuiPageContainer>
  </footer>

  <!-- Discovery and August Cohort Form Modals -->
  <DiscoveryForm ref="discoveryFormRef" />
  <AugustCohortForm ref="augustCohortFormRef" />
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
import AugustCohortForm from "~/components/AugustCohortForm.vue";
import BackToTop from "~/components/BackToTop.vue";

const isMobileMenuOpen = ref(false);
const activeSubMenu = ref(null);
const discoveryFormRef = ref(null);
const augustCohortFormRef = ref(null);

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
      { name: "Career Launch Lab", to: "/launch-lab" },
      { name: "Sales Ladder", to: "/sales-ladder" },
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

// EXPANDED SUPPORT TEAM
const supportTeam = [
  {
    name: "Shaka Amos",
    role: "Sales Executive",
    roleBadgeClass: "text-abc-green bg-abc-green/10 border border-abc-green/20",
    bio: "I'm a Sales Executive at ABC Sales Consulting, where I connect Kampala businesses with ABC's sales training and consulting services. My background is in hospitality and insurance sales, and in insurance. I'm also studying Cyber Security and Networking at Victoria University.",
    image: "/img/support-team/shaka-amos.png",
    linkedin:
      "https://www.linkedin.com/search/results/all/?keywords=Shaka%20Amos%20ABC%20Sales%20Consulting",
  },
  {
    name: "Sharifah Shinarz Nassiwa",
    role: "Sales Coordinator",
    roleBadgeClass:
      "text-abc-orange bg-abc-orange/10 border border-abc-orange/20",
    bio: "Sharifah is a results-driven professional with experience in sales, customer service, and administration. At ABC Sales Consulting, she focuses on building business relationships, effective follow-ups, and connecting businesses with solutions that drive sales growth and success.",
    image: "/img/support-team/sharifah_shinarz_nassiwa.png",
    linkedin:
      "https://www.linkedin.com/search/results/all/?keywords=Sharifah%20Shinarz%20Nassiwa%20ABC%20Sales",
  },
  {
    name: "Nicole Mbabazi",
    role: "Social Media & Content Manager",
    roleBadgeClass: "text-abc-green bg-abc-green/10 border border-abc-green/20",
    bio: "Nicole Mbabazi is a Social Media and Content Manager at ABC Sales Consulting, where she drives brand visibility through content creation, social media management, and audience engagement. She also supports business growth through prospecting, client outreach, and lead generation. Her work focuses on communicating ABC’s expertise in sales training and helping more businesses discover practical ways to improve their sales performance.",
    image: "/img/support-team/nicole-mbabazi.png",
    linkedin:
      "https://www.linkedin.com/search/results/all/?keywords=Nicole%20Mbabazi%20ABC%20Sales%20Consulting",
  },
  {
    name: "Catherine Ninsiima",
    role: "Assistant Sales Administrator",
    roleBadgeClass: "text-abc-green bg-abc-green/10 border border-abc-green/20",
    bio: "Catherine Ninsiima is an Assistant Sales Administrator at ABC Sales Consulting, supporting both administrative operations and sales coordination. She facilitates client communication, coordinates sales activities, manages schedules and follow-ups, and supports the team in maintaining strong client relationships and driving business growth.",
    image: "/img/support-team/catherine-ninsiima.png",
    linkedin: "https://www.linkedin.com/in/catherine-ninsiima-60103b19b",
  },
];

// UPDATED GRADUATE & CLIENT TESTIMONIES
const graduateTestimonies = [
  {
    name: "Maria Goretti Namuddu",
    initials: "MN",
    role: "Head Of Business, Baifam Group",
    quote: `“What stood out to me was how well business owners understood their products and how effectively they could explain their value. The participants also challenged my perspective on certain services that I would typically consider a luxury, helping me see them differently.

One of the most powerful things I witnessed was the growth in confidence and communication. I had watched one of the participants present at BNI two months earlier, and seeing that same person present at graduation, I could clearly see the difference. The improvement in their confidence and ability to communicate was remarkable.

It was powerful to witness how much someone can grow when given the right training and opportunity.”`,
    badge: "Guest Leader & Evaluator",
    status: "Verified Review",
    accentGradient: "from-abc-orange to-abc-green",
  },
  {
    name: "Laeticia Kay Kalema",
    initials: "LK",
    role: "August Cohort Graduate, Packaging Hub",
    quote: `“The ABC Sales Cohort was a great learning experience. What stood out to me most was how each session focused on honing and sharpening our sales skills. Every session was an opportunity to learn, practise, and improve. The experience helped me appreciate the importance of continuously developing my sales skills and becoming better at what I do.”`,
    badge: "Verified Graduate",
    status: "Cohort Alumni",
    accentGradient: "from-abc-green to-abc-orange",
  },
  {
    name: "Ahmed Nkono",
    initials: "AN",
    role: "CEO, Vita Plate • Tanzania",
    quote: `“One thing that stood out to me was the eagerness of the participants to push their products and services. I also noticed the difference between how a business owner sells and how an employee sells.

Business owners need to understand how to sell because they are often the best people to communicate what their products or services do, how they work, and the value they offer. When business owners can effectively communicate that value, they are better positioned to help customers understand why they should buy.

The experience reinforced the importance of sales skills, not just for sales teams, but for business owners themselves.”`,
    badge: "Regional Business Leader",
    status: "Executive Perspective",
    accentGradient: "from-abc-orange via-white to-abc-green",
  },
  {
    name: "Ritah Gashishiri",
    initials: "RG",
    role: "CEO, Santa Viva Travel Agency",
    quote: `“Before the training, our company mainly relied on walk-in clients. Through the ABC Sales Cohort, I have learnt the importance of prospecting instead of simply waiting for customers to come to us.

I have also learnt how to build rapport and establish meaningful relationships with customers. These skills are important because sales go beyond making a single transaction. They help us build lasting relationships that encourage customers to return and do business with us again.

The training has changed how I approach sales and helped me understand the importance of being proactive in finding and retaining customers.”`,
    badge: "Business Owner & Graduate",
    status: "Verified Review",
    accentGradient: "from-abc-green via-white to-abc-orange",
  },
];

const status = ref("");

const submitForm = async (e) => {
  status.value = "Sending...";
  const formData = new FormData(e.target);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      status.value = "Success!";
      e.target.reset();

      // Optional: Clear success message after 5 seconds
      setTimeout(() => {
        status.value = "";
      }, 5000);
    } else {
      status.value = "Error. Try again.";
    }
  } catch (error) {
    status.value = "Network error.";
  }
};
</script>
