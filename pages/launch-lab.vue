<template>
  <div
    class="bg-maroon pt-4 pb-5 bg-cover bg-center bg-[url('/bg-images/bg-blue.png')]"
  >
    <!-- TOP NAVIGATION HEADER -->
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
            href="#register"
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

      <!-- Desktop Submenu Dropdown -->
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
                class="text-maroon px-8 py-4 uppercase font-bold text-base border-l first:border-l-0 border-gray-100 hover:bg-maroon hover:text-white transition-all cursor-pointer"
              >
                {{ sub.name }}
              </NuxtLink>
            </template>
          </MuiPageContainer>
        </div>
      </Transition>

      <!-- Mobile Menu Drawer -->
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
              label="Register Now"
              href="#register"
              variant="all-white"
              class="w-full justify-center !rounded-full"
              @click="isMobileMenuOpen = false"
            />
          </div>
        </div>
      </Transition>
    </MuiPageContainer>

    <!-- HERO SECTION -->
    <MuiPageContainer class="pt-12 pb-16 lg:pt-16 lg:pb-24 relative">
      <div class="grid lg:grid-cols-12 gap-10 items-center">
        <!-- Hero Left Column: Core Value Proposition -->
        <div class="lg:col-span-7 text-center lg:text-left text-white">
          <div class="inline-flex items-center gap-2 border border-abc-orange/60 bg-abc-orange/15 text-abc-orange px-5 py-1.5 rounded-full text-base font-extrabold uppercase tracking-[0.25em] mb-6">
            <span>🚀</span> Real Skills. Real Experience. A Brighter Future.
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            The Launch <span class="text-abc-orange">Lab</span>
          </h1>

          <p class="text-abc-green font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wider mb-6">
            Sell Your Skill. Build Your Confidence. Launch Your Future.
          </p>

          <p class="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            A practical sales and real-world experience programme for <strong>Year 13 graduates (Ages 18–20)</strong> preparing for university. Rather than treating holiday break as passive downtime, the Launch Lab turns it into an empowering launchpad into independence, communication, and business mastery.
          </p>

          <!-- Quick Metrics Banner -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-white/15 py-5 mb-8 max-w-xl mx-auto lg:mx-0 text-center">
            <div class="border-r border-white/10 last:border-r-0">
              <div class="text-abc-orange font-black text-lg md:text-xl">1st Oct 2026</div>
              <div class="text-[10px] uppercase tracking-wider text-white/60 mt-0.5">Start Date</div>
            </div>
            <div class="border-r border-white/10 last:border-r-0">
              <div class="text-abc-green font-black text-lg md:text-xl">6 Weeks</div>
              <div class="text-[10px] uppercase tracking-wider text-white/60 mt-0.5">Duration</div>
            </div>
            <div class="border-r border-white/10 last:border-r-0">
              <div class="text-abc-orange font-black text-lg md:text-xl">Ages 18–20</div>
              <div class="text-[10px] uppercase tracking-wider text-white/60 mt-0.5">Year 13 Grads</div>
            </div>
            <div>
              <div class="text-abc-green font-black text-lg md:text-xl">UGX 900k</div>
              <div class="text-[10px] uppercase tracking-wider text-white/60 mt-0.5">Per Child</div>
            </div>
          </div>

          <!-- Hero Action Buttons -->
          <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <MuiButton
              variant="white-fill"
              label="REGISTER FOR LAUNCH LAB"
              href="#register"
              class="!rounded-none px-8 py-4 font-black text-[11px] tracking-widest !text-abc-orange !border-abc-orange bg-abc-orange/10 hover:bg-abc-orange hover:!text-white transition-all cursor-pointer"
            />
            <MuiButton
              variant="white-stroke"
              label="EXPLORE CURRICULUM"
              href="#curriculum"
              class="!rounded-none px-8 py-4 font-bold text-[11px] tracking-widest hover:bg-white hover:text-abc-navy transition-all"
            />
          </div>
        </div>

        <!-- Hero Right Column: Feature Photo Showcase -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group bg-black/40">
            <img
              src="/img/launch-lab/hero-bg.png"
              alt="ABC Career Launch Lab - Young students stepping into their bright futures"
              class="w-full h-[320px] sm:h-[400px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-abc-navy/90 via-transparent to-black/30 pointer-events-none" />
            
            <!-- Floating Badge Card on Image -->
            <div class="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white">
              <div class="flex items-center gap-2 mb-1">
                <span class="w-2 h-2 rounded-full bg-abc-orange animate-ping"></span>
                <span class="text-[10px] uppercase tracking-widest font-extrabold text-abc-orange">
                  Pre-University Advantage
                </span>
              </div>
              <p class="text-base font-semibold leading-snug">
                Mukuru Curve in Ministers Village, Ntinda (next to Industrial Court)
              </p>
            </div>
          </div>

          <!-- Ambient Glows -->
          <div class="absolute -top-10 -right-10 w-48 h-48 bg-abc-orange/20 rounded-full blur-3xl pointer-events-none" />
          <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-abc-green/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </MuiPageContainer>
  </div>

  <!-- SECTION 1: THE CORE THESIS - EVERYTHING IS SELLABLE -->
  <section class="py-16 lg:py-24 bg-white border-b border-gray-100">
    <MuiPageContainer class="max-w-6xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="inline-block px-4 py-1.5 mb-3 text-base tracking-[0.25em] uppercase font-black text-abc-orange bg-abc-orange/10 rounded-full">
          The Core Philosophy
        </span>
        <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-abc-navy mb-4">
          Whatever You Become, <br class="hidden sm:block" />
          <span class="text-abc-orange">You'll Have to Sell It.</span>
        </h2>
        <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
          Students are not being trained simply to become salespeople. They are learning how to <strong>sell what they become</strong>. Before university, they master the one foundational skill that makes every other capability exponentially more valuable.
        </p>
      </div>

      <!-- Grid of Career Disciplines -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-abc-orange/40 hover:shadow-lg transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-abc-orange/10 flex items-center justify-center text-abc-orange text-xl font-black mb-4">
            🔬
          </div>
          <h3 class="font-black text-lg text-abc-navy uppercase mb-2">The Scientist</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Must sell breakthrough research and convince grant committees, institutions, and philanthropists to fund their discoveries.
          </p>
        </div>

        <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-abc-green/40 hover:shadow-lg transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-abc-green/10 flex items-center justify-center text-abc-green text-xl font-black mb-4">
            💻
          </div>
          <h3 class="font-black text-lg text-abc-navy uppercase mb-2">The Software Developer</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Must pitch apps, architectural solutions, and technical products to investors, corporate clients, and non-technical stakeholders.
          </p>
        </div>

        <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-abc-orange/40 hover:shadow-lg transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-abc-orange/10 flex items-center justify-center text-abc-orange text-xl font-black mb-4">
            🎨
          </div>
          <h3 class="font-black text-lg text-abc-navy uppercase mb-2">The Artist & Designer</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Must articulate creative value, tell compelling visual stories, and command competitive prices for their craftsmanship.
          </p>
        </div>

        <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-abc-green/40 hover:shadow-lg transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-abc-green/10 flex items-center justify-center text-abc-green text-xl font-black mb-4">
            🚀
          </div>
          <h3 class="font-black text-lg text-abc-navy uppercase mb-2">The Entrepreneur</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Must sell the vision to co-founders, sell equity to angel investors, and sell value propositions to early-adopter customers.
          </p>
        </div>

        <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-abc-orange/40 hover:shadow-lg transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-abc-orange/10 flex items-center justify-center text-abc-orange text-xl font-black mb-4">
            ⚖️
          </div>
          <h3 class="font-black text-lg text-abc-navy uppercase mb-2">The Lawyer & Advocate</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Must sell persuasive legal arguments to judges, structure win-win negotiations, and win client trust in competitive markets.
          </p>
        </div>

        <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-abc-green/40 hover:shadow-lg transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-abc-green/10 flex items-center justify-center text-abc-green text-xl font-black mb-4">
            🎓
          </div>
          <h3 class="font-black text-lg text-abc-navy uppercase mb-2">The University Student</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Must pitch themselves for competitive internships, command respect in group presentations, and network fearlessly with leaders.
          </p>
        </div>
      </div>

      <!-- Highlight Quotation Banner -->
      <div class="bg-gradient-to-r from-abc-navy via-abc-navy/95 to-abc-navy rounded-2xl p-8 md:p-10 text-white text-center shadow-xl border border-white/10">
        <span class="text-abc-orange font-extrabold uppercase tracking-[0.3em] text-base block mb-2">
          The Programme Proposition
        </span>
        <h3 class="text-2xl sm:text-3xl font-black uppercase tracking-tight max-w-3xl mx-auto mb-4">
          "The Launch Lab is not simply another sales cohort. It is a transition programme into the real world with sales as the foundational skill."
        </h3>
        <p class="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
          Participants leave with tangible proof of work: actual sales closed, an incubated project, a pitch deck delivered, and a powerful story they carry forward to university.
        </p>
      </div>
    </MuiPageContainer>
  </section>

  <!-- SECTION 2: THE 5 CORE THEMES (ROADMAP) -->
  <section class="py-16 lg:py-24 bg-gray-50/70 border-b border-gray-100" id="curriculum">
    <MuiPageContainer class="max-w-6xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="inline-block px-4 py-1.5 mb-3 text-base tracking-[0.25em] uppercase font-black text-abc-green bg-abc-green/10 rounded-full">
          The Journey
        </span>
        <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-abc-navy mb-4">
          The Five Themes
        </h2>
        <p class="text-gray-600 text-base leading-relaxed">
          A step-by-step transformation designed to take young adults from classroom theory into unstoppable market competence.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <!-- Theme 1 -->
        <div class="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-abc-orange transition-colors">
          <div class="text-abc-orange font-black text-2xl mb-2">01</div>
          <h3 class="font-extrabold text-base uppercase text-abc-navy mb-2">DISCOVER</h3>
          <p class="text-base text-gray-600 leading-relaxed">
            Understand yourself, understand human psychology, and spot real opportunities in the market.
          </p>
        </div>

        <!-- Theme 2 -->
        <div class="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-abc-green transition-colors">
          <div class="text-abc-green font-black text-2xl mb-2">02</div>
          <h3 class="font-extrabold text-base uppercase text-abc-navy mb-2">BUILD</h3>
          <p class="text-base text-gray-600 leading-relaxed">
            Build persuasive communication, executive confidence, and core sales methodologies.
          </p>
        </div>

        <!-- Theme 3 -->
        <div class="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-abc-orange transition-colors">
          <div class="text-abc-orange font-black text-2xl mb-2">03</div>
          <h3 class="font-extrabold text-base uppercase text-abc-navy mb-2">SELL</h3>
          <p class="text-base text-gray-600 leading-relaxed">
            Take these skills directly into the marketplace. Prospect, pitch, handle rejection, and close real transactions.
          </p>
        </div>

        <!-- Theme 4 -->
        <div class="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-abc-green transition-colors">
          <div class="text-abc-green font-black text-2xl mb-2">04</div>
          <h3 class="font-extrabold text-base uppercase text-abc-navy mb-2">CREATE</h3>
          <p class="text-base text-gray-600 leading-relaxed">
            Form collaborative teams and build an original venture, product, event, or social enterprise.
          </p>
        </div>

        <!-- Theme 5 -->
        <div class="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-abc-orange transition-colors">
          <div class="text-abc-orange font-black text-2xl mb-2">05</div>
          <h3 class="font-extrabold text-base uppercase text-abc-navy mb-2">LAUNCH</h3>
          <p class="text-base text-gray-600 leading-relaxed">
            Pitch the venture live on Launch Day to a panel of entrepreneurs, executives, and active investors.
          </p>
        </div>
      </div>
    </MuiPageContainer>
  </section>

  <!-- SECTION 3: PROGRAMME STRUCTURE (THE 4 IN-DEPTH PILLARS) -->
  <section class="py-16 lg:py-24 bg-white">
    <MuiPageContainer class="max-w-6xl mx-auto space-y-20">
      
      <!-- PILLAR 1: THE FUNDAMENTALS OF SALES -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-2xl font-black uppercase tracking-[0.25em] text-abc-orange block mb-2">
            Pillar 01 • Core Capabilities
          </span>
          <h3 class="text-2xl sm:text-3xl font-black uppercase text-abc-navy mb-4">
            The Fundamentals of Sales
          </h3>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            We break down the science and psychology of human decisions. Students gain a rigorous toolkit that strips away awkwardness and replaces it with structured conversation frameworks.
          </p>
          <div class="grid grid-cols-2 gap-3 text-base sm:text-sm font-semibold text-gray-700">
            <div class="flex items-center gap-2">
              <span class="text-abc-green font-black">✓</span> Understanding People
            </div>
            <div class="flex items-center gap-2">
              <span class="text-abc-green font-black">✓</span> Active Listening & Needs
            </div>
            <div class="flex items-center gap-2">
              <span class="text-abc-green font-black">✓</span> Structured Prospecting
            </div>
            <div class="flex items-center gap-2">
              <span class="text-abc-green font-black">✓</span> Presenting Compelling Value
            </div>
            <div class="flex items-center gap-2">
              <span class="text-abc-green font-black">✓</span> Overcoming Objections
            </div>
            <div class="flex items-center gap-2">
              <span class="text-abc-green font-black">✓</span> Confident Negotiation
            </div>
            <div class="flex items-center gap-2">
              <span class="text-abc-green font-black">✓</span> Closing with Authority
            </div>
            <div class="flex items-center gap-2">
              <span class="text-abc-green font-black">✓</span> High-Touch Follow-Up
            </div>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 sm:p-8">
          <div class="border-l-4 border-abc-orange pl-4 mb-4">
            <h4 class="font-extrabold uppercase text-abc-navy text-base">Key Mastery Outcome</h4>
            <p class="text-base text-gray-500 mt-1">From anxiety to authentic persuasion</p>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed italic">
            "Selling isn't pushing people into things they don't need; it is understanding what people care about, diagnosing their real friction, and showing them how your solution solves it with clarity."
          </p>
        </div>
      </div>

      <!-- PILLAR 2: SELL SOMETHING REAL -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 rounded-2xl overflow-hidden border border-gray-200 shadow-xl group">
          <img
            src="/img/launch-lab/group-team.png"
            alt="Students selling real products at the marketplace booth"
            class="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="order-1 lg:order-2">
          <span class="text-2xl font-black uppercase tracking-[0.25em] text-abc-green block mb-2">
            Pillar 02 • Experiential Learning
          </span>
          <h3 class="text-2xl sm:text-3xl font-black uppercase text-abc-navy mb-4">
            Sell Something Real
          </h3>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            This is what sets the cohort apart from standard academic workshops. Students do not just sit in an air-conditioned room taking notes—<strong>they actually have to sell</strong>.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            Participants choose something they genuinely care about, or partner with established partner companies across tech, fashion, food, art, events, fitness, or digital services:
          </p>
          <div class="bg-abc-orange/5 border border-abc-orange/20 rounded-xl p-4 text-base text-gray-700 space-y-1.5 font-medium">
            <p>🎯 <strong>Real Targets:</strong> They receive practical revenue targets.</p>
            <p>📞 <strong>Real Outreach:</strong> They prospect, pick up the phone, and approach real people.</p>
            <p>🛡️ <strong>Real Rejection:</strong> They experience real objections and learn not to take 'no' personally.</p>
            <p>🏆 <strong>Real Closings:</strong> They celebrate real cash transactions and say with confidence: <em>"I have actually sold something."</em></p>
          </div>
        </div>
      </div>

      <!-- PILLAR 3: SELL YOURSELF -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-2xl font-black uppercase tracking-[0.25em] text-abc-orange block mb-2">
            Pillar 03 • Personal Branding & Presence
          </span>
          <h3 class="text-2xl sm:text-3xl font-black uppercase text-abc-navy mb-4">
            Sell Yourself
          </h3>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Who are you becoming before stepping onto university campus? We equip students with executive presence, networking fluency, and digital authority.
          </p>
          <div class="space-y-3">
            <div class="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
              <h5 class="font-bold text-base uppercase text-abc-navy">The 30-Second Pitch</h5>
              <p class="text-base text-gray-600 mt-0.5">Articulating who you are and what value you bring without stumbling or hesitating.</p>
            </div>
            <div class="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
              <h5 class="font-bold text-base uppercase text-abc-navy">Fearless Networking</h5>
              <p class="text-base text-gray-600 mt-0.5">Walking into a room of strangers or senior executives and creating lasting professional rapport without shrinking.</p>
            </div>
            <div class="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
              <h5 class="font-bold text-base uppercase text-abc-navy">Pre-University LinkedIn & Digital Identity</h5>
              <p class="text-base text-gray-600 mt-0.5">Optimizing profiles to attract internships, mentors, and global academic opportunities.</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl overflow-hidden border border-gray-200 shadow-xl group">
          <img
            src="/img/launch-lab/group-discussion.png"
            alt="Interactive student discussions and pitch formulation"
            class="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <!-- PILLAR 4: SELL YOUR IDEA (LAUNCH DAY) -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 rounded-2xl overflow-hidden border border-gray-200 shadow-xl group">
          <img
            src="/img/launch-lab/group-presentation.png"
            alt="Students pitching their venture idea to business executives on Launch Day"
            class="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="order-1 lg:order-2">
          <span class="text-base font-black uppercase tracking-[0.25em] text-abc-green block mb-2">
            Pillar 04 • Venture Creation & Capstone
          </span>
          <h3 class="text-2xl sm:text-3xl font-black uppercase text-abc-navy mb-4">
            Sell Your Idea & Launch Day
          </h3>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Students form multidisciplinary teams, conceive an innovative concept, build a pitch deck, and validate its market feasibility:
          </p>
          <div class="grid grid-cols-2 gap-2 text-base text-gray-700 font-medium mb-6">
            <span class="p-2 bg-gray-50 rounded border border-gray-100">💡 Tech Startups</span>
            <span class="p-2 bg-gray-50 rounded border border-gray-100">🌍 Social Enterprises</span>
            <span class="p-2 bg-gray-50 rounded border border-gray-100">🎨 Creative Brands</span>
            <span class="p-2 bg-gray-50 rounded border border-gray-100">🌱 Eco Solutions</span>
          </div>
          <div class="bg-abc-green/10 border border-abc-green/30 rounded-xl p-4 text-base text-abc-navy leading-relaxed">
            <strong class="text-abc-navy font-bold uppercase block mb-1">The Launch Day Pitch:</strong>
            The capstone event challenges teams to pitch directly to a guest panel of prominent business owners, entrepreneurs, and corporate investors—giving them real-world validation under bright lights!
          </div>
        </div>
      </div>

    </MuiPageContainer>
  </section>

  <!-- SECTION 4: DUAL PERSPECTIVES (STUDENTS & PARENTS) -->
  <section class="py-16 lg:py-24 bg-abc-navy text-white relative overflow-hidden">
    <MuiPageContainer class="max-w-6xl mx-auto relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="inline-block px-4 py-1.5 mb-3 text-base tracking-[0.25em] uppercase font-black text-abc-orange bg-abc-orange/10 border border-abc-orange/30 rounded-full">
          Why It Matters
        </span>
        <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
          Two Perspectives. One Transformational Goal.
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Student Facing Card -->
        <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-abc-orange/40 transition-colors">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">🎒</span>
            <div>
              <h3 class="text-xl font-black uppercase text-abc-orange">For Students</h3>
              <p class="text-base text-white/60">Ages 18 – 20 • Year 13 Graduates</p>
            </div>
          </div>
          <p class="text-sm sm:text-base text-white/85 leading-relaxed mb-6 italic">
            "You just finished high school. Before university starts, don't just wait around. Build something. Sell something. Meet inspiring peers and mentors. Discover what you are truly capable of when the training wheels come off."
          </p>
          <ul class="space-y-2 text-base sm:text-sm text-white/75">
            <li class="flex items-center gap-2">
              <span class="text-abc-orange font-bold">✓</span> Make new ambitious friends & mentors
            </li>
            <li class="flex items-center gap-2">
              <span class="text-abc-orange font-bold">✓</span> Real-world experience for your CV & personal bio
            </li>
            <li class="flex items-center gap-2">
              <span class="text-abc-orange font-bold">✓</span> The swagger and confidence to stand out on campus
            </li>
          </ul>
        </div>

        <!-- Parent Facing Card -->
        <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-abc-green/40 transition-colors">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">👨‍👩‍👧</span>
            <div>
              <h3 class="text-xl font-black uppercase text-abc-green">For Parents</h3>
              <p class="text-base text-white/60">Investing in Real-World Readiness</p>
            </div>
          </div>
          <p class="text-sm sm:text-base text-white/85 leading-relaxed mb-6 italic">
            "Your child has spent years excelling academically. The Launch Lab gives them practical exposure to communication, negotiation, resilience, and professional acumen before they step into the unstructured environment of university."
          </p>
          <ul class="space-y-2 text-base sm:text-sm text-white/75">
            <li class="flex items-center gap-2">
              <span class="text-abc-green font-bold">✓</span> Buying preparedness, maturity, and self-reliance
            </li>
            <li class="flex items-center gap-2">
              <span class="text-abc-green font-bold">✓</span> Constructive, high-impact mentorship during holidays
            </li>
            <li class="flex items-center gap-2">
              <span class="text-abc-green font-bold">✓</span> Distinct competitive advantage in higher education & careers
            </li>
          </ul>
        </div>
      </div>
    </MuiPageContainer>
  </section>

  <!-- SECTION 5: "YOU'LL LEAVE WITH" (OUTCOMES FROM FLYER) -->
  <section class="py-16 lg:py-24 bg-white border-b border-gray-100">
    <MuiPageContainer class="max-w-6xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="inline-block px-4 py-1.5 mb-3 text-base tracking-[0.25em] uppercase font-black text-abc-green bg-abc-green/10 rounded-full">
          Key Takeaways
        </span>
        <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-abc-navy mb-4">
          You'll Leave With
        </h2>
        <p class="text-gray-600 text-base leading-relaxed">
          Four foundational assets every graduate walks away with after 6 intensive weeks:
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200/70 text-center hover:border-abc-orange transition-colors">
          <div class="w-12 h-12 rounded-full bg-abc-orange/15 text-abc-orange flex items-center justify-center text-2xl mx-auto mb-4">
            💼
          </div>
          <h4 class="font-extrabold text-base uppercase text-abc-navy mb-2">Practical Sales Experience</h4>
          <p class="text-base text-gray-600 leading-relaxed">
            Real field exposure, real cold calls, structured pipeline management, and real completed deals.
          </p>
        </div>

        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200/70 text-center hover:border-abc-green transition-colors">
          <div class="w-12 h-12 rounded-full bg-abc-green/15 text-abc-green flex items-center justify-center text-2xl mx-auto mb-4">
            🗣️
          </div>
          <h4 class="font-extrabold text-base uppercase text-abc-navy mb-2">Stronger Communication</h4>
          <p class="text-base text-gray-600 leading-relaxed">
            Unshakable poise, persuasive presentation skills, and the confidence to hold conversations with any leader.
          </p>
        </div>

        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200/70 text-center hover:border-abc-orange transition-colors">
          <div class="w-12 h-12 rounded-full bg-abc-orange/15 text-abc-orange flex items-center justify-center text-2xl mx-auto mb-4">
            🌍
          </div>
          <h4 class="font-extrabold text-base uppercase text-abc-navy mb-2">Opportunity Mindset</h4>
          <p class="text-base text-gray-600 leading-relaxed">
            The ability to spot gaps, create value, and seize commercial or career opportunities anywhere in the world.
          </p>
        </div>

        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200/70 text-center hover:border-abc-green transition-colors">
          <div class="w-12 h-12 rounded-full bg-abc-green/15 text-abc-green flex items-center justify-center text-2xl mx-auto mb-4">
            ⭐
          </div>
          <h4 class="font-extrabold text-base uppercase text-abc-navy mb-2">Pre-Uni Advantage</h4>
          <p class="text-base text-gray-600 leading-relaxed">
            An outstanding resume, a verified project, professional references, and a clear head start over peers.
          </p>
        </div>
      </div>
    </MuiPageContainer>
  </section>

  <!-- SECTION 6: FLYER & ENROLLMENT ACTION (REGISTER NOW) -->
  <section class="py-16 lg:py-24 bg-gray-50" id="register">
    <MuiPageContainer class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Official Flyer Preview -->
        <div class="lg:col-span-5 text-center">
          <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white inline-block max-w-sm">
            <img
              src="/img/flyers/launch-lab.jpeg"
              alt="Official ABC Career Launch Lab Flyer"
              class="w-full h-auto object-cover"
            />
          </div>
          <div class="mt-4 flex justify-center gap-4">
            <a
              href="/img/flyers/launch-lab.jpeg"
              download="ABC-Launch-Lab-Flyer.jpeg"
              class="inline-flex items-center gap-2 text-base font-bold uppercase text-abc-orange hover:underline"
            >
              <span>📥</span> Download Flyer
            </a>
            <a
              href="https://wa.me/256791178657"
              target="_blank"
              class="inline-flex items-center gap-2 text-base font-bold uppercase text-abc-green hover:underline"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>

        <!-- Right: Registration Form & Direct Contact -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200/80">
          <div class="mb-6">
            <span class="text-base uppercase tracking-widest font-extrabold text-abc-orange block mb-1">
              Enrollment Form • Cohort October 2026
            </span>
            <h3 class="text-2xl sm:text-3xl font-black uppercase text-abc-navy">
              Register for The Launch Lab
            </h3>
            <p class="text-base sm:text-sm text-gray-600 mt-1">
              Fee: <strong>UGX 900,000 per child</strong> • Starts <strong>1st October 2026</strong> (6 Weeks) • Mukuru Curve, Ntinda.
            </p>
          </div>

          <form @submit.prevent="submitLaunchLabForm" class="space-y-4">
            <input
              type="hidden"
              name="access_key"
              value="1b3f2db3-70e6-4917-b8dc-affe334cdaf1"
            />
            <input
              type="hidden"
              name="subject"
              value="New Registration: ABC Career Launch Lab"
            />
            <input
              type="hidden"
              name="from_name"
              value="ABC Launch Lab Registration"
            />

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-base font-bold uppercase text-gray-700 mb-1">Student Full Name *</label>
                <input
                  v-model="formData.studentName"
                  type="text"
                  required
                  placeholder="e.g. Samuel Kigozi"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-abc-navy focus:outline-none focus:border-abc-orange"
                />
              </div>
              <div>
                <label class="block text-base font-bold uppercase text-gray-700 mb-1">Student Age (18–20) *</label>
                <input
                  v-model="formData.studentAge"
                  type="number"
                  min="17"
                  max="23"
                  required
                  placeholder="e.g. 19"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-abc-navy focus:outline-none focus:border-abc-orange"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-base font-bold uppercase text-gray-700 mb-1">Parent / Guardian Name *</label>
                <input
                  v-model="formData.parentName"
                  type="text"
                  required
                  placeholder="e.g. Dr. Grace Kigozi"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-abc-navy focus:outline-none focus:border-abc-orange"
                />
              </div>
              <div>
                <label class="block text-base font-bold uppercase text-gray-700 mb-1">Primary Phone Number *</label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  required
                  placeholder="e.g. 0791 178 657"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-abc-navy focus:outline-none focus:border-abc-orange"
                />
              </div>
            </div>

            <div>
              <label class="block text-base font-bold uppercase text-gray-700 mb-1">Email Address *</label>
              <input
                v-model="formData.email"
                type="email"
                required
                placeholder="e.g. parent@example.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-abc-navy focus:outline-none focus:border-abc-orange"
              />
            </div>

            <div>
              <label class="block text-base font-bold uppercase text-gray-700 mb-1">High School Completed *</label>
              <input
                v-model="formData.school"
                type="text"
                required
                placeholder="e.g. Gayaza High / Kings College Budo"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-abc-navy focus:outline-none focus:border-abc-orange"
              />
            </div>

            <div>
              <label class="block text-base font-bold uppercase text-gray-700 mb-1">Intended University Course / Area of Interest</label>
              <input
                v-model="formData.interest"
                type="text"
                placeholder="e.g. Computer Science, Law, Business, Medicine, Art"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-abc-navy focus:outline-none focus:border-abc-orange"
              />
            </div>

            <button
              type="submit"
              :disabled="status === 'Submitting...'"
              class="w-full bg-abc-orange hover:bg-abc-orange/90 text-white font-black uppercase text-base tracking-widest py-4 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
            >
              {{ status || 'Submit Registration Application' }}
            </button>
          </form>

          <!-- Direct Line Help Box -->
          <div class="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-base text-gray-500 gap-2">
            <div>
              Prefer to register over the phone? Call <strong class="text-abc-navy">0791 178 657</strong>
            </div>
            <div>
              Email: <a href="mailto:admin@abcsalesconsulting.net" class="text-abc-orange font-bold underline">admin@abcsalesconsulting.net</a>
            </div>
          </div>
        </div>

      </div>
    </MuiPageContainer>
  </section>

  <!-- STANDARD ABC SALES FOOTER -->
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

      <form
        @submit.prevent="submitFooterForm"
        class="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/20 rounded-none overflow-hidden shadow-2xl"
      >
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

        <input
          type="checkbox"
          name="botcheck"
          class="hidden"
          style="display: none"
        />

        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400 focus:bg-gray-50 transition-colors"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Business Email"
          class="bg-white text-abc-navy px-6 py-5 outline-none border-b md:border-b-0 md:border-r border-gray-200 placeholder:text-gray-400 focus:bg-gray-50 transition-colors"
        />

        <div class="bg-white flex items-center px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200">
          <label class="flex items-center gap-3 text-gray-400 text-base uppercase tracking-widest font-bold cursor-pointer select-none">
            <input type="checkbox" required class="w-4 h-4 accent-abc-green" />
            I'm not a robot
          </label>
        </div>

        <button
          type="submit"
          :disabled="footerStatus === 'Sending...'"
          class="bg-abc-green hover:bg-abc-green/90 text-abc-navy font-black uppercase transition-all py-5 px-8 cursor-pointer tracking-widest text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ footerStatus || "Request a Call" }}
        </button>
      </form>

      <div class="mt-12 flex flex-col items-center">
        <p class="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6 font-bold">
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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h4 class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4">
            Our Office
          </h4>
          <p class="text-sm text-white/70 leading-relaxed uppercase">
            Plot 18, Mukulu Curve<br />
            Off Martyrs Way,<br />
            Ntinda
          </p>
        </div>

        <div>
          <h4 class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4">
            Contact Us
          </h4>
          <p class="text-sm text-white/70 leading-relaxed">
            <span class="block mb-1">admin@abcsalesconsulting.net</span>
            <span>+256 791 178 657 / +256 748 019 936</span>
          </p>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h4 class="text-abc-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4">
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
      <p class="text-center md:text-left">
        &copy; {{ new Date().getFullYear() }} ABC Sales Consulting. All Rights Reserved.
      </p>

      <p class="text-center my-2 md:my-0">
        Designed by
        <span class="font-bold text-abc-green">Ivory Media House</span> |
        <a href="tel:+256709203470" class="hover:text-abc-green transition-colors">0709203470</a> /
        <a href="tel:+256752024280" class="hover:text-abc-green transition-colors">0752024280</a>
      </p>

      <div class="flex gap-8">
        <NuxtLink to="/privacy" class="hover:text-abc-green transition-colors">Privacy Policy</NuxtLink>
        <NuxtLink to="/terms" class="hover:text-abc-green transition-colors">Terms of Service</NuxtLink>
      </div>
    </MuiPageContainer>
  </footer>

  <BackToTop />
</template>

<script setup>
import { ref, reactive } from "vue";
import { MuiButton, MuiPageContainer } from "@northgreenug/musizi-ui-kit";
import BackToTop from "~/components/BackToTop.vue";

useHead({
  title: "The Launch Lab | ABC Sales Consulting",
  meta: [
    {
      name: "description",
      content:
        "The ABC Career Launch Lab is a practical 6-week sales & real-world transition programme for Year 13 graduates (ages 18-20) before university. Sell your skill, build confidence, and launch your future.",
    },
  ],
});

useServerSeoMeta({
  title: "The Launch Lab | ABC Sales Consulting",
  description:
    "A practical sales and real-world experience programme for Year 13 graduates before university. Starts 1st October 2026 in Ntinda.",
  ogImage: "/img/flyers/launch-lab.jpeg",
});

const isMobileMenuOpen = ref(false);
const activeSubMenu = ref(null);

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
    to: "/why-abc/methodology",
    subLinks: [
      { name: "Methodology", to: "/why-abc/methodology" },
      { name: "Our Team", to: "/why-abc/team" },
    ],
  },
  { name: "Gallery", to: "/gallery" },
];

const status = ref("");
const footerStatus = ref("");

const formData = reactive({
  studentName: "",
  studentAge: "",
  parentName: "",
  phone: "",
  email: "",
  school: "",
  interest: "",
});

const submitLaunchLabForm = async () => {
  status.value = "Submitting...";

  const submission = new FormData();
  submission.append("access_key", "1b3f2db3-70e6-4917-b8dc-affe334cdaf1");
  submission.append(
    "subject",
    `New Launch Lab Registration: ${formData.studentName} (${formData.studentAge} yrs)`,
  );
  submission.append("from_name", "ABC Launch Lab Portal");
  submission.append("Student Name", formData.studentName);
  submission.append("Student Age", formData.studentAge);
  submission.append("Parent/Guardian Name", formData.parentName);
  submission.append("Phone", formData.phone);
  submission.append("Email", formData.email);
  submission.append("School Completed", formData.school);
  submission.append("Course / Interest", formData.interest);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submission,
    });
    const data = await res.json();
    if (data.success) {
      status.value = "Registration Received! We will contact you shortly.";
      formData.studentName = "";
      formData.studentAge = "";
      formData.parentName = "";
      formData.phone = "";
      formData.email = "";
      formData.school = "";
      formData.interest = "";
      setTimeout(() => {
        status.value = "";
      }, 7000);
    } else {
      status.value = "Error submitting. Please call 0791 178 657.";
    }
  } catch (err) {
    status.value = "Network error. Please call 0791 178 657.";
  }
};

const submitFooterForm = async (e) => {
  footerStatus.value = "Sending...";
  const fData = new FormData(e.target);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: fData,
    });

    const result = await response.json();
    if (result.success) {
      footerStatus.value = "Success!";
      e.target.reset();
      setTimeout(() => {
        footerStatus.value = "";
      }, 5000);
    } else {
      footerStatus.value = "Error. Try again.";
    }
  } catch (error) {
    footerStatus.value = "Network error.";
  }
};
</script>

