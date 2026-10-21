<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref, onMounted, nextTick } from 'vue';
import Nav from '@/Components/Nav.vue';
import Hero from '@/Components/Hero.vue';
import About from '@/Components/About.vue';
import Resume from '@/Components/Resume.vue';
import Skills from '@/Components/Skills.vue';
import Contact from '@/Components/Contact.vue';
import Footer from '@/Components/Footer.vue';

defineProps({
  biographyText: {
    type: String,
    required: true,
  },
  skillsData: {
    type: Array,
    required: true,
  },
  resumeUrl: {
    type: String,
    default: null,
  },
});

const activeSection = ref('resume');

onMounted(async () => {
  // The browser tries to jump to the URL hash before Vue has mounted these sections, so a link
  // like /#resume (e.g. from the Projects page's nav) silently fails to scroll. Do it ourselves
  // once mounted, waiting a frame for layout (images, fonts) to settle first.
  if (window.location.hash) {
    await nextTick();
    requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ block: 'start' });
    });
  }

  const sections = ['resume', 'skills', 'about', 'contact'];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id;
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
</script>

<template>
  <Head title="Full-Stack Developer &amp; Software Engineer" />

  <div class="max-w-fit min-h-screen bg-bg">
    <div id="home-container" class="w-screen">
      <a
        href="#main"
        class="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[60] focus:m-2 focus:rounded focus:bg-bg-raised focus:px-3 focus:py-2 focus:text-text-primary"
      >
        Skip to content
      </a>

      <Nav :active="activeSection" />

      <main id="main" tabindex="-1">
        <Hero :resume-url="resumeUrl ?? null" />

        <!-- Resume -->
        <Resume :resume-url="resumeUrl ?? null" />

        <!-- SKILLS -->
        <Skills :skills-data="skillsData" />

        <!-- ABOUT ME -->
        <About :biographyText="biographyText" />

        <!-- CONTACT -->
        <Contact />
      </main>

      <Footer />
    </div>
  </div>
</template>
