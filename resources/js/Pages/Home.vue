<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import HeaderNav from '@/Components/HeaderNav.vue';
import About from '@/Components/About.vue';
import Resume from '@/Components/Resume.vue';
import Skills from '@/Components/Skills.vue';
import Contact from '@/Components/Contact.vue';
import Footer from '@/Components/Footer.vue';

const props = defineProps({
  biographyText: {
    type: String,
    required: true
  },
  skillsData: {
    type: String,
    required: true
  },
  sectionContainerClass: {
    type: String,
    required: true
  },
  sectionHeaderClass: {
    type: String,
    required: true
  },
  subContainerContentStylingClass: {
    type: String,
    required: true
  },
  subContainerContentSpacerClass: {
    type: String,
    required: true
  },
  subContainerStylingClass: {
    type: String,
    required: true
  }
});

const fontMainClass = 'text-floral-white-500 font-semibold text-sm md:text-base leading-5'
const sectionHeaderClass = 'w-full text-center text-xl tracking-wider'
const sectionContainerClass = 'w-full h-16 m-auto flex flex-col text-center align-middle justify-center justify-items self-center items-center border-b border-space-shuttle-500'
const subContainerStylingClass = "flex flex-col text-center align-middle justify-center justify-items self-center items-center border-b border-space-shuttle-500 p-4 md:p-8"
const subContainerContentStylingClass = 'w-full p-4 overflow-scroll border border-space-shuttle-500 rounded-md'
const subContainerContentSpacerClass = 'h-4 md:h-8'
const verticalAlignClass = 'text-center align-middle justify-center justify-items self-center items-center'

const headerNavLinkClass = 'cursor-pointer md:hover:tracking-widest md:hover:text-3xl transition-all duration-500 ease-in-out'

const shrinkHeader = (e) => {
  const header = document.querySelector('#header-nav');
  const resumeComponent = document.querySelector('#section-resume');
  const skillsComponent = document.querySelector('#section-skills');
  const contactComponent = document.querySelector('#section-contact');
  const headerHeight = header.clientHeight;

  const sectionComponents = [
    resumeComponent,
    skillsComponent,
    contactComponent
  ];

  // if (window.innerWidth > 480) {
  //     if (window.scrollY > headerHeight) {
  //     header.classList.add('md:h-16');
  //     header.classList.remove('md:h-36');

  //     sectionComponents.forEach((sectionComponent) => {
  //         sectionComponent.classList.add('md:scroll-my-12');
  //         sectionComponent.classList.remove('scroll-my-52 md:scroll-my-36');
  //     });
  //   } else {
  //     header.classList.remove('md:h-16');
  //     header.classList.add('md:h-36');

  //     sectionComponents.forEach((sectionComponent) => {
  //         sectionComponent.classList.remove('md:scroll-my-12');
  //         sectionComponent.classList.add('scroll-my-52 md:scroll-my-36');
  //     });
  //   }
  // }
}

onMounted(() => window.addEventListener('scroll', shrinkHeader));

</script>

<template>
  <div class="max-w-fit min-h-screen bg-black-magic-500" :class="fontMainClass">
    <div id="home-container" class="w-screen">

      <!-- HEADER -->
      <div class="h-16 flex align-middle justify-items self-center items-center border-b border-space-shuttle-500 bg-black-magic-500 z-50 sticky top-0">

        <!-- EMBLEM -->
        <div class="text-lg md:text-xl w-16 sm:w-64 h-16 flex align-middle justify-items self-center items-center text-center border-r border-space-shuttle-500 ">
          <div class="w-full sm:hidden">J.C.</div>
          <div class="w-full hidden sm:block">JOSEPH COLLIER</div>
        </div>

        <!-- NAV -->
        <div
          :class="verticalAlignClass"
          class="w-1/5 h-12 text-base md:text-lg grow flex justify-evenly md:justify-around overflow-y-hidden text-center">
          <div :class="headerNavLinkClass">about</div>
          <div :class="headerNavLinkClass">skills</div>
          <div :class="headerNavLinkClass">resume</div>
          <div :class="headerNavLinkClass">contact</div>
          <div :class="headerNavLinkClass">github</div>
        </div>
      </div>

      <!-- ABOUT ME -->
      <!-- <About
        :biographyText="biographyText"
        :sectionContainerClass="sectionContainerClass"
        :sectionHeaderClass="sectionHeaderClass"
        :subContainerStylingClass="subContainerStylingClass"
        :subContainerContentStylingClass="subContainerContentStylingClass"
        :subContainerContentSpacerClass="subContainerContentSpacerClass"/> -->

      <!-- SKILLS -->
      <div>
        <div :class="sectionContainerClass">
          <div :class="sectionHeaderClass">SKILLS</div>
        </div>
        <div :class="subContainerStylingClass" class="w-full min-h-64 m-auto">
          1 {{ skillsData }} {{ biographyText }} 2

          <div class="w-full">
            #1
            <div :class="subContainerContentStylingClass" class="text-left h-full font-inder flex flex-row">
              <div class="px-4 border-r">skills 1a</div>
              <div class="px-4 border-r">skills 1b</div>
            </div>
            <div :class="subContainerContentSpacerClass"></div>
          </div>

          <div class="w-full">
            #2
            <div :class="subContainerContentStylingClass" class="text-left h-full font-inder">skills 1</div>
            <div :class="subContainerContentSpacerClass"></div>
          </div>

          <div class="w-full">
            #3
            <div :class="subContainerContentStylingClass" class="text-left h-full font-inder">skills 1</div>
            <div :class="subContainerContentSpacerClass"></div>
          </div>

          <div class="w-full">
            #4
            <div :class="subContainerContentStylingClass" class="text-left h-full font-inder">skills 1</div>
            <div :class="subContainerContentSpacerClass"></div>
          </div>

        </div>


      </div>
    </div>

    <!-- <HeaderNav /> -->
    <!-- <About v-bind:biographyText="biographyText"/> -->
    <!-- <Resume /> -->
    <!-- <Skills /> -->
    <!-- <Contact /> -->

    <!-- <Footer /> -->
  </div>
</template>
