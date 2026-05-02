<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';
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

const activeSection = ref('');

onMounted(() => {
  const sections = ['about', 'resume', 'skills', 'contact'];
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

      <!-- HEADER -->
      <nav
        class="sticky top-0 z-50 flex h-[60px] items-center border-b border-border bg-bg px-7"
      >
        <!-- Logo -->
        <span
          class="mr-auto text-base font-bold tracking-tight text-text-primary"
        >
          <span class="sm:hidden">J.C.</span>
          <span class="hidden sm:inline"
            >joseph<span class="text-accent">.</span>collier</span>
        </span>

        <!-- Nav links -->
        <div class="flex items-center gap-1">
          <a
            v-for="link in [
              { label: 'about', href: '#about' },
              { label: 'resume', href: '#resume' },
              { label: 'skills', href: '#skills' },
              { label: 'contact', href: '#contact' },
            ]"
            :key="link.label"
            :href="link.href"
            class="rounded-md px-3.5 py-1.5 text-[13px] transition-all duration-150"
            :class="
              activeSection === link.label
                ? 'bg-bg-raised text-text-primary'
                : 'text-text-secondary hover:bg-bg-raised hover:text-text-primary'
            "
          >
            {{ link.label }}
          </a>
          <a
            href="https://github.com/josephcollierdev"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-md px-3.5 py-1.5 text-[13px] transition-all duration-150 text-text-secondary hover:bg-bg-raised hover:text-text-primary"
          >
            github
          </a>
        </div>
      </nav>

      <!-- ABOUT ME -->
      <About :biographyText="biographyText" />

      <!-- Resume -->
      <Resume :resume-url="resumeUrl ?? null" />

      <!-- SKILLS -->
      <Skills :skills-data="skillsData" />

      <!-- CONTACT -->
      <Contact />

      <Footer />
    </div>
  </div>
</template>
