<script setup>
  import { onMounted } from 'vue';

  const props = defineProps({
    biographyText: {
      type: String,
      required: true
    },
    sectionHeaderContainerClass: {
      type: String,
      required: true
    },
    sectionHeaderClass: {
      type: String,
      required: true
    },
    subContainerContentStylingClass: {
      type: String,
      required: true
    },
    subContainerContentSpacerClass: {
      type: String,
      required: true
    },
    subContainerStylingClass: {
      type: String,
      required: true
    }
  });

  onMounted(() => {
      const sectionHeaderContainerClass = props.sectionHeaderContainerClass
      const sectionHeaderClass = props.sectionHeaderClass
      const subContainerContentStylingClass = props.subContainerContentStylingClass
      const subContainerContentSpacerClass = props.subContainerContentSpacerClass
      const subContainerStylingClass = props.subContainerStylingClass
  });
</script>

<template>
  <div>
    <div id="section-about" :class="sectionHeaderContainerClass">
      <div :class="sectionHeaderClass">ABOUT ME</div>
    </div>

    <div :class="subContainerStylingClass" class="w-full min-h-64 m-auto">
      <div
        :class="subContainerContentStylingClass"
        class="text-left h-full font-inder"
        v-html="biographyText"/>
      <div :class="subContainerContentSpacerClass"></div>
      <div
        alt="Background image is a photo of Joseph Collier."
        :class="subContainerContentStylingClass"
        class="h-64 sm:h-96 flex text-center align-middle justify-center justify-items self-center items-center bg-[url('/build/storage/app/public/images/me_01.webp')]
        bg-cover bg-no-repeat bg-center opacity-50 blur-[2px] sepia-[.25] hover:blur-none saturate-50 hover:saturate-100 hue-rotate-180 hover:hue-rotate-30 transition-all duration-700
        ">
        <div class="h-auto opacity-5">JOSEPH COLLIER</div>
      </div>
    </div>
  </div>
</template>
