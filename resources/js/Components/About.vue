<script setup>
  defineProps({
    biographyText: String,
    required: true
  });
</script>

<template>
  <div>
    <div id="section-about" class="scroll-my-52 md:scroll-my-36">
      <div class="w-full text-center text-4xl bg-floral-white-500 pt-6">ABOUT ME</div>
      <div class="bg-floral-white-500 md:pb-6 w-full">
        <div class="flex flex-col md:flex-row text-center w-full h-[1260px] md:h-auto md:py-12">

          <div class="h-auto w-full md:w-2/5 flex align-middle justify-center justify-items-center justify-self-center items-center self-center align-center p-auto m-auto">
            <div class="w-full h-[32rem] md:h-auto px-10" v-html="biographyText" />
          </div>

          <div class="h-full w-full md:w-3/5 flex align-middle justify-center p-auto m-auto place-items-center">
            <div class="w-full h-[24rem] md:h-[30rem] bg-[url('/build/storage/app/public/images/me_01.jpeg')] bg-contain md:bg-cover bg-no-repeat bg-center opacity-75 blur-[2px] sepia-[.25] hover:blur-none saturate-50 hover:saturate-100 hue-rotate-180 hover:hue-rotate-30 transition-all duration-700">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
