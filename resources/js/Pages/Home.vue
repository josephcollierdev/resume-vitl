<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import HeaderNav from '@/Components/HeaderNav.vue';
import About from '@/Components/About.vue';
import Resume from '@/Components/Resume.vue';
import Skills from '@/Components/Skills.vue';
import Contact from '@/Components/Contact.vue';
import Footer from '@/Components/Footer.vue';

defineProps({
  biographyText: String,
  required: true
});

const fontMainClass = 'text-floral-white-500 font-semibold text-sm leading-5'

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
  <div class="max-w-fit min-h-screen h-full bg-black-magic-500 overflow-hidden" :class="fontMainClass">
    <div id="home-container" class="w-screen">
      <div class="h-16 flex align-middle justify-items self-center items-center border-b border-space-shuttle-500">

        <!-- EMBLEM -->
        <div class="w-16 sm:w-64 h-16 flex align-middle justify-items self-center items-center text-center">
          <div class="w-full sm:hidden">J.C.</div>
          <div class="w-full hidden sm:block">JOSEPH COLLIER</div>
        </div>

        <div class="grow flex justify-around overflow-y-hidden text-center">
          <div>about</div>
          <div>skills</div>
          <div>resume</div>
          <div>github</div>
          <div>contact</div>
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
