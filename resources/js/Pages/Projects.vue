<script setup>
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
import Nav from '@/Components/Nav.vue';
import PortfolioMasthead from '@/Components/Projects/PortfolioMasthead.vue';
import FeaturedProject from '@/Components/Projects/FeaturedProject.vue';
import ProjectCard from '@/Components/Projects/ProjectCard.vue';
import Footer from '@/Components/Footer.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const featured = computed(() => props.projects[0]);
const rest = computed(() => props.projects.slice(1));
</script>

<template>
  <Head title="Projects" />

  <div class="max-w-fit min-h-screen bg-bg">
    <div class="w-screen">
      <Nav active="projects" base-path="/" />

      <PortfolioMasthead />

      <FeaturedProject v-if="featured" :project="featured" />

      <section class="px-4 py-8 sm:px-7 sm:py-10">
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard v-for="project in rest" :key="project.title" :project="project" />
        </div>
      </section>

      <Footer />
    </div>
  </div>
</template>
