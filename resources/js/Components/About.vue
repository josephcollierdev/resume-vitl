<script setup>
defineProps({
  biographyText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section
    id="about"
    class="border-b border-border scroll-mt-16 px-4 py-6 sm:px-7 sm:py-10"
  >
    <!-- Eyebrow -->
    <div
      class="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent"
    >
      about me
    </div>

    <!-- Two-column grid -->
    <div
      class="grid items-start gap-5 grid-cols-1 sm:grid-cols-[1fr_180px]"
    >
      <!-- Bio card -->
      <div
        class="rounded-xl border border-border bg-bg-surface px-6 py-[22px] text-[13px] leading-[1.75] text-text-secondary"
        v-html="biographyText"
      />

      <!-- Avatar card -->
      <div
        class="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-bg-surface px-4 py-6"
      >
        <!-- Avatar circle -->
        <div
          class="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-accent-deep bg-accent-dim text-2xl font-bold text-accent"
        >
          J
        </div>
        <!-- Name -->
        <div class="text-center text-[13px] font-semibold text-text-primary">
          joseph collier
        </div>
        <!-- Location -->
        <div class="flex items-center gap-2 text-[11px] text-text-tertiary">
          <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
          Brooklyn, NY
        </div>
      </div>
    </div>
  </section>
</template>
