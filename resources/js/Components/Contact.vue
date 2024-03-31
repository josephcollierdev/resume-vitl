<script setup>
  import { onMounted } from 'vue';

  const props = defineProps({
    sectionContainerClass: {
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
      const sectionContainerClass = props.sectionContainerClass
      const sectionHeaderClass = props.sectionHeaderClass
      const subContainerContentStylingClass = props.subContainerContentStylingClass
      const subContainerContentSpacerClass = props.subContainerContentSpacerClass
      const subContainerStylingClass = props.subContainerStylingClass
  });
</script>

<template>
  <div class="min-h-lvh">
    <div id="section-contact" :class="sectionContainerClass">
      <div :class="sectionHeaderClass">CONTACT</div>
    </div>

    <div :class="subContainerStylingClass" class="w-3/4 min-h-64 m-auto border-b-0">
      <div :class="subContainerContentStylingClass">
        <div>Feel free to send any questions or inquiries to me here, via email:<br /><br /></div>
        <p><a class="md:hover:text-lg hover:tracking-widest transition-all duration-500 ease-in-out" href="mailto:josephcollier.contact@gmail.com">josephcollier.contact@gmail.com</a></p>
      </div>
    </div>
  </div>
</template>

