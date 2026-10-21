<script setup>
import VueEasyLightbox from 'vue-easy-lightbox/external-css';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';
import { ref } from 'vue';

defineProps({
  resumeUrl: {
    type: String,
    default: null,
  },
});

const imgs = [
  '/build/storage/app/public/images/resume-2024-r2-1_medium.webp',
  '/build/storage/app/public/images/resume-2024-r2-2_medium.webp',
];

const visibleRef = ref(false);
const indexRef = ref(0);

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};
</script>

<template>
  <section
    id="resume"
    class="border-b border-border scroll-mt-16 px-4 py-6 sm:px-7 sm:py-10"
  >
    <!-- Eyebrow -->
    <h2
      class="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent"
    >
      resume
    </h2>

    <!-- Outer container -->
    <div
      class="flex flex-col items-center gap-5 rounded-xl border border-border bg-bg-surface p-7"
    >
      <!-- Paper frames -->
      <button
        v-for="(src, i) in imgs"
        :key="i"
        type="button"
        :aria-label="`Enlarge résumé page ${i + 1}`"
        class="w-full cursor-pointer rounded-lg bg-[#faf9f7] p-2 sm:max-w-[440px]"
        @click="showImg(i)"
      >
        <img
          :src="src"
          :alt="`Résumé — page ${i + 1}`"
          class="block h-auto w-full rounded"
        />
      </button>

      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgs"
        :index="indexRef"
        @hide="onHide"
      />

      <!-- Download link -->
      <a
        v-if="resumeUrl"
        :href="resumeUrl"
        download
        class="text-[13px] text-accent"
      >
        Download PDF
      </a>
    </div>
  </section>
</template>
