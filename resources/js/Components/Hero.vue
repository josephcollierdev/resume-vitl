<script setup>
defineProps({
  resumeUrl: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <section class="border-b border-border px-4 py-10 sm:px-7 sm:py-16">
    <div
      class="mb-5 flex w-fit items-center gap-2 rounded-full border border-teal-border bg-teal-dim px-3 py-1"
    >
      <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
      <span class="text-[11px] font-medium text-teal">
        Available for projects &amp; remote work
      </span>
    </div>

    <h1 class="font-resume text-[40px] leading-[1.1] text-text-primary sm:text-[56px]">
      Joseph Collier
    </h1>
    <p class="mt-2 text-[15px] text-text-secondary sm:text-base">
      Full-Stack Developer &amp; Software Engineer
      <span class="text-text-tertiary">— Brooklyn, NY</span>
    </p>

    <div class="mt-7 flex flex-wrap gap-3">
      <a
        :href="resumeUrl ?? '#resume'"
        :download="resumeUrl ? '' : null"
        class="rounded-lg border border-border-strong px-5 py-2.5 text-[13px] font-semibold text-text-primary transition-colors duration-150 hover:bg-bg-raised"
      >
        Download Resume
      </a>
    </div>
  </section>
</template>
