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
  <div>
    <div id="section-resume" :class="sectionContainerClass">
      <div :class="sectionHeaderClass">RESUME</div>
    </div>

    <div :class="subContainerStylingClass" class="w-full min-h-64 m-auto">
      <div
        :class="subContainerContentStylingClass"
        class="w-full flex text-center align-middle justify-center justify-items self-center items-center
        ">
        <div class="flex flex-col text-center h-auto p-12 bg-floral-white-500">
          <div class="w-full">
            <img src="/build/storage/app/public/images/resume-2024-r2-1.webp" alt="Resume Page 1" class="w-3/4 m-auto h-full" />
          </div>
          <div class="w-full">
            <img src="/build/storage/app/public/images/resume-2024-r2-2.webp" alt="Resume Page 2" class="w-3/4 m-auto h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
