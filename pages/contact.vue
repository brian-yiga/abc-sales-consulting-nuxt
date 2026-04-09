<template>
  <div
    class="bg-maroon pt-4 pb-5 bg-cover bg-bottom bg-[url('/assets/img/admissionsBg.png')]"
  >
    <MuiPageContainer wide>
      <header
        class="flex items-center justify-between px-6 py-4 md:px-8 bg-white/20 backdrop-blur-[10px] border border-white/10 relative"
      >
        <div class="flex items-center">
          <span class="block md:hidden">
            <MuiLogoMu class="h-12 w-auto" />
          </span>
          <span class="hidden md:block">
            <MuiLogoUniversity :width="220" />
          </span>
        </div>

        <nav class="hidden lg:flex items-center gap-8">
          <NuxtLink
            to="/"
            class="text-white font-bold uppercase text-sm hover:opacity-80 cursor-pointer"
          >
            About
          </NuxtLink>

          <button
            @click="toggleAcademics"
            class="text-white font-bold uppercase text-sm cursor-pointer hover:opacity-80 focus:outline-none"
          >
            Academics
          </button>

          <NuxtLink
            to="/under-construction"
            class="text-white font-bold uppercase text-sm hover:opacity-80 cursor-pointer"
          >
            Student Life
          </NuxtLink>
          <NuxtLink
            to="/coming-soon"
            class="text-white font-bold uppercase text-sm hover:opacity-80 cursor-pointer"
          >
            Admissions
          </NuxtLink>
          <NuxtLink
            to="https://musizifoundation.org/"
            class="text-white font-bold uppercase text-sm hover:opacity-80 cursor-pointer"
          >
            News/Stories
          </NuxtLink>
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
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 z-[200] lg:hidden bg-maroon text-white flex flex-col p-8"
        >
          <div class="flex justify-end mb-8">
            <button
              @click="isMobileMenuOpen = false"
              class="text-4xl font-light p-2 cursor-pointer hover:opacity-70"
            >
              ✕
            </button>
          </div>

          <div class="flex flex-col space-y-6">
            <NuxtLink
              to="/"
              @click="isMobileMenuOpen = false"
              class="text-2xl font-bold uppercase border-b border-white/10 pb-4"
              >About</NuxtLink
            >

            <div class="space-y-4">
              <p class="text-xl uppercase tracking-widest font-bold">
                Academics
              </p>
              <div class="flex flex-col gap-4 pl-4 border-l border-white/20">
                <NuxtLink
                  to="/academics/entrepreneurship"
                  @click="isMobileMenuOpen = false"
                  class="text-xl"
                  >Entrepreneurship</NuxtLink
                >
                <NuxtLink
                  to="/academics/software-engineering"
                  @click="isMobileMenuOpen = false"
                  class="text-xl"
                  >Software Engineering</NuxtLink
                >
                <NuxtLink
                  to="/academics/general-education"
                  @click="isMobileMenuOpen = false"
                  class="text-xl"
                  >General Education</NuxtLink
                >
                <a
                  href="https://business.musizi.ac.ug/"
                  @click="isMobileMenuOpen = false"
                  class="text-xl"
                  >Research - MSBI</a
                >
              </div>
            </div>

            <NuxtLink
              to="/under-construction"
              @click="isMobileMenuOpen = false"
              class="text-2xl font-bold uppercase border-b border-white/10 pb-4 pt-4"
              >Student Life</NuxtLink
            >
            <NuxtLink
              to="/coming-soon"
              @click="isMobileMenuOpen = false"
              class="text-2xl font-bold uppercase border-b border-white/10 pb-4"
              >Admissions</NuxtLink
            >
            <NuxtLink
              to="https://musizifoundation.org/"
              @click="isMobileMenuOpen = false"
              class="text-2xl font-bold uppercase"
              >News/Stories</NuxtLink
            >
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

      <div
        v-if="showAcademics"
        class="hidden lg:flex bg-white border-t border-gray-100 shadow-xl w-full z-[100] relative"
      >
        <MuiPageContainer wide class="flex items-center">
          <NuxtLink
            to="/academics/entrepreneurship"
            class="text-maroon px-8 py-4 uppercase font-bold text-xs hover:bg-maroon hover:text-white transition-all cursor-pointer"
          >
            Entrepreneurship
          </NuxtLink>

          <NuxtLink
            to="/academics/software-engineering"
            class="text-maroon px-8 py-4 uppercase font-bold text-xs border-l border-gray-100 hover:bg-maroon hover:text-white transition-all cursor-pointer"
          >
            Software Engineering
          </NuxtLink>

          <NuxtLink
            to="/academics/general-education"
            class="text-maroon px-8 py-4 uppercase font-bold text-xs border-l border-gray-100 hover:bg-maroon hover:text-white transition-all cursor-pointer"
          >
            General Education
          </NuxtLink>

          <a
            href="https://business.musizi.ac.ug/"
            class="text-maroon px-8 py-4 uppercase font-bold text-xs border-l border-gray-100 hover:bg-maroon hover:text-white transition-all cursor-pointer"
          >
            Research - MSBI
          </a>
        </MuiPageContainer>
      </div>
    </MuiPageContainer>

    <MuiPageContainer
      class="text-white pt-20 pb-16 lg:pt-25 lg:pb-20 xl:pt-[120px] xl:pb-25 bg-cover bg-center"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="text-left max-w-xl">
          <div>
            <MuiButton
              variant="all-white"
              label="ADMISSIONS 2025 - 2026"
              class="!rounded-full px-12 !font-thin mb-6 !py-4 text-[10px] tracking-widest"
            />
          </div>

          <h2 class="mui-text--display-1 uppercase leading-tight font-bold">
            Begin Your Journey at Musizi University
          </h2>

          <p class="mt-6 mb-10 text-white/90 leading-relaxed text-sm">
            Ethical leadership. Entrepreneurial spirit. <br />
            African-centered excellence. Your future begins <br />
            with a single step. We're ready for you.
          </p>

          <div class="flex flex-row gap-4 max-w-sm">
            <MuiButton
              label="APPLY NOW"
              variant="all-white"
              class="flex-1 justify-center !rounded-none py-4 font-bold text-xs tracking-widest"
            />
            <MuiButton
              label="VISIT CAMPUS"
              variant="white-stroke"
              class="flex-1 justify-center !rounded-none py-4 font-bold text-xs tracking-widest border border-white"
            />
          </div>
        </div>

        <div class="hidden lg:block"></div>
      </div>
    </MuiPageContainer>
  </div>

  <section class="bg-[#F9F9F9] py-20">
    <MuiPageContainer>
      <div class="text-center mb-16">
        <div
          class="inline-block bg-[#E2E8F0] text-[#64748B] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        >
          Our Students
        </div>
        <h2
          class="text-4xl md:text-5xl font-bold text-[#1A1A1A] uppercase mb-6 tracking-tight"
        >
          What We Look For
        </h2>
        <p class="max-w-3xl mx-auto text-[#4A4A4A] text-lg leading-relaxed">
          We seek bright, curious, hardworking students who want to create
          positive change in Africa and the world. Musizi values
          diversity—students from all backgrounds, including international
          applicants, are welcome.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 shadow-2xl"
      >
        <div
          class="bg-[#9C1C33] p-10 text-white min-h-[320px] flex flex-col justify-start"
        >
          <div class="mb-6">
            <svg
              class="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
              <path
                d="M11 8c.5 0 1 .5 1 1s-.5 1-1 1"
                stroke-linecap="round"
              ></path>
              <path d="M11 14v.01" stroke-linecap="round"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-black uppercase tracking-wider mb-4">
            Curiosity
          </h3>
          <p class="text-sm leading-relaxed opacity-90">
            A hunger to ask questions, explore ideas, and push beyond
            conventional thinking.
          </p>
        </div>

        <div
          class="bg-[#662D91] p-10 text-white min-h-[320px] flex flex-col justify-start"
        >
          <div class="mb-6">
            <svg
              class="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12z"
              ></path>
              <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
          </div>
          <h3 class="text-2xl font-black uppercase tracking-wider mb-4">
            Leadership
          </h3>
          <p class="text-sm leading-relaxed opacity-90">
            The drive to inspire, mobilise, and lead communities toward a better
            tomorrow.
          </p>
        </div>

        <div
          class="bg-[#6BAA9C] p-10 text-white min-h-[320px] flex flex-col justify-start"
        >
          <div class="mb-6">
            <svg
              class="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M3 6l9 13 9-13"></path>
              <path d="M12 19V5"></path>
              <path d="M7 10h10"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-black uppercase tracking-wider mb-4">
            Service
          </h3>
          <p class="text-sm leading-relaxed opacity-90">
            A commitment to giving back, uplifting others, and contributing to
            society.
          </p>
        </div>

        <div
          class="bg-[#D97D30] p-10 text-white min-h-[320px] flex flex-col justify-start"
        >
          <div class="mb-6">
            <svg
              class="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-black uppercase tracking-wider mb-4">
            Integrity
          </h3>
          <p class="text-sm leading-relaxed opacity-90">
            Honesty and ethical grounding as the foundation for everything you
            build.
          </p>
        </div>
      </div>
    </MuiPageContainer>
  </section>

  <section
    class="py-24 bg-cover bg-center text-white bg-[url('/assets/img/bg-red.jpg')]"
  >
    <MuiPageContainer>
      <div class="text-center mb-16">
        <div
          class="inline-block bg-white text-maroon px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        >
          Undergraduate Admissions
        </div>
        <h2
          class="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight"
        >
          Two Degrees. Infinite Possibilities
        </h2>
        <p class="text-white/80 text-lg max-w-2xl mx-auto">
          Explore two innovative undergraduate degrees designed for Africa's
          next generation of leaders.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          class="bg-white text-black rounded-sm overflow-hidden flex flex-col"
        >
          <div class="h-64 overflow-hidden">
            <img
              src="/img/friendly-shopkeeper.jpg"
              alt="Entrepreneurship"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-8 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-4">
              <span
                class="bg-maroon text-white text-[10px] font-bold px-3 py-1 uppercase"
                >Bachelor of Arts</span
              >
              <span
                class="bg-gray-100 text-gray-500 text-[10px] px-3 py-1 rounded-full uppercase"
                >3 Years · Full-Time</span
              >
            </div>
            <h3
              class="text-2xl font-black uppercase mb-4 tracking-wide text-[#1A1A1A]"
            >
              Entrepreneurship
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
              For students ready to innovate, launch ventures, and solve real
              problems across Africa. Build the ventures that will define the
              next generation of African business.
            </p>
            <MuiButton
              label="VIEW REQUIREMENTS"
              variant="black-stroke"
              class="!bg-white !text-black border border-black/20 self-start text-[10px] font-bold px-6 py-3 !rounded-none hover:!bg-gray-50 transition-colors"
            />
          </div>
        </div>

        <div
          class="bg-white text-black rounded-sm overflow-hidden flex flex-col"
        >
          <div class="h-64 overflow-hidden">
            <img
              src="/img/programming-background.jpg"
              alt="Software Engineering"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-8 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-4">
              <span
                class="bg-[#6BAA9C] text-white text-[10px] font-bold px-3 py-1 uppercase"
                >Bachelor of Science</span
              >
              <span
                class="bg-gray-100 text-gray-500 text-[10px] px-3 py-1 rounded-full uppercase"
                >3 Years · Full-Time</span
              >
            </div>
            <h3
              class="text-2xl font-black uppercase mb-4 tracking-wide text-[#1A1A1A]"
            >
              Software Engineering
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
              For future software engineers building technology for Africa and
              beyond. Master the craft of building reliable, scalable, and
              impactful digital systems.
            </p>
            <MuiButton
              label="VIEW REQUIREMENTS"
              variant="black-stroke"
              class="!bg-white !text-black border border-black/20 self-start text-[10px] font-bold px-6 py-3 !rounded-none hover:!bg-gray-50 transition-colors"
            />
          </div>
        </div>
      </div>
    </MuiPageContainer>
  </section>

  <section class="bg-[#F9F9F9] py-20">
    <MuiPageContainer>
      <div class="text-center mb-12">
        <div
          class="inline-block bg-[#E2E8F0] text-[#64748B] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        >
          Entry Requirements
        </div>
        <h2
          class="text-4xl md:text-5xl font-black uppercase text-[#1A1A1A] mb-4"
        >
          Admission Criteria
        </h2>
        <p class="text-gray-500 text-sm">
          Select a programme below to expand its requirements.
        </p>
      </div>

      <div class="max-w-4xl mx-auto flex flex-col gap-1">
        <div v-for="course in courses" :key="course.id" class="overflow-hidden">
          <button
            @click="
              activeCourse = activeCourse === course.id ? null : course.id
            "
            class="w-full flex justify-between items-center p-6 transition-colors duration-300"
            :class="
              activeCourse === course.id
                ? 'bg-maroon text-white'
                : 'bg-[#EEEEEE] text-gray-700 hover:bg-gray-200'
            "
          >
            <span class="font-bold text-lg">
              {{ course.title }}
              <span class="font-normal opacity-80">— Entry Requirements</span>
            </span>

            <div class="rounded-full border border-current p-1">
              <svg
                v-if="activeCourse === course.id"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </button>

          <div
            v-show="activeCourse === course.id"
            class="bg-[#F2F2F2] p-8 border-x border-b border-gray-200"
          >
            <div class="space-y-8">
              <div>
                <h4
                  class="text-xs font-black uppercase tracking-widest text-gray-900 mb-4"
                >
                  Direct Entry
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="item in course.directEntry"
                    :key="item"
                    class="flex items-start text-sm text-gray-600"
                  >
                    <span class="mr-2 text-gray-400">•</span> {{ item }}
                  </li>
                </ul>
              </div>

              <hr class="border-gray-300" />

              <div>
                <h4
                  class="text-xs font-black uppercase tracking-widest text-gray-900 mb-4"
                >
                  Other Schemes
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="item in course.otherSchemes"
                    :key="item"
                    class="flex items-start text-sm text-gray-600"
                  >
                    <span class="mr-2 text-gray-400">•</span> {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MuiPageContainer>
  </section>

  <section
    class="py-24 bg-cover bg-center text-white bg-[url('/assets/img/bg-purple.jpg')]"
  >
    <MuiPageContainer>
      <div class="text-center mb-16">
        <div
          class="inline-block bg-maroon text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          Application Checklist
        </div>
        <h2
          class="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight"
        >
          What You'll Need
        </h2>
        <p class="text-white/80 text-sm max-w-2xl mx-auto">
          Gather your documents before starting your application to ensure a
          smooth process.
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-6xl mx-auto shadow-2xl"
      >
        <div class="bg-white text-black p-12 border-r border-gray-100">
          <div class="mb-8">
            <img
              src="/img/ugandanFlag.png"
              alt="Uganda Flag"
              class="w-16 h-auto shadow-sm"
            />
          </div>
          <h3 class="text-2xl font-black uppercase mb-6 tracking-wide">
            Ugandan Applicants
          </h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex items-start">
              <span class="mr-2">•</span> Completed application form
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> Secondary school transcript
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> UACE / UCE results
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> IGCSE / A-Level results (if
              applicable)
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> International Baccalaureate diploma
              (if applicable)
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> American or Canadian diploma (if
              applicable)
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> French Baccalaureate (if applicable)
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> Other NCHE-approved qualifications
            </li>
          </ul>
        </div>

        <div class="bg-white text-black p-12">
          <div class="mb-8">
            <img
              src="/img/foreigner.png"
              alt="International"
              class="w-16 h-auto"
            />
          </div>
          <h3 class="text-2xl font-black uppercase mb-6 tracking-wide">
            International Applicants
          </h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex items-start">
              <span class="mr-2">•</span> All documents required of Ugandan
              applicants
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> Certified English translations (where
              documents are in another language)
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> English proficiency test results —
              TOEFL or IELTS (if required)
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span> UNCHE Equation of Qualifications
              certificate
            </li>
          </ul>
        </div>
      </div>

      <div
        class="max-w-6xl mx-auto mt-0 p-10 flex flex-col md:flex-row items-center gap-8 bg-cover bg-center bg-[url('/assets/img/bg-red.jpg')]"
        
      >
        <div class="flex-shrink-0">
          <svg
            class="w-16 h-16 text-white opacity-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
            <path d="M9 7h1" stroke-linecap="round" />
          </svg>
        </div>
        <p class="text-sm leading-relaxed text-white/95">
          The UNCHE Equation of Qualifications is required for all international
          applicants whose qualifications were not obtained under the Ugandan
          national curriculum. This ensures your credentials are formally
          recognized by Uganda's National Council for Higher Education.
        </p>
      </div>
    </MuiPageContainer>
  </section>

  <div class="relative bg-black py-16 text-center overflow-hidden">
    <div
      class="absolute inset-0 z-0 bg-cover bg-center opacity-40 bg-[url('/assets/img/bg-footer-black.jpg')]"
    ></div>

    <MuiPageContainer class="relative z-10">
      <div
        class="max-w-3xl mx-auto flex flex-col items-center justify-center text-center"
      >
        <div class="mb-12 pb-12 border-b border-white/10">
          <p
            class="text-white/90 text-sm md:text-base italic leading-relaxed font-light tracking-wide italic"
          >
            Musizi University is being built to empower thoughtful, ethical, and
            entrepreneurial leaders for Africa’s future. Our hands-on,
            liberal-arts-grounded approach prepares graduates to thrive in a
            rapidly changing world and contribute meaningfully to their
            communities and the world.
          </p>
        </div>

        <div
          class="inline-block bg-[#E2E8F0] text-[#64748B] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        >
          Ready?
        </div>

        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight"
        >
          Your Story Starts Here
        </h2>

        <p class="text-white/80 text-lg mb-10 leading-relaxed">
          Join a community of change-makers, innovators, and leaders building
          Africa's future.
        </p>

        <div class="flex justify-center">
          <MuiButton
            variant="right-icon-no-fill"
            label="Apply to Musizi"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeZgnfom-EJjSaGbF1375Vmc9yHvlxVdu8mU7JSxotPsneRDg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white border-white hover:bg-white hover:text-maroon transition-all"
          />
        </div>
      </div>
    </MuiPageContainer>
  </div>

  <footer
    class="bg-maroon bg-cover bg-center bg-[url('/assets/img/bg-red.jpg')] text-white"
    id="contacts"
  >
    <MuiPageContainer class="py-16 border-b border-white/10">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-bold uppercase mb-2">
          Get Updates, Stay Informed
        </h2>
        <p class="text-white">Get updates from the Musizi University</p>
      </div>

      <form
        @submit.prevent
        class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/30 rounded-sm overflow-hidden"
      >
        <input
          type="text"
          placeholder="Your name"
          class="bg-white/95 text-gray-800 px-6 py-4 outline-none border-r border-gray-200"
        />
        <input
          type="email"
          placeholder="Your email address"
          class="bg-white/95 text-gray-800 px-6 py-4 outline-none border-r border-gray-200"
        />
        <div
          class="bg-white/95 flex items-center px-6 py-4 border-r border-gray-200"
        >
          <div class="flex items-center gap-3 text-gray-500 text-sm">
            <div class="w-5 h-5 border border-gray-300 rounded-sm"></div>
            I'm not a robot
          </div>
        </div>
        <button
          type="submit"
          class="bg-maroon hover:bg-maroon/90 text-white font-bold uppercase transition-colors py-4 px-8 cursor-pointer"
          href="https://forms.monday.com/forms/13e21be82c90c521444f53a23d710107?r=use1"
        >
          Submit
        </button>
      </form>
    </MuiPageContainer>

    <MuiFooterContacts
      :containerClasses="[
        'bg-maroon',
        'text-white',
        'py-11',
        'px-6',
        'md:px-12',
      ]"
    />

    <MuiPageContainer class="py-6 border-t border-white/10">
      <div
        class="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/60"
      >
        <div class="flex gap-4">
          <span>© All rights reserved</span>
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Cookie Policy</a>
        </div>
        <div class="mt-4 md:mt-0">
          Designed by <span class="text-white font-bold">10/10 AVE</span>
        </div>
      </div>
    </MuiPageContainer>
  </footer>
  <MuiPattern :strips="1" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  MuiButton,
  MuiPageContainer,
  MuiLogoMu,
  MuiLogoUniversity,
  MuiPattern,
  MuiFooterContacts,
} from "@northgreenug/musizi-ui-kit";

const activeCourse = ref<string | null>("ba-ent");

const courses = [
  {
    id: "ba-ent",
    title: "BA in Entrepreneurship",
    directEntry: [
      "UCE with at least 5 passes",
      "UACE with at least 2 principal passes",
    ],
    otherSchemes: [
      "Relevant second class or credit diploma",
      "Higher Education Access Certificate",
      "Mature Age Examinations (NCHE-recognized)",
    ],
  },
  {
    id: "bsc-se",
    title: "BSc in Software Engineering",
    directEntry: [
      "UCE with at least 5 passes including Mathematics and Physics",
      "UACE with at least 2 principal passes in Mathematics and Physics",
    ],
    otherSchemes: [
      "Diploma in Computer Science, IT, or Engineering",
      "Foundational Certificate in Computing",
      "Verified professional portfolio (for mature entry)",
    ],
  },
  {
    id: "ba-gen",
    title: "BA in General Education",
    directEntry: [
      "UCE with at least 5 passes including English Language",
      "UACE with at least 2 principal passes in Humanities",
    ],
    otherSchemes: [
      "Grade III Teacher's Certificate",
      "Diploma in Education from a recognized institution",
      "Higher Education Access Certificate in Arts",
    ],
  },
];

// 1. Page Metadata
definePageMeta({
  title: "Entrepreneurship",
  description:
    "Build ventures that shape Africa's future at Musizi University.",
});

// 2. State (The "Result")
const showAcademics = ref(false);
const isMobileMenuOpen = ref(false);

// 3. Actions (The "Functions")
const toggleAcademics = () => {
  showAcademics.value = !showAcademics.value;
  if (showAcademics.value) isMobileMenuOpen.value = false;
};

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) showAcademics.value = false;
};
</script>
