<script setup>
  import { onMounted } from 'vue';

  const props = defineProps({
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
    footerStylingClass: {
      type: String,
      required: true
    }
  });

  onMounted(() => {
      const sectionHeaderContainerClass = props.sectionHeaderContainerClass
      const sectionHeaderClass = props.sectionHeaderClass
      const subContainerContentStylingClass = props.subContainerContentStylingClass
      const subContainerContentSpacerClass = props.subContainerContentSpacerClass
      const footerStylingClass = props.footerStylingClass
  });
</script>

<template>
  <div class="w-full z-50 bg-black-magic-500 lg:fixed lg:bottom-0">
    <div :class="footerStylingClass" class="border-t border-space-shuttle-500 py-4 text-center">
      <div>© 2024 <div class="hidden">music</div> Joseph Collier</div>
    </div>
  </div>
</template>

