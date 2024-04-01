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
    subContainerStylingClass: {
      type: String,
      required: true
    },
    verticalAlignClass: {
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
      const verticalAlignClass = props.verticalAlignClass
  });
</script>

<template>
  <div class="min-h-lvh">
    <div id="section-contact" :class="sectionHeaderContainerClass">
      <div :class="sectionHeaderClass">CONTACT</div>
    </div>

    <div :class="subContainerStylingClass" class="w-3/4 min-h-64 m-auto border-b-0">
      <div :class="subContainerContentStylingClass">
        <div>Feel free to send any questions or inquiries to me here, via email:<br /><br /></div>
        <p><a class="md:hover:text-lg hover:tracking-widest transition-all duration-500 ease-in-out" href="mailto:josephcollier.contact@gmail.com">josephcollier.contact@gmail.com</a></p>
        <div class="flex p-16 m-auto w-full justify-center">
          <div class="flex w-64 h-64 border" :class="verticalAlignClass">
            <div class="text-4xl" :class="verticalAlignClass">JOSEPH COLLIER</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

