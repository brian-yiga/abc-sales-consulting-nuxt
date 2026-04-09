<template>
  <div
    class="bg-maroon pt-4 pb-5 bg-cover bg-center bg-[url('/assets/img/bg-purple.jpg')]"
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
      class="text-white pt-20 pb-16 lg:pt-25 lg:pb-20 xl:pt-[120px] xl:pb-25"
    >
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-left max-w-xl">
          <div>
            <MuiButton
              variant="all-white"
              label="GENERAL EDUCATION"
              href="https://business.musizi.ac.ug/"
              class="!rounded-full px-8 !font-thin mb-4"
            />
          </div>

          <h2 class="mui-text--display-1 uppercase leading-tight">
            A Liberal Arts Core for Thoughtful Leaders.
          </h2>

          <p class="mt-6 mb-8 text-white/90">
            At Musizi, every student - regardless of major - begins with the
            Musizi Core curriculum. These courses build the intellectual and
            personal grounding needed to thrive in a rapidly changing world.
          </p>
        </div>

        <div class="relative">
          <img
            src="/img/close-up-smiley.jpg"
            alt="close up smiley student"
            class="rounded-lg shadow-2xl w-full object-cover aspect-[4/3] lg:aspect-auto"
          />
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
          <span class="text-5xl font-bold mb-2 uppercase italic">3</span>
          <span class="uppercase tracking-widest text-sm font-semibold"
            >LEVELS</span
          >
        </div>

        <div
          class="bg-maroon text-white p-8 rounded-sm text-center flex flex-col justify-center items-center min-h-[180px]"
        >
          <span class="text-5xl font-bold mb-2 uppercase">ALL</span>
          <span class="uppercase tracking-widest text-sm font-semibold"
            >MAJORS</span
          >
        </div>

        <div
          class="bg-maroon text-white p-8 rounded-sm text-center flex flex-col justify-center items-center min-h-[180px]"
        >
          <span class="text-5xl font-bold mb-2 uppercase italic">INFINITE</span>
          <span class="uppercase tracking-widest text-sm font-semibold"
            >IMPACT</span
          >
        </div>
      </div>

      <div
        class="text-center italic text-gray-600 max-w-2xl mx-auto leading-relaxed text-[20px]"
      >
        <p>
          You graduate with a portfolio, read-world experience, and the
          confidence to build tech solutions for Africa.
        </p>
      </div>
    </div>
  </MuiPageContainer>

  <MuiPageContainer class="py-10 bg-gray-50">
    <div class="text-center mb-16">
      <div
        class="inline-block bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-2xl font-bold uppercase mb-4"
      >
        CURRICULUM
      </div>
      <h2 class="mui-text--display-1 uppercase mb-4">PROGRAM LEVELS</h2>
      <p class="max-w-3xl mx-auto text-gray-600">
        Through a carefully designed sequence of courses — inspired by the
        Musizi tree — students progress from self-knowledge through global
        understanding to creative leadership.
      </p>
    </div>

    <MuiPageContainer class="py-20 bg-white">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="flex flex-col">
          <div class="h-64 w-full bg-gray-100 mb-6 overflow-hidden">
            <img
              src="/img/arms-crossed.jpg"
              alt="Level 1 Roots"
              class="w-full h-full object-cover border border-black-200 group-hover:border-maroon transition-all"
            />
          </div>
          <div
            class="inline-block self-start bg-gray-100 text-gray-500 px-3 py-1 text-[10px] uppercase font-extrabold mb-4"
          >
            Level 1 — The Roots
          </div>
          <h3
            class="text-maroon font-extrabold uppercase text-xl mb-4 leading-tight"
          >
            Know Yourself
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            Leadership begins with self-understanding. Students explore
            identity, values, motivations, and purpose while reflecting on their
            experiences and understanding the ethical traditions shaping African
            societies.
          </p>
          <div class="mt-auto">
            <h4
              class="text-[10px] font-extrabold uppercase tracking-widest mb-3"
            >
              Sample Courses
            </h4>
            <ul class="text-xs text-gray-600 space-y-2">
              <li>• Art of Storytelling</li>
              <li>• Finding Your Professional Voice</li>
              <li>• African Indigenous Philosophy</li>
              <li>• Uganda Studies</li>
              <li>• East African Studies</li>
            </ul>
          </div>
        </div>

        <div
          class="flex flex-col border-x-0 md:border-x border-gray-100 md:px-6"
        >
          <div class="h-64 w-full bg-gray-100 mb-6 overflow-hidden">
            <img
              src="/img/programming-lecture.jpg"
              alt="Level 1 Roots"
              class="w-full h-full object-cover border border-black-200 group-hover:border-maroon transition-all"
            />
          </div>
          <div
            class="inline-block self-start bg-gray-100 text-gray-500 px-3 py-1 text-[10px] uppercase font-extrabold mb-4"
          >
            Level 2 — The Trunk
          </div>
          <h3
            class="text-maroon font-extrabold uppercase text-xl mb-4 leading-tight"
          >
            Understand the World & Think with Numbers
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            Students develop strong quantitative and qualitative reasoning
            skills needed to analyze data, understand systems, and make informed
            decisions across industries.
          </p>
          <div class="mt-auto">
            <h4
              class="text-[10px] font-extrabold uppercase tracking-widest mb-3"
            >
              Sample Courses
            </h4>
            <ul class="text-xs text-gray-600 space-y-2 font-medium">
              <li>• Computational Thinking</li>
              <li>• Data Storytelling</li>
              <li>• Generative AI</li>
              <li>• Money Matters</li>
              <li>• Global Studies</li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="h-64 w-full bg-gray-100 mb-6 overflow-hidden">
            <img
              src="/img/working-post.jpg"
              alt="Level 1 Roots"
              class="w-full h-full object-cover border border-black-200 group-hover:border-maroon transition-all"
            />
          </div>
          <div
            class="inline-block self-start bg-gray-100 text-gray-500 px-3 py-1 text-[10px] uppercase font-extrabold mb-4"
          >
            Level 3 — The Branches
          </div>
          <h3
            class="text-maroon font-extrabold uppercase text-xl mb-4 leading-tight"
          >
            Create and Lead
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            Students bring everything together by applying their knowledge and
            skills to real challenges through creative and meaningful projects.
            By the end of the core program, students are prepared to lead.
          </p>
          <div class="mt-auto">
            <h4
              class="text-[10px] font-extrabold uppercase tracking-widest mb-3"
            >
              Sample Courses
            </h4>
            <ul class="text-xs text-gray-600 space-y-2">
              <li>• Internships</li>
              <li>• Industry Consulting</li>
              <li>• Community Engagement</li>
              <li>• International Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </MuiPageContainer>
  </MuiPageContainer>

  <div
    class="bg-maroon bg-cover bg-center py-20 bg-[url('/assets/img/bg-purple.jpg')]"
  >
    <MuiPageContainer>
      <div class="text-center mb-16">
        <div
          class="inline-block bg-white text-gray-500 px-4 py-1 rounded-full text-xs font-bold uppercase mb-4"
        >
          Faculty
        </div>
        <h2 class="mui-text--display-1 text-white uppercase mb-4">
          Meet the Faculty
        </h2>
        <p class="max-w-2xl mx-auto text-white">
          Our Core faculty bring expertise across disciplines - from geophysics
          to public health to education - reflecting the interdisciplinary
          spirit of the program itself.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white overflow-hidden shadow-xl flex flex-col">
          <div class="h-64 w-full overflow-hidden">
            <img
              src="/img/vincent-tong.jpg"
              alt="Vincent Tong"
              class="w-full h-full object-cover object-top scale-110"
            />
          </div>
          <div class="p-6 flex-grow">
            <a
              href="https://connect.agu.org/education/whoweare/leadership/vtong"
              target="_blank"
              class="hover:text-maroon transition-colors"
            >
              <h3 class="font-bold text-xl uppercase mb-2">
                Professor Vincent Tong
              </h3>
            </a>
            <div class="text-gray-600 text-xs leading-relaxed space-y-1">
              <p class="font-bold">PhD Geophysics</p>
              <p>University of Cambridge</p>
              <p class="font-bold">MEd Education</p>
              <p>Open University</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow-xl flex flex-col">
          <div class="h-64 w-full overflow-hidden">
            <img
              src="/img/jim-spire-sentongo.jpg"
              alt="Jim Spire-Sentongo"
              class="w-full h-full object-cover object-top scale-110"
            />
          </div>
          <div class="p-6 flex-grow">
            <a
              href="https://x.com/SpireJim"
              target="_blank"
              class="hover:text-maroon transition-colors"
            >
              <h3 class="font-bold text-xl uppercase mb-2">
                Professor Jimmy Spire Ssentongo
              </h3>
            </a>
            <div class="text-gray-600 text-xs leading-relaxed space-y-1">
              <p class="font-bold">Adjunct Faculty</p>
              <p class="font-bold">PhD Humanistic Studies</p>
              <p>University of Humanistic Studies</p>
              <p class="font-bold">MA Ethics and Public Management</p>
              <p>Makerere University</p>
              <p class="font-bold">MSc Education for Sustainability</p>
              <p>London South Bank University</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow-xl flex flex-col">
          <div class="h-64 w-full overflow-hidden">
            <img
              src="/img/rob-ross.jpg"
              alt="Rob Ross"
              class="w-full h-full object-cover object-top scale-110"
            />
          </div>
          <div class="p-6 flex-grow">
            <a
              href="https://www.linkedin.com/in/robertandrewross/"
              target="_blank"
              class="hover:text-maroon transition-colors"
            >
              <h3 class="font-bold text-xl uppercase mb-2">Rob Ross</h3>
            </a>
            <div class="text-gray-600 text-xs leading-relaxed space-y-1">
              <p class="font-bold">Master’s Degree, Public Policy Analysis</p>
              <p>University of Chicago</p>
              <p class="font-bold">Master’s Degree, Economics</p>
              <p>University of Illinois Chicago</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow-xl flex flex-col">
          <div class="h-64 w-full overflow-hidden">
            <img
              src="/img/joseph-bazirake.jpg"
              alt="Joseph Bazirake"
              class="w-full h-full object-cover object-top scale-110"
            />
          </div>
          <div class="p-6 flex-grow">
            <a
              href="https://www.linkedin.com/in/besigye-bazirake-phd-b218411b/"
              target="_blank"
              class="hover:text-maroon transition-colors"
            >
              <h3 class="font-bold text-xl uppercase mb-2">
                Dr. Joseph Besigye Bazirake
              </h3>
            </a>
            <div class="text-gray-600 text-xs leading-relaxed space-y-1">
              <p class="font-bold">Post-Doc Critical University Studies</p>
              <p>Nelson Mandela University</p>
              <p class="font-bold">PhD Higher Education</p>
              <p>University of Free State</p>
              <p class="font-bold">MA Peace and Conflict Studies</p>
              <p>Makerere University</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow-xl flex flex-col">
          <div class="h-64 w-full overflow-hidden">
            <img
              src="/img/darell-robin.jpg"
              alt="Darrell Robin"
              class="w-full h-full object-cover object-top scale-110"
            />
          </div>
          <div class="p-6 flex-grow">
            <h3 class="font-bold text-xl uppercase mb-2 text-gray-800">
              Professor Darrell Robin
            </h3>
            <div class="text-gray-600 text-xs leading-relaxed space-y-1">
              <p class="font-bold">EdD Education – Higher Education</p>
              <p>Northern Illinois University</p>
              <p class="font-bold">
                PhD Education (ABD) – Curriculum and Instruction
              </p>
              <p>University of Illinois at Chicago</p>
              <p class="font-bold">MA Writing</p>
              <p>DePaul University</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow-xl flex flex-col">
          <div class="h-64 w-full overflow-hidden">
            <img
              src="/img/paa-kwesi-heto.jpg"
              alt="Paa Kwesi Heto"
              class="w-full h-full object-cover object-top scale-110"
            />
          </div>
          <div class="p-6 flex-grow">
            <a
              href="https://www.linkedin.com/in/paa-kwesi-heto/"
              target="_blank"
              class="hover:text-maroon transition-colors"
            >
              <h3 class="font-bold text-xl uppercase mb-2">
                Professor Paa-Kwesi Heto
              </h3>
            </a>
            <div class="text-gray-600 text-xs leading-relaxed space-y-1">
              <p class="font-bold">PhD Political Science</p>
              <p>University of California Irvine</p>
              <p class="font-bold">MA, Mathematical Behavioral Sciences</p>
              <p>University of California Irvine</p>
              <p class="font-bold">MA, Political Science</p>
              <p>University of California Irvine</p>
              <p class="font-bold">MA, Demography and Social Analysis</p>
              <p>University of California Irvine</p>
              <p class="font-bold">
                MA, Educational Leadership and Societal Change
              </p>
              <p>Soka University of America</p>
              <p class="font-bold">
                MSc, Global Studies and International Affairs
              </p>
              <p>Northeastern University</p>
            </div>
          </div>
        </div>
      </div>
    </MuiPageContainer>
  </div>

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

        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 leading-tight"
        >
          A Foundation for Leadership
        </h2>

        <p class="text-white/80 text-lg mb-10 leading-relaxed">
          The Musizi Core curriculum prepares students to think critically, lead
          ethically, and navigate an increasingly complex world — no matter what
          they choose to build with their degree.
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
