<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="border-b border-border px-4 py-8 sm:px-7 sm:py-10">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-[1.1fr_1fr] sm:items-center">
      <div
        v-if="project.image"
        class="aspect-[16/10] w-full overflow-hidden rounded-lg border border-border"
      >
        <img :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
      </div>
      <div
        v-else
        class="flex aspect-[16/10] w-full items-center justify-center rounded-lg border border-border bg-gradient-to-br from-bg-raised to-bg-surface text-[11px] text-text-tertiary"
      >
        Photo placeholder — 16:10
      </div>

      <div>
        <div class="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-teal">
          {{ project.category }} · {{ project.date }}
        </div>
        <h2 class="font-resume text-[28px] leading-[1.2] text-text-primary sm:text-[32px]">
          {{ project.title }}
        </h2>
        <p class="mt-3 font-resume text-[15px] leading-[1.7] text-text-secondary">
          {{ project.deck }}
        </p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full border border-border-strong bg-bg-raised px-3 py-1 font-mono text-[11px] text-text-secondary"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
