<template>
  <section
    id="contact"
    class="min-h-[280px] scroll-mt-16 px-4 py-6 sm:px-7 sm:py-10"
  >
    <!-- Eyebrow -->
    <div
      class="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent"
    >
      contact
    </div>

    <!-- Status bar -->
    <div
      class="mb-5 flex items-center gap-2 rounded-lg border border-teal-border bg-teal-dim px-4 py-2.5"
    >
      <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
      <span class="text-xs font-medium text-teal">
        Available for projects &amp; remote work
      </span>
    </div>

    <!-- Two-column grid -->
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <!-- Email card -->
      <div class="rounded-xl border border-border bg-bg-surface p-6">
        <div
          class="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-tertiary"
        >
          Email
        </div>
        <a
          href="mailto:josephcollier.contact@gmail.com"
          class="border-b border-accent-deep pb-0.5 text-[13px] tracking-[0.02em] text-accent no-underline transition-colors duration-150 hover:text-text-primary"
        >
          josephcollier.contact@gmail.com
        </a>
      </div>

      <!-- Logo card -->
      <div
        class="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-bg-surface p-6"
      >
        <div class="text-xl font-bold text-text-primary">
          josephcollier<span class="text-accent">.</span>dev
        </div>
        <div class="text-[11px] tracking-[0.08em] text-text-tertiary">
          Brooklyn · NYC
        </div>
      </div>
    </div>
  </section>
</template>
