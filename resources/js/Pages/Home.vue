<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import HeaderNav from '@/Components/HeaderNav.vue';
import About from '@/Components/About.vue';
import Resume from '@/Components/Resume.vue';
import Skills from '@/Components/Skills.vue';
import Contact from '@/Components/Contact.vue';
import Footer from '@/Components/Footer.vue';

defineProps(
  {
    biographyText: String,
    required: true
  },
  {
    subContainerContentStylingClass: String,
    required: true
  },
  {
    subContainerContentSpacerClass: String,
    required: true
  }
);

const fontMainClass = 'text-floral-white-500 font-semibold text-sm leading-5'
const subContainerStylingClass = "flex flex-col text-center align-middle justify-center justify-items self-center items-center border-b border-space-shuttle-500"
const subContainerContentStylingClass = 'w-full p-4 overflow-scroll border border-space-shuttle-500 rounded-md'
const subContainerContentSpacerClass = 'h-4'
const verticalAlignClass = 'text-center align-middle justify-center justify-items self-center items-center'

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
        <div class="w-16 sm:w-64 h-16 flex align-middle justify-items self-center items-center text-center border-r border-space-shuttle-500">
          <div class="w-full sm:hidden">J.C.</div>
          <div class="w-full hidden sm:block">JOSEPH COLLIER</div>
        </div>

        <!-- NAV -->
        <div class="grow flex justify-around overflow-y-hidden text-center">
          <div>about</div>
          <div>skills</div>
          <div>resume</div>
          <div>github</div>
          <div>contact</div>
        </div>
      </div>

      <!-- ABOUT ME -->
      <About
        :biographyText="biographyText"
        :subContainerStylingClass="subContainerStylingClass"
        :subContainerContentStylingClass="subContainerContentStylingClass"
        :subContainerContentSpacerClass="subContainerContentSpacerClass"/>
    </div>

    <!-- <HeaderNav /> -->
    <!-- <About v-bind:biographyText="biographyText"/> -->
    <!-- <Resume /> -->
    <!-- <Skills /> -->
    <!-- <Contact /> -->

    <!-- <Footer /> -->
  </div>
</template>
