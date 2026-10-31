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
            <span class="text-abc-navy">Measurable Success.</span>
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
              variant="white-stroke"
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

  <!-- COHORT GRADUATION HIGHLIGHT (CASE STUDIES ADAPTATION) -->
  <div class="relative py-12 md:py-16 lg:py-20 bg-abc-navy overflow-hidden">
    <!-- Signature Ambient Glows (Blue & Accent Flares) -->
    <div
      class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none"
    />
    <div
      class="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-abc-green/10 rounded-full blur-[120px] pointer-events-none"
    />

    <!-- COHORT GRADUATION HIGHLIGHT -->

    <MuiPageContainer
      class="max-w-7xl mx-auto my-12 md:my-16 lg:my-20 bg-white/20 backdrop-blur-[10px]"
    >
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

          <!-- Graduate Testimonials Section -->

          <div
            id="graduate-testimonies"
            class="border-t border-white/10 pt-10 scroll-mt-24"
          >
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
                  What Our Graduates and Clients Have to Say About Us
                </h4>
              </div>

              <NuxtLink
                to="/case-studies#whatsapp-wall"
                class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-abc-orange hover:text-white transition-colors self-start md:self-auto group"
              >
                <span>View More & WhatsApp Testimonials</span>

                <span class="group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </NuxtLink>
            </div>

            <!-- 1. FEATURED PORTRAIT VIDEO SPOTLIGHT (VIDEO 1) -->

            <div
              class="bg-white/5 border border-white/15 rounded-2xl p-6 lg:p-8 shadow-2xl mb-8 relative overflow-hidden group hover:border-abc-orange/50 transition-all duration-300"
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
                  Trainee Review
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
                      poster="/img/video-thumbs/cohort-testimony-2.png"
                      class="w-full h-full object-cover object-top bg-black"
                    >
                      <source
                        src="/img/testimonies/cohort/testimony-2.mp4"
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
                    Beyond Features: Commit to Developing Your Sales Teams'
                    Value and Skills
                  </h3>

                  <p class="text-xs sm:text-sm text-white/85 leading-relaxed">
                    This is what happens when you commit to developing your team
                    and giving them the right tools to sell.
                  </p>

                  <p class="text-xs sm:text-sm text-white/85 leading-relaxed">
                    We’ve been training the RukaPay team for seven months, and
                    this is what their CEO has to say about the experience! This
                    could be you. This could be your business. Imagine what
                    seven months of the right sales training could do for your
                    team and your revenue. 🚀
                  </p>

                  <div
                    class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60"
                  >
                    <span>🎥 Verified Alumni Review</span>

                    <span
                      class="text-abc-orange font-semibold uppercase tracking-wider"
                      >ABC Sales Training</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. FEATURED PORTRAIT VIDEO SPOTLIGHT (VIDEO 2) -->

            <div
              class="bg-white/5 border border-white/15 rounded-2xl p-6 lg:p-8 shadow-2xl mb-10 relative overflow-hidden group hover:border-abc-green/50 transition-all duration-300"
            >
              <!-- Card Header -->

              <div
                class="flex items-center justify-between mb-6 border-b border-white/10 pb-4"
              >
                <div class="flex items-center gap-2.5">
                  <span
                    class="w-3 h-3 rounded-full bg-abc-green animate-ping"
                  ></span>

                  <span
                    class="text-xs sm:text-sm font-black uppercase tracking-widest text-abc-green"
                  >
                    Featured Video Spotlight
                  </span>
                </div>

                <span
                  class="text-xs bg-abc-orange/20 text-abc-orange border border-abc-orange/40 px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                >
                  Transformation Story
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
                      poster="/img/video-thumbs/cohort-testimony-3.png"
                      class="w-full h-full object-cover object-top bg-black"
                    >
                      <source
                        src="/img/testimonies/cohort/testimony-3.mp4"
                        type="video/mp4"
                      />

                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <!-- Right: Accompanying Quote Content (7 Columns) -->

                <div class="lg:col-span-7 space-y-4 text-left">
                  <span
                    class="text-abc-orange font-bold text-xs uppercase tracking-widest block"
                  >
                    Confidence & Closing Power
                  </span>

                  <h3
                    class="text-xl sm:text-2xl font-black uppercase text-white leading-tight"
                  >
                    From Freezing in Front of Clients to Communicating with
                    Confidence and Closing More Deals
                  </h3>

                  <p class="text-xs sm:text-sm text-white/85 leading-relaxed">
                    That’s the power of consistent sales training and practice.
                  </p>

                  <p class="text-xs sm:text-sm text-white/85 leading-relaxed">
                    At ABC, we work with salespeople to identify their gaps,
                    build their skills, and turn what they learn into results in
                    the field. This is what growth looks like! 🔥
                  </p>

                  <div
                    class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60"
                  >
                    <span>🎥 Verified Alumni Transformation</span>

                    <span
                      class="text-abc-green font-semibold uppercase tracking-wider"
                      >ABC Sales Training</span
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
      <a
        v-for="(video, index) in videos"
        :key="index"
        :href="video.url"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white group shadow-sm hover:shadow-xl transition-all overflow-hidden rounded-xl block cursor-pointer"
      >
        <div class="relative h-72">
          <img
            :src="video.thumb"
            :alt="video.title"
            class="w-full h-full object-cover object-top"
          />
          <div
            class="absolute inset-0 bg-black/20 flex items-center justify-center"
          >
            <div
              class="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-maroon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-maroon font-extrabold uppercase text-xl">
              {{ video.title }} 0{{ index + 1 }}
            </h3>
            <span
              class="text-maroon opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </div>
          <p class="text-gray-600 text-sm">
            {{ video.description }}
          </p>
        </div>
      </a>
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
        v-for="i in 16"
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
          @click="openForm"
          class="!rounded-full px-12 py-4 cursor-pointer"
        />
      </div>
    </MuiPageContainer>
  </div>

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
        action="https://api.web3forms.com/submit"
        method="POST"
        class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/20 rounded-none overflow-hidden shadow-2xl"
        id="newsletter-form"
      >
        <input
          type="hidden"
          name="access_key"
          value="1b3f2db3-70e6-4917-b8dc-affe334cdaf1"
        />
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Business Email"
          class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400"
        />
        <div
          class="bg-white flex items-center px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200"
        >
          <div
            class="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-widest font-bold"
          >
            <input
              type="checkbox"
              name="botcheck"
              class="w-4 h-4 accent-abc-green"
              required
            />
            I'm not a robot
          </div>
        </div>
        <button
          type="submit"
          class="bg-abc-green hover:bg-abc-green/90 text-abc-navy font-black uppercase transition-all py-5 px-8 cursor-pointer tracking-widest text-xs"
        >
          Request a Call
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
  <BackToTop />
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

useHead({ title: "Case Studies" });

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

const videos = [
  {
    title: "High-Performance Training Session",
    description:
      "A deep dive into the ABC framework implemented with top-tier corporate sales leads.",
    thumb: "/img/video-thumbs/thumb-1.png",
    url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1762526041/motorCenter5_rouraq.mp4",
  },
  {
    title: "Advanced Sales Techniques",
    description:
      "Learn the latest strategies to close deals and exceed targets.",
    thumb: "/img/video-thumbs/thumb-2.png",
    url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1760127950/VIDEO-2025-07-01-15-49-31_2_l8sjbr.mp4",
  },
  {
    title: "KARUKA AGENCIES",
    description:
      "Build lasting relationships with your clients for long-term success.",
    thumb: "/img/video-thumbs/thumb-3.png",
    url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1760127900/VIDEO-2025-07-01-15-49-30_2_ecixwe.mp4",
  },
  {
    title: "SUCCESS MOTORS",
    description:
      "Develop the skills to lead and inspire your sales team to achieve greatness.",
    thumb: "/img/video-thumbs/thumb-4.png",
    url: "https://res.cloudinary.com/dz1t6hhe7/video/upload/v1760126968/VIDEO-2025-08-05-10-07-59_rzqtaw.mp4",
  },
];
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
</script>

<style scoped>
.break-inside-avoid {
  break-inside: avoid;
}
</style>
