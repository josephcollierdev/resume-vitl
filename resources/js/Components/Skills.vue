<script setup>
defineProps({
  skillsData: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <section
    id="skills"
    class="border-b border-border scroll-mt-16 px-4 py-6 sm:px-7 sm:py-10"
  >
    <!-- Eyebrow -->
    <div
      class="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent"
    >
      skills
    </div>

    <!-- Skill group cards -->
    <div
      v-for="group in skillsData"
      :key="group.label"
      class="mb-3.5 rounded-xl border border-border bg-bg-surface px-5 py-[18px]"
    >
      <!-- Group label -->
      <div
        class="mb-3 text-[11px] font-semibold tracking-[0.03em] text-text-secondary"
      >
        {{ group.label }}
      </div>

      <!-- Pills -->
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="skill in group.items"
          :key="skill"
          class="cursor-default rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-150"
          :class="
            group.teal
              ? 'border border-teal-border bg-teal-dim text-teal hover:bg-teal-border hover:text-white'
              : 'border border-accent-deep bg-accent-dim text-accent hover:bg-accent-deep hover:text-white'
          "
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>
