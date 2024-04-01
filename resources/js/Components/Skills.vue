<script setup>
  import { onMounted } from 'vue';

  const props = defineProps({
    skillsData: {
        type: Object,
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
    },
    verticalAlignClass: {
      type: String,
      required: true
    }
  });
</script>

<template>
  <div>
    <div id="section-skills" :class="sectionHeaderContainerClass">
      <div :class="sectionHeaderClass">SKILLS</div>
    </div>
    <div :class="subContainerStylingClass" class="w-full min-h-64 m-auto">
      <div v-for="skillSection in skillsData" class="w-full">
        <div class="w-full text-left mb-1">{{ skillSection.label }}</div>
        <div
          class="w-full py-4 overflow-scroll border border-space-shuttle-500 rounded-md text-left h-full font-inder flex md:flex-row justify-start p-2 md:p-4">
          <div v-for="skill in skillSection.items" :class="verticalAlignClass" class="text-center p-1 md:px-4 border border-space-shuttle-500 rounded-md md:rounded lg:rounded-lg mx-1 md:mx-4 text-xs md:text-lg font-medium overflow-hidden bg-floral-white-500 text-black-magic-600">
            {{ skill }}
          </div>
        </div>
        <div :class="subContainerContentSpacerClass"></div>
      </div>
    </div>
  </div>
</template>