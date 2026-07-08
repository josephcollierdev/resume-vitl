<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="rounded-xl border border-border bg-bg-surface p-5">
    <div
      v-if="project.image"
      class="mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg border border-border"
    >
      <img :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
    </div>
    <div
      v-else
      class="mb-4 flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-border bg-gradient-to-br from-bg-raised to-bg-surface text-[11px] text-text-tertiary"
    >
      Photo placeholder
    </div>

    <div class="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-teal">
      {{ project.category }} · {{ project.date }}
    </div>
    <h3 class="font-resume text-[19px] leading-[1.3] text-text-primary">
      {{ project.title }}
    </h3>
    <p class="mt-2 font-resume text-[13px] leading-[1.6] text-text-secondary">
      {{ project.deck }}
    </p>
    <div class="mt-3 flex flex-wrap gap-1.5">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="rounded-full border border-border-strong bg-bg-raised px-2.5 py-0.5 font-mono text-[10px] text-text-secondary"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
