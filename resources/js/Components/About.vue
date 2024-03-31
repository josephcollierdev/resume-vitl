<script setup>
  import { onMounted } from 'vue';

  const props = defineProps({
    biographyText: {
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
      const subContainerContentStylingClass = props.subContainerContentStylingClass
      const subContainerContentSpacerClass = props.subContainerContentSpacerClass
      const subContainerStylingClass = props.subContainerStylingClass
  });
</script>

<template>
  <div>
    <div
      class="w-full h-16 m-auto flex flex-col text-center align-middle justify-center justify-items self-center items-center border-b border-space-shuttle-500">
      <div class="w-full">ABOUT ME</div>
    </div>

    <div :class="subContainerStylingClass" class="w-full min-h-64 p-4 m-auto">
      <div :class="subContainerContentStylingClass" class="text-left h-full font-inder">
        Hi, i'm Joseph! Welcome to my website. <br /> <br />

        A little bit about me, I am a fullstack developer and technology professional from NYC! Raised in Queens and living
        in Brooklyn, but i'm always down to travel or work remotely. <br /> <br />

        Here, you will find a list of jobs that i've held along with a brief outlook of my skills. I primarily work as a sof
        tware engineer with various web applications, with a little bit of "devops" mixed in. Currently, I am studying cybersecurity as I work to enhance my skills as a developer.<br /> <br />

        Outside of work, I enjoy cooking, gardening (mostly hot peppers), spending time with my friends; and as I progress t
        hrough my 30s, I have become more interested in physical fitness. <br /> <br />

        Feel free to check out my resume, my skills, and to contact me if you have any questions or would like to work toget
        her on projects and tackle challenging tasks.
      </div>
      <div :class="subContainerContentSpacerClass"></div>
      <div
        :class="subContainerContentStylingClass"
        class="h-64 sm:h-96 flex text-center align-middle justify-center justify-items self-center items-center bg-[url('/build/storage/app/public/images/me_01.jpeg')]
        bg-cover bg-no-repeat bg-center opacity-50 blur-[2px] sepia-[.25] hover:blur-none saturate-50 hover:saturate-100 hue-rotate-180 hover:hue-rotate-30 transition-all duration-700
        ">
        <div class="h-auto opacity-5">JOSEPH COLLIER</div>
      </div>
    </div>
  </div>
</template>
