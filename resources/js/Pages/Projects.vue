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
      <a
        href="#main"
        class="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[60] focus:m-2 focus:rounded focus:bg-bg-raised focus:px-3 focus:py-2 focus:text-text-primary"
      >
        Skip to content
      </a>

      <Nav active="projects" base-path="/" />

      <main id="main" tabindex="-1">
        <PortfolioMasthead />

        <FeaturedProject v-if="featured" :project="featured" />

        <section class="px-4 py-8 sm:px-7 sm:py-10">
          <h2 class="sr-only">More projects</h2>
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard v-for="project in rest" :key="project.title" :project="project" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  </div>
</template>
