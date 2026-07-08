<script setup>
defineProps({
  active: {
    type: String,
    default: '',
  },
  // '' when rendered on Home.vue (in-page anchors work as-is); '/' when rendered on a page other
  // than Home.vue, so section links become real navigations back to the anchor on Home.
  basePath: {
    type: String,
    default: '',
  },
});

const sectionLinks = ['resume', 'skills', 'about'];
</script>

<template>
  <nav
    class="sticky top-0 z-50 flex h-[60px] items-center border-b border-border bg-bg pl-7 pr-11"
  >
    <div class="ml-auto flex items-center gap-1">
      <a
        v-for="label in sectionLinks"
        :key="label"
        :href="`${basePath}#${label}`"
        class="rounded-md px-3.5 py-1.5 text-[13px] transition-all duration-150"
        :class="
          active === label
            ? 'bg-bg-raised text-text-primary'
            : 'text-text-secondary hover:bg-bg-raised hover:text-text-primary'
        "
      >
        {{ label }}
      </a>
      <a
        href="/projects"
        class="rounded-md px-3.5 py-1.5 text-[13px] transition-all duration-150"
        :class="
          active === 'projects'
            ? 'bg-bg-raised text-text-primary'
            : 'text-text-secondary hover:bg-bg-raised hover:text-text-primary'
        "
      >
        projects
      </a>
      <a
        :href="`${basePath}#contact`"
        class="rounded-md px-3.5 py-1.5 text-[13px] transition-all duration-150"
        :class="
          active === 'contact'
            ? 'bg-bg-raised text-text-primary'
            : 'text-text-secondary hover:bg-bg-raised hover:text-text-primary'
        "
      >
        contact
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
</template>
