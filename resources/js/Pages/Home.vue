<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';
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

onMounted(() => {
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
  <div class="max-w-fit min-h-screen bg-bg">
    <div id="home-container" class="w-screen">
      <Nav :active="activeSection" />

      <Hero :resume-url="resumeUrl ?? null" />

      <!-- Resume -->
      <Resume :resume-url="resumeUrl ?? null" />

      <!-- SKILLS -->
      <Skills :skills-data="skillsData" />

      <!-- ABOUT ME -->
      <About :biographyText="biographyText" />

      <!-- CONTACT -->
      <Contact />

      <Footer />
    </div>
  </div>
</template>
