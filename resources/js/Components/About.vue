<script setup>
  defineProps({
    biographyText: String,
    required: true
  });
</script>

<template>
  <div>
    <div id="section-about" class="scroll-my-32">
      <div class="w-full text-center text-4xl bg-floral-white-500 hidden">&nbsp;</div>
      <div class="bg-floral-white-500 pb-6 w-full">
        <div class="flex text-center w-full h-[880px]">

          <div class="h-full w-2/5 flex align-middle justify-center p-auto m-auto place-items-center">
            <div class="w-full h-[24rem] lg:h-[30rem] px-10">
              1{{  biographyText  }}2
              Hi, i'm Joseph! <br />
              Welcome to my website. <br /> <br />

              A little bit about me, I am a fullstack developer and technology professional from NYC! Raised in Queens and living in Brooklyn, but i'm always down to travel or work remotely. <br /> <br />

              Here, you will find a list of jobs that i've held along with a brief outlook of my skills. I primarily work as a software engineer with various web applications, with a little bit of "devops" mixed in. Currently, I am studying cybersecurity as I work to enhance my skills as a developer.<br /> <br />

              Outside of work, I enjoy cooking, gardening (mostly hot peppers), spending time with my friends; and as I progress through my 30s, I have become more interested in physical fitness. <br /> <br />

              Feel free to check out my resume, my skills, and to contact me if you have any questions or would like to work together on projects and tackle challenging tasks. <br /> <br />
            </div>
          </div>

          <div class="h-full w-3/5 flex align-middle justify-center p-auto m-auto place-items-center">
            <div class="w-full h-[24rem] lg:h-[30rem] bg-[url('/storage/images/me_01.jpeg')] bg-contain lg:bg-cover bg-no-repeat bg-center opacity-75 blur-[2px] sepia-[.25] hover:blur-none saturate-50 hover:saturate-100 hue-rotate-180 hover:hue-rotate-30 transition-all duration-700">
              &nbsp;
            </div>
          </div>

          <div class="w-full lg:w-1/3 block lg:hidden">Bio</div>
        </div>
      </div>
    </div>
  </div>
</template>
