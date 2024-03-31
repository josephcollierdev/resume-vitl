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
    type: Object,
    required: true
  },
  sectionContainerClass: {
    type: String,
    required: true,
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
    required: false
  },
  subContainerStylingClass: {
    type: String,
    required: false
  },
  footerStylingClass: {
    type: String,
    required: false
  }
});

let fontMainClass = 'text-floral-white-500 font-semibold text-sm md:text-base leading-5'
let sectionHeaderClass = 'w-full text-center text-xl tracking-wider'
let sectionContainerClass = 'w-full h-16 m-auto flex flex-col text-center align-middle justify-center justify-items self-center items-center border-b border-space-shuttle-500 scroll-my-16'
let subContainerStylingClass = "flex flex-col text-center align-middle justify-center justify-items self-center items-center border-b border-space-shuttle-500 p-4 lg:p-16"
let footerStylingClass = "flex flex-col text-center align-middle justify-center justify-items self-center items-center border-b border-space-shuttle-500 p-4"
let subContainerContentStylingClass = 'w-full p-4 overflow-scroll border border-space-shuttle-500 rounded-md'
let subContainerContentSpacerClass = 'h-4 md:h-8'
let verticalAlignClass = 'text-center align-middle justify-center justify-items self-center items-center'
let headerNavLinkClass = 'cursor-pointer md:hover:tracking-widest md:hover:text-3xl transition-all duration-500 ease-in-out scroll-my-96'
</script>

<template>
  <div class="max-w-fit min-h-screen bg-black-magic-500" :class="fontMainClass">
    <div id="home-container" class="w-screen">

      <!-- HEADER -->
      <div class="h-16 flex align-middle justify-items self-center items-center border-b border-t border-space-shuttle-500 bg-black-magic-500 z-50 sticky top-0">

        <!-- EMBLEM -->
        <div class="text-lg md:text-xl w-16 sm:w-64 h-16 flex align-middle justify-items self-center items-center text-center border-r border-space-shuttle-500 ">
          <div class="w-full sm:hidden">J.C.</div>
          <div class="w-full hidden sm:block">JOSEPH COLLIER</div>
        </div>

        <!-- NAV -->
        <div
          :class="verticalAlignClass"
          class="w-1/5 h-12 text-base md:text-lg grow flex justify-evenly md:justify-around overflow-y-hidden text-center">
          <a href="#section-about" :class="headerNavLinkClass">about</a href="#">
          <a href="#section-resume" :class="headerNavLinkClass">resume</a href="#">
          <a href="#section-skills" :class="headerNavLinkClass">skills</a href="#">
          <a href="#section-contact" :class="headerNavLinkClass">contact</a href="#">
          <a href="https://github.com/josephcollierdev" target="_blank" :class="headerNavLinkClass">github</a>
        </div>
      </div>

      <!-- ABOUT ME -->
      <About
        :biographyText="biographyText"
        :sectionContainerClass="sectionContainerClass"
        :sectionHeaderClass="sectionHeaderClass"
        :subContainerStylingClass="subContainerStylingClass"
        :subContainerContentStylingClass="subContainerContentStylingClass"
        :subContainerContentSpacerClass="subContainerContentSpacerClass"/>

      <!-- Resume -->
      <Resume
        :sectionContainerClass="sectionContainerClass"
        :sectionHeaderClass="sectionHeaderClass"
        :subContainerStylingClass="subContainerStylingClass"
        :subContainerContentStylingClass="subContainerContentStylingClass"
        :subContainerContentSpacerClass="subContainerContentSpacerClass"/>

      <!-- SKILLS -->
      <Skills
        :skillsData="skillsData"
        :sectionContainerClass="sectionContainerClass"
        :sectionHeaderClass="sectionHeaderClass"
        :subContainerStylingClass="subContainerStylingClass"
        :subContainerContentStylingClass="subContainerContentStylingClass"
        :subContainerContentSpacerClass="subContainerContentSpacerClass"
        :verticalAlignClass="verticalAlignClass"/>

      <!-- CONTACT -->
      <Contact
        :sectionContainerClass="sectionContainerClass"
        :sectionHeaderClass="sectionHeaderClass"
        :subContainerStylingClass="subContainerStylingClass"
        :subContainerContentStylingClass="subContainerContentStylingClass"
        :subContainerContentSpacerClass="subContainerContentSpacerClass"/>

      <Footer
        :sectionContainerClass="sectionContainerClass"
        :sectionHeaderClass="sectionHeaderClass"
        :subContainerStylingClass="subContainerStylingClass"
        :subContainerContentStylingClass="subContainerContentStylingClass"
        :subContainerContentSpacerClass="subContainerContentSpacerClass"/>
    </div>
  </div>
</template>
