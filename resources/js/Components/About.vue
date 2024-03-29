<script setup>
  defineProps({
    biographyText: String,
    required: true
  });
</script>

<template>
  <div>
    <div id="section-about" class="scroll-my-52 lg:scroll-my-36">
      <div class="w-full text-center text-4xl bg-floral-white-500 pt-6">ABOUT ME</div>
      <div class="bg-floral-white-500 pb-6 w-full">
        <div class="flex flex-col lg:flex-row text-center w-full h-[880px]">

          <div class="h-full w-full lg:w-2/5 flex align-middle justify-center p-auto m-auto place-items-center">
            <div class="w-full h-[24rem] lg:h-[30rem] px-10" v-html="biographyText" />
          </div>

          <div class="h-full w-3/5 flex align-middle justify-center p-auto m-auto place-items-center">
            <div class="w-full h-[24rem] lg:h-[30rem] bg-[url('/storage/images/me_01.jpeg')] bg-contain lg:bg-cover bg-no-repeat bg-center opacity-75 blur-[2px] sepia-[.25] hover:blur-none saturate-50 hover:saturate-100 hue-rotate-180 hover:hue-rotate-30 transition-all duration-700">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
