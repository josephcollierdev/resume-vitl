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
      class="grid items-start gap-5 grid-cols-1 sm:grid-cols-[1fr_220px]"
    >
      <!-- Bio card -->
      <div
        class="rounded-xl border border-border bg-bg-surface px-6 py-[22px] font-resume text-[15px] leading-[1.7] text-text-secondary"
        v-html="biographyText"
      />

      <!-- Facts card (Hero already carries the name/avatar, so this stays quick facts only) -->
      <div
        class="flex flex-col gap-3.5 rounded-xl border border-border bg-bg-surface px-4 py-5 text-[12px]"
      >
        <div>
          <div class="mb-1 text-[10px] uppercase tracking-[0.08em] text-text-tertiary">
            Location
          </div>
          <div class="text-text-primary">Brooklyn, NY</div>
        </div>
        <div>
          <div class="mb-1 text-[10px] uppercase tracking-[0.08em] text-text-tertiary">
            Focus
          </div>
          <div class="text-text-primary">Fullstack &amp; Cybersecurity</div>
        </div>
        <div>
          <div class="mb-1 text-[10px] uppercase tracking-[0.08em] text-text-tertiary">
            Currently
          </div>
          <div class="text-text-primary">Studying network security</div>
        </div>
      </div>
    </div>
  </section>
</template>
