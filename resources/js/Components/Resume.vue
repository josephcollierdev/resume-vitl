<script setup>
  import { onMounted } from 'vue';
  import VueEasyLightbox from 'vue-easy-lightbox/external-css'
  import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'
  import { ref } from 'vue';

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

  const visibleRef = ref(false)
  const indexRef = ref(0)
  const imgs = [
    '/build/storage/app/public/images/resume-2024-r2-1.webp',
    '/build/storage/app/public/images/resume-2024-r2-2.webp'
  ]
  const showImg = (index) => {
    indexRef.value = index
    visibleRef.value = true
  }
  const onHide = () => visibleRef.value = false

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
            2
            <div class="">
              <div v-for="(src, index) in imgs" :key="index" class="pic" @click="() => showImg(index)">
                <img :src="src" class="w-3/4 m-auto h-full"/>
              </div>
            </div>
            <vue-easy-lightbox :visible="visibleRef" :imgs="imgs" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
            2
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
